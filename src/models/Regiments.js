// ------------------------------------Modelele MONGOOSE--------------------------------------------------------------------

const mongoose = require('mongoose');

const RegimentsSchema = new mongoose.Schema({
  isPublic: Boolean,
  name: String,
  description: String,
  collegues: [],
  carriere: [
    {
      compagnie: Number,
      date: Date
    }
  ],
 
});

// On exporte le Shema
// On a cree un Model qui s'appel Blogpost via le shema  DataSchema
module.exports = mongoose.model('Regiments', RegimentsSchema);
