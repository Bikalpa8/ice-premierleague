var address;
$.ajax({
headers: { 'X-Auth-Token': 'ccf7c783ee20446aa1e56dc6d01b542c' },
url: 'http://api.football-data.org/v1/competitions/426/leagueTable',
dataType: 'json',    
type: 'GET',
}).done(function(response) {

// Find a <select> element with id="myList":
var select = document.getElementById("myList");
var i;
select.innerHTML = "";
var newOption = document.createElement("option");
newOption.value = "";
newOption.innerHTML = "";
select.options.add(newOption);

	for(i=0; i < response.standing.length; i++) {
	// Create and add option values and text:
	var newOption = document.createElement("option");
	newOption.value = response.standing[i].teamName;
	newOption.innerHTML = response.standing[i].teamName;
	select.options.add(newOption);
	}
 
	var i;
});     

function teamRecog(s){
	var s = document.getElementById(s);
	$.ajax({
	headers: { 'X-Auth-Token': 'ccf7c783ee20446aa1e56dc6d01b542c' },
	url: 'http://api.football-data.org/v1/competitions/426/leagueTable',
	dataType: 'json',    
	type: 'GET',
	}).done(function(response) {
	for(var i=0; i < response.standing.length; i++) {
	var ts = document.getElementById("resultText");
	if (response.standing[i].teamName == s.value){

	//var ts = document.getElementById("resultText");
	//ts.innerHTML = response.standing[i]._links.team.href;
	address = response.standing[i]._links.team.href;
	//teamNum = Integer.parseInt(address.split("http://api.football-data.org/v1/teams/").pop();
	}
	$.ajax({
	headers: { 'X-Auth-Token': 'ccf7c783ee20446aa1e56dc6d01b542c' },
	url: address,
	dataType: 'json',    
	type: 'GET',
	}).done(function(response) {
	var data = response;
	console.log(data);
	
	$("#resultText").text("Your Team: " + response.name);
	$("#logo").attr("src", response.crestUrl);
	});
	}
	});
}
	
function leagueTable(){
	rmv();
	var emp = document.getElementById("ele");
	emp.innerHTML = "";
	$.ajax({
	headers: { 'X-Auth-Token': 'ccf7c783ee20446aa1e56dc6d01b542c' },
	url: 'http://api.football-data.org/v1/competitions/426/leagueTable',
	dataType: 'json',    
	type: 'GET',
	}).done(function(response) {
	$('#ele').append('<table id="myTable" width="320" border="1"><tr><th>Rank</th><th>Logo</th><th>Club</th><th>MP</th><th>GF</th><th>GA</th><th>Pts</th></tr></table>');
	// Find a <table> element with id="myTable":
	var table = document.getElementById("myTable");
	var i;

	for(i=0; i < response.standing.length; i++) {
	// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow(i+1);
	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);

	// Add some text to the new cells:
	cell1.innerHTML = response.standing[i].position;
	var img1 = '<a href="' + response.standing[i].crestURI + '"><img src="' + response.standing[i].crestURI + '" height="20" width="20" border="0"/></a>';
	cell2.innerHTML = img1;
	cell3.innerHTML = response.standing[i].teamName;
	cell4.innerHTML = response.standing[i].playedGames;
	cell5.innerHTML = response.standing[i].goals;
	cell6.innerHTML = response.standing[i].goalsAgainst;
	cell7.innerHTML = response.standing[i].points;

	}
 
	var i;
	});
}

function lastGame(){
	rmv();
	var emp = document.getElementById("ele");
	emp.innerHTML = "";
	if (myList.value == ""){
		$('#ele').append('<h3 id="head" >Please Select Your Team First!</h3>');
		var head = document.getElementById("head");
	}
	else{
		$.ajax({
		headers: { 'X-Auth-Token': 'ccf7c783ee20446aa1e56dc6d01b542c' },
		url: address + '/fixtures?Season=2016&timeFrame=p365',
		dataType: 'json',    
		type: 'GET',
		}).done(function(response) {
		$('#ele').append('<table id="myTable" width="320" border="1"><tr><th>Date & Time</th><th>Status</th><th>Home Team</th><th>Goals</th><th>Away Team</th><th>Goals</th></tr></table>');
 
		// Find a <table> element with id="myTable":
		var table = document.getElementById("myTable");
		var i;

		// Create an empty <tr> element and add it to the 1st position of the table:
		var row = table.insertRow(1);

		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5);


		// Add some text to the new cells:
		cell1.innerHTML = response.fixtures[response.fixtures.length - 1].date;
		cell2.innerHTML = response.fixtures[response.fixtures.length - 1].status;
		
		cell3.innerHTML = response.fixtures[response.fixtures.length - 1].homeTeamName;
		cell4.innerHTML = response.fixtures[response.fixtures.length - 1].result.goalsHomeTeam;
		
		cell5.innerHTML = response.fixtures[response.fixtures.length - 1].awayTeamName;
		cell6.innerHTML = response.fixtures[response.fixtures.length - 1].result.goalsAwayTeam;
 
		var i;

		});  		
	}
}

function last5Games(){
	rmv();
	var emp = document.getElementById("ele");
	emp.innerHTML = "";
	if (myList.value == ""){
		$('#ele').append('<h3 id="head" >Please Select Your Team First!</h3>');
		var head = document.getElementById("head");
	}
	else{
		$.ajax({
		headers: { 'X-Auth-Token': 'ccf7c783ee20446aa1e56dc6d01b542c' },
		url: address + '/fixtures?Season=2016&timeFrame=p365',
		dataType: 'json',    
		type: 'GET',
		}).done(function(response) {
		$('#ele').append('<table id="myTable" width="320" border="1"><tr><th>Date & Time</th><th>Status</th><th>Home Team</th><th>Goals</th><th>Away Team</th><th>Goals</th></tr></table>');
 
		// Find a <table> element with id="myTable":
		var table = document.getElementById("myTable");
		var i;

		for(i=0; i < 5; i++) {
		// Create an empty <tr> element and add it to the 1st position of the table:
		var row = table.insertRow(i+1);

		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5);


		// Add some text to the new cells:
		cell1.innerHTML = response.fixtures[response.fixtures.length - (i+1)].date;
		cell2.innerHTML = response.fixtures[response.fixtures.length - (i+1)].status;
		
		cell3.innerHTML = response.fixtures[response.fixtures.length - (i+1)].homeTeamName;
		cell4.innerHTML = response.fixtures[response.fixtures.length - (i+1)].result.goalsHomeTeam;
		
		cell5.innerHTML = response.fixtures[response.fixtures.length - (i+1)].awayTeamName;
		cell6.innerHTML = response.fixtures[response.fixtures.length - (i+1)].result.goalsAwayTeam;
 
		}
		var i;
		});  		
	}
}

function seasonResults(){
	rmv();
	var emp = document.getElementById("ele");
	emp.innerHTML = "";
	if (myList.value == ""){
		$('#ele').append('<h3 id="head" >Please Select Your Team First!</h3>');
		var head = document.getElementById("head");
	}
	else{
		$.ajax({
		headers: { 'X-Auth-Token': 'ccf7c783ee20446aa1e56dc6d01b542c' },
		url: address + '/fixtures?Season=2016&timeFrame=p365',
		dataType: 'json',    
		type: 'GET',
		}).done(function(response) {
		$('#ele').append('<h3>Result for the current season(2016/17)</h3>');
		$('#ele').append('<table id="myTable" width="320" border="1"><tr><th>Date & Time</th><th>Status</th><th>Home Team</th><th>Goals</th><th>Away Team</th><th>Goals</th></tr></table>');
 		
		// Find a <table> element with id="myTable":
		var table = document.getElementById("myTable");
		var i;

		for(i=0; i < response.fixtures.length; i++) {
		// Create an empty <tr> element and add it to the 1st position of the table:
		var row = table.insertRow(i+1);

		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5);

		// Add some text to the new cells:
		cell1.innerHTML = response.fixtures[i].date;
		cell2.innerHTML = response.fixtures[i].status;

		cell3.innerHTML = response.fixtures[i].homeTeamName;
		cell4.innerHTML = response.fixtures[i].result.goalsHomeTeam;
	
		cell5.innerHTML = response.fixtures[i].awayTeamName;
		cell6.innerHTML = response.fixtures[i].result.goalsAwayTeam;
 
		}
 
		var i;

		});  		
	}
}

function homeClick(){
	var emp = document.getElementById("ele");
	emp.innerHTML = "";
	}

function head2Head(){
	rmv();
	var emp = document.getElementById("ele");
	emp.innerHTML = "";
	if (myList.value == ""){
		$('#ele').append('<h3 id="head" >Please Select Your Team First!</h3>');
		var head = document.getElementById("head");
	}
	else{
		$('#ele').append('<label>Select Rival Team: </label>');
		$('#ele').append('<select id = "rivalList" name = "rivalTeam" onchange="updateh2h()"></select>');
		$('#ele').append('<br><br><br>');
		
		$.ajax({
		headers: { 'X-Auth-Token': 'ccf7c783ee20446aa1e56dc6d01b542c' },
		url: 'http://api.football-data.org/v1/competitions/426/leagueTable',
		dataType: 'json',    
		type: 'GET',
		}).done(function(response) {
	
		// Find a <select> element with id="myList":
		var select = document.getElementById("rivalList");
		var i;
		select.innerHTML = "";
		var newOption = document.createElement("option");
		newOption.value = "";
		newOption.innerHTML = "";
		select.options.add(newOption);
		for(i=0; i < response.standing.length; i++) {
		// Create and add option values and text:
			if (response.standing[i].teamName != myList.value){
				var newOption = document.createElement("option");
				newOption.value = response.standing[i].teamName;
				newOption.innerHTML = response.standing[i].teamName;
				select.options.add(newOption);
			}
		}
		var i;

		});	
	}
}

function updateh2h(){
	$('#ele').append('<table id="myTable" width="320" border="1"><tr><th>Date & Time</th><th>Status</th><th>Home Team</th><th>Goals</th><th>Away Team</th><th>Goals</th></tr></table>');
 
	// Find a <table> element with id="myTable":
	var table = document.getElementById("myTable");
			
	$.ajax({
	headers: { 'X-Auth-Token': 'ccf7c783ee20446aa1e56dc6d01b542c' },
	url: address + '/fixtures',
	dataType: 'json',    
	type: 'GET',
	}).done(function(response) {
			
	var i;
    var count = 1;

	for (i = 0; i < response.fixtures.length; i++) {
        // Create an empty <tr> element and add it to the 1st position of the table:
        if (response.fixtures[i].homeTeamName == rivalList.value | response.fixtures[i].awayTeamName == rivalList.value){
			var row = table.insertRow(count);
			// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			var cell6 = row.insertCell(5);
			
			// Add some text to the new cells:
			cell1.innerHTML = response.fixtures[i].date;
			cell2.innerHTML = response.fixtures[i].status;
		
			cell3.innerHTML = response.fixtures[i].homeTeamName;
			cell4.innerHTML = response.fixtures[i].result.goalsHomeTeam;
		
			cell5.innerHTML = response.fixtures[i].awayTeamName;
			cell6.innerHTML = response.fixtures[i].result.goalsAwayTeam;;
		
		
			count++;
			}
		
		}
 
		var i;

		});
}

function teamPlayers(){
	rmv();
	var emp = document.getElementById("ele");
	emp.innerHTML = "";
	if (myList.value == ""){
		$('#ele').append('<h3 id="head" >Please Select Your Team First!</h3>');
		var head = document.getElementById("head");
	}
	else{
		$('#ele').append('<h3>My Team\'s Players</h3><br>');
		
		$.ajax({
		headers: { 'X-Auth-Token': 'ccf7c783ee20446aa1e56dc6d01b542c' },
		url: address + '/players',
		dataType: 'json',    
		type: 'GET',
		}).done(function(response) {
		$('#ele').append('<table id="myTable" width="320" border="1"><tr><th>Player\'s Name</th><th>Position</th><th>Jersey Number</th></tr></table>');
 
		// Find a <table> element with id="myTable":
		var table = document.getElementById("myTable");
		var i;

		for(i=0; i < response.players.length; i++) {
		// Create an empty <tr> element and add it to the 1st position of the table:
		var row = table.insertRow(i+1);

		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);


		// Add some text to the new cells:
		cell1.innerHTML = response.players[i].name;
		cell2.innerHTML = response.players[i].position;
		cell3.innerHTML = response.players[i].jerseyNumber;
 
		}
 
		var i;

		});  	
	}
}

function teamUpcoming(){
	rmv();
	var emp = document.getElementById("ele");
	emp.innerHTML = "";
	if (myList.value == ""){
		$('#ele').append('<h3 id="head" >Please Select Your Team First!</h3>');
		var head = document.getElementById("head");
	}
	else{
		$('#ele').append('<h3>Upcoming game(s) for my team</h3><br>');
		
		$.ajax({
		headers: { 'X-Auth-Token': 'ccf7c783ee20446aa1e56dc6d01b542c' },
		url: address + '/fixtures?Season=2016&timeFrame=n365',
		dataType: 'json',    
		type: 'GET',
		}).done(function(response) {
		$('#ele').append('<table id="myTable" width="320" border="1"><tr><th>Date & Time</th><th>Status</th><th>Home Team</th><th>Goals</th><th>Away Team</th><th>Goals</th></tr></table>');
 
		// Find a <table> element with id="myTable":
		var table = document.getElementById("myTable");
		var i;

		for(i=0; i < response.fixtures.length; i++) {
		// Create an empty <tr> element and add it to the 1st position of the table:
		var row = table.insertRow(i+1);

		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5);


		// Add some text to the new cells:
		cell1.innerHTML = response.fixtures[i].date;
		cell2.innerHTML = response.fixtures[i].status;
		
		cell3.innerHTML = response.fixtures[i].homeTeamName;
		cell4.innerHTML = response.fixtures[i].result.goalsHomeTeam;
		
		cell5.innerHTML = response.fixtures[i].awayTeamName;
		cell6.innerHTML = response.fixtures[i].result.goalsAwayTeam;
 
		}
 
		var i;

		});  		
	}
}

function leagueFixtures(){
	rmv();
	var emp = document.getElementById("ele");
	emp.innerHTML = "";
	$('#ele').append('<h3>League\'s Fixtures(2016/17)</h3><br>');
		
	$.ajax({
	headers: { 'X-Auth-Token': 'ccf7c783ee20446aa1e56dc6d01b542c' },
	url: 'http://api.football-data.org/v1/competitions/426/fixtures',
	dataType: 'json',    
	type: 'GET',
	}).done(function(response) {
	$('#ele').append('<table id="myTable" width="320" border="1"><tr><th>Date & Time</th><th>Status</th><th>Home Team</th><th>Goals</th><th>Away Team</th><th>Goals</th></tr></table>');

	// Find a <table> element with id="myTable":
	var table = document.getElementById("myTable");
	var i;

	for(i=0; i < response.fixtures.length; i++) {
	// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow(i+1);
	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);

	// Add some text to the new cells:
	cell1.innerHTML = response.fixtures[i].date;
	cell2.innerHTML = response.fixtures[i].status;
		
	cell3.innerHTML = response.fixtures[i].homeTeamName;
	cell4.innerHTML = response.fixtures[i].result.goalsHomeTeam;
		
	cell5.innerHTML = response.fixtures[i].awayTeamName;
	cell6.innerHTML = response.fixtures[i].result.goalsAwayTeam;
 
	}
 
	var i;

	});  
			
}

function rmv(){
	var emp = document.getElementById("screenshot-carousel");
	emp.innerHTML = "";
}