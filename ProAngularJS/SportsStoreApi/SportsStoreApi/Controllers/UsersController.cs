using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportsStoreApi.Models;

namespace SportsStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromBody] User user)
        {
            if(user.Username=="admin" && user.Password == "admin")
            {
                return Ok();
            }
            else
            {
                return StatusCode(403);
            }
        }
    }
}