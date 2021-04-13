if (localStorage.getItem('Date')){
    let newDate = new Date(localStorage.getItem('Date'))
    nnn = setInterval(function () {
    let now = new Date()
    const time = newDate - now
    let days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor((time % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((time % (1000 * 60)) / 1000)
    document.getElementById("main").innerHTML = days + "days " + hours + "hrs " + minutes + "mins " + seconds + "secs "
    }, 1000)   
  }

  function resetTimer() {
    document.getElementById('main').textContent = ''
    window.location.reload(true);
    localStorage.removeItem('Date')
  }
  function startTimer() {
    const selectedDate = document.getElementById("dateTime").value;
    console.log(selectedDate);
    

    let end = new Date(selectedDate);

    const _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timeslot;
    let Datesave = selectedDate
    localStorage.setItem('Date', Datesave)
    const now = new Date();
    const distance = end - now;
    if (distance < 0) {
      clearInterval(timeslot);
      document.getElementById("timeslot").innerHTML = "EXPIRED!";
      return;
    }
    const days = Math.floor(distance / _day);
    document.getElementById("timeslot").innerHTML = days + " days ";
    const hours = Math.floor((distance % _day) / _hour);
    document.getElementById("timeslot").innerHTML += hours + " hrs ";
    const minutes = Math.floor((distance % _hour) / _minute);
    document.getElementById("timeslot").innerHTML += minutes + " mins ";
    let seconds = Math.floor((distance % _minute) / _second);
    document.getElementById("timeslot").innerHTML += seconds + " secs";
    timeslot = setInterval(startTimer, 1000);
  }
  