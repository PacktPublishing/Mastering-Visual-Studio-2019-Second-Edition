using System.Windows;

namespace Demo.WPF.DataBinding
{
    public partial class MainWindow : Window
    {
        public string AuthorName
        {
            get { return (string)GetValue(AuthorNameProperty); }
            set { SetValue(AuthorNameProperty, value); }
        }

        public string BookName
        {
            get { return (string)GetValue(BookNameProperty); }
            set { SetValue(BookNameProperty, value); }
        }

        public string PublishDate
        {
            get { return (string)GetValue(PublishDateProperty); }
            set { SetValue(PublishDateProperty, value); }
        }

        public static readonly DependencyProperty AuthorNameProperty = DependencyProperty.Register("AuthorName", typeof(string), typeof(MainWindow), new PropertyMetadata("Kunal Chowdhury"));
        public static readonly DependencyProperty BookNameProperty = DependencyProperty.Register("BookName", typeof(string), typeof(MainWindow), new PropertyMetadata("Mastering Visual Studio"));
        public static readonly DependencyProperty PublishDateProperty = DependencyProperty.Register("PublishDate", typeof(string), typeof(MainWindow), new PropertyMetadata("2019"));

        public MainWindow()
        {
            InitializeComponent();
        }
    }
}
