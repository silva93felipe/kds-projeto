namespace KdsApi.Model
{
    public class ItemPedido
    {
        public int Id { get; private set; }
        public int ProdutoId {  get; private set; }
        public int Quantidade { get; private set; }
        public DateTime CreateAt { get; private set; }
        public DateTime UpdateAt { get; private set; }
        public ItemPedido(int produtoId, int quantidade)
        {
            ProdutoId = produtoId;
            Quantidade = quantidade;
            CreateAt = DateTime.Now;
            UpdateAt = DateTime.Now;
        }
    }
}
