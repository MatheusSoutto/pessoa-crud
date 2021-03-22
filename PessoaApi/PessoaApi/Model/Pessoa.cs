using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PessoaApi.Model
{
    public class Pessoa
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [MaxLength(60)]
        public string Nome { get; set; }
        [Required]
        public int Idade { get; set; }
        [Required]
        public char Sexo { get; set; }
        [Required]
        public double Peso { get; set; }
        public double? Altura { get; set; }
    }
}
