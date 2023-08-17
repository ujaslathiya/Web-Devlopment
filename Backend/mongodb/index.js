const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ujaskart');

const kittySchema = new mongoose.Schema({
    name: String
  });

const Kitten = mongoose.model('Kitten', kittySchema);

kittySchema.methods.speak = function speak() {
    const greeting = "My name is " + this.name
    console.log(greeting);
};

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name);

const fluffy = new Kitten({ name: 'fluffy' });


