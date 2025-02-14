using System.ComponentModel.DataAnnotations;

namespace Pratas.Models
{
    public class Categoria
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
    }
}