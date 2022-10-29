let draggedItem;

document.querySelectorAll(".item").forEach(setUpItem);
document.querySelectorAll(".drop-zone").forEach(setUpDropZone);

function setUpItem(item) {
  item.addEventListener("dragstart", onDragItem);
  item.addEventListener("dblclick", onDoubleCLickItem);
}

function onDragItem(event) {
  draggedItem = event.target;
}

function onDoubleCLickItem() {
  const unRankedDropZone = document.getElementById("unranked-drop-zone");
  if (unRankedDropZone !== this.parentNode) {
    unRankedDropZone.appendChild(this);
  }
}

function setUpDropZone(dropZone) {
  dropZone.addEventListener("drop", onDropOverDropZone);
  dropZone.addEventListener("dragover", onDragOverDropZone);
}

function onDropOverDropZone() {
  if (this !== draggedItem.parentNode) {
    this.appendChild(draggedItem);
  }
}

function onDragOverDropZone(event) {
  event.preventDefault();
}
