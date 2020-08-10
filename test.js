const db = require('.')

console.log('getAll()')
console.log(Object.keys(db.getAll()).length)
console.log('getCountriesShort()')
console.log(db.getCountriesShort().length)
console.log('getCountryByShort("US")')
console.log(db.getCountryByShort('US'))
console.log('getCountryInfoByShort("US")')
console.log(db.getCountryInfoByShort('US'))
console.log('getStatesByShort("US")')
console.log(db.getStatesByShort('US'))
console.log('getCities("US", "Kentucky")')
console.log(db.getCities('US', 'New York'))
console.log('getCountries()')
console.log(db.getCountries())
 
