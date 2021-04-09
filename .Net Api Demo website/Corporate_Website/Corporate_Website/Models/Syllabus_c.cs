using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Corporate_Website.Models
{
    public class Syllabus_c
    {
        
        public int SyllabusId { get; set; }
        
        public int SrNo { get; set; }
        public string CourseName { get; set; }
        
        public string Syllabus { get; set; }
        
        public string Duration { get; set; }
        public decimal Price { get; set; }
    }
}