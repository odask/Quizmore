package minpakke;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by odasteinlandskaug on 19.09.2017.
 */
public class Quiz_opprett {
    private String name;
    private String time;
    private String timePerQuestion;
    private Question[] questions;

    public Quiz_opprett(){
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }


    public String getName(){
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public void setTimePerQuestion(String timePerQuestion) {
        this.timePerQuestion = timePerQuestion;
    }

    public String getTimePerQuestion() {
        return timePerQuestion;
    }

    public Question[] getQuestions() {
        return questions;
    }

    public void setQuestions(Question[] questions) {
        this.questions = questions;
    }
}