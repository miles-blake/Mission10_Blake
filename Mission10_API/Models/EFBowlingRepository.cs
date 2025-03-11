using Microsoft.EntityFrameworkCore;

namespace Mission10_API.Models
{
    public class EFBowlingRepository : IBowlingRepository
    {
        private BowlingLeagueContext _context;
        
        public EFBowlingRepository(BowlingLeagueContext context)
        {
            _context = context;
        }
        
        public IEnumerable<Bowler> GetBowlersWithTeams()
        {
            return _context.Bowlers
                .Include(b => b.Team)
                .ToList();
        }
        
        public IEnumerable<Bowler> GetBowlersByTeams(string[] teamNames)
        {
            return _context.Bowlers
                .Include(b => b.Team)
                .Where(b => b.Team != null && teamNames.Contains(b.Team.TeamName))
                .ToList();
        }
    }
}
