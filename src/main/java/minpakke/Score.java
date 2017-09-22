package minpakke;

import java.io.Serializable;

/**
 * Created by odasteinlandskaug on 21.09.2017.
 */
public class Score implements Serializable {
    public int poengsum;
    public String kallenavn;

    public Score(int poengsum, String kallenavn){
        this.poengsum=poengsum;
        this.kallenavn = kallenavn;
    }

    public int getPoengsum(){
        return poengsum;
    }

    public void setKallenavn(String kallenavn) {
        this.kallenavn = kallenavn;
    }

    public void setPoengsum(int poengsum) {
        this.poengsum = poengsum;
    }

    public String getKallenavn(){
        return kallenavn;
    }

}
