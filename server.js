const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); //для кросс-доменных запросов

const User = require('./models/user');
const Post = require('./models/post');

mongoose.connect('mongodb://127.0.0.1:27017/blogreact'); //подключение к базе blogreact на локальном компьютере
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('We are connected');
});

const app = express();
app.use(cors());

app.get('/api/users', async (req, res) => {
   const users = await User.find();
   res.json(users);
});

app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

app.get('/api/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
 });

 app.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
});

app.get('/api/add', async(req, res) => {
    const user = new User({ id: "1", name: 'Leanne Graham', username: 'Bret', email: "Sincere@april.biz", address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",});
    user.save(function(err, user){
        if(err) return console.error(err);
        res.send({id:user.id, name:user.name, username:user.username});
    });

});

app.listen(8000);