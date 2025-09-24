import lessons from "../../../../../../shared/lessons.json" with { type: "json" };

/** 
 * @param {String} LessonName - Lesson name which is checked if exists in the lesson.json file 
 * @returns bool if lesson is valid
 */
export default function CheckIfLessonIsValid(LessonName){  
  //expects the lesson.json to be a list      
  return lessons.includes(LessonName);
}

