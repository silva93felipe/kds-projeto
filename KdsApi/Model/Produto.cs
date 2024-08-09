namespace KdsApi.Model
{
    public class Produto
    {
        public int Id { get; private set; }
        public bool Ativo { get; private set; }
        public string Nome { get; private set; }
        public double Valor {get; private set; }
        public DateTime CreateAt { get; private set; }
        public DateTime UpdateAt { get; private set; }
        private static int GeradorId = 0;
        public Produto(string nome, double valor)
        {
            Id = GerarId();
            Ativo = true;
            Nome = nome;
            Valor = valor;
            CreateAt = DateTime.Now;
            UpdateAt = DateTime.Now;
        }

        private static int GerarId(){
            return ++GeradorId;
        }

        public static bool IsValid(string nome, double valor){
            return !( string.IsNullOrEmpty(nome) || string.IsNullOrWhiteSpace(nome) || valor <= 0);
        }
    }
}

