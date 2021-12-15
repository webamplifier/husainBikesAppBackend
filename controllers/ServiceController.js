const express = require('express');
const router = express.Router();
const HELPERS = require('../Helpers/helpers');

//this is to get the list of services
router.list = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let service_list = [];

    await knex('services').where("user_id",req.user_data.id).orderBy("id", "desc").then(response => {
        if (response) {
            status = 200;
            message = 'Service list has been fetched successfully!';
            service_list = response;
        }
    }).catch(err => console.log(err))

    return res.json({ status, message, service_list })
}

//this is to cretae a service
router.create = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let inputs = req.body;

    

    let create_obj = {
        uuid: await HELPERS.getKnexUuid(knex),
        user_id: req.user_data.id,
        user_name: req.user_data.name,
        user_longitude: inputs.longitude,
        user_latitude: inputs.latitude,
        user_place: inputs.place,
        description: inputs.description,
        demand_dateTime: await HELPERS.dateTime(),
    }

    await knex('services').insert(create_obj).then(response => {
        if (response) {
            status = 200;
            message = 'Service has been created successfully!';
        }
    }).catch(err => console.log(err))

    return res.json({ status, message })
}

//this is to assign a service
router.assign = async (req, res) =>{
    let status = 500;
    let message = 'Oops something went wrong!';
    let { id } = req.params;
    let inputs = req.body;
    
    let assign_obj = {
        assign_id: inputs.assign_id,
        assign_name: inputs.assign_name,
        assign_dateTime : await HELPERS.dateTime(),
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
router.reached = async (req, res) =>{
    let status = 500;
    let message = 'Oops something went wrong!';
    let { id } = req.params;
    
    let reached_obj = {
        reached_dateTime : await HELPERS.dateTime(),
        status: 3
    }

    await knex('services').where('id', id).update(reached_obj).then(response => {
        if (response) {
            status = 200;
            message = 'Assignee has been reached successfully!';
        }
    }).catch(err => console.log(err))

    return res.json({ status, message })
}

//this is to complete a service
router.completed = async (req, res) =>{
    let status = 500;
    let message = 'Oops something went wrong!';
    let inputs = req.body;
    let { id } = req.params;

    let complete_obj = {
        complete_dateTime : await HELPERS.dateTime(),
        remarks : inputs.remarks,
        total_amount : inputs.total_amount,
        status: 4
    }

    await knex('services').where('id', id).then( async response => {
        
        if (response[0].assign_id == req.user_data.id) {    
            await knex('services').where('id', id).update(complete_obj).then(response1 => {
                if (response1) {
                    status = 200;
                    message = 'Service has been completed successfully!';
                }
            }).catch(err => console.log(err))
        }
        else{
            status = 400;
            message="You cannot perform this action";
        }
    }).catch(err => console.log(err))

    return res.json({ status, message })
}

// this below function is used to delete the service
router.delete = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let { id } = req.params;

    await knex('services').where('id', id).then( async response => {
        if (response[0].status == 3) {
            status = 400;
            message = 'Service cannot be deleted now';
        }
        else{
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

module.exports = router;

