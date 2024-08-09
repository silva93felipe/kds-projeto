﻿using KdsApi.Data;
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
                mesasDto.Add(MesaMapper.ToMesaRequest(mesa));
            return mesasDto;
        }
    }
}
