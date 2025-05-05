using Microsoft.AspNetCore.Mvc;
using tpmodul8_2311104037.Models;

namespace tpmodul8_2311104037.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MahasiswaController : ControllerBase
    {
        private static List<Mahasiswa> mahasiswaList = new List<Mahasiswa>
{
        new Mahasiswa { Nama = "Resita Istania Purwanto", Nim = "2311104037" },
        new Mahasiswa { Nama = "Shilfi Habibah", Nim = "2311104002" },
        new Mahasiswa { Nama = "Marshella Dwi Julianti", Nim = "2311104004" },
        new Mahasiswa { Nama = "Viona Aziz Saputri", Nim = "2311104008" },
        new Mahasiswa { Nama = "Isabelle Putri Ardini", Nim = "2311104030" }
        };


        [HttpGet]
        public IActionResult Get()
        {
            return Ok(mahasiswaList);
        }

        [HttpPost]
        public ActionResult<List<Mahasiswa>> Post([FromBody] Mahasiswa mhs)
        {
            mahasiswaList.Add(mhs);
            return mahasiswaList;
        }

        [HttpGet("{index}")]
        public ActionResult<Mahasiswa> Get(int index)
        {
            if (index < 0 || index >= mahasiswaList.Count)
                return NotFound();
            return mahasiswaList[index];
        }

        [HttpDelete("{index}")]
        public ActionResult<List<Mahasiswa>> Delete(int index)
        {
            if (index < 0 || index >= mahasiswaList.Count)
                return NotFound();
            mahasiswaList.RemoveAt(index);
            return mahasiswaList;
        }
    }
}
