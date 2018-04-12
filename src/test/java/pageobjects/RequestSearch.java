package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class RequestSearch {

    @FindBy(how= How.ID,using="theCaseNumber")

    public static WebElement RequestNo;
}
