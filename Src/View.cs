using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using Bridge.CustomUIMarkup.SemanticUI;
using Bridge.Html5;

namespace TicketWebsite
{
    class View:FrameworkElement
    {
        string Template => @"


";
        public void RenderInBody()
        {
            var builder = new Builder
            {
                DataContext = new Model(),
                XmlString = Template
            };

            var element = (FrameworkElement)builder.Build();
            element.Root.AppendTo(Document.Body);
        }
    }
}
