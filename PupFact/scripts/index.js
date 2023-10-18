import getFact from './getFact.js';
import saveFact from './saveFact.js';
import showFacts from './showFacts.js';

const outputContainer = document.querySelector('.output-container');
const factsListContainer = document.querySelector('.facts-list-container');
const outputText = document.querySelector('#output-text');
const getFactBtn = document.querySelector('.get-fact-button');
const saveFactBtn = document.querySelector('.save-button');
const showFactBtn = document.querySelector('.show-fact-button');

let fact;

getFactBtn.addEventListener('click', async () => {
  fact = await getFact();
  outputContainer.classList.remove('hide');
  outputText.value = fact.facts[0];
});

saveFactBtn.addEventListener('click', () => {
  saveFact(fact.facts[0]);
});

showFactBtn.addEventListener('click', () => {
  factsListContainer.classList.remove('hide');
  let savedFacts = showFacts();

  if (savedFacts === null) {
    factsListContainer.textContent = `No fact to show`;
  } else {
    const factsToShow = savedFacts.facts;
    factsListContainer.innerHTML = '';

    factsToShow.forEach((fact) => {
      const factLiElement = document.createElement('li');
      factLiElement.textContent = fact;
      factsListContainer.appendChild(factLiElement);
    });
  }
});
