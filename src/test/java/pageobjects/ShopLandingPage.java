package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

public class ShopLandingPage {

	// The below webelement is not right need to edit this
	@FindBy(how = How.XPATH, using = "(//a[contains(text(),'Remove')])[1]")
	public static WebElement Homepagelink;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, 'o2.co.uk/signin')]")
	public static WebElement SignInLink;
	
	@FindBy(how = How.XPATH, using = "//a[contains(@href, 'o2.co.uk/logout')]")
	public static WebElement SignOutLink;
	
	@FindBy(how = How.XPATH, using = "//a[@class='box-close']")
	public static WebElement ClosePopUp;

	@FindBy(how = How.XPATH, using = "//*[@class='heading']")
	public static WebElement CookiePopUp;

/*	@FindBy(how = How.XPATH, using = "/*//*[@class='close-icon']")
	public static WebElement CookieClose;*/

	@FindBy(how = How.XPATH, using = "//a[contains(text(),'cookie policy')]")
	public static WebElement CookiesPolicyClick;

	@FindBy(how = How.XPATH, using = "//a[contains(text(),'manage cookies')]")
	public static WebElement ManageCookiesClick;

	@FindBy(how = How.XPATH, using = "//div[@component-name='cookieDialog']/div/a[@class='close-icon']")
	public static WebElement CookieClose;

	@FindAll({ @FindBy(how = How.XPATH, using = "//p[contains(text(),'Cookies on O2')]")})
	public static List<WebElement> CookieSection;
}
