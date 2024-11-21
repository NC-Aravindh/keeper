import DeleteIcon from "@mui/icons-material/Delete";
function Note({id, title, content , onDelete}) {
  //passing the id of the note item that was deleted.
  function sendNoteId() {
    onDelete(id);
  }

  return (
    // contentEditable="true"
    <div className="note-container">
      <h1 >{title}</h1>
      {/* <p contentEditable="true">{content}</p> */}
      <p >{content}</p>
      <DeleteIcon id="delete-icon" onClick={sendNoteId} />
    </div>
  );
}
export default Note;
