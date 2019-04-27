$(document).ready(function() {
    function runSequence(i) {
        if (words.length > i) {
            setTimeout(function() {
                setTimeout('$("#welcome").fadeOut()', 1600);
                document.getElementById("welcome").innerHTML = words[i];
                $("#welcome").fadeIn();
                runSequence(++i);
            }, 2000);
        } 
        else if (words.length == i) {
            runSequence(0);
        }
    }
    var words = ['Student', 'Software Engineer', 'Visionary', 'Haas Research Apprentice'];
    setTimeout('$("#welcome").fadeOut()', 1500);
    runSequence(0);
})