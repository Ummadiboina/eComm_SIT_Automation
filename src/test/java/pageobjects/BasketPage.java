package pageobjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BasketPage {

	// @FindBy(how=How.ID,using="homeDelivery")

	@FindBy(how = How.XPATH, using = "//p[@class='contract-copy ng-scope']")
	public static WebElement OrderContractMessageBP;

	@FindBy(how = How.XPATH, using = "//div[@class='contract-copy-wrapper']/p[1]")
	public static WebElement OrderContractMessageDDPOBP1;

	@FindBy(how = How.XPATH, using = "//div[@class='contract-copy-wrapper']/p[2]")
	public static WebElement OrderContractMessageDDPOBP2;

	@FindBy(how = How.XPATH, using = "(//a[contains(text(),'Remove')])[1]")
	public static WebElement DeviceRemovebtn;

	@FindBy(how = How.XPATH, using = "(//a[contains(text(),'Remove')])[2]")
	public static WebElement tariffRemovebtn;

	/*@FindBy(how = How.XPATH, using = "/*//*[@class='basket-nav']/div[@class='proceed-checkout']")
	public static WebElement checkoutbtn;
*/
	@FindBy(how = How.XPATH, using = "//*[@class='basket-nav']/div[@class='proceed-checkout']/form//input[@name='securecheckout']")
	public static WebElement checkoutbtn;

	@FindBy(how = How.XPATH, using = "//h2[normalize-space()='Your order']")
	public static WebElement YourOrder;


	@FindBy(how = How.XPATH, using = "//*[@id='shopApp']/div[3]/div/div/div[1]/div[2]/ul/li[5]/section[2]/div/div/p[1]")
	public static WebElement upfrontcost;

	@FindBy(how = How.XPATH, using = "//*[@id='shopApp']/div[3]/div/div/div[1]/div[2]/ul/li[5]/section[2]/div/div/p[2]")
	public static WebElement monthlycost;

	@FindBy(how = How.XPATH, using = ("//*[@id='header']/div[2]/div[1]/div/button"))
	public static WebElement GotoBasket;

	@FindBy(how = How.XPATH, using = ("//Section[@class='product-details']"))
	public static WebElement DeviceDetailsDisplay;

	@FindBy(how = How.XPATH, using = ("//div[@class='your-order']"))
	public static WebElement MainHeaders;

	// String text =
	// driver.findElement(By.cssSelector('.airtime-plan.is-refresh')).getText()
	// @FindBy(how=How.css,using=(.airtime-plan.is-refresh")

	@FindBy(css = "section.airtime-plan.is-refresh")
	public static WebElement AirtimeDetails;

	@FindBy(css = "section.airtime-plan")
	public static WebElement NonAirtimeDetails;

	@FindBy(how = How.XPATH, using = ("//li[@class='totals']"))
	public static WebElement totals;

	@FindBy(how = How.ID, using = "homeDelivery")
	public static WebElement HomeDeliverySelect;

	@FindBy(how = How.XPATH, using = ("//div[@class='hasDelayedDeliveryItems']"))
	public static WebElement HomeDeliveryText;

	@FindBy(how = How.ID, using = ("clickAndCollect"))
	public static WebElement clickAndCollectSelect;

	@FindBy(how = How.XPATH, using = "//a[@id='checkStoreStock']")
	public static WebElement clickAndCollect;

	@FindBy(how = How.ID, using = ("checkStoreStock"))
	public static WebElement checkSoteSotck_TradeIn;

	// specific to accessories

	// orders
	@FindBy(how = How.XPATH, using = ("//li[@class='accessory has-image']"))
	public static WebElement AccessoryDetails;

	@FindBy(how = How.XPATH, using = ("//*[@class='ac-qauantity-heading']"))
	public static WebElement DeviceHeadingNonConnected;


	@FindBy(how = How.XPATH, using = ("//*[@id='accessory-quantitySelectBoxItContainer']"))
	public static WebElement DeviceQuantityNonConnected;

	@FindBy(how = How.XPATH, using = "//input[@name='storePostcode']")
	public static WebElement StorePostcode;

	@FindBy(how = How.ID, using = "store-postcode-submit")
	public static WebElement PostcodeSubmit;

	@FindBy(how = How.XPATH, using = "(//a[normalize-space()='See when you can collect'])[1]")
	public static WebElement WhenToCollect;

	@FindBy(how = How.XPATH, using = "(//div[@class='collectFrom'])[1]/p")
	public static WebElement CollectionDetails;

	@FindBy(how = How.XPATH, using = "(//span[@class='collection-info '])[1]")
	public static WebElement CollectionDetailsPDpage;

	@FindBy(how = How.XPATH, using = ("(//a[normalize-space()='Collect from this store'])[1]"))
	public static WebElement Collectfromthisstore;

	@FindBy(how = How.XPATH, using = ("(//div[contains(@class,'tileContent')]/../div)[1]"))
	public static WebElement firstStore;

	@FindBy(how = How.XPATH, using = ("//div[@class='basket-header-xxl']"))
	public static WebElement BasketHeaderXXL;

	/// out of stock messages

	@FindBy(how = How.XPATH, using = ("//div[@class='basket-nav']"))
	public static WebElement BasketErrorText;

	// Specific to Voucher code
	@FindBy(how = How.ID, using = ("got-a-promo-code-label"))
	public static WebElement GotaPromoCode;

	@FindBy(how = How.ID, using = ("voucherCode"))
	public static WebElement voucherCode;

	@FindBy(how = How.ID, using = ("applyVoucher"))
	public static WebElement applyVoucher;

	@FindBy(how = How.XPATH, using = ("//*[@id='apply-voucher-error']"))
	public static WebElement VoucherMessage;

	@FindBy(how = How.XPATH, using = ("//a[@href='/shop/']"))
	public static WebElement ContinueShopping;

	@FindAll({
			@FindBy(how = How.XPATH, using = ("//div[@class='basket-list']//li[@data-qa-class='basket-item']/section/h3/span")) })
	public static List<WebElement> DevicesList;

	@FindAll({
			@FindBy(how = How.XPATH, using = ("//div[@class='basket-list']//li[@data-qa-class='basket-item']/section/h3/span")) })
	public static List<WebElement> MyNonConnDevices;

	@FindAll({
			@FindBy(how = How.XPATH, using = ("//div[@class='basket-list']//li[@class='package include-rating']/section/h3/span")) })
	public static List<WebElement> MyConnDevices;

	@FindAll({ @FindBy(how = How.XPATH, using = ("//div[@class='basket-list']//li[@class='package ']/section/h3")) })
	public static List<WebElement> MyTariffs;

	@FindBy(how = How.XPATH, using = ("//li[@data-qa-type='accessory']/section/h3"))
	public static WebElement BasketItemName;

	@FindBy(how = How.XPATH, using = ("(//a[contains(., 'Remove')])[1]"))
	public static WebElement RemoveButton;

	@FindBy(how = How.XPATH, using = ("//div[@class='primary promotion']"))
	public static WebElement PrimaryPromotion;

	@FindBy(how = How.XPATH, using = ("//div[@class='promotion secondary']"))
	public static WebElement SecondaryPromotion;

	@FindBy(how = How.XPATH, using = ("//div[@class='primary promotion']/a[@alt='ribbon information']"))
	public static WebElement PrimaryPromotionOverlay;

	@FindBy(how = How.XPATH, using = ("//div[@class='promotion secondary']/a[@alt='ribbon information']"))
	public static WebElement SecondaryPromotionOverlay;

	@FindBy(how = How.XPATH, using = ("//section[@class='device-insurance']"))
	public static WebElement InsuranceSection;

	/////////////////Upgrade Your sim////////////////////////////////////////

	@FindBy(how = How.XPATH, using = ("//*[@class='basket-nav']/div[1]/form[@class='qa-checkout-form ng-pristine ng-valid']/input[@class='button primary disabled']"))
	public static WebElement DisabledCheckout;

	@FindBy(how = How.XPATH, using = ("//*[@class='basket-nav']/div[1]/form[@class='qa-checkout-form ng-pristine ng-valid']/input[@class='button primary']"))
	public static WebElement EnabledCheckout;

	@FindBy(how = How.XPATH, using = "//h1[@class='staticPage']")
	public static WebElement checkoutinProgress;

	//Bill Spend cap
	@FindBy(how = How.XPATH, using = "//section[@id='billSpendCapSection']/h3[2]/span")
	public static WebElement AppliedBillCap;

	@FindBy(how = How.XPATH, using = "//a[@href='basket/changeBillSpendCap']")
	public static WebElement BillCapEditLink_Basket;

	@FindBy(how = How.XPATH, using = "//section[@id='billSpendCapSection']/h3[1]")
	public static WebElement BillSpendCapHeader;

	@FindBy(how = How.XPATH, using = "//section[@id='billSpendCapSection']/h3[1]/a")
	public static WebElement BasketBSCOverlay;

	@FindBy(how = How.XPATH, using = "//div[@class='bscOverlay']")
	public static WebElement BasketBSCOverlayTxt;

	@FindBy(how = How.XPATH, using = "//button[@class='close boxclose']")
	public static WebElement BasketBSCOverlayCloseBtn;

	@FindBy(how = How.XPATH, using = ("//div[@class='error_msg']"))
	public static WebElement ErrorText;

	@FindBy(how = How.XPATH, using = "//a[text()='Change tariff']")
	public static WebElement changetariff;

	@FindBy(how = How.XPATH, using = "//div[@class='basket-right-container']/aside/section[2]/h2")
	public static WebElement acceptedPayments;

	@FindBy(how = How.XPATH, using = "(//button[@id='fastCheckoutBtn'])[1]")
	public static WebElement paymentCTA;

	@FindBy(how = How.XPATH, using = "(//div[@class='expCheckout-txt'])[1]")
	public static WebElement paymentCopyText;

	@FindBy(how = How.XPATH, using = "//div[@class='overlay-box fatcheckoutPopUp']")
	public static WebElement fastCheckoutOverlay;

	@FindBy(how = How.XPATH, using = "//div[@id='checkoutpopup']/p[1]")
	public static WebElement fastCheckoutFirstLineCopy;

	@FindBy(how = How.XPATH, using = "//div[@id='checkoutpopup']/p[2]")
	public static WebElement fastCheckoutSecondLineCopy;

	@FindBy(how = How.XPATH, using = "//div[@class='popuprow2']/p[1]")
	public static WebElement fastCheckoutThirdLineCopy;

	@FindBy(how = How.XPATH, using = "//div[@class='popuprow2']/p[2]")
	public static WebElement fastCheckoutFourthLineCopy;

	@FindBy(how = How.XPATH, using = "//h3[@id='fastcheckout']/../a")
	public static WebElement fastCheckoutOverlayClose;

	@FindBy(how = How.XPATH, using = "//div[@id='paypal-button']/div/div")
	public static WebElement PayPalCTA;

	@FindBy(how = How.XPATH, using = "//section[@data-title='Log in to your PayPal account']//h1[contains(@class,'headerText')]")
	public static WebElement PayPalLoginHeader;

	@FindBy(how = How.XPATH, using = "//input[@id='email']")
	public static WebElement payPalUserField;

	@FindBy(how = How.XPATH, using = "//input[@id='password']")
	public static WebElement payPalPasswordField;

	@FindBy(how = How.XPATH, using = "//button[@id='btnLogin']")
	public static WebElement payPalLogInCTA;

	@FindBy(how = How.XPATH, using = "//section[@class='product-details']/div[3]/div/p[1]")
	public static WebElement upFrontValue;

	@FindBy(how = How.XPATH, using = "//p[@class='bannerLine']")
	public static WebElement upFrontCostInPayPalWindow;

	@FindBy(how = How.XPATH, using = "//ul[@class='charges']/li[2]")
	public static WebElement cardOption;

	@FindBy(how = How.XPATH, using = "//input[@id='confirmButtonTop']")
	public static WebElement continuePayPalCTA;


}