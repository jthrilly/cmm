/* jshint unused:false, devel:true */
/* global Swiper, alert, Media, console, moment, FastClick, FileUploadOptions, FileTransfer, LocalFileSystem */
/* export app */

var App = function App() {
    // Application Constructor
    var app = {};
    var mediaRec, mediaTimer, mySwiper;
    var recordingSrc = "";
    var fileURL = '';
    var recording = false;
    var recordingLength = 0;
    var paused = false;

    function gotFS(fileSystem) {
        fileSystem.root.getFile(recordingSrc, {
            create: true,
            exclusive: false
        }, gotFileEntry, app.recordError);
    }

    function gotFileEntry(fileEntry) {
        fileURL = fileEntry.toURL();
        var uri = encodeURI("http://beta.mindful-monkey.com/test/index.php");

        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = recordingSrc;
        options.mimeType ="audio/m4a";

        var ft = new FileTransfer();
        ft.onprogress = function(progressEvent) {
            if (progressEvent.lengthComputable) {
                console.log('progress..'+progressEvent.loaded);
                var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
                $('.progress-bar').css('width', perc+'%').attr('aria-valuenow', perc);
            } else {
                $('.progress-bar').css('width', 0+'%').attr('aria-valuenow', '0');
            }
        };
        ft.upload(fileURL, uri, app.uploadSuccess, app.RecordError, options);
    }

    function recordButtonHandler() {

        // We havent started recording yet
        if (!recording && !paused) {
            // alert('started recording...');
            app.startRecording();
            recording = true;
            $('.fa-microphone, .recording-light, .recording-text').addClass('recording');
            $('.record').html('<i class="fa fa-pause"></i> Pause');
            $('.stop').html('<i class="fa fa-stop"></i> Stop');
        // We are paused
        } else if (recording && paused) {
            paused = false;
            // alert('resuming recording...');
            $('.record').html('<i class="fa fa-pause"></i> Pause');
            $('.fa-microphone, .recording-light, .recording-text').addClass('recording');
            app.resumeRecording();
        // We are pausing
        } else {
            // alert('pausing recording...');
            paused = true;
            app.pauseRecording();
            $('.fa-microphone, .recording-light, .recording-text').removeClass('recording');
            $('.record').html('<i class="fa fa-play"></i> Resume');
        }
    }

    function stopButtonHandler() {
        // alert('stopped button handler');
        if (recording) {
            // alert('stopping recording...');
            app.stopRecording();
            $('.fa-microphone, .recording-light, .recording-text').removeClass('recording');

            $('.record').html('<i class="fa fa-circle"></i> Start');
            // $('.stop').html('Restart');
            recording = false;
            paused = false;
        } else {
            return false;
        }
    }

    app.uploadSuccess = function(r) {
        alert(r.response);
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);

    };

    app.init = function() {
        this.bindEvents();
        // Swiper
        mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            speed:600
        });

        $('.upload').on('click', app.uploadRecording);
        $('.record').on('click', recordButtonHandler);
        $('.stop').on('click', stopButtonHandler);
        $('.play').on('click', function() {
            app.playAudio();
        });

        $('.start').on('click', function() {
            app.nextSlide();
        });
    };
    app.bindEvents = function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    };
    app.onDeviceReady = function() {
        // apparently, these should be done when the device is ready
        // document.addEventListener('offline', this.onDeviceOffline, false);
        // document.addEventListener('online', this.onDeviceOnline, false);
        document.addEventListener("resume", function() {
            setTimeout(function(){
                // trying to fix video stalling when app is reopened
                var vid = document.getElementById("myVideo");
                vid.play();
            }, 0);
        });

        // Get the filesystem we will store the audio to


        // Fastclick removes click lag on buttons
        $(function () {
            FastClick.attach(document.body);
        });

    };
    app.nextSlide = function() {
        mySwiper.slideNext();
    };
    app.previousSlide = function() {
        mySwiper.slidePrev();
    };
    app.getMedia = function() {
        return mediaRec;
    };

    app.startRecording = function() {
        if (recording === false) {
            recording = true;
            recordingSrc = "myrecording.m4a";
            mediaRec = new Media(recordingSrc, app.recordSuccess, app.recordError);
            // Record audio
            mediaRec.startRecord();
            mediaTimer = setInterval(function() {
                app.setAudioPosition(recordingLength);
                recordingLength++;
            }, 1000);
        } else {
            return false;
        }
    };
    app.pauseRecording = function() {
        clearInterval(mediaTimer);
        mediaRec.pauseRecord();
    };
    app.resumeRecording = function() {
        mediaRec.resumeRecord();
        mediaTimer = setInterval(function() {
            app.setAudioPosition(recordingLength);
            recordingLength++;
        }, 1000);
    };
    app.stopRecording = function() {
        if (recording === true) {
            mediaRec.stopRecord();
            clearInterval(mediaTimer);
            recording = false;
        } else {
            return false;
        }
    };
    app.playAudio = function() {
        mediaRec.play();
        mediaTimer = setInterval(function() {
            // get my_media position
            mediaRec.getCurrentPosition(
                // success callback
                function(position) {
                    if (position > -1) {
                        app.setAudioPosition(position);
                    }
                },
                // error callback
                function(e) {
                    alert("Error getting pos=" + e);
                    // app.setAudioPosition("Error: " + e);
                }
            );
        }, 1000);
    };
    app.recordSuccess = function() {
        alert("Success!");
    };
    app.recordError = function(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    };
    app.setAudioPosition = function(position) {
        var time = moment().startOf('day').seconds(position).format('mm:ss');
        document.getElementById('counter').innerHTML = time;
    };
    app.uploadRecording = function() {
        alert('uploadRecording');
        window.requestFileSystem(LocalFileSystem.TEMPORARY, 0, gotFS, app.recordError);
    };

    return app;
};
