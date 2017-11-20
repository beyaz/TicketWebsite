using System.ComponentModel;
using System.Windows;
using TicketWebsite.Shared;

namespace TicketWebsite.Common
{
    public class TemplateComponent : FrameworkElement
    {
        #region Public Properties
        public string Template { get; set; }
        #endregion

        #region Public Methods
        public override void InitDOM()
        {
            var builder = new Builder
            {
                Caller = this,
                DataContext = DataContext,
                XmlString = Template
            };
            _root = builder.Build().Root;
        }
        #endregion
    }
}