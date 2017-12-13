package pageobjects;

import helpers.Environment;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

public class ReviewAndConfirmPage extends Environment {

    @FindBy(how = How.XPATH, using = "//*[@class='heading']")
    public static WebElement RevConfHeading;

    @FindBy(how = How.XPATH, using = "//*[@class='nav-primary']")
    public static WebElement PrimaryNav;

    @FindBy(how = How.XPATH, using = "//*[@id='checkout-progress-bar-xxl']")
    public static WebElement ProgressBar;

    @FindBy(how = How.XPATH, using = "//*[@class='basket-container']")
    public static WebElement OrderSummarySSC;

    @FindBy(how = How.XPATH, using = "//*[@class='msdin-selector']/p[2]")
    public static WebElement MSISDNLabel;




}
