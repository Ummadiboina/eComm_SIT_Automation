package steps;

import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import GlobalActions.Autoredirection;
import GlobalActions.JuneReleaseValidations;
import GlobalActions.MouseHoverAction;
import GlobalActions.scrollToAnElement;
import actionsPerformed.AccessoryPageActions;
import actionsPerformed.AdditionalInformationPageActions;
import actionsPerformed.Agent_AdvisoryChecksActions;
import actionsPerformed.Agent_ConfirmationPageActions;
import actionsPerformed.Agent_CreditCheckPageActions;
import actionsPerformed.Agent_DealBuilderPageActions;
import actionsPerformed.Agent_HomePagePageActions;
import actionsPerformed.Agent_RegisterCustomerActions;
import actionsPerformed.AgreementPageActions;
import actionsPerformed.BaseCommPageActions;
import actionsPerformed.BasketPageActions;
import actionsPerformed.CVOS_LandingPageActions;
import actionsPerformed.CVOS_StockAllocationActions;
import actionsPerformed.CVOS_StockMerchandiseActions;
import actionsPerformed.CVOS_SupplyChainloggedIn;
import actionsPerformed.CVOS_TradingAdminloggedIn;
import actionsPerformed.CVOSstockpotPageActions;
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
import actionsPerformed.TabletPageActions;
import actionsPerformed.UpgradeCustomerPageActions;
import cucumber.api.java.en.And;
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
import pageobjects.BaseCommPage;
import pageobjects.BasketPage;
import pageobjects.CVOS_PageObjects;
import pageobjects.ConnectedDeviceDetailsPage;
import pageobjects.DeliveryPage;
import pageobjects.FitnessTrackerPage;
import pageobjects.LikeFreePage;
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
import pageobjects.TabletPage;
import pageobjects.UpgradeCustomerPage;
import pageobjects.UpgradePhonesListingPage;
import pageobjects.UpgradeTabletListingPage;

public class E2EOrderPlaced_Steps {

	public WebDriver driver;
	public List<HashMap<String, String>> datamap;
	static Logger log = Logger.getLogger("devpinoyLogger");

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
		try {
			ShopLandingPageAction.GetTitle();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("unable to get title");
			Assert.fail("unable to get title");
		}

	}

	@And("^navigate to PAYM Phones page$")
	public void navigate_to_PAYM_Phones_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.PayMPhonesLandingPage();

			// Autoredirection.redirect();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("unable to do mousehover to phones");
			Assert.fail("unable to do mousehover to phones");
		}
	}

	@And("^Navigate to PayM MBB page$")
	public void navigate_to_PayM_MBB_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.PayMMBBPage();
			Autoredirection.redirect();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("unable to do mousehover to PayGMBB");
			Assert.fail("unable to do mousehover to Accessories");
		}
	}

	@Given("^Navigate to Accessories$")
	public void navigate_to_Accessories() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.AccessoriesLandingPage();
			// Autoredirection.redirect();
			Thread.sleep(10000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println(	"unable to do mousehover to Accessories");
			Assert.fail("unable to do mousehover to Accessories");
		}
	}

	@Given("^Navigate to PayG MBB page$")
	public void navigate_to_PayG_MBB_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.PayGMBBPage();
			Autoredirection.redirect();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("unable to do mousehover to PayGMBB");
			Assert.fail("unable to do mousehover to Accessories");
		}
	}

	@Given("^Navigate to Fitness Trackers$")
	public void navigate_to_Fitness_Trackers() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.FitnessLandingPage();
			Autoredirection.redirect();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("unable to do mousehover to Fitness Trackers");
			Assert.fail("unable to do mousehover to Fitness Trackers");
		}
	}

	@Given("^Navigate to SmartWatches$")
	public void navigate_to_SmartWatches() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.SmartwatchesLandingPage();
			// Autoredirection.redirect();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("unable to do mousehover to SmartWatches");
			Assert.fail("unable to do mousehover to SmartWatches");
		}
	}

	@Given("^navigate to Pay as you Go Phones page$")
	public void navigate_to_Pay_as_you_Go_Phones_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.PayGPhonesLandingPage();
			Autoredirection.redirect();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("unable to do mousehover to Pay as you Go Phones page");
			Assert.fail("unable to do mousehover to Pay as you Go Phones page");

		}
	}

	@Given("^Navigate to sims and Ipad Sims page$")
	public void navigate_to_sims_and_Ipad_Sims_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.SimIpadSimsPage();
			// Autoredirection.redirectforHTTPconnections();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("unable to do mousehover to Sims and Ipad Sims page");
			Assert.fail("unable to do mousehover to Sims and Ipad Sims page");
		}
	}

	@Given("^Navigate to sims and Tablet Sims page$")
	public void navigate_to_sims_and_Tablet_Sims_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.SimTabletsSimsPage();
			// Autoredirection.redirectforHTTPconnections();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to do mousehover to Sims and Tablet Sims page");
			Assert.fail("Unable to do mousehover to Sims and Tablet Sims page");
		}
	}

	@And("^navigate to PAYM SIMO page$")
	public void navigate_to_PAYM_SIMO_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.PayMSimoNavigation();
			Autoredirection.redirect();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to do mousehover to PAYM SIMO page");
			Assert.fail("Unable to do mousehover to PAYM SIMO page");
		}
	}

	@Given("^I am an Existing user and Navigates to Signin page$")
	public void i_am_an_Existing_user_and_Navigates_to_Signin_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.UpgradeandUpgradeNow();
			// Autoredirection.redirectUpgrades();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to do mousehover to Existing user and Navigates to Signin page");
			Assert.fail("Unable to do mousehover to Existing user and Navigates to Signin page");
		}
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

	@And("^I choose PayM ([^\"]*)$")
	public void Choose_PAYM_Handset(String handset) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PhonesListingPage.class);
			PhonesListingPageAction.PAYMPhoneSelect(handset);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to choose PayM phone");
			Assert.fail("Unable to choose PayM phone");
		}
	}

	@Given("^I choose PayG \"([^\"]*)\"$")
	public void Choose_PAYG_Handset(String arg1) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PhonesListingPage.class);
			PhonesListingPageAction.PAYGPhoneSelect("Random Device");
			// PhonesListingPageAction.PAYGPhoneSelect("MotoG5");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to choose PayG phone");
			Assert.fail("Unable to choose PayG phone");
		}

	}

	@And("^I choose MBB PayM ([^\"]*)$")
	public void i_choose_MBB_PayM(String elementName) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MobileBroadBandPage.class);
			MobileBroadBandPageActions.DeviceSelect(elementName);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select MBB PayG device");
			Assert.fail("Unable to select MBB PayG device");

		}
	}

	@Given("^select any available \"([^\"]*)\" Fitness tracker$")
	public void select_any_available_Fitness_tracker(String arg1) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, FitnessTrackerPage.class);
			FitnessTrackerPageActions.DeviceSelect("Random Device");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select fitness tracker");
			Assert.fail("Unable to select fitness tracker");
		}
	}

	@Given("^select any available \"([^\"]*)\" Smartwatch$")
	public void select_any_available_Smartwatch(String arg1) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, SmartwatchesPage.class);
			SmartwatchesPageActions.DeviceSelect("Random Device");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select Smartwatch");
			Assert.fail("Unable to select Smartwatch");

		}
	}

	@Given("^I choose MBB PayG \"([^\"]*)\"$")
	public void i_choose_MBB_PayG(String elementName) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MobileBroadBandPage.class);
			MobileBroadBandPageActions.DeviceSelect(elementName);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select MBB PayG device");
			Assert.fail("Unable to select MBB PayG device");

		}
	}

	@Given("^select any Tablet \"([^\"]*)\" and continue$")
	public void select_any_Tablet_and_continue(String elementname) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, SimsPage.class);
			ConnectedDeviceDetailsPageAction.GetTitle();
			Thread.sleep(2000);
			SimsPageActions.SelectRandomTabletSim(elementname);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select Tablet device");
			Assert.fail("Unable to select Tablet device");

		}
	}

	@And("^Navigate to device details page$")
	public void Navigate_to_device_details_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
			ConnectedDeviceDetailsPageAction.GetTitle();
			Thread.sleep(2000);
			ConnectedDeviceDetailsPageAction.ViewAllTariffs();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to navigate to device details page");
			Assert.fail("Unable to navigate to device details page");

		}
	}
	
	
	@And("^Click on View all Tariffs$")
	public void ClickonViewAllTariffsDeviceDetailspage() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
		ConnectedDeviceDetailsPageAction.ViewAllTariffs();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to navigate to device details page");
			Assert.fail("Unable to navigate to device details page");

		}
	}
	

	@Given("^Navigate to device details page and select ([^\"]*)$")
	public void Navigate_to_device_details_page_and_select_color(String color) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
			ConnectedDeviceDetailsPageAction.GetTitle();
			Thread.sleep(2000);
			ConnectedDeviceDetailsPageAction.colorSelect(color);
			ConnectedDeviceDetailsPageAction.ViewAllTariffs();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to navigate to device details page");
			Assert.fail("Unable to navigate to device details page");

		}
	}

	@Given("^select any Ipad \"([^\"]*)\" and continue$")
	public void select_any_Ipad_and_continue(String elementname) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, SimsPage.class);
			ConnectedDeviceDetailsPageAction.GetTitle();
			Thread.sleep(2000);
			SimsPageActions.SelectRandomIpadSim(elementname);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select any Ipad sim");
			Assert.fail("Unable to select any Ipad sim");

		}
	}

	@Given("^select an \"([^\"]*)\" Accessory$")
	public void select_an_Accessory(String elementName) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, AccessoryPage.class);
			AccessoryPageActions.SelectAnyAccessory(elementName);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select accessory");
			Assert.fail("Unable to select accessory");

		}

	}

	@And("^Click on different ([^\"]*) Months Tariff in Tab$")
	public void click_on_different_Months_Tariff_in_Tab(String Contract) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMSimOPage.class);
			PAYMSimOPageActions.ValidateContractLengths(Contract);
			// PAYMSimOPageActions.SelectTariffPhonesTab(Contract);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to click on different tariff");
			Assert.fail("Unable to click on different tariff");

		}
	}

	@Given("^Select any Random Tariff in the displayed list of Tariffs under different ([^\"]*) tab$")
	public void select_any_Random_Tariff_in_the_displayed_list_of_Tariffs_under_different_Months_tab(String Contract)
			throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMSimOPage.class);
			PAYMSimOPageActions.SelectTariffPhonesTab(Contract);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select Random Tariff ");
			Assert.fail("Unable to select Random Tariff ");

		}
	}

	@And("^Select Recommended Tariff in the displayed list of Tariffs under different ([^\"]*) tab$")
	public void select_Recommended_Tariff_in_the_displayed_list_of_Tariffs_under_different_Months_tab(String Contract)
			throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMSimOPage.class);
			PAYMSimOPageActions.SelectRecommendedTariffPhonesTab(Contract);
			// PAYMSimOPageActions.SelectPromotionTariff(Contract);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select Recommended Tariff ");
			Assert.fail("Unable to select Recommended Tariff ");

		}

	}

	@Given("^add Accessories to basket within limit in details page and navigate to basket$")
	public void add_Accessories_to_basket_within_limit_in_details_page_and_navigate_to_basket() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, AccessoryPage.class);
			PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
			AccessoryPageActions.selectAnyAccessoryLimit();
			// NonConnectedDeviceDetailsPageAction.ClickonBasketIcon();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to add accessories to basket");
			Assert.fail("Unable to add accessories to basket");

		}

	}

	@Given("^add FitnessTracker to basket within limit in details page and navigate to basket$")
	public void add_FitnessTracker_to_basket_within_limit_in_details_page_and_navigate_to_basket() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, AccessoryPage.class);
			PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
			FitnessTrackerPageActions.AddtoBasketFitnessTracker();
			// NonConnectedDeviceDetailsPageAction.ClickonBasketIcon();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to add Fitnesstracker to basket");
			Assert.fail("Unable to add Fitnesstracker to basket");
		}
	}

	@Given("^add SmartWatch to basket within limit in details page and navigate to basket$")
	public void add_SmartWatch_to_basket_within_limit_in_details_page_and_navigate_to_basket() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
			PageFactory.initElements(driver, SmartwatchesPage.class);
			SmartwatchesPageActions.AddtoBasketSmartwatchTracker();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to add SmartWatch to basket");
			Assert.fail("Unable to add SmartWatch to basket");

		}
	}

	@Given("^Choose some Accesssory$")
	public void Choose_some_Accesssory() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.addAccessory();
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to choose Accesssory");
			Assert.fail("Unable to choose Accesssory");

		}

	}

	@And("^Choose all Accesssory$")
	public void ChooseMoreAccessory() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			System.out.println("Entering Choose All accessory method");
			PAYMandPAYGTariffAndExtrasPageActions.addMoreAccessory();
			System.out.println("Completed Choose All accessory method");
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to choose Accesssory");
			Assert.fail("Unable to choose Accesssory");

		}

	}

	@Given("^Signin using valid ([^\"]*) and ([^\"]*) credentials$")
	public void signin_using_valid_ink_jun_and_test_credentials(String username, String password) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.Login(username, password);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to signin using credentials");
			Assert.fail("Unable to signin using credentials");

		}
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
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.TariffSelect("Randomtariff");
			// PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Land on Tariff and extras page");
			Assert.fail("Unable to Land on Tariff and extras page");

		}

	}

	@And("^Land on the 'Tariffs and extra' page selecting pay device in full$")
	public void land_on_the_Tariffs_and_extra_page_selecting_pay_device_in_full() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.TariffSelect("fullpaymenttariff1");
			// PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to pay tariff in full");
			Assert.fail("Unable to pay tariff in full");

		}

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
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
			Thread.sleep(3000);
			BasketPageActions.ValidateBasketPageContents();
			BasketPageActions.CollectionorDelivery("homeDelivery");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Land on the basket page and choose home delivery option");
			Assert.fail("Unable to Land on the basket page and choose home delivery option");

		}
	}

	@Given("Check for order contract text in Basket Page")
	public void check_for_order_contract_text_in_basket_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			BasketPageActions.checkOrderContractTextBP();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Check for order contract text in Basket Page");
			Assert.fail("Unable to Check for order contract text in Basket Page");

		}
	}

	@Given("Check for order contract text for DD/PreOrder phone in Basket Page")
	public void check_for_order_contract_text_for_DD_or_PreOrder_in_basket_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			BasketPageActions.checkOrderContractTextDDPOBP();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Check for order contract text for DD/PreOrder phone in Basket Page");
			Assert.fail("Unable to Check for order contract text for DD/PreOrder phone in Basket Page");

		}
	}

	@And("^I Land on the basket page and choose to collect from store$")
	public void i_Land_on_the_basket_page_and_choose_to_collect_from_store() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
			Thread.sleep(3000);
			BasketPageActions.ValidateBasketPageContents();
			BasketPageActions.CollectionorDelivery("clickAndCollect");
			Thread.sleep(3000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Land on the basket page and choose to collect from store");
			Assert.fail("Unable to Land on the basket page and choose to collect from store");
		}
	}

	@Given("^I Land on the Non Phone related basket page and choose home delivery option$")
	public void NonPhoneRelatedBasketPage() throws InterruptedException {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			Thread.sleep(3000);
			// Assert.assertEquals("The condition is ",
			// driver.findElement(By.xpath("//*[@value='Go to checkout'][1]")));
			BasketPageActions.BasketContentsforNonConnected();
			BasketPageActions.CollectionorDelivery("homeDelivery");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Land on the Non Phone related basket page and choose home delivery option");
			Assert.fail("Unable to Land on the Non Phone related basket page and choose home delivery option");
		}

	}

	@And("^I Land on the Plan included basket page and choose home delivery option$")
	public void i_Land_on_the_Plan_included_basket_page_and_choose_home_delivery_option() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			Thread.sleep(3000);
			BasketPageActions.PlanOnlyPageContents();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Land on the Plan included basket page and choose home delivery option");
			Assert.fail("Unable to Land on the Plan included basket page and choose home delivery option");
		}
	}

	@Given("^Apply a ([^\"]*)$")
	public void Apply_Voucher(String Voucher) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			Thread.sleep(2000);
			BasketPageActions.PromoCode(Voucher);
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Apply voucher");
			Assert.fail("Unable to Apply voucher");

		}
	}

	@And("^click on \"([^\"]*)\" button$")
	public void CheckoutFromBasket(String arg1) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			Thread.sleep(2000);
			BasketPageActions.gotoCheckout();
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to click on Go to Checkout button");
			Assert.fail("Unable to click on Go to Checkout button");

		}
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

	@And("^input ([^\"]*) and ([^\"]*) and other valid details in Delivery page and Click on the 'Continue button'$")
	public void DeliveryPage_Inputs_homeDelivery(String Firstname, String Surname) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, DeliveryPage.class);
			DeliveryPageActions.SetDelivery();
			Thread.sleep(2000);
			DeliveryPageActions.AboutYou(Firstname, Surname);
			Thread.sleep(2000);
			DeliveryPageActions.ClickContinue();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to input details in delivery page");
			Assert.fail("Unable to input details in delivery page");

		}
	}

	@And("^input ([^\"]*) and ([^\"]*) and other valid details in Delivery page for Click and collect and Click on the 'Continue button'$")
	public void DeliveryPage_Inputs_ClickandCollect(String Firstname, String Surname) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, DeliveryPage.class);
			DeliveryPageActions.AboutYou(Firstname, Surname);
			DeliveryPageActions.ClickContinue();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to input details in delivery page");
			Assert.fail("Unable to input details in delivery page");

		}
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

	@And("^land on the payment page and input ([^\"]*) and other details and click 'Continue on next step'$")
	public void CreditCheckPaymentPage_HomeDelivery(String Username) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PaymentPage.class);
			PaymentPageActions.Set_Bank_details(Username);
			Thread.sleep(2000);
			PaymentPageActions.Time_At_Address();
			Thread.sleep(2000);
			PaymentPageActions.Card_Details(Username);
			Thread.sleep(75000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to input details in payment page");
			Assert.fail("Unable to input details in payment page");

		}
	}

	@And("^land on the payment page and input ([^\"]*) and other details for Click and collect order and click 'Continue on next step'$")
	public void CreditCheckPaymentPage_ClickAndCollect(String Username) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PaymentPage.class);
			PaymentPageActions.Set_Bank_details(Username);
			Thread.sleep(3000);
			PaymentPageActions.Time_At_Address_CC();
			Thread.sleep(3000);
			PaymentPageActions.Card_Details(Username);
			Thread.sleep(75000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to input details in payment page");
			Assert.fail("Unable to input details in payment page");

		}
	}

	@Given("^land on the Non Credit check payment page and input ([^\"]*) and other details and click 'Continue on next step'$")
	public void NonCreditCheckPaymentPage_HomeDelivery(String Username) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PaymentPage.class);
			PaymentPageActions.ValidateNonCreditPaymentPage();
			Thread.sleep(2000);
			PaymentPageActions.Card_Details(Username);
			Thread.sleep(25000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to input details in payment page");
			Assert.fail("Unable to input details in payment page");

		}

	}

	@Given("^I land on the payment page and input all the details for high value Click and collect order and click 'Continue on next step'$")
	public void CreditCheckPaymentPage_ClickAndCollect_highvalue() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PaymentPage.class);
			PaymentPageActions.Set_Bank_details_hv();
			Thread.sleep(5000);
			PaymentPageActions.Time_At_Address_CC();
			Thread.sleep(5000);
			PaymentPageActions.Card_Details_hv();
			driver.switchTo().defaultContent();
			Thread.sleep(10000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to input details in payment page");
			Assert.fail("Unable to input details in payment page");

		}
	}

	/*
	 * ############## All the Below are for the Additional Information section
	 * ###################
	 */

	@Then("^Additional information page should be displayed$")
	public void AdditionalInformation() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, AdditionalInformationPage.class);
			AdditionalInformationPageActions.gettitlepage();
			Thread.sleep(2000);
			AdditionalInformationPageActions.SectionsDisplayed();
			Thread.sleep(10000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Information is missing for Additional information page");
			Assert.fail("Information is missing for Additional information page");

		}
	}

	@Then("^upon entering Valid details with valid new ([^\"]*) and card number$")
	public void EnterValidCard(String Username2) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, AdditionalInformationPage.class);
			Thread.sleep(2000);
			AdditionalInformationPageActions.AdditionalCardDetails(Username2);
			Thread.sleep(4000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("unable to add details in Additional information page");
			Assert.fail("unable to add details in Additional information page");

		}
		// AdditionalInformationPageActions.ClickOn();
		// Thread.sleep(10000);

	}

	/*
	 * ############## All the Below are for the Agreements Validations
	 * ###################
	 */

	@Given("^Continue to Agreements page and confirm all the agreement checks$")
	public void AgreementsPageConfirmation() throws Throwable {
		try {
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
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println(
					"Agreements page is not displayed or unable to enter some information in thie page, Please review the screenshots for failure");
			Assert.fail(
					"Agreements page is not displayed or unable to enter some information in thie page, Please review the screenshots for failure");

		}
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

	@And("^Continue to Review page and review the order$")
	public void ReviewPageConfirmation() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ReviewPage.class);
			ReviewPageActions.gettitlepage();
			ReviewPageActions.TermsCheckBox();
			ReviewPageActions.PayNow();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println(
					"Unable to Continue to Review page and review the order or unable to enter some information in this page, Please review the screenshots for failure");
			Assert.fail(
					"Unable to Continue to Review page and review the order or unable to enter some information in this page, Please review the screenshots for failure");

		}
	}

	@Given("^Continue to Review page, check order contract text and review the order$")
	public void ReviewPageOrderContractTextConfirmation() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// try {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, ReviewPage.class);
		ReviewPageActions.gettitlepage();
		ReviewPageActions.TermsCheckBox();
		ReviewPageActions.checkOrderContractTextRP();
		ReviewPageActions.PayNow();
		/*
		 * } catch (Exception e) { // TODO Auto-generated catch block
		 * System.out.println(
		 * "Unable to Continue to Review page and review the order or unable to enter some information in this page, Please review the screenshots for failure"
		 * ); //Assert.fail( //
		 * "Unable to Continue to Review page and review the order or unable to enter some information in this page, Please review the screenshots for failure"
		 * );
		 * 
		 * 
		 * }
		 */
	}

	@Given("^Continue to Review page and review the order for Trustev details$")
	public void ReviewPageConfirmationwithTrustev() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ReviewPage.class);
			ReviewPageActions.gettitlepage();
			ReviewPageActions.checktrustev();
			ReviewPageActions.TermsCheckBox();
			ReviewPageActions.PayNow();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println(
					"Unable to Continue to Review page and review the order or unable to enter some information in this page, Please review the screenshots for failure");
			Assert.fail(
					"Unable to Continue to Review page and review the order or unable to enter some information in this page, Please review the screenshots for failure");

		}
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

		String ExpOrderContractMsg = "";

		try {

			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,300)", "");

			ExpOrderContractMsg = "Your contract will not start until the order is on its way.";

			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, OrderConfirmationPage.class);

			Assert.assertTrue(
					"Assertion Failed: Expected Message: " + ExpOrderContractMsg + " is not present in the page",
					driver.getPageSource().contains(ExpOrderContractMsg));

			System.out.println("Assertion Passed: Expected Mesasge: " + ExpOrderContractMsg
					+ " is present in the Order Confirmation page");
		} catch (AssertionError e) {

			System.out.println(
					"Assertion Failed: Expected Message: " + ExpOrderContractMsg + " is not present in the page");

		}

	}

	@Then("^order confirmation is displayed$")
	public void OrderConfirmationPage() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, OrderConfirmationPage.class);
			OrderConfirmationPageActions.gettitlepage();
			OrderConfirmationPageActions.MessageDisplayed();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Error in order confirmation page , Please review the screenshots for failure");
			Assert.fail("Error in order confirmation page , Please review the screenshots for failure");

		}
	}

	@Then("^Order Decline page should be displayed$")
	public void OrderDeclinePage() throws Throwable {
		try {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, OrderConfirmationPage.class);
			OrderConfirmationPageActions.gettitlepage();
			OrderConfirmationPageActions.MessageDisplayed();
			// /Assert.assertEquals(MessageDisplayed(), actual);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to get Order Decline page");
			Assert.fail("Unable to get Order Decline page");

		}

	}

	@Then("^order confirmation is displayed with Volte message$")
	public void OrderConfirmationVolte() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, OrderConfirmationPage.class);
			OrderConfirmationPageActions.gettitlepage();
			// OrderConfirmationPageActions.MessageDisplayed();
			OrderConfirmationPageActions.OrderConfirmationPageSections();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to get Order confirmation page with volte message");
			Assert.fail("Unable to get Order confirmation page with volte message");

		}
	}

	/*********************************
	 * Below is for Agent shop
	 ****************************************/

	/*
	
	 */
	@Given("^I login to Agent shop$")
	public void LoginAgentShop() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			String relativePath = System.getProperty("user.dir");
			String EnvPropFilePath = relativePath + "\\Configurations\\Properties\\AppConfig.properties";
			String Newurl = Filereadingutility.getPropertyValue(EnvPropFilePath, "AgentUrl");
			driver.navigate().to(Newurl);
			Agent_HomePagePageActions.ValidateAgentHomepage();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Login/validate home page, please see the failure screenshot");
			Assert.fail("Unable to Login/validate home page, please see the failure screenshot");

		}

	}

	@Given("^select a valid Handset and Tariff combination$")
	public void select_a_valid_Handset_and_Tariff_combination() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_DealBuilderPage.class);
			Agent_DealBuilderPageActions.HandsetTariffCombination();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to select valid tariff and handset combination");
		}
	}

	@Given("^Select valid ([^\"]*) from extras tab$")
	public void select_valid_Random_from_extras_tab(String Extras) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_DealBuilderPage.class);
			Agent_DealBuilderPageActions.SelectExtras(Extras);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Unable to select extras");
		}
	}

	@Then("^Update Device Plan Link Email Address$")
	public void updatedeviceplan() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id='updateEmailAddressProceedButton']")).click();
		System.out.println("Updated Device Plan Link Email Address");
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id='secciYesButton']")).click();
		System.out.println("Clicked on the O2 Refresh Deal Summary YES button");

	}

	@Then("^Register customer with valid email address and password$")
	public void register_customer_with_valid_email_address_and_password() throws Throwable {

	}

	@Then("^CCALink Should be generated$")
	public void ccaLink() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//*[@id='generateCcaForm']/input[1]")).click();
		System.out.println("Clicked on the Generate CCA link");
		Thread.sleep(5000);
		String CCALinkDetails = driver.findElement(By.xpath("//*[@id='ccaContent']")).getText();
		System.out.println(CCALinkDetails);
	}

	@When("^user select CCA link$")
	public void user_select_CCA_link() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
	}

	@Then("^user should land on signin page$")
	public void user_should_land_on_signin_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}

	@When("^user enters valid user credentials$")
	public void user_enters_valid_user_credentials() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^user should be logged in and user should be directly taken to the Otac Page$")
	public void user_should_be_logged_in_and_user_should_be_directly_taken_to_the_Otac_Page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^continue in Delivery page and Click on the 'Continue'$")
	public void continue_in_Delivery_page_and_Click_on_the_Continue() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

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
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_HomePage.class);
			Agent_HomePagePageActions.FindUser(msisdn);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to login for upgrade for user in Agent shop, please see the failure screenshot");
			Assert.fail("Unable to login for upgrade for user in Agent shop, please see the failure screenshot");

		}
	}

	@Given("^performs Acquisition for New user$")
	public void performs_Acquisition_for_New_user() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_HomePage.class);
			Agent_HomePagePageActions.NewUser();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out
					.println("Unable to perform Acquistion for user in Agent shop, please see the failure screenshot");
			Assert.fail("Unable to perform Acquistion for user in Agent shop, please see the failure screenshot");

		}
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
		try {
			driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_DealBuilderPage.class);
			Agent_DealBuilderPageActions.SelectPAYMDevice(Device);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select Valid device, please see the failure screenshot");
			Assert.fail("Unable to select Valid device, please see the failure screenshot");

		}

	}

	@Given("^Select a valid PAYG ([^\"]*)")
	public void select_a_valid_PAYG_S_edge_black_GB(String Device) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_DealBuilderPage.class);
			Agent_DealBuilderPageActions.SelectPayGDevice(Device);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select Valid PAYG device, please see the failure screenshot");
			Assert.fail("Unable to select Valid PAYG device, please see the failure screenshot");
		}
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
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_DealBuilderPage.class);
			Agent_DealBuilderPageActions.eMailBasket();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to email basket, please see the failure screenshot");
			Assert.fail("Unable to email basket, please see the failure screenshot");

		}
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
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_DealBuilderPage.class);
			Agent_DealBuilderPageActions.SelectPayGTariff(Tariff);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select valid payg tariff, please see the failure screenshot");

			Assert.fail("Unable to select valid payg tariff, please see the failure screenshot");

		}
	}

	@Given("^Select a valid Accessory ([^\"]*)")
	public void Select_Accessory(String Device) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_DealBuilderPage.class);
			Agent_DealBuilderPageActions.SelectAccessoryDevice(Device);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select accessory basket, please see the failure screenshot");
			Assert.fail("Unable to select accessory basket, please see the failure screenshot");

		}
	}

	@Given("^Select valid ([^\"]*) from tariffs tab$")
	public void SelectTariff(String Tariff) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_DealBuilderPage.class);
			Agent_DealBuilderPageActions.SelectTariff(Tariff);
			// System.out.println("Selecting a valid tariff");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select valid tariff, please see the failure screenshot");
			Assert.fail("Unable to select valid tariff, please see the failure screenshot");

		}

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
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_DealBuilderPage.class);
			Agent_DealBuilderPageActions.ValdiateBasket();
			Thread.sleep(2000);
			Agent_DealBuilderPageActions.checkout();
			Thread.sleep(7000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to validate basket content/checkout , please see the failure screenshot");
			Assert.fail("Unable to validate basket content/checkout , please see the failure screenshot");

		}
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
		try {
			driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_AdvisoryPage.class);
			Agent_AdvisoryChecksActions.AgreeAdvsioryCheck();
			Thread.sleep(6000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to perform advisory checks , please see the failure screenshot");
			Assert.fail("Unable to perform advisory checks , please see the failure screenshot");

		}
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
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_CreditCheckDetailsPage.class);
			Agent_CreditCheckPageActions.Creditcheck(Firstname, Surname);
			Agent_CreditCheckPageActions.BankDetails(Username);
			Thread.sleep(30000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to perform credit checks , please see the failure screenshot");
			Assert.fail("Unable to perform credit checks , please see the failure screenshot");

		}

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
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_RegisterCustomerPage.class);
			Agent_RegisterCustomerActions.PayGRegistration(Firstname, Surname);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Register customer , please see the failure screenshot");
			Assert.fail("Unable to Register customer , please see the failure screenshot");

		}

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
		// driver.findElement(By.xpath("//*[@id='deliveryDateTime']/div/table/tbody/tr[2]/td[2]/a")).click();
		// Thread.sleep(5000);
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
		try {
			PageFactory.initElements(driver, Agent_RegisterCustomerPage.class);
			Agent_RegisterCustomerActions.PaybyCard();
			Agent_RegisterCustomerActions.CardDetails();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Pay by card , please see the failure screenshot");
			Assert.fail("Unable to Pay by card , please see the failure screenshot");

		}
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
		try {
			driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_ConfirmationPage.class);
			Agent_ConfirmationPageActions.Confirmationdetails();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to get order confirmation screen , please see the failure screenshot");
			Assert.fail("Unable to get order confirmation screen , please see the failure screenshot");

		}
	}

	///////// ***********************************/////////////

	///////// ***********************************/////////////
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
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			Thread.sleep(3000);
			BasketPageActions.JuneReleaseBasketContent();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to validate basket in basket page , please see the failure screenshot");
			Assert.fail("Unable to validate basket in basket page , please see the failure screenshot");

		}
	}

	@Then("^Verify that correct quantity of devices are displayed in Basket page$")
	public void verifytheQuantityBasketPage() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			JuneReleaseValidations.QuantityValidationsBasket();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to validate Quantity , please see the failure screenshot");
			Assert.fail("Unable to validate Quantity , please see the failure screenshot");

		}
	}

	@Then("^Verify that correct quantity of devices are displayed in Delivery page$")
	public void verifytheQuantityDeliveryPage() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			JuneReleaseValidations.QuantityValidationsDelivery();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to validate Quantity in Delivery page, please see the failure screenshot");
			Assert.fail("Unable to validate Quantity in Delivery page, please see the failure screenshot");

		}

	}

	@Then("^Verify that correct quantity of devices are displayed in Delivery page after update$")
	public void verifyUpdatedQuantityDeliveryPage() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			JuneReleaseValidations.updatedQuantityValidationsDelivery();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to validate Quantity in Delivery page, please see the failure screenshot");

			Assert.fail("Unable to validate Quantity in Delivery page, please see the failure screenshot");

		}
	}

	@Then("^Verify that correct quantity of devices are displayed in Review page$")
	public void verifytheQuantityReviewPage() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			JuneReleaseValidations.QuantityValidationsReview();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to validate Quantity in Review page, please see the failure screenshot");

			Assert.fail("Unable to validate Quantity in Review page, please see the failure screenshot");

		}
	}

	@Then("^Verify that correct quantity of Grouped non connected items are displayed in Basket page$")
	public void verifytheQuantityBasketPageGrouped() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			JuneReleaseValidations.QuantityValidationsBasket_Grouped();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to validate Quantity , please see the failure screenshot");
			Assert.fail("Unable to validate Quantity , please see the failure screenshot");

		}
	}

	@Then("^Verify that correct quantity of Grouped non connected items are displayed in Delivery page$")
	public void verifytheQuantityDeliveryPageGrouped() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			JuneReleaseValidations.QuantityValidationsDelivery_Grouped();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to validate Quantity , please see the failure screenshot");
			Assert.fail("Unable to validate Quantity , please see the failure screenshot");

		}
	}

	@Then("^Verify that correct quantity of Grouped non connected items are displayed in Review page$")
	public void verifytheQuantityReviewPageGrouped() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			JuneReleaseValidations.QuantityValidationsReviewPage_Grouped();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to validate Quantity , please see the failure screenshot");
			Assert.fail("Unable to validate Quantity , please see the failure screenshot");

		}
	}

	@Then("^navigate back to Basket page$")
	public void navigate_back_to_Basket_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			JuneReleaseValidations.NavigatebackFromDelivery();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Navigate back , please see the failure screenshot");
			Assert.fail("Unable to Navigate back , please see the failure screenshot");

		}
	}

	@Then("^Change the quantity of the items$")
	public void change_the_quantity_of_the_items() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			JuneReleaseValidations.ChangeQuantity();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to validate Quantity , please see the failure screenshot");
			Assert.fail("Unable to validate Quantity , please see the failure screenshot");

		}
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
		try {
			UpgradeCustomerPageActions.UpgradeUpsellPromoModule_Validation();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to validate promo modules , please see the failure screenshot");
			Assert.fail("Unable to validate promo modules , please see the failure screenshot");

		}

	}

	@Then("^I should be displayed with Go to My O(\\d+) CTA and on clicking on it should land me to My O(\\d+) page$")
	public void i_should_be_displayed_with_Go_to_My_O_CTA_and_on_clicking_on_it_should_land_me_to_My_O_page(int arg1,
			int arg2) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, UpgradeCustomerPageActions.class);
		try {
			UpgradeCustomerPageActions.UpgradeUpsellPromoModule_MyO2Action();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to validate go to MyO2 CTA , please see the failure screenshot");
			Assert.fail("Unable to validate go to MyO2 CTA , please see the failure screenshot");

		}

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
		try {
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.UpgradeUpsellPromoModule_iPadAction();
			Autoredirection.redirect();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to click on ipad promo module , please see the failure screenshot");
			Assert.fail("Unable to click on ipad promo module , please see the failure screenshot");
		}
	}

	@When("^input ([^\"]*) and ([^\"]*) and other valid details in Delivery page and Click on the 'Send me my sim'$")
	public void input_TEST_and_ACCEPTA_and_other_valid_details_in_Delivery_page_and_Click_on_the_Send_me_my_sim(
			String Firstname, String Surname) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
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
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to validate details in delivery page, please see the failure screenshot");
			Assert.fail("Unable to validate details in delivery page, please see the failure screenshot");

		}

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
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.UpgradeUpsellPromoModule_TabletAction();
			Autoredirection.redirect();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to pick a sim on tablet promo , please see the failure screenshot");
			Assert.fail("Unable to pick a sim on tablet promo , please see the failure screenshot");
		}

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
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.UpgradeUpsellPromoModule_DongleAction();
			Autoredirection.redirect();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to pick promo module, please refer to failed screenshot");

		}

	}

	@Given("^verify that error message is thrown$")
	public void verify_that_error_message_is_thrown() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			Thread.sleep(2000);
			BasketPageActions.ValidatePromoCode();
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Unable to verify error message is thrown or not, please refer to screenshot");
		}
	}

	@Given("^Apply the ([^\"]*) twice$")
	public void Apply_Voucher_twice(String Voucher) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			Thread.sleep(2000);
			BasketPageActions.PromoCode(Voucher);
			Thread.sleep(2000);
			BasketPageActions.PromoCode(Voucher);
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Unable to apply promocode");
		}

	}

	/////////////////////////////// June
	/////////////////////////////// Release////////////////////////////////////////

	@Given("^Navigate to device details page, check if the selected device is Delayed Delivery and select ([^\"]*)$")
	public void Navigate_to_device_details_page_check_if_DD_and_select_color(String color) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
			ConnectedDeviceDetailsPageAction.GetTitle();
			Thread.sleep(3000);
			ConnectedDeviceDetailsPageAction.colorSelectOfDevice(color);
			Thread.sleep(3000);
			ConnectedDeviceDetailsPageAction.checkDevStatusAsDelayedDelivery();
			Thread.sleep(2000);
			ConnectedDeviceDetailsPageAction.ViewAllTariffs();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Unable to Navigate to device details page, check if the selected device is Delayed Delivery ");
		}
	}

	@Given("^Navigate to device details page, check if the selected device is Pre Order and select ([^\"]*)$")
	public void Navigate_to_device_details_page_check_if_PO_and_select_color(String color) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
			ConnectedDeviceDetailsPageAction.GetTitle();
			Thread.sleep(3000);
			ConnectedDeviceDetailsPageAction.colorSelectOfDevice(color);
			Thread.sleep(3000);
			ConnectedDeviceDetailsPageAction.checkDevStatusAsPreOrder();
			Thread.sleep(2000);
			ConnectedDeviceDetailsPageAction.ViewAllTariffs();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Navigate to device details page, check if the selected device is Pre Order");
		}
	}

	@Given("^I Land on the basket page$")
	public void i_Land_on_the_basket_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
			Thread.sleep(3000);
			BasketPageActions.ValidateBasketPageContents();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Unable to land on Basket page");
		}
	}

	@Given("Select ([^\"]*) from accessories")
	public void select_accessory(String accessoryname) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, AccessoryPage.class);
			Thread.sleep(2000);
			AccessoryPageActions.SelectAnyAccessory(accessoryname);
			Thread.sleep(3000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Unable to select any accessory");
		}

	}

	@Given("Choose ([^\"]*) and add to basket")
	public void choose_color(String color) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
			Thread.sleep(2000);
			NonConnectedDeviceDetailsPageAction.clickCloseBtn();
			Thread.sleep(2000);
			NonConnectedDeviceDetailsPageAction.colorSelectOfDevice(color);
			NonConnectedDeviceDetailsPageAction.AddtoBasket();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Unabel to choose device and add to basket");
		}
	}

	@Given("Select existing account and begin fast checkout")
	public void Select_existing_account_and_begin_fast_checkout() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, DeliveryPage.class);
			DeliveryPageActions.selectExistingAcctAndFastCheckOut();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to select existing account");

		}
	}

	@Given("Check stock extended message in Delivery page")
	public void Check_stock_extended_message_in_Delivery_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, DeliveryPage.class);
			DeliveryPageActions.checkStockExtMsgDP();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to check stock extended message");

		}
	}

	@Given("^Input ([^\"]*) and ([^\"]*) and other valid details in Delivery page$")
	public void Entering_DeliveryPage_Inputs_HomeDelivery(String Firstname, String Surname) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, DeliveryPage.class);
			DeliveryPageActions.SetDelivery();
			Thread.sleep(2000);
			DeliveryPageActions.AboutYou(Firstname, Surname);
			Thread.sleep(2000);
			// DeliveryPageActions.ClickContinue();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to input details in delivery page");

		}
	}

	@Given("^Click on Continue button$")
	public void clickOnContinueButton(String Firstname, String Surname) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, DeliveryPage.class);
			DeliveryPageActions.ClickContinue();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to click on continue button");

		}
	}

	@Given("^Check stock extended message for ([^\"]*)$")
	public void checkStockExtMsg(String product) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, OrderSummarySection.class);
			OrderSummarySectionActions.checkStockExtMessage(product);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to Check stock extended message");

		}
	}

	@Given("^land on the payment page, check stock limited message for ([^\"]*) and input ([^\"]*) and other details and click 'Continue on next step'$")
	public void CreditCheckPaymentPage_check_stock_limited_msg_HomeDelivery(String Username, String product)
			throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, PaymentPage.class);
			PageFactory.initElements(driver, OrderSummarySection.class);
			PaymentPageActions.Set_Bank_details(Username);
			Thread.sleep(2000);
			OrderSummarySectionActions.checkStockExtMessage(product);
			Thread.sleep(2000);
			OrderSummarySectionActions.checkStockExtMessageDelText();
			Thread.sleep(3000);
			PaymentPageActions.Time_At_Address();
			Thread.sleep(2000);
			PaymentPageActions.Card_Details(Username);
			Thread.sleep(75000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("unable to land on the payment page, check stock limited message");

		}
	}

	@Given("^land on the payment page and input ([^\"]*) and other details for upgrade and click 'Continue on next step'$")
	public void CreditCheckPaymentPage_Upgrade(String Username) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, PaymentPage.class);
			PageFactory.initElements(driver, DeliveryPage.class);
			DeliveryPageActions.ClickContinue();
			Thread.sleep(2000);
			PaymentPageActions.Time_At_Address();
			Thread.sleep(2000);
			PaymentPageActions.Card_Details(Username);
			Thread.sleep(75000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("land on the payment page, Please refer to screenshots");

		}
	}

	@Given("^land on the payment page, check stock extended message for ([^\"]*) and input ([^\"]*) and other details for upgrade and click 'Continue on next step'$")
	public void CreditCheckPaymentPage_check_Stock_ext_msg_Upgrade(String Username, String product) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
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
			Thread.sleep(75000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unabel to land on payment page");

		}
	}

	@Given("^Continue to Agreements page, check stock extended message for ([^\"]*) and confirm all the agreement checks$")
	public void AgreementsPageConfirmation_alongwith_stock_ext_msg(String product) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, AgreementPage.class);
			PageFactory.initElements(driver, ReviewPage.class);
			PageFactory.initElements(driver, OrderSummarySection.class);
			Thread.sleep(10000);
			AgreementPageActions.gettitlepage();
			Thread.sleep(3000);
			OrderSummarySectionActions.checkStockExtMessage(product);
			Thread.sleep(2000);
			OrderSummarySectionActions.checkStockExtMessageDelText();
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
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to continue to Agreements page");

		}
	}

	@Given("^Continue to Review page, check order contract text, stock extended message for ([^\"]*) and review the order$")
	public void ReviewPageStockExtMsgConfirmation(String product) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, ReviewPage.class);
			PageFactory.initElements(driver, OrderSummarySection.class);
			ReviewPageActions.gettitlepage();
			Thread.sleep(2000);
			ReviewPageActions.checkOrderContractTextRP();
			Thread.sleep(2000);
			ReviewPageActions.checkStockExtMsgRP(product);
			Thread.sleep(2000);
			ReviewPageActions.checkDelTextRP();
			Thread.sleep(3000);
			OrderSummarySectionActions.checkStockExtMessage(product);
			Thread.sleep(2000);
			OrderSummarySectionActions.checkStockExtMessageDelText();
			Thread.sleep(2000);
			ReviewPageActions.TermsCheckBox();
			Thread.sleep(2000);
			ReviewPageActions.PayNow();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to continue to review page");

		}
	}

	@Given("^I am existing user and I click on Signin button$")
	public void I_am_existing_user_and_I_click_on_Signin_button() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, ShopLandingPage.class);
			ShopLandingPageAction.clickSignIn();
			// Autoredirection.redirectUpgrades();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to use as existing user");

		}

	}

	@Given("^Navigate to upgrade phone$")
	public void navigate_to_upgrade_phone() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, MouseHoverPage.class);
			PageFactory.initElements(driver, UpgradePhonesListingPage.class);
			MouseHoverAction.UpgradeandUpgradeNow();
			Thread.sleep(5000);
			// Autoredirection.redirectUpgrades();
			UpgradeCustomerPageActions.viewAllPhones();
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to navigate to upgrade phones");

		}
	}

	@Given("^I choose upgrade PayM ([^\"]*)$")
	public void Choose_upgradePAYM_Handset(String handset) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, UpgradePhonesListingPage.class);
			PageFactory.initElements(driver, PhonesListingPage.class);
			Thread.sleep(3000);
			UpgradeCustomerPageActions.upgradePAYMPhoneSelect(handset);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to choose upgrade paym Device");

		}
	}
	/*
	 * ================================
	 * 
	 * July release
	 * 
	 * ================================
	 */

	@And("^click on Add to Basket button$")
	public void click_on_Add_to_Basket_button() throws Throwable {

		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
			NonConnectedDeviceDetailsPageAction.AddtoBasket();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to click on Add to Basket button");
		}
	}

	@And("^click on continue shopping button$")
	public void click_on_continue_shopping_button() throws Throwable {

		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BasketPage.class);
			BasketPageActions.continueShopping();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to click on Add to Basket button");
		}
	}

	@And("^navigate to PAYM Tablets page$")
	public void navigate_to_PAYM_Tablets_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.PayMTabletsLandingPage();

			Autoredirection.redirect();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("unable to do mousehover to tablets");
			Assert.fail("unable to do mousehover to tablets");
		}
	}

	@And("^select any available \"([^\"]*)\" Tablet$")
	public void select_any_available_Tablet(String arg1) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, TabletPage.class);
			TabletPageActions.DeviceSelect("Random Device");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select tablet");
			Assert.fail("Unable to select tablet");
		}
	}

	@And("^I choose ([^\"]*) Smartwatch$")
	public void i_choose_smartwatch(String elementName) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, SmartwatchesPage.class);
			SmartwatchesPageActions.DeviceSelect(elementName);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select MBB PayG device");
			Assert.fail("Unable to select MBB PayG device");

		}
	}

	@And("^I choose ([^\"]*) FitnessTracker$")
	public void i_choose_fitnesstracker(String elementName) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, FitnessTrackerPage.class);
			FitnessTrackerPageActions.DeviceSelect(elementName);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select FitnessTracker");
			Assert.fail("Unable to select FitnessTracker");

		}
	}

	@And("^I choose ([^\"]*) Tablet$")
	public void i_choose_Tablet(String elementName) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, TabletPage.class);
			TabletPageActions.DeviceSelect(elementName);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select tablet");
			Assert.fail("Unable to select tablet");
		}
	}

	@And("^verify the elements$")
	public void verify_the_elements() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMSimOPage.class);
			PAYMSimOPageActions.elementSelected();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("not able to verify if phone tab is selected");
			Assert.fail("not able to verify if phone tab is selected");
		}
	}

	@Given("^add quantity of accessories to basket within ([^\"]*) in details page and navigate to basket$")
	public void addQuantityAccessories(String Limit) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, AccessoryPage.class);
			PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
			AccessoryPageActions.UserSpecifiedAccessoryLimit(Limit);
			// NonConnectedDeviceDetailsPageAction.ClickonBasketIcon();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to add accessories to basket");
			Assert.fail("Unable to add accessories to basket");

		}

	}

	@And("^add quantity of FitnessTracker to basket within ([^\"]*) in details page and navigate to basket$")
	public void addQuantityFitnessTracker(String Limit) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, AccessoryPage.class);
			PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
			FitnessTrackerPageActions.UserSpecifiedFitnessTrackerLimit(Limit);
			// NonConnectedDeviceDetailsPageAction.ClickonBasketIcon();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to add Fitnesstracker to basket");
			Assert.fail("Unable to add Fitnesstracker to basket");
		}
	}

	@And("^the previously selected standalone non-connected items should be removed from my basket$")
	public void validateEcomm11522() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			Thread.sleep(3000);
			// BasketPageActions.ValidateContentEcomm11522();
			BasketPageActions.verifyNCDRemovedinBasketPageAfterCDSelection();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to add Fitnesstracker to basket");
			Assert.fail("Unable to add Fitnesstracker to basket");
		}
	}

	@And("^Validate Basket content for non Connected$")
	public void validateBasketNonConnected() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
			Thread.sleep(3000);
			BasketPageActions.BasketContentsforNonConnected();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to add Fitnesstracker to basket");
			Assert.fail("Unable to add Fitnesstracker to basket");
		}
	}

	@Then("^Verify the devices ([^\"]*), ([^\"]*) and ([^\"]*) in basket$")
	public void verify_3_devices_in_basket(String dev1, String dev2, String dev3) {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			BasketPageActions.verifyDevicesInBasket(dev1, dev2, dev3);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("Unable to verify the devices in basket");
			Assert.fail("Unable to verify the devices in basket");
		}
	}

	@Then("^Verify the devices ([^\"]*) and \"([^\"]*)\" in basket$")
	public void verify_2_devices_in_basket(String dev1, String dev2) {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			BasketPageActions.verifyDevicesInBasket(dev1, dev2);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("Unable to verify the devices in basket");
			Assert.fail("Unable to verify the devices in basket");
		}
	}

	@Then("^Verify the device ([^\"]*) in basket$")
	public void verify_1_device_in_basket(String dev1) {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			BasketPageActions.verifyDevicesInBasket(dev1);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("Unable to verify the devices in basket");
			Assert.fail("Unable to verify the devices in basket");
		}
	}

	/*
	 * @And("^Verify the devices ([^\"]*), ([^\"]*) and ([^\"]*) in basket$")
	 * public void verifyDevicesInBasket(String smartwatchname, String
	 * fitnesstrackername, String tabletname) throws Throwable { try {
	 * driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	 * PageFactory.initElements(driver, BasketPage.class);
	 * BasketPageActions.verifyDevicesInBasket(smartwatchname,
	 * fitnesstrackername, tabletname); } catch (Exception e) { // TODO
	 * Auto-generated catch block
	 * System.out.println("not able to verify if phone tab is selected");
	 * Assert.fail("not able to verify if phone tab is selected"); } }
	 */

	@And("^select ([^\"]*) tab$")
	public void select_tab(String tabname) {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMSimOPage.class);
			PAYMSimOPageActions.ElementClick(tabname);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Unable to select tab");
			Assert.fail("Unable to select tab");
		}
	}

	@And("^choose ([^\"]*) contract length$")
	public void choose_contract_length(String contractlength) {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMSimOPage.class);
			PAYMSimOPageActions.SelectRecommendedTariffPhonesTab(contractlength);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Unable to choose contract length");
			Assert.fail("Unable to choose contract length");
		}
	}

	@Then("^check if the selected connected device has more than 1 variant for both colour and capacity$")
	public void check_if_the_selected_device_has_more_than_1_variant_for_both_colour_and_capacity() {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
			ConnectedDeviceDetailsPageAction.isColorDropDownDisplayed();
			ConnectedDeviceDetailsPageAction.isCapacityDropDownDisplayed();

			ConnectedDeviceDetailsPageAction.checkIfMoreThanOneOptionAvailable();

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("The selected device does not have more than 1 variant for both colour and capacity");
			Assert.fail("The selected device does not have more than 1 variant for both colour and capacity");
		}
	}

	@Then("^check if the selected connected device has only 1 variant for both colour and capacity$")
	public void check_if_the_selected_device_has_only_1_variant_for_both_colour_and_capacity() {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
/*			ConnectedDeviceDetailsPageAction.isColorDropDownDisplayed();
			ConnectedDeviceDetailsPageAction.isCapacityDropDownDisplayed();*/
			ConnectedDeviceDetailsPageAction.checkOnlyOneOptionAvailable();

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("The selected device does not have more than 1 variant for both colour and capacity");
			Assert.fail("The selected device does not have more than 1 variant for both colour and capacity");
		}
	}

	@Then("^check if the selected connected device has only 1 variant for capacity and dropdown for colour$")
	public void capacity_1_and_Colour_dropdown() {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
			ConnectedDeviceDetailsPageAction.isColorDropDownDisplayed();
			ConnectedDeviceDetailsPageAction.isCapacityDropDownDisplayed();

			ConnectedDeviceDetailsPageAction.checkOnlyOneCapacityAvailable();
			;

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("The selected device does not have more than 1 variant for both colour and capacity");
			Assert.fail("The selected device does not have more than 1 variant for both colour and capacity");
		}
	}

	@And("^select ([^\"]*) color of the connected device$")
	public void select_color_of_the_device(String color) {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
			ConnectedDeviceDetailsPageAction.colorSelectOfDeviceDropDown(color);

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("selected color" + color);
			Assert.fail("not able to select  color" + color);
		}
	}

	@And("^select ([^\"]*) capacity of the connected device$")
	public void select_capacity_of_the_device(String capacity) {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
			ConnectedDeviceDetailsPageAction.capacitySelectOfDeviceDropDown(capacity);

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("selected color" + capacity);
			Assert.fail("not able to select  color" + capacity);
		}
	}

	@Then("^check if the selected non connected device has more than 1 variant for both colour and capacity$")
	public void check_if_the_selected_non_connected_device_has_more_than_1_variant_for_both_colour_and_capacity() {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
			NonConnectedDeviceDetailsPageAction.isColorDropDownDisplayed();
			NonConnectedDeviceDetailsPageAction.isCapacityDropDownDisplayed();

			NonConnectedDeviceDetailsPageAction.checkIfMoreThanOneOptionAvailable();

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("The selected device does not have more than 1 variant for both colour and capacity");
			Assert.fail("The selected device does not have more than 1 variant for both colour and capacity");
		}
	}

	@And("^select ([^\"]*) color of the non connected device$")
	public void select_color_of_the_non_connected_device(String color) {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
			NonConnectedDeviceDetailsPageAction.colorSelectOfDeviceDropDown(color);

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("selected color" + color);
			Assert.fail("not able to select  color" + color);
		}
	}

	@And("^select ([^\"]*) capacity of the non connected device$")
	public void select_capacity_of_the_non_connected_device(String capacity) {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
			NonConnectedDeviceDetailsPageAction.capacitySelectOfDeviceDropDown(capacity);

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("selected color" + capacity);
			Assert.fail("not able to select  color" + capacity);
		}
	}

	@And("^I click on Continue Shopping link$")
	public void continue_shopping() throws Throwable {
		try {
			log.debug("Running Test Step: @And(I click on Continue Shopping link)");
			AccessoryPageActions.continueShopping();
			log.debug("Pass: Executed continue shopping successfully");
		} catch (Exception e) {
			log.debug("Fail: Cannot carry out Continue shopping action" + e.getMessage() + "");
		}
	}

	@And("^Verify all three non connected devices got added to the basket section before selecting connected device$")
	public void verify_non_Connected_device_added_to_basket() throws Throwable {
		try {
			log.debug(
					"Running Test Step: @And(Verify all three non connected devices got added to the basket section before selecting connected device)");
			AccessoryPageActions.verifyNonConnectedDeviceAddedToBasketBefore();
			log.debug(
					"Pass: Verified that all non connected devices got added to basket successfully before selecting connected device");
		} catch (Exception e) {
			log.debug("Fail: Cannot verify that non connected device added to basket " + e.getMessage() + "");
		}
	}

	@And("^Verify all three non connected devices are still retained in the basket and not overridden$")
	public void verify_non_Connected_device_ratined_in_basket_after_selecting_connected_device() throws Throwable {
		try {
			log.debug(
					"Running Test Step: @And(Verify all three non connected devices are still retained in the basket and not overridden)");
			AccessoryPageActions.verifyNonConnectedDeviceRetainedInBasketAfterPhoneSelection();
			log.debug(
					"Pass: Verified that all non connected devices got added to basket successfully before selecting connected device");
		} catch (Exception e) {
			log.debug("Fail: Cannot verify that non connected device added to basket " + e.getMessage() + "");
		}
	}

	@And("^navigate to Like New Phones page$")
	public void navigate_to_LikeNew_Phones_page() throws Throwable {
		try {
			log.debug("Running Test Step: @And(navigate to Like New Phones page)");
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.likeNewHomepageNavigation();
			Autoredirection.redirect();
			log.debug("Navigated to Like New Phones page successfully");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("unable to do mousehover to like new phones");
			Assert.fail("unable to do mousehover to like new phones");
		}
	}

	@And("^I select to buy a like new phone on Pay Monthly$")
	public void buy_a_like_new_phone_on_pay_monthly() throws Throwable {
		try {
			log.debug("Running Test Step: @And(I select to buy a like new phone on Pay Monthly)");
			scrollToAnElement.scrollToElement(LikeFreePage.Paym);
			LikeFreePage.Paym.click();
			Autoredirection.redirect();
			log.debug("Pass: Successfully selected to buy a Like New Pay Monthly phone");
		} catch (Exception e) {
			log.debug("Fail: Cannot click Like New Pay Monthly phone  " + e.getMessage() + "");
		}
	}

	@And("^I choose upgrade PayM ([^\"]*) tablet$")
	public void Choose_upgradePAYM_Tablet(String tablet) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, UpgradeTabletListingPage.class);
			PageFactory.initElements(driver, TabletPage.class);
			Thread.sleep(3000);
			UpgradeCustomerPageActions.upgradePAYMTabletSelect(tablet);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to choose upgrade paym tablet Device");

		}
	}

	@And("^Navigate to upgrade tablet$")
	public void navigate_to_upgrade_tablet() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, MouseHoverPage.class);
			PageFactory.initElements(driver, UpgradeTabletListingPage.class);
			MouseHoverAction.UpgradeandUpgradeNow();
			Thread.sleep(5000);
			// Autoredirection.redirectUpgrades();
			UpgradeTabletListingPage.ViewAllTablets.click();
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to navigate to upgrade tablet");

		}
	}

	////////////////////////////////////////////////////////////////////////////////
	//////////////////////////// CVOS Pre Order //////////////////////////
	////////////////////////////////////////////////////////////////////////////////

	@Given("^I am a Supply Chain Admin$")
	public void i_am_a_Supply_Chain_Admin() throws Throwable {
		// try {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		String relativePath = System.getProperty("user.dir");
		String EnvPropFilePath = relativePath + "\\Configurations\\Properties\\AppConfig.properties";
		String Newurl_CVOS = Filereadingutility.getPropertyValue(EnvPropFilePath, "CVOS");
		driver.navigate().to(Newurl_CVOS);
		Thread.sleep(3000);
		/*
		 * } catch (Exception e) { // TODO Auto-generated catch block
		 * System.out.
		 * println("Unable to Login/validate home page, please see the failure screenshot"
		 * ); Assert.
		 * fail("Unable to Login/validate home page, please see the failure screenshot"
		 * );
		 * 
		 * }
		 */
	}

	@And("^I Login with Supply Chain Credential ([^\"]*) and ([^\"]*)$")
	public void i_Login_with_Supply_Chain_Credential(String username, String password) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOS_LandingPageActions.class);
		// try {
		System.out.println("Entering the login Supply Chain creds");
		CVOS_LandingPageActions.CVOSSupplyChainLogin(username, password);
		System.out.println("completing the login Supply Chain creds");

		/*
		 * } catch (Exception e) { // TODO Auto-generated catch block
		 * System.out.println("Unable to Sign in to CVOS as SupplyChain");
		 * Assert.fail("Unable to Sign in to CVOS as SupplyChain");
		 */
		// }
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOS_SupplyChainloggedIn.class);
		try {
			CVOS_SupplyChainloggedIn.CVOSSupplyChainVal();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Validate the CVOS SupplyChain Home Page");
			Assert.fail("Unable to Validate the CVOS SupplyChain Home Page");

		}

	}

	@Then("^I click on  'Stockpot' tab in Supply Chain and search for (\\d+)AMFI(\\d+)N in SkU desciption$")
	public void i_click_on_Stockpot_tab_in_Supply_Chain_and_search_for_SKU_ID_in_SkU_desciption(String SKUID)
			throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOSstockpotPageActions.class);
		try {
			CVOSstockpotPageActions.CVOSSupplyChainAct(SKUID);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Enter the SKU ID Page");
			Assert.fail("Unable to Enter the SKU ID Page");

		}

	}

	@And("^Click on Search button$")
	public void click_on_Search_button() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOSstockpotPageActions.class);
		try {
			CVOSstockpotPageActions.CVOSSupplyChainSearch();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Search the stockpots for the SKU");
			Assert.fail("Unable to Search the stockpots for the SKU");

		}

	}

	@Then("^I should see the uploaded stock for the SKU ID$")
	public void i_should_see_the_uploaded_stock_for_the_SKU_ID() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOSstockpotPageActions.class);
		try {
			CVOSstockpotPageActions.CVOSSupplyChainStockPot();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Uploaded stockpots not displayed");
			Assert.fail("Uploaded stockpots not displayed");

		}

	}

	@And("^I click on Online 'Stockpot' and move the delivery date to a past date$")
	public void i_click_on_Online_Stockpot_and_move_the_delivery_date_to_a_past_date() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOSstockpotPageActions.class);
		try {
			CVOSstockpotPageActions.CVOSSupplyChainMoveDelivery();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("The Delivery date is not moved");
			Assert.fail("The Delivery date is not moved");

		}

	}

	@And("^I click on Stock Merchandise$")
	public void i_click_on_Stock_Merchandise() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOSstockpotPageActions.class);
		try {
			CVOSstockpotPageActions.CVOSSupplyChainStockMerchandise();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("The Stock Merchandise tab is not clicked");
			Assert.fail("The Stock Merchandise tab is not clicked");

		}

	}

	@Then("^I click on Stock Merchandise and search using Amazon Fire phone (\\d+)GB$")
	public void i_click_on_Stock_Merchandise_and_search_using_Amazon_Fire_phone_GB(String Search_by_model)
			throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOS_StockMerchandiseActions.class);
		try {
			CVOS_StockMerchandiseActions.CVOSSupplyChainStockMerch(Search_by_model);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("The Launch date is not set");
			Assert.fail("The Launch date is not set");

		}

	}

	@When("^I login as a Trading Admin$")
	public void i_login_as_a_Trading_Admin() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOS_StockMerchandiseActions.class);
		try {
			CVOS_StockMerchandiseActions.CVOSSupplyChainlogout();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("The TradingAdmin is not able to login");
			Assert.fail("The TradingAdmin is not able to login");

		}

	}

	@And("^I Login with Trading Admin Credentials TradingAdmin and TradingAdmin(\\d+)$")
	public void i_Login_with_Trading_Admin_Credentials_SupplyChainAdmin_and_SupplyChainAd(String Username1,
			String Password2) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOS_PageObjects.class);
		try {
			CVOS_LandingPageActions.CVOSTradingAdminLogin(Username1, Password2);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("The TradingAdmin is not able to login");
			Assert.fail("The TradingAdmin is not able to login");

		}
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOS_TradingAdminloggedIn.class);

		try {
			CVOS_TradingAdminloggedIn.CVOSTradingStockpot();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to click stockpot login");
			Assert.fail("Unable to click stockpot login");

		}

	}

	@Then("^I click on  'Stockpot' tab in Trading admin and search for (\\d+)AMFI(\\d+)N in SkU desciption$")
	public void i_click_on_Stockpot_tab_in_Trading_admin_and_search_for_SKU_ID_in_SkU_desciption(String SKUID)
			throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOSstockpotPageActions.class);

		try {
			CVOSstockpotPageActions.CVOSTradingAdminAct(SKUID);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Search the SKU ID");
			Assert.fail("Unable to Searach the SKU ID");

		}

	}

	@And("^when I click on All shops I should be able to allocate to different stockspots using Amazon Fire phone (\\d+)GB$")
	public void when_I_click_on_All_shops_I_should_be_able_to_allocate_to_different_stockspots_using_Amazon_Fire_phone_GB(
			String Search_by_model) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOS_StockAllocationActions.class);

		try {
			CVOS_StockAllocationActions.CVOSSupplyTradeAllocate(Search_by_model);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to allocate stock");
			Assert.fail("Unable to allocate stock");

		}

	}

	@And("^I click on 'Stockpot' tab and search using <SKU_ID> to see the stock status then I should see them in Pre Order status$")
	public void i_click_on_Stockpot_tab_and_search_using_SKU_ID_to_see_the_stock_status_then_I_should_see_them_in_Pre_Order_status(
			String SKUID) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOSstockpotPageActions.class);

		try {
			CVOSstockpotPageActions.CVOSTradingAdminPreOrderVerf(SKUID);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to allocate stock");
			Assert.fail("Unable to allocate stock");

		}

	}

	////////////////////////////////////////////////////////////////////////////////
	//////////////////////////// CVOS Delayed Delivery
	//////////////////////////////////////////////////////////////////////////////// //////////////////////////
	////////////////////////////////////////////////////////////////////////////////

	@Then("^I should be able to move the Launch date to a past dateAmazon Fire phone (\\d+)GB$")
	public void i_should_be_able_to_move_the_Launch_date_to_a_past_dateAmazon_Fire_phone_GB(String Search_by_model)
			throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOS_StockMerchandiseActions.class);

		try {
			CVOS_StockMerchandiseActions.CVOSSupplyChainStockMerchDD(Search_by_model);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to set launch date for delayed delivery stock");
			Assert.fail("Unable to set launch date for delayed delivery stock");

		}

	}

	@Then("^I click on 'Stockpot' tab and search using (\\d+)AMFI(\\d+)N to see the stock status then I should see them in Delayed Delivery status$")
	public void i_click_on_Stockpot_tab_and_search_using_SKU_ID_to_see_the_stock_status_then_I_should_see_them_in_Delayed_Delivery_status()
			throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}
	////////////////////////////////////////////////////////////////////////////////
	//////////////////////////// Basecomms offers page
	//////////////////////////////////////////////////////////////////////////////// //////////////////////////
	////////////////////////////////////////////////////////////////////////////////

	@Given("^I launch the OldMBBURL$")
	public void LaunchOldBaseCommsMBBURL() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			String relativePath = System.getProperty("user.dir");
			String EnvPropFilePath = relativePath + "\\Configurations\\Properties\\AppConfig.properties";
			String Newurl = Filereadingutility.getPropertyValue(EnvPropFilePath, "OldMBBURL");
			driver.navigate().to(Newurl);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Launch MBB Basecomms url");
			Assert.fail("Unable to Launch MBB Basecomms url");
		}
	}
	
	@And("^select \"([^\"]*)\" MBBtariff$")
	public void select_MBBtariff(String arg1) throws Throwable {
		try {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, BaseCommPage.class);
		BaseCommPageActions.SelectBaseCommTariff("Random");
			} 
		catch (Exception e) 
		{
			System.out.println("Unable to Select MBB Tariff");
			Assert.fail("Unable to Select MBB Tariff");
		}
	}

	@And("^I land on Basket page$")
	public void i_land_on_Basket_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
		
	}
	
	@And("^I navigate to the Basecomm Page$")
	public void I_navigate_to_the_Basecomm_Page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			String relativePath = System.getProperty("user.dir");
			String EnvPropFilePath = relativePath + "\\src\\test\\java\\Properties\\AppConfig.properties";
			String Newurl = Filereadingutility.getPropertyValue(EnvPropFilePath, "BaseCommUrl");
			driver.navigate().to(Newurl);

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to navigate to basecomm page");

		}
	}
@Then("^Verify only iPad specific devices are displayed under the iPad section$")
	public void Verify_only_iPad_specific_devices_are_displayed_under_the_iPad_section() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.checkIfiPadDevicesArePresent();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to verify if only iPad specific devices are displayed under the iPad section");

		}
	}

	@And("^Click on Other Tablets tab$")
	public void Click_on_Other_Tablets_tab() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.clickOnOtherTablets();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to click on Other Tablets tab");

		}
	}

	@And("^Click on iPad tab$")
	public void Click_on_iPad_tab() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.clickOniPadTab();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to click on iPad tab");

		}
	}

	@And("^Verify Pay As You Go tab is not displayed$")
		public void Verify_Pay_As_You_Go_tab_is_not_displayed() throws Throwable {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			try {
				PageFactory.initElements(driver, BaseCommPage.class);
				BaseCommPageActions.isPayAsUGoTabDisplayed();
			} catch (Exception e) {
				e.printStackTrace();
				Assert.fail("Unable to verify if Pay As You Go tab is present");

			}
		}

	@And("^click on the Sort tab and choose required ([^\"])$")
	public void click_on_the_Sort_tab_and_choose_required_sort_option(String Sort) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.clickOnSortTab();
			BaseCommPageActions.selectSortOption(Sort);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to click on the Sort tab and choose required sort option");

		}
	}
	
	
	@And("^click on the Sort tab and reset sort$")
	public void click_on_the_Sort_tab_and_reset_sort() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.clickOnSortTab();
			BaseCommPageActions.clickOnResetSort();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to click on the Sort tab and reset sort");

		}
	}
	
	
}

