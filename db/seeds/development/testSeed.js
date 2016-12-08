exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('testingTable').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('testingTable').insert({ id: 1, username: 'nick', password: 'owoO9asdo922F', Active: true, guardPlayer: true }),
        knex('testingTable').insert({ id: 2, username: 'david', password: 'sfdaq21254hs', Active: true, guardPlayer: false }), 
        knex('testingTable').insert({ id: 3, username: 'jason', password: 'sefg35u53', Active: true, guardPlayer: true }), 
        knex('testingTable').insert({ id: 4, username: 'alexis', password: 'gfs2562wrt', Active: true, guardPlayer: true }), 
        knex('testingTable').insert({ id: 5, username: 'brian', password: 'asdf24t22hwb', Active: false, guardPlayer: true }),
        knex('testingTable').insert({ id: 6, username: 'andrew', password: 'vzdfvq34t2g', Active: true, guardPlayer: true }),
        knex('testingTable').insert({ id: 7, username: 'sally', password: 'owoO9asdo922F', Active: true, guardPlayer: false }),
        knex('testingTable').insert({ id: 8, username: 'bret', password: 'w3gr23g34bs', Active: false, guardPlayer: true }),
        knex('testingTable').insert({ id: 9, username: 'shawna', password: 'sefs35njwerg', Active: true, guardPlayer: true }),
        knex('testingTable').insert({ id: 10, username: 'brandon', password: 'gserg24hsdc', Active: false, guardPlayer: true}),
        knex('testingTable').insert({ id: 11, username: 'kyle', password: 'q34g34gsdf', Active: false, guardPlayer: true }),
        knex('testingTable').insert({ id: 12, username: 'mark', password: 'bsbdfgsna32', Active: true, guardPlayer: false })
      ]);
    });
};
