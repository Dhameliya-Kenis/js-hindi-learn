const accountId = 230302
let accountEmail = "kenisd@meditab.com"
var accountPassword = "kenisd"
accountCity = "Surat"
let accountState

// accountId = 23 // not allowed

accountEmail = "kenis@gmail.com"
accountPassword = "dk"
accountCity = "Baroda"

console.log(accountId);
/*
prefer not to use var because of the issue in the block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])