let textbox = document.getElementById("input");
let imagecontainer = document.getElementById("imagecontainer");
let notes = ["Bb3", "Bb4", "Bb5", "A4", "A5", "B3", "B4", "B5", "Db4", "Db5", "Db6", "C4", "C5", "C6", "Eb4", "Eb5", "Eb6", "D4", "D5", "D6", "E4", "E5", "E6", "Gb4", "Gb5", "F4", "F5", "F6", "Ab4", "Ab5", "G4", "G5"];

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