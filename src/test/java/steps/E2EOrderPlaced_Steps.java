package steps;

import java.util.HashMap;
import java.util.LinkedList;
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
import actionsPerformed.FreeSimPageActions;
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
import actionsPerformed.UpdateDevicePlanLinkEmailAddressActions;
import actionsPerformed.UpgradeCustomerPageActions;
import cucumber.api.PendingException;
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
import pageobjects.Agent_UpdateCCAEmailPage;
import pageobjects.AgreementPage;
import pageobjects.BaseCommPage;
import pageobjects.BasketPage;
import pageobjects.CVOS_PageObjects;
import pageobjects.ConnectedDeviceDetailsPage;
import pageobjects.DeliveryPage;
import pageobjects.FitnessTrackerPage;
import pageobjects.FreeSimPage;
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
import pageobjects.SortingAndFilter;
import pageobjects.TabletPage;
import pageobjects.UpgradeCustomerPage;
import pageobjects.UpgradePhonesListingPage;
import pageobjects.UpgradeTabletListingPage;

public class E2EOrderPlaced_Steps {

	public WebDriver driver;
	public List<HashMap<String, String>> datamap;
	static Logger log = Logger.getLogger("devpinoyLogger");

	LinkedList<String> expectedListBeforeSort = null;
	LinkedList<String> originalList = null;
	LinkedList<String> TempList3 = null;

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
			Autoredirection.redirect();
			Thread.sleep(10000);
		} catch (Exception e) {
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
			Thread.sleep(10000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("unable to do mousehover to PayM MBB");
			Assert.fail("unable to do mousehover to PayM MBB");
		}
	}

	@Given("^Navigate to Accessories$")
	public void navigate_to_Accessories() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.AccessoriesLandingPage();
			Autoredirection.redirect();
			Thread.sleep(10000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("unable to do mousehover to Accessories");
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
			Thread.sleep(10000);
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
			Thread.sleep(10000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
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
			Autoredirection.redirect();
			Thread.sleep(10000);
		} catch (Exception e) {
			e.printStackTrace();
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
			Thread.sleep(10000);
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
			Autoredirection.redirectforHTTPsconnections();
			Thread.sleep(10000);
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
			Autoredirection.redirectforHTTPsconnections();
			Thread.sleep(10000);
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
			Thread.sleep(10000);
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
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			// MouseHoverAction.UpgradeandUpgradeNow();
			UpgradeCustomerPageActions.Signin();
			// Autoredirection.redirectUpgrades();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to do navigate to signin pagee");
			Assert.fail("Unable to do navigate to signin page");
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
			e.printStackTrace();
			System.out.println("Unable to choose PayM phone");
			Assert.fail("Unable to choose PayM phone");
		}
	}

	@Given("^I choose PayG ([^\"]*)$")
	public void Choose_PAYG_Handset(String device) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PhonesListingPage.class);
			PhonesListingPageAction.PAYGPhoneSelect("Random Device");
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
			System.out.println("Unable to select MBB PayM device");
			Assert.fail("Unable to select MBB PayM device");

		}
	}

	@Given("^select any available ([^\"]*) Fitness tracker$")
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
			System.out.println("Unable to View all Tariffs");
			Assert.fail("Unable to View all Tariffs");

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
			System.out.println("Completed Selecting Random Tariff");
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
			System.out.println("Completed Selecting Recommended Tariff");

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
			Thread.sleep(5000);
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
			e.printStackTrace();
			System.out.println("Unable to signin using credentials");
			Assert.fail("Unable to signin using credentials");

		}
	}

	@Given("^choose to upgrade any Phone in My upgrade page$")
	public void choose_to_upgrade_any_Phone_in_My_upgrade_page() throws Throwable {
		PageFactory.initElements(driver, MouseHoverPage.class);
		PageFactory.initElements(driver, UpgradePhonesListingPage.class);
		MouseHoverAction.UpgradeandUpgradeNow();
		Thread.sleep(5000);
		Autoredirection.redirectUpgrades();
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
			Thread.sleep(3000);
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

	@And("^click on \"([^\"]*)\" link and select a \"([^\"]*)\" tariff$")
	public void TariffandExtrasPage_payDeviceFull() throws Throwable {
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
			String title = driver.getTitle();
			if (title.contains("Thanks for waiting")) {
				System.out.println("Queue page is displayed");
			} else {
				System.out.println("Queue page is not displayed");
				PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
				BasketPageActions.ValidateBasketPageContents();
				BasketPageActions.CollectionorDelivery("homeDelivery");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("Issue in Basket page");
			Assert.fail("Issue in Basket page");

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
			Autoredirection.redirectforHTTPsconnections();
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
			Thread.sleep(3000);
			System.out.println("We are in yourbasket page");
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
			Thread.sleep(10000);
			PaymentPageActions.Time_At_Address();
			Thread.sleep(10000);
			PaymentPageActions.Card_Details(Username);
			Thread.sleep(75000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
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
			Thread.sleep(4000);
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
		// try {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, Agent_HomePage.class);
		Agent_HomePagePageActions.FindUser(msisdn);
		Thread.sleep(3000);
		Agent_HomePagePageActions.upgradeUser();
		Thread.sleep(4000);
		/*
		 * } catch (Exception e) { // TODO Auto-generated catch block System.out.
		 * println("Unable to login for upgrade for user in Agent shop, please see the failure screenshot"
		 * ); Assert.
		 * fail("Unable to login for upgrade for user in Agent shop, please see the failure screenshot"
		 * );
		 * 
		 * }
		 */
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
			Thread.sleep(4000);
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

	@Given("^Verify email is sent successfully$")
	public void verifyEmailSentConfirmation() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_DealBuilderPage.class);
			Agent_DealBuilderPageActions.eMailConfirmation();
			System.out.println("Verify email is sent successfully method executed successfully");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Email is not sent");
			Assert.fail("Email is not sent");

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
			Thread.sleep(3000);
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
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
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

	@Then("^perform the credit checks using valid ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*) and valid ([^\"]*)$")
	public void CreditCheck(String Firstname, String Surname, String HouseNumber, String PostCode, String Username)
			throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_CreditCheckDetailsPage.class);
			Agent_CreditCheckPageActions.Creditcheck(Firstname, Surname, HouseNumber, PostCode);
			System.out.println("Completed Credit check");
			Agent_CreditCheckPageActions.BankDetails(Username);
			System.out.println("Completed Bank details");
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

	@Then("^Register customer with valid ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*) and other valid details in delivery page$")

	// @Given("^Register customer with valid ([^\"]*) and ([^\"]*) and other
	// valid details in delivery page$")
	public void register_customer(String Firstname, String Surname, String HouseNumber, String PostCode)
			throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_RegisterCustomerPage.class);
			Agent_RegisterCustomerActions.PayGRegistration(Firstname, Surname, HouseNumber, PostCode);

		} catch (Exception e) { // TODO Auto-generated catch block
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
		System.out.println("Choosing available delivery address");
		Thread.sleep(5000);
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

	@When("^Pay by card for PAYM device$")
	public void pay_by_card_payn_device() throws Throwable {
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, Agent_RegisterCustomerPage.class);
			Agent_RegisterCustomerActions.PaybyCard();
			Agent_RegisterCustomerActions.CardDetails_PayM();
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

	@When("^submit order button is clicked$")
	public void submit_order_button_is_clicked() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_ConfirmationPage.class);
			Agent_ConfirmationPageActions.SubmitOrder();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to get order confirmation screen , please see the failure screenshot");
			Assert.fail("Unable to get order confirmation screen , please see the failure screenshot");

		}
	}

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

	@And("Select existing account and begin fast checkout")
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

	@And("Check stock extended message in Delivery page")
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
			Autoredirection.redirectUpgrades();
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
			Autoredirection.redirectUpgrades();
			UpgradeCustomerPageActions.viewAllPhones();
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to navigate to upgrade phones");

		}
	}

	@Given("^Navigate to upgrade > upgrade now$")
	public void navigate_to_upgrade_upgrade_now() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, MouseHoverPage.class);
			PageFactory.initElements(driver, UpgradePhonesListingPage.class);
			MouseHoverAction.UpgradeandUpgradeNow();
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to navigate to upgrade phones");

		}
	}

	@And("^I choose upgrade PayM handset ([^\"]*)$")
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
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,300)", "");
			NonConnectedDeviceDetailsPageAction.AddtoBasket();
			Thread.sleep(7000);
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
			Thread.sleep(5000);
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
			Thread.sleep(15000);
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
			System.out.println("Unable to choose " + elementName + " device");
			Assert.fail("Unable to choose " + elementName + " device");

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
			System.out.println("Selected Device " + elementName + " successfully");

		} catch (Exception e) { // TODO Auto-generated catch block
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
			AccessoryPageActions.UserSpecifiedFitnessTrackerLimit(Limit);
			// NonConnectedDeviceDetailsPageAction.ClickonBasketIcon();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to add Fitnesstracker to basket");
			Assert.fail("Unable to add Fitnesstracker to basket");
		}
	}

	@And("^add quantity of SmartWatches to basket within ([^\"]*) in details page and navigate to basket$")
	public void addQuantitySmartWatches(String Limit) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, AccessoryPage.class);
			PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
			SmartwatchesPageActions.UserSpecifiedSmartwatchTrackerLimit(Limit);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to add SmartWatches to basket");
			Assert.fail("Unable to add SmartWatches to basket");
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
			// BasketPageActions.verifyNCDRemovedinBasketPageAfterCDSelection();
			// AccessoryPageActions.removeItemsFromBasketBasedOnAdditionOfItems();
			AccessoryPageActions.check();

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(
					"Failed step : the previously selected standalone non-connected items should be removed from my basket");
			Assert.fail(
					"Failed step : the previously selected standalone non-connected items should be removed from my basket");
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
			e.printStackTrace();
			System.out.println("Unable to validate basket contents");
			Assert.fail("Unable to validate basket contents");
		}
	}

	@Then("^Verify the devices ([^\"]*), ([^\"]*) and ([^\"]*) in the basket$")
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

	@Then("^Verify the devices ([^\"]*) and ([^\"]*) in basket$")
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
	 * @And("^Verify the devices ([^\"]*), ([^\"]*) and ([^\"]*) in basket$") public
	 * void verifyDevicesInBasket(String smartwatchname, String fitnesstrackername,
	 * String tabletname) throws Throwable { try {
	 * driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	 * PageFactory.initElements(driver, BasketPage.class);
	 * BasketPageActions.verifyDevicesInBasket(smartwatchname, fitnesstrackername,
	 * tabletname); } catch (Exception e) { // TODO Auto-generated catch block
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

	/*
	 * @And("^choose ([^\"]*) contract length$") public void
	 * choose_contract_length(String contractlength) {
	 * 
	 * try { driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	 * PageFactory.initElements(driver, PAYMSimOPage.class);
	 * PAYMSimOPageActions.SelectRecommendedTariffPhonesTab(contractlength); } catch
	 * (Exception e) { e.printStackTrace();
	 * System.out.println("Unable to choose contract length");
	 * Assert.fail("Unable to choose contract length"); } }
	 */

	@Then("^check if the selected connected device has more than 1 variant for both colour and capacity$")
	public void check_if_the_selected_device_has_more_than_1_variant_for_both_colour_and_capacity() {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
			// ConnectedDeviceDetailsPageAction.isColorDropDownDisplayed();
			// ConnectedDeviceDetailsPageAction.isCapacityDropDownDisplayed();

			ConnectedDeviceDetailsPageAction.checkIfMoreThanOneOptionAvailable();

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("The selected device does not have more than 1 variant for both colour and capacity");
			Assert.fail("The selected device does not have more than 1 variant for both colour and capacity");
		}
	}

	/*
	 * @Then("^check if the selected connected device has only 1 variant for both colour and capacity$"
	 * ) public void
	 * check_if_the_selected_device_has_only_1_variant_for_both_colour_and_capacity(
	 * ) {
	 * 
	 * try { driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	 * PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
	 * ConnectedDeviceDetailsPageAction.checkOnlyOneOptionAvailable();
	 * 
	 * } catch (Exception e) { e.printStackTrace(); System.out.
	 * println("The selected device does not have more than 1 variant for both colour and capacity"
	 * ); Assert.
	 * fail("The selected device does not have more than 1 variant for both colour and capacity"
	 * ); } }
	 */

	@Then("^check if the selected connected device has only 1 variant for capacity and dropdown for colour$")
	public void capacity_1_and_Colour_dropdown() {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
			// ConnectedDeviceDetailsPageAction.isColorDropDownDisplayed();
			// ConnectedDeviceDetailsPageAction.isCapacityDropDownDisplayed();

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
			System.out.println("selected capacity" + capacity);
			Assert.fail("not able to select  capacity" + capacity);
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
			e.printStackTrace();
			log.debug("Fail: Cannot carry out Continue shopping action" + e.getMessage() + "");
		}
	}

	@And("^Verify all non connected devices got added to the basket section before selecting connected device$")
	public void verify_non_Connected_device_added_to_basket() throws Throwable {
		try {
			log.debug(
					"Running Test Step: @And(Verify all non connected devices got added to the basket section before selecting connected device)");
			AccessoryPageActions.verifyNonConnectedDeviceAddedToBasketBefore();
			log.debug(
					"Pass: Verified that all non connected devices got added to basket successfully before selecting connected device");
		} catch (Exception e) {
			log.debug("Fail: Cannot verify that non connected device added to basket " + e.getMessage() + "");
		}
	}

	@And("^calculate the total quantity of devices added to basket$")
	public void calculate_total_qty_of_devices_added() throws Throwable {
		try {
			log.debug("Running Test Step: calculate the total quantity of devices added to basket");
			AccessoryPageActions.calculateTotalQtyAddedInBasket();

		} catch (Exception e) {
			e.printStackTrace();
			log.debug("Fail: calculate the total quantity of devices added to basket ");

		}
	}

	@And("^Verify all non connected devices are still retained in the basket and not overridden$")
	public void verify_non_Connected_device_ratined_in_basket_after_selecting_connected_device() throws Throwable {
		try {
			log.debug(
					"Running Test Step: @And(Verify all non connected devices are still retained in the basket and not overridden)");
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
			// scrollToAnElement.scrollToElement(LikeFreePage.Paym);
			// LikeFreePage.Paym.click();
			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("arguments[0].click();", LikeFreePage.Paym);
			Thread.sleep(10000);
			Autoredirection.redirect();
			Thread.sleep(6000);
			log.debug("Pass: Successfully selected to buy a Like New Pay Monthly phone");
		} catch (Exception e) {
			log.debug("Fail: Cannot click Like New Pay Monthly phone  " + e.getMessage() + "");
		}
	}

	@And("^I choose upgrade PayM tablet ([^\"]*)$")
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
			Autoredirection.redirectUpgrades();
			// UpgradeTabletListingPage.ViewAllTablets.click();
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
		 * } catch (Exception e) { // TODO Auto-generated catch block System.out.
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
		PageFactory.initElements(driver, CVOS_PageObjects.class);
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
		PageFactory.initElements(driver, CVOS_PageObjects.class);
		try {
			CVOS_SupplyChainloggedIn.CVOSSupplyChainVal();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Validate the CVOS SupplyChain Home Page");
			Assert.fail("Unable to Validate the CVOS SupplyChain Home Page");

		}

	}

	@Then("^I click on  'Stockpot' tab in Supply Chain and search for ([^\"]*) in SkU desciption$")
	public void i_click_on_Stockpot_tab_in_Supply_Chain_and_search_for_SKU_ID_in_SkU_desciption(String SKUID)
			throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOS_PageObjects.class);
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
		PageFactory.initElements(driver, CVOS_PageObjects.class);
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
		PageFactory.initElements(driver, CVOS_PageObjects.class);
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
		PageFactory.initElements(driver, CVOS_PageObjects.class);
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
		PageFactory.initElements(driver, CVOS_PageObjects.class);
		try {
			Thread.sleep(3000);
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
		PageFactory.initElements(driver, CVOS_PageObjects.class);
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
		PageFactory.initElements(driver, CVOS_PageObjects.class);
		try {
			CVOS_StockMerchandiseActions.CVOSSupplyChainlogout();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("The TradingAdmin is not able to login");
			Assert.fail("The TradingAdmin is not able to login");

		}

	}

	@And("^I Login with Trading Admin Credentials ([^\"]*) and ([^\"]*)$")
	public void i_Login_with_Trading_Admin(String Username1, String Password2) throws Throwable {
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
		PageFactory.initElements(driver, CVOS_PageObjects.class);

		try {
			CVOS_TradingAdminloggedIn.CVOSTradingStockpot();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to click stockpot login");
			Assert.fail("Unable to click stockpot login");

		}

	}

	@Then("^I click on 'Stockpot' tab in Trading admin and search for ([^\"]*) in SkU desciption$")
	public void i_click_on_Stockpot_tab_in_Trading_admin_and_search_for_SKU_ID_in_SkU_desciption(String SKUID)
			throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOS_PageObjects.class);

		try {
			CVOSstockpotPageActions.CVOSTradingAdminAct(SKUID);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Search the SKU ID");
			Assert.fail("Unable to Search the SKU ID");

		}

	}

	@And("^when I click on All shops I should be able to allocate to different stockspots using Amazon Fire phone (\\d+)GB$")
	public void when_I_click_on_All_shops_I_should_be_able_to_allocate_to_different_stockspots_using_Amazon_Fire_phone_GB(
			String Search_by_model) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOS_PageObjects.class);

		try {
			CVOS_StockAllocationActions.CVOSSupplyTradeAllocate(Search_by_model);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to allocate stock");
			Assert.fail("Unable to allocate stock");

		}

	}

	@Then("^I click on 'Stockpot' tab and search using (\\d+)AMFI(\\d+)N to see the stock status then I should see them in Pre Order status$")
	public void i_click_on_Stockpot_tab_and_search_using_SKU_ID_to_see_the_stock_status_then_I_should_see_them_in_Pre_Order_status(
			String SKUID) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOS_PageObjects.class);

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
	// ([^\"]*)

	@Then("^I should be able to move the Launch date to a past date([^\"]*)$")
	public void i_should_be_able_to_move_the_Launch_date_to_a_past_dateAmazon_Fire_phone_GB(String Search_by_model)
			throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, CVOS_PageObjects.class);

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

	@Given("^I launch the OldIpadURL$")
	public void LaunchOldBaseCommsIpadURL() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			String relativePath = System.getProperty("user.dir");
			String EnvPropFilePath = relativePath + "\\Configurations\\Properties\\AppConfig.properties";
			String Newurl = Filereadingutility.getPropertyValue(EnvPropFilePath, "OldIpadURL");
			driver.navigate().to(Newurl);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Launch Ipad Basecomms url");
			Assert.fail("Unable to Launch Ipad Basecomms url");
		}
	}

	@Given("^I launch the OldTabletURL$")
	public void LaunchOldBaseCommsOldTabletURL() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			String relativePath = System.getProperty("user.dir");
			String EnvPropFilePath = relativePath + "\\Configurations\\Properties\\AppConfig.properties";
			String Newurl = Filereadingutility.getPropertyValue(EnvPropFilePath, "OldTabletURL");
			driver.navigate().to(Newurl);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to Launch Tablet Basecomms url");
			Assert.fail("Unable to Launch Tablet Basecomms url");
		}
	}

	@And("^select \"([^\"]*)\" MBBtariff$")
	public void select_MBBtariff(String arg1) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.SelectBaseCommTariff("Random");
		} catch (Exception e) {
			System.out.println("Unable to Select MBB Tariff");
			Assert.fail("Unable to Select MBB Tariff");
		}
	}

	@And("^select Basecomm MBBDevice ([^\"]*)$")
	public void select_BaseCommMBBDevice(String arg1) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BaseCommPage.class);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			BaseCommPageActions.verifyTariffTypeMBB(arg1, "Basecomm");
		} catch (Exception e) {
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
			String EnvPropFilePath = relativePath + "\\Configurations\\Properties\\AppConfig.properties";
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

	/*
	 * @Then("^Verify only tablet specific devices are displayed under the Other tablets section$"
	 * ) public void Veri() throws Throwable {
	 * driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS); try {
	 * PageFactory.initElements(driver, BaseCommPage.class);
	 * BaseCommPageActions.checkIfTabletDevicesArePresent(); //Archana to update
	 * this code } catch (Exception e) { e.printStackTrace(); Assert.
	 * fail("Unable to verify if only iPad specific devices are displayed under the iPad section"
	 * );
	 * 
	 * } }
	 */

	@Given("^verify that I get redirected to ([^\"]*)$")
	public void VerifyOldBaseCommsURL_Redirection(String NewURL) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.CompareURL(NewURL);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to compare old and new urls");

		}
	}

	@And("^Click on Other Tablets tab$")
	public void Click_on_Other_Tablets_tab() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.clickOnOtherTablets();
			Thread.sleep(4000);
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
			Thread.sleep(4000);
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

	@And("^click on the Sort tab and choose required ([^\"]*)$")
	public void click_on_the_Sort_tab_and_choose_required_sort_option(String Sort) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			PageFactory.initElements(driver, SortingAndFilter.class);
			PhonesListingPageAction.clickOnSortTab();
			PhonesListingPageAction.selectSortOption(Sort);

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to click on the Sort tab and choose required sort option");
		}
	}

	@And("^click on the Sort tab and reset sort$")
	public void ClickonSortand_Reset() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			PageFactory.initElements(driver, SortingAndFilter.class);
			PhonesListingPageAction.clickOnSortTab();
			PhonesListingPageAction.clickOnResetSort();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to click on the Sort tab and reset sort");

		}
	}

	@And("^Verify the contents of the iPad section in the landing page$")
	public void VerifyContentsofIpadSection() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.VerifyIpadURL();
		} catch (AssertionError e) {
			Assert.fail("Unable to verify contents of the iPad section in the landing page");
		}
	}

	@And("^Verify the contents of the tablet section in the Other Tablets tab$")
	public void VerifyContentsofTabletSection() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.VerifyTabletURL();
		} catch (Exception e) {
			Assert.fail("Unable to verify contents of the Tablet section in the landing page");
		}
	}

	@And("^Click on \"Buy Now\" button for ([^\"]*) and verify \"Tariffs and Extras\" page is displayed$")
	public void SelectdeviceAndVerifyTariffandExtras(String device_name) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			BaseCommPageActions.BuynowwithDevice(device_name);
			System.out.println("Buynow function completed");
			BaseCommPageActions.VerifyPage();
			System.out.println("Verify page action completed");
			BaseCommPageActions.verifyTariffType("Basecomm");
			System.out.println("Verify Tariff type action completed");
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to select device and verify tariff and extras page");

		}
	}

	@Given("^Click on \"Buy Now\" button for ([^\"]*)$")
	public void click_on_button_for_Apple_iPad_Pro_inch(String device_name) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			BaseCommPageActions.BuynowwithDevice(device_name);
			System.out.println("Buynow function completed");
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to select device and verify tariff and extras page");

		}
	}

	// Click on \"([^\"]*)\" link and verify correct details are displayed
	@And("^Click on \"See device details\" link for ([^\"]*) and verify correct details are displayed$")
	public void Click_on_See_device_details_link_and_verify_correct_details_are_displayed(String device)
			throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.checkSeeDeviceDetailsPopUp(device);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to Verify the see device link popup of the basecomm landing page");
		}
	}

	@And("^choose ([^\"]*) contract length$")
	public void choose_contract_length(String contractlength) {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMSimOPage.class);
			PAYMSimOPageActions.SelectTariffPhonesTab(contractlength);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Unable to choose contract length");
			Assert.fail("Unable to choose contract length");
		}
	}

	@And("^choose ([^\"]*) contract length for MBB$")
	public void choose_contract_length_for_MBB(String contractlength) {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMSimOPage.class);
			PAYMSimOPageActions.SelectTariffMBBTab(contractlength);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Unable to choose contract length");
			Assert.fail("Unable to choose contract length");
		}
	}

	@And("^Verify \"Choose a different tariff\" link is displayed$")
	public void verify_choose_a_diff_tariff_link_displayed() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			PhonesListingPageAction.isChooseADifferentTariffDisplayed();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to choose a different tarif link");

		}
	}

	@And("^Verify new image is as per the selected ([^\"]*),([^\"]*)and ([^\"]*) in the Basecomms page$")
	public void Verify_new_image_is_as_per_the_selected_device_name_capacity_and_color_in_the_Basecomms_page(
			String devicename, String capacity, String color) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
			BaseCommPageActions.checkImgSrcBasecommPage(devicename, capacity, color);

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to Verify new image");
		}
	}

	@And("^Verify new image is as per the selected ([^\"]*),([^\"]*)and ([^\"]*) in the Tariffs and Extras Page$")
	public void Verify_new_image_is_as_per_the_selected_device_name_capacity_and_color_in_the_TE_page(String devicename,
			String capacity, String color) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
			BaseCommPageActions.checkImgSrcTEPage(devicename, capacity, color);

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(
					"Unable to verify new image is as per the selected device name capacity and color in the TE page");
		}
	}

	@And("^click on the \"Choose a different tariff\" link and verify user navigated back to \"Tariff and Extras\" page$")
	public void click_choose_a_diff_tariff_link_and_check_navigation_TE_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			PhonesListingPageAction.clickChooseADifferentTariff();
			Thread.sleep(3000);
			BaseCommPageActions.checkUserNavigatedTEPage();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to click on choose a different tarif link");

		}
	}

	@Then("^click on the \"Back to iPad offers\" link and verify user gets redirected to Basecomms listing page$")
	public void click_Back_to_iPad_offers_link_and_check_navigation_Basecomm_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			PhonesListingPageAction.clickBackToiPadOffers();
			BaseCommPageActions.checkUserNavigatedBasecommPage();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to click on 'Back to iPad Offers' link");

		}
	}

	@Then("^click on the \"Back to tablet offers\" link and verify user gets redirected to Basecomms listing page$")
	public void click_Back_to_tablet_offers_link_and_check_navigation_Basecomm_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			PhonesListingPageAction.clickBackToiPadOffers();
			BaseCommPageActions.checkUserNavigatedBasecommPage();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to click on 'Back to iPad Offers' link");

		}
	}

	@And("^Verify recommended tariff is getting displayed on the header of the tariff tile in the \"Tariffs and Extras\" page$")
	public void Verify_recommended_tariff_displayed_on_the_header_of_the_tariff_tile() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.checkRecommendedTariffIsAtFirstTile();

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to Verify recommended tariff displayed on the header of the tariff tile");

		}
	}

	@Then("^Verify the contents of the basecomm landing page$")
	public void Verify_the_contents_of_the_basecomm_landing_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.checkContentsOfBaseCommPage();

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to Verify the contents of the basecomm landing page");

		}
	}

	@And("^Verify only tablet specific devices are displayed under the Other tablets section$")
	public void Verify_only_tablet_specific_devices_are_displayed_under_the_Other_tablets_section() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.checkIfTabletDevicesArePresent();

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to Verify the contents of other tablets section");

		}
	}

	@And("^Verify expected ([^\"]*) and its specific details are present in the device list ([^\"]*),([^\"]*),([^\"]*)$")
	public void verify_expected_device_and_details_are_in_device_list(String device, String color, String capacity,
			String stockmessage) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.checkExpDevAndDetails(device, color, capacity, stockmessage);

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to verify expected device and details are in device list");

		}
	}

	@And("^Verify expected \"coming soon\" ([^\"]*) and its specific details are present in the device list ([^\"]*),([^\"]*),([^\"]*)$")
	public void verify_expected_device_and_details_are_in_device_list_coming_soon_device(String device, String color,
			String capacity, String stockmessage) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.checkExpDevAndDetailsForComingSoonDevice(device, color, capacity, stockmessage);

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to verify expected device and details are in device list");

		}
	}

	@And("^Verify that promotion ribbon is displayed for ([^\"]*)$")
	public void verifypromotionribbonDisplay(String device) {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.VerifyRibbon(device);

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to verify promotion ribbon on the device");
		}
	}

	// Then Verify the price gets updated based on the new colour and capacity
	/*
	 * @And("^Verify the price gets updated based on the new colour and capacity$" )
	 * public void verifyPriceDisplaybased_on_Colour_and_capacity() {
	 * driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS); try {
	 * PageFactory.initElements(driver, BaseCommPage.class);
	 * BaseCommPageActions.VerifyPriceChangeuponCapacity();
	 * 
	 * } catch (Exception e) { e.printStackTrace();
	 * Assert.fail("Unable to verify price updates"); } }
	 */

	@And("^Verify the price gets updated based on ([^\"]*), ([^\"]*) for ([^\"]*)$")
	public void verifyPriceDisplaybased_on_Colour_and_capacity(String Capacity1, String Capacity2, String device) {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
			BaseCommPageActions.VerifyPriceChangeuponCapacity(Capacity1, Capacity2, device);

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to verify price updates");
		}
	}

	@And("^Verify the current sort order details ([^\"]*)$")
	public void verify_current_sort_order(String SortOption) throws Throwable {

		try {
			log.debug("Running Test Step: @And(Verify the current sort order details)");

			/*
			 * if (driver.findElement(By.xpath("//*[@class='page-all']")).isEnabled ()) {
			 * driver.findElement(By.xpath("//*[@class='page-all']")).click(); } else {
			 * 
			 * PhonesListingPageAction.clickOnViewAllProductsOnOnePage(); }
			 */

			if (SortOption.equals("BrandAToZ") || SortOption.equals("BrandZToA")) {
				originalList = PhonesListingPageAction.getCurrentSortOrderUsingDeviceName();
				TempList3 = PhonesListingPageAction.getCurrentSortOrderUsingDeviceName();
			}
			if (SortOption.equals("MonthlyLowToHigh") || SortOption.equals("MonthlyHighToLow")) {
				originalList = PhonesListingPageAction.getCurrentSortOrderUsingDevicePrice();
				TempList3 = PhonesListingPageAction.getCurrentSortOrderUsingDevicePrice();
			}

			LinkedList<String> TempList1 = originalList;
			LinkedList<String> TempList2 = null;
			System.out.println("-Original List:-" + TempList1);

			if (SortOption.equals("BrandAToZ")) {
				TempList2 = PhonesListingPageAction.reArrangeListInAcendingBeforeApplyingSort(TempList1);
			}
			if (SortOption.equals("BrandZToA")) {
				TempList2 = PhonesListingPageAction.reArrangeListInDescendingBeforeApplyingSort(TempList1);
			}
			if (SortOption.equals("MonthlyLowToHigh")) {
				TempList2 = PhonesListingPageAction.reArrangeListInAcendingBeforeApplyingSort(TempList1);
			}
			if (SortOption.equals("MonthlyHighToLow")) {
				TempList2 = PhonesListingPageAction.reArrangeListInDescendingBeforeApplyingSort(TempList1);
			}

			expectedListBeforeSort = TempList2;
			System.out.println("Expected Listed Before Sort: ");
			System.out.println(TempList2);

			System.out.println("Pass: Successfully read the phone details from the container");
			log.debug("Pass: Successfully read the phone details from the container");

		} catch (Exception e) {
			log.debug("Fail: Cannot read the phone details from the container  " + e.getMessage() + "");
			Assert.fail("Fail: Cannot read the phone details from the container");
		}

	}

	@And("^Verify the devices gets sorted based on the sort option ([^\"]*)$")
	public void verifyDeviceSortedBasedOnSortOption(String SortOption) throws InterruptedException {
		log.debug("Running Test Step: @And(Verify the devices gets sorted based on the sort option)");
		try {

			LinkedList<String> ListAfterSort = null;
			LinkedList<String> ListBeforeSort = expectedListBeforeSort;

			if (SortOption.equals("BrandAToZ") || SortOption.equals("BrandZToA")) {
				ListAfterSort = PhonesListingPageAction.getCurrentSortOrderUsingDeviceName();
			}

			if (SortOption.equals("MonthlyLowToHigh") || SortOption.equals("MonthlyHighToLow")) {
				ListAfterSort = PhonesListingPageAction.getCurrentSortOrderUsingDevicePrice();
			}

			System.out.println("---------List sent to verification method (BeforeSort)---------------");
			System.out.println(ListBeforeSort);

			System.out.println("---------List sent to verification method (AfterSort)---------------");
			System.out.println(ListAfterSort);

			PhonesListingPageAction.verifyDeviceSortedOnBrand(ListBeforeSort, ListAfterSort);

			log.debug("Assert Success: Verified successfully that devices are sorted based on the sort option");
		} catch (AssertionError e) {

			log.debug("Fail" + " - " + e.getMessage());
			Assert.fail("Fail: Cannot assert if devices are sorted based on sort option");
		}
	}

	@And("^Verify that original sort order is retained ([^\"]*)$")
	public void verifyOriginalSortOrderRetainedAfterSortReset(String SortOption) throws Throwable {
		log.debug("Running Test Step: @And(Verify that original sort order is retained)");
		try {

			LinkedList<String> TempList2 = null;
			LinkedList<String> TempList = TempList3;

			if (SortOption.equals("BrandAToZ") || SortOption.equals("BrandZToA")) {
				TempList2 = PhonesListingPageAction.getCurrentSortOrderUsingDeviceName();
			}
			if (SortOption.equals("MonthlyLowToHigh") || SortOption.equals("MonthlyHighToLow")) {
				TempList2 = PhonesListingPageAction.getCurrentSortOrderUsingDevicePrice();
			}
			System.out.println("-Original List:--------" + TempList);
			System.out.println("-List After Sort Reset------" + TempList2);

			PhonesListingPageAction.verifyOriginalSortOrderRetainedAfterSortReset(TempList, TempList2);

			System.out.println("Pass: Successfully Verified that original sort order is retained");
			log.debug("Pass: Successfully Verified that original sort order is retained");

		} catch (Exception e) {
			log.debug("Fail: Cannot Verified that original sort order is retained  " + e.getMessage() + "");
			Assert.fail("Fail: Cannot Verified that original sort order is retained");
		}
	}

	@And("^click on the Filter tab and choose required ([^\"]*) and option ([^\"]*)$")
	public void clickOnFilterTabAndSelectFilterOption(String Filter, String Option) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		log.debug("Running Test Step: @And(click on the Filter tab and choose required " + Filter + " " + Option
				+ " option)");
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			PageFactory.initElements(driver, SortingAndFilter.class);
			// PhonesListingPageAction.clickOnViewAllProductsOnOnePage();
			PhonesListingPageAction.clickOnFilterTab();
			PhonesListingPageAction.selectFilterOption(Filter, Option);

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to click on the Filter tab and choose required filter option");

		}
	}

	@And("^Verify the devices gets displayed as per the filter applied ([^\"]*) and option ([^\"]*)$")
	public void verifyDevicesGetsDisplayedAsPerFilter(String Filter, String Option) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		log.debug("Running Test Step: @And(Verify the devices gets displayed as per the filter applied)");

		try {

			if (Filter.equals("Brand")) {
				PhonesListingPageAction.verifyDeviceGetsDisplayedBasedOnBrandFilterApplied(Option);
			}
			if (Filter.equals("Colour")) {
				PhonesListingPageAction.verifyDeviceGetsDisplayedBasedOnColourFilterApplied(Option);
			}
			if (Filter.equals("Offer")) {
				PhonesListingPageAction.verifyDeviceGetsDisplayedBasedOnOfferFilterApplied(Option);
			}

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to verify devices got displayed as per the applied filter option");

		}
	}

	@And("^Verify all the details and links are displayed and working as expected in the Tariffs and Extras page ([^\"]*)$")
	public void VerifyAllDetailsLinksAreDispalyedAndWorkingAsExpectedInTariffsAndExtrasPage(String DeviceName)
			throws Throwable {
		log.debug(
				"Running Test Step: @And(Verify all the details and links are displayed and working as expected in the Tariffs and Extras page");
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

		try {

			PageFactory.initElements(driver, PhonesListingPage.class);
			PageFactory.initElements(driver, BasketPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.verifyAllSectionsDisplayedInTariffsAndExtrasPage();
			PAYMandPAYGTariffAndExtrasPageActions.verifyBasecommTariffAndExtrasPageHeaderDetails();
			PAYMandPAYGTariffAndExtrasPageActions.verifyBasecommTariffAndExtrasDockHeaderDetails();
			PAYMandPAYGTariffAndExtrasPageActions.verifyAnchoringOfDockHeaderOptions();
			PAYMandPAYGTariffAndExtrasPageActions.verifyBasecommPromotionalElementsAreDisplayedInTariffsAndExtrasPage();
			PAYMandPAYGTariffAndExtrasPageActions.verifyViewAllTariffsLinkEnabled();
			PAYMandPAYGTariffAndExtrasPageActions.verifyPayForYourDeviceInFullLinkEnabled();
			PAYMandPAYGTariffAndExtrasPageActions.verifyClickAndCollectDeliveryWorks();

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(
					"Unable to verify all the details and links are displayed and working as expected in the Tariffs and Extras page");

		}
	}

	/////////////////////////////////// Agent
	/////////////////////////////////// Basecomms/////////////////////////////////

	@And("^Click on 'Continue' link$")
	public void click_on_Continue_link() throws Throwable {
		try {

			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, DeliveryPage.class);
			DeliveryPageActions.ClickContinue();

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to click on Continue link");
		}
	}

	@And("^I navigate to iPad landing page$")
	public void And_I_navigate_to_iPad_landing_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.iPadPage();

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to navigate to iPad landing page");

		}
	}

	@And("^select the same basecomms iPad ([^\"]*)$")
	public void select_the_same_device(String devicename) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, TabletPage.class);
			TabletPageActions.DeviceSelect(devicename);
			Autoredirection.redirect();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to navigate to iPad landing page");

		}
	}

	@And("^verify that the Basecomms tariff is not displayed in the Tariff and Extras page$")
	public void verify_that_the_Basecomms_tariff_is_not_displayed_in_the_Tariff_and_Extras_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.verifyTariffType("Normal");
			BaseCommPageActions.verifyTariffType("Check");
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to verify that the Basecomms tariff is not displayed in the Tariff and Extras page");

		}
	}

	@And("^verify that the Basecomms tariff for MBB is not displayed in the Tariff and Extras page ([^\"]*)$")
	public void verify_that_the_Basecomms_tariff_for_MBB_is_not_displayed_in_the_Tariff_and_Extras_page(String arg1)
			throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			PageFactory.initElements(driver, BaseCommPage.class);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			BaseCommPageActions.verifyTariffTypeMBB(arg1, "Normal");
			BaseCommPageActions.verifyTariffTypeMBB(arg1, "Check");

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(
					"Unable to verify that the Basecomms tariff for MBB is not displayed in the Tariff and Extras page");

		}
	}

	@And("^Verify that Basecomms is displayed in the offers section$")
	public void verify_that_Basecomms_is_displayed_in_the_offers_section() throws Throwable {
		try {

			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_DealBuilderPage.class);
			Agent_DealBuilderPageActions.BasecommsAgentOffersColumnValidation();

		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to Validate basecomms offer link");
		}
	}

	@Then("^check if the selected non connected device has more than 1 variant for colour and single variant for capacity$")
	public void check_if_the_selected_non_connected_device_has_more_than_1_variant_for_colour_and_single_variant_for_capacity() {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
			NonConnectedDeviceDetailsPageAction.checkOnlyOneCapacityAvailable();

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(
					"Failed step :check if the selected non connected device has more than 1 variant for colour and single variant for capacity");
			Assert.fail(
					"Failed step :check if the selected non connected device has more than 1 variant for colour and single variant for capacity");
		}
	}

	@Then("^check if the selected device has only 1 variant for both colour and capacity$")
	public void check_if_the_selected_device_has_only_1_variant_for_both_colour_and_capacity() {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
			ConnectedDeviceDetailsPageAction.checkOnlyOneOptionAvailable();

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("The selected device does not have more than 1 variant for both colour and capacity");
			Assert.fail("The selected device does not have more than 1 variant for both colour and capacity");
		}
	}

	@Then("^check if the selected device has only 1 variant for both colour and capacity with dropdown$")
	public void check_if_the_selected_device_has_only_1_variant_for_both_colour_and_capacity_with_dropdown() {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
			NonConnectedDeviceDetailsPageAction.checkOnlyOneColourAndOneCapacityAsDropdownAvailable();

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(
					"Failed : check if the selected device has only 1 variant for both colour and capacity with dropdown");
			Assert.fail(
					"Failed : check if the selected device has only 1 variant for both colour and capacity with dropdown");
		}
	}

	@And("^Select ([^\"]*), ([^\"]*) of the device ([^\"]*)$")
	public void select_color_capacity_of_device(String color, String capacity, String device) {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BaseCommPage.class);
			BaseCommPageActions.selectNewDevice(color, capacity, device);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Failed : Select <color>, <capacity> of the device <device_name>");
			Assert.fail("Failed : Select <color>, <capacity> of the device <device_name>");
		}
	}

	@And("^Choose Accesssory$")
	public void ChooseGivenAccessory() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			System.out.println("Entering Choose Given accessory method");
			PAYMandPAYGTariffAndExtrasPageActions.addGivenAccessory();
			System.out.println("Completed Choose some accessory method");
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("Unable to choose some Accesssory");
			Assert.fail("Unable to choose some Accesssory");

		}
	}

	@And("^I Land on the basket page by clicking on Add to Basket button$")
	public void i_Land_on_the_basket_page_by_clicking_AddToBasket() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
			Thread.sleep(3000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("Unable to Land on the basket page and choose home delivery option");
			Assert.fail("Unable to Land on the basket page and choose home delivery option");

		}
	}

	@And("^Click on 'Continue' button on upgrade page$")
	public void click_on_continue_link_for_the_upgrade_journey() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.clickOnContinueButton();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to click on Continue button");
		}
	}

	@And("^Select a ([^\"]*) device from Recommended devices section$")
	public void select_device_from_recommended_devices_section(String devicename) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.selectDeviceInRecommendedDevicesSection(devicename);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to select a device from Recommended devices section");
		}
	}

	@And("^Select a tariff ([^\"]*) with ribbons$")
	public void select_tariff_with_ribbons(String Tariff) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.selectTariff(Tariff);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to Select a tariff with ribbons");
		}
	}

	@And("^Verify whether promotional ribbons are displayed for ([^\"]*) on the Tariff tile in the Tariff and Extras page$")
	public void Verify_whether_promotional_ribbons_are_displayed_on_the_Tariff_tile_in_the_Tariff_and_Extras_page(
			String Tariff) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.verifyPromotionalRibbonDisplayedTEpage(Tariff);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(
					"Unable to Verify whether promotional ribbons are displayed on the Tariff tile in the Tariff and Extras page");
		}
	}

	@And("^Verify 'Overlay icon' is displayed on the promotional ribbons for ([^\"]*) in the Tariff and Extras page$")
	public void Verify_Overlay_icon_is_displayed_on_the_promotional_ribbons(String Tariff) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.verifyOverlayIconIsDisplayedTEpage(Tariff);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(
					"Unable to Verify whether promotional ribbons are displayed on the Tariff tile in the Tariff and Extras page");
		}
	}

	@And("^Click on the 'Overlay icon' for ([^\"]*) in the Tariff and Extras page and verify pop up gets displayed$")
	public void Click_Overlay_icon_on_the_promotional_ribbons(String Tariff) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.clickOnOverlayIconTEpage(Tariff);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(
					"Unable to Click on the 'Overlay icon' for tariff in the Tariff and Extras page and verify pop up gets displayed");
		}
	}

	@And("^Click on the 'Overlay icon' for ([^\"]*) in the upgrade page and verify pop up gets displayed$")
	public void Click_Overlay_icon_on_the_promotional_ribbons_in_upgrade_page(String Tariff) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.clickOnOverlayIconUpgradePage(Tariff);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(
					"Unable to Click on the 'Overlay icon' for tariff in the Tariff and Extras page and verify pop up gets displayed");
		}
	}

	@And("^Verify Promotional ribbons are displayed under Tariff section in the Basket page$")
	public void Verify_whether_promotional_ribbons_are_displayed_in_the_Basket_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			UpgradeCustomerPageActions.verifyPromotionalRibbonDisplayedBasketpage();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to verify Promotional ribbons are displayed under Tariff section in the Basket page");
		}
	}

	@And("^Verify 'Overlay icon' is displayed on the promotional ribbons in the Basket page$")
	public void Verify_whether_overlay_icon_are_displayed_in_the_Basket_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.verifyOverlayIconIsDisplayedBasketpage();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to Verify 'Overlay icon' is displayed on the promotional ribbons in the Basket page");
		}
	}

	@And("^Click on the 'Overlay icon' in the Basket page and verify pop gets displayed$")
	public void Click_on_overlay_icon_in_the_Basket_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.clickOnOverlayIconBasketpage();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to Click on the 'Overlay icon' in the Basket page and verify pop gets displayed ");
		}
	}

	@And("^Verify that the tariff ribbons are displayed in tariff upsell config of 'Your package' section$")
	public void Verify_that_the_tariff_ribbons_are_displayed_in_Your_package_section() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.verifyPromotionalRibbonDisplayedMyPackageSection();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(
					"Unable to Verify that the tariff ribbons are displayed in tariff upsell config of 'Your package' section");
		}
	}

	@And("^Click on the 'Overlay icon' in tariff upsell config of 'Your package' section and verify pop up gets displayed in the Tariff and Extras Page$")
	public void Click_on_the_Overlay_icon_in_Your_package_section_and_verify_pop_up_gets_displayed_in_the_Tariff_and_Extras_Page()
			throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.clickOnOverlayIconMyPackageSection();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(
					"Unable to click on the 'Overlay icon' in tariff upsell config of 'Your package' section and verify pop up gets displayed in the Tariff and Extras Page");
		}
	}

	@And("^Click on the 'Overlay icon' in tariff upsell config of 'Your package' section and verify pop up gets displayed in upgrade journey$")
	public void Click_on_the_Overlay_icon_in_Your_package_section_and_verify_pop_up_gets_displayed_in_the_upgrade_journey()
			throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.clickOnOverlayIconMyPackageSectionUpgrade();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(
					"Click on the 'Overlay icon' in tariff upsell config of 'Your package' section and verify pop up gets displayed in upgrade journey");
		}
	}

	@And("^Select a tariff ([^\"]*) with ribbons in upgrade journey$")
	public void select_tariff_with_ribbons_in_upgrade_journey(String Tariff) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.selectTariffWithRibbonAndOverlayUpgradeJourney(Tariff);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(
					"Unable to Verify that the tariff ribbons are displayed in tariff upsell config of 'Your package' section");
		}
	}

	@And("^Select a tariff in upgrade journey$")
	public void select_tariff_in_upgrade_journey() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.selectTariff();
			UpgradeCustomerPageActions.yourSim();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(
					"Unable to Verify that the tariff ribbons are displayed in tariff upsell config of 'Your package' section");
		}
	}

	@And("^Verify whether promotional ribbons are displayed for ([^\"]*) on the Tariff tile in the upgrade journey$")
	public void Verify_whether_promotional_ribbons_are_displayed_in_the_upgrade_page(String Tariff) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.verifyPromotionalRibbonDisplayedUpgradePage(Tariff);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to Verify whether promotional ribbons are displayed for" + Tariff
					+ "on the Tariff tile in the upgrade journey");
		}
	}

	@And("^Verify 'Overlay icon' is displayed on the promotional ribbons for ([^\"]*) in the Upgrade Option page$")
	public void Verify_whether_overlay_icon_are_displayed_in_the_upgrade_page(String Tariff) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.verifyOverlayIconIsDisplayedUpgradePage(Tariff);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(
					"Unable to Verify 'Overlay icon' is displayed on the promotional ribbons in the Upgrade Option page");
		}
	}

	@And("^Verify Promotional ribbons displayed are not same as the one displayed in Upgrade Journey$")
	public void Verify_Promotional_ribbons_displayed_are_not_same_as_the_one_displayed_in_Upgrade_Journey()
			throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.checkIfPromotionalRibbonTextsNotSame();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(
					"Unable to Verify Promotional ribbons displayed are not same as the one displayed in Upgrade Journey");
		}
	}

	@And("^Verify that the tariff ribbons are displayed in tariff upsell config of 'Your package' section in upgrade journey$")
	public void Verify_that_the_tariff_ribbons_are_displayed_in_Your_package_section_in_upgrade_journey()
			throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.verifyPromotionalRibbonDisplayedMyPackageSection();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(
					"Unable to Verify that the tariff ribbons are displayed in tariff upsell config of 'Your package' section");
		}
	}

	@And("^LogOut from the Upgrade Journey$")
	public void Logout_from_upgrade_journey() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ShopLandingPage.class);
			ShopLandingPageAction.clickSignOut();
			Thread.sleep(10000);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("LogOut from the Upgrade Journey");
		}
	}

	/* Order confirmation page validations - September release */

	@Then("^Verify contents of order confirmation page for Accessories containing In Stock$")
	public void verify_contents_of_order_confirmation_page_for_Accessories_containing_In_Stock() throws Throwable {
		String ExpectedTimeSlotMessage = "";

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, OrderConfirmationPage.class);
			OrderConfirmationPageActions.TimeslotMessage();
			ExpectedTimeSlotMessage = "Your order will be delivered for free, via Royal Mail, within three working days.";
			// Assert.assertTrue("Your error message",
			// OrderConfirmationPageActions.TimeslotMessage().contains(ExpectedMessage));

			ExpectedTimeSlotMessage = "Your order will be delivered for free, via Royal Mail, within three working days.";

			Assert.assertTrue(
					"Assertion Failed: Expected Message: " + ExpectedTimeSlotMessage + " is not present in the page",
					driver.getPageSource().contains(ExpectedTimeSlotMessage));

			System.out.println("Assertion Passed: Expected Mesasge: " + ExpectedTimeSlotMessage
					+ " is present in the Order Confirmation page");
		} catch (AssertionError e) {

			System.out.println(
					"Assertion Failed: Expected Message: " + ExpectedTimeSlotMessage + " is not present in the page");

		}
	}

	@Then("^Verify contents of order confirmation page for Phones containing Delayed Delivery$")
	public void verify_contents_of_order_confirmation_page_for_Phones_containing_Delayed_Delivery() throws Throwable {

		String ExpectedDelayedDeliveryMessage = "";
		String ExpectedPacCodeInfoMessage = "";

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, OrderConfirmationPage.class);
			OrderConfirmationPageActions.DelayedDeliveryMessage();
			OrderConfirmationPageActions.PaccodeinfoMessage();
			ExpectedDelayedDeliveryMessage = "Your Device may take up to 1 week. You'll pay for the phone now, but won't start paying for your contract until your phone is on its way.";

			ExpectedPacCodeInfoMessage = "If you're moving from another operator and want to keep your number then now is a good time to ask them for your PAC code.";

			Assert.assertTrue(
					"Assertion Failed: Expected Message: " + ExpectedDelayedDeliveryMessage
							+ " is not present in the page",
					driver.getPageSource().contains(ExpectedDelayedDeliveryMessage));

			System.out.println("Assertion Passed: Expected Mesasge: " + ExpectedDelayedDeliveryMessage
					+ " is present in the Order Confirmation page");

			Assert.assertTrue(
					"Assertion Failed: Expected Message: " + ExpectedPacCodeInfoMessage + " is not present in the page",
					driver.getPageSource().contains(ExpectedPacCodeInfoMessage));

			System.out.println("Assertion Passed: Expected Mesasge: " + ExpectedPacCodeInfoMessage
					+ " is present in the Order Confirmation page");

		} catch (AssertionError e) {

			System.out.println("Assertion Failed: Expected Message: " + ExpectedDelayedDeliveryMessage
					+ " is not present in the page");
			System.out.println("Assertion Failed: Expected Message: " + ExpectedPacCodeInfoMessage
					+ " is not present in the page");
		}

	}

	@Then("^Verify that in the recycle value is displayed in the Recycle panel$")
	public void verify_that_in_the_recycle_value_is_displayed_in_the_Recycle_panel_dropdowns() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.RecyclesectionDisplayed();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to Verify recycle section displayed");
		}
	}

	@Then("^Select any one recycle option and click on 'Continue to Upgrade'$")
	public void select_any_one_recycle_option_and_click_on_Continue_to_Upgrade() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.SelectRecycleContinueToUpgrade();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to Verify recycle section displayed");
		}

	}

	@Then("^perform ([^\\\"]*) in OTAC page$")
	public void perform_skip_in_OTAC_page(String Action) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.Otac(Action);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to perform action in OTAC Page");
		}

	}

	@Then("^Click on the 'Continue button' in delivery page$")
	public void click_on_the_Continue_button_in_delivery_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, DeliveryPage.class);
			DeliveryPageActions.ClickContinue();
			System.out.println("Clicked on continue button");
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to perform action in OTAC Page");
		}

	}

	// --------------------------------------------------------------------------

	@Then("^verify cover me is present in Basket page$")
	public void verify_cover_me_is_present_in_Basket_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			Thread.sleep(3000);
			BasketPageActions.InsuranceSectionBasket();
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to see insurance in basket page");
			Assert.fail("Unable to see insurance in basket page");

		}
	}

	@Then("^verify cover me is present in delivery page$")
	public void verify_cover_me_is_present_in_delivery_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			Thread.sleep(3000);
			System.out.println("Entering insurance in Delivery page");

			BasketPageActions.InsuranceSectionDeliveryPage();
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to see insurance in Delivery page");
			Assert.fail("Unable to see insurance in Delivery page");

		}
	}

	@Then("^verify cover me is present in  payment page$")
	public void verify_cover_me_is_present_in_payment_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PaymentPage.class);
			Thread.sleep(3000);
			System.out.println("Entering insurance in payment page");
			PaymentPageActions.InsuranceSectionPaymentPage();
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to see insurance in payment page");
			Assert.fail("Unable to see insurance in payment page");

		}
	}

	@Then("^verify cover me is present in  agreements page$")
	public void verify_cover_me_is_present_in_agreements_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, AgreementPage.class);
			Thread.sleep(3000);
			System.out.println("Entering insurance in Agreement page");
			AgreementPageActions.InsuranceSectionAgreementPage();
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to see insurance in Agreement page");
			Assert.fail("Unable to see insurance in Agreement page");
		}
	}

	@Then("^verify cover me is present in review page$")
	public void verify_cover_me_is_present_in_review_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ReviewPage.class);
			Thread.sleep(3000);
			System.out.println("Entering insurance in review page");
			ReviewPageActions.InsuranceSectionReviewPage();
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to see insurance in review page");
			Assert.fail("Unable to see insurance in review page");

		}

	}

	@Then("^verify cover me is present in  pdf download$")
	public void verify_cover_me_is_present_in_pdf_download() throws Throwable {
		// Write code here that turns the phrase above into concrete actions -
		// //a[@href='orderConfirmation.pdf']

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, OrderConfirmationPage.class);
			Thread.sleep(3000);
			System.out.println("Going to verify if download pdf can be done");
			OrderConfirmationPageActions.downloadPDFcopy();
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to download pdf from order confirmation page");
			Assert.fail("Unable to download pdf from order confirmation page");

		}

	}

	@Given("^select an insurance$")
	public void select_an_insurance() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			Thread.sleep(3000);
			PAYMandPAYGTariffAndExtrasPageActions.addInsurance();
			Thread.sleep(2000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to choose insurance");
			Assert.fail("Unable to choose insurance");

		}
	}

	@And("^select a ([^\"]*) which has free insurance$")
	public void select_Tariff_Free_Insurance(String tariff) throws InterruptedException {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			UpgradeCustomerPageActions.selectTariff(tariff);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to select a tariff");
		}
	}

	@And("^verify that the insurance is in a sorted order$")
	public void verifyPriceSortedForInsurance() throws InterruptedException {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.verifySortOrderInsurance();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@And("^deselect if any insurance is autoselected$")
	public void deselect_if_any_insurance_is_autoselected() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.verifyFreeInsuranceAutoSelected();
			PAYMandPAYGTariffAndExtrasPageActions.deselectAutoSelectedInsurance();
			Thread.sleep(3000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("unable to deselect if any insurance is autoselected");
			Assert.fail("unable to deselect if any insurance is autoselected");
		}
	}

	@And("^verify that the cheapest insurance is shown to crossell in the basket page$")
	public void cheapest_insurance_displayed_in_crosssell() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.verifyCheapestInsurance();
			Thread.sleep(3000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to verify that the cheapest insurance is shown to crossell in the basket page");
			Assert.fail("Unable to verify that the cheapest insurance is shown to crossell in the basket page");
		}
	}

	@And("^verify if the 'Add Now' button is displayed for the cheapest insurance shown in basket page$")
	public void AddNowbutton_For_Cheapest_Insurance() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.verifyAddNowButtonDisplayed();
			Thread.sleep(3000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println(
					"Unable to verify if the 'Add Now' button is displayed for the cheapest insurance shown in basket page");
			Assert.fail(
					"Unable to verify if the 'Add Now' button is displayed for the cheapest insurance shown in basket page");
		}
	}

	@And("^click on the 'Add now' button and verify Insurance gets added successfully$")
	public void click_on_AddNowbutton_For_Cheapest_Insurance() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.clickOnAddNow();
			Thread.sleep(3000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to click on the 'Add now' button and verify Insurance gets added successfully");
			Assert.fail("Unable to click on the 'Add now' button and verify Insurance gets added successfully");
		}
	}

	@Given("^I Land on the basket page for upgrades$")
	public void i_Land_on_the_basket_page_for_upgrades() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.addAndGoToBasket();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Unable to land on Basket page");
		}
	}

	@And("^select continue button in delivery page for existing customer$")
	public void select_continue_delivery_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, DeliveryPage.class);
			DeliveryPageActions.ClickContinue();
			Thread.sleep(3000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to click on the 'Add now' button and verify Insurance gets added successfully");
			Assert.fail("Unable to click on the 'Add now' button and verify Insurance gets added successfully");
		}
	}

	@And("^close Ready to checkout pop up if displayed$")
	public void close_popup() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ShopLandingPage.class);
			ShopLandingPageAction.closePopUpIfDisplayed();
			Thread.sleep(3000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Unable to close Ready to checkout pop up");
		}
	}

	@And("^I search for a PayM ([^\"]*) device$")
	public void search_for_device(String devicename) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PhonesListingPage.class);
			PhonesListingPageAction.searchForDevice(devicename);
			Thread.sleep(3000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to search device");
		}
	}

	@And("^check the status ([^\"]*) of the device$")
	public void check_status_of_device(String status) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
			if (status.equals("Pre Order")) {
				ConnectedDeviceDetailsPageAction.checkDevStatusAsPreOrder();
				Thread.sleep(3000);
			}
			if (status.equals("Delayed Delivery")) {
				ConnectedDeviceDetailsPageAction.checkDevStatusAsDelayedDelivery();
				Thread.sleep(3000);
			}
			if (status.equals("In Stock")) {
				ConnectedDeviceDetailsPageAction.checkDevStatusAsInStock();
				Thread.sleep(3000);
			}
			if (!status.equals("Pre Order") || !status.equals("Delayed Delivery") || !status.equals("In Stock")) {
				Assert.fail("Please input correct status to check for the device");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to check status of the device");
		}
	}

	@Then("^Select 'Not your device' option$")
	public void select_Not_your_device_option() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.NotYourDevice();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to select not your device");
		}

	}

	@Then("^Select ([^\"]*), ([^\"]*) and ([^\"]*)$")
	public void select_Make_Model_and_Network(String Make, String Model, String Network) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.SelectMakeModelandNetwork(Make, Model, Network);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to select either Make, Model or Network");
		}
	}

	@Then("^perform update device$")
	public void perform_update_device() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.updateDeviceButton();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to select update device button");
		}
	}

	@Then("^Select any one refundable recycle option$")
	public void select_any_one_refundable_recycle_option() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.refundableOptionSelect();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to select update device button");
		}
	}

	@Then("^Verify 'Yes,get an accurate quote' is displayed$")
	public void verify_Yes_get_an_accurate_quote_is_displayed() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			Assert.assertTrue(UpgradeCustomerPageActions.VerifyAccurateQuotedisplay());
			System.out.println("Assertions pass for verify quote");
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to verify get accurate quote");
		}

	}

	@Then("^click on 'Yes,get an accurate quote'$")
	public void click_on_Yes_get_an_accurate_quote() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.getAccurateQuote();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to click on yes get an accurate quote button");
		}
	}

	@Then("^answer the questionnaire and click on 'Accept and continue to upgrade' button$")
	public void answer_the_questionnaire_and_click_on_Accept_and_continue_to_upgrade_button() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.questionnaire();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to validate and enter questionaire");
		}
	}

	@Then("^choose appropriately in 'Your Sim Card'section$")
	public void choosingYourSimCardSection() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.yourSim();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Unable to see your sim card section");
		}

	}

	@Then("^select <NeedSim> action and confirm$")
	public void select_NeedSim_action_and_confirm() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@And("^Navigate to FreeSim page$")
	public void Navigate_to_FreeSim_page() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			PageFactory.initElements(driver, MouseHoverPage.class);
			MouseHoverAction.PayGFreeSimNavigation();
			Autoredirection.redirect();
			Thread.sleep(10000);
		} catch (Exception e) {
			System.out.println("unable to do mousehover to sims");
			Assert.fail("unable to do mousehover to sims");
		}
	}

	
	 
	  @And("^I select 'iPads and Tablets' tab$") public void
	  select_iPads_and_Tablets_tab() throws Throwable { try {
	  
	  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	  PageFactory.initElements(driver, FreeSimPage.class);
	  FreeSimPageActions.iPadsandTabletstab(); } catch (Exception e) {
	  System.out.println("unable to do select ipads and tablets tab");
	  Assert.fail("unable to do select ipads and tablets tab"); } }
	  
	  @And("^I select Steady surfer 'ipad sims'$") public void
	  select_Steady_surfer_ipad_sims() throws Throwable { try {
	  
	  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	  PageFactory.initElements(driver, FreeSimPage.class);
	  FreeSimPageActions.iPadsim(); Autoredirection.redirect(); } catch (Exception
	  e) { System.out.println("unable to do select steady surfer ipad sim");
	  Assert.fail("unable to do select steady surfer ipad sim"); } }
	  
	  @Given("^I go to sim page$") public void gotosim() throws Throwable { try {
	  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	  driver.get("https://www.ref.o2.co.uk/shop/sim-cards/pay-as-you-go/"); } catch
	  (Exception e) { System.out.println("unable to do land on freesim page");
	  Assert.fail("unable to do land on freesim page"); } }
	  
	  @And("^I select 'Enter manually' and provide all valid details in the delivery page$"
	  ) public void Enter_delivery_details() throws Throwable { try {
	  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	  PageFactory.initElements(driver, FreeSimPage.class);
	  
	  FreeSimPageActions.EnterManually();
	  
	  } catch (Exception e) { System.out.println("unable to do enter the details");
	  Assert.fail("unable to do enter the details"); } }
	  
	  @Then("^verify order number is displayed$") public void OrdernumberFreeSim()
	  throws Throwable {
	  
	  try { driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	  PageFactory.initElements(driver, OrderConfirmationPage.class);
	  OrderConfirmationPageActions.gettitlepage();
	  OrderConfirmationPageActions.Orderid();
	  
	  } catch (Exception e) { System.out.println("Order number not generated");
	  Assert.fail("Order number not generated"); } }
	  
	

	//////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////// Regression from September
	//////////////////////////////////////////////////////////////////////////////////////// Release//////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////

	@Then("^I should see 'Your Sim Card'section$")
	public void i_should_see_Your_Sim_Card_section() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.DisplayYourSimCardSection();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("The Your Sim section not displayed");
		}

	}

	@And("^no option should be selected$")
	public void no_option_should_be_selected() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.RadioButtonNotSelectedByDefault();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Radio button is selected by default");
		}
	}

	@And("^verify that Confirm CTA is not displayed$")
	public void verify_that_Confirm_CTA_is_not_displayed() throws Throwable {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.ConfirmButtonNotDisplayed();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("The confirm button is present");
		}
	}

	@And("^verify that copy text 'Your Sim Card'section$")
	public void verify_that_copy_text_Your_Sim_Card_section() throws Throwable {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.YourSimSectionCopyText();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("The valid copytext is not displayed");
		}
	}

	@And("^verfiy that two option are displayed$")
	public void verfiy_that_two_option_are_displayed() throws Throwable {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.TwoOptionsDisplayed();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("The two options is not displayed");
		}
	}

	@And("^verify that 'Sim Swap Form'link is diplayed$")
	public void verify_that_Sim_Swap_Form_link_is_diplayed() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.SimSwapLinkDisplayed();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("The Sim swap link is not displayed");
		}
	}

	@When("^I click on 'Sim Swap Form' I should be opned with a new tab$")
	public void i_click_on_Sim_Swap_Form_I_should_be_opned_with_a_new_tab() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.ClickOnSimSwapLink();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("Failed to click on the Sim swap form link");
		}

	}

	@And("^Select a 'I need a sim'option$")
	public void select_a_I_need_a_sim_option() throws Throwable {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.ClickIneedAsim();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("The Radio button for I need a sim is not clicked");
		}

	}

	@And("^Verify that 'Confirm CTA' is displayed$")
	public void verify_that_Confirm_CTA_is_displayed() throws Throwable {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.ConfirmCTADisplayed();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("The confirm CTA is not displayed");
		}

	}

	@And("^Click on 'Confirm CTA'$")
	public void click_on_Confirm_CTA() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.ClickConfirmCTADisplayed();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("The confirm CTA is not clicked");
		}

	}

	@And("^verify that 'Go to checkout' CTA is enabled$")
	public void verify_that_Go_to_checkout_CTA_is_enabled() throws Throwable {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, BasketPage.class);
			BasketPageActions.UpgradeBasketPageYourSim();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("The Checkout is not enabled");
		}

	}

	@And("^Verify that the option selected by the user in 'Your sim card' section in upgrade options page is retained$")
	public void verify_that_the_option_selected_by_the_user_in_Your_sim_card_section_in_upgrade_options_page_is_retained()
			throws Throwable {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			BasketPageActions.UpgradeBasketYourSim();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("The Your sim card section is not present");
		}
	}
	
	@And("^Select a 'I dont need a new sim'option$")
	public void select_a_I_dont_need_a_new_sim_option() throws Throwable {
	   
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, UpgradeCustomerPage.class);
			UpgradeCustomerPageActions.ClickIneedAsim();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("The Radio button for I need a sim is not clicked");
		}
		
	}

	///////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////// Anusha Demo Free Sim Enter
	/////////////////////////////////////////////////////////////////////////////////////// Manually/////////////////
	///////////////////////////////////////////////////////////////////////////////////////

	@And("^navigate to PayG SIMO page$")
	public void navigate_to_PayG_SIMO_page() throws Throwable {

		// try {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, MouseHoverPage.class);
		MouseHoverAction.PayGSimoNavigation();
		Autoredirection.redirect();
		Thread.sleep(10000);
		/*
		 * } catch (Exception e) { // TODO Auto-generated catch block
		 * System.out.println("Unable to do mousehover to PAYG SIMO page");
		 * Assert.fail("Unable to do mousehover to PAYG SIMO page"); }
		 */

	}

	@And("^I enter details in Delivery Page([^\\\"]*) and ([^\\\"]*)$")
	public void i_enter_details_in_Delivery_PageTEST_and_ACCEPTA(String Firstname, String Surname) throws Throwable {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, DeliveryPage.class);
			DeliveryPageActions.SetDelivery();
			FreeSimDeliveryPageActions.FreeSimAboutYou(Firstname, Surname);
			FreeSimDeliveryPageActions.ClickSendMeMySim();

		}

		catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to input details in delivery page");
			Assert.fail("Unable to input details in delivery page");

		}

	}

	@Then("^Free Sim order confirmation is displayed$")
	public void free_Sim_order_confirmation_is_displayed() throws Throwable {

		// try {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, OrderConfirmationPage.class);
		OrderConfirmationPageActions.gettitlepage();
		OrderConfirmationPageActions.FreeSimMessage();
		Thread.sleep(2000);
		// }
		/*
		 * catch (Exception e) { // TODO Auto-generated catch block System.out.
		 * println("Error in order confirmation page , Please review the screenshots for failure"
		 * ); Assert.
		 * fail("Error in order confirmation page , Please review the screenshots for failure"
		 * );
		 * 
		 * }
		 */
	}
	
	
	////////////////////////////////////CCA Agent///////////////////////////////////////////////////////
	
	@Given("^select a valid Handset and Tariff combination such that there is monthly$")
	public void select_a_valid_Handset_and_Tariff_combination_such_that_there_is_monthly() throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_DealBuilderPage.class);
			Agent_DealBuilderPageActions.CCAHandsetTariffCombination() ;
			Thread.sleep(4000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to select valid CCA tariff and handset combination");
		}
	}

	@And("^update the emailid ([^\"]*)$")
	public void update_the_emailid(String emailid) throws Throwable {
		
		//try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			PageFactory.initElements(driver, Agent_UpdateCCAEmailPage.class);
			UpdateDevicePlanLinkEmailAddressActions.EnterCCAEmail(emailid);
			Thread.sleep(4000);
	/*	} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			Assert.fail("Unable to enter the CCA email id");
		}
	*/    
	}

	@Then("^Click on 'Generate CCA' button$")
	public void click_on_Generate_CCA_button() throws Throwable {
	    
	}

	@Then("^click on the 'CCA' link$")
	public void click_on_the_CCA_link() throws Throwable {
	   
	}

	@Then("^click on 'Continu'$")
	public void click_on_Continu() throws Throwable {
	   ;
	}

	@Then("^land on Delivery page and click on 'Continue'$")
	public void land_on_Delivery_page_and_click_on_Continue() throws Throwable {
	   
	}


	
	
	
	

}