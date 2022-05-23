let PaceChart = [{"Pace": "5:09", "Mile 1": "5:09", "Mile 2": "10:18", "Mile 3":"15:27", "Finish":"16:00"},
        {"Pace": "5:09", "Mile 1": "5:09", "Mile 2": "10:18", "Mile 3":"15:27", "Finish":"16:00"},
        {"Pace": "5:28", "Mile 1": "5:28", "Mile 2": "10:57", "Mile 3":"16:25", "Finish":"17:00"},
        {"Pace": "5:48", "Mile 1": "5:48", "Mile 2": "11:35", "Mile 3":"17:23", "Finish":"18:00"},
        {"Pace": "6:07", "Mile 1": "6:07", "Mile 2": "12:14", "Mile 3":"18:21", "Finish":"19:00"},
        {"Pace": "6:26", "Mile 1": "6:26", "Mile 2": "12:52", "Mile 3":"19:19", "Finish":"20:00"},
        {"Pace": "6:46", "Mile 1": "6:46", "Mile 2": "13:31", "Mile 3":"20:17", "Finish":"21:00"},
        {"Pace": "7:05", "Mile 1": "7:05", "Mile 2": "14:10", "Mile 3":"21:15", "Finish":"22:00"},
]
function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
  }
}
function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(PaceChart[0]);
  generateTableHead(table, data);
  generateTable(table, PaceChart);

  var distanceInput = document.getElementById("distance"),
	hoursInput = document.getElementById("hours"),
	minutesInput = document.getElementById("minutes"),
	secondsInput = document.getElementById("seconds"),
	calculateBtn = document.getElementById("calculate_btn"),
	paceText = document.getElementById("pace");

calculateBtn.addEventListener("click", function() {
	var miles = parseFloat(distanceInput.value),
		hours = parseFloat(hoursInput.value),
		minutes = parseFloat(minutesInput.value),
		seconds = parseFloat(secondsInput.value);

	if(isNaN(miles)) {
		distanceInput.style.borderColor = "red";
		return;
	}
	else {
		distanceInput.style.borderColor = "initial";
	}
	if(isNaN(hours)) {
		hoursInput.style.borderColor = "red";
		return;
	}
	else {
		hoursInput.style.borderColor = "initial";
	}
	if(isNaN(minutes)) {
		minutesInput.style.borderColor = "red";
		return;
	}
	else {
		minutesInput.style.borderColor = "initial";
	}
	if(isNaN(seconds)) {
		secondsInput.style.borderColor = "red";
		return;
	}
	else {
		secondsInput.style.borderColor = "initial";
	}

	var totalMinutes = hours * 60 + minutes + seconds / 60,
		pace = totalMinutes / miles,
		paceMinutes = Math.floor(pace),
		paceSeconds = Math.round((pace - paceMinutes) * 60);

	if(paceSeconds < 10) {
		paceSeconds = "0" + paceSeconds;
	}

	paceText.textContent = "You need to run " + paceMinutes + ":" + paceSeconds + " minutes per mile.";
});