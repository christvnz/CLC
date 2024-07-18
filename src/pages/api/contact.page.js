import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Create a Nodemailer transporter using SMTP
        let transporter = nodemailer.createTransport({
            host: 'smtp.mailersend.net',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'MS_Cx5QIm@trial-x2p0347jq0k4zdrn.mlsender.net',
                pass: 'IIWSYjXjE6kfIR43',
            },
        });

        const mailOptions = {
            from: 'MS_Cx5QIm@trial-x2p0347jq0k4zdrn.mlsender.net', // Replace with your email
            to: 'info@chowluckclub.com', // Recipient email from the form
            subject: `Contact form submission from ${name}`,
            text: message,
            html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
        };

        try {
            // Send email
            await transporter.sendMail(mailOptions);

            // Send a response back to the client
            res.status(200).json({ message: 'Form submitted successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send email' });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
