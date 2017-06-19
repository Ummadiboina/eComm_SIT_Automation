package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BasecommsPage {

	 
	@FindBy(how=How.XPATH,using="        NEED TO ENTER                   ")
	public static WebElement HeaderCarousal;
	
	@FindBy(how=How.XPATH,using="        NEED TO ENTER                   ")
	public static WebElement StaticSubNav;
	
	@FindBy(how=How.XPATH,using="        NEED TO ENTER                   ")
	public static WebElement SubBanner;
	
	@FindBy(how=How.XPATH,using="        NEED TO ENTER                   ")
	public static WebElement FooterBanner;
	
	
	
	
}
