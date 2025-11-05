import { all } from "axios";
import lessons from "../../../../../../shared/lessons.json" with { type: "json" };

//combine every field list into one all lessons list  
const allLessons = Object.keys(lessons).reduce((acc, key) => [...acc, ...lessons[key]], [])

/** 
 * @param {String} LessonName - Lesson name which is checked if exists in the lesson.json file 
 * @returns bool if lesson is valid
 */
export default function CheckIfLessonIsValid(LessonName){            
  return allLessons.includes(LessonName); 
}

