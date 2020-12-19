using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using API.Entities;

namespace API.DTOs
{
    public class RegisterDto
    {
          [Required] public string Username { get; set; }
         public string BandName { get; set; }
        [Required] public DateTime DateOfBirth { get; set; }
        [Required] public string City { get; set; }
        [Required] public string Country { get; set; }

        [Required]  public ICollection<Instrument> Instruments { get; set;}


        [Required]
        [StringLength(8, MinimumLength = 4)]
        public string Password { get; set; }
    }
}