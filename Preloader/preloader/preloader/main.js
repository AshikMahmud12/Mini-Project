window.addEventListener("DOMContentLoaded", function () {
    var preloader = document.getElementById("preloader");

    setTimeout(function () {
        preloader.remove();
    }, 1000);

    var submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();

        var message = document.getElementById("message");
        var title = document.getElementById("title").value;
        var body = document.getElementById("body").value;

        if (title == "" && body == "") {
            message.textContent = "Title & Body Field are blank";
        } else if (title.length < 5) {
            message.textContent = "Title required minimum 5 characters";
        } else if (body.length < 10) {
            message.textContent = "Description required minimum 10 characters";
        } else {
            console.log(title, body);
        }
    });
});
