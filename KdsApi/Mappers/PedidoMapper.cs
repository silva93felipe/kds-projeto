using KdsApi.Dto;
using KdsApi.Model;

namespace KdsApi.Mappers
{
    public class PedidoMapper
    {
        public static Pedido ToPedido(PedidoRequest newPedido)
        {
            var pedido = new Pedido(newPedido.MesaId, newPedido.AtendenteId);
            foreach (var item in pedido.ItensPedido){
                pedido.AdicionarItem(item.ProdutoId, item.Quantidade);
            }
            return pedido;
        }

        public static PedidoResponse ToPedidoResponse(Pedido pedido)
        {   
            List<ItemPedidoResponse> itens = new List<ItemPedidoResponse>();
            foreach (var item in pedido.ItensPedido)
            {
               itens.Add(new ItemPedidoResponse(item.Id, item.ProdutoId, item.Quantidade));
            }
            return new PedidoResponse(pedido.Id, pedido.MesaId, pedido.AtendenteId, itens);
        }
    }
}
