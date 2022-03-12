"ui";
ui.layout(
    <vertical >
        <button id="start" layout_gravity="center" text="开始" />
 </vertical>

);

ui.start.click(function() {
    threads.start(function() {
        main();
    });
});

function main() {
    if (auto.service == null) {
        toastLog("请先开启无障碍服务！");
        return;
    };
    alert("开始执行任务了，请不要随意切换应用");
    AppRank();
    alert("已执行完成！");
}

function AppRank() {
    toast("应用宝");
    if (app.launchPackage("com.tencent.android.qqdownloader")) {
        sleep(2000);
        text("首页").waitFor();
        log(click("首页"));
        text("分类").waitFor();
        log(click("分类"));
        text("在线音乐").waitFor();
        log(click("在线音乐"));
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

function YingYongBao(){
    
}