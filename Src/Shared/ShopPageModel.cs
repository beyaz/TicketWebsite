using System.Collections.Generic;
using System.ComponentModel;

namespace TicketWebsite.Shared
{
    public class ShopPageModel : Bag
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