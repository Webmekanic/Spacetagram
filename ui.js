class UI {
  showImages(data) {
    let output = "";

    data.images.forEach((image) => {
      output += `
        <article>
        <div id="nasaProfile">
            <p class="nasaProfilePicture"></p>
            <p class="nasaName">Nasa</p>
          </div>
          <div class="nasaImage">
        <img class="nasaImageSource" src="${image.url}" alt="">  
          </div>
          <div class="heart"></div>
          <h4 class="imageTitle">${image.title}</h4>
          <p  class="imageDescription">${image.explanation}</p>
          <div class="date">
            <i id="calender" class="far fa-calendar-alt"></i>
            <p class="today">${image.date}</p>
          </div>
        </article>
        <hr />
        `;
    });

    //Display the image
    document.querySelector(".main-content").innerHTML = output;
  }
}
