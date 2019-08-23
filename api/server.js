const express = require( "express" );
const helmet = require( "helmet" );
const cors = require( "cors" );

const server = express();

const messageRoute = require( "../routes/messageRoute.js" );
const authRoute = require( "../routes/auth-router.js" );
const userRoute = require( "../routes/userRouter.js" );
const announcementRoute = require( "../routes/announcementRoute.js" );
const userAdvisorGroupRoute = require( "../routes/userAdvisorGroupRoute.js" );
const bodyParser = require( "body-parser" );
const path = require( "path" );

server.use( express.json() );
server.use( helmet() );
server.use( cors() );
server.use( bodyParser.urlencoded( { extended: true } ) );

const apiDocsPath = path.join( __dirname, "../apidoc" );

server.use( "/myMentors", userAdvisorGroupRoute );
server.use( "/users", userRoute );
server.use( "/messages", messageRoute );
server.use( "/auth", authRoute );
server.use( "/announcements", announcementRoute );
server.use( "/", express.static( apiDocsPath ) );

module.exports = server;