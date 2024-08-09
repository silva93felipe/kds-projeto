using KdsApi.Model;

namespace KdsApi.Data
{
    public class ProdutoData
    {
        private readonly static List<Produto> Produtos = new();
        public void Create(Produto newMesa)
        {
            Produtos.Add(newMesa);
        }

        public List<Produto> GetAll()
        {
            return Produtos;
        }
        
        public Produto GetById(int id)
        {
            return Produtos.Find(e => e.Id == id);
        }
        
    }
}
