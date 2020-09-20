$(document).ready(function() {
	$('#hextime,#author').fadeOut(400, function (){})
		.done(update)
		.fail(handleErr);
	});


	$('#time-request').click(function() {
		$('#hextime').fadeOut(400, function (){})
			.done(update)
			.fail(handleErr);		    
	});

	function update(response) {
	  //$('#log').prepend('<pre>' + $('#response').html() + '</pre>');
	  $('#hextime,#author').fadeIn();
	}

	function handleErr(jqxhr, textStatus, err) {
	  console.log("Request Failed: " + textStatus + ", " + err);
	}
});
