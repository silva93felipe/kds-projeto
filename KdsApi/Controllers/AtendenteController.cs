using KdsApi.Dto;
using KdsApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace KdsApi.Controllers;

[ApiController]
[Route("[controller]")]
public class AtendenteController : ControllerBase
{
    private readonly AtendenteService _atendenteService = new();
    public AtendenteController()
    {
        
    }

    [HttpGet("{id:int}")]
    public IActionResult GetAll(int id)
    {
        return Ok(_atendenteService.GetAll());
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_atendenteService.GetAll());
    }

    [HttpPost]
    public void Create(AtendenteRequest atendenteRequest)
    {
        _atendenteService.Create(atendenteRequest);
    }
}
