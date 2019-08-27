const router = require( "express" ).Router();
const messageModel = require( "../models/messageModel.js" );
const restricted = require( "../auth/restricted.js" );

/**
 * @api {post} /messages Post a message
 * @apiVersion 1.0.0
 * @apiName PostMessage
 * @apiGroup Messages
 *
 * @apiHeader {String} authorization User token given when user logs in.
 *
 * @apiParam {String} message Message text
 * @apiParam {Boolean} private Message private indicator
 * @apiParam {Integer} user_id Message user ID
 * @apiParam {String} type Message type
 * @apiParam {String} title Message title
 * @apiParam {Boolean} isAnswered Message answered indicator
 *
 *
 * @apiExample Request example:
 * const request = axios.create({
 *     baseURL: 'https://advice-giver-backend.herokuapp.com',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
 * });
 * request.post('/messages', {
 *   message: "Updated message text",
 *   private: false,
 *   user_id: 8,
 *   type: "Academics",
 *   title: "Support for math.",
 *   isAnswered: false,
 * });
 *
 * @apiSuccessExample Request Success
 * [
 {
        "id": 7,
        "message": "Here is a message",
        "private": true,
        "user_id": 2,
        "type": "Academics",
        "title": "Still need support",
        "isAnswered": false
    }
 ]
 *
 */
router.post( "/", restricted, ( req, res ) => {
  //need user.id of who is posting and whether message is private, message.
  const user_id = req.body.user_id; //gives the id of the user.
  if( req.body.message.length === 0 || !req.body.message || !req.body.user_id ||
    !req.body.type ){
    return res.status( 400 )
      .json( { message: "message is missing necessary information" } );
  } //boolean may need to be sent from client via a one or zero....
  messageModel
    .add( req.body )
    .then( result => {
      res.status( 201 ).json( result );
    } )
    .catch( error => {
      res.status( 500 ).json( { message: "Internal Server Error!" } );
    } );
} );

/**
 * @api {put} /messages/:id  Update a message
 * @apiVersion 1.0.0
 * @apiName UpdateMessage
 * @apiGroup Messages
 *
 * @apiHeader {String} authorization User token given when user logs in.
 *
 * @apiParam {Integer} [id] Message ID
 * @apiParam {String} [message] Message text
 * @apiParam {Boolean} [private] Message private indicator
 * @apiParam {Integer} [user_id] Message user ID
 * @apiParam {String} [type] Message type
 * @apiParam {String} [title] Message title
 * @apiParam {Boolean} [isAnswered] Message answered indicator
 *
 *
 * @apiExample Request example:
 * const request = axios.create({
 *     baseURL: 'https://advice-giver-backend.herokuapp.com',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
 * });
 * request.put('/messages/1', {
 *   message: "Updated message text",
 * });
 *
 * @apiSuccessExample Request Success
 * 1
 *
 */
router.put( "/:id", restricted, ( req, res ) => {
  const id = req.params.id; //message id.
  
  messageModel
    .update( req.body, id )
    .then( result => {
      res.json( result );
    } )
    .catch( error => {
      res.status( 500 ).json( { message: "Internal Server Error!" } );
    } );
} );
/**
 * @api {delete} /messages/:id  Deletes a message
 * @apiVersion 1.0.0
 * @apiName DelMessage
 * @apiGroup Messages
 *
 * @apiHeader {String} authorization User token given when user logs in.
 *
 * @apiExample Request example:
 * const request = axios.create({
 *     baseURL: 'https://advice-giver-backend.herokuapp.com',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
 * });
 * request.delete('/messages/1');
 *
 * @apiSuccessExample Request Success
 *[
 {
        "id": 2,
        "message": "I am looking to become a software developer and want to know the quickest way to become employed and be competent.",
        "private": false,
        "user_id": 2,
        "type": "Academics",
        "title": "Help with career goals.",
        "isAnswered": false
    },
 {
        "id": 3,
        "message": "What kind of computer do you recommend for someone wanting to become a software developer?",
        "private": false,
        "user_id": 2,
        "type": "Academics",
        "title": "Which computer?",
        "isAnswered": false
    },...
 ]
 *
 */
router.delete( "/:id", restricted, ( req, res ) => {
  const id = req.params.id; //id of message
  messageModel
    .remove( id )
    .then( result => {
      res.status( 200 ).json( result );
    } )
    .catch( error => {
      res.status( 500 ).json( { message: "Internal Server Error." } );
    } );
} );

/**
 * @api {get} /messages  Get all messages
 * @apiVersion 1.0.0
 * @apiName GetMessages
 * @apiGroup Messages
 *
 * @apiHeader {String} authorization User token given when user logs in.
 *
 * @apiExample Request example:
 * const request = axios.create({
 *     baseURL: 'https://advice-giver-backend.herokuapp.com',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
 * });
 * request.put('users/4', {
 *   id: 1,
 * });
 *
 * @apiSuccessExample Request Success
 *[
 {
        "id": 1,
        "message": "I have question about my finances.  I would like to inquire into whether or not I buy call options or go long the S&P via an index fund.",
        "private": false,
        "user_id": 1,
        "type": "Finance",
        "title": "Help with money",
        "isAnswered": false
    },
 {
        "id": 2,
        "message": "I am looking to become a software developer and want to know the quickest way to become employed and be competent.",
        "private": false,
        "user_id": 2,
        "type": "Academics",
        "title": "Help with career goals.",
        "isAnswered": false
    },...
 ]
 *
 */
router.get( "/", restricted, ( req, res ) => {
  //check to make sure the user is a advice giver first.....
  //if user is a giver than and has token for restricted middleware
  //then allow access to all messages that aren't private.
  messageModel
    .findAll()
    .then( result => {
      res.status( 200 ).json( result );
    } )
    .catch( error => {
      res.status( 500 ).json( { message: "Internal Server Error" } );
    } );
} );

//works
router.get( "/:id", restricted, ( req, res ) => {
  const id = req.params.id;
  
  messageModel
    .getByUserId( id )
    .then( result => {
      res.json( result );
    } )
    .catch( error => {
      res.status( 500 ).json( { message: "Internal Server Error" } );
    } );
} );

// need another router that gets the messages that are private from users which
// have the advisor as an advisor group...

module.exports = router;

// const token = req.headers.authorization;
// requst must be sent with a header authorization token...