$(document).ready(function() {
	$('#hextime,#author').fadeOut(400, update());

	$('#time-request').click(function() {
		$('#hextime').fadeOut(400, update());
	});

	function update() {
	  //$('#log').prepend('<pre>' + $('#response').html() + '</pre>');
	  $('#hextime,#author').fadeIn();
	}

	function handleErr(jqxhr, textStatus, err) {
	  console.log("Request Failed: " + textStatus + ", " + err);
	}
	
	function refreshData()
	{
		x = 1;  // x = seconds
		var d = new Date()
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();

		if (h<=9) {h = '0'+h};
		if (m<=9) {m = '0'+m};
		if (s<=9) {s = '0'+s};

		var color = '#'+h+m+s;
		$("div.background").css("background-color", color );
		$("#hextime").text(color);
		setTimeout(refreshData, x*1000);
	}
	refreshData(); // execute function
});
