(function(window)
{
    let byeSpeaker= {};
    let speakerWord = "Good Bye";

    byeSpeaker.speak = function (name) {
        console.log(speakerWord + " " + name);
    }
    window.byeSpeaker = byeSpeaker;
}
)(window);