using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pratas.Models
{
    public class Produto
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public decimal Preco { get; set; }
        public string? PrecoParcelado { get; set; }
        public DateTime DtUpload { get; set; }
        public string? Tamanhos { get; set; }
        [ForeignKey("Categoria")]
        public int? CategoriaId { get; set; }
        public Categoria? Categoria { get; set; }
        [ForeignKey("Collection")]
        public int? CollectionId { get; set; }
        public Collection? Collection { get; set; }
        public List<ImagemProduto> Imagens { get; set; } = new();
    }
}