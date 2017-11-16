using System.Windows;
using Bridge.Html5;
using Bridge.jQuery2;
using TicketWebsite.Shared;

namespace TicketWebsite.Views
{
    class ShopPage : FrameworkElement
    {
        #region Properties
        new ShopPageModel DataContext => (ShopPageModel) base.DataContext;
        jQuery ProductsContainer => new jQuery(Document.GetElementsByClassName("ui three tablet doubling mobile stackable products cards"));
        #endregion

        #region Public Methods
        public void RenderInBody()
        {
            ProductsContainer.Empty();

            foreach (var productCard in DataContext.ProductCards)
            {
                var card = new ProductCard {DataContext = productCard};

                card.InitDOM();

                ProductsContainer.Append(card.Root);
            }
        }
        #endregion
    }
}