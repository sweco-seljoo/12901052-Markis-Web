using MarkisWeb.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;

namespace MarkisWeb.Controllers
{
    public class BaseController : Controller
    {
        public string RootUrl
        {
            get
            {
                var rootUrl = string.Format("{0}://{1}{2}", Request.Url.Scheme, Request.Url.Authority, Url.Content("~"));
                return rootUrl.EndsWith("/") ? rootUrl : string.Format("{0}/", rootUrl);
            }
        }

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            
            ViewBag.RootUrl = RootUrl;
            ViewBag.UseDevScripts = SettingsHelper.GetBool("UseDevScripts");
            ViewBag.GotMapUrl = SettingsHelper.GetString("GotMapUrl");
            ViewBag.MarkisConnectionEnabled = SettingsHelper.GetBool("MarkisConnectionEnabled");
            ViewBag.MarkisConnectionUrl = SettingsHelper.GetString("MarkisConnectionUrl");
            base.OnActionExecuting(filterContext);
        }

       
    }
}