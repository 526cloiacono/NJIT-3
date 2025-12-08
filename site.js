
const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created() {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
       data() {
            return {
                  // This holds your movies.json data.
                  movies: [],
                  title: "",
                  owner: "Christopher Loiacono",
                  github: "https://github.com/526cloiacono",
            

            }
      },
      methods: {
            makeTextDate(dateArray) {
                  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                  let year = dateArray[0];
                  let month = months[dateArray[1] - 1];
                  let day = dateArray[2];
                  return month + " " + day + ", " + year;

            },
            like(index) {
                  this.movies[index].likes++
            },
            dislike(index) {
                  this.movies[index].dislikes++

            },
            posterClick(index) {
                  let movie = this.movies[index];
                  movie.posterindex = (movie.posterindex + 1) % movie.posters.length;
            },
            timeText(minutes) {
                  let hrs = Math.floor(minutes / 60);
                  let mins = minutes % 60;
                  return hrs + "h " + mins + "min";
            },
      }
})

vue_app.mount("#vue_app")
