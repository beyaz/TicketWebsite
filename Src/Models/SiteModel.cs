using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TicketWebsite.Models.Pages.Shop;
using TicketWebsite.Shared;

namespace TicketWebsite.Models
{
    public class SiteModel:ModelBase
    {
        #region ShopPageModel ShopPage
        TicketWebsite.Models.Pages.Shop.Model _shopPage;
        public TicketWebsite.Models.Pages.Shop.Model ShopPage
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

    class SiteModelFake: SiteModel
    {
        public SiteModelFake()
        {
            ShopPage = new TicketWebsite.Models.Pages.Shop.Model
            {
                ProductsContainerModel = new Models.Pages.Shop.ProductsContainer.Model
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
                }
            };
        }
    }
}
