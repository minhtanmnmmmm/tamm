document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var content = document.getElementById("content").value;
    var time = getCurrentTime();

    var reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");
    reviewDiv.innerHTML = "<p><strong>" + name + ": </strong>" + content + "<br><small>Time: " + time + "</small></p>";

    document.getElementById("reviews").appendChild(reviewDiv);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("content").value = "";
    document.getElementById("time").value = getCurrentTime();
});

function getCurrentTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // Add leading zero if single digit
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    return timeString;
}