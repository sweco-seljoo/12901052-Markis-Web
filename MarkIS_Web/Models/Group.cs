using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MarkISWeb.Models
{
    public class Group
    {
        public Group(string name, string typeName)
        {
            Name = name;
            TypeName = typeName;
        }

        public String Name { get; set; }
        public string TypeName { get; }
    }
}