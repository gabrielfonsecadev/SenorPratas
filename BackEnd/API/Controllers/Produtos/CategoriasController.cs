using System.Collections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pratas.Context;
using Pratas.Models;

namespace Pratas.Controllers;

[ApiController]
[Route("api/v1/produtos/[controller]")]
public class CategoriasController : ControllerBase
{
    private readonly AppDbContext _context;

    public CategoriasController(AppDbContext context)
    {
        _context = context;
    }

    //C.R.U.D
    [HttpGet]
    public async Task<ActionResult<List<Categoria>>> List()
    {
        var categorias = await _context.Categoria
            .AsNoTracking()
            .ToListAsync();

        if (categorias == null) return NotFound();

        return Ok(categorias);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Categoria>> Get(int id)
    {
        if (id == 0) return BadRequest();

        var categoria = await _context.Categoria
            .AsNoTracking()
            .FirstOrDefaultAsync(c => c.Id == id);

        if (categoria == null) return NotFound();

        return Ok(categoria);
    }

    [HttpPost]
    public async Task<ActionResult<Categoria>> Post(Categoria categoria)
    {
        _context.Categoria.Add(categoria);
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }

        return CreatedAtAction(nameof(Post), new { id = categoria.Id }, categoria);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<Categoria>> Put(int id, Categoria categoria)
    {
        if (id != categoria.Id) return BadRequest();

        _context.Entry(categoria).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }

        return Ok(categoria);
    }

    // [HttpDelete("{id}")]
    // public async Task<ActionResult> Delete(int id)
    // {
    //     if (id == 0) return BadRequest();

    //     var categoria = await _context.Categoria.FindAsync(id);

    //     if (categoria == null) return NotFound();

    //     _context.Categoria.Remove(categoria);
    //     try
    //     {
    //         await _context.SaveChangesAsync();
    //     }
    //     catch (Exception ex)
    //     {
    //         return StatusCode(500, ex.Message);
    //     }

    //     return NoContent();
    // }


    //Other Methods
    [HttpGet("categorias/{categoria_id}/produtos")]
    public async Task<ActionResult<List<Produto>>> GetProdutosOnCategoria(int categoria_id)
    {
        var produtos = await _context.Produto
            .AsNoTracking()
            .Where(p => p.CategoriaId == categoria_id)
            .ToListAsync();

        if (produtos == null) return NotFound();

        return Ok(produtos);
    }
}
