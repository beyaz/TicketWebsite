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


<ui.page.grid>
   <ui.container>
      <ui.text.menu.navbar FontSize='18'>
         <left.menu>
            <item>Project Name</item>
         </left.menu>
         <right.menu>
            <item>Home</item>
            <item>About</item>
            <item>Contact</item>
         </right.menu>
      </ui.text.menu.navbar>
      <ui.divider MarginBottom='10' />
      <Carousel DataSource='img/carousel_1.jpg,img/carousel_2.jpg,img/carousel_3.jpg' />
      <ui.divider MarginBottom='10' />
	  <ui.cards>
	  
		  <card>
			 <ui.image Src='http://www.samsunkorkuciftligi.com/upload/20170314__2069208026.jpg' />
			 <content Align='Center'>
				<Header Align='Center'>Motor Safari</Header>
				<description>Macera sizi bekliyor...</description>
				<ui.basic.button Text='İncele' MarginTop='11' AddClass='yellow' />
			 </content>
		  </card>
		  
		  <card>
			 <ui.image Src='http://www.samsunkorkuciftligi.com/upload/20170314__2069208026.jpg' />
			 <content Align='Center'>
				<Header Align='Center'>Motor Safari</Header>
				<description>Macera sizi bekliyor...</description>
				<ui.basic.button Text='İncele' MarginTop='11' AddClass='yellow' />
			 </content>
		  </card>
		  
	  </ui.cards>
   </ui.container>
</ui.page.grid>

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
