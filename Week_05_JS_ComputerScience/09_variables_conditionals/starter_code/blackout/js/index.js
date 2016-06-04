var lights = "on";

function switchLights () {
	if (lights == "on"){
		jQuery('body').addClass('dark');
		lights = "off";
	}
	else {
		jQuery('body').removeClass();
		lights = 'on';
	}
}

jQuery('#light_switch').click(switchLights);