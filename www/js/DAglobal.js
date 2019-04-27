/**
 * File Name: DAglobal.js
 * Revision History:
 * Daiana Arantes, 2019-04-26 : Created
 */
function daBtnSave_click() {
    DAaddTomato();

}
function daBtnUpdate_click() {
    DAupdateTomato();
}

function daAddTomatoPage_show() {
    DAupdateShapeDropdown();
    DArefreshAdd();
}

function daViewAllTomatoesPage_show() {
    DAgetTomatoes();
}

function daEditTomatoPage_show() {
    DAshowCurrentTomato();
}

function daBtnDelete_click() {
    DAdeleteTomato();
}


function btnCaptureAdd_click() {
    DAcapturePhoto();
}

function btnLoadFromLibraryAdd_click() {
    DAloadFromLibrary();
}

function btnLoadFromLibraryEdit_click() {
    DAloadFromLibraryEdit();
}

function btnCaptureEdit_click() {
    DAcaptureEditablePhoto();
}

function daBtnCancel_click() {
    $(location).prop('href', "#daViewAllTomatoesPage");
}

function init() {

    $("#daBtnSave").on("click", daBtnSave_click);
    $("#daBtnUpdate").on("click", daBtnUpdate_click);
    $("#daBtnDelete").on("click", daBtnDelete_click);

    $("#daAddTomatoPage").on("pageshow", daAddTomatoPage_show);
    $("#daViewAllTomatoesPage").on("pageshow", daViewAllTomatoesPage_show);
    $("#daEditTomatoPage").on("pageshow", daEditTomatoPage_show);

    $("#btnCaptureAdd").on("click", btnCaptureAdd_click);
    $("#btnCaptureEdit").on("click", btnCaptureEdit_click);
    $("#btnLoadFromLibraryAdd").on("click", btnLoadFromLibraryAdd_click);
    $("#btnLoadFromLibraryEdit").on("click", btnLoadFromLibraryEdit_click);
    $("#daBtnCancel").on("click", daBtnCancel_click);

}

$(document).ready(function (){

    init();
    initDB();
});

function initDB()
{
    try
    {
        DB.DACreateDatabase();
        if (db)
        {
            DB.DACreateTables();
        }
        else
        {
            console.error("Error: Cannot create tables: Database does not exist");
        }
    }
    catch (e)
    {
        console.error("Error: (Fatal) Error in initDB(). Cannot proceed");
    }
}