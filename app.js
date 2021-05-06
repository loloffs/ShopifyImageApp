app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

const requestURL = `http://api.unsplash.com/search/photos?query=${searchInput}&client_id=GGUMibw9WtG9a8bPfHHzNa0mJXPGY4jcjmL--uXROQA`
const searchButton = document.querySelector('.searchButton')
const imagesList = document.getElementById('imagesList')
const searchInput = document.getElementById('searchInput')
let images = []


searchInput.addEventListener('keyup', (event) => {
  const searchInput = event.target.value.toLowerCase();
  const filteredImages = images.filter((image) => {
    return image.location.toLowerCase().includes(searchInput) || image.description.toLowerCase().includes(searchInput)
  })
  displaySearchResults(filteredImages) // here
})

searchButton.addEventListener('click', async () => {
  images = await getImages()
  allImages.src = images
})

async function getImages() {
  return fetch(requestURL)
  .then((response) => response.json())
  .then((data) => {
    let searchResults = data.results;
    return searchResults.urls.regular
  })
}

const displaySearchResults = (images) => {
  const htmlString = images
    .map((images) => {
      return `
        <li class="imageResults">
          test
          <img src="${images.regular}"></img>
          <p>Photographed by ${images.user.name}</p>
        </li>
      `;
    })
    .join('');
  imagesList.innerHTML = htmlString;
}


$(() => {
    $("#searchInput").click(() => {
      console.log("Searching");
        $.ajax({
      method: "GET",
      url: `/?searchInput=${searchInput}`
    }).done(() => {
      console.log("Search complete");
    });;
  });
});
  