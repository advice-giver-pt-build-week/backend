const localpg = {
  host: "localhost",
  database: "test",
  user: "test",
  password: "test"
};
const dbConnection = process.env.DATABASE_URL || localpg;

module.exports = {
  
  development: {
    client: "postgres", connection: {
      host: "localhost",
      database: "advice_giver",
      user: "postgres",
      password: "password",
    }, migrations: {
      directory: "./database/migrations"
    }, seeds: {
      directory: "./database/seeds"
    }
  }, production: {
    client: "pg", connection: dbConnection, migrations: {
      directory: "./database/migrations"
    }, seeds: {
      directory: "./database/seeds"
    }
  }
  
};
  