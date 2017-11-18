using System.Windows;
using Bridge.CustomUIMarkup.Common;
using Bridge.Html5;
using Bridge.jQuery2;
using TicketWebsite.Common;
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

            FileUtil.ReadAsync("xml/Shop.HeaderPart.xml", (content) =>
            {
                var headerPart = new TemplateComponent
                {
                    Template = content,
                    DataContext = null // TODO ? 
                };
                headerPart.InitDOM();

                var target = new jQuery(Document.GetElementsByClassName("ui inverted vertical masthead center aligned segment"));
                var p = target.Get(0).ParentNode;
                target.Remove();
                new jQuery(p).SetFirstChild(headerPart.Root);




            });
        }
        #endregion
    }
}