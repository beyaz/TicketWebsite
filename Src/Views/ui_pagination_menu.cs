using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using Bridge.CustomUIMarkup.Common;
using Bridge.CustomUIMarkup.SemanticUI;
using Bridge.jQuery2;
using TicketWebsite.Common;

namespace TicketWebsite.Views
{
    class ui_pagination_menu:FrameworkElement
    {
        public ui_pagination_menu()
        {
            _root = DOM.div("ui pagination menu");
        }
        #region ItemCountProperty
        public static readonly DependencyProperty ItemCountProperty = DependencyProperty.Register(nameof(ItemCount), typeof(string), typeof(ui_pagination_menu), new PropertyMetadata(OnItemCountChanged));

        public int ItemCount
        {
            get { return (int)GetValue(ItemCountProperty); }
            set { SetValue(ItemCountProperty, value); }
        }

        static void OnItemCountChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {
            var me = (ui_pagination_menu)d;

            me.CreateSubElements();
        }
        #endregion


        #region ActiveNumberProperty
        public static readonly DependencyProperty ActiveNumberProperty = DependencyProperty.Register(nameof(ActiveNumber), typeof(string), typeof(ui_pagination_menu), new PropertyMetadata(OnActiveNumberChanged));

        public int ActiveNumber
        {
            get { return (int)GetValue(ActiveNumberProperty); }
            set { SetValue(ActiveNumberProperty, value); }
        }

        static void OnActiveNumberChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {
            var me = (ui_pagination_menu)d;

            me.SetActive(e.NewValue.ToInt32());
        }
        #endregion

        void SetActive(int index)
        {

            _numbers.ForEach(x=>x.RemoveClass("active"));
            _numbers[index - 1].AddClass("active");
            
        }

        readonly List<jQuery> _numbers = new  List<jQuery>();

        void CreateSubElements()
        {
            //<div class='ui pagination menu' >
            //   <a class='item'  >1</a> 
            //   <a class='item'  >2</a>
            //   <a class='item active ' >3</a>
            //   <a class='next icon item ' >
            //    <i class='right chevron icon'></i>
            //   </a>		
            //</div>

            _numbers.Clear();
            _root.Empty();

            for (int i = 0; i < ItemCount; i++)
            {
                DOM.a("item").Html(i.ToString()).AppendTo(_root).AppendTo(_numbers);
            }

            DOM.a("next icon item").AppendTo(_root)
                .Append(DOM.i("right chevron icon"));

        }

       
    }
}
