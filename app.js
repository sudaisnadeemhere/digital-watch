
setInterval(function () {
    var currenttime = new Date();

    var hour = currenttime.getHours();
    var minutes = currenttime.getMinutes();
    var second = currenttime.getSeconds();

    var hourFormat = "AM";

    if (hour >= 12) {
        hourFormat = "PM";
    }

    if (hour > 12) {
        hour = hour - 12;
    } else if (hour === 0) {
        hour = 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (second < 10) {
        second = "0" + second;
    }

    document.write("hour ==> ", hour );
    document.write("minutes ==> ", minutes);
    document.write("second ==> ", second);
    document.write("hourFormat ==> ", hourFormat);
    document.write("Time ==> " + hour + ":" + minutes + ":" + second + " " + hourFormat);
    document.write("----------------------------");
}, 1000);



