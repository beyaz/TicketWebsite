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
                    ;
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
                    return "\r\n\r\n\r\n<ui.page.grid>\r\n   <ui.container>\r\n      <ui.text.menu.navbar FontSize='18'>\r\n         <left.menu>\r\n            <item>Project Name</item>\r\n         </left.menu>\r\n         <right.menu>\r\n            <item>Home</item>\r\n            <item>About</item>\r\n            <item>Contact</item>\r\n         </right.menu>\r\n      </ui.text.menu.navbar>\r\n      <ui.divider MarginBottom='10' />\r\n      <Carousel DataSource='img/carousel_1.jpg,img/carousel_2.jpg,img/carousel_3.jpg' />\r\n      <ui.divider MarginBottom='10' />\r\n\t  <ui.cards>\r\n\t  \r\n\t\t  <card>\r\n\t\t\t <ui.image Src='http://www.samsunkorkuciftligi.com/upload/20170314__2069208026.jpg' />\r\n\t\t\t <content Align='Center'>\r\n\t\t\t\t<Header Align='Center'>Motor Safari</Header>\r\n\t\t\t\t<description>Macera sizi bekliyor...</description>\r\n\t\t\t\t<ui.basic.button Text='İncele' MarginTop='11' AddClass='yellow' />\r\n\t\t\t </content>\r\n\t\t  </card>\r\n\t\t  \r\n\t\t  <card>\r\n\t\t\t <ui.image Src='http://www.samsunkorkuciftligi.com/upload/20170314__2069208026.jpg' />\r\n\t\t\t <content Align='Center'>\r\n\t\t\t\t<Header Align='Center'>Motor Safari</Header>\r\n\t\t\t\t<description>Macera sizi bekliyor...</description>\r\n\t\t\t\t<ui.basic.button Text='İncele' MarginTop='11' AddClass='yellow' />\r\n\t\t\t </content>\r\n\t\t  </card>\r\n\t\t  \r\n\t  </ui.cards>\r\n   </ui.container>\r\n</ui.page.grid>\r\n\r\n";
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
