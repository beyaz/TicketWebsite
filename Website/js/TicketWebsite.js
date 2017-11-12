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
        fields: {
            mainContentContainer: null
        },
        methods: {
            OnSafariClick: function () {
                Bridge.CustomUIMarkup.Common.FileUtil.ReadAsync("xml/Detail.xml", Bridge.fn.bind(this, function (content) {
                    var $t;
                    var builder = ($t = new Bridge.CustomUIMarkup.SemanticUI.Builder(), $t.DataContext = new TicketWebsite.Model(), $t.XmlString = content, $t.Caller = this, $t);

                    var element = Bridge.cast(builder.Build(), System.Windows.FrameworkElement);

                    this.mainContentContainer.Root.empty();

                    element.Root.appendTo(this.mainContentContainer.Root);
                }));
            },
            RenderInBody: function () {
                Bridge.CustomUIMarkup.Common.FileUtil.ReadAsync("xml/View.xml", Bridge.fn.bind(this, function (content) {
                    var $t;
                    var builder = ($t = new Bridge.CustomUIMarkup.SemanticUI.Builder(), $t.DataContext = new TicketWebsite.Model(), $t.XmlString = content, $t.Caller = this, $t);

                    var element = Bridge.cast(builder.Build(), System.Windows.FrameworkElement);
                    this._root = element.Root;

                    element.Root.appendTo(document.body);
                }));
            }
        }
    });
});
