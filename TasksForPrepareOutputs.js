{
	"GlobalKeys":
	{
		"$(TargetDir)"  :"D:\\github\\TicketWebsite\\Src\\bin\\Debug\\",
		"$(SolutionDir)":"D:\\github\\TicketWebsite\\",
		"$(Bridge.CustomUIMarkup)":"D:\\github\\Bridge.CustomUIMarkup\\"
	},
	"Tasks":
	[	
		
		{
			"FullClassName": "WhiteStone.Tasks.CopyFile",
			"Keys":
			{	
				"Source" : "$(TargetDir)bridge\\jquery-2.2.4.js",
				"Target" : "$(SolutionDir)\\WebSite\\js\\jquery-2.2.4.js"
			}
		}
		,
		{
			"FullClassName": "WhiteStone.Tasks.CopyFile",
			"Keys":
			{	
				"Source" : "$(TargetDir)bridge\\bridge.js",
				"Target" : "$(SolutionDir)\\WebSite\\js\\bridge.js"
			}
		}
		,
		{
			"FullClassName": "WhiteStone.Tasks.CopyFile",
			"Keys":
			{	
				"Source" : "$(TargetDir)bridge\\bridge.console.js",
				"Target" : "$(SolutionDir)\\WebSite\\js\\bridge.console.js"
			}
		}
		,
		{
			"FullClassName": "WhiteStone.Tasks.CopyFile",
			"Keys":
			{	
				"Source" : "$(TargetDir)bridge\\bridge.meta.js",
				"Target" : "$(SolutionDir)\\WebSite\\js\\bridge.meta.js"
			}
		}
		,
		{
			"FullClassName": "WhiteStone.Tasks.CopyFile",
			"Keys":
			{	
				"Source" : "$(Bridge.CustomUIMarkup)bin\\js\\Bridge.CustomUIMarkup.js",
				"Target" : "$(SolutionDir)\\WebSite\\js\\Bridge.CustomUIMarkup.js"
			}
		}
		,
		{
			"FullClassName": "WhiteStone.Tasks.CopyFile",
			"Keys":
			{	
				"Source" : "$(Bridge.CustomUIMarkup)bin\\js\\Bridge.CustomUIMarkup.meta.js",
				"Target" : "$(SolutionDir)\\WebSite\\js\\Bridge.CustomUIMarkup.meta.js"
			}
		}
		,
		{
			"FullClassName": "WhiteStone.Tasks.CopyFile",
			"Keys":
			{	
				"Source" : "$(TargetDir)bridge\\TicketWebsite.js",
				"Target" : "$(SolutionDir)\\WebSite\\js\\TicketWebsite.js"
			}
		}
		,
		{
			"FullClassName": "WhiteStone.Tasks.CopyFile",
			"Keys":
			{	
				"Source" : "$(TargetDir)bridge\\TicketWebsite.meta.js",
				"Target" : "$(SolutionDir)\\WebSite\\js\\TicketWebsite.meta.js"
			}
		}		
		,
		{
			"FullClassName": "WhiteStone.Tasks.CopyDirectory",
			"Keys":
			{	
				"Source" : "$(SolutionDir)Src\\img\\",
				"Target" : "$(SolutionDir)\\WebSite\\img\\"
			}
		}
		,
		{
			"FullClassName": "WhiteStone.Tasks.CopyDirectory",
			"Keys":
			{	
				"Source" : "$(Bridge.CustomUIMarkup)bin\\Lib\\semantic-ui\\",
				"Target" : "$(SolutionDir)\\WebSite\\Lib\\semantic-ui\\"
			}
		}
		,
		{
			"FullClassName": "WhiteStone.Tasks.CopyDirectory",
			"Keys":
			{	
				"Source" : "$(Bridge.CustomUIMarkup)bin\\Lib\\Swiper\\",
				"Target" : "$(SolutionDir)\\WebSite\\Lib\\Swiper\\"
			}
		}
		,
		{
			"FullClassName": "WhiteStone.Tasks.CombineFilesIntoJsFile",
			"Keys":
			{	
				"Source" : "$(SolutionDir)Src\\Views\\*.xml",
				"Target" : "$(SolutionDir)\\WebSite\\js\\FileContents.js",
				"JsObjectPath" : "TicketWebsite.FileContents"
			}
		}
		
	
	]
}