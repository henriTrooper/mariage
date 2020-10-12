/* eslint-disable no-undef */
// ------------------------------------Modelele MONGOOSE--------------------------------------------------------------------

const mongoose = require('mongoose');

const TypesSchema = new mongoose.Schema({
  types: String,
});

/* REFERENCE */

// Champs virtuels : Utile quand on veut des champs calculé ou des references entre les models
// relation many to many entre regiments et types
TypesSchema.virtual('regiments', {
  ref: Regiments, // reference au model Regiments
  localField: _id, // fait reference au _ID  de regiments
  foreignfield: 'types', // fait reference a l'attribut>>>> types <<<<< dans Regiments
});

// On exporte le Shema
// On a cree un Model qui s'appel Blogpost via le shema  DataSchema
module.exports = mongoose.model('Types', TypesSchema);
