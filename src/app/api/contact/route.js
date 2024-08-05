import { NextResponse } from 'next/server';
import sendMail from '@/helpers/sendMail';

const POST = async (req) => {
    const { fullName, email, phone, subject, message } = await req.json();
    const mail = {
        to: 'dmytro.liuba@outlook.com',
        subject,
        html: `
            <p>You have a new message from your contact form:</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>`,
    };
    try {
        await sendMail(mail);
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Error sending email' },
            { status: 500 }
        );
    }
};

export { POST };
