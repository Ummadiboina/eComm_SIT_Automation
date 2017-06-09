package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


@SuppressWarnings("unused")
public class BasketPage {
	
	

	@FindBy(how=How.XPATH,using="(//a[contains(text(),'Remove')])[1]") 
	public static WebElement DeviceRemovebtn ;
	
	@FindBy(how=How.XPATH,using="(//a[contains(text(),'Remove')])[2]") 
	public static WebElement tariffRemovebtn ;
	
	@FindBy(how=How.XPATH,using="//*[@value='Go to checkout'][1]") 
	public static WebElement checkoutbtn ;
	
	@FindBy(how=How.XPATH,using="//*[@id='shopApp']/div[3]/div/div/div[1]/div[2]/ul/li[5]/section[2]/div/div/p[1]") 
	public static WebElement upfrontcost ;
	
	@FindBy(how=How.XPATH,using="//*[@id='shopApp']/div[3]/div/div/div[1]/div[2]/ul/li[5]/section[2]/div/div/p[2]") 
	public static WebElement monthlycost ;
	
	@FindBy(how=How.XPATH,using=("//*[@id='header']/div[2]/div[1]/div/button"))
	public static WebElement GotoBasket;
	
	@FindBy(how=How.XPATH,using=("//Section[@class='product-details']"))
	public static WebElement DeviceDetailsDisplay;
	
	@FindBy(how=How.XPATH,using=("//div[@class='your-order']"))
	public static WebElement MainHeaders;

	
	
	//String text = driver.findElement(By.cssSelector('.airtime-plan.is-refresh')).getText()
	//@FindBy(how=How.css,using=(.airtime-plan.is-refresh")
	
	
	@FindBy(css= "section.airtime-plan.is-refresh") 
	public static WebElement AirtimeDetails;

	@FindBy(css= "section.airtime-plan") 
	public static WebElement NonAirtimeDetails;
	
	@FindBy(how=How.XPATH,using=("//li[@class='totals']"))
	public static WebElement totals;
	
	@FindBy(how=How.ID,using=("homeDelivery"))
	public static WebElement HomeDeliverySelect;
	
	@FindBy(how=How.XPATH,using=("//div[@class='hasDelayedDeliveryItems']"))
	public static WebElement HomeDeliveryText;
	
	@FindBy(how=How.ID,using=("clickAndCollect"))
	public static WebElement clickAndCollectSelect;

	
	
	
	//specific to accessories
	
	//orders
	@FindBy(how=How.XPATH,using=("//li[@class='accessory has-image']"))
	public static WebElement AccessoryDetails;
	

	@FindBy(how=How.ID,using=("storePostcode"))
	public static WebElement StorePostcode;
	
	@FindBy(how=How.ID,using=("store-postcode-submit"))
	public static WebElement PostcodeSubmit;
	
	@FindBy(how=How.XPATH,using=("//*[@id='444']/div[4]/p/a"))
	public static WebElement Collectfromthisstore;

	@FindBy(how=How.XPATH,using=("//div[@class='basket-header-xxl']"))
	public static WebElement BasketHeaderXXL;
	

	/// out of stock messages
	
	@FindBy(how=How.XPATH,using=("//div[@class='basket-nav']"))
	public static WebElement BasketErrorText;
	
	
	//Specific to Voucher code
	@FindBy(how=How.ID,using=("got-a-promo-code-label"))
	public static WebElement GotaPromoCode;
	
	@FindBy(how=How.ID,using=("voucherCode"))
	public static WebElement voucherCode;
	
	@FindBy(how=How.ID,using=("applyVoucher"))
	public static WebElement applyVoucher;
	

}
