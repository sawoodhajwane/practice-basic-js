

  
  const apiKey = '2252a3c1'; 
    const movieInput = document.getElementById('movieName');
    const searchBtn = document.getElementById('searchBtn');
    const result = document.getElementById('result');


    const fetchMovies = async () => {
      const search = movieInput.value.trim();
      if (!search || search.length < 3) {
        alert("Please enter to search!");
        return;
      }

      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=${apiKey}`);
        const data = await response.json();
        result.innerHTML = "";

        if (data.Response === "True") {
          data.Search.forEach(movie => {
            const card = document.createElement('div');
            card.className = "movie-card";
            card.innerHTML = `
              <h3>${movie.Title} (${movie.Year})</h3>
              <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200'}" alt="${movie.Title}">
            `;
            result.appendChild(card);
          });
        } else {
          result.innerHTML = `<p>No movies found!</p>`;
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };


    searchBtn.addEventListener('click', fetchMovies);