// const mongoose = require('mongoose');
// const URI = 'mongodb://localhost:27017/salon-in-hand';

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

// mongoose
//     .connect(URI)
//     .then(() => console.log('DB is up!'))
//     .catch(() => console.log(err));

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/salon-in-hand');
  console.log("DB is Up!")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}