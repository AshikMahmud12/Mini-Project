window.addEventListener("DOMContentLoaded", function () {
    // Preloader
    var preloader = document.getElementById("preloader");
    setTimeout(function () {
        preloader.remove();
    }, 1000);

    // Getting Posts from JSON PlaceHolder
    var postContainer = document.getElementById("post-container");
    var getXHR = new XMLHttpRequest();
    getXHR.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    getXHR.onload = function () {
        if (this.status == 200) {
            var posts = JSON.parse(this.responseText);

            posts.map(function (post) {
                if (post.id > 95) {
                    var postLi = document.createElement("li");
                    postLi.classList.add("collection-item");

                    postLi.textContent = post.title;
                    postContainer.appendChild(postLi);
                }
            });
        }
    };

    getXHR.send();
    // Getting Posts Ajax Request End

    // Validation
    var message = document.getElementById("message");
    var title = document.getElementById("title");
    var body = document.getElementById("body");
    var submitBtn = document.getElementById("submitBtn");

    // Title Field Validation
    title.addEventListener("blur", function () {
        if (title.value.length < 5) {
            message.textContent = "Title Should be Minimum 5 Characters";
        } else {
            message.textContent = "";
        }
    });

    // Description Field Validation
    body.addEventListener("blur", function () {
        if (body.value.length < 10) {
            message.textContent = "Description Should be Minimum 10 Characters";
        } else {
            message.textContent = "";
        }
    });

    // Submit Button Validation
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        if (!(title.value == "" && body.value == "")) {
            if (title.value.length < 5) {
                message.textContent = "Title Should be Minimum 5 Characters";
            } else {
                message.textContent = "";
                if (body.value.length < 10) {
                    message.textContent =
                        "Description Should be Minimum 10 Characters!";
                } else {
                    message.textContent = "";
                    console.log("Successfull");

                    // Post Ajax Request
                    var postXhr = new XMLHttpRequest();

                    postXhr.open(
                        "POST",
                        "https://jsonplaceholder.typicode.com/posts",
                        true
                    );

                    postXhr.setRequestHeader(
                        "Content-type",
                        "application/x-www-form-urlencoded"
                    );

                    postXhr.onload = function () {
                        if (this.status == 201) {
                            console.log(this.responseText);
                            var post = JSON.parse(this.responseText);

                            var postLi = document.createElement("li");
                            postLi.classList.add("collection-item");

                            postLi.textContent = post.title;
                            postContainer.appendChild(postLi);
                        }
                    };

                    // postXhr.send("title=title&body=lorem&userId=5");
                    postXhr.send(
                        "title=" +
                            title.value +
                            "&body=" +
                            body.value +
                            "&userId=1"
                    );
                }
            }
        } else {
            message.textContent = "Title & Description Field are required";
        }
    });
});
