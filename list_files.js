Java.perform(function () {
    var ActivityThread = Java.use('android.app.ActivityThread');
    var File = Java.use('java.io.File');

    var app = ActivityThread.currentApplication();
    var ctx = app.getApplicationContext();
    var dataDir = ctx.getApplicationInfo().dataDir.value;

    function walk(path, depth) {
        var f = File.$new(path);
        if (!f.exists()) {
            console.log('[!] Not found: ' + path);
            return;
        }

        var prefix = '  '.repeat(depth);
        console.log(prefix + f.getAbsolutePath());

        if (f.isDirectory()) {
            var children = f.listFiles();
            if (children) {
                for (var i = 0; i < children.length; i++) {
                    walk(children[i].getAbsolutePath(), depth + 1);
                }
            }
        }
    }

    console.log('[*] dataDir = ' + dataDir);
    walk(dataDir, 0);
});
