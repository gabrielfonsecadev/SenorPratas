using Pratas.Models;
using Microsoft.EntityFrameworkCore;

namespace Pratas.Context;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }

    public DbSet<Categoria> Categoria { get; set; }
    public DbSet<Produto> Produto { get; set; }
    public DbSet<Collection> Collection { get; set; }
    public DbSet<ImagemProduto> ImagemProduto { get; set; }
}