using System;

class Program
{
    static void Main(string[] args)
    {
        var dataMahasiswa = new DataMahasiswa2311104037();
        dataMahasiswa.ReadJSON();

        var kuliahMahasiswa = new KuliahMahasiswa2311104037();
        kuliahMahasiswa.ReadJSON();

        Console.WriteLine("\nTekan tombol apa saja untuk keluar...");
        Console.ReadKey();
    }
}

