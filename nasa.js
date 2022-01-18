class NasaImages {
  constructor() {
    this.apiKey = "Xyjub04qJ8FUfxsA0aYc6vsBU3jvyQk023nILnFl";
  }

  async getImages() {
    const responseImages = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&start_date=2017-07-08&end_date=2017-07-12`
    );

    const nasaImgArr = await responseImages.json();

    return {
      images: nasaImgArr,
    };
  }
}
