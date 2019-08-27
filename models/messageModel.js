const db = require( "../database/dbConfig.js" );

module.exports = {
  add, update, remove, findAll, findByMessageId, getByUserId,
};

function add( message ){
  return db( "messages" )
    .insert( message,
      [ "id", "message", "private", "user_id", "type", "title", "isAnswered" ]
    );
}

function update( changes, id ){
  return db( "messages" ).where( { id } ).update( changes );
}

async function remove( id ){
  await db( "messages" ).where( { id } ).del();
  let messages = await db( "messages" );
  let notPrivate = await messages.filter( item => {
    return item.private === false;
  } );
  
  return notPrivate;
};

// function find() {  I need to find by foreign key of the user who posted.....
//     return db('messages').where({ username }).first();
// };

function findByMessageId( id ){
  return db( "messages" ).where( { id } );
}

async function findAll(){
  let messages = await db( "messages" );
  let notPrivate = await messages.filter( item => {
    return item.private === false;
  } );
  
  return notPrivate; //returns all messages that are not marked as private!!!
}

function getByUserId( user_id ){
  return db( "messages" ).where( { user_id } );
}

// async function findPrivateForAdvisors {

// }