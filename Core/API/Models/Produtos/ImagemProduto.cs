using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pratas.Models
{
    public class ImagemProduto
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Url { get; set; }
        public int Ordem { get; set; }
        [ForeignKey("Produto")]
        public int? ProdutoId { get; set; }
        public Produto? Produto { get; set; }
    }
}