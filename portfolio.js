const viewer = document.querySelector("#figure-dialog");
const largeImage = document.querySelector("#figure-image");
const figureTitle = document.querySelector("#figure-title");
const closeFigure = document.querySelector("#close-figure");
const players = [...document.querySelectorAll("video")];

for (const button of document.querySelectorAll("[data-zoom]")) {
  button.addEventListener("click", () => {
    largeImage.src = button.dataset.zoom;
    largeImage.alt = button.querySelector("img").alt;
    figureTitle.textContent = button.dataset.caption;
    viewer.showModal();
  });
}

closeFigure.addEventListener("click", () => viewer.close());
viewer.addEventListener("click", event => {
  if (event.target === viewer) viewer.close();
});

for (const player of players) {
  player.addEventListener("play", () => {
    for (const other of players) {
      if (other !== player) other.pause();
    }
  });
}
