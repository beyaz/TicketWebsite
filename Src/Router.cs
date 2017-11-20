using System;
using System.Windows;
using Bridge.jQuery2;
using TicketWebsite.Common;
using TicketWebsite.Views.Pages.Contact;

namespace TicketWebsite
{
    class Router
    {
        jQuery MainContentContainer => DOM.ById("MainContentContainer");

        #region Public Methods
        public void HandleNotifiaction(string eventName)
        {
            if (eventName == EventName.OnContactClicked.ToString())
            {
                MainContentContainer.Empty();

                var view = new View();
                view.InitDOM();
                view.Root.AppendTo(MainContentContainer);

                return;
            }

            if (eventName == EventName.OnShopClicked.ToString())
            {
                MainContentContainer.Empty();

                var view = new TicketWebsite.Views.Pages.Shop.MainContent.View();
                view.DataContext = App.SiteModel.ShopPage;
                view.InitDOM();
                view.Root.AppendTo(MainContentContainer);

                return;
            }

            throw new Exception(eventName);
        }

        public void NavigateToShopPage()
        {
            Views.Pages.Shop.View.RenderInBody(App.SiteModel.ShopPage);
        }
        #endregion
    }
}