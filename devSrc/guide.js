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
            chrome.webstore.install('https://chrome.google.com/webstore/detail/imamemhokkdleoelohnmkimbmpfglcil', () => {
                console.log('安装成功');
                this.status = false;
                this.handleInstall();
            }, () => {
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
