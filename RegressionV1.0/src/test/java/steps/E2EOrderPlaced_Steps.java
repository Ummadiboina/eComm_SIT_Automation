package steps;

import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import GlobalActions.Autoredirection;
import GlobalActions.JuneReleaseValidations;
import GlobalActions.MouseHoverAction;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.Filereadingutility;
import junit.framework.Assert;
import pageobjects.*;
import actionsPerformed.*;

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
		Autoredirection.redirectforHTTPconnections();
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
		Autoredirection.redirectUpgrades();
		;
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
		UpgradeCustomerPageActions.Login();
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
		ReviewPageActions.checkOrderContractText();
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
		JuneReleaseValidations.QuantityValidationsBasket();
	}

	@Then("^Verify that correct quantity of devices are displayed in Delivery page$")
	public void verifytheQuantityDeliveryPage() throws Throwable {
		JuneReleaseValidations.QuantityValidationsDelivery();
	}

	@Then("^Verify that correct quantity of devices are displayed in Review page$")
	public void verifytheQuantityReviewPage() throws Throwable {
		JuneReleaseValidations.QuantityValidationsReview();
	}
	
	@Then("^Verify that correct quantity of Grouped non connected items are displayed in Basket page$")
	public void verifytheQuantityBasketPageGrouped() throws Throwable {
		JuneReleaseValidations.QuantityValidationsBasket_Grouped();
	}

	@Then("^Verify that correct quantity of Grouped non connected items are displayed in Delivery page$")
	public void verifytheQuantityDeliveryPageGrouped() throws Throwable {
		JuneReleaseValidations.QuantityValidationsDelivery_Grouped();
	}

	@Then("^Verify that correct quantity of Grouped non connected items are displayed in Review page$")
	public void verifytheQuantityReviewPageGrouped() throws Throwable {
		JuneReleaseValidations.QuantityValidationsReview_Grouped();
	}
	
	

}
