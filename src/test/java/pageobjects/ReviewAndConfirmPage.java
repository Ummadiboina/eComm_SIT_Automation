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

    @FindBy(how = How.XPATH, using = "//h1[contains(text(),'Good news,')]")
    public static WebElement CurvedBannerGoodnews;
    @FindBy(how = How.XPATH, using = "//div[@id='good-news']//p[contains(text(),'Your order')]")
    public static WebElement CurvedBannerYourordercomplete;

    @FindBy(how = How.XPATH, using = "//div[@class='con-device-name']//span")
    public static WebElement Devicename;



    //a[@id='download']
    @FindBy(how = How.XPATH, using = "//a[@id='download']")
    public static WebElement Downloadyourconfirmationlink;

    @FindBy(how = How.XPATH, using = "//div[@class='order-confirmation']//p")
    public static WebElement Orderconfirmationnumber;


    @FindBy(how = How.XPATH, using = "//p[contains(text(),'See store opening times')]")
    public static WebElement Storeopentimings;

    @FindBy(how = How.XPATH, using = "//div[@class='con-device-name']")
    public static WebElement Devicedetails;

    @FindBy(how = How.XPATH, using = "//div[@class='con-device-memory']")
    public static WebElement Devicecolorcapacity;

    @FindBy(how = How.XPATH, using = "//div[@class='con-tariff-summary']//span[@class='get-data']")
    public static WebElement Tariffdetails;


    @FindBy(how = How.XPATH, using = "//ul[@class='acc-list']")
    public static WebElement Accessoriesdetails;

    @FindBy(how = How.XPATH, using = "//div[@class='order-confirmation']//span[@id='order-id']")
    public static WebElement OrderNumber;



    @FindBy(how = How.XPATH, using = "//a[@id='download']")
    public static WebElement Downloadyourorderconfirmation;








}
