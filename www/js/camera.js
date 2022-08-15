function cameraFunction(){


    $(document).ready(function () {

        let camera = {
            init: function(){
                $("#openCamera").on('click', camera.takePhoto());
        },
            takePhoto: function (){
                let opts = {
                    quality:80,
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    mediaType: Camera.MediaType.PICTURE,
                    encodingType: Camera.EncodingType.JPEG,
                    cameraDirection: Camera.Direction.BACK,
                    targetWidth: 800,
                    targetHeigh: 1200

                };
                navigator.camera.getPicture(camera.sux, camera.fai, opts);
        },
            sux: function (){
                $(".cameraFeedback").text("Your pictue is saved!")
            },
            fai: function (msg){
                $(".cameraFeedback").text(msg)
            }
        };

        camera.init();
    })
}


