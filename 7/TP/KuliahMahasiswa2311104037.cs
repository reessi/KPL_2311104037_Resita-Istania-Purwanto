using System;
using System.IO;
using System.Text.Json;
using System.Collections.Generic;

public class MataKuliah
{
    public string kode { get; set; }
    public string nama { get; set; }
}

public class KuliahMahasiswa2311104037
{
    public void ReadJSON()
    {
        try
        {
            string jsonString = File.ReadAllText("tp7_2_2311104037.json");
            var daftarMatkul = JsonSerializer.Deserialize<List<MataKuliah>>(jsonString);

            Console.WriteLine("Daftar mata kuliah yang diambil:");
            int nomor = 1;
            foreach (var mk in daftarMatkul)
            {
                Console.WriteLine($"MK {nomor} {mk.kode} - {mk.nama}");
                nomor++;
            }
        }
        catch (Exception e)
        {
            Console.WriteLine($"Error membaca file JSON: {e.Message}");
        }
    }
}
