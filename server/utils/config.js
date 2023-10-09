require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  'mongodb+srv://alanssnape:alanDagwood1@cluster0.aozlz0t.mongodb.net/hateit?retryWrites=true&w=majority';
const SECRET = process.env.SECRET || 'hateitsecret';
const UPLOAD_PRESET = process.env.UPLOAD_PRESET || 'ml_default';

cloudinary.config({
  cloud_name: 'djdif5x2l',
  api_key: '338794687264294',
  api_secret: '338794687264294',
});

module.exports = {
  PORT,
  MONGODB_URI,
  SECRET,
  cloudinary,
  UPLOAD_PRESET,
};
