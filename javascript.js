var updateTime = function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    console.log(moment());
}

updateTime();
setInterval(updateTime, 1000 * 60);