using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Corporation_demo.Models
{
    public class CorporationDBContext:DbContext
    {
        public CorporationDBContext(DbContextOptions<CorporationDBContext>options):base(options)
        {

        }
        public DbSet<Student> Students { get; set; }
    }
}
