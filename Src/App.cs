using System.Collections.Generic;
using System.Windows;
using Bridge.CustomUIMarkup.Common;
using Bridge.CustomUIMarkup.SemanticUI;
using Bridge.Html5;
using Bridge.jQuery2;
using TicketWebsite.Shared;
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
            var model = new FakeFullModel();

            new ShopPage{DataContext = model.ShopPage}.RenderInBody();
            ;
        }
        #endregion
    }
}