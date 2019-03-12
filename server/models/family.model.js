var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var familySchema = new Schema ({
    who:String,
    Mother: Array,
    Father: Array,
    BigBrother: Array,
    LittleBrother: Array
});

var familyChores = mongoose.model("family", familySchema);

module.exports = familyChores; 