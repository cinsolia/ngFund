using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AppData
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            // I deleted some default stuff, see commentted out code in WebApiConfig.cs ... this class shouldn't be invoked though because web api only

            //routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
