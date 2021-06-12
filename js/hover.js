$(document).ready(()=>{
    console.log("Running...");


    // Feature item One Mouse Out
    $("#features-item-1").mouseover(()=>{
        $('#features-item-1-title').text("Upload");

    });

    $("#features-item-1").mouseover(()=>{
        $('#features-item-1-des').text("Choose the picture you want to edit. Click the upload button to upload the photo file");
    });

// Feature item One Mouse Out
    $("#features-item-1").mouseout(()=>{
        $('#features-item-1-title').text("Upload");
    });

    $("#features-item-1").mouseout(()=>{
        $('#features-item-1-des').text("");
    });



    // Feature item Two Mouse Out
    $("#features-item-2").mouseover(()=>{
        $('#features-item-2-title').text("Edit");

    });

    $("#features-item-2").mouseover(()=>{
        $('#features-item-2-des').text("Our team of editing experts will edit your photo as per your request and upload it to the website.");
    });

// Feature item Two Mouse Out
    $("#features-item-2").mouseout(()=>{
        $('#features-item-2-title').text("Edit");
    });

    $("#features-item-2").mouseout(()=>{
        $('#features-item-2-des').text("");
    });



    // Feature item Three Mouse Out
    $("#features-item-3").mouseover(()=>{
        $('#features-item-3-title').text("Quality");

    });

    $("#features-item-3").mouseover(()=>{
        $('#features-item-3-des').text("We have a dedicated quality control team to ensure editing is performed to the highest of standards.");
    });

// Feature item One Three Out
    $("#features-item-3").mouseout(()=>{
        $('#features-item-3-title').text("Quality");
    });

    $("#features-item-3").mouseout(()=>{
        $('#features-item-3-des').text("");
    });



    // Feature item Four Mouse Out
    $("#features-item-4").mouseover(()=>{
        $('#features-item-4-title').text("Download");

    });

    $("#features-item-4").mouseover(()=>{
        $('#features-item-4-des').text("Once we upload your photo to the server you can click the download button and safe you picture.");
    });

// Feature item Four Mouse Out
    $("#features-item-4").mouseout(()=>{
        $('#features-item-4-title').text("Download");
    });

    $("#features-item-4").mouseout(()=>{
        $('#features-item-4-des').text("");
    });




});