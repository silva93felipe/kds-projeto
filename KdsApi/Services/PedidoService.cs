using KdsApi.Data;
using KdsApi.Dto;
using KdsApi.Model;

namespace KdsApi.Services
{
    public class PedidoService
    {        
        private readonly PedidoData _pedidoData = new();
        public void Create(PedidoRequest newPedido)
        {
            Pedido pedido = new(newPedido.MesaId, newPedido.AtendenteId);
            foreach (var item in newPedido.ItensPedido)
            {
                pedido.AdicionarItem(item.ProdutoId, item.Quantidade);
            }
            _pedidoData.Create(pedido);
        }
        public List<PedidoResponse> GetAll()
        {
            var pedidos = _pedidoData.GetAll();
            return new List<PedidoResponse>();
        }

        public PedidoResponse GetById(int pedidoId)
        {
            var pedidos = _pedidoData.GetById(pedidoId);
            return new PedidoResponse();
        }
    }
}
