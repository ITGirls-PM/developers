import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'yandex',
            host: 'smtp.yandex.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'dariastore@yandex.ru',
                pass: process.env.EMAIL_HOST_PASSWORD
            }
        })

        const mailOption = {
            from: 'dariastore@yandex.ru',
            to: 'ignateva-darya@mail.ru',
            subject: "Заявка",
            html: `
        <h3>Привет, новая заявка!</h3>
        <div>Если тут только email, то это заявка на рассылку, <br/>добавь этот email в базу рассылки.</div>
        <li> Имя: ${name}</li>
        <li> Email: ${email}</li> 
        <li> Сообщение: ${message}</li> 
        `
        }
        
        const rs = await transporter.sendMail(mailOption);

        return NextResponse.json({ message: `Succes: ${rs}` }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}