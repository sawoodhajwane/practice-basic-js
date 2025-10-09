const apikey = "2252a3c1";
const title = "x men";
fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apikey}`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
const btn = document.getElementById("search");

btn.addEventListener("click", () => {
  const movie = document.getElementById("movietitle").value;
  fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${apikey}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
});

const result = document.getElementById("result");
btn.addEventListener("click", async function movies() {
  const movien = document.getElementById("movietitle").value;

  let res = await fetch(
    `https://www.omdbapi.com/?t=${movien}&apikey=${apikey}`
  );
  let data = await res.json();
  if (data.Response === "True") {
     const filteredMovies = data.Search.filter(m => 
            m.Title.toLowerCase().includes(movie.toLowerCase())
          );

          if (filteredMovies.length === 0) {
            result.innerHTML = `<p>No movies found in titles!</p>`;
            return;
          }

          filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.style.width = '200px';
            movieCard.innerHTML = `
              <h3>${movie.Title} (${movie.Year})</h3>
              <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200'}" width="200">
            `;
            resultDiv.appendChild(movieCard);
          });
  } else {
    result.innerHTML = `<p>Movie Not Found</p>`;
  }
});

//search