$(function() {
    var e = require("typewriter"),
        r = document.getElementById("typewriter"),
        t = e(r).withAccuracy(95).withMinimumSpeed(10).withMaximumSpeed(20).build();
    t.clear().type("Passionate with Clean Code, Agile, RPi, Arduino and some IOT stuffs. Bad Software its like a lie, one time she comes comes up.").waitRange(100, 800);
});