// ------------------------------------Modelele MONGOOSE--------------------------------------------------------------------
const mongoose = require('mongoose');

const { Schema } = mongoose;

const DataSchema = new Schema({
  isPublic: {
    type: Boolean,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  collegues: [],
  carriere: [
    {
      compagnie: Number,
      date: Date,
    },
  ],

});

// On exporte le Shema
// On a cree un Model qui s'appel Blogpost via le shema  DataSchema
module.exports = mongoose.model('data', DataSchema);
