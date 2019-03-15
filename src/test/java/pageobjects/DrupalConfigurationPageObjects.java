package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DrupalConfigurationPageObjects {

    @FindBy(how = How.XPATH, using = "//ul[@class='admin-list']/li/a/span[normalize-space()='O2 General']")
    public static WebElement o2GeneralLink;

    @FindBy(how = How.XPATH, using = "//label[normalize-space()='Decouple CFA/CFU Tariffs']")
    public static WebElement decoupleCFACFU;

    @FindBy(how = How.XPATH, using = "//details[@id='edit-feature-list']")
    public static WebElement ENABLEDISABLEFEATURES;

    @FindBy(how = How.XPATH, using = "//input[@id='edit-submit']")
    public static WebElement saveConfigCTA;

    @FindBy(how = How.XPATH, using = "//div[contains(normalize-space(),'The configuration options have been saved')]")
    public static WebElement saveConfigMessage;


}
