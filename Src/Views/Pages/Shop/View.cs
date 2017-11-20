using System.ComponentModel;
using System.Windows;
using TicketWebsite.Common;
using TicketWebsite.Models.Pages.Shop.ProductsContainer;

namespace TicketWebsite.Views.Pages.Shop
{
    class View : TemplateComponent
    {
        
        public View()
        {
            Template = FileService.GetFileContent("Views/Pages/Shop/View.xml");
        }

        public static void RenderInBody(TicketWebsite.Models.Pages.Shop.Model model)
        {
            var part = new TicketWebsite.Views.Pages.Shop.View
            {
                DataContext = model
            };
            part.InitDOM();
            part.Root.AppendTo(DOM.body.Empty());
        }
    }
}