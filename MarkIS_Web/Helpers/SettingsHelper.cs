using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace MarkisWeb.Helpers
{
    public static class SettingsHelper
    {
        public static bool HasProperty(string key)
        {
            return !String.IsNullOrWhiteSpace(key) && ConfigurationManager.AppSettings.AllKeys.Select((string x) => x).Contains(key);
        }

        public static string GetString(string key)
        {
            string returnValue = String.Empty;
            if (HasProperty(key))
            {
                return ConfigurationManager.AppSettings[key].ToString();
            }
            throw new Exception("Missing appSettings key: " + key);
        }

        public static bool GetBool(string key)
        {
            return Boolean.Parse(GetString(key));
        }

        public static int GetInt(string key)
        {
            return int.Parse(GetString(key));
        }

        public static double GetDouble(string key)
        {
            return double.Parse(GetString(key));
        }
    }
}