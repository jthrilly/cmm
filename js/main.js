/* jshint unused:false, devel:true */
/* global Swiper, alert, Media, console, moment, FastClick, FileUploadOptions, FileTransfer, LocalFileSystem */
/* export app */

var App = function App() {
    // Application Constructor
    var app = {};
    var mediaRec, mediaTimer;
    var recordingSrc = "";
    var fileURL = '';
    var recording = false;
    var recordingLength = 0;
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
                app.navDisable();
                $('div[data-slide="2"]').on('click', timeline[2].fnSlideClick);
            },
            fnAfterLeave: function() {
                $('div[data-slide="2"]').off('click', timeline[2].fnSlideClick);
                $('div[data-slide="2"] > *').removeClass('shown');
             // used to reset slide to default;
            },
            fnAfterShow: function() {
                // start the timed reveals
                var children = $('div[data-slide="2"]').children();
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
                timers.push(setTimeout(function() {
                    window.mySwiper.slideNext();
                }, 15000));
            },
            fnSlideClick: function() {
                console.log(shown);
                if (timers.length > 0) {
                    console.log('cancelling timers');
                    for (var i = 0; i < timers.length; i++) {
                         window.clearTimeout(timers[i]);
                    }
                    timers = [];
                }

                var children = $('div[data-slide="2"]').children();
                console.log('ch leng: '+children.length);
                if (shown <= children.length) {
                    $('div[data-slide="2"]').children(':lt('+shown+')').addClass('shown');
                    if (shown === children.length-1) {
                        app.navEnable();
                    }
                    shown++;
                }
            }
        },
        { // 3
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
                }, 2000));
                timers.push(setTimeout(function() {
                    app.navEnable();
                    $(children[2]).addClass('shown');
                    shown++;
                }, 4000));
            },
            fnSlideClick: function() {
                console.log(shown);

                if (timers.length > 0) {
                    console.log('cancelling timers');
                    for (var i = 0; i < timers.length; i++) {
                         window.clearTimeout(timers[i]);
                    }
                    timers = [];
                }

                var children = $('div[data-slide="4"]').children();
                console.log('ch leng: '+children.length);
                if (shown <= children.length) {
                    $('div[data-slide="4"]').children(':lt('+shown+')').addClass('shown');
                    if (shown === children.length-1) {
                        app.navEnable();
                    }
                    shown++;
                }
            }
        },
        { // 5
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
        },
        { // 11
        },
        { // 12
            fnBeforeShow: function() {
                app.navDisable();
                $('div[data-slide="12"]').on('click', timeline[12].fnSlideClick);
            },
            fnAfterLeave: function() {
                $('div[data-slide="12"]').off('click', timeline[12].fnSlideClick);
                $('div[data-slide="12"] > *').removeClass('shown');
             // used to reset slide to default;
            },
            fnAfterShow: function() {
                // start the timed reveals
                var children = $('div[data-slide="12"]').children();
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
                }, 9000));
                timers.push(setTimeout(function() {
                    app.navEnable();
                    $(children[3]).addClass('shown');
                    shown++;
                }, 12000));
                timers.push(setTimeout(function() {
                    window.mySwiper.slideNext();
                }, 18000));
            },
            fnSlideClick: function() {
                var children = $('div[data-slide="12"]').children();
                if (timers.length > 0) {
                    for (var i = 0; i < timers.length; i++) {
                         window.clearTimeout(timers[i]);
                    }
                    timers = [];
                }
                if (shown <= children.length) {
                    $(children[shown]).addClass('shown');
                    if (shown === children.length-1) {
                        app.navEnable();
                    }
                    shown++;
                }
            }
        },
        { // 13
            fnBeforeShow: function() {
                app.navDisable();
                $('div[data-slide="13"]').on('click', timeline[13].fnSlideClick);
            },
            fnAfterLeave: function() {
                $('div[data-slide="13"]').off('click', timeline[13].fnSlideClick);
                $('div[data-slide="13"] > *').removeClass('shown');
             // used to reset slide to default;
            },
            fnAfterShow: function() {
                // start the timed reveals
                var children = $('div[data-slide="13"]').children();
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
                timers.push(setTimeout(function() {
                    window.mySwiper.slideNext();
                }, 10000));

            },
            fnSlideClick: function() {
                var children = $('div[data-slide="13"]').children();
                if (timers.length > 0) {
                    for (var i = 0; i < timers.length; i++) {
                         window.clearTimeout(timers[i]);
                    }
                    timers = [];
                }
                if (shown <= children.length) {
                    $(children[shown]).addClass('shown');
                    if (shown === children.length-1) {
                        app.navEnable();
                    }
                    shown++;
                }
            }
        },
        { // 14
        },
        { // 15
        },
        { // 16
        },
        { // 17
            fnBeforeShow: function() {
                app.navDisable();
            },
            fnAfterLeave: function() {
                app.navEnable();
             // used to reset slide to default;
            }
        },
        { // 18
        },
        { // 19
        },
        { // 20
        },
        { // 21
        },
        { // 22
        },
        { // 23
        },
        { // 24
        },
    ];

    function gotFS(fileSystem) {
        fileSystem.root.getFile(recordingSrc, {
            create: true,
            exclusive: false
        }, gotFileEntry, app.error);
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

    app.uploadSuccess = function(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    };

    app.init = function() {
        this.bindEvents();
        // Swiper
        window.mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: false,
            speed:900,
            // Navigation arrows
            nextButton: '.button-next',
            prevButton: '.button-prev',
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
        $('.upload').on('click', app.uploadRecording);
        $('.fake-record').on('click', function() {
            window.mySwiper.slideNext();
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
            app.navEnable();
            $('.confirm-panel').removeClass('show');
            setTimeout(function() {
                window.mySwiper.slideNext();
            }, 700);

        });

        $('.try-again').on('click', function() {

        });

        $('.play').on('click', function() {
            app.playAudio();
        });
        $('.start').on('click', function() {
            app.navEnable();
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
        alert('uploadRecording');
        window.requestFileSystem(LocalFileSystem.TEMPORARY, 0, gotFS, app.error);
    };

    return app;
};
