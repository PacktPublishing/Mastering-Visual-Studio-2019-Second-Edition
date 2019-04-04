using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace MyWPFDemoApp
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            OnRefreshButtonClicked(this, new RoutedEventArgs());
        }

        private async void OnSaveButtonClicked(object sender, RoutedEventArgs e)
        {
            var taskDescription = txbTaskDescription.Text;

            if (!string.IsNullOrWhiteSpace(taskDescription))
            {
                var isComplete = chkComplete.IsChecked == true;
                var todoItem = new TodoItem { Text = taskDescription, Complete = isComplete };

                txbTaskDescription.Text = string.Empty;
                chkComplete.IsChecked = false;

                await App.MobileService.GetTable<TodoItem>().InsertAsync(todoItem);
                OnRefreshButtonClicked(sender, e);
            }
        }

        private async void OnRefreshButtonClicked(object sender, RoutedEventArgs e)
        {
            lstDetails.ItemsSource = await App.MobileService.GetTable<TodoItem>().ReadAsync();
        }

        private async void OnDeleteButtonClicked(object sender, RoutedEventArgs e)
        {
            if(lstDetails.SelectedItem is TodoItem item)
            {
                await App.MobileService.GetTable<TodoItem>().DeleteAsync(item);
                OnRefreshButtonClicked(sender, e);
            }
        }
    }
}
