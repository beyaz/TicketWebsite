using System.Collections.Generic;
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
    public class FakeFullModel : FullModel
    {

        public FakeFullModel()
        {
            ShopPage = new ShopPageModel
            {
                 ProductCards = new List<Bag>
                 {
                     new Bag
                     {
                         [Field.ProductCardImagePath]="img/Card.Product.jpg"
                     },
                     new Bag
                     {
                         [Field.ProductCardImagePath]="img/Card.Product.jpg"
                     },
                     new Bag
                     {
                         [Field.ProductCardImagePath]="img/Card.Product.jpg"
                     },
                     new Bag
                     {
                         [Field.ProductCardImagePath]="img/Card.Product.jpg"
                     },
                     new Bag
                     {
                         [Field.ProductCardImagePath]="img/Card.Product.jpg"
                     },
                     new Bag
                     {
                         [Field.ProductCardImagePath]="img/Card.Product.jpg"
                     }
                 }
            };
        }
    }

}