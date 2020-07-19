import Question from '@/models/management/Question';
import AnswerDetails from '@/models/management/questions/AnswerDetails';
import MultipleChoiceAnswerType from '@/models/management/questions/MultipleChoiceAnswerDetails';
import { createAnswerDetails } from '@/services/QuestionHelpers';

export class QuestionAnswer {
  question!: Question;
  answerDetails: AnswerDetails = new MultipleChoiceAnswerType();

  constructor(jsonObj?: QuestionAnswer) {
    if (jsonObj) {
      this.question = new Question(jsonObj.question);
      this.answerDetails = createAnswerDetails(jsonObj.answerDetails);
    }
  }
}
