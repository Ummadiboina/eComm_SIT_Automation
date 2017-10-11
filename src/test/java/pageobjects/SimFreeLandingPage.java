
package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SimFreeLandingPage {


    //Like New Sim Free Link
    @FindBy(how = How.XPATH, using = "//a[@href='https://www.o2.co.uk/shop/like-new/sim-free-phones'][1]")
    public static WebElement LikeNewSimFree;

    //Like New Pay as you Go Link
    @FindBy(how = How.XPATH, using = "//a[@href='https://www.o2.co.uk/shop/phones/?contractType=payasyougo#condition=likenew&sort=content.sorting.featured'][1]")
    public static WebElement LikeNewPayAsYouGo;

    //Like New Pay Monthly Link
    @FindBy(how = How.XPATH, using = "//a[@href='https://www.o2.co.uk/shop/phones/#condition=likenew&sort=content.sorting.featured'][1]")
    public static WebElement LikeNewPayMonthly;
}
