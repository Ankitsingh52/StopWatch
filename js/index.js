let timer;
let daysInput = document.getElementById("days-ip");
let hoursInput = document.getElementById("hours-ip");
let minutesInput = document.getElementById("minutes-ip");
let secondsInput = document.getElementById("seconds-ip");

let daysDisplay = document.getElementById("days");
let hoursDisplay = document.getElementById("hours");
let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");

let setTimerButton = document.getElementById("set-timer");
let startResumeButton = document.getElementById("start-resume");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");

setTimerButton.addEventListener("click", function () {
    let nonZero = true;
    if (daysInput.value.trim() === '') {
        daysInput.value = "0";

    }
    if (minutesInput.value.trim() === '') {
        minutesInput.value = "0";

    }
    if (hoursInput.value.trim() === '') {
        hoursInput.value = "0";

    }
    if (secondsInput.value.trim() === '') {
        secondsInput.value = "0";

    }
    if (daysInput.value.trim() === '') {
        daysInput.value = "0";

    }
    let totalSeconds =
        parseInt(daysInput.value) * 86400 +
        parseInt(hoursInput.value) * 3600 +
        parseInt(minutesInput.value) * 60 +
        parseInt(secondsInput.value);
    timer = function () {
        if (totalSeconds <= 0) {
            secondsDisplay.innerHTML = '00';
            clearInterval(timer);
            return;
        }
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor((totalSeconds % 86400) / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = Math.floor(totalSeconds % 60);

        daysDisplay.innerHTML = days < 10 ? "0" + days : days;
        hoursDisplay.innerHTML = hours < 10 ? "0" + hours : hours;
        minutesDisplay.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        secondsDisplay.innerHTML = seconds < 10 ? "0" + seconds : seconds;

        totalSeconds--;
    };
    timer();
});


startResumeButton.addEventListener("click", function () {
    if (!timer) {
        return;
    }
    if (startResumeButton.innerHTML === "Start/Resume") {
        clearInterval(timer);
        timer = setInterval(function () {
            let totalSeconds =
                parseInt(daysDisplay.innerHTML) * 86400 +
                parseInt(hoursDisplay.innerHTML) * 3600 +
                parseInt(minutesDisplay.innerHTML) * 60 +
                parseInt(secondsDisplay.innerHTML);
            totalSeconds--;
            if (totalSeconds <= 0) {
                clearInterval(timer);
                return;
            }
            let days = Math.floor(totalSeconds / 86400);
            let hours = Math.floor((totalSeconds % 86400) / 3600);
            let minutes = Math.floor((totalSeconds % 3600) / 60);
            let seconds = Math.floor(totalSeconds % 60);

            daysDisplay.innerHTML = days < 10 ? "0" + days : days;
            hoursDisplay.innerHTML = hours < 10 ? "0" + hours : hours;
            minutesDisplay.innerHTML = minutes < 10 ? "0" + minutes : minutes;
            secondsDisplay.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        }, 1000);
    } else {
        clearInterval(timer);
    }
});

pauseButton.addEventListener("click", function () {
    clearInterval(timer);
});

resetButton.addEventListener("click", function () {
    clearInterval(timer);
    daysInput.value = "";
    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";
    daysDisplay.innerHTML = "00";
    hoursDisplay.innerHTML = "00";
    minutesDisplay.innerHTML = "00";
    secondsDisplay.innerHTML = "00";

});
