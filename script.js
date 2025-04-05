let textbox = document.getElementById("input");
let imagecontainer = document.getElementById("imagecontainer");
let notes = ["A#Bb3", "A#Bb4", "A#Bb5", "A4", "A5", "B3", "B4", "B5", "C#Db4", "C#Db5", "C#Db6", "C4", "C5", "C6", "D#Eb4", "D#Eb5", "D#Eb6", "D4", "D5", "D6", "E4", "E5", "E6", "F#Gb4", "F#Gb5", "F4", "F5", "F6", "G#Ab4", "G#Ab5", "G4", "G5"];

function match() {

    if (!isValid(textbox.value)) {
        return;
    }

    imagecontainer.innerHTML = "";
    let picture = document.createElement("img");
    picture.src = "images/" + textbox.value + ".png";
    imagecontainer.appendChild(picture);
}

function isValid(note) {
    for (x in notes) {
        if (notes[x] == note) {
            return true;
        }
    }
    return false;
}