const bcrypt = require('bcrypt');
const {Promise} = require('rsvp');


const make = (str) => {
  return new Promise((resolve, reject) =>
    // Generate hash's random salt
    bcrypt.genSalt(10, (err, salt) => {

      if (err) { return reject(err); }

      // Now, with the given salt, generate the hash
      bcrypt.hash(str, salt, (err, hash) => {
        if (err) { return reject(err); }

        // Hash generated successfully!
        return resolve(hash);
      });
    })

  );
}

const compare = (str, hash) => {
  return new Promise((resolve, reject) =>
    bcrypt.compare(str, hash, (err, result) => {
      if (err) { return reject(err); }
      return result ? resolve() : reject();
    })
  );
}
exports.make = make;
exports.compare = compare;