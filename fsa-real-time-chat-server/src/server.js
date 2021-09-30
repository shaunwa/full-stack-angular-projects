import http from 'http';
import socketIo from 'socket.io';
import express from 'express';
import { listenerCreators } from './event-listeners';
import { routes, protectRoute } from './routes';
import { db, getConversation } from './db';

import * as admin from 'firebase-admin';
import credentials from './credentials.json';

admin.initializeApp({ credential: admin.credential.cert(credentials) });

const app = express();

app.use(express.json());

routes.forEach(route => {
	app[route.method](route.path, protectRoute, route.handler);
});

const server = http.createServer(app);
const io = socketIo(server, {
	cors: {
		origin: '*',
		methods: '*',
	},
});

io.use(async (socket, next) => {
	if (!socket.handshake.query || !socket.handshake.query.token) {
		socket.emit('error', 'You need to include an auth token');
	}

	const user = await admin.auth().verifyIdToken(
		socket.handshake.query.token,
	)
	socket.user = user;

	next();
});

io.on('connection', async (socket) => {
	const { conversationId } = socket.handshake.query;
	console.log('A new client connected to socket.io!');

	const conversation = await getConversation(conversationId);
	socket.join(conversation._id.toString());
	socket.emit('initialMessages', conversation.messages);

	listenerCreators.forEach(createListener => {
		const listener = createListener(socket, io);
		socket.on(listener.name, listener.handler);
	});

	socket.on('disconnect', () => {
		console.log('Client disconnected');
	})
});

const start = async () => {
	await db.connect('mongodb://localhost:27017');
	await server.listen(8080);
	console.log('Server is listening on port 8080')
}

start();