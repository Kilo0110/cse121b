const showFacts = () => {
  let savedFacts = localStorage.getItem('dog-facts');
  if (savedFacts === null) {
    return null;
  } else {
    return JSON.parse(savedFacts);
  }
};

export default showFacts;
