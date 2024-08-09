namespace KdsApi.Dto
{
    public class PedidoResponse
    {
        public int MesaId { get; set; }
        public int AtendenteId { get; set; }
        public List<ItensPedidoResponse> ItensPedido { get; set; } = new List<ItensPedidoResponse>();

    }

    public class ItensPedidoResponse
    {
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }
    }
}
