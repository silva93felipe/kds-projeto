using KdsApi.Dto;
using KdsApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace KdsApi.Controllers;

[ApiController]
[Route("[controller]")]
public class PedidoController : ControllerBase
{
    private readonly PedidoService _pedidoService = new PedidoService();
    public PedidoController(){}

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_pedidoService.GetAll());
    }

    [HttpPost]
    public IActionResult Create(PedidoRequest newPedido)
    {
        try
        {
            _pedidoService.Create(newPedido);
            return Created();
        }
        catch (ArgumentException e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpGet("{id:int}")]
    public IActionResult GetById([FromRoute] int id)
    {
        var response = _pedidoService.GetById(id);
        if(response != null)
            return Ok(response);
        return NotFound();
    }
}
