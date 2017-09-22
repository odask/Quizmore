package minpakke;

import java.util.Comparator;

/**
 * Created by odasteinlandskaug on 21.09.2017.
 */

public class ScoreCompare implements Comparator<Score> {
    public int compare(Score score1, Score score2) {

        int sc1 = score1.getPoengsum();
        int sc2 = score2.getPoengsum();

        if (sc1 > sc2){
            return -1;
        }else if (sc1 < sc2){
            return +1;
        }else{
            return 0;
        }
    }
}