const router = require( "express" ).Router();
const userModel = require( "../models/userModel.js" );
const restricted = require( "../auth/restricted.js" );
//users path..

/**
 * @api {get} /users/   Get all users
 * @apiVersion 1.0.0
 * @apiName GetUsers
 * @apiGroup Users
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
 * request.get('users/');
 *
 * @apiSuccessExample Request Success
 *[
 {
        "id": 1,
        "username": "Amelia",
        "password": "password",
        "adviceGiver": false,
        "expertise": null,
        "yearsOfExperience": null,
        "age": 25,
        "email": "amelia@yahoo.com",
        "img": null
    },
 {
        "id": 2,
        "username": "Norah",
        "password": "password",
        "adviceGiver": false,
        "expertise": null,
        "yearsOfExperience": null,
        "age": 25,
        "email": "norah@gmail.com",
        "img": null
    },
 ...
 ]
 *
 */
router.get( "/", restricted, ( req, res ) => {
  userModel
    .findAll()
    .then( result => {
      res.json( result );
    } )
    .catch( error => {
      res.status( 500 ).json( { message: "Internal Server Error" } );
    } );
} );
//works

/**
 * @api {get} /users/:id   Get user
 * @apiVersion 1.0.0
 * @apiName GetUser
 * @apiGroup Users
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
 * request.get('users/4');
 *
 * @apiSuccessExample Request Success
 *[
 {
        "id": 1,
        "username": "Amelia",
        "password": "password",
        "adviceGiver": false,
        "expertise": null,
        "yearsOfExperience": null,
        "age": 25,
        "email": "amelia@yahoo.com",
        "img": null
    }
 ]
 *
 */
router.get( "/:id", restricted, ( req, res ) => {
  const id = req.params.id;
  
  userModel
    .findById( id )
    .then( result => {
      res.json( result );
    } )
    .catch( error => {
      console.error( error );
      res.status( 500 ).json( { message: "Internal Server Error" } );
    } );
} );

/**
 * @api {put} /users/:id   Update user
 * @apiVersion 1.0.0
 * @apiName UpdateUser
 * @apiGroup Users
 *
 * @apiHeader {String} authorization User token given when user logs in.
 *
 * @apiParam {Integer} [id] Users id
 * @apiParam {String} [username]  Users username
 * @apiParam {String} [password]  Users password
 * @apiParam {Email} [email]  Users email
 * @apiParam {boolean} [adviceGiver]  If the user is a advice giver or not
 * @apiParam {String} [expertise]  Advice Giver Expertise
 * @apiParam {Number} [yearsOfExperience]  Advice Giver Years of Experience
 * @apiParam {Number} [age]  Users age
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
 *   "username": "username",
 *   "password": "password",
 *   "adviceGiver": true,
 *   "expertise": null,
 *   "yearsOfExperience": null,
 *   "age": 25,
 *   "email": "Some email address",
 *   "img": "imgUrl"
 * });
 *
 * @apiSuccessExample Request Success
 *[
 {
        "id": 1,
        "username": "Amelia",
        "password": "password",
        "adviceGiver": false,
        "expertise": null,
        "yearsOfExperience": null,
        "age": 25,
        "email": "amelia@yahoo.com",
        "img": null
    }
 ]
 *
 */
router.put( "/:id", restricted, ( req, res ) => {
  const id = req.params.id;
  
  userModel
    .update( id, req.body )
    .then( result => {
      res.json( result );
    } )
    .catch( error => {
      res.status( 500 ).json( { message: "Internal Server Error" } );
    } );
} );
//works
router.delete( "/:id", restricted, ( req, res ) => {
  const id = req.params.id;
  
  userModel
    .remove( id )
    .then( result => {
      res.status( 200 ).json( result );
    } )
    .catch( error => {
      res.status( 500 ).json( { message: "Internal Server Error." } );
    } );
} );

module.exports = router;

//findById,
// find,
// add,
// update,
// remove