
$(function () {
    startEvents();

});

function startEvents() {
    startEventClearResult();
    startFormAccounts();

}

function startEventClearResult() {
    $("#clear").click(function () {
        $("#result").text("");
    });
}

function startFormAccounts() {
    $("#accountsForm").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: $('#accountsForm').attr('method'),
            url:  "form/accounts/"+$("#server").val()+"/"+$("#principal").val(),
            contentType: false,
            processData: false,
            cache: false,
            success: function (data) {
                $("#result").text(data);
            }
        });
    });
}
