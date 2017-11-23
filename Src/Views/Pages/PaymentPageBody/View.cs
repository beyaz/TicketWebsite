using TicketWebsite.Common;

namespace TicketWebsite.Views.Pages.PaymentPageBody
{
    class View : TemplateComponent
    {
        #region Constructors
        public View()
        {
            Template = FileService.GetFileContent("Views/Pages/PaymentPageBody/View.xml");
        }
        #endregion
    }
}