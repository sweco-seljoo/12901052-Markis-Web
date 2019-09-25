using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.DirectoryServices;
using System.DirectoryServices.AccountManagement;
using System.DirectoryServices.ActiveDirectory;
using MarkisWeb.Controllers;

namespace MarkISWeb.Controllers
{
    public class AuthorizationController :  BaseController
    {
        // GET: Authorization
        public ActionResult Index()
        {
            var userName = User.Identity.Name;

            List<Models.Group> result = GetGroups(userName);

            return View(result);

        }

    

        private List<MarkISWeb.Models.Group> GetGroups(String userName)
        {

            List<GroupPrincipal> result = new List<GroupPrincipal>();
            List<MarkISWeb.Models.Group> groupNames = new List<MarkISWeb.Models.Group>();
            //
            // establish domain context
            PrincipalContext yourDomain = new PrincipalContext(ContextType.Domain);

            // find your user
            UserPrincipal user = UserPrincipal.FindByIdentity(yourDomain, userName);

            // if found - grab its groups
            if (user != null)
            {
                PrincipalSearchResult<Principal> groups = user.GetAuthorizationGroups();


                foreach (Principal p in groups)
                {
                    // make sure to add only group principals
                    if (p is GroupPrincipal)
                    {
                        groupNames.Add(new MarkISWeb.Models.Group(((GroupPrincipal)p).Name, "GroupPrincipal"));
                    }
                    else
                    {
                        groupNames.Add(new MarkISWeb.Models.Group(((GroupPrincipal)p).Name, p.GetType().Name));
                    }
                }
            }

            return groupNames;
        }
    }
}
