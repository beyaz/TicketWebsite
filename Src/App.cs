using System.Collections.Generic;
using System.Windows;
using Bridge.CustomUIMarkup.Common;
using Bridge.CustomUIMarkup.SemanticUI;
using Bridge.Html5;
using Bridge.jQuery2;

namespace TicketWebsite
{
    
    public class App
    {
        

        #region Public Methods
        public static void Main()
        {
            jQuery.Ready(() =>
            {
                ScriptLoader.LoadCssFile(VersionInfo.CssFile);
                ScriptLoader.LoadCssFiles(Bridge.CustomUIMarkup.jssor.Carousel.CssFiles); 

                var scripts = new List<string>();
                scripts.AddRange(VersionInfo.Scripts );
                scripts.AddRange(Bridge.CustomUIMarkup.jssor.Carousel.JsFiles);

                new ScriptLoader
                {
                    Scripts = scripts,
                    OnLoacCompleted = RenderUIEditor
                }.Load();
            });
        }
        #endregion

        #region Methods
        static void RenderUIEditor()
        {
            new View().RenderInBody();
            ;
        }
        #endregion
    }
}