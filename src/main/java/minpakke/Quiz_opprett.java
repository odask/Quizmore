package minpakke;

/**
 * Created by odasteinlandskaug on 19.09.2017.
 */
public class Quiz_opprett {
    private String name;
    private String time;
    private Question[] questions;

    public Quiz_opprett(){
    }

    public Question[] getQuestions() {
        return questions;
    }

    public String getTime() {
        return time;
    }

    public String getName(){
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setQuestions(Question[] questions) {
        this.questions = questions;
    }
}
