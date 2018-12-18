package pageobjects;

import helpers.Environment;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LikenewPage extends Environment {


    @FindBy(how = How.XPATH, using = ("//ul[@class='linksDesktop']//a[contains(text(),'Shop')]"))
    public static WebElement MoveMouseonShop1;
    @FindBy(how = How.XPATH, using = ("//div[@class='linksModuleWrapper']//a[contains(text(),'Like new')]"))
    public static WebElement MoveMouseonLikenew1;
    //div[@class='colour-wrapper qa-selectboxit-colour ng-isolate-scope']//select
    @FindBy(how = How.XPATH, using = ("//div[@class='colour-wrapper qa-selectboxit-colour ng-isolate-scope']//select"))
    public static WebElement SelectColour;
    @FindBy(how = How.XPATH, using = ("(//button[@type='button' or @class='secondary selectButton tst-select'])[1]"))
    public static WebElement SelectDeviceonlySimfree;

    @FindBy(how = How.XPATH, using = ("(//button[@class='secondary selectButton tariff-select buyNowBtn'])[7]"))
    public static WebElement AddtoBasketbutton;
    @FindBy(how = How.XPATH, using = ("//button[@id='dontcap']"))
    public static WebElement Idontwantspendcapbutton;
    @FindBy(how = How.XPATH, using = ("(//input[@value='Add'])[2]"))
    public static WebElement AddAccessories;
    @FindBy(how = How.XPATH, using = ("//*[@id='qa-proceed-to-basket']"))
    public static WebElement Addtobasket;




}
