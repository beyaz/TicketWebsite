using System;
using System.Windows;

namespace TicketWebsite.Common
{
    class ComponentBase : FrameworkElement
    {
        #region Properties
        protected virtual string Template => null;
        #endregion

        #region Public Methods
        public override void InitDOM()
        {
            _root = new Builder
            {
                Caller = this,
                DataContext = DataContext,
                XmlString = Template
            }.Build().As<FrameworkElement>().Root;
        }
        #endregion
    }
}