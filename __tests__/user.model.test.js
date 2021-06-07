const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const dbtype = process.env.dbtype ? 'mongo' : 'testusr:testusr@localhost:28018'
mongoose.connect('mongodb://' + dbtype + '/testUser', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.on('error', (e) => {
    console.log(e);
  throw new Error(`unable to connect to database`)
})

describe("initial test", () => {
    it("runs successfully", () => {
      expect(true).toEqual(true)
    })
  })

afterAll(async () => {
    try {
        await mongoose.connection.close()
    } catch (err) {
        console.log(err)
    }
})
  