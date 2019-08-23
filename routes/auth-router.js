const router = require( "express" ).Router();
const jwt = require( "jsonwebtoken" );
const bcrypt = require( "bcryptjs" );
const secret = require( "../config/secrets.js" );
const userModel = require( "../models/userModel.js" );

/**
 * @api {post} /auth/register   Register a new user.
 * @apiVersion 1.0.0
 * @apiName RegisterUser
 * @apiGroup Auth
 *
 * @apiParam {String} username  Users username
 * @apiParam {String} password  Users password
 * @apiParam {Email} email  Users email
 * @apiParam {boolean} adviceGiver  If the user is a advice giver or not
 * @apiParam {String} [expertise]  Advice Giver Expertise
 * @apiParam {Number} [yearsOfExperience]  Advice Giver Years of Experience
 * @apiParam {Number} [age]  Users age
 *
 * @apiExample Request example:
 * const request = axios.create({
 *     baseURL: 'https://advice-giver-backend.herokuapp.com',
        timeout: 1000,
 * });
 * request.post('/auth/register', {
    "username": "jeremiah",
    "password": "password",
    "email": "jeremiahtenbrink@gmail.com",
    "adviceGiver": true,
    "expertise": "life",
    "yearsOfExperience": 10,
    "age": 33
});
 *
 * @apiSuccessExample Request Success
 *[
     {
        "id": 8,
        "username": "jeremiah",
        "email": "jeremiahtenbrink@gmail.com",
        "adviceGiver": true,
        "expertise": "life",
        "yearsOfExperience": 10,
        "age": 33
      }
 ]
 *
 */
router.post( "/register", ( req, res ) => {
  let user = req.body;
  let advice = req.body.adviceGiver;
  const hash = bcrypt.hashSync( user.password );
  user.password = hash;
  
  if( advice ){
    if( !req.body.expertise || !req.body.yearsOfExperience ||
      !req.body.username || !req.body.password ){
      res.status( 418 )
        .json( { message: "The user is missing information in the request." } );
    }
  }else{
    if( !req.body.username || !req.body.password ){
      res.status( 418 )
        .json( { messge: "The user is missing information in the request." } );
    }
  }
  // console.log(req.body)
  userModel
    .add( req.body )
    .then( result => {
      res.status( 201 ).json( result );
    } )
    .catch( error => {
      console.error( error );
      res.status( 500 ).json( { message: error.message } );
    } );
  
} );

/**
 * @api {post} /auth/login   Login a user
 * @apiVersion 1.0.0
 * @apiName UserLogin
 * @apiGroup Auth
 *
 * @apiParam {String} username  Users username
 * @apiParam {String} password  Users password
 *
 * @apiExample Request example:
 * const request = axios.create({
 *     baseURL: 'https://advice-giver-backend.herokuapp.com',
        timeout: 1000,
 * });
 * request.post('/auth/register', {
    "username": "jeremiah",
    "password": "password"
});
 *
 * @apiSuccessExample Request Success
 *{
  "id": 8,
  "username": "jeremiah",
  "password": "$2a$10$hufhEDza64YtcfmTnOK2E.n2AV6aS9eUoiYZ54V91FkqYL6Dpewj2",
  "adviceGiver": true,
  "expertise": "life",
  "yearsOfExperience": 10,
  "age": 33,
  "email": "jeremiahtenbrink@gmail.com",
  "img": null,
  "token": "some really long string"
}
 *
 */
router.post( "/login", ( req, res ) => {
  let { username, password } = req.body;
  
  userModel
    .findUser( username )
    .then( user => {
      if( user && bcrypt.compareSync( password, user.password ) ){
        const token = generateToken( user );//generates token
        res.status( 200 ).json( {
          ...user, token//token sent to client
        } ); //on successful login the client will be sent all the users
            // information along with a token and
      }else{
        res.status( 401 )
          .json( { message: "Login username or password is incorrect." } );
      }
    } )
    .catch( error => {
      console.error( error );
      res.status( 500 ).json( error );
    } );
  
} );

function generateToken( user ){
  const payload = {
    subject: user.id, username: user.username
  };
  const options = {
    expiresIn: "12h",
  };
  
  return jwt.sign( payload, secret.jwtSecret, options );
}

module.exports = router;