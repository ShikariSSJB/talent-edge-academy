export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/o-level", label: "O Level" },
  { to: "/a-level", label: "A Level" },
  { to: "/entry-test-prep", label: "Entry Test Prep" },
  { to: "/methodology", label: "Methodology" },
  { to: "/admissions", label: "Admissions" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export const PROGRAMS = [
  {
    index: "01",
    title: "O Level Coaching",
    to: "/o-level",
    cta: "Explore O Level",
    description:
      "Build strong concepts, develop examination skills, and prepare confidently for Cambridge O Level examinations.",
    features: [
      "Concept-Based Learning",
      "Regular Assessments",
      "Past Paper Practice",
      "Examination Preparation",
    ],
  },
  {
    index: "02",
    title: "A Level Coaching",
    to: "/a-level",
    cta: "Explore A Level",
    description:
      "Develop advanced subject knowledge, analytical thinking, problem-solving skills, and examination confidence.",
    features: [
      "Advanced Concept Building",
      "Analytical Learning",
      "Past Paper Practice",
      "Exam Technique",
    ],
  },
  {
    index: "03",
    title: "University Entry Test Preparation",
    to: "/entry-test-prep",
    cta: "Explore Entry Test Prep",
    description:
      "Prepare for ECAT, MDCAT, SAT, GRE, GAT, GMAT and other competitive university entrance examinations with structured learning, intensive practice, mock tests, and examination strategies.",
    features: [
      "Concept Strengthening",
      "Problem Solving",
      "Timed Practice",
      "Mock Tests",
      "Exam Strategies",
    ],
  },
] as const;

export const ENTRY_TESTS = [
  {
    icon: "Calculator",
    name: "ECAT",
    title: "Engineering Entry Test",
    description:
      "Preparation for engineering university admission tests with a focus on Mathematics, Physics and Chemistry problem-solving.",
  },
  {
    icon: "Stethoscope",
    name: "MDCAT",
    title: "Medical Entry Test",
    description:
      "Structured MDCAT preparation covering Biology, Chemistry, Physics and English with rigorous MCQ practice and mock tests.",
  },
  {
    icon: "GraduationCap",
    name: "SAT",
    title: "US College Admissions",
    description:
      "Complete SAT preparation for Reading, Writing and Math with official-style practice tests and score-improvement strategies.",
  },
  {
    icon: "BookOpen",
    name: "GRE",
    title: "Graduate Admissions",
    description:
      "GRE preparation for Verbal Reasoning, Quantitative Reasoning and Analytical Writing with targeted vocabulary and practice.",
  },
  {
    icon: "ClipboardCheck",
    name: "GAT",
    title: "Graduate Assessment Test",
    description:
      "GAT (General/Subject) preparation for local university admissions and scholarships, with timed practice and test techniques.",
  },
  {
    icon: "Briefcase",
    name: "GMAT",
    title: "Business School Admissions",
    description:
      "GMAT preparation covering Quantitative, Verbal and Data Insights sections with adaptive practice and mock examinations.",
  },
] as const;

export const WHY_CHOOSE = [
  {
    icon: "GraduationCap",
    title: "Expert Teaching",
    text: "Our teachers focus on clear explanations, strong concepts, and effective examination preparation.",
  },
  {
    icon: "UserCheck",
    title: "Individual Attention",
    text: "We recognize that every student learns differently. Our approach allows teachers to identify individual strengths and areas requiring improvement.",
  },
  {
    icon: "Lightbulb",
    title: "Concept-Based Learning",
    text: "Instead of relying solely on memorization, we help students understand the concepts behind every topic.",
  },
  {
    icon: "ClipboardCheck",
    title: "Regular Assessments",
    text: "Frequent tests and assessments help students measure their progress and identify areas for improvement.",
  },
  {
    icon: "FileText",
    title: "Past Paper Practice",
    text: "Students receive extensive practice with Cambridge-style questions and past papers to develop examination confidence.",
  },
  {
    icon: "PenLine",
    title: "Examination Preparation",
    text: "We teach students how to manage time, structure answers, understand question requirements, and approach different types of examination questions.",
  },
  {
    icon: "LineChart",
    title: "Progress Monitoring",
    text: "We maintain regular academic feedback so students and parents can understand progress throughout the academic year.",
  },
  {
    icon: "HeartHandshake",
    title: "Supportive Environment",
    text: "We strive to create a positive learning environment where students can develop confidence and become independent learners.",
  },
] as const;

export const O_LEVEL_SUBJECTS = [
  "Mathematics",
  "Additional Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "English",
  "Accounting",
  "Economics",
  "Business Studies",
  "Urdu",
  "Pakistan Studies",
  "Islamiyat",
] as const;

export const A_LEVEL_SUBJECTS = [
  "Mathematics",
  "Further Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "Accounting",
  "Economics",
  "Business",
  "Psychology",
] as const;

export const METHODOLOGY_STEPS = [
  {
    index: "01",
    title: "Understand",
    text: "Students develop a clear understanding of fundamental concepts.",
  },
  {
    index: "02",
    title: "Practice",
    text: "Students solve progressively challenging questions under teacher guidance.",
  },
  { index: "03", title: "Assess", text: "Regular quizzes and tests help measure understanding." },
  {
    index: "04",
    title: "Improve",
    text: "Teachers identify weaknesses and provide targeted support.",
  },
  {
    index: "05",
    title: "Master",
    text: "Students practice examination-style questions and past papers.",
  },
  {
    index: "06",
    title: "Excel",
    text: "Students develop the confidence and skills required to perform effectively in their final examinations.",
  },
] as const;

export const ENTRY_TEST_FEATURES = [
  {
    icon: "Lightbulb",
    title: "Concept Building",
    text: "Strengthen core concepts and develop a solid academic foundation.",
  },
  {
    icon: "Calculator",
    title: "Practice & Problem Solving",
    text: "Solve topic-wise and progressively challenging questions with expert guidance.",
  },
  {
    icon: "Timer",
    title: "Mock Tests",
    text: "Experience realistic examination conditions through regular timed mock tests.",
  },
  {
    icon: "Target",
    title: "Exam Strategies",
    text: "Learn time management, question-solving techniques, and strategies for handling competitive entry tests.",
  },
] as const;

export const ENTRY_TEST_PROCESS = [
  { index: "01", title: "Assess", text: "Understand the student's current academic level." },
  {
    index: "02",
    title: "Strengthen",
    text: "Identify weak areas and strengthen fundamental concepts.",
  },
  { index: "03", title: "Practice", text: "Solve topic-wise and mixed practice questions." },
  { index: "04", title: "Test", text: "Take regular timed quizzes and mock examinations." },
  { index: "05", title: "Analyze", text: "Review mistakes and identify areas requiring improvement." },
  {
    index: "06",
    title: "Improve",
    text: "Focus on weak areas and continuously improve performance.",
  },
  { index: "07", title: "Prepare", text: "Build confidence and examination readiness." },
] as const;

export const EXAM_PREP_ITEMS = [
  "Topic-Wise Tests",
  "Full-Length Mock Examinations",
  "Past-Paper Sessions",
  "Mark-Scheme Analysis",
  "Time-Management Techniques",
  "Structured-Answer Practice",
  "Common Mistake Identification",
  "Revision Planning",
  "Final Examination Preparation",
] as const;

export const STUDENT_SUPPORT = [
  { icon: "Users", title: "Teacher Guidance" },
  { icon: "UserCheck", title: "Personal Attention" },
  { icon: "ClipboardCheck", title: "Academic Feedback" },
  { icon: "Sparkles", title: "Confidence Building" },
  { icon: "BookOpen", title: "Independent Learning" },
] as const;

export const PARENT_COMMS = [
  "Academic Progress Updates",
  "Test Results",
  "Attendance Monitoring",
  "Teacher Feedback",
  "Parent-Teacher Meetings",
  "Examination Preparation Updates",
] as const;

export const ADMISSION_STEPS = [
  { index: "01", title: "Contact the Academy", text: "Reach out by phone, email, or the inquiry form." },
  {
    index: "02",
    title: "Discuss Requirements",
    text: "Discuss the student's subjects and academic requirements.",
  },
  {
    index: "03",
    title: "Assessment / Consultation",
    text: "Academic assessment or consultation where appropriate.",
  },
  { index: "04", title: "Select Class & Batch", text: "Select the appropriate class and batch." },
  {
    index: "05",
    title: "Begin Learning",
    text: "Begin the learning journey at Talent Edge Academy.",
  },
] as const;

export const COMMITMENT_QUALITIES = [
  "Knowledgeable",
  "Confident",
  "Analytical",
  "Disciplined",
  "Independent Learners",
] as const;

export const FAQS = [
  {
    q: "Which students can join Talent Edge Academy?",
    a: "We offer coaching for students preparing for Cambridge O/A Level examinations, subject to available batches.",
  },
  {
    q: "Do you provide individual attention?",
    a: "Yes. We emphasize student participation, teacher feedback, and identifying individual areas for improvement.",
  },
  {
    q: "Do you conduct regular tests?",
    a: "Yes. Regular assessments and examination-style practice are an important part of our academic program.",
  },
  {
    q: "Do you provide past-paper practice?",
    a: "Yes. Students are given structured past-paper and examination-style practice as part of their preparation.",
  },
  {
    q: "Can parents receive progress updates?",
    a: "Yes. We encourage communication between teachers, students, and parents regarding academic progress.",
  },
  {
    q: "Do you offer university entry test preparation?",
    a: "Yes. Talent Edge Academy offers structured university entry test preparation focused on concepts, practice, mock testing, examination techniques, and confidence building. Availability may vary by admission cycle.",
  },
  {
    q: "Which entry tests do you prepare students for?",
    a: "We prepare students for ECAT, MDCAT, SAT, GRE, GAT and GMAT. Availability may vary by session and admission cycle — contact the academy for current batches.",
  },
  {
    q: "Can I prepare for more than one entry test?",
    a: "Yes. Many students combine preparation for related tests, such as ECAT with SAT Mathematics or GRE with GAT. Discuss your goals with our team and we will suggest a suitable study plan.",
  },
] as const;

export const PROGRAM_OPTIONS = [
  "O Level Coaching",
  "A Level Coaching",
  "University Entry Test Preparation",
  "Other / Not Sure",
] as const;
