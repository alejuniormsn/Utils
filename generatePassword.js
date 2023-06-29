function getPassword() {
  const chars =
    "0123456789ABCDEFGHIJKLMnopqrstuvwxyz";

  const passwordLength = 6;

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    if (i == 0) {
      password += chars.substring(randomNumber, randomNumber + 1).toUpperCase();
    } else {
      password += chars.substring(randomNumber, randomNumber + 1);
    }
  }

  console.log("password => ", password);

}

getPassword();