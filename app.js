const toggleUI = document.getElementById("toggle");
const heartUI = document.getElementsByClassName("heart");
const today = document.getElementsByClassName("brand");
const body = document.body;

console.log(heartUI);

const nasa = new NasaImages();
const ui = new UI();

const main = document.querySelector(".main-content");

function load() {
  let loadTime;

  loadTime = true;
  if (loadTime) {
    main.innerHTML = `<div class="lds-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>`;
  }

  nasa.getImages().then((data) => {
    loadTime = false;
    let key;
    if (!loadTime) {
      console.log(data);
      ui.showImages(data);

      data.images.forEach((image) => {
        key = image.title;
      });

      const likeStr = localStorage.getItem(`${key}`);

      console.log(key);

      const likeBtn = document.querySelectorAll(".heart");
      likeBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const liked = e.target;
          if (liked) {
            btn.classList.toggle("active");
          }
        });
      });
    }
  });
}

window.onload = load();

toggleUI.addEventListener("input", (e) => {
  const isChecked = e.target.checked;

  if (isChecked) {
    body.classList.add("theme");
  } else {
    body.classList.remove("theme");
  }
});

let heartArr = Array.from(heartUI);
heartArr.forEach(function (heartUI) {
  heartUI.addEventListener("click", (e) => {
    const liked = e.target;
    if (liked) {
      heartUI.classList.toggle("active");
    }
  });
});
