package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CaseDetails {

    @FindBy(how= How.XPATH,using="//*[@id=\"topButtonRow\"]/input[5]")
    public static WebElement closebtn;

    @FindBy(how= How.XPATH,using="//*[@id=\"cas7\"]")
    public static WebElement statusselect;

    @FindBy(how= How.XPATH,using="//*[@id=\"topButtonRow\"]/input[1]")
    public static WebElement savebtn;
}
