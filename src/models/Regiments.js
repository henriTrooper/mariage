// ------------------------------------Modelele MONGOOSE--------------------------------------------------------------------

const mongoose = require('mongoose');

const RegimentsSchema = new mongoose.Schema({
  nom: String,
  numero: Number,
  description: String,
  image: String,
  types: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Types',
    },
  ],
});

// On exporte le Shema
// On a cree un Model qui s'appel Blogpost via le shema  DataSchema
module.exports = mongoose.model('Regiments', RegimentsSchema);
