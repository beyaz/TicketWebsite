using System.Collections.Generic;
using System.ComponentModel;
using TicketWebsite.Shared;

namespace TicketWebsite.Models.Pages.Shop.ProductsContainer
{
    public class Model : ModelBase
    {
        #region List<Bag> ProductCards
        List<Bag> _productCards;

        public List<Bag> ProductCards
        {
            get { return _productCards; }
            set
            {
                if (_productCards != value)
                {
                    _productCards = value;
                    OnPropertyChanged("ProductCards");
                }
            }
        }
        #endregion
    }
}