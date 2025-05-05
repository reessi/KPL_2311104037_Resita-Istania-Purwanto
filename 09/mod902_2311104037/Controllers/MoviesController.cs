using Microsoft.AspNetCore.Mvc;

namespace MovieAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
       
        private static List<Movie> movies = new List<Movie>
        {
            new Movie { Title = "The Shawshank Redemption", Director = "Frank Darabont", Stars = new List<string> { "Tim Robbins", "Morgan Freeman" }, Description = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." },
            new Movie { Title = "The Godfather", Director = "Francis Ford Coppola", Stars = new List<string> { "Marlon Brando", "Al Pacino" }, Description = "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son." },
            new Movie { Title = "The Dark Knight", Director = "Christopher Nolan", Stars = new List<string> { "Christian Bale", "Heath Ledger" }, Description = "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham." }
        };

       
        [HttpGet]
        public ActionResult<IEnumerable<Movie>> GetMovies()
        {
            return Ok(movies);
        }

      
        [HttpGet("{id}")]
        public ActionResult<Movie> GetMovie(int id)
        {
            if (id < 0 || id >= movies.Count)
                return NotFound();

            return Ok(movies[id]);
        }

        // POST: api/Movies
        [HttpPost]
        public ActionResult AddMovie([FromBody] Movie movie)
        {
            movies.Add(movie);
            return CreatedAtAction(nameof(GetMovies), new { id = movies.Count - 1 }, movie);
        }

        // DELETE: api/Movies/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteMovie(int id)
        {
            if (id < 0 || id >= movies.Count)
                return NotFound();

            movies.RemoveAt(id);
            return NoContent();
        }
    }
}
