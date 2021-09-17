module.exports = {
    posts: [],

    getAll() {
        return this.posts;
    },

    newPost(title, desc) {
        this.posts.push({ id: gerarID(), title, desc });
    },

    deletePost(id) {
        this.posts.forEach((el) => {
            let indice = this.posts.indexOf(el);

            if (el.id == id) {
                this.posts.splice(indice, 1);
            }
        });
    },
};

function gerarID() {
    return Math.random().toString(36).substring(2, 9);
}
