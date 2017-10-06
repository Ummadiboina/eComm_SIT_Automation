package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class checkStoreStockForPayG {
	
	//click the checkStoreStock for Pay&G
	@FindBy(how = How.ID, using = ("checkStoreStock"))
	public static WebElement checkStoreStockBtn;
	
	
	//enter the postal code in text box
	@FindBy(how = How.ID, using = ("postcode"))
	public static WebElement postcodeTxt;
	
	//click on search button
		@FindBy(how = How.ID, using = ("findStores"))
		public static WebElement findStoreSearchBtn;
	
	//select the store address
	@FindBy(how = How.XPATH, using = ("(//input[@value='Select Store'])[1]"))
	public static WebElement selectStoreAddress;
	
}
