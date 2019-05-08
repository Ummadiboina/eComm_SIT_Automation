package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Agent_ConfirmationPage {

		@FindBy(how=How.XPATH,using="//div[@id='sharedBasketContents']/div[@class='basketContents']")
		public static WebElement sharedBasketContents;

		@FindBy(how=How.XPATH,using="//*[@id='orderContent']/p")
		public static WebElement orderContent;

		@FindBy(how=How.XPATH,using="//span[@class='orderNumber']")
		public static WebElement orderNumber;

		@FindBy(how=How.ID,using="orderContentRefer")
		public static WebElement orderContentRefer;

		@FindBy(how=How.ID,using="customer-details")
		public static WebElement customerPaymentdetails;
		
		@FindBy(how=How.ID,using="payDecline")
		public static WebElement payDecline;

		//@FindBy(how=How.XPATH,using="//input[@name='submit']")
		
		@FindBy(how=How.XPATH,using=".//*[@id='placeOrderForm']/input[@class='placeOrder']")
		public static WebElement SubmitOrder;

		@FindBy(how = How.XPATH, using = "//div[@id='msisdn-confirmation-msg-id']")
		public static WebElement ofComStatusMsg;

		@FindBy(how = How.XPATH, using = "//div[@id='msisdn-confirmation-msg-id']/p[1]")
		public static WebElement ofComStatusMsgCustomerNewNum;

		@FindBy(how = How.XPATH, using = "//label[@id='pacnpac-error']")
		public static WebElement emptyPACSTACcodeError;

					
}
