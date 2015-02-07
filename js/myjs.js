

$(document).ready(function() {	
	
	$("#closeGoogle").hide(); 
	$("#closeGithub").hide(); 
	$("#closeDropbox").hide(); 
	$("#closeBox").hide(); 

// ################################################################## GOOGLE DRIVE
	
	var googleAuthTokenVariable;
	
	document.querySelector("#googlebutton").addEventListener("click", function() {
		chrome.identity.getAuthToken({"interactive": true}, function(token) {			
			googleAuthTokenVariable = token;
			chrome.cookies.set({url:'http://www.google.com/', name:'token', value:token}, function(cookie) {
				$("#googlebutton").hide(); 
				$("#closeGoogle").show(); 
			})
		});
	});

	$("#closeGoogle").click(function() {
		chrome.cookies.remove({url:'http://www.google.com/', name:'token'}); 
		chrome.identity.removeCachedAuthToken({token:googleAuthTokenVariable}, function() {
			//hi
		}); 
		$("#googlebutton").show(); 
	});


	var boxAuthTokenVariable; 
	$("#boxbutton").click(function() {
		chrome.identity.launchWebAuthFlow( 
			{
				'url': 'https://app.box.com/api/oauth2/authorize?response_type=code&client_id=knj0e2chk6sgpwp41thyx7kud2cgct8z&state=security_token%3DKnhMJatFipTAnM0nHlZA', 
				'interactive': true
			}, 
			function(redirect_url) { 
				alert(redirect_url); 
			}
		);
	});


});
