(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by zhengliuyang on 2018/7/25.
 */
var icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDctMjdUMTQ6MTg6MjkrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA3LTI3VDE1OjU1OjE1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA3LTI3VDE1OjU1OjE1KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0ZmExNzNjLTk2ODItNGExMC1hZDI3LWY1YTMxZTIxY2QxMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NGZhMTczYy05NjgyLTRhMTAtYWQyNy1mNWEzMWUyMWNkMTAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NGZhMTczYy05NjgyLTRhMTAtYWQyNy1mNWEzMWUyMWNkMTAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU0ZmExNzNjLTk2ODItNGExMC1hZDI3LWY1YTMxZTIxY2QxMCIgc3RFdnQ6d2hlbj0iMjAxOC0wNy0yN1QxNDoxODoyOSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VH9ceAAACsJJREFUaIG9mXlsHNUdxz9vrp29PWt77diJCbhJEOEOhCpFAqmHAgLSRhyhCCoCIkBLWyiHqAqI0qIUBG05SjkK5aja9FB60AIqpQcBQqABEihxnBA7iR1f6/Wu95ydmdc/xmuMIXZib/iudvX2zcx73+97v/f7/eY9IaWkihuWf4caQgMeB+qAS4CRWjV89/P3jJeVWjU6CV8FUsDFwNlj5W8cio5qLWAp0AH8CohN6ud+oBdYXssOayXAAtYBrwMLAaSUaIqGpmpMMNM5wHPAi8C8WnRcCwHfB4aB88EnrgiFsBmmVClRsAuEzRCqok4U8nlgN/AQEJhN57MRcC4wANwCIJEIBKFACEUR9KR72d6/g46+HexO7UVKSTgQRgiBZFzIlWNtXPZpCjgKeAf4HdBYrQzqJoauM5AdYNu+TvYO9xLUg0QCEXrTfWzbt519mX3oqkZIDyIQ1UdjwGPALuDUQykgAfwaeA84tlppaAZB3SSVS7Ott5Pu1F6khETYQlM1NKFSH0mgCIU9w7107OukPzuIoRsE9I9Yz3zgZeCFsXJNBdyE7wpXVSt0VSdomORKOTr6O9k11I3tVKgLxgkZQTzp+TcK8KRH0AhiheJUPJfuoT107OskU8hgGiaGZkzs60v4s/GjAyGmTXN9Bf70NoBv57qqY6g6o6UcfUP9jBSyKEIQD8bQVZ18IU9qIEWpWMIdE6EIQTAYJNGQIBqJEDKC5EsFdg52ERuN0BxvIhaM4bgOFbdS7ftG4Jqx7y8OVkA78BSwDMZcoqoR0AwKdoGedC+p3DBIQTQQQdd1Kk6F7du2E4qHOP7045m/8DDqEnUIIJvJ0dXZzZbX3qFndw+HtR9GPBzFrjiMlnJkizupj1gkY41EAmFsp0LFrSCECI4N4HX40fy/0wkIAw8CX6sSVxUVM2BSrpTZPbyHodFhXM8jHAijqxpCEeSyObq6ujn9K6dx2Q2rOea4Y+DDRToGyfaO7Tx93zM8++SztLS0YDVYxJQorusynB9hOD9CfcSiOd407oZd10UIcRTwJvAsvsca2J+AfwNLquRDgRCe9OgZ7iWVH6ZolwgHwgQ0A8/zkEgKowX27N3DVbevYc31VwIwmstglysfaVg3NBYuWsQdD97B4pMWc+8N9yKEIGpFUYRCPBjDdioMZIfIFLM0ROppjjdhaiZ5O1/1WmcB/8L3hJ8oIF4tGJpBT7qHrqFuVKERDcZIhC08z8P1XACEFHTt6uKKW69gzfVXUijmyefyCCFQFAXDNBAIyuUydrnCYGkA0zRZdekqkLD2mrUsjCxEURVcz0VTVOrDCWy3wt50Lx8MfkBbYh6tViuO61TjhzmR8GQv5Ez8IxBoiuYHn2oUHbMMVVHZ3bWHZcuXcfVNV1OyS+RzeT9gRSIkEvUgJa7nkrDqicZiSCTlUplcfpRVq1dxxkXL6fqgC0X5kIZE4nkunuehKTpCKBMD38ewXy9kOzYtdS20WC30ZfoYyA6RzqcJBUIEtACe62G7ZS68yvesoyMZJNCYbGR0NMfP7nyQd17dgpSSI09YxBU3rSHZ2MTAQD/FQpFIOMqqNavY8Nwr2CUbI2BgOzaFUgFN1Wmrn0tL3RwUoUw0oQMXIISgYBdQFJU58WYS4QSDuSGGRlMU8yWKIwVOOnUJJ37uRHKFURRVJRqLkk6nufbC69j4wkZaWlpQhMKml95gy+tbeWD9A1j1FtmRLCOZNMcuOY5Tv3gqL/91A9FkDFVRaIo3kYw1YOomJbuE67kI8cnkYZpA5puOR75cAGBuXQuLmhfQGGtgIDVI21HzCQcjlItlAAw9wLpH1vHKC6+y5JQlNM9tJtma5OTPnsTmDW/xxI+fQFf9oOVUHASCtiPbSGVSNEQsjpyzgHmJVgSCfDmPJ70pyU85A5OFuJ5L3i6gKxqHN7aRbR6huSk5fo+qqkg8dry7g2SiEenJ8WgspWRuSysdb3WQK4765lK2AbCsOhbOaeeIxvlU3AoFu4AY+xwIDkjAuBAEjufi2kUiZoRYIDp+zc9GFTRdw5PSX+zVdS8Enuuh6xqarmE79vhz4UCYqBmhaJfGM9qDwYzTaddzGB4cHv/vuf5oH730GPrSfUjXj96aqqGg0N3fzbHLjsPUglTsyrhXyw5nqVScj8e9A8RBzcBExOribNvcQWp4iFA0RCFbIF/IccHl57N181bWPbqOZKwJoQh6R3pYceEKVl97KcWSv54M06BoF+h8p5NINDJTGjMTIKUknqijc8t23n75bT6/4gvkvBz5XB7LsrjzoR+y9LST+fv6F3Ech6+feRXnX3I+hmYwNDSEQBCLxNn0n428++pWDp9/xMS3tUMvAAAhseos/vzon1i2fBn1yQZSA4Ok02lCoRDnXnQeKy9aCUgUNPKFvE9eCOJWHIlk/cN/JKgHUTUF13VnRGPGa8DzPJJzkvT+r4ef3/YQCgqJxgYEUC6XSaWGyGayjGZypFJDlIpFAOJWHEML8NjaR+h4ZRut81pnTB5mMwOA67kcvuAINvxmA+WizTfv+haNySZsp0x2JOv7eiFwXZdILELIDOPgcP9t9/GPJ1+kvb0dKSRTZAqHVoCUEkVVaF/Uzpt/eYPv7rqZs1afxeJTFhOOhqmMZaRm0CQ7kmXT5k089+RzdG7soH1BO3pAn9XoQw22VTzPAwUWHrWQ/N4cP7nyXn6w+g5ymRzhWBihCGLROOsfXs8tK7/HwPv9LDr6SDRDmzV5mOUMVCGlpOJUqG+uxwyZFDNFCvkiDWp1fCTS9mg7rI2meU04rjNleweDmm4tVt8TwtEwmqYiPd+4JRLDNFDH6g422k6FmsxAFWIsf5iYv/tZjUJmOEPPBz0oQkEIQX1zAtXQxiP4TFFTAZ8EKSUOFeYvns/Sc5aSbE1il2z2de5D2qCoszOCT0VAeiDNGRefyYrLv4yCgoLK3d++i60vbqF5XvOMozB8CgLAH+VyoYxdtBGKIB6rIxgxZ20+8HEBh+rAw3e3gIKCi4NjOwhl9ot5MuHZO+bpIPdTnlkLHxOwEn8DqabwXI9QJESiPkHciqOioRvGTALZDuDCiRWTTWgbcDJwJv4BXdNMSU+EHtDp6+kjl80RDAeRnqS/u59oLDr9wz7ywFXA05Mv7G8R/w1oBm4Hbp0J6SqEIqiLWzxzz9M8/8vnmXvEXJyyg6mbWE0WrjPtLDyEv8H7iTdOt2hvw9+t++1BM5/ckacSFEECMkAkECEUCk1H/nkgCVzNFGvzQLxOFrgAf8/0relulvgv8eMeRvo/gaCBGTIxQya6qU+127YT/wztDGBwuv4Oxm1uBk4EzgMyU93oeR7BYAhN08aI+nulrudORdzBH+3PAC8dKKmZ+P3f4x943DH5gkRihkxG+kbY9NJGVDTqEw3s3LmDzf/cjNVg7c913gfU49v7QWGmkdjBX9z345+enF29oGoqlmWx/qfr6X6vm2gixhsvvEFhqEiytRGn8pFU+hX80/xdM+Qx61RiEDgH37SeAhZ7njeeTr/2h9dwKg6JZIJky0fI78U/RDlgU9kfapU6bAaOxj89yTuOg6brtMxvoW1BG5F4BMdxADzgZvxT+lmTh9rnPo8DEeBuiUTKD7/4pmYCa2vZ4aFK3m4EDgc2Au8DJwCXA5WpHpoJ/g9w8VC7jPb9xwAAAABJRU5ErkJggg==';
var keyIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADFElEQVRoQ+2YS0wTURSG/zNtCe58xBfWKcjSjUtduEKFTogPVupCBY0LH2mrxODOnRoMMwUSE2N8LFBZqkkLARIXJsbEndEVgp0SxKgxriTtdI4pCinSx0zntg1hur3/+e/5/nM7vR3CKv/QKu8fLkCtJ+hOwJ2AwwTcI+QwQMfl7gQcR+jQYG1MoGVwZpPP4KMEswNAM5j8RJxmYJqYphmYIsZw7Ir8zmGgtsuLTkAZnA2wYfQAfJZAvlLuDJ5g8twcCfknSmlFrRcEUKL6EWZ+RqB6u5sx4248Il+wW1eOPi+AEk2EwKSVY7hYw4AWD8sRJx5WalcAKFqinUEvCM5vqtWAWAZwcEBv8BmYBGGdFXorGpN4/0go8NqKthzNMoCgpg8RcLIco0I1DAzHw/JxkZ65XksAhwbmmryZ1JTojZhhUF39ztjFLXOivbN+SwBBTb9KwJ3im/AcmzjvNX1vsjpDSu8jCfcA2laJ5op5xsLyQu9LAIqaGAPRgSJH4ZvhwZ6xy/JsrqZV/bzdQ/QBoA3VhFgBENT0Scr+yhb4mMRnRkKBx/mW26KJ0xLTo9oCqHqaCN5CTXgM7+aX3Q3f86239yV3mBLP1BZAS6SKXReKAQT7Z/xkmsmaAihq4hOIdhVsgtAVC8kP860rUb0TjAc1BQhqiXECtRRugn9mmHePRhq/5Gr+Hh/zfe2/xKreTYTeEo/RrwDOsVT31ptiznjTewHcB2hrNdPP7rXyKdSvN5OJSdGNMHg+5fX4Jy75fxTzVjSdrTz3/9csu0ooqv4EhBNiIbg3Fg5cK+UpBKBN/dIoIf1R1GXOavpZOCEAWaM2TT8sAc9LJWZlncG34+FAjxWtMIB/EBEJ6LOyccGrByP+e32m41Vn07wVH6EACxBqskOC+RREdVYayNUw81D8l3wKN8i0WiscYOFcDs4GYBjXGdxl9U+9ybg1GgmMW218UVcRgEXz1r7kRpJwrJKvVSoKYDfNaurXxpu5aiZqdy93AnYTE613JyA6Ubt+7gTsJiZa705AdKJ2/Vb9BP4AaaooQMIVwOMAAAAASUVORK5CYII=';
var HOST = '';

var Content = function () {
    function Content() {
        _classCallCheck(this, Content);

        this.account;
        this.pass;
        this.accountIcon;
        this.passIcon;
        this.accountRect;
        this.passRect;
        this.dataStorage = [];
        this.getConfig();
    }

    _createClass(Content, [{
        key: 'getConfig',
        value: function getConfig() {
            var _this = this;

            chrome.storage.sync.get(function (data) {
                if (data.hasOwnProperty('apiHost') && data.apiHost) {
                    HOST = data.apiHost;
                    _this.pageDidMount();
                }
            });
        }
    }, {
        key: 'isVisible',
        value: function isVisible(elem) {
            return elem.offsetWidth > 0 && elem.offsetHeight > 0;
        }
    }, {
        key: 'randomString',
        value: function randomString(len) {
            len = len || 32;
            var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
            var maxPos = $chars.length;
            var pwd = '';
            for (var i = 0; i < len; i++) {
                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
        }
    }, {
        key: 'clearFillIcon',
        value: function clearFillIcon() {
            var icons = document.querySelectorAll('.passcan-autofill');
            for (var i = 0; i < icons.length; i++) {
                document.body.removeChild(icons[i]);
            }
            this.account = null;
            this.pass = null;
            this.accountIcon = null;
            this.passIcon = null;
            this.accountRect = null;
            this.passRect = null;
        }
    }, {
        key: 'findInput',
        value: function findInput() {
            var passwordInput = document.querySelector('input[type="password"]');
            var textInputItem = document.querySelectorAll('input[type="text"]');
            var textInput = null;
            for (var i = 0; i < textInputItem.length; i++) {
                if (typeof textInputItem[i].getAttribute('disabled') !== 'string' && typeof textInputItem[i].getAttribute('readonly') !== 'string' && this.isVisible(textInputItem[i])) {
                    textInput = textInputItem[i];
                    break;
                }
            }
            if (passwordInput && typeof passwordInput.getAttribute('disabled') !== 'string' && typeof passwordInput.getAttribute('readonly') !== 'string' && this.isVisible(passwordInput)) {
                if (this.pass != passwordInput) {
                    this.pass = passwordInput;
                    passwordInput.setAttribute('autocomplete', 'off');
                }
                this.addFillIcon(passwordInput, 'pass');
                if (textInput) {
                    if (this.account != textInput) {
                        this.account = textInput;
                        textInput.setAttribute('autocomplete', 'off');
                    }
                    this.addFillIcon(textInput, 'account');
                }
            } else {
                if (this.accountIcon || this.passIcon) {
                    this.clearFillIcon();
                }
            }
        }
    }, {
        key: 'addFillIcon',
        value: function addFillIcon(el, type) {
            var iconWidth = 16;
            var iconHeight = 16;
            var elRect = el.getBoundingClientRect();
            var curIcon = void 0,
                curRect = void 0;
            if (type == 'pass') {
                curIcon = this.passIcon;
                curRect = this.passRect;
            } else if (type == 'account') {
                curIcon = this.accountIcon;
                curRect = this.accountRect;
            }
            if (curIcon) {
                if (elRect.left == curRect.left && elRect.width == curRect.width && elRect.top == curRect.top && elRect.height == curRect.height) {
                    return;
                }
                console.log('in change Icon');
                curIcon.style.left = elRect.left + (elRect.width - iconWidth - elRect.width * 0.02) + 'px';
                curIcon.style.top = elRect.top + (elRect.height - iconHeight) / 2 + 'px';
                if (type == 'pass') {
                    this.passRect = elRect;
                } else if (type == 'account') {
                    this.accountRect = elRect;
                }
                return;
            }
            console.log('in add Icon');
            var img = document.createElement('IMG');
            var uniqueId = 'passcanFill-' + this.randomString(8);
            img.src = icon;
            img.className = 'passcan-autofill';
            img.id = uniqueId;
            img.style.left = elRect.left + (elRect.width - iconWidth - elRect.width * 0.02) + 'px';
            img.style.top = elRect.top + (elRect.height - iconHeight) / 2 + 'px';
            document.body.appendChild(img);
            var iconEl = document.querySelector('#' + uniqueId);
            this.addIconEvent(iconEl);
            if (type == 'pass') {
                this.passIcon = iconEl;
                this.passRect = elRect;
            } else if (type == 'account') {
                this.accountIcon = iconEl;
                this.accountRect = elRect;
            }
        }
    }, {
        key: 'getSuggest',
        value: function getSuggest() {
            var promise = new Promise(function (resolve, reject) {
                chrome.runtime.sendMessage({ event: 'getSuggest', host: window.location.origin }, function (response) {
                    // console.log(response);
                    if (response.status == 200) {
                        return resolve(response.data);
                    }
                    reject(response);
                });
            });
            return promise;
        }
    }, {
        key: 'addPassMenu',
        value: function addPassMenu(el, e) {
            var _this2 = this;

            this.dataStorage = [];
            var elRect = el.getBoundingClientRect();
            var div = document.createElement('div');
            div.id = 'passcanDialog';
            div.style.right = window.innerWidth - elRect.left - elRect.width + 'px';
            div.style.top = elRect.top + elRect.height + 10 + 'px';
            div.innerHTML = '';
            document.body.appendChild(div);
            var promise = this.getSuggest();
            promise.then(function (data) {
                _this2.dataStorage = data;
                var str = '';
                data.map(function (d, k) {
                    str += '<div class="row hasRipple" data-key="' + k + '">\n                        <img src="' + keyIcon + '"><span>' + d.uname + '</span>\n                        <span class="ripple"></span>\n                    </div>';
                });
                if (!str) {
                    str = '<div class="tip">\u627E\u4E0D\u5230\u6B64\u7F51\u5740\u7684\u7F51\u7AD9\u3002 \u60A8\u53EF\u4EE5\u767B\u5F55\u6B64\u7F51\u7AD9\u4EE5\u4FDD\u5B58\u51ED\u636E</div>';
                }
                document.getElementById('passcanDialog').innerHTML = str;
            }).catch(function (data) {
                if (data.status == 501) {
                    document.getElementById('passcanDialog').innerHTML = '<div class="tip">\u5C1A\u672A\u767B\u5F55\u3002 \u60A8\u53EF\u4EE5\u767B\u5F55\u540E\u83B7\u53D6\u6B64\u7F51\u7AD9\u5DF2\u4FDD\u5B58\u7684\u51ED\u636E</div><button class="lg-btn">\u767B \u5F55</button>';
                } else {
                    document.getElementById('passcanDialog').innerHTML = '<div class="tip">\u627E\u4E0D\u5230\u6B64\u7F51\u5740\u7684\u7F51\u7AD9\u3002 \u60A8\u53EF\u4EE5\u767B\u5F55\u6B64\u7F51\u7AD9\u4EE5\u4FDD\u5B58\u51ED\u636E</div>';
                }
            });
        }
    }, {
        key: 'login',
        value: function login() {
            window.open(HOST + '/api/login', '_blank', 'width=700, height=600, titlebar=0, menubar=0,directories=0');
        }
    }, {
        key: 'addIconEvent',
        value: function addIconEvent(el) {
            var _this3 = this;

            el.addEventListener('click', function (e) {
                if (!document.querySelector('#passcanDialog')) {
                    setTimeout(function () {
                        _this3.addPassMenu(el, e);
                    });
                }
                e.preventDefault();
            });
        }
    }, {
        key: 'hasParent',
        value: function hasParent(el, id) {
            if (!el) return false;
            if (el.nodeType == 9) {
                return false;
            }
            var elId = el.id;
            var elNodeName = el.nodeName;
            if (elNodeName == 'BODY') {
                return false;
            } else {
                if (!elId || elId !== id) {
                    return this.hasParent(el.parentNode, id);
                } else if (elId == id) {
                    return true;
                }
            }
        }
    }, {
        key: 'hasChild',
        value: function hasChild(parentNode, childNode) {
            if (parentNode.contains) {
                return parentNode != childNode && parentNode.contains(childNode);
            } else {
                return !!(parentNode.compareDocumentPosition(childNode) & 16);
            }
        }
    }, {
        key: 'closeDialog',
        value: function closeDialog() {
            var dialog = document.querySelector('#passcanDialog');
            document.body.removeChild(dialog);
        }
    }, {
        key: 'fireOnchange',
        value: function fireOnchange(e) {
            try {
                var ev = e.ownerDocument.createEvent("Events");
                if (ev.initEvent("change", true, true), e.dispatchEvent(ev), (ev = e.ownerDocument.createEvent("Events")).initEvent("input", true, true), e.dispatchEvent(ev), void 0 !== ischrome && ischrome && "function" == typeof e.onkeyup) {
                    n && (ev.keyCode = 8);
                    e.onkeyup(ev);
                }
            } catch (e) {}
        }
    }, {
        key: 'getQuery',
        value: function getQuery() {
            var search = location.search || '';
            search = search.substr(1, search.length - 1);
            var arr = search.split('&');
            var args = {};
            if (arr.length > 0) {
                arr.map(function (data) {
                    var a = data.split('=');
                    args[a[0]] = a[1];
                });
            }
            return args;
        }
    }, {
        key: 'getCookie',
        value: function getCookie() {
            var cookie = document.cookie;
            var arr = cookie.split(';');
            var co = {};
            arr.map(function (d) {
                var a = d.split('=');
                co[a[0]] = a[1];
            });
            return co;
        }
    }, {
        key: 'pageDidMount',
        value: function pageDidMount() {
            var _this4 = this;

            var args = this.getQuery();
            if (args.hasOwnProperty('from') && args.from == 'passcan') {
                var apiToken = args.api_token;
                if (apiToken) {
                    chrome.runtime.sendMessage({ event: 'login', data: apiToken }, function (response) {});
                    window.close();
                }
            } else {
                document.addEventListener('click', function (e) {
                    if (e.target.className == 'lg-btn') {
                        _this4.login();
                        _this4.closeDialog();
                    }
                    if (_this4.hasParent(e.target, 'passcanDialog')) {
                        if (e.target.className.indexOf('hasRipple') > -1 || (e.target.parentNode.className || '').indexOf('hasRipple') > -1) {
                            var ele = e.target;
                            if (e.target.parentNode.className.indexOf('hasRipple') > -1) {
                                ele = e.target.parentNode;
                            }
                            var posX = ele.getBoundingClientRect().left,
                                posY = ele.getBoundingClientRect().top,
                                buttonWidth = ele.getBoundingClientRect().width,
                                buttonHeight = ele.getBoundingClientRect().height;
                            if (buttonWidth >= buttonHeight) {
                                buttonHeight = buttonWidth;
                            } else {
                                buttonWidth = buttonHeight;
                            }
                            var x = e.clientX - posX - buttonWidth / 2;
                            var y = e.clientY - posY - buttonHeight / 2;
                            ele.childNodes[4].style.cssText = 'width: ' + buttonWidth + 'px;height: ' + buttonHeight + 'px;top: ' + y + 'px;left: ' + x + 'px';
                            ele.childNodes[4].className = 'ripple rippleEffect';
                            setTimeout(function () {
                                ele.childNodes[4].className = 'ripple';
                                var key = ele.dataset.key;
                                var userName = _this4.dataStorage[key].uname;
                                var password = _this4.dataStorage[key].pwd;
                                _this4.account.focus();
                                _this4.account.value = userName;
                                _this4.fireOnchange(_this4.account);
                                _this4.pass.focus();
                                _this4.pass.value = password;
                                _this4.fireOnchange(_this4.pass);
                                _this4.closeDialog();
                            }, 250);
                        }
                    } else {
                        if (document.querySelector('#passcanDialog')) {
                            _this4.closeDialog();
                        }
                    }
                });
                var timer = null;
                var observer = new MutationObserver(function (mutations) {
                    mutations.map(function (m) {
                        if (m.type == 'attributes') {
                            if (m.target.getAttribute(m.attributeName) !== m.oldValue) {
                                clearTimeout(timer);
                                timer = setTimeout(function () {
                                    if (document.querySelectorAll('input').length > 0) {
                                        _this4.findInput();
                                    } else {
                                        _this4.clearFillIcon();
                                    }
                                }, 100);
                            }
                        }
                    });
                });
                observer.observe(document.body, {
                    childList: true,
                    attributes: true,
                    characterData: true,
                    subtree: true,
                    attributeOldValue: true
                });
                this.findInput();
                window.addEventListener('resize', function (e) {
                    _this4.findInput();
                });
            }

            chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
                var event = request.event;
                switch (event) {
                    case 'updateAPI':
                        var apiHost = request.apiHost;
                        HOST = apiHost;
                        break;
                }
            });
        }
    }]);

    return Content;
}();

var con = new Content();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZTcmMvY29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBOzs7QUFHQSxJQUFNLE9BQU8sZzhLQUFiO0FBQ0EsSUFBTSxVQUFVLGdvQ0FBaEI7QUFDQSxJQUFJLE9BQU8sRUFBWDs7SUFDTSxPO0FBQ0YsdUJBQWM7QUFBQTs7QUFDVixhQUFLLE9BQUw7QUFDQSxhQUFLLElBQUw7QUFDQSxhQUFLLFdBQUw7QUFDQSxhQUFLLFFBQUw7QUFDQSxhQUFLLFdBQUw7QUFDQSxhQUFLLFFBQUw7QUFDQSxhQUFLLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxhQUFLLFNBQUw7QUFDSDs7OztvQ0FFVztBQUFBOztBQUNSLG1CQUFPLE9BQVAsQ0FBZSxJQUFmLENBQW9CLEdBQXBCLENBQXdCLFVBQUMsSUFBRCxFQUFVO0FBQzlCLG9CQUFHLEtBQUssY0FBTCxDQUFvQixTQUFwQixLQUFrQyxLQUFLLE9BQTFDLEVBQW1EO0FBQy9DLDJCQUFPLEtBQUssT0FBWjtBQUNBLDBCQUFLLFlBQUw7QUFDSDtBQUNKLGFBTEQ7QUFNSDs7O2tDQUVTLEksRUFBTTtBQUNaLG1CQUFPLEtBQUssV0FBTCxHQUFrQixDQUFsQixJQUF1QixLQUFLLFlBQUwsR0FBbUIsQ0FBakQ7QUFDSDs7O3FDQUVZLEcsRUFBSztBQUNkLGtCQUFNLE9BQU8sRUFBYjtBQUNBLGdCQUFJLFNBQVMsa0RBQWI7QUFDQSxnQkFBSSxTQUFTLE9BQU8sTUFBcEI7QUFDQSxnQkFBSSxNQUFNLEVBQVY7QUFDQSxpQkFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEdBQXBCLEVBQXlCLEdBQXpCLEVBQThCO0FBQzFCLHVCQUFPLE9BQU8sTUFBUCxDQUFjLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFnQixNQUEzQixDQUFkLENBQVA7QUFDSDtBQUNELG1CQUFPLEdBQVA7QUFDSDs7O3dDQUVlO0FB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QixFQUFFLGFBQXhCLE1BQTJDLEVBQUUsUUFBakQsRUFBMkQ7QUFDdkQsNkNBQWEsS0FBYjtBQUNBLHdDQUFRLFdBQVcsWUFBTTtBQUNyQix3Q0FBRyxTQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLE1BQW5DLEdBQTRDLENBQS9DLEVBQWtEO0FBQzlDLCtDQUFLLFNBQUw7QUFDSCxxQ0FGRCxNQUVNO0FBQ0YsK0NBQUssYUFBTDtBQUNIO0FBQ0osaUNBTk8sRUFNTCxHQU5LLENBQVI7QUFPSDtBQUNKO0FBQ0oscUJBYkQ7QUFjSCxpQkFmYyxDQUFmO0FBZ0JBLHlCQUFTLE9BQVQsQ0FBaUIsU0FBUyxJQUExQixFQUFnQztBQUM1QiwrQkFBVyxJQURpQjtBQUU1QixnQ0FBWSxJQUZnQjtBQUc1QixtQ0FBZSxJQUhhO0FBSTVCLDZCQUFTLElBSm1CO0FBSzVCLHVDQUFtQjtBQUxTLGlCQUFoQztBQU9BLHFCQUFLLFNBQUw7QUFDQSx1QkFBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFpQyxVQUFDLENBQUQsRUFBTztBQUNwQywyQkFBSyxTQUFMO0FBQ0gsaUJBRkQ7QUFHSDs7QUFFRCxtQkFBTyxPQUFQLENBQWUsU0FBZixDQUF5QixXQUF6QixDQUFxQyxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLFlBQWxCLEVBQW1DO0FBQ3BFLG9CQUFJLFFBQVEsUUFBUSxLQUFwQjtBQUNBLHdCQUFRLEtBQVI7QUFDSSx5QkFBSyxXQUFMO0FBQ0ksNEJBQUksVUFBVSxRQUFRLE9BQXRCO0FBQ0EsK0JBQU8sT0FBUDtBQUNBO0FBSlI7QUFNSCxhQVJEO0FBU0g7Ozs7OztBQUdMLElBQU0sTUFBTSxJQUFJLE9BQUosRUFBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlxuICogQ3JlYXRlZCBieSB6aGVuZ2xpdXlhbmcgb24gMjAxOC83LzI1LlxuICovXG5jb25zdCBpY29uID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBWUFBQUJYQXZtSEFBQUFDWEJJV1hNQUFCWWxBQUFXSlFGSlVpVHdBQUFGSUdsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRnUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE5EQWdOemt1TVRZd05EVXhMQ0F5TURFM0x6QTFMekEyTFRBeE9qQTRPakl4SUNBZ0lDQWdJQ0FpUGlBOGNtUm1PbEpFUmlCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaVBpQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRiRzV6T21SalBTSm9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaV3hsYldWdWRITXZNUzR4THlJZ2VHMXNibk02Y0dodmRHOXphRzl3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzQm9iM1J2YzJodmNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSRmRuUTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpVVjJaVzUwSXlJZ2VHMXdPa055WldGMGIzSlViMjlzUFNKQlpHOWlaU0JRYUc5MGIzTm9iM0FnUTBNZ01qQXhPQ0FvVFdGamFXNTBiM05vS1NJZ2VHMXdPa055WldGMFpVUmhkR1U5SWpJd01UZ3RNRGN0TWpkVU1UUTZNVGc2TWprck1EZzZNREFpSUhodGNEcE5iMlJwWm5sRVlYUmxQU0l5TURFNExUQTNMVEkzVkRFMU9qVTFPakUxS3pBNE9qQXdJaUI0YlhBNlRXVjBZV1JoZEdGRVlYUmxQU0l5TURFNExUQTNMVEkzVkRFMU9qVTFPakUxS3pBNE9qQXdJaUJrWXpwbWIzSnRZWFE5SW1sdFlXZGxMM0J1WnlJZ2NHaHZkRzl6YUc5d09rTnZiRzl5VFc5a1pUMGlNeUlnY0dodmRHOXphRzl3T2tsRFExQnliMlpwYkdVOUluTlNSMElnU1VWRE5qRTVOall0TWk0eElpQjRiWEJOVFRwSmJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qVTBabUV4TnpOakxUazJPREl0TkdFeE1DMWhaREkzTFdZMVlUTXhaVEl4WTJReE1DSWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEbzFOR1poTVRjell5MDVOamd5TFRSaE1UQXRZV1F5TnkxbU5XRXpNV1V5TVdOa01UQWlJSGh0Y0UxTk9rOXlhV2RwYm1Gc1JHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEbzFOR1poTVRjell5MDVOamd5TFRSaE1UQXRZV1F5TnkxbU5XRXpNV1V5TVdOa01UQWlQaUE4ZUcxd1RVMDZTR2x6ZEc5eWVUNGdQSEprWmpwVFpYRStJRHh5WkdZNmJHa2djM1JGZG5RNllXTjBhVzl1UFNKamNtVmhkR1ZrSWlCemRFVjJkRHBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pVMFptRXhOek5qTFRrMk9ESXROR0V4TUMxaFpESTNMV1kxWVRNeFpUSXhZMlF4TUNJZ2MzUkZkblE2ZDJobGJqMGlNakF4T0Mwd055MHlOMVF4TkRveE9Eb3lPU3N3T0Rvd01DSWdjM1JGZG5RNmMyOW1kSGRoY21WQloyVnVkRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01UZ2dLRTFoWTJsdWRHOXphQ2tpTHo0Z1BDOXlaR1k2VTJWeFBpQThMM2h0Y0UxTk9raHBjM1J2Y25rK0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K1ZIOWNlQUFBQ3NKSlJFRlVhSUc5bVhsc0hOVWR4ejl2cnAyOVBXdDc3ZGlKQ2JoSkVPRU9oQ3BGQXFtSEFnTFNSaHloQ0NvQ0lrQkxXeWlIcUFxSTBxSVVCRzA1U2prSzVhamE5RkI2MEFJcXBRY0JRcUFCRWloeG5CQTdpUjFmNi9XdTk1eWRtZGMveG11TUlYWmliL2l1ZHZYMnpjeDczKzk3di9mNy9lWTlJYVdraWh1V2Y0Y2FRZ01lQitxQVM0Q1JXalY4OS9QM2pKZVZXalU2Q1Y4RlVzREZ3TmxqNVc4Y2lvNXFMV0FwMEFIOENvaE42dWQrb0JkWVhzc09heVhBQXRZQnJ3TUxBYVNVYUlxR3BtcE1NTk01d0hQQWk4QzhXblJjQ3dIZkI0YUI4OEVucmdpRnNCbW1WQ2xSc0F1RXpSQ3FvazRVOG5sZ04vQVFFSmhONTdNUmNDNHdBTndDSUpFSUJLRkFDRVVSOUtSNzJkNi9nNDYrSGV4TzdVVktTVGdRUmdpQlpGeklsV050WFBacENqZ0tlQWY0SGRCWXJRenFKb2F1TTVBZFlOdStUdllPOXhMVWcwUUNFWHJUZld6YnQ1MTltWDNvcWtaSUR5SVExVWRqd0dQQUx1RFVReWtnQWZ3YWVBODR0bHBwYUFaQjNTU1ZTN090dDVQdTFGNmtoRVRZUWxNMU5LRlNIMG1nQ0lVOXc3MTA3T3VrUHp1SW9Sc0U5STlZejN6Z1plQ0ZzWEpOQmR5RTd3cFhWU3QwVlNkb21PUktPVHI2TzlrMTFJM3RWS2dMeGdrWlFUenArVGNLOEtSSDBBaGloZUpVUEpmdW9UMTA3T3NrVThoZ0dpYUdaa3pzNjB2NHMvR2pBeUdtVFhOOUJmNzBOb0J2NTdxcVk2ZzZvNlVjZlVQOWpCU3lLRUlRRDhiUVZaMThJVTlxSUVXcFdNSWRFNkVJUVRBWUpOR1FJQnFKRURLQzVFc0ZkZzUyRVJ1TjBCeHZJaGFNNGJnT0ZiZFM3ZnRHNEpxeDd5OE9Wa0E3OEJTd0RNWmNvcW9SMEF3S2RvR2VkQytwM0RCSVFUUVFRZGQxS2s2RjdkdTJFNHFIT1A3MDQ1bS84RERxRW5VSUlKdkowZFhaelpiWDNxRm5kdytIdFI5R1BCekZyamlNbG5Ka2l6dXBqMWdrWTQxRUFtRnNwMExGclNDRUNJNE40SFg0MGZ5LzB3a0lBdzhDWDZzU1Z4VVZNMkJTcnBUWlBieUhvZEZoWE04akhBaWpxeHBDRWVTeU9icTZ1am45SzZkeDJRMnJPZWE0WStERFJUb0d5ZmFPN1R4OTN6TTgrK1N6dExTMFlEVll4SlFvcnVzeW5COWhPRDlDZmNTaU9kNDA3b1pkMTBVSWNSVHdKdkFzdnNjYTJKK0Fmd05McXVSRGdSQ2U5T2daN2lXVkg2Wm9sd2dId2dRMEE4L3prRWdLb3dYMjdOM0RWYmV2WWMzMVZ3SXdtc3RnbHlzZmFWZzNOQll1V3NRZEQ5N0I0cE1XYys4Tjl5S0VJR3BGVVlSQ1BCakRkaW9NWklmSUZMTTBST3BwampkaGFpWjVPMS8xV21jQi84TDNoSjhvSUY0dEdKcEJUN3FIcnFGdVZLRVJEY1pJaEMwOHo4UDFYQUNFRkhUdDZ1S0tXNjlnemZWWFVpam15ZWZ5Q0NGUUZBWEROQkFJeXVVeWRybkNZR2tBMHpSWmRla3FrTEQybXJVc2pDeEVVUlZjejBWVFZPckRDV3kzd3Q1MEx4OE1ma0JiWWg2dFZpdU82MVRqaHptUjhHUXY1RXo4SXhCb2l1WUhuMm9VSGJNTVZWSFozYldIWmN1WGNmVk5WMU95UytSemVUOWdSU0lrRXZVZ0phN25rckRxaWNaaVNDVGxVcGxjZnBSVnExZHh4a1hMNmZxZ0MwWDVrSVpFNG5rdW51ZWhLVHBDS0JNRDM4ZXdYeTlrT3pZdGRTMjBXQzMwWmZvWXlBNlJ6cWNKQlVJRXRBQ2U2Mkc3WlM2OHl2ZXNveU1aSk5DWWJHUjBOTWZQN255UWQxN2RncFNTSTA5WXhCVTNyU0haMk1UQVFEL0ZRcEZJT01xcU5hdlk4TndyMkNVYkkyQmdPemFGVWdGTjFXbXJuMHRMM1J3VW9VdzBvUU1YSUlTZ1lCZFFGSlU1OFdZUzRRU0R1U0dHUmxNVTh5V0tJd1ZPT25VSkozN3VSSEtGVVJSVkpScUxrazZudWZiQzY5ajR3a1phV2xwUWhNS21sOTVneSt0YmVXRDlBMWoxRnRtUkxDT1pOTWN1T1k1VHYzZ3FMLzkxQTlGa0RGVlJhSW8za1l3MVlPb21KYnVFNjdrSThjbmtZWnBBNXB1T1I3NWNBR0J1WFF1TG1oZlFHR3RnSURWSTIxSHpDUWNqbEl0bEFBdzl3THBIMXZIS0M2K3k1SlFsTk05dEp0bWE1T1RQbnNUbURXL3h4SStmUUZmOW9PVlVIQVNDdGlQYlNHVlNORVFzanB5emdIbUpWZ1NDZkRtUEo3MHB5VTg1QTVPRnVKNUwzaTZnS3hxSE43YVJiUjZodVNrNWZvK3Fxa2c4ZHJ5N2cyU2lFZW5KOFdnc3BXUnVTeXNkYjNXUUs0NzY1bEsyQWJDc09oYk9hZWVJeHZsVTNBb0Z1NEFZK3h3SURrakF1QkFFanVmaTJrVWlab1JZSURwK3pjOUdGVFJkdzVQU1grelZkUzhFbnV1aDZ4cWFybUU3OXZoejRVQ1lxQm1oYUpmR005cUR3WXpUYWRkekdCNGNIdi92dWY1b0g3MzBHUHJTZlVqWGo5NmFxcUdnME4zZnpiSExqc1BVZ2xUc3lyaFh5dzVucVZTY2o4ZTlBOFJCemNCRXhPcmliTnZjUVdwNGlGQTBSQ0ZiSUYvSWNjSGw1N04xODFiV1BicU9aS3dKb1FoNlIzcFljZUVLVmw5N0tjV1N2NTRNMDZCb0YraDhwNU5JTkRKVEdqTVRJS1VrbnFpamM4dDIzbjc1YlQ2LzRndmt2Qno1WEI3THNyanpvUit5OUxTVCtmdjZGM0VjaDYrZmVSWG5YM0kraG1Zd05EU0VRQkNMeE5uMG40MjgrK3BXRHA5L3hNUzN0VU12QUFBaHNlb3MvdnpvbjFpMmZCbjF5UVpTQTRPazAybENvUkRuWG5RZUt5OWFDVWdVTlBLRnZFOWVDT0pXSElsay9jTi9KS2dIVVRVRjEzVm5SR1BHYThEelBKSnprdlQrcjRlZjMvWVFDZ3FKeGdZRVVDNlhTYVdHeUdheWpHWnlwRkpEbElwRkFPSldIRU1MOE5qYVIraDRaUnV0ODFwblRCNW1Nd09BNjdrY3Z1QUlOdnhtQStXaXpUZnYraGFOeVNac3AweDJKT3Y3ZWlGd1haZElMRUxJRE9QZ2NQOXQ5L0dQSjEra3ZiMGRLU1JUWkFxSFZvQ1VFa1ZWYUYvVXpwdC9lWVB2N3JxWnMxYWZ4ZUpURmhPT2hxbU1aYVJtMENRN2ttWFQ1azA4OStSemRHN3NvSDFCTzNwQW45WG9RdzIyVlR6UEF3VVdIcldRL040Y1A3bnlYbjZ3K2c1eW1SemhXQmloQ0dMUk9Pc2ZYczh0SzcvSHdQdjlMRHI2U0RSRG16VjVtT1VNVkNHbHBPSlVxRyt1eHd5WkZETkZDdmtpRFdwMWZDVFM5bWc3ckkybWVVMDRyak5sZXdlRG1tNHRWdDhUd3RFd21xWWlQZCs0SlJMRE5GREg2ZzQyMms2Rm1zeEFGV0lzZjVpWXYvdFpqVUptT0VQUEJ6MG9Ra0VJUVgxekF0WFF4aVA0VEZGVEFaOEVLU1VPRmVZdm5zL1NjNWFTYkUxaWwyejJkZTVEMnFDb3N6T0NUMFZBZWlETkdSZWZ5WXJMdjR5Q2dvTEszZCsraTYwdmJxRjVYdk9Nb3pCOENnTEFIK1Z5b1l4ZHRCR0tJQjZySXhneFoyMCs4SEVCaCtyQXczZTNnSUtDaTROak93aGw5b3Q1TXVIWk8rYnBJUGRUbmxrTEh4T3dFbjhEcWFid1hJOVFKRVNpUGtIY2lxT2lvUnZHVEFMWkR1RENpUldUVFdnYmNESndKdjRCWGROTVNVK0VIdERwNitramw4MFJEQWVSbnFTL3U1OW9MRHI5d3o3eXdGWEEwNU12N0c4Ui93MW9CbTRIYnAwSjZTcUVJcWlMV3p4eno5TTgvOHZubVh2RVhKeXlnNm1iV0UwV3JqUHRMRHlFdjhIN2lUZE90Mmh2dzkrdCsrMUJNNS9ja2FjU0ZFRUNNa0FrRUNFVUNrMUgvbmtnQ1Z6TkZHdnpRTHhPRnJnQWY4LzByZWx1bHZndjhlTWVSdm8vZ2FDQkdUSXhReWE2cVUrMTI3WVQvd3p0REdCd3V2NE94bTF1Qms0RXpnTXlVOTNvZVI3QllBaE4wOGFJK251bHJ1ZE9SZHpCSCszUEFDOGRLS21aK1AzZjR4OTQzREg1Z2tSaWhreEcra2JZOU5KR1ZEVHFFdzNzM0xtRHpmL2NqTlZnN2M5MTNnZlU0OXY3UVdHbWtkakJYOXozNDUrZW5GMjlvR29xbG1XeC9xZnI2WDZ2bTJnaXhoc3Z2RUZocUVpeXRSR244cEZVK2hYODAveGRNK1F4NjFSaUVEZ0gzN1NlQWhaN25qZWVUci8yaDlkd0tnNkpaSUpreTBmSTc4VS9SRGxnVTlrZmFwVTZiQWFPeGo4OXlUdU9nNmJydE14dm9XMUJHNUY0Qk1keEFEemdadnhUK2xtVGg5cm5QbzhERWVCdWlVVEtENy80cG1ZQ2Eydlo0YUZLM200RURnYzJBdThESndDWEE1V3BIcG9KL2c5dzhWQzdqUGI5eHdBQUFBQkpSVTVFcmtKZ2dnPT0nO1xuY29uc3Qga2V5SWNvbiA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdDQVlBQUFCWEF2bUhBQUFERkVsRVFWUm9RKzJZUzB3VFVSU0cvek50Q2U1OHhCZldLY2pTalV0ZHVFS0ZUb2dQVnVwQ0JZMExIMm1yeE9ET25Sb01Nd1VTRTJOOExGQlpxa2tMQVJJWEpzYkVuZEVWZ3AwU3hLZ3hyaVR0ZEk0cENpblN4MHpudGcxaHVyMy8rZS81L25NN3ZSM0NLdi9RS3U4ZkxrQ3RKK2hPd0oyQXd3VGNJK1F3UU1mbDdnUWNSK2pRWUcxTW9HVndacFBQNEtNRXN3TkFNNWo4Ukp4bVlKcVlwaG1ZSXNadzdJcjh6bUdndHN1TFRrQVpuQTJ3WWZRQWZKWkF2bEx1REo1Zzh0d2NDZmtuU21sRnJSY0VVS0w2RVdaK1JxQjZ1NXN4NDI0OElsK3dXMWVPUGkrQUVrMkV3S1NWWTdoWXc0QVdEOHNSSng1V2FsY0FLRnFpblVFdkNNNXZxdFdBV0Fad2NFQnY4Qm1ZQkdHZEZYb3JHcE40LzBnbzhOcUt0aHpOTW9DZ3BnOFJjTEljbzBJMURBekh3L0p4a1o2NVhrc0Fod2JtbXJ5WjFKVG9qWmhoVUYzOXp0akZMWE9pdmJOK1N3QkJUYjlLd0ozaW0vQWNtemp2TlgxdnNqcERTdThqQ2ZjQTJsYUo1b3A1eHNMeVF1OUxBSXFhR0FQUmdTSkg0WnZod1o2eHkvSnNycVpWL2J6ZFEvUUJvQTNWaEZnQkVOVDBTY3IreWhiNG1NUm5Sa0tCeC9tVzI2S0oweExUbzlvQ3FIcWFDTjVDVFhnTTcrYVgzUTNmODYyMzl5VjNtQkxQMUJaQVM2U0tYUmVLQVFUN1oveGttc21hQWlocTRoT0lkaFZzZ3RBVkM4a1A4NjByVWIwVGpBYzFCUWhxaVhFQ3RSUnVnbjltbUhlUFJocS81R3IrSGgvemZlMi94S3JlVFlUZUVvL1Jyd0RPc1ZUMzFwdGl6bmpUZXdIY0IyaHJOZFBQN3JYeUtkU3ZONU9KU2RHTk1IZys1Zlg0Snk3NWZ4VHpWalNkclR6My85Y3N1MG9vcXY0RWhCTmlJYmczRmc1Y0srVXBCS0JOL2RJb0lmMVIxR1hPYXZwWk9DRUFXYU0yVFQ4c0FjOUxKV1psbmNHMzQrRkFqeFd0TUlCL0VCRUo2TE95Y2NHckJ5UCtlMzJtNDFWbjA3d1ZINkVBQ3hCcXNrT0MrUlJFZFZZYXlOVXc4MUQ4bDN3S044aTBXaXNjWU9GY0RzNEdZQmpYR2R4bDlVKzl5YmcxR2dtTVcyMThVVmNSZ0VYejFyN2tScEp3ckpLdlZTb0tZRGZOYXVyWHhwdTVhaVpxZHk5M0FuWVRFNjEzSnlBNlVidCs3Z1RzSmlaYTcwNUFkS0oyL1ZiOUJQNEFhYW9vUU1JVndPTUFBQUFBU1VWT1JLNUNZSUk9JztcbmxldCBIT1NUID0gJyc7XG5jbGFzcyBDb250ZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY2NvdW50O1xuICAgICAgICB0aGlzLnBhc3M7XG4gICAgICAgIHRoaXMuYWNjb3VudEljb247XG4gICAgICAgIHRoaXMucGFzc0ljb247XG4gICAgICAgIHRoaXMuYWNjb3VudFJlY3Q7XG4gICAgICAgIHRoaXMucGFzc1JlY3Q7XG4gICAgICAgIHRoaXMuZGF0YVN0b3JhZ2UgPSBbXTtcbiAgICAgICAgdGhpcy5nZXRDb25maWcoKTtcbiAgICB9XG5cbiAgICBnZXRDb25maWcoKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KCdhcGlIb3N0JykgJiYgZGF0YS5hcGlIb3N0KSB7XG4gICAgICAgICAgICAgICAgSE9TVCA9IGRhdGEuYXBpSG9zdDtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEaWRNb3VudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlzVmlzaWJsZShlbGVtKSB7XG4gICAgICAgIHJldHVybiBlbGVtLm9mZnNldFdpZHRoPiAwICYmIGVsZW0ub2Zmc2V0SGVpZ2h0PiAwO1xuICAgIH1cblxuICAgIHJhbmRvbVN0cmluZyhsZW4pIHtcbiAgICAgICAgbGVuID0gbGVuIHx8IDMyO1xuICAgICAgICBsZXQgJGNoYXJzID0gJ0FCQ0RFRkdISktNTlBRUlNUV1hZWmFiY2RlZmhpamttbnByc3R3eHl6MjM0NTY3OCc7XG4gICAgICAgIGxldCBtYXhQb3MgPSAkY2hhcnMubGVuZ3RoO1xuICAgICAgICBsZXQgcHdkID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHB3ZCArPSAkY2hhcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heFBvcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwd2Q7XG4gICAgfVxuXG4gICAgY2xlYXJGaWxsSWNvbigpIHtcbiAgICAgICAgbGV0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhc3NjYW4tYXV0b2ZpbGwnKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGljb25zLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpY29uc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY2NvdW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXNzID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY2NvdW50SWNvbiA9IG51bGw7XG4gICAgICAgIHRoaXMucGFzc0ljb24gPSBudWxsO1xuICAgICAgICB0aGlzLmFjY291bnRSZWN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXNzUmVjdCA9IG51bGw7XG4gICAgfVxuXG4gICAgZmluZElucHV0KCkge1xuICAgICAgICBsZXQgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJwYXNzd29yZFwiXScpO1xuICAgICAgICBsZXQgdGV4dElucHV0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyk7XG4gICAgICAgIGxldCB0ZXh0SW5wdXQgPSBudWxsO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGV4dElucHV0SXRlbS5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0ZXh0SW5wdXRJdGVtW2ldLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHRleHRJbnB1dEl0ZW1baV0uZ2V0QXR0cmlidXRlKCdyZWFkb25seScpICE9PSAnc3RyaW5nJyAmJiB0aGlzLmlzVmlzaWJsZSh0ZXh0SW5wdXRJdGVtW2ldKSkge1xuICAgICAgICAgICAgICAgIHRleHRJbnB1dCA9IHRleHRJbnB1dEl0ZW1baV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYocGFzc3dvcmRJbnB1dCAmJiB0eXBlb2YgcGFzc3dvcmRJbnB1dC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwYXNzd29yZElucHV0LmdldEF0dHJpYnV0ZSgncmVhZG9ubHknKSAhPT0gJ3N0cmluZycgJiYgdGhpcy5pc1Zpc2libGUocGFzc3dvcmRJbnB1dCkpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucGFzcyAhPSBwYXNzd29yZElucHV0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzID0gcGFzc3dvcmRJbnB1dDtcbiAgICAgICAgICAgICAgICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZGRGaWxsSWNvbihwYXNzd29yZElucHV0LCAncGFzcycpO1xuICAgICAgICAgICAgaWYodGV4dElucHV0KSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5hY2NvdW50ICE9IHRleHRJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQgPSB0ZXh0SW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRGaWxsSWNvbih0ZXh0SW5wdXQsICdhY2NvdW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGlmKHRoaXMuYWNjb3VudEljb24gfHwgdGhpcy5wYXNzSWNvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGaWxsSWNvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkRmlsbEljb24oZWwsIHR5cGUpIHtcbiAgICAgICAgbGV0IGljb25XaWR0aCA9IDE2O1xuICAgICAgICBsZXQgaWNvbkhlaWdodCA9IDE2O1xuICAgICAgICBsZXQgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBjdXJJY29uLGN1clJlY3Q7XG4gICAgICAgIGlmKHR5cGUgPT0gJ3Bhc3MnKSB7XG4gICAgICAgICAgICBjdXJJY29uID0gdGhpcy5wYXNzSWNvbjtcbiAgICAgICAgICAgIGN1clJlY3QgPSB0aGlzLnBhc3NSZWN0O1xuICAgICAgICB9ZWxzZSBpZih0eXBlID09ICdhY2NvdW50Jykge1xuICAgICAgICAgICAgY3VySWNvbiA9IHRoaXMuYWNjb3VudEljb247XG4gICAgICAgICAgICBjdXJSZWN0ID0gdGhpcy5hY2NvdW50UmVjdDtcbiAgICAgICAgfVxuICAgICAgICBpZihjdXJJY29uKSB7XG4gICAgICAgICAgICBpZihlbFJlY3QubGVmdCA9PSBjdXJSZWN0LmxlZnQgJiYgZWxSZWN0LndpZHRoID09IGN1clJlY3Qud2lkdGggJiYgZWxSZWN0LnRvcCA9PSBjdXJSZWN0LnRvcCAmJiBlbFJlY3QuaGVpZ2h0ID09IGN1clJlY3QuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luIGNoYW5nZSBJY29uJyk7XG4gICAgICAgICAgICBjdXJJY29uLnN0eWxlLmxlZnQgPSBgJHtlbFJlY3QubGVmdCArIChlbFJlY3Qud2lkdGggLSBpY29uV2lkdGggLSBlbFJlY3Qud2lkdGggKiAwLjAyKX1weGA7XG4gICAgICAgICAgICBjdXJJY29uLnN0eWxlLnRvcCA9IGAke2VsUmVjdC50b3AgKyAoZWxSZWN0LmhlaWdodCAtIGljb25IZWlnaHQpIC8gMn1weGA7XG4gICAgICAgICAgICBpZih0eXBlID09ICdwYXNzJykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFzc1JlY3QgPSBlbFJlY3Q7XG4gICAgICAgICAgICB9ZWxzZSBpZih0eXBlID09ICdhY2NvdW50Jyl7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50UmVjdCA9IGVsUmVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnaW4gYWRkIEljb24nKTtcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpO1xuICAgICAgICBsZXQgdW5pcXVlSWQgPSBgcGFzc2NhbkZpbGwtJHt0aGlzLnJhbmRvbVN0cmluZyg4KX1gO1xuICAgICAgICBpbWcuc3JjID0gaWNvbjtcbiAgICAgICAgaW1nLmNsYXNzTmFtZSA9ICdwYXNzY2FuLWF1dG9maWxsJztcbiAgICAgICAgaW1nLmlkID0gdW5pcXVlSWQ7XG4gICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gYCR7ZWxSZWN0LmxlZnQgKyAoZWxSZWN0LndpZHRoIC0gaWNvbldpZHRoIC0gZWxSZWN0LndpZHRoICogMC4wMil9cHhgO1xuICAgICAgICBpbWcuc3R5bGUudG9wID0gYCR7ZWxSZWN0LnRvcCArIChlbFJlY3QuaGVpZ2h0IC0gaWNvbkhlaWdodCkgLyAyfXB4YDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICBsZXQgaWNvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dW5pcXVlSWR9YCk7XG4gICAgICAgIHRoaXMuYWRkSWNvbkV2ZW50KGljb25FbCk7XG4gICAgICAgIGlmKHR5cGUgPT0gJ3Bhc3MnKSB7XG4gICAgICAgICAgICB0aGlzLnBhc3NJY29uID0gaWNvbkVsO1xuICAgICAgICAgICAgdGhpcy5wYXNzUmVjdCA9IGVsUmVjdDtcbiAgICAgICAgfWVsc2UgaWYodHlwZSA9PSAnYWNjb3VudCcpe1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50SWNvbiA9IGljb25FbDtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFJlY3QgPSBlbFJlY3Q7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTdWdnZXN0KCkge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtldmVudDogJ2dldFN1Z2dlc3QnLCBob3N0OiB3aW5kb3cubG9jYXRpb24ub3JpZ2lufSwocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgYWRkUGFzc01lbnUoZWwsIGUpIHtcbiAgICAgICAgdGhpcy5kYXRhU3RvcmFnZSA9IFtdO1xuICAgICAgICBsZXQgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlkID0gJ3Bhc3NjYW5EaWFsb2cnO1xuICAgICAgICBkaXYuc3R5bGUucmlnaHQgPSBgJHt3aW5kb3cuaW5uZXJXaWR0aCAtIGVsUmVjdC5sZWZ0IC0gZWxSZWN0LndpZHRofXB4YDtcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGAke2VsUmVjdC50b3AgKyBlbFJlY3QuaGVpZ2h0ICsgMTB9cHhgO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYGA7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLmdldFN1Z2dlc3QoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTdG9yYWdlID0gZGF0YTtcbiAgICAgICAgICAgIGxldCBzdHIgPSBgYDtcbiAgICAgICAgICAgIGRhdGEubWFwKChkLCBrKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RyICs9IGA8ZGl2IGNsYXNzPVwicm93IGhhc1JpcHBsZVwiIGRhdGEta2V5PVwiJHtrfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2tleUljb259XCI+PHNwYW4+JHtkLnVuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmlwcGxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmKCFzdHIpIHtcbiAgICAgICAgICAgICAgICBzdHIgPSBgPGRpdiBjbGFzcz1cInRpcFwiPuaJvuS4jeWIsOatpOe9keWdgOeahOe9keermeOAgiDmgqjlj6/ku6XnmbvlvZXmraTnvZHnq5nku6Xkv53lrZjlh63mja48L2Rpdj5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3NjYW5EaWFsb2cnKS5pbm5lckhUTUwgPSBzdHI7XG4gICAgICAgIH0pLmNhdGNoKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSA1MDEpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc2NhbkRpYWxvZycpLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidGlwXCI+5bCa5pyq55m75b2V44CCIOaCqOWPr+S7peeZu+W9leWQjuiOt+WPluatpOe9keermeW3suS/neWtmOeahOWHreaNrjwvZGl2PjxidXR0b24gY2xhc3M9XCJsZy1idG5cIj7nmbsg5b2VPC9idXR0b24+YDtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc2NhbkRpYWxvZycpLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidGlwXCI+5om+5LiN5Yiw5q2k572R5Z2A55qE572R56uZ44CCIOaCqOWPr+S7peeZu+W9leatpOe9keermeS7peS/neWtmOWHreaNrjwvZGl2PmA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKGAke0hPU1R9L2FwaS9sb2dpbmAsICdfYmxhbmsnLCAnd2lkdGg9NzAwLCBoZWlnaHQ9NjAwLCB0aXRsZWJhcj0wLCBtZW51YmFyPTAsZGlyZWN0b3JpZXM9MCcpO1xuICAgIH1cblxuICAgIGFkZEljb25FdmVudChlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZighZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3NjYW5EaWFsb2cnKSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFBhc3NNZW51KGVsLCBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYXNQYXJlbnQoZWwsIGlkKSB7XG4gICAgICAgIGlmKCFlbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZihlbC5ub2RlVHlwZSA9PSA5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVsSWQgPSBlbC5pZDtcbiAgICAgICAgbGV0IGVsTm9kZU5hbWUgPSBlbC5ub2RlTmFtZTtcbiAgICAgICAgaWYoZWxOb2RlTmFtZSA9PSAnQk9EWScpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgaWYoIWVsSWQgfHwgZWxJZCAhPT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYXNQYXJlbnQoZWwucGFyZW50Tm9kZSwgaWQpO1xuICAgICAgICAgICAgfWVsc2UgaWYoZWxJZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzQ2hpbGQocGFyZW50Tm9kZSwgY2hpbGROb2RlKSB7XG4gICAgICAgIGlmIChwYXJlbnROb2RlLmNvbnRhaW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Tm9kZSAhPSBjaGlsZE5vZGUgJiYgcGFyZW50Tm9kZS5jb250YWlucyhjaGlsZE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICEhKHBhcmVudE5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oY2hpbGROb2RlKSAmIDE2KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlRGlhbG9nKCkge1xuICAgICAgICBsZXQgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3NjYW5EaWFsb2cnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaWFsb2cpO1xuICAgIH1cblxuICAgIGZpcmVPbmNoYW5nZShlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgZXYgPSBlLm93bmVyRG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudHNcIik7XG4gICAgICAgICAgICBpZiAoZXYuaW5pdEV2ZW50KFwiY2hhbmdlXCIsIHRydWUsIHRydWUpLCBlLmRpc3BhdGNoRXZlbnQoZXYpLCAoZXYgPSBlLm93bmVyRG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudHNcIikpLmluaXRFdmVudChcImlucHV0XCIsIHRydWUsIHRydWUpLCBlLmRpc3BhdGNoRXZlbnQoZXYpLCB2b2lkIDAgIT09IGlzY2hyb21lICYmIGlzY2hyb21lICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZS5vbmtleXVwKSB7XG4gICAgICAgICAgICAgICAgbiAmJiAoZXYua2V5Q29kZSA9IDgpO1xuICAgICAgICAgICAgICAgIGUub25rZXl1cChldilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UXVlcnkoKSB7XG4gICAgICAgIGxldCBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2ggfHwgJyc7XG4gICAgICAgIHNlYXJjaCA9IHNlYXJjaC5zdWJzdHIoMSwgc2VhcmNoLmxlbmd0aCAtIDEpO1xuICAgICAgICBsZXQgYXJyID0gc2VhcmNoLnNwbGl0KCcmJyk7XG4gICAgICAgIGxldCBhcmdzID0ge307XG4gICAgICAgIGlmKGFyci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhcnIubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGEgPSBkYXRhLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgYXJnc1thWzBdXSA9IGFbMV07XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cblxuICAgIGdldENvb2tpZSgpIHtcbiAgICAgICAgbGV0IGNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZTtcbiAgICAgICAgbGV0IGFyciA9IGNvb2tpZS5zcGxpdCgnOycpO1xuICAgICAgICBsZXQgY28gPSB7fTtcbiAgICAgICAgYXJyLm1hcCgoZCkgPT4ge1xuICAgICAgICAgICAgbGV0IGEgPSBkLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICBjb1thWzBdXSA9IGFbMV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY287XG4gICAgfVxuXG4gICAgcGFnZURpZE1vdW50KCkge1xuICAgICAgICBsZXQgYXJncyA9IHRoaXMuZ2V0UXVlcnkoKTtcbiAgICAgICAgaWYoYXJncy5oYXNPd25Qcm9wZXJ0eSgnZnJvbScpICYmIGFyZ3MuZnJvbSA9PSAncGFzc2NhbicpIHtcbiAgICAgICAgICAgIGxldCBhcGlUb2tlbiA9IGFyZ3MuYXBpX3Rva2VuO1xuICAgICAgICAgICAgaWYoYXBpVG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7ZXZlbnQ6ICdsb2dpbicsIGRhdGE6IGFwaVRva2VufSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc05hbWUgPT0gJ2xnLWJ0bicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaGFzUGFyZW50KGUudGFyZ2V0LCAncGFzc2NhbkRpYWxvZycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCdoYXNSaXBwbGUnKSA+IC0xIHx8IChlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSB8fCAnJykuaW5kZXhPZignaGFzUmlwcGxlJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZSA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5kZXhPZignaGFzUmlwcGxlJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zWCA9IGVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1kgPSBlbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbldpZHRoID0gZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkhlaWdodCA9IGVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnV0dG9uV2lkdGggPj0gYnV0dG9uSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uSGVpZ2h0ID0gYnV0dG9uV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbldpZHRoID0gYnV0dG9uSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBlLmNsaWVudFggLSBwb3NYIC0gYnV0dG9uV2lkdGggLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSBlLmNsaWVudFkgLSBwb3NZIC0gYnV0dG9uSGVpZ2h0IC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZS5jaGlsZE5vZGVzWzRdLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6ICR7YnV0dG9uV2lkdGh9cHg7aGVpZ2h0OiAke2J1dHRvbkhlaWdodH1weDt0b3A6ICR7eX1weDtsZWZ0OiAke3h9cHhgO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlLmNoaWxkTm9kZXNbNF0uY2xhc3NOYW1lID0gJ3JpcHBsZSByaXBwbGVFZmZlY3QnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlLmNoaWxkTm9kZXNbNF0uY2xhc3NOYW1lID0gJ3JpcHBsZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IGVsZS5kYXRhc2V0LmtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlck5hbWUgPSB0aGlzLmRhdGFTdG9yYWdlW2tleV0udW5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhc3N3b3JkID0gdGhpcy5kYXRhU3RvcmFnZVtrZXldLnB3ZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQudmFsdWUgPSB1c2VyTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmVPbmNoYW5nZSh0aGlzLmFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFzcy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFzcy52YWx1ZSA9IHBhc3N3b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyZU9uY2hhbmdlKHRoaXMucGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZURpYWxvZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3NjYW5EaWFsb2cnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZURpYWxvZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgdGltZXIgPSBudWxsO1xuICAgICAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgIG11dGF0aW9ucy5tYXAoKG0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYobS50eXBlID09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0udGFyZ2V0LmdldEF0dHJpYnV0ZShtLmF0dHJpYnV0ZU5hbWUpICE9PSBtLm9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluZElucHV0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGaWxsSWNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZpbmRJbnB1dCgpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmRJbnB1dCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXZlbnQgPSByZXF1ZXN0LmV2ZW50O1xuICAgICAgICAgICAgc3dpdGNoIChldmVudCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZUFQSSc6XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcGlIb3N0ID0gcmVxdWVzdC5hcGlIb3N0O1xuICAgICAgICAgICAgICAgICAgICBIT1NUID0gYXBpSG9zdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3QgY29uID0gbmV3IENvbnRlbnQoKTsiXX0=
