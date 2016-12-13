/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    autoCreatedAt: false,
    autoUpdatedAt: false,
    connection: 'mysql',
    tableName : 'user',
  attributes: {
    user_id:{
        primaryKey: true,
        autoIncrement: true
    },
    user_name:'STRING',
    user_password:'STRING',
    phone_number:'INTEGER',
    email:'STRING'
  }
};
