using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pratas.Context;
using Pratas.Dtos;
using Pratas.Models;

namespace Pratas.Services
{
    public interface IProdutoService
    {
        Task<Produto> Post(Produto produto);
        Task<Produto> Put(Produto produto);
    }
    public class ProdutoService : IProdutoService
    {
        private readonly AppDbContext _context;

        public ProdutoService(AppDbContext context)
        {
            _context = context;
        }
        public async Task<Produto> Post(Produto produto)
        {
            produto.DtUpload = DateTime.Now;
            produto.PrecoParcelado = PrecoParcelado(produto.Preco);
            _context.Produto.Add(produto);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Erro ao salvar o produto: " + ex.Message);
            }

            return produto;
        }

        public async Task<Produto> Put(Produto produto)
        {
            produto.PrecoParcelado = PrecoParcelado(produto.Preco);
            _context.Entry(produto).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Erro ao salvar o produto: " + ex.Message);
            }

            return produto;
        }


        public string PrecoParcelado(decimal preco)
        {
            var finalPrice = "";

            if (preco < 200)
            {
                finalPrice = $"3x de R${(preco / 3):F2}";
            }
            else if (preco < 550)
            {
                finalPrice = $"6x de R${(preco / 6):F2}";
            }
            else
            {
                finalPrice = $"10x de R${(preco / 10):F2}";
            }

            return finalPrice;
        }
    }
}