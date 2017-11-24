using System.ComponentModel;
using System.Windows;
using Bridge.CustomUIMarkup.UI;
using TicketWebsite.Shared;

namespace TicketWebsite.Common
{
    public class TemplateComponent : FrameworkElement
    {
        public virtual void Notify(string eventName)
        {
            App.Router.HandleNotifiaction(eventName);
        }

        #region Public Properties
        public string Template { get; set; }
        #endregion

        #region Public Methods
        public override void InitDOM()
        {
            var builder = new Builder
            {
                TypeFinder = new TypeFinder2(),
                Caller = this,
                DataContext = DataContext,
                XmlString = Template
            };
            _root = builder.Build().Root;
        }
        #endregion
    }
}