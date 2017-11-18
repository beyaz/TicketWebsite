using System.ComponentModel;

namespace TicketWebsite.Shared
{
    public class FullModel : Bag
    {

        #region ShopPageModel ShopPage
        ShopPageModel _shopPage;
        public ShopPageModel ShopPage
        {
            get { return _shopPage; }
            set
            {
                if (_shopPage != value)
                {
                    _shopPage = value;
                    OnPropertyChanged("ShopPage");
                }
            }
        }
        #endregion

    }
}