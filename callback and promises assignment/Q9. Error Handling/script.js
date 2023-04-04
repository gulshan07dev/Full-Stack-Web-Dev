fetch('https://jsonplaceholder.typicode.com/posts/123456789')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => {
        console.error(error);
        // display error message on webpage
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'An error occurred while fetching data from the API.';
        document.body.appendChild(errorMessage);
    });
