const mongoose = require('mongoose');

mongoose.connect('timetable.mongodb://localhost/TimeTableDB', { useNewUrlParser: true, useUnifiedTopology: true });

const lecturerSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
});

const Lecturer = mongoose.model('Lecturer', lecturerSchema);

const callScheduleSchema = new mongoose.Schema({
  subject_number: { type: Number, required: true },
  time_start: { type: String, required: true },
  time_end: { type: String, required: true },
});

const CallSchedule = mongoose.model('CallSchedule', callScheduleSchema);

const courseSchema = new mongoose.Schema({});

const Course = mongoose.model('Course', courseSchema);

const degreeSchema = new mongoose.Schema({
  degree_of_study: { type: Number, required: true },
});

const Degree = mongoose.model('Degree', degreeSchema);

const instituteSchema = new mongoose.Schema({
  name_of_the_institute: { type: String, required: true },
});

const Institute = mongoose.model('Institute', instituteSchema);

const studyGroupSchema = new mongoose.Schema({
  group_name: { type: String, required: true },
  id_institute: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute' },
  id_of_course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  id_degree: { type: mongoose.Schema.Types.ObjectId, ref: 'Degree' },
});

const StudyGroup = mongoose.model('StudyGroup', studyGroupSchema);

const timetableSchema = new mongoose.Schema({
  id_to_group: { type: mongoose.Schema.Types.ObjectId, ref: 'StudyGroup' },
  subject_to_number: { type: Number, required: true },
  id_lectur: { type: mongoose.Schema.Types.ObjectId, ref: 'Lecturer' },
  subject_title: { type: String, required: true },
  auditorium: { type: String },
  day_week: { type: Number, required: true },
  type_of_week: { type: Number, required: true },
});

const Timetable = mongoose.model('Timetable', timetableSchema);

const callSchedule1 = new CallSchedule({
  subject_number: 1,
  time_start: '9:00:00',
  time_end: '10:30:00',
});
callSchedule1.save();
const callSchedule2 = new CallSchedule({
  subject_number: 2,
  time_start: '10:40:00',
  time_end: '12:10:00',
});
callSchedule2.save();
const callSchedule3 = new CallSchedule({
  subject_number: 3,
  time_start: '12:40:00',
  time_end: '14:10:00',
});
callSchedule3.save();
const callSchedule4 = new CallSchedule({
  subject_number: 4,
  time_start: '14:20:00',
  time_end: '15:50:00',
});
callSchedule4.save();
const callSchedule5 = new CallSchedule({
  subject_number: 5,
  time_start: '16:20:00',
  time_end: '17:50:00',
});
callSchedule5.save();
const callSchedule6 = new CallSchedule({
  subject_number: 6,
  time_start: '18:00:00',
  time_end: '19:30:00',
});
callSchedule6.save();
const callSchedule7 = new CallSchedule({
  subject_number: 7,
  time_start: '18:30:00',
  time_end: '20:00:00',
});
callSchedule7.save();
const callSchedule8 = new CallSchedule({
  subject_number: 8,
  time_start: '20:10:00',
  time_end: '21:40:00',
});
callSchedule8.save();

const degree1 = new Degree({ degree_of_study: 'Бакалавриат' });
degree1.save();
const degree2 = new Degree({ degree_of_study: 'Специалитет' });
degree2.save();
const degree3 = new Degree({ degree_of_study: 'Магистратура' });
degree3.save();
const degree4 = new Degree({ degree_of_study: 'Аспирантура' });
degree4.save();

const course1 = new Course({ number: 1 });
course1.save();
const course2 = new Course({ number: 2 });
course2.save();
const course3 = new Course({ number: 3 });
course3.save();
const course4 = new Course({ number: 4 });
course4.save();
const course5 = new Course({ number: 5 });
course5.save();
const course6 = new Course({ number: 6 });
course6.save();

mongoose.connection.close();