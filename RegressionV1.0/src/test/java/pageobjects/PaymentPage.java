package pageobjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class PaymentPage {
	
	  
	  
	  @FindBy(how=How.ID,using="accountName") 
	  public static WebElement Name_On_Account;
	  
	  @FindBy(how=How.ID,using="accountNumber") 
	  public static WebElement Account_Number;
	  
	  @FindBy(how=How.ID,using="sortCodePart1") 
	  public static WebElement Sort_Code1;
	  
	  @FindBy(how=How.ID,using="sortCodePart2") 
	  public static WebElement Sort_Code2;
	  
	  @FindBy(how=How.ID,using="sortCodePart3") 
	  public static WebElement Sort_Code3;
	  
	  @FindBy(how=How.ID,using="accept-terms") 
	  public static WebElement Accept_Terms_Checkbox;
	  
	  @FindBy(how=How.ID,using="years") 
	  public static WebElement Stay_Address_Years;
	  
	  @FindBy(how=How.ID,using="months") 
	  public static WebElement Stay_Address_months;
	  
	  @FindBy(how=How.ID,using="confirm-address") 
	  public static WebElement Confirm_Address_Checkbox;  
	  
	  @FindBy(how=How.ID,using="txtCardHolderName") 
	  public static WebElement Name_On_Card;
	  
	  @FindBy(how=How.ID,using="txtCardNumber") 
	  public static WebElement Card_Number;
	  
	  @FindBy(how=How.ID,using="txtMonth") 
	  public static WebElement Expiry_Month;
	  
	  @FindBy(how=How.ID,using="txtYr") 
	  public static WebElement Expiry_Year;
	  
	  @FindBy(how=How.ID,using="txtSecurityCode")
	  public static WebElement CVV_Security_Code;
	  
	  @FindBy(how=How.ID,using="btnPayNow") 
	  public static WebElement Continue_Next_Step;
	    
	  @FindBy(how=How.XPATH,using="//tbody/tr[2]/td[2]/b/input[1]") 
		public static WebElement checkoutPassword;
  
	  @FindBy(how=How.XPATH,using="//tbody/tr[4]/td[2]/b/input") 
		public static WebElement CheckoutSubmitbutton;
		
	  @FindBy(how=How.ID,using="upfront-payment-amount") 
	  public static WebElement UpfrontPaymentAmount;
	  
	  @FindBy(how=How.XPATH,using="//table[@class='basket-table']") 
	  public static WebElement BasketContent;
	  
	  
	  @FindBy(how=How.ID,using="housenumber")
		public static WebElement housenumber;
	  
	  
	  @FindBy(how=How.ID,using="postcode")
		public static WebElement postcode;
	  
	  @FindBy(how=How.ID,using="postcode-submit")
		public static WebElement postcodesubmit;
	  
	  @FindBy(how=How.XPATH,using="//*[@id='address-selection']/li/div/p/a") 
		public static WebElement Selectaddress;
	
	  @FindBy(how=How.ID,using=("basket-total"))
		public static WebElement BasketTotal;
}
