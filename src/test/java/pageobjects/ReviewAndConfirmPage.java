package pageobjects;

import helpers.Environment;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

public class ReviewAndConfirmPage extends Environment {

    @FindBy(how = How.XPATH, using = "//*[@class='heading']")
    public static WebElement RevConfHeading;

    @FindBy(how = How.XPATH, using = "(//p[@class='section-heading'])[1]")
    public static WebElement firstSection;

    @FindBy(how = How.XPATH, using = "(//p[@class='section-heading'])[2]/span")
    public static WebElement secondSection;

    @FindBy(how = How.XPATH, using = "(//p[@class='section-heading'])[3]")
    public static WebElement thirdSection;

    @FindBy(how = How.XPATH, using = "(//p[@class='section-heading'])[4]")
    public static WebElement forthSection;

    @FindBy(how = How.XPATH, using = "(//p[@class='section-heading'])[5]")
    public static WebElement fifthSection;

    @FindBy(how = How.XPATH, using = "//*[@class='nav-primary']")
    public static WebElement PrimaryNav;

    @FindBy(how = How.XPATH, using = "//*[@id='checkout-progress-bar-xxl']")
    public static WebElement ProgressBar;

    @FindBy(how = How.XPATH, using = "//*[@class='basket-container']")
    public static WebElement OrderSummarySSC;

    @FindBy(how = How.XPATH, using = "//*[@class='msdin-selector']/p[2]")
    public static WebElement MSISDNLabel;

    @FindBy(how = How.XPATH, using = "//*[@class='default-content-container about-you-title']")
    public static WebElement AboutYouLabel;

    @FindBy(how = How.XPATH, using = "//*[@class='form-element-container error-section']")
    public static WebElement AboutYouSection;

    @FindBy(how = How.XPATH, using = "//a[normalize-space()='Use a different address'] | //a[@id='pre-selected-delivery-address']")
    public static WebElement DeliveryPageUseDiffAddressLink;

}
