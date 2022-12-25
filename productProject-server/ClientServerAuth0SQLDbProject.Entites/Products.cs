using ClientServerAuth0SQLDbProject.Dal;
using ClientServerAuth0SQLDbProject.Model;
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;

namespace ClientServerAuth0SQLDbProject.Entites
{
    public class Products
    {
        public Products() { }
        public List<Product> ProductList { get; set; }
        Product product;

        public void addProduct(System.Data.SqlClient.SqlDataReader reader)
        {
            ProductList = new List<Product>();
            while (reader.Read())
            {
                 product = new Product() { ProductName = reader["productName"].ToString(), ProductID = int.Parse(reader["productID"].ToString()), UnitPrice = SqlMoney.Parse(reader["UnitPrice"].ToString()), UnitInStock = int.Parse(reader["UnitsInStock"].ToString()) };
                ProductList.Add(product);
            }


        }

        string insert = "select productID,productName,UnitPrice,UnitsInStock from Products";

        public List<Product> getProducts()
        {
            SqlQuery sqlQuery1 = new SqlQuery();
            sqlQuery1.runCommand(insert, addProduct);
            return ProductList;
        }
    }
}
