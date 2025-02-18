using System.Collections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pratas.Context;
using Pratas.Dtos;
using Pratas.Models;

namespace Pratas.Controllers;

[ApiController]
[Route("api/v1/produtos/[controller]")]
public class ImagemProdutoController : ControllerBase
{
    private readonly AppDbContext _context;

    public ImagemProdutoController(AppDbContext context)
    {
        _context = context;
    }

    //C.R.U.D
    [HttpGet("{produtoId}")]
    public async Task<ActionResult<List<ImagemProdutoDto>>> List(int produtoId)
    {
        var imagens = await _context.ImagemProduto
            .AsNoTracking()
            .Where(i => i.ProdutoId == produtoId)
            .ToListAsync();

        if (imagens == null) return NotFound();

        return Ok(imagens);
    }

    [HttpPost]
    public async Task<ActionResult<ImagemProdutoForInsertDto>> Post(ImagemProdutoForInsertDto imgProduto)
    {
        var base64Image = imgProduto.Url;
        if (!imgProduto.Url.StartsWith("data:image/png;base64,"))
        {
            base64Image = "data:image/png;base64," + imgProduto.Url;
        }

        var imagemProduto = new ImagemProduto
        {
            ProdutoId = imgProduto.ProdutoId,
            Url = base64Image,
            Ordem = imgProduto.Ordem
        };

        _context.ImagemProduto.Add(imagemProduto);
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }

        return CreatedAtAction(nameof(Post), new { id = imagemProduto.Id }, imagemProduto);
    }

    // [HttpPut("{id}")]
    // public async Task<ActionResult<Collection>> Put(int id, Collection collection)
    // {
    //     if (id != collection.Id) return BadRequest();

    //     _context.Entry(collection).State = EntityState.Modified;

    //     try
    //     {
    //         await _context.SaveChangesAsync();
    //     }
    //     catch (Exception ex)
    //     {
    //         return StatusCode(500, ex.Message);
    //     }

    //     return Ok(collection);
    // }

    // [HttpDelete("{id}")]
    // public async Task<ActionResult> Delete(int id)
    // {
    //     if (id == 0) return BadRequest();

    //     var Collection = await _context.Collection.FindAsync(id);

    //     if (Collection == null) return NotFound();

    //     _context.Collection.Remove(Collection);
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
}
