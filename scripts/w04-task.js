/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Divine 'KamCy' Ahaka",
  photo: './images/IMG_20230816_123839-1.jpg',
  favoriteFoods: ['Vegetable soup', 'Tomato soup', 'Fried plantain', 'Pizza'],
  hobbies: ['Formula 1', 'Reading on history', 'Aviation', 'Technology'],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
  place: 'Surulere, Lagos, Nigeria',
  length: '10 years',
});

myProfile.placesLived.push({
  place: 'Ejigbo, Lagos, Nigeria',
  length: '1 year',
});

myProfile.placesLived.push({
  place: 'Lokoja, Kogi, Nigeria',
  length: '4 years',
});

myProfile.placesLived.push({
  place: 'Ijegun, Lagos, Nigeria',
  length: '5 years',
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.placesLived.forEach((place) => {
  let liElement = document.createElement('li');
  liElement.textContent = place.place;
  document.querySelector('#favorite-foods').appendChild(liElement);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  let liElement = document.createElement('li');
  liElement.textContent = hobby;
  document.querySelector('#hobbies').appendChild(liElement);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((place) => {
  let dtElement = document.createElement('dt');
  dtElement.textContent = place.place;
  let ddElement = document.createElement('dd');
  ddElement.textContent = place.length;
  document.querySelector('#places-lived').appendChild(dtElement);
  document.querySelector('#places-lived').appendChild(ddElement);
});
