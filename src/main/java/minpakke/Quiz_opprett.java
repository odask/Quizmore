package minpakke;

import java.util.ArrayList;


/**
 * Created by odasteinlandskaug on 19.09.2017.
 */
public class Quiz_opprett {
    private String name;
    private String time;
    private String timePerQuestion;
    private Question[] questions;
    private ArrayList<Score> scores = new ArrayList<>();

    public Quiz_opprett(){
    }

    public void setScores(ArrayList<Score> scores) {
        this.scores = scores;
    }

    public ArrayList<Score> getScores() {
        return scores;
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

    public void addScore(Score score){
        System.out.println(scores.size());
        scores.add(score);
        System.out.println(scores.size());
    }

    public void updateScore(String nick, int score){
        for(int i = 0; i < scores.size(); i++){
            if(nick.equals(scores.get(i))){
                scores.get(i).setPoengsum(score);
            }
        }
    }

}