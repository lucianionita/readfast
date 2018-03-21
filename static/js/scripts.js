$("#step2_form").submit(function () {
    var content = $("p#formatted_text_p").text();
    $("input#formatted_text").val(content);
    return true;
});