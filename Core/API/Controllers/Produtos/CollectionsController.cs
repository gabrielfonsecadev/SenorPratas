using System.Collections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pratas.Context;
using Pratas.Models;

namespace Pratas.Controllers;

[ApiController]
[Route("api/v1/produtos/[controller]")]
public class CollectionsController : ControllerBase
{
    private readonly AppDbContext _context;

    public CollectionsController(AppDbContext context)
    {
        _context = context;
    }

    //C.R.U.D
    [HttpGet]
    public async Task<ActionResult<List<Collection>>> List()
    {
        var collections = await _context.Collection
            .AsNoTracking()
            .ToListAsync();

        if (collections == null) return NotFound();

        return Ok(collections);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Collection>> Get(int id)
    {
        if (id == 0) return BadRequest();

        var collection = await _context.Collection
            .AsNoTracking()
            .FirstOrDefaultAsync(c => c.Id == id);

        if (collection == null) return NotFound();

        return Ok(collection);
    }

    [HttpPost]
    public async Task<ActionResult<Collection>> Post(Collection collection)
    {
        _context.Collection.Add(collection);
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }

        return CreatedAtAction(nameof(Post), new { id = collection.Id }, collection);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<Collection>> Put(int id, Collection collection)
    {
        if (id != collection.Id) return BadRequest();

        _context.Entry(collection).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }

        return Ok(collection);
    }

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


    //Other Methods
    [HttpGet("collection/{collection_id}/produtos")]
    public async Task<ActionResult<List<Produto>>> GetProdutosOnCollection(int collection_id)
    {
        var produtos = await _context.Produto
            .AsNoTracking()
            .Where(p => p.CollectionId == collection_id)
            .ToListAsync();

        if (produtos == null) return NotFound();

        return Ok(produtos);
    }
}
