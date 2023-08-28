import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  schoolid:{
    type :String ,
    require :true ,
  },
  school:{
    type:  mongoose.Schema.Types.ObjectId,
    ref : 'School',
  },
  userId:{
    type :String ,
    require: true,
  },
  class:{
    type: Number,
    require: true,
  },
  section:{
    type: String,
    require: true,
  },
  set: {
    type: String,
  },
  score: {
    type: Number,
  },
});

const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);

const schoolSchema = new mongoose.Schema({
    
    id:{
        type: Number,
        required:true,
    },
    name:{
        type: String,
        required: true,
    },
    noOfRegistration:{
        type: Number,
    },
    topper:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }
});

const School = mongoose.models.School || mongoose.model("School", schoolSchema)

export {Student, School}
