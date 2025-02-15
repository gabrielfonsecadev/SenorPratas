using System.ComponentModel.DataAnnotations;

namespace Pratas.Dtos
{
    public class ImagemProdutoDto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public int Ordem { get; set; }
        public int? ProdutoId { get; set; }
        public ProdutoDto? Produto { get; set; }
    }

    public class ImagemProdutoForInsertDto
    {
        [Required]
        public string Url { get; set; }
        [Required]
        public int Ordem { get; set; }
        [Required]
        public int? ProdutoId { get; set; }
    }
}