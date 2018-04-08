$("#step2_form").submit(function () {
    var startTimeUnparsed = $('#startTime').val();
    var content = $("p#formatted_text_p").text();
    var startTime = new Date(startTimeUnparsed);
    var currentTime = new Date();

    var timeSpent = Math.abs(currentTime.getTime() - startTime.getTime());
    var convertedTime = Math.ceil(timeSpent / (1000));

	console.log('times:', startTimeUnparsed, content, startTime, currentTime, timeSpent)

    $('#time_spent').val(convertedTime + ' seconds');
    $('#startTime').remove();
    $("input#formatted_text").val(content);
    return true;
});
