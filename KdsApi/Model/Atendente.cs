﻿namespace KdsApi.Model
{
    public class Atendente
    {
        public int Id { get; private set; }
        public bool Ativo { get; private set; }
        public string Nome { get; private set; }
        public DateTime CreateAt { get; private set; }
        public DateTime UpdateAt { get; private set; }
        private static int GeradorId = 0;
        public Atendente(string nome)
        {
            Id = GerarId();
            Ativo = true;
            Nome = nome;
            CreateAt = DateTime.Now;
            UpdateAt = DateTime.Now;
        }

        private static int GerarId(){
            return ++GeradorId;
        }

        public static bool IsValid(string nome){
             return !( string.IsNullOrEmpty(nome) || string.IsNullOrWhiteSpace(nome) );
        }
    }
}

