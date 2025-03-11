namespace Mission10_API.Models
{
    public interface IBowlingRepository
    {
        IEnumerable<Bowler> GetBowlersWithTeams();
        IEnumerable<Bowler> GetBowlersByTeams(string[] teamNames);
    }
}
