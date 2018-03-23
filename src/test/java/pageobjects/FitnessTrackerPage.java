package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class FitnessTrackerPage {

    @FindBy(how = How.XPATH, using = "//h2[contains(text(),'Filter')]")
    public static WebElement FitnessFilterTab;

    @FindBy(how = How.XPATH, using = "//h2[contains(text(),'Sort')]")
    public static WebElement FitnessSortTab;

    @FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/fitness-trackers/fitbit/alta-hr#contractType=nonconnected')]")
    public static WebElement FitbitAlta;

    @FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/fitness-trackers/fitbit/charge-2#contractType=nonconnected')]")
    public static WebElement FitbitCharge2;

    @FindBy(how = How.XPATH, using = "(//img[@class='device-image'])[3]")
    public static WebElement RandomFitnesstracker;

    @FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/fitness-trackers/jawbone/up2/#contractType=nonconnected')]")
    public static WebElement JawboneUP2;

    @FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/fitness-trackers/fitbit/ionic#contractType=nonconnected')]")
    public static WebElement FitbitIonic;

}