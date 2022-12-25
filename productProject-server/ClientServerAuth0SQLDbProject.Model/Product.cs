using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClientServerAuth0SQLDbProject.Model
{
    public class Product
    {
        public Product() { }
        public string ProductName { get; set; }
        public int ProductID { get; set; }

        public SqlMoney UnitPrice { get; set; }
        public int UnitInStock { get; set; }
    }
}
