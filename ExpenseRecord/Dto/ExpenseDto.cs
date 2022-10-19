using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ExpenseRecord.Dto
{
    public class ExpenseDto
    {
        [Column("expense_id")]
        public string? Id { get; set; }
        [Column("task_desc")]
        [MaxLength(100)]
        public string Description { get; set; }
        [Column("expense_date")]
        public string ExpenseDate { get; set; }
        [Column("expense_type")]
        public string ExpenseType { get; set; }
        [Column("expense_amount")]
        public string ExpenseAmount { get; set; }

    }
}
