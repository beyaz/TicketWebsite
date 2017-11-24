using System;
using System.Linq;
using Bridge.CustomUIMarkup.UI;

namespace TicketWebsite.Common
{
    class TypeFinder2 : TypeFinder
    {
        #region Public Methods
        public override Type FindType(string tag)
        {
            var type = base.FindType(tag);

            if (type != null)
            {
                return type;
            }

            type = SearchInThisAssembly(tag);

            if (type != null)
            {
                TagTypeMap[tag] = type;
                return type;
            }

            return null;
        }
        #endregion

        #region Methods
        static Type SearchInThisAssembly(string tag)
        {
            var fullName = "TicketWebsite." + tag;

            return typeof(TypeFinder2).Assembly.GetTypes().FirstOrDefault(x => x.FullName.ToUpper() == fullName.ToUpper());
        }
        #endregion
    }
}