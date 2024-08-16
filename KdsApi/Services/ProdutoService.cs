using KdsApi.Data;
using KdsApi.Dto;
using KdsApi.Mappers;
using KdsApi.Model;

namespace KdsApi.Services
{
    public class ProdutoService
    {
        readonly ProdutoData _produtoData = new();
        public ProdutoService() { }
        public void Create(ProdutoRequest newProduto)
        {
            if (Produto.IsValid(newProduto.Nome, newProduto.Valor))
            {
                Produto produto = new(newProduto.Nome, newProduto.Valor);
                _produtoData.Create(produto);
            }
        }
        public List<ProdutoResponse> GetAll()
        {
            var produtos = _produtoData.GetAll();
            var produtoDto = new List<ProdutoResponse>();
            foreach (var produto in produtos)
                produtoDto.Add(ProdutoMapper.ToProdutoResponse(produto));
            return produtoDto;
        }

        public ProdutoResponse? GetById(int atendenteId)
        {
            var produto = _produtoData.GetById(atendenteId);
            if(produto == null)
                return null;
            else 
                return ProdutoMapper.ToProdutoResponse(produto);
        }
    }
}
