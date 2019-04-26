/**
 * File Name: DAutil.js
 * Revision History:
 * Daiana Arantes, 2019-04-28 : Created
 */

function daValidate_daAddForm(){
    var form = $("#daAddForm");

    form.validate({
        rules: {
            daAddTomatoName: {
                required: true,
                rangelength: [2,20]
            },
            daAddScientificName:{
                required: true,
                rangelength: [2,20]
            },
            daAddColor: {
                required: true
            },
            daAddDate: {
                required: true
            }
        },
        messages: {
            daAddTomatoName: {
                required: "You must enter Common Name",
                rangelength: "Length must be 2-20 characters long"
            },
            daAddScientificName:{
                required: "You must enter an Scientific Name",
                rangelength: "Length must be 2-20 characters long"
            },
            daAddColor: {
                required: "Color Name is required"
            },
            daAddDate: {
                required: "Found Date is required"

            }
        }
    });
    return form.valid();
}


function daValidate_daEditForm(){
    var form = $("#daEditForm");

    form.validate({
        rules: {
            daEditTomatoName: {
                required: true,
                rangelength: [2,20]
            },
            daEditScientificName:{
                required: true,
                rangelength: [2,20]
            },
            daEditColor: {
                required: true
            },
            daEditDate: {
                required: true
            }
        },
        messages: {
            daEditTomatoName: {
                required: "You must enter Common Name",
                rangelength: "Length must be 2-20 characters long"
            },
            daEditScientificName:{
                required: "You must enter an Scientific Name",
                rangelength: "Length must be 2-20 characters long"
            },
            daEditColor: {
                required: "Color Name is required"
            },
            daEditDate: {
                required: "Found Date is required"

            }
        }
    });

    return form.valid();
}
