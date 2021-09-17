document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
});

function updatePosts() {
    fetch('http://192.168.0.57:3000/api/all')
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            let postElements = '';

            let posts = JSON.parse(json);
            posts.forEach((post) => {
                let postElement = `<div class="card mb-2 bg-warning" id="${post.id}">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                    <button class="garbageCan" id="${post.id}" onclick="deletePost(this.id)"><img src="./img/garbageCan.png" alt="excluir" /></button>
                </div>
                <div class="card-body">
                    <div class="card-text">${post.desc}</div>
                </div>
            </div>`;

                postElements += postElement;
            });

            document.getElementById('posts').innerHTML = postElements;
        });
}

function newPost() {
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;

    if (!title || !desc) {
        alert('Preencha todos os campos');
    } else {
        let post = { title, desc };

        const options = { method: 'POST', headers: new Headers({ 'content-type': 'application/json' }), body: JSON.stringify(post) };

        fetch('http://192.168.0.57:3000/api/new', options).then((res) => {
            updatePosts();
            document.getElementById('title').value = '';
            document.getElementById('desc').value = '';
        });
    }
}

function deletePost(id) {
    fetch(`http://192.168.0.57:3000/api/delete/${id}`, { method: 'DELETE' }).then((res) => {
        updatePosts();
    });
}
