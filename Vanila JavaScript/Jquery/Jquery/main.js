function init() {
    anno.makeAnnotatable(document.getElementById("myImage"));
}

$(document).ready(function () {
    init();
    $("#showBtn").click(function () {
        $("#posts").slideDown();
    });

    $("#hideBtn").click(function () {
        $("#posts").slideUp();
        $("#para").addClass("pink");
    });

    $("#toggleBtn").click(function () {
        $("#posts").slideToggle(3000);
    });

    $("#ajaxBtn").on("click", function () {
        var url = "https://jsonplaceholder.typicode.com/posts";
        $.ajax({
            method: "GET",
            url: url,
            success: function (res) {
                console.log(res);
                var posts = res;

                posts.map(function (post) {
                    if (post.id > 90) {
                        $("#posts").append(
                            '<li class="collection-item">' +
                                post.title +
                                "</li>"
                        );
                    }
                });
            },
            error: function (err) {
                console.log(err);
            },
        });
    });

    $("#weatherBtn").on("click", function () {
        var url =
            "api.openweathermap.org/data/2.5/forecast?q=Dhaka&appid=7d0d89e4f4c8e9f9475a9068250d84d5";
        $.ajax({
            method: "GET",
            url: url,
            success: function (res) {
                console.log(res);
            },
            error: function (err) {
                console.log(err);
            },
        });
    });
});
