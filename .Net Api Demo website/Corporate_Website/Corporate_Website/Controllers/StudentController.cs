using Corporate_Website.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Corporate_Website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public StudentController(IConfiguration configuration)
        {
            _configuration = configuration;

        }

        [HttpGet]

        public JsonResult Get()
        {
            string query = @"
                    select StudentId,StudentName,CollegeName,Mobile,Email,
                    Degree,Specialization,DateOfBirth,Password,PhotoFileName from dbo.Students ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DatabaseAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Student std)
        {
            string query = @"
                    insert into dbo.Students values
                    ('"+std.StudentName+ @"'
                     ,'" + std.CollegeName + @"'
                    ,'" + std.Mobile + @"'
                    ,'" + std.Email + @"'
                    ,'" + std.City + @"'
                    ,'" + std.Degree + @"'
                    ,'" + std.Specialization + @"'
                    ,'" + std.DateOfBirth + @"'
                    ,'" + std.Password + @"'
                    ,'" + std.PhotoFileName + @"')";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DatabaseAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }
    }
    }

