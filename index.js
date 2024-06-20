// function to capitalise a word
function shout(string) {
    return string.toUpperCase();
};
console.log(shout('hello'));

// function to lowercase a word
function whisper(string) {
    return string.toLowerCase();
}
console.log(whisper('HELLO'));

// function to check if a specific string is logged
function logShout(string) {
    // if statement to capitalise the string and log it
    if (typeof string === 'string') {
        console.log(string.toUpperCase());
    }else {
        console.log("No string found");
    };
};
logShout('hello');

// function to check if a specific string is logged
function logWhisper(string) {
    // if statement to lowercase a string and log it
    if (typeof string === 'string') {
        console.log(string.toLowerCase());
    }else {
        console.log("No string found");
    }
};
logWhisper('hello');

// function to communicate to roommate
function sayHiToHeadphonedRoommate(string) {
// if statement to check the message
    if ( typeof string === 'string' && string === string.toLowerCase()) {
        return "I can't hear you!";
    }else if (typeof string === 'string' && string === string.toUpperCase()) {
        return "YES INDEED!";
    }else if (typeof string === 'string' && string === "Let's have dinner together!") {
        return "I would love to!";
    }else ("Kindly specify your message");
}

console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));
console.log(sayHiToHeadphonedRoommate("HEY, YOH"));
console.log(sayHiToHeadphonedRoommate("come"));