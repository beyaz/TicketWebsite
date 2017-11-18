using System.Collections.Generic;
using System.ComponentModel;

namespace TicketWebsite.Shared
{
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