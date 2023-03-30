if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::UXBooster");
        this.set_filesecurelevel("all");
    };
    env.on_initEvent = function ()
    {
        // add event handler

    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "none", null, "", "", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "none", null, "", "", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "none", null, "", "", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "none", null, "", "", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "none", null, "", "0", "0");
        nexacro._addService("SVC_LOC", "JSP", "http://localhost:8080/UXBooster/", "none", null, "", "0", "0");
        nexacro._addService("SVC_REAL", "JSP", "http://localhost:8080/UXBooster/", "none", null, "", "0", "0");
        nexacro._addService("takelib", "js", "./_extlib_/Take/", "none", null, "", "0", "0");
        nexacro._addService("extlib", "js", "./_extlib_/Extend/", "none", null, "", "0", "0");
        nexacro._addService("doorelib", "js", "./_extlib_/Doore/", "none", null, "", "0", "0");
        nexacro._addService("biz", "form", "./biz/", "none", null, "", "0", "0");
        nexacro._addService("frm", "form", "./frm/", "none", null, "", "0", "0");
        nexacro._addService("guide", "form", "./guide/", "none", null, "", "0", "0");
        nexacro._addService("ubi", "form", "./ubi/", "none", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"VirtualFile", "classname":"nexacro.VirtualFile", "type":"JavaScript"},
        		{"id":"PyramidChart", "classname":"nexacro.PyramidChart", "type":"JavaScript"},
        		{"id":"FloatChart", "classname":"nexacro.FloatChart", "type":"JavaScript"},
        		{"id":"RoseChart", "classname":"nexacro.RoseChart", "type":"JavaScript"},
        		{"id":"RadarChart", "classname":"nexacro.RadarChart", "type":"JavaScript"},
        		{"id":"GaugeChart", "classname":"nexacro.GaugeChart", "type":"JavaScript"},
        		{"id":"PieChart", "classname":"nexacro.PieChart", "type":"JavaScript"},
        		{"id":"BubbleChart", "classname":"nexacro.BubbleChart", "type":"JavaScript"},
        		{"id":"BasicChart", "classname":"nexacro.BasicChart", "type":"JavaScript"},
        		{"id":"NxPivot", "classname":"nexacro.NxPivot", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables

        // Cookies

        // HTTP Header

    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
    // User Script
    env.registerScript("environment.xml", function() {

    });
					
    env = null;
}
