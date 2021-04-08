using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Corporation_demo.Models
{
    public class Syllabus_c
    {
        [Key]
        public int SyllabusId { get; set; }

        public int SrNo { get; set; }
        [Column(TypeName = "nvarchar(100)")]

        public string CourseName { get; set; }
        [Column(TypeName = "nvarchar(100)")]

        public string Syllabus { get; set; }
        [Column(TypeName = "nvarchar(100)")]

        public string Duration { get; set; }


        public decimal Price { get; set; }
    }
}