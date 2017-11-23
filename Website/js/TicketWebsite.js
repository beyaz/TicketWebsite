/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.5.0
 */
Bridge.assembly("TicketWebsite", function ($asm, globals) {
    "use strict";

    Bridge.define("TicketWebsite.App", {
        main: function Main () {
            $(Bridge.fn.cacheBind(TicketWebsite.App.Router, TicketWebsite.App.Router.NavigateToShopPage));
        },
        statics: {
            fields: {
                Router: null,
                Controller: null
            },
            props: {
                SiteModel: {
                    get: function () {
                        return new TicketWebsite.Models.SiteModelFake();
                    }
                }
            },
            ctors: {
                init: function () {
                    this.Router = new TicketWebsite.Router();
                    this.Controller = new TicketWebsite.AppController();
                }
            },
            methods: {
                HideSidebar: function () {
                    $('#mySidebar').sidebar('hide');
                }
            }
        }
    });

    Bridge.define("TicketWebsite.AppController", {
        statics: {
            props: {
                MainContentContainer: {
                    get: function () {
                        return System.Windows.DOM.ById("MainContentContainer");
                    }
                }
            }
        },
        methods: {
            OnContactClicked: function () {
                TicketWebsite.App.HideSidebar();

                TicketWebsite.AppController.MainContentContainer.empty();

                var view = new TicketWebsite.Views.Pages.Contact.View();
                view.InitDOM();
                view.Root.appendTo(TicketWebsite.AppController.MainContentContainer);
            },
            OnShopClicked: function () {
                var $t;
                TicketWebsite.AppController.MainContentContainer.empty();

                var view = ($t = new TicketWebsite.Views.Pages.Shop.MainContent.View(), $t.DataContext = TicketWebsite.App.SiteModel.ShopPage, $t);
                view.InitDOM();
                view.Root.appendTo(TicketWebsite.AppController.MainContentContainer);
            },
            OnPaymentClicked: function () {
                var $t;
                TicketWebsite.AppController.MainContentContainer.empty();

                var view = ($t = new TicketWebsite.Views.Pages.PaymentPageBody.View(), $t.DataContext = TicketWebsite.App.SiteModel, $t);
                view.InitDOM();
                view.Root.appendTo(TicketWebsite.AppController.MainContentContainer);
            }
        }
    });

    Bridge.define("TicketWebsite.Common.Builder", {
        inherits: [Bridge.CustomUIMarkup.SemanticUI.Builder],
        methods: {
            CreateType: function (tag) {

                var fullName = "TicketWebsite." + (tag || "");

                var type = System.Linq.Enumerable.from(Bridge.Reflection.getAssemblyTypes(Bridge.Reflection.getTypeAssembly(Bridge.getType(this)))).firstOrDefault(function (x) {
                        return Bridge.referenceEquals(Bridge.Reflection.getTypeFullName(x).toUpperCase(), fullName.toUpperCase());
                    }, null);

                if (type != null) {
                    return type;
                }

                return Bridge.CustomUIMarkup.SemanticUI.Builder.prototype.CreateType.call(this, tag);
            }
        }
    });

    Bridge.define("TicketWebsite.Common.FileService", {
        statics: {
            methods: {
                GetFileContent: function (fileName) {
                    return TicketWebsite.FileContents[fileName];
                    ;
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
            Notify: function (eventName) {
                TicketWebsite.App.Router.HandleNotifiaction(eventName);
            },
            InitDOM: function () {
                var $t;
                var builder = ($t = new TicketWebsite.Common.Builder(), $t.Caller = this, $t.DataContext = this.DataContext, $t.XmlString = this.Template, $t);
                this._root = builder.Build().Root;
            }
        }
    });

    Bridge.define("TicketWebsite.Shared.ModelBase", {
        inherits: [System.ComponentModel.Bag],
        fields: {
            _labels: null
        },
        props: {
            Labels: {
                get: function () {
                    return this._labels;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this._labels, value)) {
                        this._labels = value;
                        this.OnPropertyChanged("Labels");
                    }
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.ComponentModel.Bag.ctor.call(this);
                this.Labels = new TicketWebsite.Shared.Labels();
            }
        }
    });

    Bridge.define("TicketWebsite.Router", {
        methods: {
            HandleNotifiaction: function (eventName) {
                System.ComponentModel.ReflectionHelper.Invoke(TicketWebsite.App.Controller, eventName);
            },
            NavigateToShopPage: function () {
                TicketWebsite.Views.Pages.Shop.View.RenderInBody(TicketWebsite.App.SiteModel.ShopPage);
            }
        }
    });

    Bridge.define("TicketWebsite.Shared.Field", {
        statics: {
            fields: {
                Product_Categories: null,
                "ProductCardImagePath": null
            },
            ctors: {
                init: function () {
                    this.Product_Categories = "Product_Categories";
                    this["ProductCardImagePath"] = "ProductCardImagePath";
                }
            }
        }
    });

    Bridge.define("TicketWebsite.Shared.Labels", {
        inherits: [System.ComponentModel.Bag],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.ComponentModel.Bag.ctor.call(this);
                this.setItem(TicketWebsite.Shared.Field.Product_Categories, "Product Categories");
            }
        }
    });

    Bridge.define("TicketWebsite.Views.Controls.PaginationMenu.View", {
        inherits: [System.Windows.FrameworkElement],
        statics: {
            fields: {
                "ItemCountProperty": null,
                ActiveNumberProperty: null
            },
            ctors: {
                init: function () {
                    this["ItemCountProperty"] = System.Windows.DependencyProperty.Register$1("ItemCount", System.String, TicketWebsite.Views.Controls.PaginationMenu.View, new System.Windows.PropertyMetadata.$ctor2(TicketWebsite.Views.Controls.PaginationMenu.View.OnItemCountChanged));
                    this.ActiveNumberProperty = System.Windows.DependencyProperty.Register$1("ActiveNumber", System.String, TicketWebsite.Views.Controls.PaginationMenu.View, new System.Windows.PropertyMetadata.$ctor2(TicketWebsite.Views.Controls.PaginationMenu.View.OnActiveNumberChanged));
                }
            },
            methods: {
                OnItemCountChanged: function (d, e) {
                    var me = Bridge.cast(d, TicketWebsite.Views.Controls.PaginationMenu.View);

                    me.CreateSubElements();
                },
                OnActiveNumberChanged: function (d, e) {
                    var me = Bridge.cast(d, TicketWebsite.Views.Controls.PaginationMenu.View);

                    me.SetActive(System.Extensions.ToInt32(e.NewValue));
                }
            }
        },
        fields: {
            _numbers: null
        },
        props: {
            "ItemCount": {
                get: function () {
                    return System.Nullable.getValue(Bridge.cast(Bridge.unbox(this.GetValue$1(TicketWebsite.Views.Controls.PaginationMenu.View["ItemCountProperty"])), System.Int32));
                },
                set: function (value) {
                    this.SetValue$1(TicketWebsite.Views.Controls.PaginationMenu.View["ItemCountProperty"], Bridge.box(value, System.Int32));
                }
            },
            ActiveNumber: {
                get: function () {
                    return System.Nullable.getValue(Bridge.cast(Bridge.unbox(this.GetValue$1(TicketWebsite.Views.Controls.PaginationMenu.View.ActiveNumberProperty)), System.Int32));
                },
                set: function (value) {
                    this.SetValue$1(TicketWebsite.Views.Controls.PaginationMenu.View.ActiveNumberProperty, Bridge.box(value, System.Int32));
                }
            }
        },
        ctors: {
            init: function () {
                this._numbers = new (System.Collections.Generic.List$1($)).ctor();
            },
            ctor: function () {
                this.$initialize();
                System.Windows.FrameworkElement.ctor.call(this);
                this._root = System.Windows.DOM.div("ui pagination menu");
            }
        },
        methods: {
            CreateSubElements: function () {
                //<div class='ui pagination menu' >
                //   <a class='item'  >1</a> 
                //   <a class='item'  >2</a>
                //   <a class='item active ' >3</a>
                //   <a class='next icon item ' >
                //    <i class='right chevron icon'></i>
                //   </a>		
                //</div>

                this._numbers.clear();
                this._root.empty();

                for (var i = 0; i < this["ItemCount"]; i = (i + 1) | 0) {
                    Bridge.jQuery2.Extensions.AppendTo(System.Windows.DOM.a("item").html(i.toString()).appendTo(this._root), this._numbers);
                }

                System.Windows.DOM.a("next icon item").appendTo(this._root).append(System.Windows.DOM.i("right chevron icon"));
            },
            SetActive: function (index) {
                this._numbers.forEach(function (x) {
                    x.removeClass("active");
                });
                this._numbers.getItem(((index - 1) | 0)).addClass("active");
            }
        }
    });

    Bridge.define("TicketWebsite.Models.Pages.Shop.LeftMenu.Model", {
        inherits: [TicketWebsite.Shared.ModelBase]
    });

    Bridge.define("TicketWebsite.Models.Pages.Shop.Model", {
        inherits: [TicketWebsite.Shared.ModelBase],
        fields: {
            _productsContainerModel: null
        },
        props: {
            ProductsContainerModel: {
                get: function () {
                    return this._productsContainerModel;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this._productsContainerModel, value)) {
                        this._productsContainerModel = value;
                        this.OnPropertyChanged("ProductsContainerModel");
                    }
                }
            }
        }
    });

    Bridge.define("TicketWebsite.Models.Pages.Shop.ProductsContainer.Model", {
        inherits: [TicketWebsite.Shared.ModelBase],
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

    Bridge.define("TicketWebsite.Models.SiteModel", {
        inherits: [TicketWebsite.Shared.ModelBase],
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

    Bridge.define("TicketWebsite.Views.Footer.View", {
        inherits: [TicketWebsite.Common.TemplateComponent],
        ctors: {
            ctor: function () {
                this.$initialize();
                TicketWebsite.Common.TemplateComponent.ctor.call(this);
                this.Template = TicketWebsite.Common.FileService.GetFileContent("Views/Footer/View.xml");
            }
        }
    });

    Bridge.define("TicketWebsite.Views.Pages.Contact.View", {
        inherits: [TicketWebsite.Common.TemplateComponent],
        ctors: {
            ctor: function () {
                this.$initialize();
                TicketWebsite.Common.TemplateComponent.ctor.call(this);
                this.Template = TicketWebsite.Common.FileService.GetFileContent("Views/Pages/Contact/View.xml");
            }
        }
    });

    Bridge.define("TicketWebsite.Views.Pages.PaymentPageBody.View", {
        inherits: [TicketWebsite.Common.TemplateComponent],
        ctors: {
            ctor: function () {
                this.$initialize();
                TicketWebsite.Common.TemplateComponent.ctor.call(this);
                this.Template = TicketWebsite.Common.FileService.GetFileContent("Views/Pages/PaymentPageBody/View.xml");
            }
        }
    });

    Bridge.define("TicketWebsite.Views.Pages.Shop.HeaderPart.View", {
        inherits: [TicketWebsite.Common.TemplateComponent],
        ctors: {
            ctor: function () {
                this.$initialize();
                TicketWebsite.Common.TemplateComponent.ctor.call(this);
                this.Template = TicketWebsite.Common.FileService.GetFileContent("Views/Pages/Shop/HeaderPart/View.xml");
            }
        }
    });

    Bridge.define("TicketWebsite.Views.Pages.Shop.LeftMenu.View", {
        inherits: [TicketWebsite.Common.TemplateComponent],
        ctors: {
            ctor: function () {
                this.$initialize();
                TicketWebsite.Common.TemplateComponent.ctor.call(this);
                this.Template = TicketWebsite.Common.FileService.GetFileContent("Views/Pages/Shop/LeftMenu/View.xml");
                this.DataContext = new TicketWebsite.Models.Pages.Shop.LeftMenu.Model();
            }
        }
    });

    Bridge.define("TicketWebsite.Views.Pages.Shop.MainContent.View", {
        inherits: [TicketWebsite.Common.TemplateComponent],
        ctors: {
            ctor: function () {
                this.$initialize();
                TicketWebsite.Common.TemplateComponent.ctor.call(this);
                this.Template = TicketWebsite.Common.FileService.GetFileContent("Views/Pages/Shop/MainContent/View.xml");
            }
        }
    });

    Bridge.define("TicketWebsite.Views.Pages.Shop.ProductsContainer.View", {
        inherits: [TicketWebsite.Common.TemplateComponent],
        props: {
            Model: {
                get: function () {
                    return Bridge.as(this.DataContext, TicketWebsite.Models.Pages.Shop.ProductsContainer.Model);
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                TicketWebsite.Common.TemplateComponent.ctor.call(this);
                this._root = System.Windows.DOM.div("ui three tablet doubling mobile stackable products cards");
                System.ComponentModel.Extensions.OnPropertyChanged(this, "DataContext", Bridge.fn.cacheBind(this, this.OnDataContextChanged));
            }
        },
        methods: {
            OnDataContextChanged: function () {
                var $t, $t1;
                if (this.Model == null) {
                    return;
                }
                this._root.empty();

                $t = Bridge.getEnumerator(this.Model.ProductCards);
                try {
                    while ($t.moveNext()) {
                        var productCard = $t.Current;

                        var card = ($t1 = new TicketWebsite.Views.Pages.Shop.ProductsContainerCardItem.View(), $t1.DataContext = productCard, $t1);

                        card.InitDOM();

                        this._root.append(card.Root);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }
            }
        }
    });

    Bridge.define("TicketWebsite.Views.Pages.Shop.ProductsContainerCardItem.View", {
        inherits: [TicketWebsite.Common.TemplateComponent],
        ctors: {
            ctor: function () {
                this.$initialize();
                TicketWebsite.Common.TemplateComponent.ctor.call(this);
                this.Template = TicketWebsite.Common.FileService.GetFileContent("Views/Pages/Shop/ProductsContainerCardItem/View.xml");
            }
        }
    });

    Bridge.define("TicketWebsite.Views.Pages.Shop.View", {
        inherits: [TicketWebsite.Common.TemplateComponent],
        statics: {
            methods: {
                RenderInBody: function (model) {
                    var $t;
                    var part = ($t = new TicketWebsite.Views.Pages.Shop.View(), $t.DataContext = model, $t);
                    part.InitDOM();
                    part.Root.appendTo(System.Windows.DOM.body.empty());
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                TicketWebsite.Common.TemplateComponent.ctor.call(this);
                this.Template = TicketWebsite.Common.FileService.GetFileContent("Views/Pages/Shop/View.xml");
            }
        }
    });

    Bridge.define("TicketWebsite.Views.SidebarMenu.View", {
        inherits: [TicketWebsite.Common.TemplateComponent],
        ctors: {
            ctor: function () {
                this.$initialize();
                TicketWebsite.Common.TemplateComponent.ctor.call(this);
                this.Template = TicketWebsite.Common.FileService.GetFileContent("Views/SidebarMenu/View.xml");
            }
        }
    });

    Bridge.define("TicketWebsite.Models.SiteModelFake", {
        inherits: [TicketWebsite.Models.SiteModel],
        ctors: {
            ctor: function () {
                var $t, $t1;
                this.$initialize();
                TicketWebsite.Models.SiteModel.ctor.call(this);
                this.ShopPage = ($t = new TicketWebsite.Models.Pages.Shop.Model(), $t.ProductsContainerModel = ($t1 = new TicketWebsite.Models.Pages.Shop.ProductsContainer.Model(), $t1.ProductCards = function (_o7) {
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
                    }(new (System.Collections.Generic.List$1(System.ComponentModel.Bag)).ctor()), $t1), $t);
            }
        }
    });
});
