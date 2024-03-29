import "bootstrap/dist/css/bootstrap.min.css";

class NavJumbotron extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <h1 class="text-light mb-4">Welcome to Movie List</h1>
        <div class="mb-4 text-light">
          <p>Movie List is a website that is used to view a list of movies around the world both currently now playing and upcoming.</p>
          <p>Movie List uses API from TMDB (The Movie Database).</p>
        </div>
        <button type="button" class="px-4 py-2"><a class="text-decoration-none text-light fw-bold" href="#nowPlaying">Start Exploring</a></button>
      </div>
      `;
  }
}

customElements.define("nav-jumbotron", NavJumbotron);
