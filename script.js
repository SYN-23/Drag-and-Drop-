// Get the containers and items
const containers = document.getElementsByClassName('container');
const items = document.getElementsByClassName('item');

// Add event listeners to each item for dragging
for (const item of items) {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
}

// Add event listeners to each container for dropping
for (const container of containers) {
  container.addEventListener('dragover', dragOver);
  container.addEventListener('dragenter', dragEnter);
  container.addEventListener('dragleave', dragLeave);
  container.addEventListener('drop', drop);
}

let draggedItem = null;

// Drag and Drop Functions
function dragStart() {
  draggedItem = this;
  setTimeout(() => {
    this.style.display = 'none';
  }, 0);
}

function dragEnd() {
  draggedItem.style.display = 'block';
  draggedItem = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function drop() {
  this.classList.remove('hovered');
  this.appendChild(draggedItem);
  // Display a success message or update the UI as needed
}

function resetContainers() {
  const firstContainer = containers[0];
  const secondContainer = containers[1];
  
  // Clear the second container
  while (secondContainer.firstChild) {
    secondContainer.removeChild(secondContainer.firstChild);
  }
  
  // Reset the first container to its original state
  for (const item of items) {
    firstContainer.appendChild(item);
  }

}
