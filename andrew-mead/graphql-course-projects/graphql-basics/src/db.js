const users = [{
    id: '1',
    name: 'Beto',
    email: 'beto@example.com',
    age: 33
}, {
    id: '2',
    name: 'Kiwi',
    email: 'kiwi@example.com',
    age: 29
}, {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
}];

const posts = [{
    id: '1',
    title: 'How to learn Graphql',
    body: 'You will need a course for this.',
    published: false,
    author: '1'
}, {
    id: '2',
    title: 'How to Learn Javascript',
    body: 'Javascript is great. Learn arrow functions first.',
    published: true,
    author: '2'
}, {
    id: '3',
    title: 'Find a remote job',
    body: 'You have to get a linkedin account',
    published: false,
    author: '2'
}];

const comments = [{
    id: '1',
    text: 'thank you very much! this is great!',
    post: '1',
    author: '1'
}, {
    id: '2',
    text: 'You are welcome!',
    post: '1',
    author: '2'
}, {
    id: '3',
    text: 'this is great!',
    post: '2',
    author: '3'
}, {
    id: '4',
    text: 'thanks for your feedback!',
    post: '3',
    author: '1'
}];

const db = {
    users,
    posts,
    comments
}

export { db as default }