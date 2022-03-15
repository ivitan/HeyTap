"ui";
ui.layout(
    <vertical >
        <button id="on" layout_gravity="center" text="打开无障碍" />
        <button id="start" layout_gravity="center" text="开始" />
 </vertical>

);

ui.start.click(function() {
    threads.start(function() {
        main();
    });
});

ui.start.click(function() {
    threads.start(function() {
        main();
    });
});

function main() {
    toast("等待3秒钟");
    sleep(3000);
    storeSign();
    communitySign();
    walletSign();
    usercenterSign();
    smarthomeSign();
    gamecenterSign();
    themestoreSign();
    breeenoSign();
    marketSign();
    browserSign();
    yoliSign();
    alert("已执行完成！");
}

function storeSign() {
    toast("打开OPPO商城");
    if (app.launchPackage("com.oppo.store")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log(click("我的"));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
            sleep(2000);
            click("立即签到");
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

function communitySign() {
    toast("打开 OPPO 社区");
    if (app.launchPackage("com.oppo.community")) {
        sleep(2000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne().bounds();
        sleep(1000);
        log(click(me.centerX(), me.centerY()));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}


function walletSign() {
    toast("打开钱包");
    if (app.launchPackage("com.finshell.wallet")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne().bounds();
        sleep(1000);
        log(click(me.centerX(), me.centerY()));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
            sleep(2000);
            if (text("签到").exists()) {
                click("签到");
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

function usercenterSign() {
    toast("打开我的一加");
    if (app.launchPackage("com.heytap.vip")) {
        sleep(4000);
        closeupdate();
        text("首页").waitFor();
        log("找到了");
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
            sleep(1000);
            if (text("签到").exists()) {
                click("签到");
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

function smarthomeSign() {
    toast("打开智能家居");
    if (app.launchPackage("com.heytap.smarthome")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne().bounds();
        sleep(1000);
        log(click(me.centerX(), me.centerY()));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

function gamecenterSign() {
    toast("打开游戏中心");
    if (app.launchPackage("com.nearme.gamecenter")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
        sleep(1000);
        log(me.visibleToUser())
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

function themestoreSign() {
    toast("打开主题商店");
    if (app.launchPackage("com.heytap.themestore")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
        sleep(1000);
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

function breeenoSign() {
    toast("打开 Breeno");
    if (app.launchPackage("com.heytap.speechassist")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne().bounds();
        sleep(1000);
        log(click(me.centerX(), me.centerY()));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

function marketSign() {
    toast("打开软件商店");
    if (app.launchPackage("com.heytap.market")) {
        sleep(6000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne().bounds();
        sleep(1000);
        log(click(me.centerX(), me.centerY()));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

function browserSign() {
    toast("打开浏览器");
    if (app.launchPackage("com.heytap.browser")) {
        sleep(6000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne().bounds();
        sleep(1000);
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd.exists()) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

function yoliSign() {
    toast("打开视频");
    if (app.launchPackage("com.heytap.yoli")) {
        sleep(6000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
        sleep(1000);
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd.exists()) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//关闭升级和广告之类的
function closeupdate() {
    log("进入关闭广告");
    var cancel = textContains("取消");
    if (cancel.exists()) {
        toast("取消升级");
        click(cancel.findOne().bounds().centerX(), cancel.findOne().bounds().centerY());
        sleep(1000);
    }
    var cancel2 = text("稍后");
    if (cancel2.exists()) {
        toast("取消升级");
        click(cancel2.findOne().bounds().centerX(), cancel2.findOne().bounds().centerY());
        sleep(1000);
    }
    cancel2 = text("暂不更新");
    if (cancel2.exists()) {
        toast("取消升级");
        click(cancel2.findOne().bounds().centerX(), cancel2.findOne().bounds().centerY());
        sleep(1000);
    }
    var ad = id("dialog_clos_image");
    if (ad.exists()) {
        toast("关闭广告");
        click(ad.findOne().bounds().centerX(), ad.findOne().bounds().centerY());
        sleep(1000);
    }
    ad = id("close");
    if (ad.exists()) {
        toast("关闭广告");
        click(ad.findOne().bounds().centerX(), ad.findOne().bounds().centerY());
        sleep(1000);
    }
    log("结束");
}