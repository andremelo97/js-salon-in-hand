const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/salao-na-mao';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
    .connect(URI)
    .then(() => console.log('DB is up!'))
    .catch(() => console.log(err));