var main = document.getElementById("main");

var xhr = new XMLHttpRequest();

xhr.open("GET", "readme.txt", true);

xhr.onload = function () {
    if (this.status == 200) {
        content = JSON.stringify(this.responseText);
        console.log(content);
    }
};

xhr.send();

window.addEventListener("DOMContentLoaded", function () {
    window.location.hash = "";
});

window.addEventListener("hashchange", function () {
    var hashValue = window.location.hash;
    router(hashValue);
});

function router(routes) {
    switch (routes) {
        case "#home": {
            main.innerHTML =
                '<div class="jumbotron">' +
                '<h2 class="display-4">Home Page</h2>' +
                "<p>" +
                content +
                "</p>" +
                "</div>";
            break;
        }
        case "#profile": {
            main.innerHTML =
                '<div class="jumbotron">' +
                '<h2 class="display-4">Profile Page</h2>' +
                "<p>" +
                "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
                "Inventore cum dolorem a omnis officia possimus voluptas" +
                "aliquam, ipsa eius quibusdam illum optio sunt assumenda," +
                "asperiores adipisci. Cumque labore pariatur asperiores." +
                "</p>" +
                "</div>";
            break;
        }
        case "#about": {
            main.innerHTML =
                '<div class="jumbotron">' +
                '<h2 class="display-4">About Page</h2>' +
                "<p>" +
                "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
                "Inventore cum dolorem a omnis officia possimus voluptas" +
                "aliquam, ipsa eius quibusdam illum optio sunt assumenda," +
                "asperiores adipisci. Cumque labore pariatur asperiores." +
                "</p>" +
                "</div>";
            break;
        }
    }
}
