var ajax = new XMLHttpRequest();

var main = document.getElementById("main");

var url = "https://jsonplaceholder.typicode.com/posts";
var posts = [];

ajax.open("GET", url, true);

ajax.onload = function () {
    if (this.status == 200) {
        posts = JSON.parse(this.responseText);

        posts.forEach(function (post) {
            if (post.id <= 15) {
                var li = document.createElement("li");
                var id = document.createElement("p");
                var title = document.createElement("h3");
                var description = document.createElement("p");

                li.classList.add("list-group-item");

                title.textContent = "Post Title: " + post.title;
                description.textContent = "Post Description: " + post.body;
                id.textContent = "Post ID: " + post.id;

                li.append(id, title, description);

                main.appendChild(li);
            }
        });
    }
};

// ajax.onreadystatechange = function () {
//     console.log(this.readyState);
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//     }
// };

ajax.send();
