import createListElement from './createListElement.js';

const showFacts = (factsListContainer) => {
  let savedFacts = localStorage.getItem('dog-facts');
  if (savedFacts === null) {
    return null;
  } else {
    const factsToShow = JSON.parse(savedFacts).facts;
    factsListContainer.innerHTML = '';

    factsToShow.forEach((fact) => {
      const { factLiElement, factTimeElement, factSpanElement } =
        createListElement();

      factTimeElement.textContent = fact.time;
      factSpanElement.textContent = fact.fact;
      factsListContainer.appendChild(factLiElement);
    });
  }
};

export default showFacts;
