const toggleUI = document.getElementById('toggle');
const heartUI = document.getElementsByClassName("heart");
const body = document.body;
console.log(heartUI);

toggleUI.addEventListener('input', (e) => {
  const isChecked = e.target.checked;
  
  if(isChecked) {
    body.classList.add('theme');
  } else {
    body.classList.remove('theme');
  }
});

let heartArr = Array.from(heartUI);
heartArr.forEach(function (heartUI) {

  heartUI.addEventListener("click", (e) => {
    const liked = e.target;
    if(liked) {
      heartUI.classList.add('active');
      
    } else {
     heartUI.classList.remove('active');
    }
    
  });
});






