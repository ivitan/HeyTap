"ui";
ui.layout(
   
    <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
        <vertical padding="18 8" h="auto">
            <linear>
                <Switch id="autoService" text="无障碍服务:" checked="{{auto.service != null}}" w="auto" textStyle="bold" />
            </linear>
            <button id="start" layout_gravity="center" text="开始签到" />
        </vertical>
        <View bg="#E51400" h="*" w="5" />
    </card>

);

ui.start.click(function() {
    threads.start(function() {
        main();
    });
});


function main() {
    toast("等待3秒钟");
    sleep(3000);
    alert("开始执行任务了，请不要随意切换应用");
    sleep(2000);
    AppStore();
    alert("已执行完成！");
}

function storeSign() {
    toast("应用宝");
    if (app.launchPackage("com.tencent.android.qqdownloader")) {
        sleep(4000);
        closeupdate();
        text("首页").waitFor();
        log(click("首页"));
        sleep(1000);
        if (text("分类").exists()) {
            click("分类");
        }
        if (text("在线音乐").exists()){
            click("在线音乐")
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}