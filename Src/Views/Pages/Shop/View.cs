using System.Windows;
using TicketWebsite.Common;
using TicketWebsite.Models.Pages.Shop;

namespace TicketWebsite.Views.Pages.Shop
{
    class View : TemplateComponent
    {
        #region Constructors
        public View()
        {
            Template = FileService.GetFileContent("Views/Pages/Shop/View.xml");
        }
        #endregion

        #region Public Methods
        public static void RenderInBody(Model model)
        {
            var part = new View
            {
                DataContext = model
            };
            part.InitDOM();
            part.Root.AppendTo(DOM.body.Empty());
        }
        #endregion
    }
}