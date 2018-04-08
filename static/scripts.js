$("#step2_form").submit(function () {
    var startTime = $('#startTime').val();
    var currentTime = +new Date();
    var timeSpent = currentTime - startTime;
    var convertedTime = new Date(timeSpent * 1000).getSeconds();
    $('#time_spent').val(convertedTime + 'seconds');
    $('#startTime').remove();
    var content = $("p#formatted_text_p").text();
    $("input#formatted_text").val(content);
    // return true;
});