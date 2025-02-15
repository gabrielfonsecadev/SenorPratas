using System.Collections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pratas.Context;
using Pratas.Dtos;
using Pratas.Models;
using Pratas.Services;

namespace Pratas.Controllers;

[ApiController]
[Route("api/v1/produtos/[controller]")]
public class ProdutosController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IProdutoService _produtoService;

    public ProdutosController(AppDbContext context, IProdutoService produtoService)
    {
        _context = context;
        _produtoService = produtoService;
    }

    //C.R.U.D
    [HttpGet]
    public async Task<ActionResult<List<ProdutoDto>>> List()
    {
        var produto = await _context.Produto
            .AsNoTracking()
            .Include(p => p.Categoria)
            .Include(p => p.Collection)
            .ToListAsync();

        if (produto == null) return NotFound();

        return Ok(produto);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ProdutoDto>> Get(int id)
    {
        if (id == 0) return BadRequest();

        var produto = await _context.Produto
            .AsNoTracking()
            .Include(p => p.Categoria)
            .Include(p => p.Collection)
            .FirstOrDefaultAsync(p => p.Id == id);

        if (produto == null) return NotFound();

        var images = await _context.ImagemProduto
            .AsNoTracking()
            .Where(i => i.ProdutoId == produto.Id)
            .ToListAsync();

        if (images != null)
        {
            produto.Imagens = images;
        }

        return Ok(produto);
    }

    [HttpPost]
    public async Task<ActionResult<ProdutoForInsertDto>> Post(ProdutoForInsertDto produtoDto)
    {
        var produto = await _produtoService.Post(produtoDto);
        return CreatedAtAction(nameof(Post), new { id = produto.Id }, produto);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<Produto>> Put(int id, Produto produto)
    {
        if (id != produto.Id) return BadRequest();

        _context.Entry(produto).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }

        return Ok(produto);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        if (id == 0) return BadRequest();

        var produto = await _context.Produto.FindAsync(id);

        if (produto == null) return NotFound();

        _context.Produto.Remove(produto);
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }

        return NoContent();
    }


    //Other Methods

}
