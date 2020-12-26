using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using API.Extensions;


namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string BandName { get; set; }
        
        public DateTime Created { get; set; } = DateTime.Now;

        public DateTime LastActive { get; set; }  = DateTime.Now;

        public ICollection<Instrument> Instruments { get; set; }
       

        public string Introduction { get; set; }
        public string LookingFor { get; set; }


        public string City { get; set; }

        public string Country { get; set; }

        public ICollection<Photo> Photos { get; set; }

        public ICollection<Message> MessagesSent { get; set; }
        public ICollection<Message> MessagesReceived { get; set; }



    }


}