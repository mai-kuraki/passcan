/**
 * Created by zhengliuyang on 2018/8/21.
 */
import $ from 'jquery';

class Guide {
    constructor() {
        this.status = false;
        this.pageDidMount();
    }

    pageDidMount() {
        $(document).on('click', '#install', () => {
            if (!chrome.hasOwnProperty('webstore')) return;
            this.loading(true);
            setTimeout(() => {
                this.loading(false);
            }, 4500);
            let link = document.createElement('link');
            link.rel = 'chrome-webstore-item';
            link.href = 'https://chrome.google.com/webstore/detail/ilbddbbikgbfohimdbkegcminkeagpao';
            document.head.appendChild(link);
            chrome.webstore.install('https://chrome.google.com/webstore/detail/ilbddbbikgbfohimdbkegcminkeagpao', () => {
                console.log('安装成功');
                this.status = false;
                this.handleInstall();
            }, (e) => {
                console.log(e)
                console.log('安装失败');
                this.status = true;
                this.handleInstall();
            })
        });
    }

    handleInstall() {
        
    }


    loading(state) {
        if (state) {
            $('.guide-panel .logo').hide();
            $('.wait').show();
            $('#install').attr('disabled', 'disabled');
        } else {
            $('.guide-panel .logo').show();
            $('.wait').hide();
            $('#install').removeAttr('disabled');
        }
    }
}

const guide = new Guide();
