using System.ComponentModel;
using System.Windows;
using TicketWebsite.Common;
using TicketWebsite.Models.Pages.Shop.ProductsContainer;

namespace TicketWebsite.Views.Pages.Shop.ProductsContainerCardItem
{
    class View : TemplateComponent
    {
        
        public View()
        {
            Template = FileService.GetFileContent("Views/Pages/Shop/ProductsContainerCardItem/View.xml");
        }

       
        

        
    }
}