package steps;

import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import GlobalActions.Autoredirection;
import GlobalActions.MouseHoverAction;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import pageobjects.*;
import actionsPerformed.*;

public class E2EOrderPlaced_Steps {
	
	
	public WebDriver driver;
    public List<HashMap<String, String>> datamap;
    

	    public E2EOrderPlaced_Steps() {
	        driver = Hooks.driver;
	        //datamap = DataReader.data();

	       
	    }
	    
	   
	    @Given("^I am an CFA user and Lands on shop page$")
	    public void i_am_an_CFA_user_and_Lands_on_shop_page() throws Throwable 
	    {
	      	ShopLandingPageAction.GetTitle();
	  	 }

	    
	    
	    @Given("^navigate to PAYM Phones page$")
	    public void navigate_to_PAYM_Phones_page() throws Throwable 
	    {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, MouseHoverPage.class);
	    	MouseHoverAction.PayMPhonesLandingPage();
	    	Autoredirection.redirect();
	    }
	    
	    @Given("^Navigate to Accessories$")
	    public void navigate_to_Accessories() throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, MouseHoverPage.class);
	    	MouseHoverAction.AccessoriesLandingPage();
	    	Autoredirection.redirect();
	    }
	    
	    @Given("^Navigate to PayG MBB page$")
	    public void navigate_to_PayG_MBB_page() throws Throwable 
	    {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, MouseHoverPage.class);
	    	MouseHoverAction.PayGMBBPage();
	    	Autoredirection.redirect();
	    }
	  
	    @Given("^navigate to Pay as you Go Phones page$")
	    public void navigate_to_Pay_as_you_Go_Phones_page() throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, MouseHoverPage.class);
	    	MouseHoverAction.PayGPhonesLandingPage();
	    	Autoredirection.redirect();
	    }
	    
	    @Given("^I choose PayM \"([^\"]*)\"$")
	    public void i_choose_PayM(String arg1) throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, PhonesListingPage.class);
	    	PhonesListingPageAction.PAYMPhoneSelect("GalaxyS7");
	    }
	    
	    @Given("^I choose PayG \"([^\"]*)\"$")
	    public void i_choose_PayG(String arg1) throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, PhonesListingPage.class);
	    	PhonesListingPageAction.PAYGPhoneSelect("Random Device");
	    
	    }
	    
	    @Given("^I choose high value PayM handset$")
	    public void i_choose_high_value_PayM_handset() throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, PhonesListingPage.class);
	    	PhonesListingPageAction.PAYGPhoneSelect("Iphone7Plus");
	    }
	    
	  
	    @Given("^I choose MBB PayG \"([^\"]*)\"$")
	    public void i_choose_MBB_PayG(String arg1) throws Throwable 
	    {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, MobileBroadBandPage.class);
	    	MobileBroadBandPageActions.DeviceSelect("Random Device");
	    	}
	    
	    @Given("^Navigate to device details page$")
	    public void  Navigate_to_device_details_page() throws Throwable 
	    {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
	    	ConnectedDeviceDetailsPageAction.GetTitle();
	    	Thread.sleep(2000);
	    	ConnectedDeviceDetailsPageAction.ViewAllTariffs();

	    }
	    
	    @Given("^select an Accessory$")
	    public void select_an_Accessory() throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, AccessoryPage.class);
	    	AccessoryPageActions.SelectAnyAccessory();
	    	
	    }
	    
	    @Given("^add Accessories to basket within limit in details page and navigate to basket$")
	    public void add_Accessories_to_basket_within_limit_in_details_page_and_navigate_to_basket() throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);   
	    	PageFactory.initElements(driver, AccessoryPage.class);
	    	PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
	    	AccessoryPageActions.selectAnyAccessoryLimit();
	    	NonConnectedDeviceDetailsPageAction.ClickonBasketIcon();
	    	
	    }

	    @Given("^Land on the 'Tariffs and extra' page$")
		public void land_on_the_Tariffs_and_extra_page() throws Throwable {
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.TariffSelect("Randomtariff");
			//PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
		
		}
	    
	    @Given("^Land on the 'Tariffs and extra' page selecting pay device in full$")
	    public void land_on_the_Tariffs_and_extra_page_selecting_pay_device_in_full() throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.TariffSelect("fullpaymenttariff1");
			//PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
			
	    }
	    
	    @Given("^Choose some Accesssory$")
	    public void Choose_some_Accesssory() throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
	    	PAYMandPAYGTariffAndExtrasPageActions.addAccessory();
	    	Thread.sleep(2000);
	    	
	    }

	    @Given("^I Land on the basket page and choose home delivery option$")
		public void i_Land_on_the_basket_page_and_choose_home_delivery_option() throws Throwable {
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);    
			PageFactory.initElements(driver, BasketPage.class);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
			Thread.sleep(3000);
			BasketPageActions.ValidateBasketPageContents() ;
			BasketPageActions.CollectionorDelivery("homeDelivery");
				

		}
		
		@Given("^I Land on the basket page and choose to collect from store$")
		public void i_Land_on_the_basket_page_and_choose_to_collect_from_store() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);    
			PageFactory.initElements(driver, BasketPage.class);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
			Thread.sleep(3000);
			BasketPageActions.ValidateBasketPageContents() ;
			BasketPageActions.CollectionorDelivery("clickAndCollect");
			Thread.sleep(3000);
		}

		
		@Given("^I Land on the Non Phone related basket page and choose home delivery option$")
		public void i_Land_on_the_Non_Phone_related_basket_page_and_choose_home_delivery_option() throws Throwable {
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS); 
			PageFactory.initElements(driver, BasketPage.class);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
			Thread.sleep(3000);
			BasketPageActions.AccessoryPageContents();
			BasketPageActions.CollectionorDelivery("homeDelivery");
				
		}

		@Given("^click on \"([^\"]*)\" button$")
		public void click_on_button(String arg1) throws Throwable {
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			BasketPageActions.gotoCheckout();
			Thread.sleep(2000);
		}

		@Given("^input all the fields on the Delivery page and Click on the 'Continue button'$")
		public void input_all_the_fields_on_the_Delivery_page_and_Click_on_the_Continue_button() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			 PageFactory.initElements(driver, DeliveryPage.class);
		     DeliveryPageActions.SetDelivery();
		     Thread.sleep(2000);
		     DeliveryPageActions.AboutYou(datamap);
		     Thread.sleep(2000);
		     DeliveryPageActions.ClickContinue();
		}
		
		@Given("^input all the fields on the Delivery page for Click and collect and Click order on the 'Continue button'$")
		public void input_all_the_fields_on_the_Delivery_page_for_Click_and_collect_and_Click_order_on_the_Continue_button() throws Throwable {	
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			 PageFactory.initElements(driver, DeliveryPage.class);
		     DeliveryPageActions.AboutYou(datamap);
		     DeliveryPageActions.ClickContinue();
		}
		
		@Given("^I land on the payment page and input all the details and click 'Continue on next step'$")
		public void i_land_on_the_payment_page_and_input_all_the_details_and_click_Continue_on_next_step() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver,PaymentPage.class);
			 PaymentPageActions.Set_Bank_details();
			 Thread.sleep(2000);
	    	 PaymentPageActions.Time_At_Address();
	    	 PaymentPageActions.Card_Details();
	    	 driver.switchTo().defaultContent();
	    	 Thread.sleep(5000);
		}
		
		@Given("^I land on the payment page and input all the details for Click and collect order and click 'Continue on next step'$")
		public void i_land_on_the_payment_page_and_input_all_the_details_for_Click_and_collect_order_and_click_Continue_on_next_step() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
			PageFactory.initElements(driver,PaymentPage.class);
	    	PaymentPageActions.Set_Bank_details();
	    	Thread.sleep(5000);
	    	PaymentPageActions.Time_At_Address_CC();
	    	Thread.sleep(5000);
	    	 PaymentPageActions.Card_Details();
	    	Thread.sleep(5000);
		}
		
		
		@Given("^I land on the Non Credit check payment page and input all the details and click 'Continue on next step'$")
		public void i_land_on_the_Non_Credit_check_payment_page_and_input_all_the_details_and_click_Continue_on_next_step() throws Throwable {
			driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
			PageFactory.initElements(driver,PaymentPage.class);
			PaymentPageActions.ValidateNonCreditPaymentPage();
			Thread.sleep(2000);
			PaymentPageActions.Card_Details();
	    
		}

		@Given("^I land on the payment page and input all the details for high value Click and collect order and click 'Continue on next step'$")
		public void i_land_on_the_payment_page_and_input_all_the_details_for_high_value_Click_and_collect_order_and_click_Continue_on_next_step() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver,PaymentPage.class);
	    	PaymentPageActions.Set_Bank_details_hv();
	    	Thread.sleep(5000);
	    	PaymentPageActions.Time_At_Address_CC();
	    	Thread.sleep(5000);
	    	 PaymentPageActions.Card_Details_hv();
	    	 driver.switchTo().defaultContent();
		}

		@Given("^Continue to Agreements page and confirm all the agreement checks$")
		public void continue_to_Agreements_page_and_confirm_all_the_agreement_checks() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
			PageFactory.initElements(driver,AgreementPage.class);
  	    	PageFactory.initElements(driver,ReviewPage.class);
	    	Thread.sleep(10000);
	    	AgreementPageActions.gettitlepage();
	      	Thread.sleep(2000);
  	    	AgreementPageActions.Affordability();
  	    	Thread.sleep(5000);
  	    	AgreementPageActions.KeyInformation();
  	    	Thread.sleep(5000);
  	    	AgreementPageActions.secciSection();
  	    	Thread.sleep(5000);
  	    	AgreementPageActions.PayMMobileAgreement(); 
  	    	Thread.sleep(5000);
  	    	AgreementPageActions.TermsDeclarationCheckbox(); 
  	    	Thread.sleep(5000);
		}

		@Given("^Continue to Review page and review the order$")
		public void continue_to_Review_page_and_review_the_order() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver,ReviewPage.class);
  	    	ReviewPageActions.gettitlepage();
  	    	ReviewPageActions.TermsCheckBox();
  	    	ReviewPageActions.PayNow();  	    	
		}

		@Then("^order confirmation is displayed$")
		public void order_confirmation_is_displayed() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver,OrderConfirmationPage.class);
  	    	OrderConfirmationPageActions.gettitlepage();
  	    	OrderConfirmationPageActions.MessageDisplayed();
		}
	  
}