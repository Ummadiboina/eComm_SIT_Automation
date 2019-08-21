package pageobjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class PAYMSimOPage {

	

	
	@FindBy(how=How.XPATH,using=("//*[@id='no']/span"))  //no thank for customer help
	public static WebElement shopnothanks;
	
			
	@FindBy(how=How.XPATH,using=("//*[@id='tablet']"))
	public static  WebElement shoptablet;		
	
	@FindBy(how=How.XPATH,using=("//*[@id='id-12-months']/p/a"))
	public static WebElement twelevemonths;

	@FindBy(how=How.XPATH,using=("//*[@id='id-30-days']/p/a"))
	public static WebElement thirtydays;

	@FindBy(how=How.XPATH,using=("//*[@id='id-18-months']/p/a"))
	public static WebElement Eighteenmonths;
	
	/*@FindBy(how=How.XPATH,using=("//div[@class='tariff P12M  promoted-tariff  ']/div[8]"))
	public static WebElement BuyNowPromotedTariff;*/


	@FindBy(how=How.XPATH,using=("//*[@class='tariff P12M  promoted-tariff  ']/div[@class='col-xs-12 col-sm-5 info-container buy-now']/div[@class='btn-wrapper']/form/button | (//*[@name='P12M']//button[normalize-space()='Select'])[1]"))
	public static WebElement BuyNowPromotedTariff12Months;

	@FindBy(how=How.XPATH,using=("//*[@class='tariff P30D  promoted-tariff   no-promotion-exists ']/div[@class='col-xs-12 col-sm-5 info-container buy-now']/div[@class='btn-wrapper']/form/button | (//*[@name='P30D']//button[normalize-space()='Select'])[1]"))
	public static WebElement BuyNowPromotedTariff30Days;

	@FindBy(how=How.XPATH,using=("//*[@class='tariff P18M  promoted-tariff  ']/div[@class='col-xs-12 col-sm-5 info-container buy-now']/div[@class='btn-wrapper']/form/button | (//*[@name='P18M']//button[normalize-space()='Select'])[1]"))
	public static WebElement BuyNowPromotedTariff18Months;

	@FindBy(how=How.XPATH,using=("(//*[@name='P12M']//button[normalize-space()='Select'])[1]"))
	public static WebElement BuyNowRandomTariff12Months;
	
	//@FindBy(how=How.XPATH,using=("(//button[@id='callToAction'])[1]"))

	@FindBy(how=How.XPATH,using=("(//*[@name='P30D']//button[normalize-space()='Select'])[1]"))
	public static WebElement BuyNowRandomTariff30Months;
	
	////////////////////////////////////////////
	
	@FindBy(how=How.XPATH,using=("//*[@id='67533f03-4e8b-4089-8d3a-fdaf4e1cd2a2']/div[5]"))
	public static WebElement month12firsttariff;
			
	@FindBy(how=How.XPATH,using=("//*[@id='11ca80ab-cee8-4b8a-afc5-d638ce897899']/div[6]"))
	public static WebElement day30firsttariff;
	
	@FindBy(how=How.XPATH,using=("//*[@id='contentWrapper']/div[3]/div"))
	public static WebElement tariffsorting;		
	
	// Modified on 10/03/2017- Nag			
	@FindBy(how=How.XPATH,using=("//*[@id='2906f2c0-ac58-4e64-b199-e8d0c21b36df']/div[4]"))
	public static WebElement promotionprimary;
	
	@FindBy(how=How.XPATH,using=("//*[@id='2906f2c0-ac58-4e64-b199-e8d0c21b36df']/div[5]"))
	public static WebElement promotionsecondary;
	
	@FindBy(how = How.XPATH, using = "//*[@id='shop-simplicity-header-xxl']/div/div/div/h1")
	public static WebElement paymheader;

	@FindBy(how = How.XPATH, using = ("//*[@id='phone']/a"))
	public static WebElement simphonetab;

	@FindBy(how = How.XPATH, using = ("//*[@id='tablet']/a"))
	public static WebElement simtablettab;

	@FindBy(how = How.XPATH, using = ("//*[@id='mbb']/a"))
	public static WebElement simmbbtab;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[2]/a"))
	public static WebElement whychoosesimolink;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[1]/ul/li[1]/img"))
	public static WebElement wifi_img;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[1]/ul/li[1]/span"))
	public static WebElement wifi_img_txt;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[1]/ul/li[2]/img"))
	public static WebElement keepyournumb_img;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[1]/ul/li[2]/span"))
	public static WebElement keepyournumb_img_txt;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[1]/ul/li[3]/img"))
	public static WebElement rank_img;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[1]/ul/li[3]/span"))
	public static WebElement rank_img_txt;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[1]/ul/li[4]/img"))
	public static WebElement tugo_img;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[1]/ul/li[4]/span"))
	public static WebElement tugo_img_txt;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[1]/div[2]/h3"))
	public static WebElement whychoosesimowrap;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[2]/div[2]/h3"))
	public static WebElement whyo2;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[2]/ul/li[1]/img"))
	public static WebElement whyo2priority;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[2]/ul/li[1]/div"))
	public static WebElement whyo2priority_txt;

	//@FindBy(how = How.XPATH, using = ("//*[@//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[2]/ul/li[2]/img"))
	//public static WebElement whyo2guru;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[2]/ul/li[2]/div"))
	public static WebElement whyo2guru_txt;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[2]/ul/li[3]/img"))
	public static WebElement whyo2myo2;

	@FindBy(how = How.XPATH, using = ("//*[@id='contentWrapper']/div[3]/div/div[10]/div/div[2]/ul/li[3]/div"))
	public static WebElement whyo2myo2_txt;
/*
	@FindBy(how = How.XPATH, using = ("//*[@id='57f98c88-687a-4ba4-96ce-0f1e8bf1e1ea']/div[9]"))
	public static WebElement recomormostpop;
*/
/*
	@FindBy(how = How.XPATH, using = ("//*[@id='8d953bfa-90ae-44c1-bfd5-18814d6f4a00']/div[6]"))
	public static WebElement tariff1tile;
*/
	@FindBy(how = How.XPATH, using = ("//*[@id='2906f2c0-ac58-4e64-b199-e8d0c21b36df']"))
	public static WebElement tariff1tile;
	
	@FindBy(how = How.XPATH, using = ("//*[@id='07b0b285-5ba6-4af3-be0f-55e973980e2a']"))
	public static WebElement tariff2tile;
	
	@FindBy(how = How.XPATH, using = ("//*[@id='3dce474a-2f77-4157-ba86-f56c8323bc6c']"))
	public static WebElement tariff3tile;
	
	@FindBy(how = How.XPATH, using = ("//*[@id='9da1325c-4ba0-4853-b4e2-a81c2c75e239']"))
	public static WebElement tariff4tile;
	
	@FindBy(how = How.XPATH, using = ("//*[@id='923bbba8-e62c-4622-a01f-a26b802e2635']"))
	public static WebElement tariff5tile;
	
	@FindBy(how = How.XPATH, using = ("//*[@id='cf5d9e6e-d930-4e34-bf1c-d86a243a3c0e']"))
	public static WebElement tariff6tile;
	
	@FindBy(how = How.XPATH, using = ("//*[@id='c478e296-371d-45ea-9da9-470d8d23fe45']"))
	public static WebElement tariff7tile;
	
	@FindBy(how = How.XPATH, using = ("//*[@id='1614c1ab-c03a-49f4-9346-cd3933c8cab2']"))
	public static WebElement tariff8tile;
	
	/*
	@FindBy(how = How.XPATH, using = ("//*[@id='2d98d27d-28b1-4cbb-93ca-812672aef8ab']/div[6]"))
	public static WebElement tariff2tile;

	@FindBy(how = How.XPATH, using = ("//*[@id='dd98ff71-32c5-4e6b-9623-4766d629bd29']/div[6]"))
	public static WebElement tariff3tile;

	@FindBy(how = How.XPATH, using = ("//*[@id='04b0ac2c-a1d5-4a3c-8964-e7df3c8c2020']/div[6]"))
	public static WebElement tariff4tile;
	
	*/
	
	
	@FindBy(how = How.XPATH, using = ("//*[@id='callToAction']"))
	public static WebElement BuyNowButton;
	
	@FindBy(how = How.XPATH, using = ("//*[@id='checkbox-2906f2c0-ac58-4e64-b199-e8d0c21b36df-6']"))
	public static WebElement CheckboxPresence;
	
	@FindBy(how = How.XPATH, using = ("//*[@id='2906f2c0-ac58-4e64-b199-e8d0c21b36df']/div[8]/div/span"))
	public static WebElement CheckboxName;
	
	//@FindBy(how = How.CLASS_NAME, using = ("col-xs-12 promotion-ribbon"))
	//WebElement PromotionDisplay;
	
	@FindBy(how = How.XPATH, using = ("//a[contains(@href, '#phone-tab')]"))
	public static WebElement PhoneTab;
	
	@FindBy(how=How.XPATH,using=("(//a[contains(text(),'12 months')])[2] | (//a[contains(text(),'12 months')])"))
	public static WebElement months12tab;
	
	@FindBy(how=How.XPATH,using=("(//a[contains(text(),'30 days')])[2] | (//a[contains(text(),'30 days')])"))
	public static WebElement days30tab;
	
	//@FindBy(how=How.CSS,using=(".col-xs-12.promotion-ribbon"))
	//public static WebElement PromotionTariff;
	
	@FindBy(how = How.XPATH, using = ("(//*[@name='P30D']//button[normalize-space()='Select'])[1]"))
	public static WebElement BuyNowPhoneRandomTariff30Days;
	
	@FindBy(how = How.XPATH, using = ("(//*[@id='callToAction'])[2] | (//*[@name='P12M']//button[normalize-space()='Select'])[2]"))
	public static WebElement BuyNowPhoneRandomTariff12Months;

	@FindBy(how = How.XPATH, using = ("(//*[@name='P12M']//button[normalize-space()='Select'])[1]"))
	public static WebElement SelectSIMOTariff;

	@FindBy(how = How.XPATH, using = ("//*[@id='tablet']"))
	public static WebElement TabletsTabSimo;

	@FindBy(how = How.XPATH, using = ("//button[@id='currentSim']"))
	public static WebElement IWillKeepMyCurrentSIM;

	@FindBy(how = How.XPATH, using = ("//button[@id='newSim'] | //input[@id='newSim'] | //input[@id='needNewSim']"))
	public static WebElement INeedNewSIM;

	@FindBy(how = How.XPATH, using = ("//*[@id='simonly-upgrade-terms-label']/input"))
	public static WebElement TermsAndConditionsCheckbox_ReviewPage;

	@FindBy(how = How.XPATH, using = ("//div[@id='confirm']/div/form/fieldset/p[1]"))
	public static WebElement confirmText;


	@FindBy(how = How.XPATH, using = ("//*[@id='tablet']a"))
	public static WebElement tablet_tab;

	@FindBy(how = How.XPATH, using = ("//*[@id='mbb']/a"))
	public static WebElement Mbb_tab;

	@FindBy(how = How.XPATH, using = ("//*[@id=\'monthData\']"))
	public static WebElement TE_page_months_contract;

	@FindBy (how = How.XPATH, using = ("//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[1]/section[1]/div[1]/p[5]"))
	public static WebElement basket_page_months_contract;

	@FindBy (how =How.XPATH, using =   ("//*[@id='basket-plan']/td[1]/table/tbody/tr/td[2]/ul/li[1]"))
	public static WebElement D_P_R_page;

	@FindBy (how =How.XPATH, using = ("//*[@id='o2-page-wrapper']/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div[3]/div[2]/span[5]/text()"))
	public static WebElement confirm_page_months_contract;

	@FindBy (how =How.XPATH, using= ("//*[@id=\"04b0ac2c-a1d5-4a3c-8964-e7df3c8c2020\"]/div[2]/ul/li[1]"))
	public static WebElement Unlimited_data;

	@FindBy (how =How.XPATH, using=(""))
	public static WebElement Unlimited_data_TE;

	@FindBy (how =How.XPATH, using=(""))
	public static WebElement Unlimited_data_basket;

	@FindBy (how =How.XPATH, using=(""))
	public static  WebElement Unlimited_data_delivery;

	@FindBy (how =How.XPATH, using=(""))
	public static WebElement Unlimited_data_payment;

	@FindBy (how =How.XPATH, using=(""))
	public static WebElement Unlimited_data_review;

	@FindBy (how =How.XPATH, using=(""))
	public static WebElement Unlimited_data_confirmation;

	@FindBy (how =How.XPATH, using=("(//li[@id='id-18-months'])[2] | (//li[@id='id-18-months'])"))
	public static WebElement months_contract_18;

	@FindBy (how =How.XPATH, using=(""))
	public static WebElement Unlimited_data_review_confirm;

	@FindBy (how =How.XPATH, using=("//li[@id='id-12-months']/preceding-sibling::li"))
	public static WebElement first_18_months_contract;

	@FindBy (how =How.XPATH, using=(""))
	public static WebElement months_18_contract_review_confirm;

	@FindBy (how =How.XPATH, using=("//button/span[contains(text(),'Place your order')]"))
	public static WebElement PlaceYourOrder;

	@FindBy(how=How.XPATH,using=("(//div[@class='tariffs-container data-tariffs']//*[@name='P12M']//button[normalize-space()='Select'])[1]"))
	public static WebElement BuyNowRandomDataTariff12Months;

	@FindBy(how=How.XPATH,using=("(//div[@class='tariffs-container data-tariffs']//*[@name='P30D']//button[normalize-space()='Select'])[1]"))
	public static WebElement BuyNowRandomDataTariff30Months;

	@FindBy(how=How.XPATH,using=("(//*[@name='P18M']//button[normalize-space()='Select'])[1]"))
	public static WebElement BuyNowRandomDataTariff18Months;

	@FindBy(how=How.XPATH,using=("(//*[@name='P18M']//button[normalize-space()='Select'])[1]"))
	public static WebElement BuyNowPhoneRandomTariff18Months;

}