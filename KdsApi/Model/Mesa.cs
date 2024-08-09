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
        public Mesa(string codigo)
        {
            Ativo = true;
            Codigo = codigo;
            Status = EStatusMesa.ABERTA;
            CreateAt = DateTime.Now;
            UpdateAt = DateTime.Now;
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
