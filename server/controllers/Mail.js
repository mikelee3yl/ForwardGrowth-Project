config = require('../config/config')



//const mailjet = require("node-mailjet").connect(
//    config.MAILJET_KEY_PUBLIC,
//    config.MAILJET_KEY_PRIVATE
//);

const sendEmail = (messageInfo, text, html) => {
    return mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
            {
                From: { Email: messageInfo.fromEmail, Name: messageInfo.fromName },
                To: [{ Email: messageInfo.email }],
                Subject: messageInfo.subject,
                TextPart: text,
                HTMLPart: html
            }
        ]
    });
};
exports.sendOne = function (templateName, messageInfo, locals) {
    const email = new Email({
        views: { root: templatesDir, options: { extension: "ejs" } }
    });

    return Promise.all([
        email.render(`${templateName}/html`, locals),
        email.render(`${templateName}/text`, locals)
    ])
        .then(([html, text]) => {
            return sendEmail(messageInfo, text, html);
        })
        .catch(console.error);
};
const mailjet = require('node-mailjet')
    .connect('6985f34c9cd9618795ddd13715d53d30', '3dc0cff44753d80c8592e6073f660be1')

exports.request = function (email, subject, body) {
    const quest = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": email,
                        "Name": "jacob"
                    },
                    "To": [
                        {
                            "Email": "citrusjacob@gmail.com",
                            "Name": "jacob"
                        }
                    ],
                    "Subject": subject,
                    "TextPart": "Maaaaaaaaaaaay first Mailjet email",
                    "HTMLPart": body,
                    "CustomID": "AppGettingStartedTest"
                }
            ]
        })

    quest
        .then((result) => {
            console.log(result.body)
            res.catchy = '{"message":"Email sent."}';

        })
        .catch((err) => {
            res.catchy = '{"message":"Email not sent."}';
            console.log(err.statusCode)
        })
}
