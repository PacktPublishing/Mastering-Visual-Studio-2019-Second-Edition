using System;
using System.Globalization;
using System.Windows.Data;
using System.Windows.Media;

namespace Demo.WPF.Converters
{
    public class BoolToColorConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            var boolValue = value is Boolean ? bool.Parse(value.ToString()) : false;
            return new SolidColorBrush(boolValue ? Colors.Red : Colors.Green);
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
