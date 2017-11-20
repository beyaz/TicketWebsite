using Bridge.jQuery2;
using TicketWebsite.Models;

namespace TicketWebsite
{
    public class App
    {
        #region Static Fields
        static readonly Router Router = new Router();
        #endregion

        #region Properties
        internal static SiteModel SiteModel => new SiteModelFake();
        #endregion

        #region Public Methods
        public static void Main()
        {
            jQuery.Ready(Router.NavigateToShopPage);
        }
        #endregion
    }
}