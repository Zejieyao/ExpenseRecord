using ExpenseRecord.Dto;

namespace ExpenseRecord.Service
{
    public class ExpenseService
    {
        public List<ExpenseDto> expenseList = new List<ExpenseDto>();

        public List<ExpenseDto> GetAll()
        {
            return expenseList;
        }

        public List<ExpenseDto> AddNewExpense(ExpenseDto expenseDto)
        {
            var id = Guid.NewGuid().ToString();
            var newExpense = new ExpenseDto
            {
                Id = id,
                Description = expenseDto.Description,
                ExpenseAmount = expenseDto.ExpenseAmount,
                ExpenseType = expenseDto.ExpenseType,
                ExpenseDate = expenseDto.ExpenseDate,

            };
            expenseList.Insert(0, newExpense);
            return expenseList;
        }

        public List<ExpenseDto> DeleteExpense(string id)
        {
            var expense = expenseList.FirstOrDefault(x => x.Id == id);
            expenseList.Remove(expense);
            return expenseList;
        }

    }
}
