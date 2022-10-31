var today = moment();
var hourText =[];

//set date in title
$('#currentDay').text(today.format("dddd MMM Do, YYYY"));

//get current hour
var nowHour = today.format('H');

//set logic for hour comparison 
for (var i = 9; i < 18; i++) {
    if (i < nowHour) {
        //set the html time block IDs to match 'i'
        //assign class for CSS call
        document.getElementById(i).classList.add('past');
    } else if (i === nowHour) {
        //set the html time block IDs to match 'i'
        //assign class for CSS call
        document.getElementById(i).classList.add('present');
    } else if (i > nowHour) {
        //set the html time block IDs to match 'i'
        //assign class for CSS call
        document.getElementById(i).classList.add('future');
    }
}
//save tasks to local storage
$('.saveBtn').click(function () {
    var hour0900 = document.getElementById('9').value;
    localStorage.setItem('text9', hour0900);
    var hour1000 = document.getElementById('10').value;
    localStorage.setItem('text10', hour1000);
    var hour1100 = document.getElementById('11').value;
    localStorage.setItem('text11', hour1100);
    var hour1200 = document.getElementById('12').value;
    localStorage.setItem('text12', hour1200);
    var hour1300 = document.getElementById('13').value;
    localStorage.setItem('text13', hour1300);
    var hour1400 = document.getElementById('14').value;
    localStorage.setItem('text14', hour1400);
    var hour1500 = document.getElementById('15').value;
    localStorage.setItem('text15', hour1500);
    var hour1600 = document.getElementById('16').value;
    localStorage.setItem('text16', hour1600);
    var hour1700 = document.getElementById('17').value;
    localStorage.setItem('text17', hour1700);
});


// get tasks from local storage
document.getElementById('9').textContent = localStorage.getItem('text9');
document.getElementById('10').textContent = localStorage.getItem('text10');
document.getElementById('11').textContent = localStorage.getItem('text11');
document.getElementById('12').textContent = localStorage.getItem('text12');
document.getElementById('13').textContent = localStorage.getItem('text13');
document.getElementById('14').textContent = localStorage.getItem('text14');
document.getElementById('15').textContent = localStorage.getItem('text15');
document.getElementById('16').textContent = localStorage.getItem('text16');
document.getElementById('17').textContent = localStorage.getItem('text17');