/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.5.0
 */
Bridge.assembly("TicketWebsite", function ($asm, globals) {
    "use strict";

    Bridge.define("TicketWebsite.App", {
        main: function Main () {
            $(function () {
                    var $t;
                    Bridge.CustomUIMarkup.Common.ScriptLoader.LoadCssFile(Bridge.CustomUIMarkup.SemanticUI.VersionInfo.CssFile);
                    Bridge.CustomUIMarkup.Common.ScriptLoader.LoadCssFiles(Bridge.CustomUIMarkup.jssor.Carousel.CssFiles);

                    var scripts = new (System.Collections.Generic.List$1(System.String)).ctor();
                    scripts.addRange(Bridge.CustomUIMarkup.SemanticUI.VersionInfo.Scripts);
                    scripts.addRange(Bridge.CustomUIMarkup.jssor.Carousel.JsFiles);

                    ($t = new Bridge.CustomUIMarkup.Common.ScriptLoader(), $t.Scripts = scripts, $t.OnLoacCompleted = TicketWebsite.App.RenderUIEditor, $t).Load();
                });
        },
        statics: {
            methods: {
                RenderUIEditor: function () {
                    new TicketWebsite.View().RenderInBody();
                }
            }
        }
    });

    Bridge.define("TicketWebsite.Model");

    Bridge.define("TicketWebsite.View", {
        inherits: [System.Windows.FrameworkElement],
        props: {
            Template: {
                get: function () {
                    return "\r\n\r\n\r\n";
                }
            }
        },
        methods: {
            RenderInBody: function () {
                var $t;
                var builder = ($t = new Bridge.CustomUIMarkup.SemanticUI.Builder(), $t.DataContext = new TicketWebsite.Model(), $t.XmlString = this.Template, $t);

                var element = Bridge.cast(builder.Build(), System.Windows.FrameworkElement);
                element.Root.appendTo(document.body);
            }
        }
    });
});
