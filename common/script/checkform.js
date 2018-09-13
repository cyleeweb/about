// JavaScript Document -- Contact Form

function checkForm(Contact)
{
if (document.Contact.Option[0].checked == false && document.Contact.Option[1].checked == false) {
	alert ("Please select one of the options:\nInquiry or Request Password")
	return false;
	}

//Option One starts here --

		if (document.Contact.FullName.value == ''){ 
	    alert ("May I have your name?");
		document.Contact.FullName.focus();
		return false;
		}
		if (document.Contact.Email1.value == ''){ 
	    alert ("Please provide your email address.");
		document.Contact.Email1.focus();
		return false;
		}
		
//Begin Email address format validation --------------------------------------------
		if (document.Contact.Email.value != ''){
			var AtSymbol = document.Contact.Email.value.indexOf('@')
			var Period   = document.Contact.Email.value.lastIndexOf('.')
			var Space    = document.Contact.Email.value.indexOf(' ')
			var Length   = document.Contact.Email.value.length-1

			if ((AtSymbol < 1) || (Period <= AtSymbol+1) || (Period == Length ) || (Space  != -1)) {  
      			alert('Please re-enter a valid e-mail address!')
      			document.Contact.Email.focus();
   				return false;
				}		
		}	
//End of email address FORMAT validation --------------------------------------------
	{
	alert("Thanks for your submission. I'll be in touch soon.\n\nClick OK to go back to the cyleeweb.com homepage.");	
	return true;
	}		
}