const Query = {
    users(parent, args, { db }, info) {
        if (!args.query) {
            return db.users
        }
        return db.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase());
        })
    },
    posts(parent, args, { db }, info) {
        if (!args.query) {
            return db.posts
        }
        return db.posts.filter((post) => {
            const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
            const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());

            return isTitleMatch || isBodyMatch;
        })
    },
    comments(parent, args, { db }, info) {
        if (!args.query) {
            return db.comments;
        }

        return db.comments.filter((comment) => {
            return comment.text.toLowerCase().includes(args.query.toLowerCase());
        })
    },
    me() {
        return {
            id: '123098',
            name: 'Beto',
            email: 'ex@hotmail.com',
            age: 33
        }
    },
    post() {
        return {
            id: '123123',
            title: 'This is the post title',
            body: 'Post Body',
            published: true
        }
    },
    comment() {
        return {
            id: '123',
            text: 'berlin',
            post: '1'
        }
    }
}

export { Query as default }