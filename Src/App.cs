using Bridge;
using Bridge.jQuery2;
using TicketWebsite.Models;

namespace TicketWebsite
{
    public class App
    {
        #region Static Fields
        internal static readonly Router Router = new Router();
        internal static readonly AppController Controller = new AppController();
        
        #endregion

        #region Properties
        internal static SiteModel SiteModel => new SiteModelFake();
        #endregion

        #region Public Methods
        public static void HideSidebar()
        {
            Script.Write("$('#mySidebar').sidebar('hide');");
        }

        public static void Main()
        {
            jQuery.Ready(Router.NavigateToShopPage);
        }
        #endregion
    }
}