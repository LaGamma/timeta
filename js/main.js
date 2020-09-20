$(document).ready(function() {
	$('#response,#author').fadeOut(400, function (){
			$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
				.done(update)
				.fail(handleErr);
			});
		});


		$('#quote-request').click(function() {
			$('#response,#author').fadeOut(400, function (){
				$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
				    .done(update)
				    .fail(handleErr);
			});		    
		});

		function update(response) {
		  //$('#log').prepend('<pre>' + $('#response').html() + '</pre>');
		  
		  $('#response').html(response.quoteText);
		  

		  if (response.quoteAuthor != "") {
		  	$('#author').html("- " + response.quoteAuthor);
		  } else {
		  	$('#author').html("- unknown");
		  }
		  $('#response,#author').fadeIn();
		}

		function handleErr(jqxhr, textStatus, err) {
		  console.log("Request Failed: " + textStatus + ", " + err);
		}


