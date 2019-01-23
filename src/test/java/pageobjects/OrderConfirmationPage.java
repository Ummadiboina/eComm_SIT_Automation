package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class OrderConfirmationPage {

	@FindBy(how = How.ID, using = "terms")
	public static WebElement TermsCheckBox;

	@FindBy(how = How.XPATH, using = "//*[@id='order-number']/h2")
	public static WebElement Message;

	@FindBy(how = How.XPATH, using = "//*[@id='order-number'] | //div[@class='order-confirmation']/p")
	public static WebElement OrderconfirmationMessage;

	@FindBy(how = How.XPATH, using = "//*[@id='delivery-section'] | //div[@class='main-order']/div/div/div[3]/div[2]")
	public static WebElement deliverySection;

	@FindBy(how = How.XPATH, using = "//*[@id='imsMessage'] | //div[@class='order-status-text']")
	public static WebElement imsMessage;
	
	//@FindBy(how = How.XPATH, using = "//*[@id='contract-message']")
	@FindBy(how = How.ID, using = "contract-message")
	public static WebElement OrderContractMessageOC;
	
	@FindBy(how = How.XPATH, using = "//*[@id='order-number'] | //div[@class='order-confirmation']/p")
	public static WebElement orderid;

	@FindBy(how = How.XPATH, using = "//*[@id='confirmation']/div/div[1]")
	public static WebElement FreesimOrderConfirmation;

	//GDPR new consent
	@FindBy(how = How.XPATH, using = "//div[@class='choose-preferences-bar']/a")
	public static WebElement ChooseYourPreferences;

	@FindBy(how = How.XPATH, using = "//input[@id='B1']")
	public static WebElement O2Products;

	@FindBy(how = How.XPATH, using = "//label[@for='B1']")
	public static WebElement O2Products_Text;

	@FindBy(how = How.XPATH, using = "//a[@data-overlay='B1']")
	public static WebElement O2Products_Link;

	@FindBy(how = How.XPATH, using = "//div[@class='overlay-box B1']//a[@class='boxclose']")
	public static WebElement O2ProductsClose_CloseButton;


	@FindBy(how = How.XPATH, using = "//input[@id='B2']")
	public static WebElement O2PerksAndExtras;

	@FindBy(how = How.XPATH, using = "//label[@for='B2']")
	public static WebElement O2PerksAndExtras_Text;

	@FindBy(how = How.XPATH, using = "//a[@data-overlay='B2']")
	public static WebElement O2PerksAndExtras_Link;

	@FindBy(how = How.XPATH, using = "//div[@class='overlay-box B2']//a[@class='boxclose']")
	public static WebElement O2PerksAndExtras_CloseButton;

	@FindBy(how = How.XPATH, using = "//input[@id='B3']")
	public static WebElement OffersFromO2Partner;

	@FindBy(how = How.XPATH, using = "//label[@for='B3']")
	public static WebElement OffersFromO2Partner_Text;

	@FindBy(how = How.XPATH, using = "//a[@data-overlay='B3']")
	public static WebElement OffersFromO2Partner_Link;

	@FindBy(how = How.XPATH, using = "//div[@class='overlay-box B3']//a[@class='boxclose']")
	public static WebElement OffersFromO2Partner_CloseButton;

	@FindBy(how = How.XPATH, using = "//input[@id='B4']")
	public static WebElement PartnersContacting;

	@FindBy(how = How.XPATH, using = "//label[@for='B4']")
	public static WebElement PartnersContacting_Text;

	@FindBy(how = How.XPATH, using = "//a[@data-overlay='B4']")
	public static WebElement PartnersContacting_Link;

	@FindBy(how = How.XPATH, using = "//div[@data-label='Close button - partners contacting me directly']")
	public static WebElement PartnersContacting_CloseButton;

	@FindBy(how = How.XPATH, using = "//input[@id='CP_Text']")
	public static WebElement Contact_Text;

	@FindBy(how = How.XPATH, using = "//input[@id='CP_E-mail']")
	public static WebElement Contact_Email;



	@FindBy(how = How.XPATH, using = "//input[@id='CP_Phone']")
	public static WebElement Contact_Phone;


	@FindBy(how = How.XPATH, using = "//input[@id='CP_Post']")
	public static WebElement Contact_Post;

	@FindBy(how = How.ID, using = "saveMyPrefernces")
	public static WebElement SaveMyPreferences;

	@FindBy(how = How.XPATH, using = "//span[@class='saveMsg']")
	public static WebElement SavedPreferenceMessage;

	@FindBy(how = How.XPATH, using = "//div[@class='overlay-box B1']//p")
	public static WebElement O2Products_OverlayText;

	@FindBy(how = How.XPATH, using = "//div[@class='overlay-box B2']//p")
	public static WebElement O2PerksAndExtras_OverlayText;

	@FindBy(how = How.XPATH, using = "//div[@class='overlay-box B3']//p")
	public static WebElement OffersFromO2Partner_OverlayText;

	@FindBy(how = How.XPATH, using = "//div[@class='overlay-box B4']//p")
	public static WebElement PartnersContacting_OverlayText;

	@FindBy(how = How.XPATH, using = "//p[contains(text(),'Spend Cap')]")
	public static WebElement BillSpendCapHeader;

	@FindBy(how = How.XPATH, using = "//div[contains(text(),'Spend Cap')]")
	public static WebElement AppliedBillCap;

}
