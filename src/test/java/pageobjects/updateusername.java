package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class updateusername {

    @FindBy(how= How.ID,using="adminChngId:MyO2Template:theForm:idTableBody:0:subscriberId")

    public static WebElement username1;

    @FindBy(how=How.XPATH,using="//*[@id=\"adminChngId:MyO2Template:theForm:continueButton\"]/span")

    public static WebElement reviewpage;

}

