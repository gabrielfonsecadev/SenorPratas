using System;
using System.ComponentModel.DataAnnotations;

namespace Pratas.Dtos
{
    public class ProdutoDto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public decimal Preco { get; set; }
        public string? PrecoParcelado { get; set; }
        public DateTime DtUpload { get; set; }
        public string? Tamanhos { get; set; }
        public int? CategoriaId { get; set; }
        public CategoriaDto? Categoria { get; set; }
        public int? CollectionId { get; set; }
        public CollectionDto? Collection { get; set; }
        public ImagemProdutoDto[] Imagens { get; set; } = Array.Empty<ImagemProdutoDto>();
    }
    public class ProdutoForInsertDto
    {
        [Required]
        public string Nome { get; set; }
        [Required]
        public decimal Preco { get; set; }
        [Required]
        public string Tamanhos { get; set; }
        public int? CategoriaId { get; set; }
        public int? CollectionId { get; set; }
    }
    public class ProdutoForUpdateDto
    {
        [Required]
        public int Id { get; set; }
        public string? Nome { get; set; }
        public decimal? Preco { get; set; }
        public string? Tamanhos { get; set; }
        public DateTime DtUpload { get; set; }
        public int? CategoriaId { get; set; }
        public int? CollectionId { get; set; }
    }
}