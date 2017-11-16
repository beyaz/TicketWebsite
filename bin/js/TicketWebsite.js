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
                    Bridge.CustomUIMarkup.SemanticUI.Builder.RegisterTag("ProductCard", TicketWebsite.Views.ProductCard);
                }
            }
        }
    });

    Bridge.define("TicketWebsite.Common.ComponentBase", {
        inherits: [System.Windows.FrameworkElement],
        props: {
            Template: {
                get: function () {
                    return null;
                }
            }
        },
        methods: {
            InitDOM: function () {
                var $t;
                this._root = Bridge.unbox(($t = new TicketWebsite.Common.Builder(), $t.Caller = this, $t.DataContext = this.DataContext, $t.XmlString = this.Template, $t).Build()).Root;
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
                var $t, $t1;
                this.ProductsContainer.empty();

                $t = Bridge.getEnumerator(this.DataContext$1.ProductCards);
                try {
                    while ($t.moveNext()) {
                        var productCard = $t.Current;
                        var card = ($t1 = new TicketWebsite.Views.ProductCard(), $t1.DataContext = productCard, $t1);

                        card.InitDOM();

                        this.ProductsContainer.append(card.Root);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }}
        }
    });

    Bridge.define("TicketWebsite.Shared.FakeFullModel", {
        inherits: [TicketWebsite.Shared.FullModel],
        ctors: {
            ctor: function () {
                var $t;
                this.$initialize();
                TicketWebsite.Shared.FullModel.ctor.call(this);
                this.ShopPage = ($t = new TicketWebsite.Shared.ShopPageModel(), $t.ProductCards = function (_o2) {
                        _o2.add(function (_o1) {
                                _o1.setItem(TicketWebsite.Shared.Field["ProductCardImagePath"], "img/Card.Product.jpg");
                                return _o1;
                            }(new System.ComponentModel.Bag()));
                        return _o2;
                    }(new (System.Collections.Generic.List$1(System.ComponentModel.Bag)).ctor()), $t);
            }
        }
    });

    Bridge.define("TicketWebsite.Views.ProductCard", {
        inherits: [TicketWebsite.Common.ComponentBase],
        props: {
            Template: {
                get: function () {
                    return "\r\n<div class='ui card post-37 product type-product status-publish has-post-thumbnail product_cat-tools product_tag-amazon first instock shipping-taxable product-type-external'>\r\n  <div class='ui fluid image'>\r\n    <a href='https://chap.website/shop1/product/affiliate-product/' class='woocommerce-LoopProduct-link'>\r\n      <img width='300' height='300'\r\n           src='{Binding ProductCardImagePath}'\r\n           class='attachment-shop_catalog size-shop_catalog wp-post-image'\r\n           srcset='//chap.website/shop1/wp-content/uploads/sites/44/2017/05/felix-russell-saw-167176-300x300.jpg 300w, //chap.website/shop1/wp-content/uploads/sites/44/2017/05/felix-russell-saw-167176-150x150.jpg 150w, //chap.website/shop1/wp-content/uploads/sites/44/2017/05/felix-russell-saw-167176-180x180.jpg 180w, //chap.website/shop1/wp-content/uploads/sites/44/2017/05/felix-russell-saw-167176-600x600.jpg 600w'\r\n           sizes='(max-width: 300px) 100vw, 300px' />\r\n    </a>\r\n  </div>\r\n  <div class='content'>\r\n    <div class='header'>\r\n      <a href='https://chap.website/shop1/product/affiliate-product/'\r\n         class='ui tiny header woocommerce-LoopProduct-link'>\r\n        Affiliate product\r\n      </a>\r\n    </div>\r\n    <div class='meta'>\r\n      <a href='https://chap.website/shop1/product-category/tools/' rel='tag'>Tools</a>\r\n    </div>\r\n    <div class='star-rating'>\r\n      <span style='width:20%'>Rated <strong class='rating'>1.00</strong> out of 5</span>\r\n    </div>\r\n  </div>\r\n  <div class='extra content'>\r\n    <div class='ui medium header'>\r\n      <span class='woocommerce-Price-amount amount'>\r\n        <span class='woocommerce-Price-currencySymbol'>£</span>15.00\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <a class='ui bottom attached medium button button product_type_external' rel='nofollow' href='https://amazon.com'\r\n     data-quantity='1' data-product_id='37' data-product_sku=''>\r\n    <i class='add icon'></i>Buy from Amazon\r\n  </a>\r\n</div>\r\n\r\n";
                }
            }
        }
    });
});
