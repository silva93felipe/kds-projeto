using KdsApi.Data;
using KdsApi.Dto;
using KdsApi.Mappers;
using KdsApi.Model;

namespace KdsApi.Services
{
    public class MesaService
    {
        readonly MesaData _mesaData = new();
        public MesaService() { }
        public void Create(MesaRequest newMesa)
        {
            if (Mesa.IsValid(newMesa.Codigo))
            {
                Mesa mesa = new(newMesa.Codigo);
                _mesaData.Create(mesa);
            }
        }
        public List<MesaResponse> GetAll()
        {
            var mesas = _mesaData.GetAll();
            var mesasDto = new List<MesaResponse>();
            foreach (var mesa in mesas)
                mesasDto.Add(MesaMapper.ToMesaResponse(mesa));
            return mesasDto;
        }

        public MesaResponse? GetById(int mesaId)
        {
            var mesa = _mesaData.GetById(mesaId);
            if(mesa == null)
                return null;
            return MesaMapper.ToMesaResponse(mesa);
        }

        public void Reservar(int mesaId)
        {
            var mesa = _mesaData.GetById(mesaId);
            if(mesa != null){
                mesa.Reservar();
                _mesaData.Update(mesa);
            }
        }

        public void Liberar(int mesaId){
            var mesa = _mesaData.GetById(mesaId);
            if(mesa != null){
                mesa.Liberar();
                _mesaData.Update(mesa);
            }
        }
    }
}
