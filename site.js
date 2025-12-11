const vue_app = Vue.createApp({
  created() {
    // Fetch movies.json when page loads
    fetch('movies.json')
      .then(response => response.json())
      .then(json => { this.movies = json });
  },
  data() {
    return {
      movies: [],
      currentIndex: 0,           // Track which movie is currently shown
      title: "My Movie Carousel",
      owner: "Christopher Loiacono",
      github: "https://github.com/526cloiacono",
    };
  },
  computed: {
    // Return the currently active movie
    currentMovie() {
      return this.movies[this.currentIndex];
    }
  },
  methods: {
    // Convert date array to human-readable string
    makeTextDate(dateArray) {
      const months = ["January","February","March","April","May","June",
                      "July","August","September","October","November","December"];
      return months[dateArray[1]-1] + " " + dateArray[2] + ", " + dateArray[0];
    },
    // Convert runtime minutes to hours + minutes
    timeText(minutes) {
      let hrs = Math.floor(minutes/60);
      let mins = minutes % 60;
      return hrs + "h " + mins + "min";
    },
    // Change to next poster of current movie
    posterClick() {
      let movie = this.currentMovie;
      movie.posterindex = (movie.posterindex + 1) % movie.posters.length;
    },
    // Increment likes for current movie
    like() { this.currentMovie.likes++; },
    // Increment dislikes for current movie
    dislike() { this.currentMovie.dislikes++; },
    // Show next movie in carousel
    nextMovie() { this.currentIndex = (this.currentIndex + 1) % this.movies.length; },
    // Show previous movie in carousel
    prevMovie() { this.currentIndex = (this.currentIndex - 1 + this.movies.length) % this.movies.length; },
  }
});

vue_app.mount("#vue_app");
