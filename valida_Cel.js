function validaCel(inputCel) {

  let cel = new String(inputCel).replace(/[^\d]/g, "");

  //const str = /^[1-9]{2}9[0-9]{4}[0-9]{4}$/;
  const str = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)??(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/
  return cel.match(str) ? true : false;
}

const array = [
  '11860547776',
  '20960547776',
  '11960547776',
  '(11) 9 6054-7776',
  '99999999',
  '0000000',
  '99999999999',
];
for (let index = 0; index < array.length; index++) {
  console.log(`Item ${index} - ${array[index]} ==> ${validaCel(array[index])}`)
};
