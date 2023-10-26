import mongoose from "mongoose";

const facultyForm = new mongoose.Schema({
  name: String,
  userId: String,
  schoolId: Number,
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

const FacultyForm = mongoose.models.FacultyForm || mongoose.model("FacultyForm", facultyForm);

export default FacultyForm;
