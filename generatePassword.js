function getPassword() {
  const chars =
    "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJLMNOPQRSTUVWXYZ";
  const passwordLength = 6;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  console.log("password => ", password);
}

getPassword();