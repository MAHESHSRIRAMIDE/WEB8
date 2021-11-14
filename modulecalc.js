http=require("http");
url = require("url");
querystring=require("querystring");
var calculator = require('./calculator.js');

function onRequest(request, response) {
	var path = url.parse(request.url).pathname;
	

	var query=url.parse(request.url).query;
	var a=parseInt(querystring.parse(query)["a"]);
	var b=parseInt(querystring.parse(query)["b"]);
    if(path==="/login/add"){ 
        response.write("Addition of first number and second number is "+calculator.add(a,b));
    }
    if(path==="/login/sub"){
        response.write("Subtraction of first number and second number is "+calculator.subtract(a,b));
    }
    if(path==="/login/mul"){
        response.write("Multiplication of first number and second number is "+calculator.multiply(a,b));
    }
    if(path==="/login/div"){
        response.write("Division of first number and second number is "+calculator.divide(a,b));
    }
	response.end();
}


http.createServer(onRequest).listen(7777);
console.log("Server has started...");
