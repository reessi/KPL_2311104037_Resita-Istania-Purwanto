using Microsoft.AspNetCore.Mvc;
using Modul9.Models;

[Route("api/[controller]")]
[ApiController]
public class MahasiswaController : ControllerBase
{
    private static List<Mahasiswa> Mahasiswas = new List<Mahasiswa>
    {
        new Mahasiswa { Name = "The Shawshank Redemption", Nim = "1", Course = new List<string> { "Drama", "Crime" }, Year = 1994 },
        new Mahasiswa { Name = "The Godfather", Nim = "2", Course = new List<string> { "Crime", "Drama" }, Year = 1972 },
        new Mahasiswa { Name = "The Dark Knight", Nim = "3", Course = new List<string> { "Action", "Crime" }, Year = 2008 }
    };

    [HttpGet]
    public ActionResult<IEnumerable<Mahasiswa>> Get()
    {
        return Mahasiswas;
    }

    [HttpGet("{id}")]
    public ActionResult<Mahasiswa> Get(string id)
    {
        var mahasiswa = Mahasiswas.FirstOrDefault(m => m.Nim == id);
        if (mahasiswa == null)
        {
            return NotFound();
        }
        return mahasiswa;
    }

    [HttpPost]
    public IActionResult Post(Mahasiswa mahasiswa)
    {
        Mahasiswas.Add(mahasiswa);
        return CreatedAtAction(nameof(Get), new { id = mahasiswa.Nim }, mahasiswa);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(string id)
    {
        var mahasiswa = Mahasiswas.FirstOrDefault(m => m.Nim == id);
        if (mahasiswa == null)
        {
            return NotFound();
        }
        Mahasiswas.Remove(mahasiswa);
        return NoContent();
    }
}
