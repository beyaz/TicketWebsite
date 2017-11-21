using TicketWebsite.Common;

namespace TicketWebsite.Views.Pages.Shop.HeaderPart
{
    public class View : TemplateComponent
    {
        #region Constructors
        public View()
        {
            Template = FileService.GetFileContent("Views/Pages/Shop/HeaderPart/View.xml");
        }
        #endregion
    }
}