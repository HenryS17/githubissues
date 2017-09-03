/* 
  index.js
*/
$(document).ready(function() {

  "use strict";  

  var resultList = $("#resultList");
  
  $("#gitHubSearchForm").on("submit", function() {

      resultList.text("Searching...");

      var gitHubSearch = "https://api.github.com/repos/angular/angular/issues?since=";
       var dt = new Date(Date.now());

         dt.setDate(dt.getDate()-7);

         gitHubSearch+=dt.toISOString();
         console.log(gitHubSearch);
         
      $.get(gitHubSearch, function(data) {
          displayResults(data);
        });
    return false;
  });

  function displayResults(results) {
    resultList.empty();
    $.each(results, function(i, item) {

      var newResult = $("<div class='result'>" +
        "<div class='title'><b>Title</b>:" + item.title + "</div>" +
        "<div><b>Body</b>: " + item.body + "</div>" +
        "<div><b>user</b>: " + item.user.login + "</div>" +
        "<div><b>Assignee</b>: " + item.assignee + "</div>" +
        "</div>");

      newResult.hover(function() {
        $(this).css("background-color", "LightSteelBlue");
      }, function() {
        $(this).css("background-color", "transparent");
      });

      resultList.append(newResult);

    });
  } 

});
