const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// const path = require ('path');
// app.use(express.static(path.join(__dirname, 'public')));
// app.engine('html', require('ejs').renderFile);



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
