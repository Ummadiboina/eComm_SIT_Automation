package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class OrderConfirmationPage {

	@FindBy(how = How.ID, using = "terms")
	public static WebElement TermsCheckBox;

	@FindBy(how = How.XPATH, using = "//*[@id='order-number']/h2")
	public static WebElement Message;

	@FindBy(how = How.XPATH, using = "//*[@id='order-number']/p")
	public static WebElement OrderconfirmationMessage;

	@FindBy(how = How.XPATH, using = "//*[@id='delivery-section']")
	public static WebElement deliverySection;

	@FindBy(how = How.XPATH, using = "//*[@id='imsMessage']")
	public static WebElement imsMessage;
	
	//@FindBy(how = How.XPATH, using = "//*[@id='contract-message']")
	@FindBy(how = How.ID, using = "contract-message")
	public static WebElement OrderContractMessageOC;
	
	@FindBy(how = How.ID, using = "order-id")
	public static WebElement orderid;
	
	@FindBy(how = How.XPATH, using = "//*[@id='confirmation']/div/div[1]")
	public static WebElement FreesimOrderConfirmation;

	//GDPR new consent
	@FindBy(how = How.XPATH, using = "(//span[normalize-space()='Choose your preferences'])[1]")
	public static WebElement ChooseYourPreferences;

	@FindBy(how = How.XPATH, using = "//div[@data-label='check1']/input")
	public static WebElement O2Products;

	@FindBy(how = How.XPATH, using = "//div[@data-label='check2']/input")
	public static WebElement O2PerksAndExtras;

	@FindBy(how = How.XPATH, using = "//div[@data-label='check3']/input")
	public static WebElement OffersFromO2Partner;

	@FindBy(how = How.XPATH, using = "//div[@data-label='check4']/input")
	public static WebElement PartnersContacting;

	@FindBy(how = How.XPATH, using = "//div[@data-label='checkcontact1']/input")
	public static WebElement Contact_Text;

	@FindBy(how = How.XPATH, using = "//div[@data-label='checkcontact2']/input")
	public static WebElement Contact_Email;

	@FindBy(how = How.XPATH, using = "//div[@data-label='checkcontact3']/input")
	public static WebElement Contact_Phone;

	@FindBy(how = How.XPATH, using = "//div[@data-label='checkcontact4']/input")
	public static WebElement Contact_Post;

	@FindBy(how = How.XPATH, using = "//span[normalize-space()='Save my preferences']")
	public static WebElement SaveMyPreferences;

	@FindBy(how = How.XPATH, using = "//img[@id='u1306_img']")
	public static WebElement SavedPreferenceMessage;


}
