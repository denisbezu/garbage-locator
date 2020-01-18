
$(document).ready(function() {
    console.log('test');
    $(document).on('click', '[data-action-delete]', function (event) {
        deleteImage(event.target);
    });


});

function deleteImage(elem) {
    var image = $(elem);
    var idImage = image.attr('data-id-image');

    $.ajax({
        url: controllerUrl,
        data: {
            idImage: idImage
        },
        dataType: 'JSON',
        method: 'POST',
        success: function (response) {
            if (response.success == true) {
                image.closest('.image-container').remove();
            } else {
                console.log(response);
            }
        }
    });
}
