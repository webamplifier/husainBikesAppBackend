require('dotenv').config();
const moment = require('moment-timezone');
const nodemailer = require('nodemailer');
const HBS = require('nodemailer-express-handlebars');
const MailConfig = require('../configs/MailConfig');

let transporter = nodemailer.createTransport({
    host : MailConfig.hostName,
    port : MailConfig.port,
    auth: {
        user: MailConfig.username,
        pass: MailConfig.password
    },
    tls: {
        rejectUnauthorized: false
    }
})

let options = {
    viewEngine: {
        extName: ".hbs",
        partialsDir: './views/emails',
        layoutsDir: './views/emails',
        defaultLayout: 'layout.hbs',
    },
    viewPath: './views/emails',
    extName: '.hbs'
}

async function sendMail(to, template, myContext, subject) {
    return new Promise(async function (resolve, reject) {
        try {
            transporter.use("compile", HBS(options));
            let info = await transporter.sendMail({
                from: MailConfig.username,
                to: to,
                subject: subject,
                template: template,
                context: myContext,
            })
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}


function getKnexUuid(knex) {
    return new Promise(function (resolve, reject) {
        knex.raw("SELECT uuid() AS uuid").then((response) => {
            resolve(response[0][0]["uuid"]);
        });
    });
}

function dateTime() {
    return moment().tz(process.env.TIME_ZONE).format('YYYY-MM-DD HH:mm:ss');
}

function current_date() {
    return moment().tz(process.env.TIME_ZONE).format('YYYY-MM-DD')
}

const tax_arr = [
    { value: 0, label: '0%' },
    { value: 8, label: '8%' },
    { value: 12, label: '12%' },
    { value: 18, label: '18%' },
]

function sendTheNotification(knex, id) {
    const promise = new Promise(async function (resolve,reject){
        await knex("users").where("role", 1).then(response => {
            let tokens = [];
            if (response.length > 0) {
                for (let i=0;i<response.length;i++){
                    tokens.push(response[i].push_token)
                }

                resolve(tokens)
            }else{
                resolve(tokens)
            }
        }).catch(err=>reject(err))
    })    

    return promise;
}


module.exports = {
    getKnexUuid,
    dateTime,
    current_date,
    tax_arr,
    sendTheNotification,
    sendMail
}