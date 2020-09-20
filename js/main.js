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
});
