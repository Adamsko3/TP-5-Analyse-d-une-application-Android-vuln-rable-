Java.perform(function() {
    var FlagOneLoginActivity = Java.use('b3nac.injuredandroid.FlagOneLoginActivity');
    var submitFlag = FlagOneLoginActivity.submitFlag.overload('android.view.View');

    submitFlag.implementation = function(view) {
        console.log('[*] FlagOneLoginActivity.submitFlag(View) called');
        return submitFlag.call(this, view);
    };
});
