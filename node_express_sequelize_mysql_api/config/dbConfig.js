module.exports = {
  HOST: 'varun-test-database-1.csckhedb4zaz.ap-south-1.rds.amazonaws.com',
  USER: 'admin',
  PASSWORD: 'adminAt1234',
  DB: 'node_sequelize_api_db',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}