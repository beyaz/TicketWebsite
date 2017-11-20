using TicketWebsite.Common;
using TicketWebsite.Models.Pages.Shop.LeftMenu;

namespace TicketWebsite.Views.Pages.Shop.LeftMenu
{
    public class View : TemplateComponent
    {
        #region Constructors
        public View()
        {
            Template = FileService.GetFileContent("Views/Pages/Shop/LeftMenu/View.xml");
            DataContext = new Model();
        }
        #endregion
    }
}