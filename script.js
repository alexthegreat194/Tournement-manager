$(function () {
    $.getJSON("stuff.json", function (data) {
        console.log("Json loaded:")
        console.log(data)
    });
})
