const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

const port = 3100

const user = "roberto.ramirez@holachanchito.com"
const pass = "******"
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/send', (req, res) => {

  const transporter = nodemailer.createTransport({
    host:"smtp.umbler.com",
    port: 587,
    auth: { user, pass },

  })

  transporter.sendMail({
    from: user,
    to: "robertopaoloramirezmunoz7@gmail.com",
    replyTo: "roberto.ramirez@holachanchito.com",
    subject: "Olá, Seja Bem-vindo",
    text: "Olá, obrigado pela participação",

  }).then(info =>{
    res.send(info)
  }).catch(error => {
    res.send(error)
  })
})

app.listen(port, () => console.log(`Running on port ${port}!`))