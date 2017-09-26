package minpakke;

import java.util.*;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by odasteinlandskaug on 19.09.2017.
 */
@Path("/Quiz")
public class Quiz {
    private static HashMap<String, Quiz_opprett> quiz = new HashMap<String, Quiz_opprett>();
    private static HashMap<String, Score> score = new HashMap<String, Score>();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<Quiz_opprett> getQuiz_opprett() {
        return quiz.values();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void addQuiz(Quiz_opprett quizopprett) {
        quiz.put(quizopprett.getName(), quizopprett);
    }


    @POST
    @Path("/Score")
    @Consumes(MediaType.APPLICATION_JSON)
    public void addNickName(Score scoress){
        score.put(scoress.getKallenavn(), scoress);
    }

    @GET
    @Path("/Score")
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<Score> getScore(){
        return score.values();
    }

 /**
 @GET
 @Produces(MediaType.APPLICATION_JSON)
 public Collection<Score> getScore(){
 return score.values();
 }

  @POST
  @Path("/{quizName}")
  @Consumes(MediaType.APPLICATION_JSON)
  public void addNick(@PathParam("quizName") String qn, String nick){
  quiz.get(qn).addNick(nick);
  }
 */
}