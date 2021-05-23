var timesArray = [
    {
        hourId: "#9-am",
        content: ""
    },
     {
        hourId: "#10-am",
        content: ""
    }, 
    {
        hourId: "#11-am",
        content: ""
    },
    {
        hourId: "#12-pm",
        content: ""
    }, 
    {
        hourId: "#1-pm",
        content: ""
    }, 
    {
        hourId: "#2-pm",
        content: ""
    }, 
    {
        hourId: "#3-pm",
        content: ""
    }, 
    {
        hourId: "#4-pm",
        content: ""
    }, 
    {
        hourId: "#5-pm",
        content: ""
    }];

var updateTime = function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    console.log(moment());
}

// Click to save text in corresponding text area
$(".fa-lock").on("click", function() {
    var textId = $(this).attr("id").replace("btn-", "#");

    // Iterate through array of time blocks to find the relevant time block
    for (var i = 0; i < timesArray.length; i++) {
        if (timesArray[i].hourId === textId) {
            timesArray[i].content = $(textId).val();
        }
    }

    console.log(timesArray);
});

updateTime();
setInterval(updateTime, 1000 * 60);