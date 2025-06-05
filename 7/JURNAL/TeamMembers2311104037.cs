using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

public class TeamMember
{
    public string nim { get; set; }
    public string firstname { get; set; }
    public string lastname { get; set; }
    public int age { get; set; }
    public string gender { get; set; }
}

public class TeamList
{
    public List<TeamMember> members { get; set; }
}

public class TeamMembers2311104037
{
    public void ReadJSON()
    {
        string filePath = "jurnal7_2_2311104037.json";

        if (!File.Exists(filePath))
        {
            Console.WriteLine("File tidak ditemukan.");
            return;
        }

        string jsonContent = File.ReadAllText(filePath);
        TeamList team = JsonSerializer.Deserialize<TeamList>(jsonContent);

        Console.WriteLine("Team member list:");
        foreach (var member in team.members)
        {
            Console.WriteLine($"{member.nim} {member.firstname} {member.lastname} ({member.age} {member.gender})");
        }
    }
}
