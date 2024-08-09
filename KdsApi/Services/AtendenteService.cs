using KdsApi.Data;
using KdsApi.Dto;
using KdsApi.Mappers;
using KdsApi.Model;

namespace KdsApi.Services
{
    public class AtendenteService
    {
        readonly AtendenteData _atendenteData = new();
        public AtendenteService() { }
        public void Create(AtendenteRequest newAtendente)
        {
            if (Atendente.IsValid(newAtendente.Nome))
            {
                Atendente atendente = new(newAtendente.Nome);
                _atendenteData.Create(atendente);
            }
        }
        public List<AtendenteResponse> GetAll()
        {
            var atendentes = _atendenteData.GetAll();
            var atendenteDto = new List<AtendenteResponse>();
            foreach (var atendente in atendentes)
                atendenteDto.Add(AtendenteMapper.ToAtendenteResponse(atendente));
            return atendenteDto;
        }

        public List<AtendenteResponse> GetById(int atendenteId)
        {
            var atendente = _atendenteData.GetById(atendenteId);
            var atendenteDto = new List<AtendenteResponse>
            {
                AtendenteMapper.ToAtendenteResponse(atendente)
            };
            return atendenteDto;
        }
    }
}
