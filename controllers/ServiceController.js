const express = require('express');
const router = express.Router();
const HELPERS = require('../Helpers/helpers');

//this is to get the list of services
router.list = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let service_list = [];

    let query = `Select * from services where (services.user_id = '${req.user_data.id}' or services.assign_id = '${req.user_data.id}')  order by services.id desc `

    await knex.raw(query).then(response => {
        if (response[0]) {
            status = 200;
            message = 'Service list has been fetched successfully!';
            service_list = response[0];
        }
    }).catch(err => console.log(err))

    return res.json({ status, message, service_list })
}

//this is to cretae a service
router.create = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let inputs = req.body;

    let user = {};
    let push_token = "";

    let priority_user_0 = [];
    let priority_user_1 = [];
    let priority_user_2 = [];
    let priority_user_3 = [];
    let priority_user_4 = [];
    let priority_user_5 = [];

    await knex('users').where('role', 2).where('active', 1).then(async response => {
        if (response.length > 0) {
            for (let i = 0; i < response.length; i++) {

                await knex('services').where('assign_id', response[i].id).where('status', 2).then(async response_service => {
                    if (response_service.length > 0) {

                        if (response_service.length == 1) {
                            priority_user_1 = [{ id: response[i].id, name: response[i].name }, ...priority_user_1]
                        }
                        if (response_service.length == 2) {
                            priority_user_2 = [{ id: response[i].id, name: response[i].name }, ...priority_user_2]
                        }
                        if (response_service.length == 3) {
                            priority_user_3 = [{ id: response[i].id, name: response[i].name }, ...priority_user_3]
                        }
                        if (response_service.length == 4) {
                            priority_user_4 = [{ id: response[i].id, name: response[i].name }, ...priority_user_4]
                        }
                        if (response_service.length == 5) {
                            priority_user_5 = [{ id: response[i].id, name: response[i].name }, ...priority_user_5]
                        }

                    } else {
                        priority_user_0 = [{ id: response[i].id, name: response[i].name }, ...priority_user_0]
                    }
                })

            }
        } else {
            return res.json({
                status: 500,
                message: "No mechanic is available now"
            })
        }
    });

    let create_obj = {
        uuid: await HELPERS.getKnexUuid(knex),
        user_id: req.user_data.id,
        user_name: req.user_data.name,
        user_longitude: inputs.longitude,
        user_latitude: inputs.latitude,
        vehicle_id: inputs.vehicle_id,
        vehicle_name: inputs.vehicle_name,
        description: inputs.reason,
        demand_dateTime: await HELPERS.dateTime(),
    }

    if (priority_user_0.length > 0) {
        create_obj['assign_id'] = priority_user_0[0].id;
        create_obj['assign_name'] = priority_user_0[0].name;
        create_obj['assign_dateTime'] = await HELPERS.dateTime();
        create_obj['status'] = 2
        await knex('services').insert(create_obj).then(async response => {
            if (response) {
                await HELPERS.sendTheNotification(knex, priority_user_0[0].id).then(response_token => {
                    push_token = response_token;
                    status = 200;
                    message = 'Service has been created successfully!';
                }).catch(err => console.log(err))
            }
        }).catch(err => console.log(err))

        return res.json({ status, message, push_token })
    } else if (priority_user_1.length > 0) {
        create_obj['assign_id'] = priority_user_1[0].id;
        create_obj['assign_name'] = priority_user_1[0].name;
        create_obj['assign_dateTime'] = await HELPERS.dateTime();
        create_obj['status'] = 2
        await knex('services').insert(create_obj).then(async response => {
            if (response) {
                await HELPERS.sendTheNotification(knex, priority_user_1[0].id).then(response_token => {
                    push_token = response_token;
                    status = 200;
                    message = 'Service has been created successfully!';
                }).catch(err => console.log(err))
            }
        }).catch(err => console.log(err))

        return res.json({ status, message, push_token })

    } else if (priority_user_2.length > 0) {
        create_obj['assign_id'] = priority_user_2[0].id;
        create_obj['assign_name'] = priority_user_2[0].name;
        create_obj['assign_dateTime'] = await HELPERS.dateTime();
        create_obj['status'] = 2
        await knex('services').insert(create_obj).then(async response => {
            if (response) {
                await HELPERS.sendTheNotification(knex, priority_user_2[0].id).then(response_token => {
                    push_token = response_token;
                    status = 200;
                    message = 'Service has been created successfully!';
                }).catch(err => console.log(err))
            }
        }).catch(err => console.log(err))

        return res.json({ status, message, push_token })
    } else if (priority_user_3.length > 0) {
        create_obj['assign_id'] = priority_user_3[0].id;
        create_obj['assign_name'] = priority_user_3[0].name;
        create_obj['assign_dateTime'] = await HELPERS.dateTime();
        create_obj['status'] = 2
        await knex('services').insert(create_obj).then(async response => {
            if (response) {
                await HELPERS.sendTheNotification(knex, priority_user_3[0].id).then(response_token => {
                    push_token = response_token;
                    status = 200;
                    message = 'Service has been created successfully!';
                }).catch(err => console.log(err))
            }
        }).catch(err => console.log(err))

        return res.json({ status, message, push_token })
    } else if (priority_user_4.length > 0) {
        create_obj['assign_id'] = priority_user_4[0].id;
        create_obj['assign_name'] = priority_user_4[0].name;
        create_obj['assign_dateTime'] = await HELPERS.dateTime();
        create_obj['status'] = 2
        await knex('services').insert(create_obj).then(async response => {
            if (response) {
                await HELPERS.sendTheNotification(knex, priority_user_4[0].id).then(response_token => {
                    push_token = response_token;
                    status = 200;
                    message = 'Service has been created successfully!';
                }).catch(err => console.log(err))
            }
        }).catch(err => console.log(err))

        return res.json({ status, message, push_token })
    } else if (priority_user_5.length > 0) {
        create_obj['assign_id'] = priority_user_5[0].id;
        create_obj['assign_name'] = priority_user_5[0].name;
        create_obj['assign_dateTime'] = await HELPERS.dateTime();
        create_obj['status'] = 2
        await knex('services').insert(create_obj).then(async response => {
            if (response) {
                await HELPERS.sendTheNotification(knex, priority_user_5[0].id).then(response_token => {
                    push_token = response_token;
                    status = 200;
                    message = 'Service has been created successfully!';
                }).catch(err => console.log(err))
            }
        }).catch(err => console.log(err))

        return res.json({ status, message, push_token })
    }

}
//this is to assign a service
router.assign = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let { id } = req.params;
    let inputs = req.body;

    let assign_obj = {
        assign_id: inputs.assign_id,
        assign_name: inputs.assign_name,
        assign_dateTime: await HELPERS.dateTime(),
        status: 2
    }

    await knex('services').where('id', id).update(assign_obj).then(response => {
        if (response) {
            status = 200;
            message = 'Service has been assigned successfully!';
        }
    }).catch(err => console.log(err))

    return res.json({ status, message })
}

//this is to denote that assignee has reached the place
router.reached = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let { id } = req.params;

    let reached_obj = {
        reached_dateTime: await HELPERS.dateTime(),
        status: 3
    }

    if (req.user_data.role == 2) {
        await knex('services').where('id', id).update(reached_obj).then(async response => {
            if (response) {
                await knex("services").where("id", id).then(response_service => {
                    if (response_service.length > 0) {
                        status = 200;
                        message = "Driver Reached!"
                        socket.emit("changeInService", { "user_id": response_service[0].user_id })
                    }
                })
            }
        }).catch(err => console.log(err))
    } else {
        status = 400;
        message = "You are not authorized to do it"
    }

    return res.json({ status, message })
}

// this below function is used to get the service detail by id
router.getServiceDetail = async (req, res) => {
    let status = 500;
    let message = "Oops something went wrong!";
    let { id } = req.params;
    let service_detail = {};
    let query = `SELECT
    services.id,users.push_token,services.service_km,services.vehicle_name,services.description,services.assign_name,services.status,vehicles.bike_number_plate,services.demand_dateTime,services.reached_dateTime,services.complete_dateTime,users.company_name,userAsign.mobile
    FROM
    services
    LEFT JOIN users ON services.user_id = users.id
    LEFT JOIN users as userAsign on services.assign_id = userAsign.id
    LEFT JOIN vehicles on services.vehicle_id = vehicles.id
    where services.id = '${id}'
    `

    await knex.raw(query).then(response => {
        if (response[0].length > 0) {
            service_detail = response[0][0];
            status = 200;
            message = "Service detail has been fetched successfully!"
        }
    }).catch(err => console.log(err))

    return res.json({ status, message, service_detail })
}

//this is to complete a service
router.completed = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let inputs = req.body;
    let { id } = req.params;

    let complete_obj = {
        complete_dateTime: await HELPERS.dateTime(),
        remarks: inputs.remarks,
        total_amount: inputs.total_amount,
        status: 4
    }

    await knex('services').where('id', id).then(async response => {

        if (response[0].assign_id == req.user_data.id) {
            await knex('services').where('id', id).update(complete_obj).then(async response1 => {
                if (response1) {
                    await knex("services").where("id", id).then(response_service => {
                        if (response_service.length > 0) {
                            status = 200;
                            message = "Service completed successfully!"
                            socket.emit("changeInService", { "user_id": response_service[0].user_id })
                        }
                    })
                }
            }).catch(err => console.log(err))
        }
        else {
            status = 400;
            message = "You cannot perform this action";
        }
    }).catch(err => console.log(err))

    return res.json({ status, message })
}

// this below function is used to delete the service
router.delete = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let { id } = req.params;

    await knex('services').where('id', id).then(async response => {
        if (response[0].status == 3) {
            status = 400;
            message = 'Service cannot be deleted now';
        }
        else {
            await knex('services').where('id', id).del().then(response1 => {
                if (response1) {
                    status = 200;
                    message = 'Service has been deleted successfully!';
                }
            }).catch(err => console.log(err))
        }
    }).catch(err => console.log(err))

    return res.json({ status, message })
}

// this below function will used to add the km
router.addKM = async (req, res) => {
    let status = 500;
    let message = "Oops something went wrong!";
    let { id } = req.params;

    await knex("services").where("id", id).update({
        service_km: req.body.km
    }).then(async response => {
        if (response) {
            await knex("services").where("id", id).then(response_service => {
                if (response_service.length > 0) {
                    status = 200;
                    message = "KM updated succesfully!"
                    socket.emit("changeInService", { "user_id": response_service[0].user_id })
                }
            })
        }
    }).catch(err => console.log(err))

    return res.json({ status, message })
}

module.exports = router;

