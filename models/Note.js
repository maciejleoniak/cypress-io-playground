const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    noteId: {
        type: String,
        default: () => new mongoose.Types.ObjectId().toString(), 
        unique: true,
      },
    email: { type: String, requred: true },
    title: { type: String, requred: true }, 
    desc: { type: String, requred: true },
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);