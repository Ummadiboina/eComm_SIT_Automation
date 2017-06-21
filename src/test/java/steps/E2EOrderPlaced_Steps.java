package steps;

import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import GlobalActions.Autoredirection;
import GlobalActions.JuneReleaseValidations;
import GlobalActions.MouseHoverAction;
import actionsPerformed.AccessoryPageActions;
import actionsPerformed.AdditionalInformationPageActions;
import actionsPerformed.Agent_AdvisoryChecksActions;
import actionsPerformed.Agent_ConfirmationPageActions;
import actionsPerformed.Agent_CreditCheckPageActions;
import actionsPerformed.Agent_DealBuilderPageActions;
import actionsPerformed.Agent_HomePagePageActions;
import actionsPerformed.Agent_RegisterCustomerActions;
import actionsPerformed.AgreementPageActions;
import actionsPerformed.BasketPageActions;
import actionsPerformed.ConnectedDeviceDetailsPageAction;
import actionsPerformed.DeliveryPageActions;
import actionsPerformed.FitnessTrackerPageActions;
import actionsPerformed.FreeSimDeliveryPageActions;
import actionsPerformed.MobileBroadBandPageActions;
import actionsPerformed.NonConnectedDeviceDetailsPageAction;
import actionsPerformed.OrderConfirmationPageActions;
import actionsPerformed.OrderSummarySectionActions;
import actionsPerformed.PAYMSimOPageActions;
import actionsPerformed.PAYMandPAYGTariffAndExtrasPageActions;
import actionsPerformed.PaymentPageActions;
import actionsPerformed.PhonesListingPageAction;
import actionsPerformed.ReviewPageActions;
import actionsPerformed.ShopLandingPageAction;
import actionsPerformed.SimsPageActions;
import actionsPerformed.SmartwatchesPageActions;
import actionsPerformed.UpgradeCustomerPageActions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.Filereadingutility;
import junit.framework.Assert;
import pageobjects.AccessoryPage;
import pageobjects.AdditionalInformationPage;
import pageobjects.Agent_AdvisoryPage;
import pageobjects.Agent_ConfirmationPage;
import pageobjects.Agent_CreditCheckDetailsPage;
import pageobjects.Agent_DealBuilderPage;
import pageobjects.Agent_HomePage;
import pageobjects.Agent_RegisterCustomerPage;
import pageobjects.AgreementPage;
import pageobjects.BasketPage;
import pageobjects.ConnectedDeviceDetailsPage;
import pageobjects.DeliveryPage;
import pageobjects.FitnessTrackerPage;
import pageobjects.MobileBroadBandPage;
import pageobjects.MouseHoverPage;
import pageobjects.NonConnectedDeviceDetailsPage;
import pageobjects.OrderConfirmationPage;
import pageobjects.OrderSummarySection;
import pageobjects.PAYMSimOPage;
import pageobjects.PAYMandPAYGTariffAndExtrasPage;
import pageobjects.PaymentPage;
import pageobjects.PhonesListingPage;
import pageobjects.ReviewPage;
import pageobjects.ShopLandingPage;
import pageobjects.SimsPage;
import pageobjects.SmartwatchesPage;
import pageobjects.UpgradeCustomerPage;
import pageobjects.UpgradePhonesListingPage;

public class E2EOrderPlaced_Steps {

	public WebDriver driver;
	public List<HashMap<String, String>> datamap;

	public E2EOrderPlaced_Steps() {
		driver = Hooks.driver;
		// datamap = DataReader.data();
	}

	/*
	 * #########################################################################
	 * #########
	 */
	/*
	 * ############## All the Below are for the Navigation Journeys
	 * ###################
	 */
	/*
	 * #########################################################################
	 * #########
	 */

	@Given("^I am an CFA user and Lands on shop page$")
	public void i_am_an_CFA_user_and_Lands_on_shop_page() throws Throwable {
		ShopLandingPageAction.GetTitle();

	}

	@Given("^navigate to PAYM Phones page$")
	public void navigate_to_PAYM_Phones_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, MouseHoverPage.class);
		MouseHoverAction.PayMPhonesLandingPage();

		Autoredirection.redirect();
	}

	@Given("^Navigate to Accessories$")
	public void navigate_to_Accessories() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, MouseHoverPage.class);
		MouseHoverAction.AccessoriesLandingPage();
		Autoredirection.redirect();
	}

	@Given("^Navigate to PayG MBB page$")
	public void navigate_to_PayG_MBB_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, MouseHoverPage.class);
		MouseHoverAction.PayGMBBPage();
		Autoredirection.redirect();
	}

	@Given("^Navigate to Fitness Trackers$")
	public void navigate_to_Fitness_Trackers() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, MouseHoverPage.class);
		MouseHoverAction.FitnessLandingPage();
		Autoredirection.redirect();
	}

	@Given("^Navigate to SmartWatches$")
	public void navigate_to_SmartWatches() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, MouseHoverPage.class);
		MouseHoverAction.SmartwatchesLandingPage();
		Autoredirection.redirect();
	}

	@Given("^navigate to Pay as you Go Phones page$")
	public void navigate_to_Pay_as_you_Go_Phones_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, MouseHoverPage.class);
		MouseHoverAction.PayGPhonesLandingPage();
		Autoredirection.redirect();
	}

	@Given("^Navigate to sims and Ipad Sims page$")
	public void navigate_to_sims_and_Ipad_Sims_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, MouseHoverPage.class);
		MouseHoverAction.SimIpadSimsPage();
		Autoredirection.redirectforHTTPconnections();
	}

	@Given("^Navigate to sims and Tablet Sims page$")
	public void navigate_to_sims_and_Tablet_Sims_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, MouseHoverPage.class);
		MouseHoverAction.SimTabletsSimsPage();
		//Autoredirection.redirectforHTTPconnections();
	}

	@Given("^navigate to PAYM SIMO page$")
	public void navigate_to_PAYM_SIMO_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, MouseHoverPage.class);
		MouseHoverAction.PayMSimoNavigation();
		Autoredirection.redirect();
	}

	@Given("^I am an Existing user and Navigates to Signin page$")
	public void i_am_an_Existing_user_and_Navigates_to_Signin_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, MouseHoverPage.class);
		MouseHoverAction.UpgradeandUpgradeNow();
		//Autoredirection.redirectUpgrades();
	}
	/*
	 * #########################################################################
	 * #########
	 */
	/*
	 * ############## All the Below are for the Device Listing/Selecting page
	 * #########
	 */
	/*
	 * #########################################################################
	 * #########
	 */

	@Given("^I choose PayM ([^\"]*)$")
	public void Choose_PAYM_Handset(String handset) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, PhonesListingPage.class);
		PhonesListingPageAction.PAYMPhoneSelect(handset);
	}

	@Given("^I choose PayG \"([^\"]*)\"$")
	public void Choose_PAYG_Handset(String arg1) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, PhonesListingPage.class);
		PhonesListingPageAction.PAYGPhoneSelect("Random Device");

	}

	@Given("^select any available \"([^\"]*)\" Fitness tracker$")
	public void select_any_available_Fitness_tracker(String arg1) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, FitnessTrackerPage.class);
		FitnessTrackerPageActions.DeviceSelect("Random Device");
	}

	@Given("^select any available \"([^\"]*)\" Smartwatch$")
	public void select_any_available_Smartwatch(String arg1) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, SmartwatchesPage.class);
		SmartwatchesPageActions.DeviceSelect("Random Device");
	}

	@Given("^I choose MBB PayG \"([^\"]*)\"$")
	public void i_choose_MBB_PayG(String elementName) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, MobileBroadBandPage.class);
		MobileBroadBandPageActions.DeviceSelect(elementName);
	}

	@Given("^select any Tablet \"([^\"]*)\" and continue$")
	public void select_any_Tablet_and_continue(String elementname) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, SimsPage.class);
		ConnectedDeviceDetailsPageAction.GetTitle();
		Thread.sleep(2000);
		SimsPageActions.SelectRandomTabletSim(elementname);
	}

	@Given("^Navigate to device details page$")
	public void Navigate_to_device_details_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
		ConnectedDeviceDetailsPageAction.GetTitle();
		Thread.sleep(2000);
		ConnectedDeviceDetailsPageAction.ViewAllTariffs();
	}

	@Given("^Navigate to device details page and select ([^\"]*)$")
	public void Navigate_to_device_details_page_and_select_color(String color) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
		ConnectedDeviceDetailsPageAction.GetTitle();
		Thread.sleep(2000);
		ConnectedDeviceDetailsPageAction.colorSelect(color);
		ConnectedDeviceDetailsPageAction.ViewAllTariffs();
	}

	@Given("^select any Ipad \"([^\"]*)\" and continue$")
	public void select_any_Ipad_and_continue(String elementname) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, SimsPage.class);
		ConnectedDeviceDetailsPageAction.GetTitle();
		Thread.sleep(2000);
		SimsPageActions.SelectRandomIpadSim(elementname);
	}

	@Given("^select an \"([^\"]*)\" Accessory$")
	public void select_an_Accessory(String elementName) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, AccessoryPage.class);
		AccessoryPageActions.SelectAnyAccessory(elementName);
		;

	}

	@Given("^Click on different ([^\"]*) Months Tariff in Tab$")
	public void click_on_different_Months_Tariff_in_Tab(String Contract) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, PAYMSimOPage.class);
		PAYMSimOPageActions.ValidateContractLengths(Contract);
		// PAYMSimOPageActions.SelectTariffPhonesTab(Contract);
	}

	@Given("^Select any Random Tariff in the displayed list of Tariffs under different ([^\"]*) tab$")
	public void select_any_Random_Tariff_in_the_displayed_list_of_Tariffs_under_different_Months_tab(String Contract)
			throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, PAYMSimOPage.class);
		PAYMSimOPageActions.SelectTariffPhonesTab(Contract);
	}

	@Given("^Select Recommended Tariff in the displayed list of Tariffs under different ([^\"]*) tab$")
	public void select_Recommended_Tariff_in_the_displayed_list_of_Tariffs_under_different_Months_tab(String Contract)
			throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, PAYMSimOPage.class);
		PAYMSimOPageActions.SelectRecommendedTariffPhonesTab(Contract);
		// PAYMSimOPageActions.SelectPromotionTariff(Contract);

	}

	@Given("^add Accessories to basket within limit in details page and navigate to basket$")
	public void add_Accessories_to_basket_within_limit_in_details_page_and_navigate_to_basket() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, AccessoryPage.class);
		PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
		AccessoryPageActions.selectAnyAccessoryLimit();
		//NonConnectedDeviceDetailsPageAction.ClickonBasketIcon();

	}

	@Given("^add FitnessTracker to basket within limit in details page and navigate to basket$")
	public void add_FitnessTracker_to_basket_within_limit_in_details_page_and_navigate_to_basket() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, AccessoryPage.class);
		PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
		FitnessTrackerPageActions.AddtoBasketFitnessTracker();
		//NonConnectedDeviceDetailsPageAction.ClickonBasketIcon();
	}

	@Given("^add SmartWatch to basket within limit in details page and navigate to basket$")
	public void add_SmartWatch_to_basket_within_limit_in_details_page_and_navigate_to_basket() throws Throwable {
		driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
		PageFactory.initElements(driver, SmartwatchesPage.class);
		SmartwatchesPageActions.AddtoBasketSmartwatchTracker();
	}

	@Given("^Choose some Accesssory$")
	public void Choose_some_Accesssory() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
		PAYMandPAYGTariffAndExtrasPageActions.addAccessory();
		Thread.sleep(2000);

	}

	@Given("^Signin using valid ([^\"]*) and ([^\"]*) credentials$")
	public void signin_using_valid_ink_jun_and_test_credentials(String username, String password) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, UpgradeCustomerPage.class);
		UpgradeCustomerPageActions.Login(username,password);
	}

	@Given("^choose to upgrade any Phone in My upgrade page$")
	public void choose_to_upgrade_any_Phone_in_My_upgrade_page() throws Throwable {

	}

	/*
	 * #########################################
	 * 
	 */
	/*
	 * ############## All the Below are for the Tariff and Extras Page
	 * ################
	 */
	/*
	 * #########################################################################
	 * #########
	 */

	@Given("^Land on the 'Tariffs and extra' page$")
	public void land_on_the_Tariffs_and_extra_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
		PAYMandPAYGTariffAndExtrasPageActions.TariffSelect("Randomtariff");
		// PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();

	}

	@Given("^Land on the 'Tariffs and extra' page selecting pay device in full$")
	public void land_on_the_Tariffs_and_extra_page_selecting_pay_device_in_full() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
		PAYMandPAYGTariffAndExtrasPageActions.TariffSelect("fullpaymenttariff1");
		// PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();

	}

	@Given("^Select any new Tariff and land on basket page$")
	public void select_any_new_Tariff_and_land_on_basket_page() throws Throwable {

	}

	/*
	 * #########################################################################
	 * #########
	 */
	/*
	 * ############## All the Below are for the Basket Page Validations
	 * ###############
	 */
	/*
	 * #########################################################################
	 * #########
	 */

	@Given("^I Land on the basket page and choose home delivery option$")
	public void i_Land_on_the_basket_page_and_choose_home_delivery_option() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, BasketPage.class);
		PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
		PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
		Thread.sleep(3000);
		BasketPageActions.ValidateBasketPageContents();
		BasketPageActions.CollectionorDelivery("homeDelivery");
	}

	@Given("Check for order contract text in Basket Page")
	public void check_for_order_contract_text_in_basket_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, BasketPage.class);
		BasketPageActions.checkOrderContractTextBP();
	}

	@Given("Check for order contract text for DD/PreOrder phone in Basket Page")
	public void check_for_order_contract_text_for_DD_or_PreOrder_in_basket_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, BasketPage.class);
		BasketPageActions.checkOrderContractTextDDPOBP();
	}

	@Given("^I Land on the basket page and choose to collect from store$")
	public void i_Land_on_the_basket_page_and_choose_to_collect_from_store() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, BasketPage.class);
		PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
		PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
		Thread.sleep(3000);
		BasketPageActions.ValidateBasketPageContents();
		BasketPageActions.CollectionorDelivery("clickAndCollect");
		Thread.sleep(3000);
	}

	@Given("^I Land on the Non Phone related basket page and choose home delivery option$")
	public void NonPhoneRelatedBasketPage() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, BasketPage.class);
		PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
		Thread.sleep(3000);
		// Assert.assertEquals("The condition is ",
		// driver.findElement(By.xpath("//*[@value='Go to checkout'][1]")));
		BasketPageActions.BasketContentsforNonConnected();
		BasketPageActions.CollectionorDelivery("homeDelivery");

	}

	@Given("^I Land on the Plan included basket page and choose home delivery option$")
	public void i_Land_on_the_Plan_included_basket_page_and_choose_home_delivery_option() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, BasketPage.class);
		Thread.sleep(3000);
		BasketPageActions.PlanOnlyPageContents();

	}

	@Given("^Apply a ([^\"]*)$")
	public void Apply_Voucher(String Voucher) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, BasketPage.class);
		Thread.sleep(2000);
		BasketPageActions.PromoCode(Voucher);
		Thread.sleep(2000);
	}

	@Given("^click on \"([^\"]*)\" button$")
	public void CheckoutFromBasket(String arg1) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, BasketPage.class);
		Thread.sleep(2000);
		BasketPageActions.gotoCheckout();
		Thread.sleep(2000);
	}

	@Given("^Verifies the basket page for the upgrade journey$")
	public void verifies_the_basket_page_for_the_upgrade_journey() throws Throwable {

	}

	/*
	 * #########################################################################
	 * #########
	 */
	/*
	 * ############## All the Below are for the Delivery Page Validations
	 * #############
	 */
	/*
	 * #########################################################################
	 * #########
	 */

	/*
	 * @Given("^input all the fields on the Delivery page and Click on the 'Continue button'$"
	 * ) public void
	 * input_all_the_fields_on_the_Delivery_page_and_Click_on_the_Continue_button
	 * () throws Throwable { // Write code here that turns the phrase above into
	 * concrete actions driver.manage().timeouts().implicitlyWait(20,
	 * TimeUnit.SECONDS); PageFactory.initElements(driver, DeliveryPage.class);
	 * DeliveryPageActions.SetDelivery(); Thread.sleep(2000);
	 * DeliveryPageActions.AboutYou(datamap); Thread.sleep(2000);
	 * DeliveryPageActions.ClickContinue(); }
	 */

	@Given("^input ([^\"]*) and ([^\"]*) and other valid details in Delivery page and Click on the 'Continue button'$")
	public void DeliveryPage_Inputs_homeDelivery(String Firstname, String Surname) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, DeliveryPage.class);
		DeliveryPageActions.SetDelivery();
		Thread.sleep(2000);
		DeliveryPageActions.AboutYou(Firstname, Surname);
		Thread.sleep(2000);
		DeliveryPageActions.ClickContinue();
	}

	@Given("^input ([^\"]*) and ([^\"]*) and other valid details in Delivery page for Click and collect and Click on the 'Continue button'$")
	public void DeliveryPage_Inputs_ClickandCollect(String Firstname, String Surname) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, DeliveryPage.class);
		DeliveryPageActions.AboutYou(Firstname, Surname);
		DeliveryPageActions.ClickContinue();
	}

	/*
	 * #########################################################################
	 * #########
	 */
	/*
	 * ############## All the Below are for the Payment Page Validations
	 * ##############
	 */
	/*
	 * #########################################################################
	 * #########
	 */

	@Given("^land on the payment page and input ([^\"]*) and other details and click 'Continue on next step'$")
	public void CreditCheckPaymentPage_HomeDelivery(String Username) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, PaymentPage.class);
		PaymentPageActions.Set_Bank_details(Username);
		Thread.sleep(2000);
		PaymentPageActions.Time_At_Address();
		Thread.sleep(2000);
		PaymentPageActions.Card_Details(Username);
		Thread.sleep(10000);
	}

	@Given("^land on the payment page and input ([^\"]*) and other details for Click and collect order and click 'Continue on next step'$")
	public void CreditCheckPaymentPage_ClickAndCollect(String Username) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, PaymentPage.class);
		PaymentPageActions.Set_Bank_details(Username);
		Thread.sleep(3000);
		PaymentPageActions.Time_At_Address_CC();
		Thread.sleep(3000);
		PaymentPageActions.Card_Details(Username);
		Thread.sleep(10000);
	}

	@Given("^land on the Non Credit check payment page and input ([^\"]*) and other details and click 'Continue on next step'$")
	public void NonCreditCheckPaymentPage_HomeDelivery(String Username) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, PaymentPage.class);
		PaymentPageActions.ValidateNonCreditPaymentPage();
		Thread.sleep(2000);
		PaymentPageActions.Card_Details(Username);
		Thread.sleep(10000);

	}

	@Given("^I land on the payment page and input all the details for high value Click and collect order and click 'Continue on next step'$")
	public void CreditCheckPaymentPage_ClickAndCollect_highvalue() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, PaymentPage.class);
		PaymentPageActions.Set_Bank_details_hv();
		Thread.sleep(5000);
		PaymentPageActions.Time_At_Address_CC();
		Thread.sleep(5000);
		PaymentPageActions.Card_Details_hv();
		driver.switchTo().defaultContent();
		Thread.sleep(10000);
	}

	/*
	 * ############## All the Below are for the Additional Information section
	 * ###################
	 */

	@Then("^Additional information page should be displayed$")
	public void AdditionalInformation() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, AdditionalInformationPage.class);
		AdditionalInformationPageActions.gettitlepage();
		Thread.sleep(2000);
		AdditionalInformationPageActions.SectionsDisplayed();
		Thread.sleep(10000);
	}

	@Then("^upon entering Valid details with valid new ([^\"]*) and card number$")
	public void EnterValidCard(String Username2) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, AdditionalInformationPage.class);
		Thread.sleep(2000);
		AdditionalInformationPageActions.AdditionalCardDetails(Username2);
		Thread.sleep(4000);
		// AdditionalInformationPageActions.ClickOn();
		// Thread.sleep(10000);

	}

	/*
	 * ############## All the Below are for the Agreements Validations
	 * ###################
	 */

	@Given("^Continue to Agreements page and confirm all the agreement checks$")
	public void AgreementsPageConfirmation() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, AgreementPage.class);
		PageFactory.initElements(driver, ReviewPage.class);
		Thread.sleep(10000);
		AgreementPageActions.gettitlepage();
		Thread.sleep(3000);
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

	/*
	 * #########################################################################
	 * #########
	 */
	/*
	 * ############## All the Below are for the Review Page Validations
	 * ###############
	 */
	/*
	 * #########################################################################
	 * #########
	 */

	@Given("^Continue to Review page and review the order$")
	public void ReviewPageConfirmation() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, ReviewPage.class);
		ReviewPageActions.gettitlepage();
		ReviewPageActions.TermsCheckBox();
		ReviewPageActions.PayNow();
	}

	@Given("^Continue to Review page, check order contract text and review the order$")
	public void ReviewPageOrderContractTextConfirmation() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, ReviewPage.class);
		ReviewPageActions.gettitlepage();
		ReviewPageActions.TermsCheckBox();
		ReviewPageActions.checkOrderContractTextRP();
		ReviewPageActions.PayNow();
	}

	@Given("^Continue to Review page and review the order for Trustev details$")
	public void ReviewPageConfirmationwithTrustev() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, ReviewPage.class);
		ReviewPageActions.gettitlepage();
		ReviewPageActions.checktrustev();
		ReviewPageActions.TermsCheckBox();
		ReviewPageActions.PayNow();
	}

	/*
	 * #########################################################################
	 * #########
	 */
	/*
	 * ######## All the Below are for the Order Confirmation Page Validations
	 * #########
	 */
	/*
	 * #########################################################################
	 * #########
	 */

	@Given("^Check order contract text in Order Confirmation page$")
	public void checkOrderContractTextOC() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, OrderConfirmationPage.class);
		String ActOrderContractMsg = pageobjects.OrderConfirmationPage.OrderContractMessageOC.getText();
		String ExpOrderContractMsg = "Your contract will not start until the order is on its way.";
		if (ActOrderContractMsg.matches(ExpOrderContractMsg)) {
			System.out.println("Act Del MSg" + ActOrderContractMsg);
			System.out.println("Exp Del MSg" + ExpOrderContractMsg);
			System.out.println("ActOrderContractMsg matches ExpDeliveryText");
		} else {
			Assert.fail("Order contract text does not match");

		}
	}

	@Then("^order confirmation is displayed$")
	public void OrderConfirmationPage() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, OrderConfirmationPage.class);
		OrderConfirmationPageActions.gettitlepage();
		OrderConfirmationPageActions.MessageDisplayed();
	}

	@Then("^Order Decline page should be displayed$")
	public void OrderDeclinePage() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, OrderConfirmationPage.class);
		OrderConfirmationPageActions.gettitlepage();
		OrderConfirmationPageActions.MessageDisplayed();
		// /Assert.assertEquals(MessageDisplayed(), actual);

	}

	@Then("^order confirmation is displayed with Volte message$")
	public void OrderConfirmationVolte() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, OrderConfirmationPage.class);
		OrderConfirmationPageActions.gettitlepage();
		// OrderConfirmationPageActions.MessageDisplayed();
		OrderConfirmationPageActions.OrderConfirmationPageSections();
	}

	/*********************************
	 * Below is for Agent shop
	 ****************************************/

	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Launch Agent shop ######### */
	/*
	 * #########################################################################
	 * #########
	 */
	@Given("^I login to Agent shop$")
	public void LoginAgentShop() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		String relativePath = System.getProperty("user.dir");
		String EnvPropFilePath = relativePath + "\\src\\test\\java\\Properties\\AppConfig.properties";
		String Newurl = Filereadingutility.getPropertyValue(EnvPropFilePath, "AgentUrl");
		driver.navigate().to(Newurl);
		Agent_HomePagePageActions.ValidateAgentHomepage();

	}

	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Perform Upgrade or Acquisition ######### */
	/*
	 * #########################################################################
	 * #########
	 */

	@Given("^performs Upgrade for ([^\"]*)$")
	public void performs_Upgrade(String msisdn) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, Agent_HomePage.class);
		Agent_HomePagePageActions.FindUser(msisdn);
	}

	@Given("^performs Acquisition for New user$")
	public void performs_Acquisition_for_New_user() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, Agent_HomePage.class);
		Agent_HomePagePageActions.NewUser();
	}

	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Select Valid PAYM/PAYG Device ######### */
	/*
	 * #########################################################################
	 * #########
	 */
	@Given("^Select a valid PayM ([^\"]*)")
	public void SelectValid_Device(String Device) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, Agent_DealBuilderPage.class);
		Agent_DealBuilderPageActions.SelectPAYMDevice(Device);
	}

	@Given("^Select a valid PAYG ([^\"]*)")
	public void select_a_valid_PAYG_S_edge_black_GB(String Device) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, Agent_DealBuilderPage.class);
		Agent_DealBuilderPageActions.SelectPayGDevice(Device);
	}

	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Other Scenarios ######### */
	/*
	 * #########################################################################
	 * #########
	 */
	@Given("^choose to email basket to save the basket$")
	public void choose_to_email_basket_to_save_the_basket() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, Agent_DealBuilderPage.class);
		Agent_DealBuilderPageActions.eMailBasket();
	}

	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Select Valid PAYM/PAYG Tariff ######### */
	/*
	 * #########################################################################
	 * #########
	 */

	@Given("^Select valid ([^\"]*) from PAYG tariffs tab$")
	public void select_valid_Months_from_PAYG_tariffs_tab(String Tariff) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, Agent_DealBuilderPage.class);
		Agent_DealBuilderPageActions.SelectPayGTariff(Tariff);
	}

	@Given("^Select a valid Accessory ([^\"]*)")
	public void Select_Accessory(String Device) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, Agent_DealBuilderPage.class);
		Agent_DealBuilderPageActions.SelectAccessoryDevice(Device);
	}

	@Given("^Select valid ([^\"]*) from tariffs tab$")
	public void SelectTariff(String Tariff) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, Agent_DealBuilderPage.class);
		Agent_DealBuilderPageActions.SelectTariff(Tariff);

	}

	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Validate Basket contents ######### */
	/*
	 * #########################################################################
	 * #########
	 */

	@Given("^Validate all the Basket content and checkout$")
	public void validate_all_the_Basket_content_and_checkout() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, Agent_DealBuilderPage.class);
		Agent_DealBuilderPageActions.ValdiateBasket();
		Thread.sleep(2000);
		Agent_DealBuilderPageActions.checkout();
		Thread.sleep(2000);
	}

	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Advisory checks ######### */
	/*
	 * #########################################################################
	 * #########
	 */
	@Then("^perform all the advisory checks$")
	public void advisory_checks() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, Agent_AdvisoryPage.class);
		Agent_AdvisoryChecksActions.AgreeAdvsioryCheck();
	}

	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Credit Checks and Bank details ######### */
	/*
	 * #########################################################################
	 * #########
	 */

	@Then("^perform the credit checks using valid ([^\"]*) and ([^\"]*) and valid ([^\"]*)$")
	public void CreditCheck(String Firstname, String Surname, String Username) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, Agent_CreditCheckDetailsPage.class);
		Agent_CreditCheckPageActions.Creditcheck(Firstname, Surname);
		Agent_CreditCheckPageActions.BankDetails(Username);
		Thread.sleep(10000);

	}
	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Register ######### */
	/*
	 * #########################################################################
	 * #########
	 */

	@Given("^Register customer with valid ([^\"]*) and ([^\"]*) and other valid details in delivery page$")
	public void register_customer(String Firstname, String Surname) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, Agent_RegisterCustomerPage.class);
		Agent_RegisterCustomerActions.PayGRegistration(Firstname, Surname);
	}

	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Delivery Details ######### */
	/*
	 * #########################################################################
	 * #########
	 */
	@Then("^Choose HomeDelivery delivery address and delivery time$")
	public void HomeDelivery_Address() throws Throwable {

	}

	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Pay by card ######### */
	/*
	 * #########################################################################
	 * #########
	 */
	@When("^Pay by card$")
	public void pay_by_card() throws Throwable {
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		PageFactory.initElements(driver, Agent_RegisterCustomerPage.class);
		Agent_RegisterCustomerActions.PaybyCard();
		Agent_RegisterCustomerActions.CardDetails();
	}

	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Order confirmation ######### */
	/*
	 * #########################################################################
	 * #########
	 */

	@Then("^Order confirmation message should be displayed$")
	public void order_confirmation_message_should_be_displayed() throws Throwable {
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		PageFactory.initElements(driver, Agent_ConfirmationPage.class);
		Agent_ConfirmationPageActions.Confirmationdetails();
	}

	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## June Release ######### */
	/*
	 * #########################################################################
	 * #########
	 */
	@Given("^I Land on the Non Phone related basket page$")
	public void NonPhoneRelatedBasketPage_julyRelease() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, BasketPage.class);
		PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
		Thread.sleep(3000);
		BasketPageActions.JuneReleaseBasketContent();
	}

	@Then("^Verify that correct quantity of devices are displayed in Basket page$")
	public void verifytheQuantityBasketPage() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		JuneReleaseValidations.QuantityValidationsBasket();
	}

	@Then("^Verify that correct quantity of devices are displayed in Delivery page$")
	public void verifytheQuantityDeliveryPage() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		JuneReleaseValidations.QuantityValidationsDelivery();
	}

	@Then("^Verify that correct quantity of devices are displayed in Delivery page after update$")
	public void verifyUpdatedQuantityDeliveryPage() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		JuneReleaseValidations.updatedQuantityValidationsDelivery();
	}
	
	@Then("^Verify that correct quantity of devices are displayed in Review page$")
	public void verifytheQuantityReviewPage() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		JuneReleaseValidations.QuantityValidationsReview();
	}
	
	@Then("^Verify that correct quantity of Grouped non connected items are displayed in Basket page$")
	public void verifytheQuantityBasketPageGrouped() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		JuneReleaseValidations.QuantityValidationsBasket_Grouped();
	}

	@Then("^Verify that correct quantity of Grouped non connected items are displayed in Delivery page$")
	public void verifytheQuantityDeliveryPageGrouped() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		JuneReleaseValidations.QuantityValidationsDelivery_Grouped();
	}

	@Then("^Verify that correct quantity of Grouped non connected items are displayed in Review page$")
	public void verifytheQuantityReviewPageGrouped() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		JuneReleaseValidations.QuantityValidationsReviewPage_Grouped();
	}
		
	@Then("^navigate back to Basket page$")
	public void navigate_back_to_Basket_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		JuneReleaseValidations.NavigatebackFromDelivery();
	}
	
	@Then("^Change the quantity of the items$")
	public void change_the_quantity_of_the_items() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		JuneReleaseValidations.ChangeQuantity();
	}	
	
	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Upgrade Upsell ######### */
	/*
	 * #########################################################################
	 * #########
	 */

	@Then("^I should be displayed the promo modules$")
	public void i_should_be_displayed_the_promo_modules() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, UpgradeCustomerPageActions.class);
		UpgradeCustomerPageActions.UpgradeUpsellPromoModule_Validation();

	}

	@Then("^I should be displayed with Go to My O(\\d+) CTA and on clicking on it should land me to My O(\\d+) page$")
	public void i_should_be_displayed_with_Go_to_My_O_CTA_and_on_clicking_on_it_should_land_me_to_My_O_page(int arg1,
			int arg2) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, UpgradeCustomerPageActions.class);
		UpgradeCustomerPageActions.UpgradeUpsellPromoModule_MyO2Action();

	}

	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Upgrade Upsell iPad Sims ######### */
	/*
	 * #########################################################################
	 * #########
	 */

	@When("^I Click on Pick a sim on the iPad promo module$")
	public void i_Click_on_Pick_a_sim_on_the_iPad_promo_module() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, UpgradeCustomerPage.class);
		UpgradeCustomerPageActions.UpgradeUpsellPromoModule_iPadAction();
		Autoredirection.redirect();
	}

	@When("^input ([^\"]*) and ([^\"]*) and other valid details in Delivery page and Click on the 'Send me my sim'$")
	public void input_TEST_and_ACCEPTA_and_other_valid_details_in_Delivery_page_and_Click_on_the_Send_me_my_sim(String Firstname, String Surname) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, DeliveryPage.class);
		DeliveryPageActions.SetDelivery();
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,100)", "");
		PageFactory.initElements(driver, FreeSimDeliveryPageActions.class);
		FreeSimDeliveryPageActions.FreeSimAboutYou(Firstname, Surname);
		JavascriptExecutor jse_1 = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,250)", "");
		FreeSimDeliveryPageActions.ClickSendMeMySim();
		Thread.sleep(2000);
		
		

	}
	
	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Upgrade Upsell Tablet Sims ######### */
	/*
	 * #########################################################################
	 * #########
	 */

	@When("^I Click on Pick a sim on the Tablet promo module$")
	public void i_Click_on_Pick_a_sim_on_the_Tablet_promo_module() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, UpgradeCustomerPage.class);
		UpgradeCustomerPageActions.UpgradeUpsellPromoModule_TabletAction();
		Autoredirection.redirect();
	    
	}
	
	
	/*
	 * #########################################################################
	 * #########
	 */
	/* ######## Upgrade Upsell Dongle Sims ######### */
	/*
	 * #########################################################################
	 * #########
	 */
	

	@When("^I Click on Pick a sim on the Dongle promo module$")
	public void i_Click_on_Pick_a_sim_on_the_Dongle_promo_module() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, UpgradeCustomerPage.class);
		UpgradeCustomerPageActions.UpgradeUpsellPromoModule_DongleAction();
		Autoredirection.redirect(); 
	   
	}
	
	@When("^verify that error message is thrown$")
	public void promocodeErrorMessage(String Voucher) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, BasketPage.class);
		Thread.sleep(2000);
		BasketPageActions.WrongPromoCode(Voucher);
		Thread.sleep(2000);
	   
	}
	
	@Given("^Apply the ([^\"]*) twice$")
	public void Apply_Voucher_twice(String Voucher) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, BasketPage.class);
		Thread.sleep(2000);
		BasketPageActions.PromoCode(Voucher);
		Thread.sleep(2000);
		BasketPageActions.PromoCode(Voucher);
		Thread.sleep(2000);

	}
	
	///////////////////////////////June Release////////////////////////////////////////
	
	@Given("^Navigate to device details page, check if the selected device is Delayed Delivery and select ([^\"]*)$")
	public void Navigate_to_device_details_page_check_if_DD_and_select_color(String color) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
		ConnectedDeviceDetailsPageAction.GetTitle();
		Thread.sleep(3000);
		ConnectedDeviceDetailsPageAction.colorSelectOfDevice(color);
		Thread.sleep(3000);
		ConnectedDeviceDetailsPageAction.checkDevStatusAsDelayedDelivery();
		Thread.sleep(2000);
		ConnectedDeviceDetailsPageAction.ViewAllTariffs();
	}

	@Given("^Navigate to device details page, check if the selected device is Pre Order and select ([^\"]*)$")
	public void Navigate_to_device_details_page_check_if_PO_and_select_color(String color) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
		ConnectedDeviceDetailsPageAction.GetTitle();
		Thread.sleep(3000);
		ConnectedDeviceDetailsPageAction.colorSelectOfDevice(color);
		Thread.sleep(3000);
		ConnectedDeviceDetailsPageAction.checkDevStatusAsPreOrder();
		Thread.sleep(2000);
		ConnectedDeviceDetailsPageAction.ViewAllTariffs();
	}
	

	@Given("^I Land on the basket page$")
	public void i_Land_on_the_basket_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, BasketPage.class);
		PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
		PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
		Thread.sleep(3000);
		BasketPageActions.ValidateBasketPageContents();
	}
	
	@Given("Select ([^\"]*) from accessories")
	public void select_accessory(String accessoryname) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, AccessoryPage.class);
		Thread.sleep(2000);
		AccessoryPageActions.SelectAnyAccessory(accessoryname);
		Thread.sleep(3000);

	}

	
	@Given("Choose ([^\"]*) and add to basket")
	public void choose_color(String color) throws Throwable {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
		Thread.sleep(2000);
		NonConnectedDeviceDetailsPageAction.clickCloseBtn();
		Thread.sleep(2000);
		NonConnectedDeviceDetailsPageAction.colorSelectOfDevice(color);
		NonConnectedDeviceDetailsPageAction.AddtoBasket();
	}
	
	@Given("Select existing account and begin fast checkout")
	public void Select_existing_account_and_begin_fast_checkout() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, DeliveryPage.class);
		DeliveryPageActions.selectExistingAcctAndFastCheckOut();
	}

	@Given("Check stock extended message in Delivery page")
	public void Check_stock_extended_message_in_Delivery_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, DeliveryPage.class);
		DeliveryPageActions.checkStockExtMsgDP();
	}
@Given("^Input ([^\"]*) and ([^\"]*) and other valid details in Delivery page$")
	public void Entering_DeliveryPage_Inputs_HomeDelivery(String Firstname, String Surname) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, DeliveryPage.class);
		DeliveryPageActions.SetDelivery();
		Thread.sleep(2000);
		DeliveryPageActions.AboutYou(Firstname, Surname);
		Thread.sleep(2000);
		//DeliveryPageActions.ClickContinue();
	}
	
	@Given("^Click on Continue button$")
	public void clickOnContinueButton(String Firstname, String Surname) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, DeliveryPage.class);
		DeliveryPageActions.ClickContinue();
	}
	
	@Given("^Check stock extended message for ([^\"]*)$")
	public void checkStockExtMsg(String product) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, OrderSummarySection.class);
		OrderSummarySectionActions.checkStockExtMessage(product);
	}
	
	@Given("^land on the payment page, check stock limited message for ([^\"]*) and input ([^\"]*) and other details and click 'Continue on next step'$")
	public void CreditCheckPaymentPage_check_stock_limited_msg_HomeDelivery(String Username, String product) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, PaymentPage.class);
		PageFactory.initElements(driver, OrderSummarySection.class);
		PaymentPageActions.Set_Bank_details(Username);
		Thread.sleep(2000);
		OrderSummarySectionActions.checkStockExtMessage(product);
		Thread.sleep(2000);
		PaymentPageActions.Time_At_Address();
		Thread.sleep(2000);
		PaymentPageActions.Card_Details(Username);
		Thread.sleep(10000);
	}

	@Given("^land on the payment page and input ([^\"]*) and other details for upgrade and click 'Continue on next step'$")
	public void CreditCheckPaymentPage_Upgrade(String Username) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, PaymentPage.class);
		PageFactory.initElements(driver, DeliveryPage.class);
		DeliveryPageActions.ClickContinue();
		Thread.sleep(2000);
		PaymentPageActions.Time_At_Address();
		Thread.sleep(2000);
		PaymentPageActions.Card_Details(Username);
		Thread.sleep(10000);
	}

	@Given("^land on the payment page, check stock extended message for ([^\"]*) and input ([^\"]*) and other details for upgrade and click 'Continue on next step'$")
	public void CreditCheckPaymentPage_check_Stock_ext_msg_Upgrade(String Username, String product) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, PaymentPage.class);
		PageFactory.initElements(driver, DeliveryPage.class);
		PageFactory.initElements(driver, OrderSummarySection.class);
		DeliveryPageActions.ClickContinue();
		Thread.sleep(2000);
		OrderSummarySectionActions.checkStockExtMessage(product);
		Thread.sleep(2000);
		PaymentPageActions.Time_At_Address();
		Thread.sleep(2000);
		PaymentPageActions.Card_Details(Username);
		Thread.sleep(10000);
	}
	@Given("^Continue to Agreements page, check stock extended message for ([^\"]*) and confirm all the agreement checks$")
	public void AgreementsPageConfirmation_alongwith_stock_ext_msg(String product) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, AgreementPage.class);
		PageFactory.initElements(driver, ReviewPage.class);
		PageFactory.initElements(driver, OrderSummarySection.class);
		Thread.sleep(10000);
		AgreementPageActions.gettitlepage();
		Thread.sleep(3000);
		AgreementPageActions.Affordability();
		Thread.sleep(5000);
		OrderSummarySectionActions.checkStockExtMessage(product);
		Thread.sleep(2000);
		AgreementPageActions.KeyInformation();
		Thread.sleep(5000);
		AgreementPageActions.secciSection();
		Thread.sleep(5000);
		AgreementPageActions.PayMMobileAgreement();
		Thread.sleep(5000);
		AgreementPageActions.TermsDeclarationCheckbox();
		Thread.sleep(5000);
	}
	
	

	@Given("^Continue to Review page, check order contract text, stock extended message for ([^\"]*) and review the order$")
	public void ReviewPageStockExtMsgConfirmation(String product) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, ReviewPage.class);
		PageFactory.initElements(driver, OrderSummarySection.class);
		ReviewPageActions.gettitlepage();
		ReviewPageActions.TermsCheckBox();
		ReviewPageActions.checkOrderContractTextRP();
		OrderSummarySectionActions.checkStockExtMessage(product);
		ReviewPageActions.PayNow();
	}
	
	@Given("^I am existing user and I click on Signin button$")
	public void I_am_existing_user_and_I_click_on_Signin_button() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, ShopLandingPage.class);
		ShopLandingPageAction.clickSignIn();
		Autoredirection.redirectUpgrades();

	}
	
	@Given("^Navigate to upgrade phone$")
	public void navigate_to_upgrade_phone() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, MouseHoverPage.class);
		PageFactory.initElements(driver, UpgradePhonesListingPage.class);
		MouseHoverAction.UpgradeandUpgradeNow();
		Thread.sleep(5000);
		// Autoredirection.redirectUpgrades();
		UpgradeCustomerPageActions.viewAllPhones();
		Thread.sleep(2000);
	}
	
	@Given("^I choose upgrade PayM ([^\"]*)$")
	public void Choose_upgradePAYM_Handset(String handset) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, UpgradePhonesListingPage.class);
		PageFactory.initElements(driver, PhonesListingPage.class);
		Thread.sleep(3000);
		UpgradeCustomerPageActions.upgradePAYMPhoneSelect(handset);
	}
	
}
