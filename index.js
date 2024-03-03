require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const path = require('path')
const mongoose = require('mongoose');
const cors = require('cors')

const server = express();
const productRouter  = require('./routes/product')


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL); 
  console.log('DB connected')
}


// mvc - model - view - controller 


//bodyParser
server.use(cors())
server.use(express.json());
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products', productRouter.router)

server.use('*', (req,res) => {
  res.sendFile(path.resolve(__dirname,'build', 'index.html'))
})

server.listen(process.env.PORT, () => {
  console.log('server started');
});
