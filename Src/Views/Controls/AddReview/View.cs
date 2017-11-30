using System.Windows;
using TicketWebsite.Common;

namespace TicketWebsite.Views.Controls.AddReview
{
    class View : TemplateComponent
    {
        public FrameworkElement _header;
        #region Constructors
        public View()
        {
            Template = FileService.GetFileContent("Views/Controls/AddReview/View.xml");
            _header.Visibility = Visibility.Collapsed;
        }
        
        #endregion
    }
}