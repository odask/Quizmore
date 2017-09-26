package minpakke;

import java.io.Serializable;

/**
 * Created by odasteinlandskaug on 21.09.2017.
 */
public class Score{

    public String poengsum;
    public String kallenavn;

    public Score(){}

    public String getPoengsum(){
        return poengsum;
    }

    public void setKallenavn(String kallenavn) {
        this.kallenavn = kallenavn;
    }

    public void setPoengsum(String poengsum) {
        this.poengsum = poengsum;
    }

    public String getKallenavn(){
        return kallenavn;
    }

}
