using System.ComponentModel;
using System.Windows;
using TicketWebsite.Common;
using TicketWebsite.Models.Pages.Shop.ProductsContainer;

namespace TicketWebsite.Views.Pages.Shop.ProductsContainer
{
    class View : TemplateComponent
    {
        Model Model =>  DataContext as Model;

        public View()
        {
            _root = DOM.div("ui three tablet doubling mobile stackable products cards");
            this.OnPropertyChanged(nameof(DataContext), OnDataContextChanged);
        }

        void OnDataContextChanged()
        {
            if (Model == null)
            {
                return;
            }
            _root.Empty();

            foreach (var productCard in Model.ProductCards)
            {

                var card = new ProductsContainerCardItem.View {DataContext = productCard};

                card.InitDOM();

                _root.Append(card.Root);
            }

        }

        
    }
}