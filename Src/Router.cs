using System;
using System.Windows;
using Bridge;
using Bridge.jQuery2;
using Retyped;
using TicketWebsite.Common;
using TicketWebsite.Views.Pages.Contact;

namespace TicketWebsite
{
    class Router
    {
        jQuery MainContentContainer => DOM.ById("MainContentContainer");

        jQuery SidebarMenu => DOM.ById("sidebar_menu");
        jQuery pusher => jQuery.Select(".pusher");
        

        #region Public Methods

        void OpenSideBarMenu()
        {

            SidebarMenu.AddClass("uncover visible");
            pusher.AddClass("dimmed");


            //var a = DOM.ById("sidebar_menu").First().As<Retyped.semantic_ui.JQuery>();

            //a.sidebar(new semantic_ui.SemanticUI.SidebarSettings
            //{
            //    context = semantic_ui.SemanticUI.Selector.Create("")
            //});

        }
        public void HandleNotifiaction(string eventName)
        {
            if (eventName == EventName.OnContactClicked.ToString())
            {
                OpenSideBarMenu();
                return;



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