﻿namespace KdsApi.Model
{
    public class ItemPedido
    {
        public int Id { get; private set; }
        public int ProdutoId {  get; private set; }
        public int Quantidade { get; private set; }
        public DateTime CreateAt { get; private set; }
        public DateTime UpdateAt { get; private set; }
        private static int GeradorId = 0;
        public ItemPedido(int produtoId, int quantidade)
        {
            Id = GerarId();
            ProdutoId = produtoId;
            Quantidade = quantidade;
            CreateAt = DateTime.Now;
            UpdateAt = DateTime.Now;
        }

        private static int GerarId(){
            return ++GeradorId;
        }

    }
}
