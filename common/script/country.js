// Country
$.ajax({
   url:"http://api.wipmania.com/jsonp?callback=?",
   dataType:"jsonp"
}).done(function(data){
     switch(data.address.country_code){
		case "US" :
           document.location.href = "http://www.cyleeweb.com/index.php?country=US"; alert('Your are in the United States.')
        break;
        case "CN" :
           document.location.href = "http://www.cyleeweb.com/index.php?country=CN";
        break;
     }      
});