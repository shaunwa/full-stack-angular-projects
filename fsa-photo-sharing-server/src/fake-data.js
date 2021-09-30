const USER_ID_1 = 'mxfJ9qqsBwcFbbVWIVFTz6gpkw93';
const USER_ID_2 = 'IfjAHAEGdLU8bbGRS21nXWIPis23';
const USER_ID_3 = 'ZJAJ17iHV8etXGj2ktaldRO7f9d2';

module.exports.users = [{
    id: USER_ID_1,
    email: 'jim@gmail.com',
    fullName: 'Jim Smith',
}, {
    id: USER_ID_2,
    email: 'hannah@gmail.com',
    fullName: 'Hannah Jones',
}, {
    id: USER_ID_3,
    email: 'bill@gmail.com',
    fullName: 'Bill Gates',
}];

module.exports.photos = [{
    url: '/cat-photo.jpeg',
    title: 'My Cat',
    ownerId: USER_ID_1,
    sharedWith: [USER_ID_2],
}, {
    url: '/car-photo.jpeg',
    title: 'My Car',
    ownerId: USER_ID_2,
    sharedWith: [USER_ID_1],
}]; 