using Bridge.jQuery2;
using TicketWebsite.Views;

namespace TicketWebsite
{
    public class App
    {
        #region Public Methods
        public static void Main()
        {
            jQuery.Ready(RenderUIEditor);
        }
        #endregion

        #region Methods
        static void RenderUIEditor()
        {
            new ShopPage().RenderInBody();
        }
        #endregion
    }
}