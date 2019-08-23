const knexCleaner = require( "knex-cleaner" );
const knex = require( "../dbConfig" );

exports.seed = function( knex, Promise ){
  // Deletes ALL existing entries
  return knexCleaner.clean( knex );
  
};