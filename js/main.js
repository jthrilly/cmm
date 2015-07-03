/* jshint unused:false, devel:true */
/* global Swiper, alert, Media, console, moment, FastClick, FileUploadOptions, FileTransfer, LocalFileSystem */
/* export app */

var App = function App() {
    // Application Constructor
    var app = {};
    var appBaseURL = "http://thisisunfinished.com/cmm/";
    var mediaRec, mediaTimer;
    var recordingSrc = "";
    var postData = "";
    var fileURL = '';
    var recording = false;
    var recordingLength = 0;
    var uploadFinished = false;
    var uploadResponse = {};
    var formFinished = false;
    var paused = false;
    var currentSlide = 0;
    var timers = [];
    var shown = 0;
    var timeline = [
        { // 0

        },
        { // 1
            fnBeforeShow: function() {
                app.navEnable();
            }
        },
        { // 2
            fnBeforeShow: function() {
                app.navEnable();
            }
        },
        { // 3
            fnBeforeShow: function() {
                app.navDisable();
                $('div[data-slide="3"]').on('click', timeline[3].fnSlideClick);
            },
            fnAfterLeave: function() {
                $('div[data-slide="3"]').off('click', timeline[3].fnSlideClick);
                $('div[data-slide="3"] > *').removeClass('shown');
             // used to reset slide to default;
            },
            fnAfterShow: function() {
                // start the timed reveals
                var children = $('div[data-slide="3"]').children();
                shown = 0;
                timers.push(setTimeout(function() {
                    $(children[0]).addClass('shown');
                    shown++;
                }, 0));

                timers.push(setTimeout(function() {
                    $(children[1]).addClass('shown');
                    shown++;
                }, 3000));
                timers.push(setTimeout(function() {
                    app.navEnable();
                    $(children[2]).addClass('shown');
                    shown++;
                }, 6000));
            },
            fnSlideClick: function() {
                var children = $('div[data-slide="3"]').children().addClass('shown');
                app.navEnable();
                $(children[shown]).addClass('shown');
                if (timers.length > 0) {
                    console.log('cancelling timers');
                    for (var i = 0; i < timers.length; i++) {
                         window.clearTimeout(timers[i]);
                    }
                    timers = [];
                }

                // shown++;
                // if (shown <= children.length) {
                //     $('div[data-slide="2"]').children(':lt('+shown+')').addClass('shown');
                //     if (shown === children.length) {
                //         $('div[data-slide="2"]').children().addClass('shown');
                //         app.navEnable();
                //     }
                //
                // }
            }
        },
        { // 4
            fnBeforeShow: function() {
                app.navDisable();
                $('div[data-slide="4"]').on('click', timeline[4].fnSlideClick);
            },
            fnAfterLeave: function() {
                $('div[data-slide="4"]').off('click', timeline[4].fnSlideClick);
                $('div[data-slide="4"] > *').removeClass('shown');
             // used to reset slide to default;
            },
            fnAfterShow: function() {
                // start the timed reveals
                var children = $('div[data-slide="4"]').children();
                shown = 0;
                timers.push(setTimeout(function() {
                    $(children[0]).addClass('shown');
                    shown++;
                }, 0));

                timers.push(setTimeout(function() {
                    $(children[1]).addClass('shown');
                    shown++;
                }, 1000));
                timers.push(setTimeout(function() {
                    $(children[2]).addClass('shown');
                    shown++;
                }, 2000));
                timers.push(setTimeout(function() {
                    app.navEnable();
                    $(children[3]).addClass('shown');
                    shown++;
                }, 3000));
            },
            fnSlideClick: function() {
                var children = $('div[data-slide="4"]').children().addClass('shown');
                app.navEnable();
                $(children[shown]).addClass('shown');
                if (timers.length > 0) {
                    console.log('cancelling timers');
                    for (var i = 0; i < timers.length; i++) {
                         window.clearTimeout(timers[i]);
                    }
                    timers = [];
                }
            }
        },
        { // 5
            fnBeforeShow: function() {
                app.navEnable();
            }
        },
        { // 6
        },
        { // 7
        },
        { // 8
        },
        { // 9
        },
        { // 10
            fnBeforeShow: function() {
                app.navDisable();
                $('div[data-slide="10"]').on('click', timeline[10].fnSlideClick);
            },
            fnAfterLeave: function() {
                $('div[data-slide="10"]').off('click', timeline[10].fnSlideClick);
                $('div[data-slide="10"] > *').removeClass('shown');
             // used to reset slide to default;
            },
            fnAfterShow: function() {
                // start the timed reveals
                var children = $('div[data-slide="10"]').children();
                shown = 0;
                timers.push(setTimeout(function() {
                    $(children[0]).addClass('shown');
                    shown++;
                }, 0));
                timers.push(setTimeout(function() {
                    $(children[1]).addClass('shown');
                    shown++;
                }, 3000));
                timers.push(setTimeout(function() {
                    $(children[2]).addClass('shown');
                    shown++;
                }, 7000));
                timers.push(setTimeout(function() {
                    app.navEnable();
                    $(children[3]).addClass('shown');
                    shown++;
                }, 10000));
            },
            fnSlideClick: function() {
                var children = $('div[data-slide="10"]').children().addClass('shown');
                app.navEnable();
                $(children[shown]).addClass('shown');
                if (timers.length > 0) {
                    console.log('cancelling timers');
                    for (var i = 0; i < timers.length; i++) {
                         window.clearTimeout(timers[i]);
                    }
                    timers = [];
                }
            }
        },
        { // 11
            fnBeforeShow: function() {
                app.navDisable();
                $('div[data-slide="11"]').on('click', timeline[11].fnSlideClick);
            },
            fnAfterLeave: function() {
                $('div[data-slide="11"]').off('click', timeline[11].fnSlideClick);
                $('div[data-slide="11"] > *').removeClass('shown');
             // used to reset slide to default;
            },
            fnAfterShow: function() {
                // start the timed reveals
                var children = $('div[data-slide="11"]').children();
                shown = 0;
                timers.push(setTimeout(function() {
                    $(children[0]).addClass('shown');
                    shown++;
                }, 0));
                timers.push(setTimeout(function() {
                    app.navEnable();
                    $(children[1]).addClass('shown');
                    shown++;
                }, 3000));

            },
            fnSlideClick: function() {
                var children = $('div[data-slide="11"]').children().addClass('shown');
                app.navEnable();
                $(children[shown]).addClass('shown');
                if (timers.length > 0) {
                    console.log('cancelling timers');
                    for (var i = 0; i < timers.length; i++) {
                         window.clearTimeout(timers[i]);
                    }
                    timers = [];
                }
            }
        },
        { // 12
            fnBeforeShow: function() {
                app.navEnable();
            }
        },
        { // 13
        },
        { // 14
            fnBeforeShow: function() {
                window.mySwiper.lockSwipeToNext();
                $('.button-next').addClass('disabled');
            },
            fnAfterLeave: function() {
                $('.button-next').removeClass('disabled');
            }
        },
        { // 15
            fnBeforeShow: function() {
                window.plugins.insomnia.keepAwake();
                app.navDisable();
            },
            fnAfterLeave: function() {
                window.plugins.insomnia.allowSleepAgain();
            }
        },
        { // 16
            fnBeforeShow: function() {
                $('.form-submit').removeAttr('disabled');
                $('.form-submit').html('Submit');
                app.navDisable();
            }
        },
        { // 17
            fnBeforeShow: function() {
                app.navDisable();
            },
            fnAfterLeave: function() {
                app.navEnable();
                window.mySwiper.lockSwipeToPrev();
                $('.button-prev').addClass('disabled');
            }
        },
        { // 18
            fnAfterLeave: function() {
                $('.button-prev').removeClass('disabled');
             // used to reset slide to default;
            },
            fnBeforeShow: function() {
                $('#detailsForm')[0].reset();
                window.mySwiper.lockSwipeToPrev();
                $('.button-prev').addClass('disabled');
            }
        },
        { // 19
            fnBeforeShow: function() {
                window.mySwiper.unlockSwipeToPrev();
            }
        }
    ];
    app.reset = function() {
        mediaRec.release();
        recordingSrc = "";
        postData = "";
        fileURL = '';
        recording = false;
        recordingLength = 0;
        uploadFinished = false;
        uploadResponse = {};
        formFinished = false;
        paused = false;
        currentSlide = 0;
        timers = [];
        shown = 0;

        app.navEnable();
        window.mySwiper.slideTo(0);
    };
    app.init = function() {
        this.bindEvents();

        $("#detailsForm").validate({
            submitHandler: function(form) {
                // do other things for a valid form
                postData = $(form).serialize();
                if(!uploadFinished) {
                    //show waiting screen;
                    formFinished = true;
                    $('.form-row').hide();
                    $('.loading-row').show();
                    $('.loading-row').parent().removeClass('top');
                } else {
                    app.dataFinished();
                }
            }
        });
        // Swiper
        window.mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: false,
            speed:500,
            // Navigation arrows
            nextButton: '.button-next',
            prevButton: '.button-prev',
            onlyExternal: true,
            onSlideChangeStart : function(e) {
                // reset shown counter;
                shown = 0;
                if (timers.length > 0) {
                    console.log('cancelling timers');
                    for (var i = 0; i < timers.length; i++) {
                         window.clearTimeout(timers[i]);
                    }
                    timers = [];
                }
                var index = window.mySwiper.activeIndex;
                // console.log('Start '+window.mySwiper.activeIndex);
                // console.log('Pre '+window.mySwiper.previousIndex);
                if (typeof timeline[index] !== 'undefined' && typeof timeline[index].fnBeforeShow !== 'undefined') {
                    timeline[index].fnBeforeShow();
                }
            },
            onSlideChangeEnd : function() {
                // window.mySwiper.lockSwipes();
                var index = window.mySwiper.activeIndex;
                // console.log('End '+index);
                // console.log('Pre '+window.mySwiper.previousIndex);

                if (typeof timeline[index] !== 'undefined' && typeof timeline[index].fnAfterShow !== 'undefined') {
                    timeline[index].fnAfterShow();
                }
                // After leave events to cleanup where we've just been
                var previousIndex = window.mySwiper.previousIndex;
                if (typeof timeline[previousIndex] !== 'undefined' && typeof timeline[previousIndex].fnAfterLeave !== 'undefined') {
                    timeline[previousIndex].fnAfterLeave();
                }
            }
        });

        app.navDisable();

        // Button event handlers
        $('.fake-record').on('click', function() {
            app.navEnable();
            window.mySwiper.slideNext();
            app.navDisable();
            $('.record').trigger('click');
        });

        $('.record').on('click', function() {

            // We havent started recording yet
            if (!recording && !paused) {
                // alert('started recording...');
                app.startRecording();
                recording = true;
                $('.fa-microphone, .recording-light, .recording-text').addClass('recording');
                $('.record').html('<i class="fa fa-pause"></i> Pause');
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
        });

        $('.send').on('click', function() {
            // start the upload
            $('.upload-panel').toggleClass('show');
            setTimeout(function(){
                app.uploadRecording();
            }, 500);

            app.navEnable();
            window.mySwiper.slideNext();
            app.navDisable();

        });

        $('.stop').on('click', function() {
            // alert('stopped button handler');
            if (recording) {
                // alert('stopping recording...');
                app.stopRecording();
                $('.fa-microphone, .recording-light, .recording-text').removeClass('recording');

                // $('.stop').html('Restart');
                recording = false;
                paused = false;

                // show ovrlay
                $('.confirm-panel').addClass('show');

            } else {
                return false;
            }
        });

        $('.continue').on('click', function() {

            $('.confirm-panel').removeClass('show');
            setTimeout(function() {
                app.navEnable();
                window.mySwiper.slideNext();
                app.navDisable();
            }, 700);

        });

        $('.try-again').on('click', function() {
            recording = false;
            paused = false;
            mediaRec.release();
            $('.confirm-panel').removeClass('show');
            setTimeout(function() {
                app.navEnable();
                app.previousSlide();
                app.navDisable();
            }, 700);
        });

        $('.restart').on('click', function() {
            $('#detailsForm')[0].reset();
            app.navEnable();
            window.mySwiper.slideTo(0);
        });

        $('.delete').on('click', function() {
            app.navEnable();
            window.mySwiper.slideTo(19);
            app.navDisable();
        });

        $('.play').on('click', function() {
            app.playAudio();
        });
        $('.start').on('click', function() {
            app.navEnable();
            app.nextSlide();
        });
    };
    app.dataFinished = function() {
        //show loader
        $('.form-submit').html('<i class="fa fa-spinner fa-pulse"></i> Submit');
        $('.form-submit').attr('disabled','disabled');

        // add uuid to serialised form
        var uuid;
        if (typeof uploadResponse === 'undefined' || typeof uploadResponse.uuid === 'undefined') {
            uuid = "test";
        } else {
            uuid = uploadResponse.uuid;
        }
        postData += "&uuid=" + encodeURIComponent(uuid);
        console.log(postData);
        $.ajax({
            type: 'POST',
            data: postData,
            url: appBaseURL+'form.php',
            success: function(data){
                console.log(data);
                // within the form post callback, advance to next slide
                app.navEnable();
                window.mySwiper.slideTo(17);
                app.navDisable();
            },
            error: function(data){
                console.log(data);
                alert('There was an error uploading your data. Please try again.');
            }
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
                var vid = document.getElementById("bg");
                vid.play();
            }, 0);
        });

        // Fastclick removes click lag on buttons
        $(function () {
            FastClick.attach(document.body);
        });
    };
    app.navDisable = function() {
        $('.nav').addClass('swiper-button-disabled');
        window.mySwiper.lockSwipes();
    };
    app.navEnable = function() {
        $('.nav').removeClass('swiper-button-disabled');
        window.mySwiper.unlockSwipes();
    };
    app.nextSlide = function() {
        window.mySwiper.slideNext();
    };
    app.previousSlide = function() {
        window.mySwiper.slidePrev();
    };
    app.getMedia = function() {
        return mediaRec;
    };
    app.startRecording = function() {
        if (recording === false) {
            recordingLength = 0;
            recording = true;
            recordingSrc = "myrecording.m4a";
            mediaRec = new Media(recordingSrc, app.recordSuccess, app.error);
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
        // alert("Success!");
    };
    app.error = function(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    };
    app.setAudioPosition = function(position) {
        var time = moment().startOf('day').seconds(position).format('mm:ss');
        document.getElementById('counter').innerHTML = time;
    };
    app.uploadRecording = function() {
        // alert('uploadRecording');
        window.requestFileSystem(LocalFileSystem.TEMPORARY, 0,
            function(fileSystem) {
                fileSystem.root.getFile(recordingSrc, {
                    create: true,
                    exclusive: false
                },
                function (fileEntry) {
                    fileURL = fileEntry.toURL();
                    var uri = encodeURI(appBaseURL+"audio.php");

                    var options = new FileUploadOptions();
                    options.fileKey = "file";
                    options.fileName = recordingSrc;
                    options.mimeType ="audio/m4a";

                    var ft = new FileTransfer();
                    ft.onprogress = function(progressEvent) {
                        if (progressEvent.lengthComputable) {
                            var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
                            $('.progress-bar').css('width', perc+'%').attr('aria-valuenow', perc);
                        } else {
                            $('.progress-bar').css('width', 0+'%').attr('aria-valuenow', '0');
                        }
                    };

                    ft.upload(fileURL, uri, app.uploadSuccess, app.RecordError, options);
                }, app.error);
            }, app.error);
    };
    app.uploadSuccess = function(r) {
        uploadFinished = true;
        uploadResponse = JSON.parse(r.response);
        $('.upload-panel').removeClass('show');
        // console.log("Code = " + r.responseCode);
        // alert(uploadResponse.uuid);
        // alert(uploadResponse);
        // console.log("Sent = " + r.bytesSent);
        if (formFinished) {
            app.dataFinished();
        }
    };

    return app;
};
