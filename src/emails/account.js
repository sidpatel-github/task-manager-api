const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const msg = {
//     to: 'quebectrip2222@gmail.com',
//     from: 'quebectrip2222@gmail.com',
//     subject: '2 email',
//     text: 'A newer email API',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };

// sgMail.send(msg);

const sendWelcomeEmail =async (email, name) => {
    sgMail.send({
        to: email,
        from: 'quebectrip2222@gmail.com',
        subject: 'Welcome to the task app',
        text: `Welcome to the app, ${name}. Let me know how it goes.`
    })
}

module.exports = {
    sendWelcomeEmail
}