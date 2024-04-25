import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'yandex',
            host: 'smtp.yandex.com',
            port: 465,
            secure: true,
            auth: {
                user: 'dariastore@yandex.ru',
                pass: process.env.EMAIL_HOST_PASSWORD
            }
        })

        const mailOption = {
            from: 'komarenko.daria@yandex.ru',
            to: 'ignateva-darya@mail.ru',
            subject: "Заявка",
            html: `
        <h3>Привет, новая заявка!</h3>
        <li> name: ${name}</li>
        <li> email: ${email}</li> 
        <li> message: ${message}</li> 
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}