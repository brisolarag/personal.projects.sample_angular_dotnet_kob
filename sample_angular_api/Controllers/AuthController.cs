using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace sample_angular_api.Controllers;

[ApiController]
[Route("/Api/[controller]")]
public class AuthController
{
    [HttpPost("login")]
    public IActionResult Login()
    {
        // Authentication logic would go here
        return new OkResult();
    }

    [HttpPost("register")]
    public IActionResult Register()
    {
        // Registration logic would go here
        return new OkResult();
    }
}