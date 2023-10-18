const saveFact = (fact) => {
  let savedFacts = localStorage.getItem('dog-facts');
  if (savedFacts === null) {
    let factsToSave = {
      facts: [fact],
    };
    savedFacts = localStorage.setItem('dog-facts', JSON.stringify(factsToSave));
  } else {
    let factsToSave = JSON.parse(savedFacts);
    factsToSave.facts.push(fact);
    savedFacts = localStorage.setItem('dog-facts', JSON.stringify(factsToSave));
  }
};

export default saveFact;
