using TicketWebsite.Common;

namespace TicketWebsite.Views.Footer
{
    class View : TemplateComponent
    {
        #region Constructors
        public View()
        {
            Template = FileService.GetFileContent("Views/Footer/View.xml");
        }
        #endregion
    }
}