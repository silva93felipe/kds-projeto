namespace KdsApi.Model
{
    public class Mesa
    {
        public int Id { get; private set; }
        public bool Ativo {  get; private set; }
        public string Codigo { get; private set; }
        public EStatusMesa Status { get; private set; }
        public DateTime CreateAt { get; private set; }
        public DateTime UpdateAt { get; private set; }
        private static int GeradorId = 0;
        public Mesa(string codigo)
        {
            Id = GerarId();
            Ativo = true;
            Codigo = codigo;
            Status = EStatusMesa.ABERTA;
            CreateAt = DateTime.Now;
            UpdateAt = DateTime.Now;
        }

        private static int GerarId(){
            return ++GeradorId;
        }

        public static bool IsValid(string codigo)
        {
            return !( string.IsNullOrEmpty(codigo) || string.IsNullOrWhiteSpace(codigo) );
        }
    }
}

public enum EStatusMesa
{
    ABERTA,
    FECHADA,
    EMATENDIMENTO
}
