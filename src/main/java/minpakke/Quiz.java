package minpakke;

import java.util.*;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by odasteinlandskaug on 19.09.2017.
 */
@Path("/Quiz/")
public class Quiz {
    private static HashMap<String,Quiz_opprett> quiz = new HashMap<String,Quiz_opprett>();


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<Quiz_opprett> getQuiz_opprett(){
        return quiz.values();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void addQuiz(Quiz_opprett quizopprett) {
            quiz.put(quizopprett.getName(), quizopprett);
        }
    }