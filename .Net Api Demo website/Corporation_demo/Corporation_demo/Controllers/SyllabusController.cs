using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Corporation_demo.Models;

namespace Corporation_demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SyllabusController : ControllerBase
    {
        private readonly CorporationDBContext _context;

        public SyllabusController(CorporationDBContext context)
        {
            _context = context;
        }

        // GET: api/Syllabus
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Syllabus_c>>> GetSyllabus_cs()
        {
            return await _context.Syllabus_cs.ToListAsync();
        }

        // GET: api/Syllabus/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Syllabus_c>> GetSyllabus_c(int id)
        {
            var syllabus_c = await _context.Syllabus_cs.FindAsync(id);

            if (syllabus_c == null)
            {
                return NotFound();
            }

            return syllabus_c;
        }

        // PUT: api/Syllabus/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSyllabus_c(int id, Syllabus_c syllabus_c)
        {
            if (id != syllabus_c.SyllabusId)
            {
                return BadRequest();
            }

            _context.Entry(syllabus_c).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Syllabus_cExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Syllabus
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Syllabus_c>> PostSyllabus_c(Syllabus_c syllabus_c)
        {
            _context.Syllabus_cs.Add(syllabus_c);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSyllabus_c", new { id = syllabus_c.SyllabusId }, syllabus_c);
        }

        // DELETE: api/Syllabus/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSyllabus_c(int id)
        {
            var syllabus_c = await _context.Syllabus_cs.FindAsync(id);
            if (syllabus_c == null)
            {
                return NotFound();
            }

            _context.Syllabus_cs.Remove(syllabus_c);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Syllabus_cExists(int id)
        {
            return _context.Syllabus_cs.Any(e => e.SyllabusId == id);
        }
    }
}
