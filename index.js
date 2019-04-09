var Client = require('pg-native')

var client2 = new Client()
client2.connect('postgresql://admin:admin@non-existing.com:5432,localhost:5432/postgres', function(err) {
  if(err) throw err

  console.log('connected with connection string!')
})