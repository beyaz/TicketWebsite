using System.Windows;
using Bridge.CustomUIMarkup.Common;
using Bridge.Html5;
using Bridge.jQuery2;
using TicketWebsite.Common;
using TicketWebsite.Models;
using TicketWebsite.Shared;

namespace TicketWebsite.Views
{
    class ShopPage : FrameworkElement
    {
        #region Public Methods

        void ReplaceHeaderPart()
        {
            var part = new TicketWebsite.Views.Pages.Shop.HeaderPart.View();
            part.InitDOM();

            var target = new jQuery(Document.GetElementsByClassName("ui inverted vertical masthead center aligned segment"));
            var p = target.Get(0).ParentNode;
            target.Remove();
            new jQuery(p).SetFirstChild(part.Root);

        }


        void ReplaceFooterPart()
        {
            var part =  new TicketWebsite.Views.Footer.View();
            part.InitDOM();

            var target = new jQuery(Document.GetElementsByClassName("ui inverted vertical footer segment"));
            var p = target.Get(0).ParentNode;
            target.Remove();
            new jQuery(p).SetLastChild(part.Root);

        }

        
        
        void RenderBody()
        {
            var part = new Pages.Shop.View
            {
                DataContext = new SiteModelFake().ShopPage
            };
            part.InitDOM();

            var target = new jQuery(Document.GetElementsByClassName("ui stackable grid container"));
          
            target.Remove();

            part.Root.InsertAfter( DOM.ById("WS-TopPart"));

          
        }

        public void RenderInBody()
        {


            ReplaceHeaderPart();
            ReplaceFooterPart();


            RenderBody();

           
















        }


        
        #endregion
    }
}