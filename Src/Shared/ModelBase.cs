using System.ComponentModel;

namespace TicketWebsite.Shared
{
    public class ModelBase : Bag
    {
        public ModelBase()
        {
            Labels = new Labels();
        }
        #region Labels Labels
        Labels _labels;
        public Labels Labels
        {
            get { return _labels; }
            set
            {
                if (_labels != value)
                {
                    _labels = value;
                    OnPropertyChanged("Labels");
                }
            }
        }
        #endregion
    }
}