using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Corporation_demo.Models
{
    public class Student
    {
        [Key]
        public int StudentId { get; set; }
        [Column(TypeName="nvarchar(100)")]
        public string StudentName { get; set; }
        [Column(TypeName = "nvarchar(100)")]

        public string CollegeName { get; set; }
        [Column(TypeName = "nvarchar(100)")]

        public string Mobile { get; set; }
        [Column(TypeName = "nvarchar(100)")]

        public string Email { get; set; }
        [Column(TypeName = "nvarchar(100)")]

        public string City { get; set; }
        [Column(TypeName = "nvarchar(100)")]

        public string Degree { get; set; }
        [Column(TypeName = "nvarchar(100)")]

        public string Specialization { get; set; }
        [Column(TypeName = "nvarchar(100)")]

        public string DateOfBirth { get; set; }
        [Column(TypeName = "nvarchar(100)")]

        public string Password { get; set; }
        [Column(TypeName = "nvarchar(100)")]

        public string PhotoFileName { get; set; }
    }
}
