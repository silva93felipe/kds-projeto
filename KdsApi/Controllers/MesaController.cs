using KdsApi.Dto;
using KdsApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace KdsApi.Controllers;

[ApiController]
[Route("[controller]")]
public class MesaController : ControllerBase
{
    private readonly MesaService _mesaService = new();
    public MesaController()
    {
        
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_mesaService.GetAll());
    }

    [HttpGet("{id:int}")]
    public IActionResult GetById(int id)
    {
        return Ok(_mesaService.GetById(id));
    }

    [HttpPost]
    public void Create(MesaRequest newMesa)
    {
        _mesaService.Create(newMesa);
    }
}
