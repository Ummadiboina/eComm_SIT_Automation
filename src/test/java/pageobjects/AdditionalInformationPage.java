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
	  public static WebElement CardHolderName;
	  
	  @FindBy(how=How.ID,using="txtCardNumber") 
	  public static WebElement CardNumber;
	  
	  @FindBy(how=How.ID,using="txtMonth") 
	  public static WebElement CardMonth;
	  
	  @FindBy(how=How.ID,using="txtYr") 
	  public static WebElement CardYear;
	  
	  @FindBy(how=How.ID,using="txtSecurityCode")
	  public static WebElement SecurityCode;
	  
	  @FindBy(how=How.ID,using="btnPayNow") 
	  public static WebElement Continue_Next_Step;

	  //Below is for Driving licence field
	@FindBy(how=How.XPATH,using="//legend/span")
	public static WebElement DrivingLicenceNumberText;

	@FindBy(how=How.XPATH,using="//div[@id='input-dl-postcode']/div/label")
	public static WebElement PostCodeText;

	@FindBy(how=How.ID,using="driving-licence1")
	public static WebElement DrivingLicenceNumberText1;

	@FindBy(how=How.ID,using="driving-licence2")
	public static WebElement DrivingLicenceNumberText2;

	@FindBy(how=How.ID,using="driving-licence3")
	public static WebElement DrivingLicenceNumberText3;

	@FindBy(how=How.ID,using="driving-licence4")
	public static WebElement DrivingLicenceNumberText4;

	@FindBy(how=How.ID,using="dl-postcode")
	public static WebElement PostCode;


	//Below is for Passport field
	@FindBy(how=How.XPATH,using="//div[@id='input-country-code']/div/label")
	public static WebElement CountryCodeText;

	@FindBy(how=How.XPATH,using="//legend[contains(text(),'Passport')]")
	public static WebElement PassportNumberText;

	@FindBy(how=How.ID,using="country-code")
	public static WebElement CountryCode;

	@FindBy(how=How.ID,using="passport-number1")
	public static WebElement Passportnumber1;

	@FindBy(how=How.ID,using="passport-number2")
	public static WebElement Passportnumber2;

	@FindBy(how=How.ID,using="passport-number3")
	public static WebElement Passportnumber3;

	@FindBy(how=How.ID,using="passport-number4")
	public static WebElement Passportnumber4;

	@FindBy(how=How.ID,using="passport-number5")
	public static WebElement Passportnumber5;

	@FindBy(how=How.ID,using="passport-number6")
	public static WebElement Passportnumber6;

	@FindBy(how=How.ID,using="passport-number7")
	public static WebElement Passportnumber7;

	@FindBy(how=How.XPATH,using="//label[@for='otac']")
	public static WebElement EnterOtacCodeText;

}
