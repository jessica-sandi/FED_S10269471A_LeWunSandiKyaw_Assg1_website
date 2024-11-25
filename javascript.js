// Example: Add a scrolling effect for row items
const rows = document.querySelectorAll('.row-items');

rows.forEach((row) => {
  row.addEventListener('wheel', (event) => {
    event.preventDefault();
    row.scrollLeft += event.deltaY;
  });
});
