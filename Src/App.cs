using Bridge.jQuery2;
using TicketWebsite.Models;
using TicketWebsite.Views.Pages.Shop;

namespace TicketWebsite
{
    public class App
    {
        #region Properties
        static SiteModel SiteModel => new SiteModelFake();
        #endregion

        #region Public Methods
        public static void Main()
        {
            jQuery.Ready(RenderUIEditor);
        }
        #endregion

        #region Methods
        static void RenderUIEditor()
        {
            View.RenderInBody(SiteModel.ShopPage);
        }
        #endregion
    }
}