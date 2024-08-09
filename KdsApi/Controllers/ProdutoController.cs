using KdsApi.Dto;
using KdsApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace KdsApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ProdutoController : ControllerBase
{
    private readonly ProdutoService _produtoService = new ProdutoService();
    public ProdutoController(){}

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_produtoService.GetAll());
    }

    [HttpPost]
    public IActionResult Create(ProdutoRequest newPedido)
    {
        _produtoService.Create(newPedido);
        return Created();
    }

    [HttpGet("{id:int}")]
    public IActionResult GetById([FromRoute] int id)
    {
        var response = _produtoService.GetById(id);
        if(response != null)
            return Ok(response);
        return NotFound();
    }
}
