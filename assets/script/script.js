$(document).ready(function() {
    function cycle(i) {
        if (descriptions.length > i) {
            setTimeout(function() {
                setTimeout('$("#welcome").fadeOut()', 1600);
                document.getElementById("welcome").innerHTML = descriptions[i];
                $("#welcome").fadeIn();
                cycle(++i);
            }, 2000);
        } 
        else if (descriptions.length == i) {
            cycle(0);
        }
    }
    var descriptions = ['Student', 'Software Engineer', 'Peer Mentor', 'Haas Research Apprentice', 'Artist', 'Innovator', 'Visionary'];
    setTimeout('$("#welcome").fadeOut()', 1500);
    cycle(0);
})