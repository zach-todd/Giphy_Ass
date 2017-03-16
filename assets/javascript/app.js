$(document).ready(function() {

var title = ["Fallout 3","Fallout 4","Fallout New-Vegas", "Skyrim", "Portal", "Destiny","Bioshock"];
console.log(title);
var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC";
function buttongen(){
	$("#buttons").empty();
for (var i = 0; i < title.length; i++) {
	$("#buttons").prepend("<button class='game' data-game=' " + title[i] +" the game'>"+title[i] + "</button>");
	console.log(title[i]);
};
}

buttongen();


$("#submit").on("click", function(){
$("#images").empty();
var game = $("#TitleInput").val().trim();
console.log(game);
title.push(game);
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        game +"&api_key=dc6zaTOxFJmzC&limit=10";
        buttongen();

$.ajax({
	url:queryURL,
	method:"GET"
})
.done(function(response){

	console.log(queryURL);
	console.log(response);
	var results= response.data;
	for (var i = 0; i < results.length; i++) {
		 
	var imageDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var titleImage = $("<img>");
            titleImage.attr("src", results[i].images.fixed_height.url);
           	imageDiv.append(p);
            imageDiv.append(titleImage);
            $("#images").prepend(imageDiv);
          }
        });

});
$(document).on("click",".game", function(){
var game = $(this).attr("data-game");

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        game + "&api_key=dc6zaTOxFJmzC&limit=10";
        
$("#images").empty();
$.ajax({
	url:queryURL,
	method:"GET"
})
.done(function(response){

	console.log(queryURL);
	console.log(response);
	var results= response.data;
	for (var i = 0; i < results.length; i++) {
		 
	var imageDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var titleImage = $("<img>");
            titleImage.attr("src", results[i].images.fixed_height.url);
           	imageDiv.append(p);
            imageDiv.append(titleImage);
            $("#images").prepend(imageDiv);
          }
        });
    });
});
