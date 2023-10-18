import getFact from './getFact.js';
import saveFact from './saveFact.js';

const outputContainer = document.querySelector('.output-container');
const outputText = document.querySelector('#output-text');
const getFactBtn = document.querySelector('.get-fact-button');
const saveFactBtn = document.querySelector('.save-button');

let fact;

getFactBtn.addEventListener('click', async () => {
  fact = await getFact();
  outputContainer.classList.remove('hide');
  outputText.value = fact.facts[0];
});

saveFactBtn.addEventListener('click', () => {
  saveFact(fact.facts[0]);
});
