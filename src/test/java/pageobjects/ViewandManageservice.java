package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ViewandManageservice {
    @FindBy(how= How.XPATH,using="//*[@id=\"idViewAllRequest2\"]")

    public static WebElement viewandmanagelink;


}
