import mongoose from "mongoose";

const studentForm = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },

  data: [
    {
      typeQuestion: String,
      questions: [
        {
          id: Number,
          answer: String,
        },
      ],
    },
  ],
});

const StudentForm = mongoose.models.StudentForm || mongoose.model("StudentForm", studentForm);

export default StudentForm;
