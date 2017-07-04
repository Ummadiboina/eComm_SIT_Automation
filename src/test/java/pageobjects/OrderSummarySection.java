package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class OrderSummarySection {
	@FindBy(how = How.XPATH, using = "//*[@id='stock-extended-message-single']")
	public static WebElement StockExtMessage;
	
	@FindBy(how = How.XPATH, using = "//*[@id='basket-delivery']/td/div/p[2]")
	public static WebElement StockExtMessageDelText;
	
	
}