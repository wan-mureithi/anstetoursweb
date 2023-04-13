const nodemailer = require('nodemailer');

const sendEmail = async (subject, message, sendTo, sendFrom, replyTo) => {
    const transporter = nodemailer.createTransport({
        host: process.env.REACT_APP_EMAIL_HOST,
        port: '587',
        auth: {
            user: process.env.REACT_APP_EMAIL_USER,
            pass: process.env.REACT_APP_EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
        secure: false
    });

    const options = {
        from: sendFrom,
        to: sendTo,
        replyTo,
        subject,
        html: message,
    }
    
    transporter.sendMail(options, function(err, info){
        console.log(options)
        if(err) {
            console.log(err)
        } else {
            console.log('good info',info)
        }
    })
}

module.exports = sendEmail;