module.exports = {
  generatePassword: function (body) {
    let collection = []
    let numbers = '0123456789'
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let specialCase = '!@#$%^&*()_+{}":>?<|'

    if (body.lowercase === 'on') {
      collection = collection.concat(lowerCase.split(''));
    }
    if (body.uppercase === 'on') {
      collection = collection.concat(upperCase.split(''));
    }
    if (body.numbersymbols === 'on') {
      collection = collection.concat(numbers.split(''));
    }

    if (body.symbols === 'on') {
      collection = collection.concat(specialCase.split(''));
    }
    // filter out exclude value
    if (body.exclude) {
      collection = collection.filter(
        char => !body.exclude.includes(char)
      )
    }

    // error handling

    // 1. return error notice if collection is empty
    if (collection.length === 0) {
      return 'There is no valid character in your selection.'
    }

    // 2. if nothing on:
    if (!body.symbols === 'on' && !body.numbersymbols === 'on' && !body.lowercase === 'on' && body.uppercase === 'on') {
      return 'You must select at least one options to generate the password.'
    }
    let password = '';
    for (let i = 0; i < body.length; i++) {
      let index = Math.floor(Math.random() * collection.length)
      password += collection[index]
    }
    return password;
  }
}






