// JavaScript source code

//const mailjet = require("node-mailjet").connect(
//    process.env.MAILJET_KEY_PUBLIC,
//    process.env.MAILJET_KEY_PRIVATE
//);

const mailjet = require("node-mailjet").connect(
    '6985f34c9cd9618795ddd13715d53d30',
    '3dc0cff44753d80c8592e6073f660be1'
);


exports.request = function (req, res) {
    const quest = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": "jacobroberge@ufl.edu",
                        "Name": req.body.sender
                    },
                    "To": [
                        {
                            "Email": req.body.receiver,
                            "Name": req.body.receiverName
                        }
                    ],
                    "Subject": req.body.subject,
                    "TextPart": req.body.subject,
                    "HTMLPart": req.body.body,
                    "CustomID": "foward Growth emailing thing"
                }
            ]
        })

    quest
        .then((quest) => {
            res.send('{"message":"Email successfully sent."}');

        })
        .catch((err) => {
            res.send('{"message":"error while sending email with error code: '.concat(err.statusCode,'"}'));
        })


}