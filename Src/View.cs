using System;
using System.Windows;
using Bridge.CustomUIMarkup.Common;
using Bridge.CustomUIMarkup.SemanticUI;
using Bridge.Html5;
using Bridge.jQuery2;

namespace TicketWebsite
{
    class View : FrameworkElement
    {
        public FrameworkElement mainContentContainer;

        public void OnSafariClick()
        {
            FileUtil.ReadAsync("xml/Detail.xml", content =>
            {
                var builder = new Builder
                {
                    DataContext = new Model(),
                    XmlString = content,
                    Caller = this
                };

                var element = (FrameworkElement)builder.Build();

                mainContentContainer.Root.Empty();

                element.Root.AppendTo(mainContentContainer.Root);
            });
        }

        #region Public Methods
        public void RenderInBody()
        {
            FileUtil.ReadAsync("xml/View.xml", content =>
            {
                var builder = new Builder
                {
                    DataContext = new Model(),
                    XmlString = content,
                    Caller = this
                };

                var element = (FrameworkElement) builder.Build();
                _root = element.Root;

                element.Root.AppendTo(Document.Body);
            });
        }
        #endregion

        #region Methods
      
        #endregion
    }
}