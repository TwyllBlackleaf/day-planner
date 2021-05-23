var timesArray = ["9-am", "10-am", "11-am",
    "12-pm", "1-pm", "2-pm", "3-pm", "4-pm", "5-pm"]

var updateTime = function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    console.log(moment());
}

// Click to save text in corresponding text area
$(".fa-lock").on("click", function() {
    var textId = $(this).attr("id").replace("btn-", "#");
    console.log(textId);
    console.log($(textId).val());
    console.log("save");
});

updateTime();
setInterval(updateTime, 1000 * 60);