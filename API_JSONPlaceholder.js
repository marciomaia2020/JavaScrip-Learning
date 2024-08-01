document.getElementById('fetchData').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const output = document.getElementById('output');
            output.innerHTML = ''; // Limpa o conteúdo anterior
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
                output.appendChild(postElement);
            });
        })
        .catch(error => console.error('Erro:', error));
});
