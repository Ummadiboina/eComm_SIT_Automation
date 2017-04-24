package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Agent_ProductsScreen {
	  
			
		@FindBy(how=How.ID,using="plansTab")
		public static WebElement Tariffs;
		
		@FindBy(how=How.ID,using="devicesTab")
		public static WebElement Devices;
		
		@FindBy(how=How.ID,using="extrasTab")
		public static WebElement Extras;
		
		@FindBy(how=How.ID,using="accesoriesTab")
		public static WebElement Accessories;
		
		@FindBy(how=How.ID,using="checkStoreStock")
		public static WebElement StoreCheck;
	
		@FindBy(how=How.ID,using="startCheckoutFromPrivateBasketButton")
		public static WebElement Checkout;
		
}
