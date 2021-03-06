'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Phone extends Model {

    situation(){
        return this.belongsTo('App/Models/Situation');
    }

    modelo(){
        return this.belongsTo('App/Models/Modelo');
    }

    
}

module.exports = Phone
