exports.seed = function( knex, Promise ){
  // Deletes ALL existing entries
  return knex( "users" )
    .then( function(){
      // Inserts seed entries
      return knex( "users" ).insert( [
        {
          username: "Amelia",
          password: "password",
          adviceGiver: false,
          age: 25,
          email: "amelia@yahoo.com"
        }, {
          username: "Norah",
          password: "password",
          adviceGiver: false,
          age: 25,
          email: "norah@gmail.com"
        }, {
          username: "Olive",
          password: "password",
          adviceGiver: false,
          age: 23,
          email: "olive@hotmail.com"
        }, {
          username: "Gwen",
          password: "password",
          adviceGiver: false,
          age: 23,
          email: "gwenieLOU@aol.com"
        }, {
          username: "Buffet",
          password: "password",
          adviceGiver: true,
          expertise: "Finance",
          yearsOfExperience: 10,
          age: 75,
          email: "warren@berkshiregmail.com"
        }, {
          username: "Freud",
          password: "password",
          adviceGiver: true,
          expertise: "Counseling",
          yearsOfExperience: 10,
          email: "freudian@yahoo.com"
        }, {
          username: "Zuckerberg",
          password: "password",
          adviceGiver: true,
          expertise: "Computers",
          yearsOfExperience: 10,
          email: "mark@fackbookmail.com"
        },
      ] );
    } );
};
