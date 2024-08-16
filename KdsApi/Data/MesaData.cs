﻿using KdsApi.Model;

namespace KdsApi.Data
{
    public class MesaData
    {
        private readonly static List<Mesa> Mesas = new();
        public void Create(Mesa newMesa)
        {
            Mesas.Add(newMesa);
        }

        public List<Mesa> GetAll()
        {
            return Mesas;
        }
        
        public Mesa? GetById(int id)
        {
            return Mesas.Find(e => e.Id == id);
        }
        
    }
}
