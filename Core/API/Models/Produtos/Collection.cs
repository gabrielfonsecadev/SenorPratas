using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pratas.Models
{
    public class Collection
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
    }
}