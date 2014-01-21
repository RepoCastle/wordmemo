var words1 = ["market", "work"];
$(document).ready(function() {
    var translationFont = "color='red' size='12'";
    var phoneticFont = "color='yellow' size='12'";
    var explainFont = "color='blue' size='16'";
    var mapKeyFont = "color='red' size='12'";
    var mapValueFont = "color='blue' size='16'";

    getDataFromYoudao(words1);
   /* 
    var word = "challenge";
    $.getJSON(youdao + word).done(function(data) {

        var question = "<font " + translationFont + ">" + data.translation + "</font>" + "<br>" + "<font " + phoneticFont + ">" + data.basic.phonetic + "</font>";

        var answer = "";

        var explains = data.basic.explains;
        for (var i=0; i<explains.length; i++) {
            answer += "<font " + explainFont + ">" + explains[i] + "</font>" + "<br>";
        }
        answer += "<br>";
        var web = data.web;
        for (var i=0; i<web.length; i++) {
            var map = web[i];
            answer += "<font " + mapKeyFont + ">" + map.key + "</font>" +": " + "<font " + mapValueFont + ">" + map.value + "</font>" + "<br>";
        }

        alert("Q: " + question);
        alert("A: " + answer);
    });
    */
});


var getDataFromYoudao = function(words) {
    var youdao = "http://fanyi.youdao.com/openapi.do?keyfrom=CourseRanking&key=878350469&type=data&doctype=jsonp&callback=?&version=1.1&q=";
    for (var idx in words) {
       var word = words[idx];
       $.getJSON(youdao + word).done(function(data) {
           var thisword = word;
           $('#content').append("<div class='wordjson'> {" + thisword + ":" + JSON.stringify(data) + "}</div>");
       });
    }
}

var polishJSON = function(data) {
    var question = "<font " + translationFont + ">" + data.translation + "</font>" + "<br>" + "<font " + phoneticFont + ">" + data.basic.phonetic + "</font>";

    var answer = "";
    var explains = data.basic.explains;
    for (var i=0; i<explains.length; i++) {
        answer += "<font " + explainFont + ">" + explains[i] + "</font>" + "<br>";
    }
    answer += "<br>";
    var web = data.web;
    for (var i=0; i<web.length; i++) {
        var map = web[i];
        answer += "<font " + mapKeyFont + ">" + map.key + "</font>" +": " + "<font " + mapValueFont + ">" + map.value + "</font>" + "<br>";
    }
}
