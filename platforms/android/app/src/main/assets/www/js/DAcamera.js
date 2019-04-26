/**
 * File Name: DAcamera.js
 * Revision History:
 * Daiana Arantes, 2019-04-06 : Created
 */
function DAcapturePhoto() {
    var options = {
        quality : 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: true
    };

    function successCallback(imageData) {
        var image = $("#imgFile");
        image.prop("src", "data:image/jpeg;base64," + imageData);
        $("#imageData").val("data:image/png;base64," + imageData);
        $("#imgFile").show();
    }

    function errorCallback(error) {
        alert("Error: " + error.message);
    }

    navigator.camera.getPicture(successCallback, errorCallback, options);
}

function DAcaptureEditablePhoto() {
    var options = {
        quality : 50,
        allowEdit: true,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: true
    };

    function successCallback(imageData) {
        var image = $("#imgFileEdit");
        image.prop("src", "data:image/jpeg;base64," + imageData);
        $("#imageDataEdit").val("data:image/png;base64," + imageData);
        $("#imgFileEdit").show();
    }

    function errorCallback(error) {
        alert("Error: " + error.message);
    }

    navigator.camera.getPicture(successCallback, errorCallback, options);
}

function DAloadFromLibrary() {
    var options = {
        quality : 50,
        allowEdit: true,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    };

    function successCallback(imageData) {
        var image = $("#imgFile");
        image.prop("src", "data:image/jpeg;base64," + imageData);
        $("#imageData").val("data:image/png;base64," + imageData);
        $("#imgFile").show();
    }

    function errorCallback(error) {
        alert("Error: " + error.message);
    }

    navigator.camera.getPicture(successCallback, errorCallback, options);
}

function DAloadFromLibraryEdit() {
    var options = {
        quality : 50,
        allowEdit: true,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    };

    function successCallback(imageData) {
        var image = $("#imgFileEdit");
        image.prop("src", "data:image/jpeg;base64," + imageData);
        $("#imageDataEdit").val("data:image/png;base64," + imageData);
        $("#imgFileEdit").show();
    }

    function errorCallback(error) {
        alert("Error: " + error.message);
    }

    navigator.camera.getPicture(successCallback, errorCallback, options);
}