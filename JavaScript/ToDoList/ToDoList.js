function onReady() {

    var noteText = document.getElementById("inputText");
    var noteList = document.getElementById("noteContainer");
    var addNote = document.getElementById("addNote");

    addNote.addEventListener("click", function () {
        if (noteText.value === "") {
            alert("Необходимо написать заметку");
            return;
        }

        var note = document.createElement("li");
        note.appendChild(document.createTextNode(noteText.value));

        var btnDelete = document.createElement("button");
        btnDelete.appendChild(document.createTextNode("Удалить"));

        note.appendChild(btnDelete);
        noteList.appendChild(note);

        noteText.value = "";
    });

    noteList.addEventListener("click", function (event) {
        var e = event.target;

        if (e.valueOf().tagName === "BUTTON") {
            var li = e.parentNode;
            var ul = li.parentNode;
            ul.removeChild(li);
        }
    })
}

document.addEventListener("DOMContentLoaded", onReady);


