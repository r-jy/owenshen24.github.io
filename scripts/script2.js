document.querySelector(".initial-desc").style.display = "block";
let selection = document.querySelector(".start-icon");
selection.style.filter = 'grayscale(100%)';

function selectButton() {
  selection.style.filter = '';
  selection = this;
  selection.style.filter = 'grayscale(100%)';
  const index = [].indexOf.call(selection.parentElement.children, selection);
  document.querySelectorAll(".desc").forEach((desc) => {
    desc.style.display = 'none';
  });
  document.querySelectorAll(".desc")[index].style.display = 'block';
}
document.querySelectorAll(".icon").forEach((icon) => {
  icon.addEventListener("click", selectButton);
});
window.addEventListener("resize", function() {
  document.querySelectorAll(".desc").forEach((desc) => {
    desc.style.display = 'block';
  });
});