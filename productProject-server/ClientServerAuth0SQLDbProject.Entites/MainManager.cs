using ClientServerAuth0SQLDbProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClientServerAuth0SQLDbProject.Entites
{
    public class MainManager
    {
        private MainManager() { }
        private readonly static MainManager _instance = new MainManager();
        public static MainManager INSTANCE
        {
            get { return _instance; }
        }

        public List<Product> Init()
        {

            Products products = new Products();
            return products.getProducts();
        }



        public void pustUsersComment (UserComment userComment) {

            UsersComments usersComments = new UsersComments();
            usersComments.pustUsersComments(userComment);

        }
    }
}
