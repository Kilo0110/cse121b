/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const artlcleElement = document.createElement('article');
    const h3Element = document.createElement('h3');
    h3Element.textContent = temple.templeName;
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', temple.imageUrl);
    imgElement.setAttribute('alt', temple.location);
    artlcleElement.appendChild(h3Element);
    artlcleElement.appendChild(imgElement);
    templesElement.appendChild(artlcleElement);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(
    'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json'
  );

  templeList = await response.json();

  displayTemples(templeList);

  return templeList;
};

/* reset Function */
const reset = () => {
  templesElement.innerHTML = '';
};

/* sortBy Function */
const sortBy = async (temples) => {
  reset();

  const filter = document.querySelector('#sortBy').value;
  let templesToDisplay;

  switch (filter) {
    case 'utah':
      displayTemples(
        temples.filter((temple) => temple.location.includes('Utah'))
      );
      break;

    case 'notutah':
      displayTemples(
        temples.filter((temple) => !temple.location.includes('Utah'))
      );

    case 'older':
      displayTemples(
        temples.filter(
          (temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)
        )
      );
      break;

    case 'all':
      displayTemples(temples);
      break;

    default:
      break;
  }
};

getTemples();
sortBy();

/* setTimeout(() => {
  reset();
}, 5000); */

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => {
  sortBy(templeList);
});
