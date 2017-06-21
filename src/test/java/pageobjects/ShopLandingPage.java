package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class ShopLandingPage {
	
	//The below webelement is not right need to edit this
	@FindBy(how=How.XPATH,using="(//a[contains(text(),'Remove')])[1]") 
	public static WebElement Homepagelink;
	

@FindBy(how=How.XPATH,using="//a[contains(@href, 'o2.co.uk/signin')]") 
	public static WebElement SignInLink;
}
