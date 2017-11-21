using System.Windows;
using Bridge.jQuery2;
using TicketWebsite.Views.Pages.Contact;

namespace TicketWebsite
{
    class AppController
    {
        #region Properties
        static jQuery MainContentContainer => DOM.ById("MainContentContainer");
        #endregion

        #region Public Methods
        public void OnContactClicked()
        {
            App.HideSidebar();

            MainContentContainer.Empty();

            var view = new View();
            view.InitDOM();
            view.Root.AppendTo(MainContentContainer);
        }

        public void OnShopClicked()
        {
            MainContentContainer.Empty();

            var view = new Views.Pages.Shop.MainContent.View
            {
                DataContext = App.SiteModel.ShopPage
            };
            view.InitDOM();
            view.Root.AppendTo(MainContentContainer);
        }
        #endregion
    }
}