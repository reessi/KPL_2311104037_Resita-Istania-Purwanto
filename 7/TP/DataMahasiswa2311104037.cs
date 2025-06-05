using System;
using System.IO;
using System.Text.Json;

public class DataMahasiswa2311104037
{
    public string nama { get; set; }
    public string nim { get; set; }
    public string fakultas { get; set; }

    public void ReadJSON()
    {
        try
        {
            string jsonString = File.ReadAllText("tp7_1_2311104037.json");
            var mahasiswa = JsonSerializer.Deserialize<DataMahasiswa2311104037>(jsonString);

            Console.WriteLine($"Nama {mahasiswa.nama} dengan nim {mahasiswa.nim} dari fakultas {mahasiswa.fakultas}");
        }
        catch (Exception e)
        {
            Console.WriteLine($"Error membaca file JSON: {e.Message}");
        }
    }
}
