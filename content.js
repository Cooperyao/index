
$(function () {
    $(".oneList").click(function () {
        $(this).children("ul").show()
        .parent().siblings().children("ul").hide();
    })
})