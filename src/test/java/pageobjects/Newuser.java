package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Newuser {
    @FindBy(how= How.XPATH,using="//*[@id=\"idCreateLink\"]")

    public static WebElement contactdatelnk;


}
