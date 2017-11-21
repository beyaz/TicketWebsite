using System.ComponentModel;
using TicketWebsite.Views.Pages.Shop;

namespace TicketWebsite
{
    class Router
    {
        #region Public Methods
        public virtual void HandleNotifiaction(string eventName)
        {
            ReflectionHelper.Invoke(App.Controller, eventName);
        }

        public void NavigateToShopPage()
        {
            View.RenderInBody(App.SiteModel.ShopPage);
        }
        #endregion
    }
}