require('dotenv').config();
const moment = require('moment-timezone');

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

function sendTheNotification(title, body, knex, id) {
    knex("users").where("id", id).then(async response => {
        if (response.length > 0) {
            if (response[0].push_token) {
                const message = {
                    to: response[0].push_token,
                    sound: 'default',
                    title,
                    body,
                };
                fetch('https://exp.host/--/api/v2/push/send', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Accept-encoding': 'gzip, deflate',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(message),
                })
            }
        }
    })
}


module.exports = {
    getKnexUuid,
    dateTime,
    current_date,
    tax_arr,
    sendTheNotification
}