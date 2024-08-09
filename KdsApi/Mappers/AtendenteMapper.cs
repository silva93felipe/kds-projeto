using KdsApi.Dto;
using KdsApi.Model;

namespace KdsApi.Mappers
{
    public class AtendenteMapper
    {
        public static Atendente ToAtendente(AtendenteRequest atendente)
        {
            return new Atendente(atendente.Nome);
        }

        public static AtendenteResponse ToAtendenteResponse(Atendente atendente)
        {
            return new AtendenteResponse(atendente.Id, atendente.Nome);
        }
    }
}
