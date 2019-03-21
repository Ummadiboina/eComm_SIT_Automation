package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Drupal_PageObjects {

    @FindBy(how = How.XPATH, using = "//input[@id='edit-name']")
    public static WebElement Username;

    @FindBy(how = How.XPATH, using = "//input[@id='edit-pass']")
    public static WebElement Password;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement Login;

    @FindBy(how = How.XPATH, using= "//a[@href='/admin/config']")
    public static WebElement configurationTab;

    @FindBy(how = How.XPATH, using= "//a[@href='/admin/shop-content']")
    public static WebElement shopTab;

}
