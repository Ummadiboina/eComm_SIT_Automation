package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Agent_AdvisoryPage {


    //	@FindBy(how=How.ID,using="customerDetailsProceedButton")
    //	public static WebElement AgreeAdvsioryCheck;

    @FindBy(how = How.XPATH, using = "//*[@id='customerDetailsProceedButton']")
    public static WebElement AgreeAdvsioryCheckYes;


    @FindBy(how = How.XPATH, using = "//input[@id='ccaEmail']")
    public static WebElement ccaEmail;

    @FindBy(how = How.XPATH, using = "//input[@name='houseNum']")
    public static WebElement houseNum;

    @FindBy(how = How.XPATH, using = "//input[@name='postcode']")
    public static WebElement postalCode;

    @FindBy(how = How.XPATH, using = "//input[@class='findAddressBtn']")
    public static WebElement findAddressBtn;

    @FindBy(how = How.XPATH, using = "(//input[@class='selectAddrBtn'])[1]")
    public static WebElement slectAddress1;

    @FindBy(how = How.ID, using = "customerDetailsProceedButton")
    public static WebElement yesBtn;





    ////////////////////////////////////Trade In/////////////////////////////////


}
