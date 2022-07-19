const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config();

let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: { 
      user: process.env.EMAIL,
      pass:  process.env.PASSWORD, // For the password, I had to generate an APP PASSWORD because my email has 2 steps verification activated
    },
    tls:{
        rejectUnauthorized: false
    }
});

let mailDetails = {
    from: "uweraadrine3@gmail.com",
    to: "a.uwera@alustudent.com",
    subject: 'Daily motivation',
    text: "Happiness is always a choice you can't wait for circumstances to get better. You have to create your good fortune. So look for ways to be happy everyday"
};


transporter.sendMail(mailDetails, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Email sent")
    }
})
