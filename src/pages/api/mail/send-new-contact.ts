import nodemailer, { SendMailOptions } from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { userEmail, subject, textMail, msgHtml } = req.body;

    let transporter = nodemailer.createTransport({
      host: process.env.HOST_MAIL,
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.USER_MAIL_PASSWORD
      }
    })

    let mailOptions: SendMailOptions = {
      from: process.env.USER_MAIL,
      to: process.env.USER_MAIL_RECEIVER,
      subject: subject,
      text: textMail,
      html: msgHtml,
    }

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err)
        res.status(404).json({ error: err })
      } else {
        res.status(201).send('Email sent successfully')
      }
    })
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}