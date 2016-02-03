function download_function(){
	//var link = top.location.href;
	//var link = document.location.href;
	//var link = window.location.href;
	//var link = document.URL;
	var link = window.top.getBrowser().selectedBrowser.contentWindow.location.href;
	//alert (link);
	if (link.substring(12, 19) == "youtube"){
		alert("Really want to download this video!!!");
		var n = link.length;	
		var youtube = link.substring(0, 12).concat('9x').concat(link.substring(12, n));
		//alert(youtube);
		window.open(youtube, '_newtab');
	}
	else {
		alert('Not a youtube video to download!!!!');
	}
}