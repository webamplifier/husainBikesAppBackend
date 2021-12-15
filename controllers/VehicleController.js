const express = require('express');
const router = express.Router();
const HELPERS = require('../Helpers/helpers');

// this below function is used to get the list of vehicles
router.list = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let vehicle_list = [];

    await knex('vehicles').orderBy("id", "desc").where("user_id",req.user_data.id).then(response => {
        if (response) {
            status = 200;
            message = 'Vehicle list has been fetched successfully!';
            vehicle_list = response;
        }
    }).catch(err => console.log(err))

    return res.json({ status, message, vehicle_list })
}

// this below function is used to create the vehicles
router.create = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let inputs = req.body;

    let create_obj = {
        uuid: await HELPERS.getKnexUuid(knex),
        bike_name: inputs.name,
        bike_number_plate: inputs.number_plate,
        user_id: req.user_data.id,
        user_name: req.user_data.name,
        created_at: HELPERS.dateTime(),
    }

    await knex('vehicles').where("bike_number_plate", inputs.number_plate).where("user_id", req.user_data.id).then(async response1 => {
        if (response1.length > 0) {
            status = 300;
            message = "Vehicle already exists with this plate number"
        } else {
            await knex('vehicles').insert(create_obj).then(response => {
                if (response) {
                    status = 200;
                    message = 'Vehicle has been created successfully!';
                }
            }).catch(err => console.log(err))
        }
    })


    return res.json({ status, message })
}

// this below function is used to fetch the vehicle by id
router.fetchById = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let { id } = req.params;
    let vehicle_detail = {};

    await knex('vehicles').where('id', id).then(response => {
        if (response.length > 0) {
            status = 200;
            message = 'Vehicle has been fetched successfully!';
            vehicle_detail = response[0];
        }
    }).catch(err => console.log(err));

    return res.json({ status, message, vehicle_detail });
}

// this below function is used to update the vehicle
router.update = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let { id } = req.params;
    let inputs = req.body;

    let update_obj = {
        bike_name: inputs.name,
        bike_number_plate: inputs.number_plate,
    }

    await knex('vehicles').where('id', id).update(update_obj).then(response => {
        if (response) {
            status = 200;
            message = 'Vehicle has been updated successfully!';
        }
    }).catch(err => console.log(err))

    return res.json({ status, message })
}

// this below function is used to delete the vehicle
router.delete = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let { id } = req.params;

    await knex('vehicles').where('id', id).del().then(response => {
        if (response) {
            status = 200;
            message = 'Vehicle has been deleted successfully!';
        }
    }).catch(err => console.log(err))

    return res.json({ status, message })
}

module.exports = router;