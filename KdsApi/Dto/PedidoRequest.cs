namespace KdsApi.Dto
{
    public class PedidoRequest
    {
        public int MesaId { get; set; }
        public int AtendenteId { get; set; }
        public List<ItensPedidoRequest> ItensPedido { get; set; } = new List<ItensPedidoRequest>();

    }

    public class ItensPedidoRequest
    {
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }
    }
}
