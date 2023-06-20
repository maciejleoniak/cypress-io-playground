const express = require('express')
const mongoose = require('mongoose')
const Note = require('./models/Note')
const User = require('./models/User')
const app = express()
app.use(express.json({ extended: true }))
app.use(express.urlencoded())
const port = 3000


//substitute connection 
mongoose.connect('mongodb://leoniakmaciek1:rkqMA30u@ac-ig4sdoa-shard-00-02.yamms2s.mongodb.net:27017/?tlsAllowInvalidHostnames=true&tlsAllowInvalidCertificates=true&tls=true&authMechanism=DEFAULT')
    .then(() => {
        console.log('Successfully Connected');
    })
    .catch(() => {
        console.error('Error');
    });

// Endpoints to server the
app.get('/', (req, res) => {
    res.sendFile("pages/index.html", { root: __dirname })
})

app.get('/login', (req, res) => {
    res.sendFile("pages/login.html", { root: __dirname })
})

app.get('/signup', (req, res) => {
    res.sendFile("pages/signup.html", { root: __dirname })
})

// Endpoints for APIs
app.post('/getnotes', async (req, res) => {
    let notes = await Note.find({email: req.body.email})
    res.status(200).json({ success: true, notes })
})

app.post('/login', async (req, res) => {
    let user = await User.findOne(req.body)
    console.log(user)
    if (!user) {
        res.status(200).json({ success: false, massage: "No user found" })
    } else {
        res.status(200).json({ success: true, user: { email: user.email }, massage: "User found" })
    }

    res.sendFile("pages/signup.html", { root: __dirname })
})

app.post('/signup', async (req, res) => {
    const { userToken } = req.body
    console.log(req.body)
    let user = await User.create(req.body)
    res.status(200).json({ success: true, user: user })
})

app.post('/addnote', async (req, res) => {
    const { userToken } = req.body
    let note = await Note.create(req.body)
    res.status(200).json({ success: true, note})     
})

app.post('/deletenote', async (req, res) => {
  const { id } = req.body;

  try {
    
    const note = await Note.findOne({ _id: id });

    if (note) {
    
      await Note.deleteOne({ _id: id });
      res.status(200).json({ success: true, message: "Note deleted" });
    } else {
      res.status(404).json({ success: false, message: "Note not found" });
    }
  } catch (error) {
    console.error('Error deleting note:', error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})