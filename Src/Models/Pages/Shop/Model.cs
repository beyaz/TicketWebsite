using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TicketWebsite.Shared;

namespace TicketWebsite.Models.Pages.Shop
{
    public class Model:ModelBase
    {
        #region ProductsContainer.Model ProductsContainerModel
        ProductsContainer.Model _productsContainerModel;
        public ProductsContainer.Model ProductsContainerModel
        {
            get { return _productsContainerModel; }
            set
            {
                if (_productsContainerModel != value)
                {
                    _productsContainerModel = value;
                    OnPropertyChanged("ProductsContainerModel");
                }
            }
        }
        #endregion


    }
}
