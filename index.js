$(document).ready(function() {
	updatetime()
	dt = new Date();
	secstillmin = 60 - dt.getSeconds()
	setTimeout(updatetimeloop,secstillmin*1000)

	var url = new URL(window.location.href);
	var mc = url.searchParams.get("mc");
	if (mc == 1) {
		$("#mctime").css("display", "block")
		$("#settings label").css("display", "block")
	}
})

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function updatetimeloop(){
	updatetime()
	setInterval(updatetime,60000)
	console.log("jo")
}

function updatetime() {
	console.log("ut")
	dt = new Date();
	time = (dt.getHours()<10?'0':'') + dt.getHours() + ":" + (dt.getMinutes()<10?'0':'') + dt.getMinutes()
	if (document.getElementById('mctime').checked) {
		time = mcTime(dt);
	}

	if (dt.getMonth()+1 == 9 && dt.getDate() == 3 && dt.getHours() == 14 && dt.getMinutes() == 15) {
		$("#tijd").html(time + " op 3 september")
		$("#geen").html(" geen")
		$("#waarheid").html("Nee...")
	}
	else{
		$("#tijd").html(time)
		$("#geen").html("")
		$("#waarheid").html("Ja!")
	}
}

function mcTime(dt) {
	console.log("mct")
    var currentDay = dt.getHours() * 3
    if (dt.getMinutes() < 20) {
        mcMinute = dt.getMinutes();
    } else if (dt.getMinutes() == 20) {
        mcMinute = dt.getMinutes();
        currentDay += 1;
    } else if (dt.getMinutes() > 20 && dt.getMinutes() < 40) {
        currentDay += 1;
        mcMinute = dt.getMinutes() - 20;
    } else if (dt.getMinutes() == 40) {
        mcMinute = dt.getMinutes();
        currentDay += 2;
    } else if (dt.getMinutes() > 40) {
        currentDay += 2;
        mcMinute = dt.getMinutes() - 40;
    }
    if (currentDay >= 36) {
        currentDay = currentDay - 36;
        Slab = "AS"
    } else {
        Slab = "BS"
    }
    return (currentDay<10?'0':'')+currentDay + ":" + (mcMinute<10?'0':'')+mcMinute + " " + Slab;
}