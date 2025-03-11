using Microsoft.AspNetCore.Mvc;
using Mission10_API.Models;

namespace Mission10_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        private IBowlingRepository _repository;
        
        public BowlingController(IBowlingRepository repository)
        {
            _repository = repository;
        }
        
        [HttpGet]
        public IEnumerable<Bowler> Get()
        {
            return _repository.GetBowlersWithTeams();
        }
        
        [HttpGet("filter")]
        public IEnumerable<Bowler> GetFiltered()
        {
            string[] targetTeams = new[] { "Marlins", "Sharks" };
            return _repository.GetBowlersByTeams(targetTeams);
        }
    }
}
