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

    [HttpPost]
    public void Create(MesaRequest newMesa)
    {
        _mesaService.Create(newMesa);
    }
}
