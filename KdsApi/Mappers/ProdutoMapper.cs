using KdsApi.Dto;
using KdsApi.Model;

namespace KdsApi.Mappers
{
    public class ProdutoMapper
    {
        public static Produto ToProduto(ProdutoRequest produto)
        {
            return new Produto(produto.Nome, produto.Valor);
        }

        public static ProdutoResponse ToProdutoResponse(Produto produto)
        {
            return new ProdutoResponse(produto.Nome, produto.Valor, produto.Id);
        }
    }
}
