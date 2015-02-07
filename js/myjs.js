

$(document).ready(function() {	
	document.querySelector("#googlebutton").addEventListener("click", function() {
		chrome.identity.getAuthToken({"interactive": true}, function(token) {
			alert(token); 
		});
	});
});
