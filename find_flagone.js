Java.perform(function() {
    var classes = Java.enumerateLoadedClassesSync();
    classes.forEach(function(c) {
        if (c.indexOf("b3nac.injuredandroid") !== -1 && c.indexOf("FlagOne") !== -1) {
            console.log(c);
        }
    });
});
