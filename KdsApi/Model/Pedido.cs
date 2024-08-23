namespace KdsApi.Model
{
    public class Pedido
    {
        private static int GeradorId = 0;
        public int Id { get; private set; }
        public bool Ativo {  get; private set; }
        public int AtendenteId { get; private set; }
        public int MesaId { get; private set; }
        public EStatusPedido Status { get; private set; }
        public List<ItemPedido> ItensPedido { get; private set; }
        public DateTime CreateAt { get; private set; }
        public DateTime UpdateAt { get; private set; }
        public Pedido(int mesaId, int atendenteId)
        {
            Id = GerarId();
            Ativo = true;
            Status = EStatusPedido.CRIADO;
            CreateAt = DateTime.Now;
            UpdateAt = DateTime.Now;
            ItensPedido = new List<ItemPedido>();
            MesaId = mesaId;
            AtendenteId = atendenteId;
        }

        public void AdicionarItem(int produtoId, int quantidade)
        {
            var item = new ItemPedido(produtoId, quantidade);
            ItensPedido.Add(item);
        }

        private static int GerarId(){
            return ++GeradorId;
        }

        public void Fechar(){
            Status = EStatusPedido.FINALIZADO;
            UpdateAt = DateTime.Now;
        }
    }
}

public enum EStatusPedido
{
    CRIADO,
    PREPARANDO,
    FINALIZADO
}
