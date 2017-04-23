package pageobjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AdditionalInformationPage {
	
	  @FindBy(how=How.ID,using="passportInfo") 
	  public static WebElement passportInfo;
	  
	  @FindBy(how=How.ID,using="drivingLicence") 
	  public static WebElement drivingLicence;

	  @FindBy(how=How.ID,using="additionalCard") 
	  public static WebElement additionalCard;
	  
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
	
	  
}
