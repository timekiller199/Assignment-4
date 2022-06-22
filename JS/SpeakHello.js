(function(window)
{
    let helloSpeaker = {};
    let speakerWord = "Hello";
    helloSpeaker.speak = function(name){
        console.log(speakerWord + " " + name);
    }
    window.helloSpeaker = helloSpeaker;
}
)(window);