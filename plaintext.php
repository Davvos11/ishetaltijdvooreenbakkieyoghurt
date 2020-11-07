<?php 
	date_default_timezone_set("Europe/Amsterdam");
	$date = date('d-m');
	$time = date('H:i');
	if ($date == "03-09" && $time == "14:15") {
		$yoghurt = false;
	}
	else{
		$yoghurt = true;
	}
	if ($_GET["lang"] == "en") {
		if ($yoghurt == false) {
			echo "No... It's ".$time." on september 3rd, so it's not time for a bakkie yoghurt";
		}
		else{
			echo "Yes! It's ".$time.", so it's time for a bakkie yoghurt";
		}
	}
	else{
		if ($yoghurt == false) {
			echo "Nee... Het is ".$time." op 3 september, dus het is geen tijd voor een bakkie yoghurt";
		}
		else{
			echo "Ja! Het is ".$time.", dus het is tijd voor een bakkie yoghurt";
		}
	}
?>