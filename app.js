const toggleUI = document.getElementById("toggle");
const heartUI = document.getElementsByClassName("heart");
const today = document.getElementsByClassName("brand");
const body = document.body;
const nasa = new NasaImages();
const ui = new UI();
const main = document.querySelector(".main-content");
 document.addEventListener("DOMContentLoaded", getTheme);

 function getTheme() {
  let blend;
  if (localStorage.getItem("blend") === null) {
    blend = [];


  } else {
    blend = JSON.parse(localStorage.getItem("blend"))
  }
  document.body.className = blend;
   
 }

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
      ui.showImages(data);
      console.log(data);
      data.images.forEach((image) => {
        key = image.title;
      });
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
 setLocalStorage( body.className);
  
});

function setLocalStorage (theme) {
  let blend;
  if (localStorage.getItem("blend") === null) {
    blend = [];

  } else {
    blend = JSON.parse(localStorage.getItem("blend"))
  }
  localStorage.setItem("blend", JSON.stringify(theme));
  // localStorage.setItem("blend", JSON.stringnify(theme));

}


let heartArr = Array.from(heartUI);
heartArr.forEach(function (heartUI) {
  heartUI.addEventListener("click", (e) => {
    const liked = e.target;
    if (liked) {
      heartUI.classList.toggle("active");
    }
  });
});
