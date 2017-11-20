using TicketWebsite.Views.Pages.Shop;

namespace TicketWebsite
{
    class Router
    {
        #region Public Methods
        public void NavigateToShopPage()
        {
            View.RenderInBody(App.SiteModel.ShopPage);
        }
        #endregion
    }
}