package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class reviewpage1 {

    @FindBy(how= How.XPATH,using="//*[@id=\"adminChngId:MyO2Template:theForm:submitButton\"]/span")

    public static WebElement submitbtn;
}
