
$(function () {
    startEvents();

});

function startEvents() {
    startEventClearResult();
    startSelectEvent();
    startForm();
}


function startForm() {
    startFormAccounts();
    startFormMap_entry();
    startFormFees();
    startFormContractInterface();
    startFormContractSource();
}

function startFormContractSource() {
    $("#contractsource").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: $('#contractsource').attr('method'),
            url: "form/contracts/source/" + $("#server").val() +"/"+ $("#stacksaddress").val() +"/"+ $("#contractnamecontractsource").val(),
            contentType: false,
            processData: false,
            cache: false,
            success: function (data) {
                $("#result").text(data);
            },
            error: function (data) {
                $("#result").text(data);
            }
        });
    });
}

function startFormContractInterface() {
    $("#contractinterface").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: $('#contractinterface').attr('method'),
            url: "form/contracts/interface/" + $("#serverinterface").val() +"/"+ $("#stacksaddress").val() +"/"+ $("#contractnamecontractinterface").val(),
            contentType: false,
            processData: false,
            cache: false,
            success: function (data) {
                $("#result").text(data);
            },
            error: function (data) {
                $("#result").text(data);
            }
        });
    });
}

function startFormFees() {
    $("#feesForm").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: $('#feesForm').attr('method'),
            url: "form/fees/transfer/" + $("#serverfees").val(),
            contentType: false,
            processData: false,
            cache: false,
            success: function (data) {
                $("#result").text(data);
            },
            error: function (data) {
                $("#result").text(data);
            }
        });
    });
}

function startSelectEvent() {
    $("#selectquery").change(
            function () {
                $("form").each(function () {
                    $(this).parent().hide();
                });
                var sel = $("select option:selected").val();
                $("#form" + sel).show();
            });

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
            url: "form/accounts/" + $("#server").val() + "/" + $("#principal").val(),
            contentType: false,
            processData: false,
            cache: false,
            success: function (data) {
                $("#result").text(data);
            },
            error: function (data) {
                $("#result").text(data);
            }
        });
    });
}

function startFormMap_entry() {
    $("#map_entryForm").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: $('#map_entryForm').attr('method'),
            url: "form/map_entry/" + $("#servermap").val() + "/" +
                    $("#stackaddress").val() + "/" + $("#contractname").val() + "/" + $("#mapname").val(),
            contentType: false,
            processData: false,
            cache: false,
            success: function (data) {
                $("#result").text(data);
            },
            error: function (data) {
                $("#result").text(data);
            }
        });
    });
}
