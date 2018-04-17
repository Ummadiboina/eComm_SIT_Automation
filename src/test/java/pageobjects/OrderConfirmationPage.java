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

	@FindBy(how = How.XPATH, using = "//div[@data-label='check1']//p/span")
	public static WebElement O2Products_Text;

	@FindBy(how = How.XPATH, using = "//div[@data-label='Hotspot - O2 products']")
	public static WebElement O2Products_Link;

	@FindBy(how = How.XPATH, using = "//div[@data-label='Close button - O2 products']")
	public static WebElement O2ProductsClose_CloseButton;


	@FindBy(how = How.XPATH, using = "//div[@data-label='check2']/input")
	public static WebElement O2PerksAndExtras;

	@FindBy(how = How.XPATH, using = "//div[@data-label='check2']//p/span")
	public static WebElement O2PerksAndExtras_Text;

	@FindBy(how = How.XPATH, using = "//div[@data-label='Hotspot - O2 perks and extras']")
	public static WebElement O2PerksAndExtras_Link;

	@FindBy(how = How.XPATH, using = "//div[@data-label='Close button - O2 perks and extras']")
	public static WebElement O2PerksAndExtras_CloseButton;

	@FindBy(how = How.XPATH, using = "//div[@data-label='check3']/input")
	public static WebElement OffersFromO2Partner;

	@FindBy(how = How.XPATH, using = "//div[@data-label='check3']//p/span")
	public static WebElement OffersFromO2Partner_Text;

	@FindBy(how = How.XPATH, using = "//div[@data-label='Hotspot - offers from o2 partners brands']")
	public static WebElement OffersFromO2Partner_Link;

	@FindBy(how = How.XPATH, using = "//div[@data-label='Close button - offers from partners and brands']")
	public static WebElement OffersFromO2Partner_CloseButton;

	@FindBy(how = How.XPATH, using = "//div[@data-label='check4']/input")
	public static WebElement PartnersContacting;

	@FindBy(how = How.XPATH, using = "//div[@data-label='check4']//p/span")
	public static WebElement PartnersContacting_Text;

	@FindBy(how = How.XPATH, using = "//div[@data-label='Hotspot - partners contacting me directly']")
	public static WebElement PartnersContacting_Link;

	@FindBy(how = How.XPATH, using = "//div[@data-label='Close button - partners contacting me directly']")
	public static WebElement PartnersContacting_CloseButton;

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

	@FindBy(how = How.XPATH, using = "//span[normalize-space()='O2Products_OverlayText']")
	public static WebElement O2Products_OverlayText;

	@FindBy(how = How.XPATH, using = "//span[normalize-space()='O2PerksAndExtras_OverlayText']")
	public static WebElement O2PerksAndExtras_OverlayText;

	@FindBy(how = How.XPATH, using = "//span[normalize-space()='OffersFromO2Partner_OverlayText']")
	public static WebElement OffersFromO2Partner_OverlayText;

	@FindBy(how = How.XPATH, using = "//span[normalize-space()='PartnersContacting_OverlayText']")
	public static WebElement PartnersContacting_OverlayText;


}
