using KdsApi.Dto;
using KdsApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace KdsApi.Controllers;

[ApiController]
[Route("[controller]")]
public class PedidoController : ControllerBase
{
    private readonly PedidoService _pedidoService = new PedidoService();
    public PedidoController()
    {

    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok();
    }

    [HttpPost]
    public void Create(PedidoRequest newPedido)
    {
        _pedidoService.Create(newPedido);
    }

    [HttpGet("{id:int}")]
    public IActionResult GetById([FromRoute] int pedidoid)
    {
        _pedidoService.GetById(pedidoid);
        return Ok();
    }
}
