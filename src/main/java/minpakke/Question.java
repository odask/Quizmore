package minpakke;

/**
 * Created by odasteinlandskaug on 22.09.2017.
 */
public class Question {
    public String questions;
    public String[] answers;
    public int[] checkboxes;

    public Question(){
    }

    public String[]getAnswers(){
        return answers;
    }

    public String getQuestions() {
        return questions;
    }

    public int[] getCheckboxes() {
        return checkboxes;
    }

    public void setCheckboxes(int[] checkboxes) {
        this.checkboxes = checkboxes;
    }

    public void setAnswers(String[] answers){
        this.answers = answers;
    }

    public void setQuestions(String questions) {
        this.questions = questions;
    }
}
