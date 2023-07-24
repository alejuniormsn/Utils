const retiraAcentoString = (text) => {
  return text.toString().toLowerCase().trim()
    .replace(/[ÀÁÂÄÃÅĄ]/g, "A")
    .replace(/[àáâäãåą]/g, "a")
    .replace(/[ĖĘÈÉÊË]/g, "E")
    .replace(/[ęèéêëė]/g, "e")
    .replace(/[IÍÌÎÏ]/g, "I")
    .replace(/[įìíîï]/g, "i")
    .replace(/[ÓÒÕÔÖØ]/g, "O")
    .replace(/[òóôöõðø]/g, "o")
    .replace(/[ÙÚÛÜŲŪ]/g, "U")
    .replace(/[ùúûüųū]/g, "u")
    .replace(/[çčć]/g, "c")
    .replace(/[ÇĆČ]/g, "C")
    .replace(/[ńñ]/g, 'n')
    .replace(/[ŃÑ]/g, 'N')
    .replace(/[ÿý]/g, 'y')
    .replace(/[ŸÝ]/g, 'Y')
    .replace(/[żźž]/g, 'z')
    .replace(/[ŻŹŽ]/g, 'Z')
    .replace(/[š]/g, 's')
    .replace(/[Š]/g, 'S')
    .replace(/[ł]/g, 'l')
    .replace(/[Ł]/g, 'L')
}

const array = [
  'até', 'João', 'José', 'não', 'ùuuÌ' // tira acentos e põe em minúsculo
];
for (let index = 0; index < array.length; index++) {
  console.log(`Item ${index} - ${array[index]} ==> ${retiraAcentoString(array[index])}`)
};