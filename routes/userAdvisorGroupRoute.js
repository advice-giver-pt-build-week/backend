const router = require( "express" ).Router();
const restricted = require( "../auth/restricted.js" );
const userAGR = require( "../models/userAdvisorGroups.js" );

/**
 * @api {post} /myMentors/   Add user adviser
 * @apiVersion 1.0.0
 * @apiName AddUserAdviser
 * @apiGroup AdviserGroup
 *
 * @apiHeader {String} authorization User token given when user logs in.
 *
 * @apiParam {Integer} seeker_id Advice Seeker Id
 * @apiParam {Integer} advisor_id  Advice Giver ID
 *
 * @apiExample Request example:
 * const request = axios.create({
 *     baseURL: 'https://advice-giver-backend.herokuapp.com',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
 * });
 * request.post('/myMentors', {
 *   seeker_id: 1,
 *   advisor_id: 3,
 * });
 *
 * @apiSuccessExample Request Success
 *{
    "message": "created"
}
 *
 */
router.post( "/", restricted, ( req, res ) => {
  //need req.body to contain the userID of the seeker and the userID of the
  // advice giver..
  if( !req.body.seeker_id || !req.body.advisor_id ){
    res.status( 400 )
      .json( { message: "The request needs the seeker id and the advisor id." } );
  }
  userAGR
    .add( req.body )
    .then( result => {
      if( result.rowCount >= 1 ){
        res.status( 201 ).json( { message: "created" } );
      }else{
        res.status( 500 ).json( { message: "internal server error" } );
      }
    } ).catch( err => {
    console.log( err );
    res.status( 500 ).json( { message: "internal server error" } );
  } );
} );

// router.delete('/:id', (req, res) => {
//     const id = req.body.advisor_id;
//     if (!req.body.seeker_id || !req.body.advisor_id) {
//         res.status(400).json({ message: 'The request needs the seeker id and
// the advisor id.'})

//     userAGR
//         .remove(id, req.body.seeker_id)
//         .then(result => {
//             res.json(result)
//         })
//         .catch(error => {
//             res.status(500).json({ message: 'Internal Server Error.'})
//         })
//     }
// });
/**
 * @api {get} /myMentors/:id  Get users advisers
 * @apiVersion 1.0.0
 * @apiName GetUsersAdvisers
 * @apiGroup AdviserGroup
 *
 * @apiHeader {String} authorization User token given when user logs in.
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
 * request.get('/myMentors'/7);
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
    }...
 ]
 *
 */
router.get( "/:id", restricted, ( req, res ) => {
  const seeker_id = req.params.id;
  
  userAGR
    .findBySeekerId( seeker_id )
    .then( result => {
      res.json( result );
    } )
    .catch( error => {
      console.error( error );
      res.status( 500 ).json( { message: "Internal Server Error." } );
    } );
} );
/**
 * @api {get} /myMentors/  Get all advisers
 * @apiVersion 1.0.0
 * @apiName GetAllAdvisers
 * @apiGroup AdviserGroup
 *
 * @apiHeader {String} authorization User token given when user logs in.
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
 * request.get('/myMentors'/7);
 *
 * @apiSuccessExample Request Success
 *[
 {
        "id": 5,
        "username": "Buffet",
        "password": "password",
        "adviceGiver": true,
        "expertise": "Finance",
        "yearsOfExperience": 10,
        "age": 75,
        "email": "warren@berkshiregmail.com",
        "img": null
    },
 {
        "id": 6,
        "username": "Freud",
        "password": "password",
        "adviceGiver": true,
        "expertise": "Counseling",
        "yearsOfExperience": 10,
        "age": null,
        "email": "freudian@yahoo.com",
        "img": null
    },...
 ]
 *
 */
router.get( "/", restricted, ( req, res ) => {
  userAGR
    .findAllAdvisors()
    .then( results => {
      res.status( 200 ).json( results );
    } )
    .catch( error => {
      res.status( 500 ).json( { message: "Internal Server Error" } );
    } );
} );

module.exports = router;