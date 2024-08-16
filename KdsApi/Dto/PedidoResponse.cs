namespace KdsApi.Dto
{
    public record PedidoResponse(int Id, int MesaId, int AtendenteId, List<ItemPedidoResponse> ItensPedido);
    public record ItemPedidoResponse(int Id, int ProdutoId, int Quantidade);
}
