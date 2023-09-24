const studentSurvey = [
  {
    type: "Decisiveness Assessment for School Students",
    page: 1,
    questions: [
      {
        id: 1,
        question: "How confident are you in your decision-making abilities?",
        option: [
          "Very confident",
          "Confident",
          "Neutral",
          "Not confident",
          "Not very confident",
        ],
      },
      {
        id: 2,
        question:
          "Are you comfortable with making decisions independently, without seeking advice or input from others?",
        option: ["Yes", "No", "Sometimes"],
      },
      {
        id: 3,
        question: "How do you prioritize your academic tasks and assignments?",
        option: [
          " Prioritize based on due dates",
          "Prioritize based on importance",
          "I struggle with prioritization",
        ],
      },
      {
        id: 4,
        question:
          "In group discussions or debates, do you find it easy to express your opinions and make your point?",
        option: ["Yes", "No", "It depends"],
      },
      {
        id: 5,
        question:
          "Are you open to seeking advice from teachers, parents, or peers when making important decisions?",
        option: ["Yes", "No", "It depends"],
      },
      {
        id: 6,
        question:
          "When choosing your future career path, are you confident in making this decision independently?",
        option: ["Yes", "No", " I'm unsure about my future career"],
      },
      {
        id: 7,
        question:
          "How do you handle situations where you're unsure of the right decision to make?",
        option: [
          "Gather information and analyze",
          "Seek advice from others",
          "Avoid making a decision",
        ],
      },
      {
        id: 8,
        question:
          "How do you feel about making decisions that could impact your academic future, such as choosing subjects or colleges?",
        option: ["Confident", "Anxious", "Uncertain"],
      },
      {
        id: 9,
        question:
          "Do you actively seek opportunities to practice and improve your decision-making skills?",
        option: ["Yes", "No", "Occasionally"],
      },
    ],
  },

  {
    type: "Assessing Academic Performance and Self-Perception",
    page: 2,
    questions: [
      {
        id: 1,
        question:
          "On a scale of 1 to 10, how would you rate your overall academic performance in the past year, with 1 being the lowest and 10 being the highest?",
        option: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      },
      {
        id: 2,
        question:
          "Do you feel that your grades accurately reflect your understanding of the subjects you study?",
        option: ["Yes", "No"],
      },
      {
        id: 3,
        question: "How do you manage your study time and homework?",
        option: [
          "Follow a strict schedule",
          "Prioritize based on deadlines",
          "Work on assignments as they come",
          "Often procrastinate",
          ,
        ],
      },
      {
        id: 4,
        question:
          "How often do you seek help or clarification from teachers or classmates when you have difficulty understanding a topic?",
        option: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 5,
        question:
          "Are you satisfied with the support and resources your school provides to help you succeed academically?",
        option: [
          "Very satisfied",
          "Satisfied",
          "Neutral",
          "Unsatisfied",
          "Very unsatisfied",
        ],
      },
      {
        id: 6,
        question:
          "How often do you review and revise your study notes and materials?",
        option: ["Daily", "Weekly", "Monthly", "Rarely", "Never"],
      },
      {
        id: 7,
        question:
          "Are you comfortable with using technology as part of your learning process, such as online resources or educational apps?",
        option: [
          "Very comfortable",
          "Comfortable",
          "Neutral",
          "Uncomfortable",
          "Very uncomfortable",
        ],
      },
      {
        id: 8,
        question: "How do you cope with academic stress or pressure?",
        option: [
          "Seek help from teachers or counselors",
          "Use relaxation techniques (e.g., deep breathing)",
          "Take short breaks",
          "I don't experience academic stress",
        ],
      },
      {
        id: 9,
        question:
          "Are you satisfied with your study environment at home or school?",
        option: [
          "Very satisfied",
          "Satisfied",
          "Neutral",
          "Unsatisfied",
          "Very unsatisfied",
        ],
      },
      {
        id: 9,
        question:
          "Are you open to seeking advice or mentorship from successful individuals in your field of interest?",
        option: ["Yes", "No"],
      },
    ],
  },
];

export default studentSurvey;
