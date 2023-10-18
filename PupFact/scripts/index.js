import getFact from './getFact.js';
import saveFact from './saveFact.js';
import showFacts from './showFacts.js';

const outputContainer = document.querySelector('.output-container');
const factsListContainer = document.querySelector('.facts-list-container');
const outputText = document.querySelector('#output-text');
const getFactBtn = document.querySelector('.get-fact-button');
const saveFactBtn = document.querySelector('.save-button');
const showFactBtn = document.querySelector('.show-fact-button');
const hideFactBtn = document.querySelector('.hide-fact-button');

let fact;

getFactBtn.addEventListener('click', async () => {
  fact = await getFact();
  outputContainer.classList.remove('hide');
  outputText.value = fact.facts[0];
});

saveFactBtn.addEventListener('click', () => {
  saveFact(fact.facts[0], factsListContainer);
});

showFactBtn.addEventListener('click', () => {
  factsListContainer.classList.remove('hide');
  showFactBtn.classList.add('hide');
  hideFactBtn.classList.remove('hide');
  showFacts(factsListContainer);
});

hideFactBtn.addEventListener('click', () => {
  factsListContainer.classList.add('hide');
  showFactBtn.classList.remove('hide');
  hideFactBtn.classList.add('hide');
});
