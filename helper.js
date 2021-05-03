const requestURL = `http://api.unsplash.com/search/photos?query=${searchInput}&client_id=GGUMibw9WtG9a8bPfHHzNa0mJXPGY4jcjmL--uXROQA`



const searchButton = document.querySelector('.searchButton')

searchButton.addEventListener('click', async () => {
  let images = await getImages()
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