package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Agent_ConfirmationPage {
	
		@FindBy(how=How.ID,using="sharedBasketContents")
		public static WebElement sharedBasketContents;

		@FindBy(how=How.ID,using="orderContent")
		public static WebElement orderContent;

		@FindBy(how=How.ID,using="orderContentRefer")
		public static WebElement orderContentRefer;

		@FindBy(how=How.ID,using="customer-details")
		public static WebElement customerPaymentdetails;
		
		@FindBy(how=How.ID,using="payDecline")
		public static WebElement payDecline;
					
}
