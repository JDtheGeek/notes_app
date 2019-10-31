"use strict";

(function (exports) {

  // function Interface() {

    function listenFor(element, event, callBack) {
      element.addEventListener(event, function () {
        if (typeof callBack === "function") { callBack() }
      });
    }

    function getNote() {
      var text = document.getElementById('note_content').value
      return text
    }

    function addNote() {
      var text = getNote()
      if (!isEmpty(text)) { insertNoteIntoNotebook(text) }
    }

    function insertNoteIntoNotebook(text) {
      var note = new Note(text)
      notebook.add(note)
      sendNoteToView()
    }

    function sendNoteToView() {
      var notes = notebook.all()
      view.refresh(notes)
    }

    function isEmpty(text) {
      if (text.trim() === "" || text === null) {
        return true
      }
    }

    // function getHashValue() {
    //   return location.hash.split("#")[1];
    // }

    // function hashChange() {
    //   View.showNote(getHashValue())
    // }

    document.addEventListener('DOMContentLoaded', function () {
      console.log("I'm listening");
      listenFor(document.getElementById('create_button'), 'click', addNote)
      // listenFor(window,'hashchange', checkHash)
    });



  // exports.Interface = Interface;

})();

// var interface = new Interface;
