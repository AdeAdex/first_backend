const student = require('../models/student.model');

const cloudinary = require('cloudinary').v2

const nodemailer = require('nodemailer');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_KEY_SECRET
});

const startServer = () => {
  console.log("Express server listening on port:");
};

const getUserLandingPage = (req, res) => {
  res.send([
    {
      id: 1,
      name: "lemon graham",
      username: "bret",
    },
    {
      id: 2,
      name: "ervin howells",
      username: "Antonniels",
    },
    {
      id: 3,
      name: "clement beach",
      username: "samantha",
    },
  ]);
};

const getStudentInfo = (req, res) => {
  console.log(req.body);
  res.send('successful')
}

const postUserInfo = (req, res) => {
  let form = new student(req.body)
  form
  .save()
  .then((response) => {
    console.log(response);
    res.send({message:'user info successfully saved', status: true})
  })
  .catch((err) => {
    console.log(err);
  })
}

const getNodeMailer = (req, res) => {
  res.send({message: 'Message sent successfully', status: true})
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  })

  let mailOptions = {
    from: process.env.USER,
    to: ['adegbitejoshua07@gmail.com', 'adeoluamole@gmail.com'],
    subject: 'Hello Joshua hope this meet you well',
    text: 'You are receiving this message from Adex',
    html: '<h1>This is an h1 tag message from nodemailer</h1>',
    attachments: [
      {
        filename: 'Avatar',
        path: 'https://res.cloudinary.com/dn4gfzlhq/image/upload/v1684923249/adex.webp'
      }
    ]
  }

  transporter.sendMail(mailOptions)
  .then((response)=> {
    console.log(response)
  })
  .catch((err) => {
    console.log(err);
  })
}


const saveFile = (req, res) => {
  console.log(req.body);
  let imago = req.body.myImage


  const resImage = cloudinary.uploader.upload(imago, {public_id: "adex"})

resImage
.then((data) => {
  console.log(data);
  console.log(data.secure_url);
  let cloudLink = data.secure_url;
  res.send({message: 'sucessful upload', cloudLink})
})
.catch((err) => {
  console.log(err);
});
}

module.exports = {getUserLandingPage, startServer, getStudentInfo, getNodeMailer, saveFile, postUserInfo}
