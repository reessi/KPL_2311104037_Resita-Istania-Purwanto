using System;
using System.Collections.Generic;

namespace Modul9.Models
{
    public class Mahasiswa
    {
        public string Name { get; set; }
        public string Nim { get; set; }
        public List<string> Course { get; set; }
        public int Year { get; set; }

        public Mahasiswa()
        {
            Course = new List<string>();
        }
    }
}
