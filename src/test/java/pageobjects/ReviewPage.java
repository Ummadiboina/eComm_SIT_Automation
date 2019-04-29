package pageobjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ReviewPage {
	
	  
	@FindBy(how=How.ID,using="terms-custom")
	public static WebElement TermsCheckBox;

	@FindBy(how=How.XPATH,using="//input[@id='insurance-terms']")
	public static WebElement TermsInsumrance;

	@FindBy(how=How.XPATH,using="//label[@id='insurance-terms-label']/span")
	public static WebElement TermsInsumranceTxt;

	  @FindBy(how=How.ID,using="order-review-continue") 
	  public static WebElement PayNow;
	  

	// @FindBy(how=How.ID,using="//div[@id='delivery-details-section']/div[3]/p[@id='contract-message']") 
	  @FindBy(how=How.XPATH,using="//*[@id='contract-message']")
	  public static WebElement OrderContractMessageRP; 
	  
	  @FindBy(how=How.ID,using="//*[@id='stock-extended-message-single']") 
	  public static WebElement StockExtMessageDDPORP; 
	  
	  @FindBy(how = How.XPATH, using = "//div[@id='delivery-details-section']//p[@id='review-generic-delivery-message']")
		public static WebElement DeliveryTextRP;

		@FindBy(how = How.XPATH, using = "//tr[@id='basket-delivery']/td/div/p[@id='contract-message']")
		public static WebElement OrderContractMessageRPOrderSummary;
	  
	  
	  
	  
	  
		
}
