using TicketWebsite.Common;

namespace TicketWebsite.Views.SidebarMenu
{
    class View : TemplateComponent
    {
        #region Constructors
        public View()
        {
            Template = FileService.GetFileContent("Views/SidebarMenu/View.xml");
        }
        #endregion
    }
}