
exports.up = function(knex) {
    return knex.schema.createTable("services",function(table){
        table.bigIncrements("id");
        table.uuid("uuid");
        table.string("user_id");
        table.string("user_name");
        table.string("user_latitude");
        table.string("user_longitude");
        table.string("user_place");
        table.datetime("demand_dateTime");
        table.string("assign_id");
        table.string("assign_name");
        table.integer("status").defaultTo(1).comment("1 for pending and 2 for assigned and 3 for reached and 4 for completed");
        table.datetime("assign_dateTime");
        table.datetime("complete_dateTime");
        table.dateTime("reached_dateTime");
        table.string("description");
        table.string("remarks");
        table.string("total_amount");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("services");
};
