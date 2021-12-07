
exports.up = function(knex) {
    return knex.schema.createTable("vehicles",function(table){
        table.bigIncrements("id");
        table.uuid("uuid");
        table.string("bike_name")
        table.string("bike_number_plate")
        table.string("user_id")
        table.string("user_name")
        table.datetime("created_at")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("vehicles")
};
