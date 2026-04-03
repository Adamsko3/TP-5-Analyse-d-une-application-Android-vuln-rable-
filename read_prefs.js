Java.perform(function () {
    var ActivityThread = Java.use('android.app.ActivityThread');
    var PreferenceManager = Java.use('android.preference.PreferenceManager');
    var File = Java.use('java.io.File');

    var app = ActivityThread.currentApplication();
    var ctx = app.getApplicationContext();

    console.log('[*] Package: ' + ctx.getPackageName());

    try {
        var prefs = PreferenceManager.getDefaultSharedPreferences(ctx);
        var all = prefs.getAll();
        var entries = all.entrySet().toArray();
        console.log('[*] Default SharedPreferences:');
        for (var i = 0; i < entries.length; i++) {
            console.log('  ' + entries[i].getKey() + ' = ' + entries[i].getValue());
        }
    } catch (e) {
        console.log('[!] Impossible de lire les SharedPreferences par défaut: ' + e);
    }

    try {
        var dataDir = ctx.getApplicationInfo().dataDir.value;
        var prefsDir = File.$new(dataDir + "/shared_prefs");
        console.log('[*] shared_prefs dir: ' + prefsDir.getAbsolutePath());

        if (prefsDir.exists()) {
            var files = prefsDir.listFiles();
            if (files) {
                for (var j = 0; j < files.length; j++) {
                    console.log('  prefs file: ' + files[j].getName());
                }
            }
        } else {
            console.log('[!] shared_prefs introuvable');
        }
    } catch (e2) {
        console.log('[!] Impossible de lister shared_prefs: ' + e2);
    }
});
