import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'yandex или другой сервис',
            host: 'например, smtp.yandex.ru или другой хост',
            port: 465,
            secure: true,
            auth: {
                user: 'здесь написать email, откуда шлются письма',
                pass: process.env.EMAIL_HOST_PASSWORD
            }
        })

        const mailOption = {
            from: 'email, откуда шлем письма',
            to: 'email, куда шлем письма',
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