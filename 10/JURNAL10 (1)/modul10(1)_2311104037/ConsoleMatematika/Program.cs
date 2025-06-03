using System;
using MatematikaLibraries;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Testing FPB dan KPK:");
        Console.WriteLine($"FPB(60, 45) = {Matematika.FPB(60, 45)}");
        Console.WriteLine($"KPK(12, 8) = {Matematika.KPK(12, 8)}");

        Console.WriteLine("\nTesting Turunan:");
        int[] persamaanTurunan = { 1, 4, -12, 9 }; // x^3 + 4x^2 -12x + 9
        Console.WriteLine($"Turunan({string.Join(", ", persamaanTurunan)}) = {Matematika.Turunan(persamaanTurunan)}");

        Console.WriteLine("\nTesting Integral:");
        int[] persamaanIntegral = { 4, 6, -12, 9 }; // 4x^3 + 6x^2 - 12x + 9
        Console.WriteLine($"Integral({string.Join(", ", persamaanIntegral)}) = {Matematika.Integral(persamaanIntegral)}");

        Console.WriteLine("\nTekan tombol apapun untuk keluar...");
        Console.ReadKey();
    }
}
