using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary
{
    public class Person : ICloneable
    {
        public string ID { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public object Clone()
        {
            throw new NotImplementedException();
        }
    }
}
