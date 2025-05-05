using Microsoft.AspNetCore.Mvc;
using tpmodul9_2311104037.Models;

namespace tpmodul9_2311104037.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MoviesController : ControllerBase
    {
        private static List<Movie> Movies = new List<Movie>
        {
            new Movie
            {
                Title = "The Shawshank Redemption",
                Director = "Frank Darabont",
                Stars = new List<string> { "Tim Robbins", "Morgan Freeman", "Bob Gunton" },
                Description = "Two imprisoned men bond over a number of years..."
            },
            new Movie
            {
                Title = "The Godfather",
                Director = "Francis Ford Coppola",
                Stars = new List<string> { "Marlon Brando", "Al Pacino", "James Caan" },
                Description = "The aging patriarch of an organized crime dynasty..."
            },
            new Movie
            {
                Title = "The Dark Knight",
                Director = "Christopher Nolan",
                Stars = new List<string> { "Christian Bale", "Heath Ledger", "Aaron Eckhart" },
                Description = "When the menace known as the Joker wreaks havoc..."
            }
        };

        [HttpGet]
        public ActionResult<List<Movie>> GetAllMovies() => Movies;

        [HttpGet("{id}")]
        public ActionResult<Movie> GetMovieById(int id)
        {
            if (id < 0 || id >= Movies.Count)
                return NotFound();
            return Movies[id];
        }

        [HttpPost]
        public ActionResult AddMovie([FromBody] Movie movie)
        {
            Movies.Add(movie);
            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteMovie(int id)
        {
            if (id < 0 || id >= Movies.Count)
                return NotFound();
            Movies.RemoveAt(id);
            return Ok();
        }
    }
}
