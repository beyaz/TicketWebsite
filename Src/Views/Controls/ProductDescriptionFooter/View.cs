using TicketWebsite.Common;

namespace TicketWebsite.Views.Controls.ProductDescriptionFooter
{
    class View : TemplateComponent
    {
        #region Constructors
        public View()
        {
            Template = FileService.GetFileContent("Views/Controls/ProductDescriptionFooter/View.xml");
        }
        #endregion
    }
}