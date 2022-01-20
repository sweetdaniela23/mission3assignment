using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Models
{
    public class GradeCalculatorModel
    {
        [Range(0, 100)]
        public sbyte assignments { get; set; }
        [Range(0, 100)]
        public sbyte projects { get; set; }
        [Range(0, 100)]
        public sbyte quizzes { get; set; }
        [Range(0, 100)]
        public sbyte exams { get; set; }
        [Range(0, 100)]
        public sbyte intex { get; set; }

    }
}
