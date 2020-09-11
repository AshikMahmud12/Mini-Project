window.addEventListener("scroll", function () {
    var position = parseInt(window.scrollY);
    var li = document.getElementsByClassName("list-group-item")[7];
    console.log(position);

    if (position > 400) {
        console.log(li);
        li.classList.add("bg-info", "animate__animated", "animate__bounce");
    } else {
        li.classList.remove("bg-info", "animate__animated", "animate__bounce");
    }
});


$(".btn").click(function() {
  document.getElementById("scrollHere").scrollIntoView( {behavior: "smooth" })
})