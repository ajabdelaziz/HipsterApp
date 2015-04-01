var net= require('net');
var fs = require('fs');
var server = net.createServer(); 
var parseRSVP = JSON.parse(fs.readFileSync("./rsvp.json", 'utf8'));

server.on('connection', function(client){ 
  console.log('client connected');
  client.setEncoding('utf8');

  function rsvpMeetup(nameInput, emailInput){
    var rsvp = {
                Name : nameInput,
                Email : emailInput
                };
    parseRSVP.push(rsvp);
    fs.writeFileSync("./rsvp.json", JSON.stringify(parseRSVP));
	}

	function listRSVP(arrayToRead){
    return arrayToRead.length;
	}

  client.on('data', function(stringFromClient) {
  	var input = stringFromClient.trim();
  	var splitInput = input.split(" ");

    switch(splitInput[0]){
    case "help":
        client.write("commands are - rsvp, list.  For RSVP please provide name and email address after command rsvp");
        client.end();
        break;
    case "rsvp":
    	var rsvp = {
                Name : splitInput[1],
                Email : splitInput[2]
                };
    		parseRSVP.push(rsvp);
    		fs.writeFileSync("./rsvp.json", JSON.stringify(parseRSVP));
        client.write("You have successfuly RSVP'ed!");
        client.end();
        break;
    case "list":
        client.write(parseRSVP.length.toString());
        client.end();
        break;
    case "adminhelp":
        client.write("Admin commands are - adminlist, newMeetup, clear. Please type         password after each command.");
        client.end();
        break;
	case "adminlist":
    	if(splitInput[1] === "cheese"){
        client.write(JSON.stringify(parseRSVP) + " developers are attending");
    	}else{ client.write("wrong password");
   		}client.end();
    	break;
    case "newMeetup": 
    	if(splitInput[1] === "cheese"){
        var newMeetup = [];
        var meetup = {
                    topic : splitInput[2],
                    date : splitInput[3]
                };
        newMeetup.push(meetup);
        JSON.stringify(newMeetup);
        fs.writeFileSync("./meetup.json", JSON.stringify(newMeetup));
        client.write("You have successfully created a new meetup");
    	}else{ client.write("wrong password");
   		}client.end();
   		break;
    case "clear": 
    	if(splitInput[1] === "cheese"){
        var newRSVP = [];
        JSON.stringify(newRSVP);
        fs.writeFileSync("./rsvp.json", newRSVP);
        client.write("You have cleared all RSVP's");
    	}else{ client.write("wrong password");
   		}client.end();
   		break;
    }

  });
});

server.listen(8150, function() { 
  console.log('connected');
});