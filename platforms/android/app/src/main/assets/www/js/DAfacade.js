/**
 * File Name: DAfacade.js
 * Revision History:
 * Daiana Arantes, 2019-04-26 : Created
 */
function DAupdateShapeDropdown() {

    var options = [];

    function callback(tx, results) {
        var htmlCode = "";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            if (row['name'] === 'Cocktail'){
                htmlCode += "<option value=" + row['name'] + " selected>" + row['name'] + "</option>";
            }else{
                htmlCode += "<option value=" + row['name'] + ">" + row['name'] + "</option>";
            }
        }
        var select = $("#daAddShape");
        select = select.html(htmlCode);

        select.selectmenu("refresh");
    }
    shape.DAselectAll(options, callback);
}

function DAaddTomato(){

    if (daValidate_daAddForm())
    {
        console.info("Validation is successful");
        var options;
        var commonName = $("#daAddTomatoName").val();
        var scientificName = $("#daAddScientificName").val();
        var size = $("input[name='daRadSizeAdd']:checked").val();
        var shapeId = $("#daAddShape").prop("selectedIndex");
        var colorName = $("#daAddColor").val();
        var moreInfo = $("#daAddAdditionalInfo").val();
        var foundDate = $("#daAddDate").val();

        var dataURL = $("#imageData").val();
        options = [commonName, scientificName, size, shapeId, colorName, moreInfo, foundDate, dataURL];

        function callback()
        {
            console.info("Record inserted successfully");
            $(location).prop('href', "#daViewAllTomatoesPage");
        }


        tomato.DAinsert(options, callback);
        alert("New Tomato Added");
    }
    else
    {
        console.error("Validation failed");
    }
}
function DAgetTomatoes(){
    var options = [];

    function callback(tx, results)
    {
        var htmlCode = "";

        for (var i = 0; i < results.rows.length; i++)
        {
            var row = results.rows[i];

            htmlCode += "<li data-icon=\"carat-r\">" +
                "<a data-role='button' data-row-id=" + row['id'] + " href='#'>" +
                "<h2>Common Name: " + row['commonName'] + "</h2>" +
                "<p>Scientific Name: " + row['scientificName'] + "</p>" +
                "<p>Color: " + row['colorName'] + "</p>" +
                "</a>" +
                "</li>";
        }

        var lv = $("#daTomatoList");
        lv = lv.html(htmlCode);

        lv.listview("refresh");

        function clickHandler()
        {
            localStorage.setItem("id", $(this).attr("data-row-id") );
            $(location).prop('href', '#daEditTomatoPage');
        }
        $("#daTomatoList a").on("click", clickHandler);
    }

    tomato.DAselectAll(options, callback);
}

function DAshowCurrentTomato (){

    var id = localStorage.getItem("id");
    var options = [id];

    function callback(tx, results) {
        var row = results.rows[0];


        $("#daEditTomatoName").val(row['commonName']);
        $("#daEditScientificName").val(row['scientificName']);
        $("#daEditShape").prop('selectedIndex', row['shapeId']);
        $("#daEditColor").val(row['colorName']);
        $("#daEditAdditionalInfo").val(row['moreInfo']);
        $("#daEditDate").val(row['foundDate']);

        var select = $("#daEditShape");
        select.selectmenu("refresh");

        if (row['size'] === 'Small') {
            $("#daRadSmallEdit").prop('checked',true).click();

        }else if (row['size'] === 'Medium') {
            $("#daRadMediumEdit").prop('checked',true).click();
        }
        else{
            $("#daRadLargeEdit").prop('checked',true).click();
        }
        $("#daRadSizeEdit :radio").checkboxradio('refresh');

        var img = document.getElementById("imgFileEdit");
        img.src = row['photo'];
        $("#imageDataEdit").val(row['photo']);
        if ($("#imageDataEdit").val() !== "")  {
            $("#imgFileEdit").show();
        }else{
            $("#imgFileEdit").hide();
        }


    }

        tomato.DAselect(options, callback);
}

function DAupdateTomato(){

    if (daValidate_daEditForm()) {
        console.info("Validation is successful");

        var commonName = $("#daEditTomatoName").val();
        var scientificName = $("#daEditScientificName").val();
        var size = $("input[name='daRadSizeEdit']:checked").val();
        var shapeId = $("#daEditShape").prop("selectedIndex");
        var colorName = $("#daEditColor").val();
        var moreInfo = $("#daEditAdditionalInfo").val();
        var foundDate = $("#daEditDate").val();
        var id= localStorage.getItem("id");
        var dataURL = $("#imageDataEdit").val();
        var options;

        options = [commonName, scientificName, size, shapeId, colorName, moreInfo, foundDate, dataURL, id];

        function callback() {
            console.info("Record updated successfully");
            $(location).prop('href', "#daViewAllTomatoesPage");
        }

        alert("Tomato Updated successfully");
    }else{
        console.error("Validation failed");
    }
    tomato.DAupdate(options, callback);
}

function DAdeleteTomato(){
    var id= localStorage.getItem("id");
    var options = [id];

    function callback() {
        console.info("Record deleted successfully");
        $(location).prop('href', "#daViewAllTomatoesPage");
    }
    alert("Tomato Deleted successfully");
    tomato.DAdelete(options, callback);
}
//To clear add page
function DArefreshAdd(){
    $("#daAddTomatoName").val("");
    $("#daAddScientificName").val("");
    $("#daRadSmallAdd").prop('checked',true).click();
    $("#daAddShape").prop('selectedIndex', 0);
    $("#daAddColor").val("");
    $("#daAddAdditionalInfo").val("");
    $("#daAddDate").val("");
    $("#imageDataEdit").val("");
    $("#imgFile").hide();
    //$("#imgFileEdit").hide();
    var select = $("#daAddShape");
    select.selectmenu("refresh");
}