const apiKey = '52f13db2';

function fetchMovieDetails(input) {
    if (input === '') return;

    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(input)}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.Response === 'True') {
                displayMovieResults(data.Search);
            } else {
                displayErrorMessage(data.Error);
            }
        })
        .catch((error) => displayErrorMessage('An error occurred. Please try again later.'));
}

function displayMovieResults(movies) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = '';

    if (movies && movies.length > 0) {
        movies.forEach((movie) => {
            if (movie.Poster !== 'N/A') {
                const movieDiv = document.createElement('div');
                movieDiv.classList.add('movie');

                const moviePoster = document.createElement('img');
                moviePoster.src = movie.Poster;
                const poster = document.createElement('div');
                poster.classList.add('poster');
                poster.appendChild(moviePoster);
                movieDiv.appendChild(poster);

                const movieTitle = document.createElement('h2');
                movieTitle.textContent = movie.Title;
                movieDiv.appendChild(movieTitle);

                const watchBtn = document.createElement('button');
                watchBtn.textContent = 'Watch Movie';
                movieDiv.appendChild(watchBtn);

                movieContainer.appendChild(movieDiv);
            }
        });
    } else {
        displayErrorMessage('No movies found.');
    }
}

function displayErrorMessage(message) {
    alert(message);
}

document.getElementById('searchButton').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value.trim();
    fetchMovieDetails(searchInput);
});

document.getElementById('searchInput').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const searchInput = document.getElementById('searchInput').value.trim();
        fetchMovieDetails(searchInput);
    }
});

// Initially - by default show movies related to 'avenger'
fetchMovieDetails('avenger'); 