import showFacts from './showFacts.js';

const saveFact = (fact, factsListContainer) => {
  let savedFacts = localStorage.getItem('dog-facts');
  if (savedFacts === null) {
    let factsToSave = {
      facts: [
        {
          time: new Date().toUTCString(),
          fact: fact,
        },
      ],
    };
    savedFacts = localStorage.setItem('dog-facts', JSON.stringify(factsToSave));

    factsListContainer && showFacts(factsListContainer);
  } else {
    let factsToSave = JSON.parse(savedFacts);

    // Check if the fact already exists in the array
    if (!factsToSave.facts.some((savedFact) => savedFact.fact === fact)) {
      factsToSave.facts.push({
        time: new Date().toUTCString(),
        fact: fact,
      });
    }

    savedFacts = localStorage.setItem('dog-facts', JSON.stringify(factsToSave));

    factsListContainer && showFacts(factsListContainer);
  }
};

export default saveFact;
