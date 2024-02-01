async function generateRandomFemaleName() {
  const femaleNames = await fetchNames('female');
  const lastName = await pickRandom(await fetchNames('surnames'));
  const firstName = await pickRandom(femaleNames.data);
  return `${firstName} ${lastName}`;
}

async function fetchNames(nameType) {
  const response = await fetch(`https://www.randomlists.com/data/names-${nameType}.json`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
