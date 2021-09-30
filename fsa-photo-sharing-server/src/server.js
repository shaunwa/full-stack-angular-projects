import express from 'express';
import { routes } from './routes';
import { db } from './db';
import * as admin from 'firebase-admin';
import { protectRoute } from './routes/protectRoute';
import fileUpload from 'express-fileupload';
import credentials from './credentials.json';

admin.initializeApp({ credential: admin.credential.cert(credentials) });

const app = express();

app.use(express.static(__dirname + '/uploads/'));
app.use(fileUpload());
app.use(express.json());

routes.forEach(route => {
	app[route.method](route.path, protectRoute, route.handler);
});

const start = async () => {
	await db.connect('mongodb://localhost:27017');
	await app.listen(8080);
	console.log('Server is listening on port 8080')
}

start();