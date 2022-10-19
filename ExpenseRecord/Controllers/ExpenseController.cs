using Microsoft.AspNetCore.Mvc;

namespace ExpenseRecord.Controllers;

[ApiController]
[Route("[controller]")]
public class ExpenseController : ControllerBase
{
    [HttpGet]
    public string getAllData()
    {
    }
}