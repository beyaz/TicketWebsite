using System.ComponentModel;

namespace TicketWebsite.Shared
{
    public class Labels : Bag
    {
        #region Constructors
        public Labels()
        {
            this[Field.Product_Categories] = "Product Categories";
        }
        #endregion
    }
}