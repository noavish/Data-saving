$('.button1').click(function() {
    fetch();
    alert ('The button was clicked!');
});

var fetch = function () {
    $.ajax({
        method: "GET",
        url: "file",
        dataType: "json",
        success: function (data) {
            console.log(data);
        }, error: function (jqXHR, testStatus) {
            console.log(testStatus);
        }
    })
};

$('.button2').click(function() {
    var dataToSend = $(this).siblings('#input').val();
    sendData(dataToSend);
});

var sendData = function (dataToSend) {
    $.ajax({
        method: "POST",
        url: "file",
        dataType: "json",
        data: dataToSend,
        success: function (data) {
            console(data);
        }, error: function (jqXHR, testStatus) {
            console.log(testStatus);
        }
    })
}