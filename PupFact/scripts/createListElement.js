const createListElement = () => {
  const factLiElement = document.createElement('li');
  const factTimeElement = document.createElement('span');
  const factSpanElement = document.createElement('span');

  factTimeElement.classList.add('saved-time');
  factSpanElement.classList.add('fact-text');

  factLiElement.appendChild(factTimeElement);
  factLiElement.appendChild(factSpanElement);

  return { factLiElement, factTimeElement, factSpanElement };
};

export default createListElement;
