using System;
using System.Linq;
using TicketWebsite.Views;

namespace TicketWebsite.Common
{
    public class Builder : Bridge.CustomUIMarkup.SemanticUI.Builder
    {
        protected override Type CreateType(string tag)
        {

            var fullName = "TicketWebsite." + tag;

            var type = GetType().Assembly.GetTypes().FirstOrDefault(x => x.FullName.ToUpper() == fullName.ToUpper());

            if (type != null)
            {
                return type;
            }

            return base.CreateType(tag);
        }

       
    }
}