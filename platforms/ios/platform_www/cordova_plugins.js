cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
        "id": "onesignal-cordova-plugin.OneSignal",
        "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
            "OneSignal"
        ]
    },
    {
        "file": "plugins/org.nypr.cordova.wakeupplugin/www/wakeup.js",
        "id": "org.nypr.cordova.wakeupplugin.Wakeup",
        "pluginId": "org.nypr.cordova.wakeupplugin",
        "clobbers": [
            "wakeuptimer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});