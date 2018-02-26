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

	@FindBy(how = How.ID, using = ("homeDelivery"))
	public static WebElement HomeDeliverySelect;

	@FindBy(how = How.XPATH, using = ("//div[@class='hasDelayedDeliveryItems']"))
	public static WebElement HomeDeliveryText;

	@FindBy(how = How.ID, using = ("clickAndCollect"))
	public static WebElement clickAndCollectSelect;

	// specific to accessories

	// orders
	@FindBy(how = How.XPATH, using = ("//li[@class='accessory has-image']"))
	public static WebElement AccessoryDetails;

	@FindBy(how = How.XPATH, using = ("//*[@class='ac-qauantity-heading']"))
	public static WebElement DeviceHeadingNonConnected;

	//
	@FindBy(how = How.XPATH, using = ("//*[@id='accessory-quantitySelectBoxItContainer']"))
	public static WebElement DeviceQuantityNonConnected;

	@FindBy(how = How.ID, using = ("storePostcode"))
	public static WebElement StorePostcode;

	@FindBy(how = How.ID, using = ("store-postcode-submit"))
	public static WebElement PostcodeSubmit;

	@FindBy(how = How.XPATH, using = ("(//a[normalize-space()='Collect from this store'])[1]"))
	public static WebElement Collectfromthisstore;

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
}