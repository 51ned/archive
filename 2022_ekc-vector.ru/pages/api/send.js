import nodemailer from 'nodemailer'

// eslint-disable-next-line import/no-anonymous-default-export

const EMAIL_HOST = process.env.EMAIL_HOST
const EMAIL_PORT = process.env.EMAIL_PORT
const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT

export default async function(req, res) {
  return new Promise(resolve => {
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })  
    
    const mailData = {
      from: EMAIL_USER,
      to: EMAIL_RECIPIENT,
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.phone,
      // attachments: [{}],
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.phone}</p>`
    }  
    
    transporter.sendMail(mailData, function (err, info) {
      err ? console.log(err) : console.log(info)
    })
    
    res.status(200).end();
    return resolve()
  })
}
