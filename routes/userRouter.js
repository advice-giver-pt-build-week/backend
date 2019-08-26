const router = require('express').Router();
const userModel = require('../models/userModel.js');
const restricted = require('../auth/restricted.js')
//users path..

/**
 * @api {get} users/   Get all users
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
router.get('/', restricted, (req, res) => {
    userModel
    .findAll()
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error'})
    })
});
//works
router.get('/:id', restricted, (req, res) => {
    const id = req.params.id;

    userModel
    .findById(id)
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error'})
    })
})
//works
router.put('/:id', restricted, (req, res) => {
    const id = req.params.id;
    
    userModel
    .update(id, req.body)
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error'})
    })
})
//works
router.delete('/:id', restricted, (req, res) => {
    const id = req.params.id;


    userModel
    .remove(id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({ message:  'Internal Server Error.'})
    })
})

module.exports = router;









//findById,
// find,
// add,
// update,
// remove