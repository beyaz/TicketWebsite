/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.5.0
 */
Bridge.assembly("TicketWebsite", function ($asm, globals) {
    "use strict";

    Bridge.define("TicketWebsite.App", {
        main: function Main () {
            $(TicketWebsite.App.RenderUIEditor);
        },
        statics: {
            methods: {
                RenderUIEditor: function () {
                    var $t;
                    var model = new TicketWebsite.Shared.FakeFullModel();

                    ($t = new TicketWebsite.Views.ShopPage(), $t.DataContext = model.ShopPage, $t).RenderInBody();
                    ;
                }
            }
        }
    });

    Bridge.define("TicketWebsite.Common.Builder", {
        inherits: [Bridge.CustomUIMarkup.SemanticUI.Builder],
        statics: {
            ctors: {
                ctor: function () {
                    // RegisterTag("ProductCard", typeof(ProductCard));
                }
            }
        }
    });

    Bridge.define("TicketWebsite.Common.TemplateComponent", {
        inherits: [System.Windows.FrameworkElement],
        fields: {
            Template: null
        },
        methods: {
            InitDOM: function () {
                var $t;
                this._root = ($t = new TicketWebsite.Common.Builder(), $t.Caller = this, $t.DataContext = this.DataContext, $t.XmlString = this.Template, $t).Build().Root;
            }
        }
    });

    Bridge.define("TicketWebsite.Shared.FullModel", {
        inherits: [System.ComponentModel.Bag],
        fields: {
            _shopPage: null
        },
        props: {
            ShopPage: {
                get: function () {
                    return this._shopPage;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this._shopPage, value)) {
                        this._shopPage = value;
                        this.OnPropertyChanged("ShopPage");
                    }
                }
            }
        }
    });

    Bridge.define("TicketWebsite.Shared.Field", {
        statics: {
            fields: {
                "ProductCardImagePath": null
            },
            ctors: {
                init: function () {
                    this["ProductCardImagePath"] = "ProductCardImagePath";
                }
            }
        }
    });

    Bridge.define("TicketWebsite.Shared.ShopPageModel", {
        inherits: [System.ComponentModel.Bag],
        fields: {
            _productCards: null
        },
        props: {
            ProductCards: {
                get: function () {
                    return this._productCards;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this._productCards, value)) {
                        this._productCards = value;
                        this.OnPropertyChanged("ProductCards");
                    }
                }
            }
        }
    });

    Bridge.define("TicketWebsite.Views.ShopPage", {
        inherits: [System.Windows.FrameworkElement],
        props: {
            DataContext$1: {
                get: function () {
                    return Bridge.cast(this.DataContext, TicketWebsite.Shared.ShopPageModel);
                }
            },
            ProductsContainer: {
                get: function () {
                    return $(document.getElementsByClassName("ui three tablet doubling mobile stackable products cards"));
                }
            }
        },
        methods: {
            RenderInBody: function () {

                // replace header
                Bridge.CustomUIMarkup.Common.FileUtil.ReadAsync("xml/Shop.HeaderPart.xml", function (content) {
                    var $t;
                    var headerPart = ($t = new TicketWebsite.Common.TemplateComponent(), $t.Template = content, $t.DataContext = null, $t);
                    headerPart.InitDOM();

                    var target = $(document.getElementsByClassName("ui inverted vertical masthead center aligned segment"));
                    var p = target.get(0).parentNode;
                    target.remove();
                    Bridge.CustomUIMarkup.Common.Extensions.SetFirstChild($(p), headerPart.Root);

                });

                // replace body
                this.ProductsContainer.empty();
                Bridge.CustomUIMarkup.Common.FileUtil.ReadAsync("xml/Card.Product.xml", Bridge.fn.bind(this, function (template) {
                    var $t, $t1;
                    $t = Bridge.getEnumerator(this.DataContext$1.ProductCards);
                    try {
                        while ($t.moveNext()) {
                            var productCard = $t.Current;
                            var card = ($t1 = new TicketWebsite.Common.TemplateComponent(), $t1.Template = template, $t1.DataContext = productCard, $t1);

                            card.InitDOM();

                            this.ProductsContainer.append(card.Root);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }}));
            }
        }
    });

    Bridge.define("TicketWebsite.Shared.FakeFullModel", {
        inherits: [TicketWebsite.Shared.FullModel],
        ctors: {
            ctor: function () {
                var $t;
                this.$initialize();
                TicketWebsite.Shared.FullModel.ctor.call(this);
                this.ShopPage = ($t = new TicketWebsite.Shared.ShopPageModel(), $t.ProductCards = function (_o7) {
                        _o7.add(function (_o1) {
                                _o1.setItem(TicketWebsite.Shared.Field["ProductCardImagePath"], "img/Card.Product.jpg");
                                return _o1;
                            }(new System.ComponentModel.Bag()));
                        _o7.add(function (_o2) {
                                _o2.setItem(TicketWebsite.Shared.Field["ProductCardImagePath"], "img/Card.Product.jpg");
                                return _o2;
                            }(new System.ComponentModel.Bag()));
                        _o7.add(function (_o3) {
                                _o3.setItem(TicketWebsite.Shared.Field["ProductCardImagePath"], "img/Card.Product.jpg");
                                return _o3;
                            }(new System.ComponentModel.Bag()));
                        _o7.add(function (_o4) {
                                _o4.setItem(TicketWebsite.Shared.Field["ProductCardImagePath"], "img/Card.Product.jpg");
                                return _o4;
                            }(new System.ComponentModel.Bag()));
                        _o7.add(function (_o5) {
                                _o5.setItem(TicketWebsite.Shared.Field["ProductCardImagePath"], "img/Card.Product.jpg");
                                return _o5;
                            }(new System.ComponentModel.Bag()));
                        _o7.add(function (_o6) {
                                _o6.setItem(TicketWebsite.Shared.Field["ProductCardImagePath"], "img/Card.Product.jpg");
                                return _o6;
                            }(new System.ComponentModel.Bag()));
                        return _o7;
                    }(new (System.Collections.Generic.List$1(System.ComponentModel.Bag)).ctor()), $t);
            }
        }
    });
});
