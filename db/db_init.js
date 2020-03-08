const mongoose = require('mongoose');
const qlikExtSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
      },
    dimensions: {
        min: {type:Number,required: true},
        max:  {
                type:Number,
                required: true,      
                validator: function(v) {
                    console.log(v);
                    return true
                }
        },
    },
      measures: {
        min: {type:Number,required: true},
        max:  {type:Number,required: true}
      }
    });

const qlikExtModel = mongoose.model('qlikextensions', qlikExtSchema);
var qlikExtExample = new qlikExtModel({name:'test', dimensions:{min:1,max:2}, measures:{min:0, max:2}})

mongoose.connect('mongodb://localhost:27017/qlikextensionsdb', {useNewUrlParser: true});

mongoose.connection
       .on('error', console.error.bind(console, 'connection error:'))
       .once('open', function() {
           console.log("we're connected!")
           qlikExtExample.save(function(err,success){
            if (err) return console.error(err);
            console.log('save record!')
           })

       });
