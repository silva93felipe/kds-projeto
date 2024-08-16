using KdsApi.Model;

namespace KdsApi.Data
{
    public class AtendenteData
    {
        private readonly static List<Atendente> Atendentes = new();
        public void Create(Atendente newMesa)
        {
            Atendentes.Add(newMesa);
        }

        public List<Atendente> GetAll()
        {
            return Atendentes;
        }
        
        public Atendente? GetById(int id)
        {
            return Atendentes.Find(e => e.Id == id);
        }
    }
}
