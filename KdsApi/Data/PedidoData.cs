using KdsApi.Model;

namespace KdsApi.Data
{
    public class PedidoData
    {
        private readonly static List<Pedido> Pedidos = new();
        public void Create(Pedido pedido)
        {
            Pedidos.Add(pedido);
        }

        public List<Pedido> GetAll()
        {
            return Pedidos;
        }

        public Pedido? GetById(int pedidoId)
        {
            return Pedidos.Find(p => p.Id == pedidoId);
        }
        public void Fechar(Pedido pedido)
        {
            var pedidoDb = Pedidos.Find(p => p.Id == pedido.Id);
            if(pedidoDb != null)
                pedidoDb = pedido;
        }
    }
}
