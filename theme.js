$(document).ready(function() {
	if (getQueryVariable("epilepsy") == 1){
		$("#rainbow").prop('checked', true);
	}

	$("#dart").hide();

	toggleTheme();
	dart();
	highDPIfixTyfusZooi()
})
$(window).resize(function() {
	highDPIfixTyfusZooi()
})

function toggleTheme(){
	if (document.getElementById('darktheme').checked ) {
		$(document.documentElement).attr('data-theme','dark')
	}
	else {
		$(document.documentElement).attr('data-theme','light')
	}

	if (document.getElementById('rainbow').checked ) {
		$("#wrapper").addClass("rainbow")
		if (getQueryVariable("epilepsy") == 1){
			$("#wrapper").addClass("epilepsy")
		}
	}
	else {
		$("#wrapper").removeClass("rainbow")
		$("#wrapper").removeClass("epilepsy")
	}
}

function dart(){
	if (document.getElementById('darttheme').checked ) {
		$("#dart").show();
	}
	else {
		$("#dart").hide();
	}
}

// Deze kutfunctie zorgt ervoor dat de checkbox voor darktheme groter wordt afhankelijk van de dpi
// Dit zorgt ervoor dat je op je beleboon wel fatsoenlijk op dat kutknoppie kan drukken
function highDPIfixTyfusZooi() {
 	dpi = getDPI()
	scalefactor = Math.max(dpi / 96, 1)
	normalFontsize = 16
	newFontsize = normalFontsize * scalefactor
	newMargin = scalefactor * 4

	$("#settings").css("font-size", newFontsize+"px")
	$(".settingbox").css("transform", "scale("+scalefactor+")")
	$(".settingbox").css("margin-right", newMargin+"px")
	// $(".settingbox").css("margin-top", "-"+newMargin+"px")
}
function getDPI(){
	dpi = 0
	while (window.matchMedia("screen and (max-resolution: "+dpi+"dpi)").matches == false){
		dpi ++
	}
	return dpi
}