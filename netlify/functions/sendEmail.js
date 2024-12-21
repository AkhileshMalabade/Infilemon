const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    const body = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.EMAIL_USERNAME, 
            pass: process.env.EMAIL_PASSWORD, 
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: body.email, // Send email to this address
        subject: 'Enquiry Form Submission',
        text: `Name: ${body.name}\nMessage: ${body.message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
