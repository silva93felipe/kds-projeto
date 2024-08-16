using KdsApi.Data;
using KdsApi.Dto;
using KdsApi.Mappers;
using KdsApi.Model;

namespace KdsApi.Services
{
    public class PedidoService
    {        
        private readonly PedidoData _pedidoData = new();
        private readonly MesaService _mesaService  = new();
        private readonly AtendenteService _atendenteService  = new();
        private readonly ProdutoService _produtoService  = new();
        public void Create(PedidoRequest newPedido)
        {
            var mesa = _mesaService.GetById(newPedido.MesaId);
            if(mesa == null)    
                throw new ArgumentException("Mesa not found!");
            var atendente = _atendenteService.GetById(newPedido.AtendenteId);
            if(atendente == null)
                throw new ArgumentException("Atendente not found!");
            // Pensar um jeito de validar os itens se eles existem
            Pedido pedido = new(newPedido.MesaId, newPedido.AtendenteId);
            foreach (var item in newPedido.ItensPedido)
                pedido.AdicionarItem(item.ProdutoId, item.Quantidade);
            _pedidoData.Create(pedido);
            _mesaService.Reservar(mesa.Id);
        }
        public List<PedidoResponse> GetAll()
        {
            var pedidos = _pedidoData.GetAll();
            var pedidosDto = new List<PedidoResponse>();
            foreach (var item in pedidos){
                pedidosDto.Add(PedidoMapper.ToPedidoResponse(item));
            }
            return pedidosDto;
        }

        public PedidoResponse? GetById(int pedidoId)
        {
            var pedido = _pedidoData.GetById(pedidoId);
            if(pedido == null)
                return null;
            return PedidoMapper.ToPedidoResponse(pedido);
        }
    }
}
