using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sample_angular_api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;


        public string Gender { get; set; } = string.Empty;
        public double Weight { get; set; }
        public double Height { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
}