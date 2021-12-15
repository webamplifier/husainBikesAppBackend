
exports.up = function(knex) {
    return knex.schema.createTable("users",function(table){
        table.bigIncrements("id");
        table.uuid("uuid");
        table.string("name")
        table.string("email")
        table.string("password")
        table.string("mobile")
        table.string("forgot_password_token")
        table.string("company_name")
        table.integer("role")
        table.datetime("created_at")
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("users")
  };
  