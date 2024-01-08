const { Sequelize } = require('sequelize');

require('dotenv').config();

class DatabaseSingleton {
  constructor() {
    this.connection = null;
  }

  async connectDatabase() {
    try {
      if (!this.connection) {
        // Initialize Sequelize
        this.connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
          host: process.env.DB_HOST,
          dialect: 'mysql', // Change this to the appropriate dialect (e.g., 'mysql', 'sqlite', 'mssql') based on your database
        });

        // Test the connection
        await this.connection.authenticate();
        console.log('Database connected successfully.'); //eslint-disable-line no-console
      }
      return this.connection;
    } catch (error) {
      console.error(error); //eslint-disable-line no-console
      process.exit(1);
    }
  }
}

// Create a single instance of the DatabaseSingleton class
const databaseSingleton = new DatabaseSingleton();

// Export a function that calls connectDatabase on the singleton instance
module.exports = () => databaseSingleton.connectDatabase();
