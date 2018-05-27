const mongoose = require('mongoose'),
      bcrypt = require('bcrypt');

const Schema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  func: {
    type: String,
    required: false
  }
});

Schema.pre('save', function(next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) return next(error);
      bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) return next(error);
        user.password = hash;
        next();
      })
    })
  } else {
    return next();
  }
});

Schema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, (error, result) => {
    if (error) return callback(error);
    callback(null, result);
  });
}

mongoose.model('User', Schema);
