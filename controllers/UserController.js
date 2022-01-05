const express = require('express');
const router = express.Router();
const MD5 = require('md5');
const jwt = require('jsonwebtoken');
const HELPERS = require('../Helpers/helpers');

// this below route is used for login
router.login = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let inputs = req.body;
    let user_data = {};

    await knex('users').where('email', inputs.email).where('password', MD5(inputs.password)).then(response => {
        if (response.length > 0) {
            status = 200;
            message = 'User has been logged in successfully!';
            user_data = response[0];
            user_data['token'] = jwt.sign({ user_data }, 'secret_electric_erp')
        } else {
            status = 403;
            message = 'Incorrect email and password!'
        }
    }).catch(err => console.log(err));

    return res.json({ status, message, user_data })
}

// this below function is used to get the list of users
router.list = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let users_list = [];

    await knex('users').where('role', '!=', 1).then(response => {
        if (response) {
            status = 200;
            message = 'users list has been fetched successfully!';
            users_list = response;
        }
    }).catch(err => console.log(err))

    return res.json({ status, message, users_list })
}

// this will used to update the push token
router.updatePushToken = async (req,res) => {
    let status = 500;
    let message = "Oops something went wrong!";

    await knex("users").where("id",req.user_data.id).update({
        "push_token" : req.body.token
    }).then(response=>{
        status = 200;
        message = "Token has been updated successfully!"
    }).catch(err=>console.log(err))

    return res.json({status,message})
}


// this below function is used to create the users
router.signup = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let inputs = req.body;
    let user_data = {}

    let create_obj = {
        uuid: await HELPERS.getKnexUuid(knex),
        name: inputs.name,
        email: inputs.email,
        mobile: '',
        password: MD5(inputs.password),
        forgot_password_token: null,
        company_name: '',
        role: inputs.role ? inputs.role : 3,
        created_at: await HELPERS.dateTime()
    }

    await knex('users').where('email', inputs.email).then(async response => {
        if (response.length > 0) {
            status = 400;
            message = 'User with this email already exist'
        } else {
            await knex('users').insert(create_obj,'id').then(response => {
                if (response) {
                    status = 200;
                    message = 'User has been logged in successfully!';
                    user_data = {
                        user_id : response[0],
                        name: inputs.name,
                        email: inputs.email,
                        mobile: '',
                        role: inputs.role ? inputs.role : 3,
                        token : jwt.sign({ user_data }, 'secret_electric_erp')
                    };
                }
            }).catch(err => console.log(err))
        }
    })
    return res.json({ status, message,user_data })
}

// this below function is used to create the new mechanic
router.createUser = async (req,res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let inputs = req.body;

    if (req.user_data.role == 1){
        let create_obj = {
            uuid: await HELPERS.getKnexUuid(knex),
            name: inputs.name,
            email: inputs.email,
            mobile: inputs.mobile,
            password: MD5(inputs.password),
            forgot_password_token: null,
            company_name: '',
            role: 2,
            created_at: await HELPERS.dateTime()
        }
    
        await knex('users').where('email', inputs.email).then(async response => {
            if (response.length > 0) {
                status = 400;
                message = 'User with this email already exist'
            } else {
                await knex('users').insert(create_obj).then(response => {
                    if (response) {
                        status = 200;
                        message = 'User has been created successfully!';
                    }
                }).catch(err => console.log(err))
            }
        })
    }else{
        status = 300;
        message = "You are not authorized"
    }
    
    return res.json({ status, message })
}

// this below function is used to fetch the user by id
router.fetchById = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let { id } = req.params;
    let user_detail = {};
    let services = [];
    await knex('users').where('id', id).then(response => {
        if (response.length > 0) {
            status = 200;
            message = 'user has been fetched successfully!';
            user_detail = response[0];
        }
    }).catch(err => console.log(err));

    let query = `select * from services where services.user_id='${id}' or assign_id='${id}' order by services.id desc`;

    await knex.raw(query).then((response) => {
        if (response[0]){
            services = response[0];
        }
    }).catch(err=>console.log(err))

    return res.json({ status, message, services,user_detail });
}

// this below function will used to block the user
router.blockUser = async (req,res) => {
    let status = 500;
    let message = "Oops something went wrong!";
    let {id} = req.params;

    await knex("users").where("id",id).update({
        active : 2
    }).then(response=>{
        if (response){
            status = 200;
            message = "User has been blocked successfully!"
        }
    }).catch(err=>console.log(err))

    return res.json({status,message})
}

// this below function will used to un block the user
router.unBlockUser = async (req,res) => {
    let status = 500;
    let message = "Oops something went wrong!";
    let {id} = req.params;

    await knex("users").where("id",id).update({
        active : 1
    }).then(response=>{
        if (response){
            status = 200;
            message = "User has been un blocked successfully!"
        }
    }).catch(err=>console.log(err))

    return res.json({status,message})
}

// this below function is used to update the mechanic
router.updateMechanic = async (req,res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let { id } = req.params;
    let inputs = req.body;

    let update_obj = {
        name: inputs.name,
        mobile: inputs.mobile,
    }

    if (inputs.password){
        update_obj["password"] = MD5(inputs.password);
    }

    await knex("users").where("id", id).update(update_obj).then(response2 => {
        if (response2) {
            status = 200;
            message = "User has been updated sucessfully!"
        }
    }).catch(err => console.log(err))


    return res.json({ status, message })
}

// this below function is used to update the user
router.update = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let { id } = req.params;
    let inputs = req.body;

    await knex("users").where("id", id).then(async response => {
        if (response[0].email === inputs.email) {
            let update_obj = {
                name: inputs.name,
                mobile: inputs.mobile,
                role: inputs.role ? inputs.role : 3,
                company_name: inputs.company_name,
            }

            if (inputs.password){
                update_obj['password'] = MD5(inputs.password)
            }

            await knex('users').where('id', id).update(update_obj).then(response1 => {
                if (response1) {
                    status = 200;
                    message = 'User has been updated successfully!';
                }
            }).catch(err => console.log(err))
        } else {
            await knex("users").where("email", inputs.email).then(async response1 => {
                if (response1.length > 0) {
                    status = 300;
                    message = "Email already exists"
                } else {
                    let update_obj = {
                        name: inputs.name,
                        email: inputs.email,
                        password: MD5(inputs.password),
                        mobile: inputs.mobile,
                        role: inputs.role ? inputs.role : 3,
                        company_name: inputs.company_name,
                    }
                    await knex("users").where("id", id).update(update_obj).then(response2 => {
                        if (response2) {
                            status = 200;
                            message = "User has been updated sucessfully!"
                        }
                    }).catch(err => console.log(err))
                }
            })
        }
    })
    return res.json({ status, message })
}

//this below function is used to update the password
router.updatePassword = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let { id } = req.params;
    let input = req.body;

    let update_obj = {
        password: MD5(input.password)
    }
    await knex('users').where('id', id).update(update_obj).then(response => {
        if (response) {
            status = 200;
            message = 'Password has been updated successfully!';
        }
    }).catch(err => console.log(err))

    return res.json({ status, message })
}


// this below function is used to delete the user
router.delete = async (req, res) => {
    let status = 500;
    let message = 'Oops something went wrong!';
    let { id } = req.params;

    await knex('users').where('id', id).del().then(response => {
        if (response) {
            status = 200;
            message = 'User has been deleted successfully!';
        }
    }).catch(err => console.log(err))
    return res.json({ status, message })
}

module.exports = router;
