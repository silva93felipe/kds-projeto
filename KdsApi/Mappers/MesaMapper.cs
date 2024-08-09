using KdsApi.Dto;
using KdsApi.Model;

namespace KdsApi.Mappers
{
    public class MesaMapper
    {
        public static Mesa ToMesa(MesaRequest mesaRequest)
        {
            return new Mesa(mesaRequest.Codigo);
        }

        public static MesaResponse ToMesaRequest(Mesa mesa)
        {
            return new MesaResponse(mesa.Id, mesa.Codigo, mesa.Status.ToString());
        }
    }
}
