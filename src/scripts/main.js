import Swal from "sweetalert2";

function main() {
  const getNowMovie = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=e9ee4c7369c700065eb1b587c9be47f6&language=en-US");
      const responseJson = await response.json();

      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderNowMovies(responseJson.results);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  getNowMovie();

  const renderNowMovies = (results) => {
    const listMovie = document.querySelector("#listMovie");
    listMovie.innerHTML = "";

    results.forEach((movie) => {
      listMovie.innerHTML += `
        <div class="card" style="width: 12rem">
          <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" class="card-img-top" alt="${movie.original_title}" />
          <div class="card-body">
            <h6 class="card-title">${movie.title}</h6>
            <p class="tanggal">${movie.release_date}</p>
            <p class="card-text">${movie.overview}</p>
          </div>
        </div>
      `;
    });
  };

  const getUpcomingMovie = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=e9ee4c7369c700065eb1b587c9be47f6&language=en-US");
      const responseJson = await response.json();

      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderUpcomingMovies(responseJson.results);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  getUpcomingMovie();

  const renderUpcomingMovies = (results) => {
    const listMovie = document.querySelector("#listUpcomingMovie");
    listMovie.innerHTML = "";

    results.forEach((movie) => {
      listMovie.innerHTML += `
        <div class="card" style="width: 12rem">
          <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" class="card-img-top" alt="${movie.original_title}" />
          <div class="card-body">
            <h6 class="card-title">${movie.title}</h6>
            <p class="tanggal">${movie.release_date}</p>
            <p class="card-text">${movie.overview}</p>
          </div>
        </div>
      `;
    });
  };

  const showResponseMessage = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong, Check your internet connection!",
    });
  };
}

export default main;
