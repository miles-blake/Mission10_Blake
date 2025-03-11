using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Mission10_API.Models
{
    public class Team
    {
        [Key]
        public int TeamID { get; set; }
        public string? TeamName { get; set; }
        public int? CaptainID { get; set; }
        
        [JsonIgnore]
        public ICollection<Bowler>? Bowlers { get; set; }
    }
}
