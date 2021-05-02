<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
</head>

<body>
    <?php
$url='http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f417e01cb5df4564b78a7ae6350217b9';
$response = file_get_contents($url);
$NewsData = json_decode($response);

    ?>
<div class="jumbotron">
<h1>Google News Api | API </h1>

</div>
<div class=" container">
<?php
foreach($NewsData->articles as $News)
{
    ?>
    <div class="row NewsGrid">
    <div class="col-lg-3">
    <img src="<?php echo $News->urlToImage ?>" alt="image">
    </div>
    <div class="col-lg-9">
    <h2>Title: <?php echo $News->title ?></h2>
    <h2>Description: <?php echo $News->description ?></h2>
    <p>Content: <?php echo $News->content ?></p>
    <p>Author: <?php echo $News->author ?></p>
    <p>Published: <?php echo $News->publishedAt ?></p>
    </div>
    </div>
    <?php
}
    ?>
</div>

    <!-- <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script> -->

<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
</body>
</html>