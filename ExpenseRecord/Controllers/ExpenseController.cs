using ExpenseRecord.Dto;
using ExpenseRecord.Service;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseRecord.Controllers;


[ApiController]
[Route("api/expenses")]
public class ExpenseController : ControllerBase
{
    private readonly ExpenseService _expenseService;
    public ExpenseController(ExpenseService expenseService)
    {
        _expenseService = expenseService;
    }



    [HttpGet]
    public List<ExpenseDto> getAllData()
    {
        return _expenseService.GetAll();
    }

    [HttpPost]
    public List<ExpenseDto> AddNewExpense(ExpenseDto expenseDto)
    {
        return _expenseService.AddNewExpense(expenseDto);
    }

    [HttpDelete]
    [Route("{id}")]
    public List<ExpenseDto> DeleteExpense(string id)
    {
        return _expenseService.DeleteExpense(id);
    }

}