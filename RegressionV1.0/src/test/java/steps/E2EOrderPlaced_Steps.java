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
import helpers.Filereadingutility;
import junit.framework.Assert;
import pageobjects.*;
import actionsPerformed.*;

public class E2EOrderPlaced_Steps {
	
	
	public WebDriver driver;
    public List<HashMap<String, String>> datamap;
    

	    public E2EOrderPlaced_Steps() {
	        driver = Hooks.driver;
	        //datamap = DataReader.data();
	    }
	    
/*##################################################################################*/   	    
/*##############   All the Below are for the Navigation Journeys ###################*/
/*##################################################################################*/
	    
	    @Given("^I am an CFA user and Lands on shop page$")
	    public void i_am_an_CFA_user_and_Lands_on_shop_page() throws Throwable 
	    {
	      	ShopLandingPageAction.GetTitle();
	      	
	  	 }
	    @Given("^I am an AFA user and Lands on shop page$")
	    public void i_am_an_AFA_user_and_Lands_on_shop_page() throws Throwable 
	    {
	    	String relativePath = System.getProperty("user.dir");
	    	String EnvPropFilePath = relativePath + "\\src\\test\\java\\Properties\\AppConfig.properties";
	    	String Newurl = Filereadingutility.getPropertyValue(EnvPropFilePath, "AgentUrl");
	    	driver.navigate().to(Newurl);
	    
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
	    
	    @Given("^Navigate to Fitness Trackers$")
	    public void navigate_to_Fitness_Trackers() throws Throwable 
	    {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, MouseHoverPage.class);
	    	MouseHoverAction.FitnessLandingPage();	    
	    	Autoredirection.redirect();
	    }
    
	    @Given("^Navigate to SmartWatches$")
	    public void navigate_to_SmartWatches() throws Throwable 
	    {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, MouseHoverPage.class);
	    	MouseHoverAction.SmartwatchesLandingPage();	    
	    	//Autoredirection.redirect();
	    }
	    
	    	  
	    @Given("^navigate to Pay as you Go Phones page$")
	    public void navigate_to_Pay_as_you_Go_Phones_page() throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, MouseHoverPage.class);
	    	MouseHoverAction.PayGPhonesLandingPage();
	    	Autoredirection.redirect();
	    }

		@Given("^Navigate to sims and Ipad Sims page$")
		public void navigate_to_sims_and_Ipad_Sims_page() throws Throwable 
		{
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, MouseHoverPage.class);
	    	MouseHoverAction.SimIpadSimsPage();
	    	Autoredirection.redirectforHTTPconnections();
		}
		
		
		@Given("^Navigate to sims and Tablet Sims page$")
		public void navigate_to_sims_and_Tablet_Sims_page() throws Throwable 
		{
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, MouseHoverPage.class);
	    	MouseHoverAction.SimTabletsSimsPage();
	    	Autoredirection.redirectforHTTPconnections();
		}

		@Given("^navigate to PAYM SIMO page$")
		public void navigate_to_PAYM_SIMO_page() throws Throwable {
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, MouseHoverPage.class);
	    	MouseHoverAction.PayMSimoNavigation();
	    	Autoredirection.redirect();
		}
		
		@Given("^I am an Existing user and Navigates to Signin page$")
		public void i_am_an_Existing_user_and_Navigates_to_Signin_page() throws Throwable {
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, MouseHoverPage.class);
	    	MouseHoverAction.UpgradeandUpgradeNow();
	    	Autoredirection.redirectUpgrades();;
		}
/*##################################################################################*/   	    
/*##############   All the Below are for the Device Listing/Selecting page #########*/
/*##################################################################################*/   	    
		
	    @Given("^I choose PayM ([^\"]*)$")
	    public void Choose_PAYM_Handset(String handset) throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, PhonesListingPage.class);
	    	PhonesListingPageAction.PAYMPhoneSelect(handset);
	    }
	    
	    @Given("^I choose PayG \"([^\"]*)\"$")
	    public void Choose_PAYG_Handset(String arg1) throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, PhonesListingPage.class);
	    	PhonesListingPageAction.PAYGPhoneSelect("Random Device");
	    
	    }
	    
	  
	    /*
	    @Given("^I choose high value PayM handset$")
	    public void i_choose_high_value_PayM_handset() throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, PhonesListingPage.class);
	    	PhonesListingPageAction.PAYMPhoneSelect(handset);
	    }*/
	    
	    @Given("^select any available \"([^\"]*)\" Fitness tracker$")
	    public void select_any_available_Fitness_tracker(String arg1) throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, FitnessTrackerPage.class);
	    	FitnessTrackerPageActions.DeviceSelect("Random Device");
	    }
	    
	    
	    @Given("^select any available \"([^\"]*)\" Smartwatch$")
	    public void select_any_available_Smartwatch(String arg1) throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, SmartwatchesPage.class);
	    	SmartwatchesPageActions.DeviceSelect("Random Device");
	    }
	    
	    
	    @Given("^I choose MBB PayG \"([^\"]*)\"$")
	    public void i_choose_MBB_PayG(String arg1) throws Throwable 
	    {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, MobileBroadBandPage.class);
	    	MobileBroadBandPageActions.DeviceSelect("Random Device");
	    	}
	    
	    @Given("^select any Tablet \"([^\"]*)\" and continue$")
	    public void select_any_Tablet_and_continue(String arg1) throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, SimsPage.class);
	    	ConnectedDeviceDetailsPageAction.GetTitle();
	    	Thread.sleep(2000);
	    	SimsPageActions.SelectRandomTabletSim();
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
	    
		@Given("^select any Ipad \"([^\"]*)\" and continue$")
		public void select_any_Ipad_and_continue(String arg1) throws Throwable 
		{
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, SimsPage.class);
	    	ConnectedDeviceDetailsPageAction.GetTitle();
	    	Thread.sleep(2000);
	    	SimsPageActions.SelectRandomIpadSim();
		}
	    
	    @Given("^select an Accessory$")
	    public void select_an_Accessory() throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, AccessoryPage.class);
	    	AccessoryPageActions.SelectAnyAccessory();
	    	
	    }
	    
	    @Given("^Click on different ([^\"]*) Months Tariff in Tab$")
	    public void click_on_different_Months_Tariff_in_Tab(String Contract) throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, PAYMSimOPage.class);
	    	PAYMSimOPageActions.ValidateContractLengths(Contract);
	    //	PAYMSimOPageActions.SelectTariffPhonesTab(Contract);
	    }
	    
	    @Given("^Select any Random Tariff in the displayed list of Tariffs under different ([^\"]*) tab$")
	    public void select_any_Random_Tariff_in_the_displayed_list_of_Tariffs_under_different_Months_tab(String Contract) throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, PAYMSimOPage.class);
	    	PAYMSimOPageActions.SelectTariffPhonesTab(Contract);
	    }
	    
	    @Given("^Select \"([^\"]*)\" Tariff in the displayed list of Tariffs under different ([^\"]*) tab$")
	    public void select_Tariff_in_the_displayed_list_of_Tariffs(String elementName, String Contract) throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, PAYMSimOPage.class);
	    	PAYMSimOPageActions.DisplayPromotionTariff(elementName);
	    	PAYMSimOPageActions.SelectTariffPhonesTab(Contract);

	    }
	    
	    
	    @Given("^add Accessories to basket within limit in details page and navigate to basket$")
	    public void add_Accessories_to_basket_within_limit_in_details_page_and_navigate_to_basket() throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);   
	    	PageFactory.initElements(driver, AccessoryPage.class);
	    	PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
	    	AccessoryPageActions.selectAnyAccessoryLimit();
	    	NonConnectedDeviceDetailsPageAction.ClickonBasketIcon();
	    	
	    }
	    

	    @Given("^add FitnessTracker to basket within limit in details page and navigate to basket$")
	    public void add_FitnessTracker_to_basket_within_limit_in_details_page_and_navigate_to_basket() throws Throwable 
	    {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);   
	    	PageFactory.initElements(driver, AccessoryPage.class);
	    	PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
	    	FitnessTrackerPageActions.AddtoBasketFitnessTracker();
	    	NonConnectedDeviceDetailsPageAction.ClickonBasketIcon();
	    }
	    
	    
	    @Given("^add SmartWatch to basket within limit in details page and navigate to basket$")
	    public void add_SmartWatch_to_basket_within_limit_in_details_page_and_navigate_to_basket() throws Throwable 
	    {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);   
	    	PageFactory.initElements(driver, AccessoryPage.class);
	    	PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
	    	FitnessTrackerPageActions.AddtoBasketFitnessTracker();
	    	NonConnectedDeviceDetailsPageAction.ClickonBasketIcon();
	    }
	    
	    @Given("^Choose some Accesssory$")
	    public void Choose_some_Accesssory() throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
	    	PAYMandPAYGTariffAndExtrasPageActions.addAccessory();
	    	Thread.sleep(2000);
	    	
	    }
	    
	    
	    @Given("^Signin using valid ([^\"]*) and ([^\"]*) credentials$")
	    public void signin_using_valid_ink_jun_and_test_credentials(String username, String password) throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, UpgradeCustomerPage.class);
	    	UpgradeCustomerPageActions.Login();
	    }

	    @Given("^choose to upgrade any Phone in My upgrade page$")
	    public void choose_to_upgrade_any_Phone_in_My_upgrade_page() throws Throwable {
	        
	    }
	    
	 

	    
/*##################################################################################*/   	    
/*##############   All the Below are for the Tariff and Extras Page ################*/
/*##################################################################################*/   	    

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
	    

	    
	    @Given("^Select any new Tariff and land on basket page$")
	    public void select_any_new_Tariff_and_land_on_basket_page() throws Throwable {
	        
	    }

/*##################################################################################*/   	    
/*##############   All the Below are for the Basket Page Validations ###############*/
/*##################################################################################*/   	    


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
		//	PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
			Thread.sleep(3000);
			BasketPageActions.AccessoryPageContents();
			BasketPageActions.CollectionorDelivery("homeDelivery");
				
		}
		
		@Given("^I Land on the Plan included basket page and choose home delivery option$")
		public void i_Land_on_the_Plan_included_basket_page_and_choose_home_delivery_option() throws Throwable {
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS); 
			PageFactory.initElements(driver, BasketPage.class);
			Thread.sleep(3000);
			BasketPageActions.PlanOnlyPageContents();
				
		}
		@Given("^click on \"([^\"]*)\" button$")
		public void click_on_button(String arg1) throws Throwable {
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			Thread.sleep(2000);
			BasketPageActions.gotoCheckout();
			Thread.sleep(2000);
		}
		
		

@Given("^Verifies the basket page for the upgrade journey$")
public void verifies_the_basket_page_for_the_upgrade_journey() throws Throwable {
    
}

/*##################################################################################*/   	    
/*##############   All the Below are for the Delivery Page Validations #############*/
/*##################################################################################*/   	    

		
	/*	@Given("^input all the fields on the Delivery page and Click on the 'Continue button'$")
		public void input_all_the_fields_on_the_Delivery_page_and_Click_on_the_Continue_button() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			 PageFactory.initElements(driver, DeliveryPage.class);
		     DeliveryPageActions.SetDelivery();
		     Thread.sleep(2000);
		     DeliveryPageActions.AboutYou(datamap);
		     Thread.sleep(2000);
		     DeliveryPageActions.ClickContinue();
		}*/

		@Given("^input ([^\"]*) and ([^\"]*) and other valid details in Delivery page and Click on the 'Continue button'$")
		public void DeliveryPage_Inputs_homeDelivery(String Firstname, String Surname) throws Throwable {
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			 PageFactory.initElements(driver, DeliveryPage.class);
		     DeliveryPageActions.SetDelivery();
		     Thread.sleep(2000);
		     DeliveryPageActions.AboutYou(Firstname, Surname);
		     Thread.sleep(2000);
		     DeliveryPageActions.ClickContinue();
		}

		
		@Given("^input ([^\"]*) and ([^\"]*) and other valid details in Delivery page for Click and collect and Click on the 'Continue button'$")
		public void DeliveryPage_Inputs_ClickandCollect(String Firstname, String Surname) throws Throwable {	
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			 PageFactory.initElements(driver, DeliveryPage.class);
		     DeliveryPageActions.AboutYou(Firstname, Surname);
		     DeliveryPageActions.ClickContinue();
		}

/*##################################################################################*/   	    
/*##############   All the Below are for the Payment Page Validations ##############*/
/*##################################################################################*/   	    
		
		@Given("^land on the payment page and input ([^\"]*) and other details and click 'Continue on next step'$")
		public void CreditCheckPaymentPage_HomeDelivery(String Username) throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver,PaymentPage.class);
			 PaymentPageActions.Set_Bank_details(Username);
			 Thread.sleep(2000);
	    	 PaymentPageActions.Time_At_Address();
			 Thread.sleep(2000);
	    	 PaymentPageActions.Card_Details(Username);
	    	 Thread.sleep(3000);
		}
		
		@Given("^land on the payment page and input ([^\"]*) and other details for Click and collect order and click 'Continue on next step'$")
		public void CreditCheckPaymentPage_ClickAndCollect(String Username) throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
			PageFactory.initElements(driver,PaymentPage.class);
	    	PaymentPageActions.Set_Bank_details(Username);
	    	Thread.sleep(3000);
	    	PaymentPageActions.Time_At_Address_CC();
	    	Thread.sleep(3000);
	    	 PaymentPageActions.Card_Details(Username);
	    	Thread.sleep(5000);
		}
		
		/*
		@Given("^I land on the Non Credit check payment page and input all the details and click 'Continue on next step'$")
		public void i_land_on_the_Non_Credit_check_payment_page_and_input_all_the_details_and_click_Continue_on_next_step() throws Throwable {
			driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
			PageFactory.initElements(driver,PaymentPage.class);
			PaymentPageActions.ValidateNonCreditPaymentPage();
			Thread.sleep(2000);
			PaymentPageActions.Card_Details();
	    
		}
		*/
		
		@Given("^land on the Non Credit check payment page and input ([^\"]*) and other details and click 'Continue on next step'$")
		public void NonCreditCheckPaymentPage_HomeDelivery(String Username) throws Throwable {
			driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
			PageFactory.initElements(driver,PaymentPage.class);
			PaymentPageActions.ValidateNonCreditPaymentPage();
			Thread.sleep(2000);
			PaymentPageActions.Card_Details(Username);
	    
		}
		
		
		@Given("^I land on the payment page and input all the details for high value Click and collect order and click 'Continue on next step'$")
		public void CreditCheckPaymentPage_ClickAndCollect_highvalue() throws Throwable {
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

/*##############   All the Below are for the Agreements Validations ###################*/
		
		@Given("^Continue to Agreements page and confirm all the agreement checks$")
		public void AgreementsPageConfirmation() throws Throwable {
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

/*##################################################################################*/   	    
/*##############   All the Below are for the Review Page Validations ###############*/
/*##################################################################################*/   	    


		@Given("^Continue to Review page and review the order$")
		public void ReviewPageConfirmation() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
			PageFactory.initElements(driver,ReviewPage.class);
  	    	ReviewPageActions.gettitlepage();
  	    	ReviewPageActions.TermsCheckBox();
  	    	ReviewPageActions.PayNow();  	    	
		}
		
		@Given("^Continue to Review page and review the order for Trustev details$")
		public void ReviewPageConfirmationwithTrustev() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
			PageFactory.initElements(driver,ReviewPage.class);
  	    	ReviewPageActions.gettitlepage();
  	    	ReviewPageActions.checktrustev();
  	    	ReviewPageActions.TermsCheckBox();
  	    	ReviewPageActions.PayNow();  	    	
		}
		

/*##################################################################################*/   	    
/*########   All the Below are for the Order Confirmation Page Validations #########*/
/*##################################################################################*/   	    
		
		@Then("^order confirmation is displayed$")
		public void OrderConfirmationPage() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver,OrderConfirmationPage.class);
  	    	OrderConfirmationPageActions.gettitlepage();
  	    	OrderConfirmationPageActions.MessageDisplayed();
		}
		
		
		@Then("^Order Decline page should be displayed$")
		public void OrderDeclinePage() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver,OrderConfirmationPage.class);
  	    	OrderConfirmationPageActions.gettitlepage();
  	    	OrderConfirmationPageActions.MessageDisplayed();
//  	    	/Assert.assertEquals(MessageDisplayed(), actual);
  	    	
		}
		
		
		@Then("^order confirmation is displayed with Volte message$")
		public void OrderConfirmationVolte() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver,OrderConfirmationPage.class);
  	    	OrderConfirmationPageActions.gettitlepage();
  	    	OrderConfirmationPageActions.MessageDisplayed();
  	    	OrderConfirmationPageActions.VolteMessageDisplayed();
		}
	  
		
	  
}