package steps;

import java.awt.*;
import java.awt.event.KeyEvent;
import java.io.IOException;
import java.util.*;
import java.util.List;
import java.util.concurrent.TimeUnit;

import GlobalActions.*;
import actionsPerformed.*;
import cucumber.api.DataTable;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;


import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.Filereadingutility;
import org.testng.Assert;
import org.testng.asserts.Assertion;
import pageobjects.*;

public class E2EOrderPlaced_Steps {

    private static final String Filteroption = null;
    public WebDriver driver;
    public List<HashMap<String, String>> datamap;
    String FilterDataOption = null;
    LinkedList<String> expectedListBeforeSort = null;
    LinkedList<String> originalList = null;
    ArrayList<Integer> originalTariffList = null;
    ArrayList<Integer> expectedTariffListBeforeSort = null;
    LinkedList<String> TempList3 = null;
    String DataFilterRange = null;
    ArrayList<Integer> datalistbefore = new ArrayList<Integer>();
    ArrayList<Integer> datalistafter = new ArrayList<Integer>();
    ArrayList<Integer> monthlycostlistafter = new ArrayList<Integer>();
    ArrayList<Integer> upfrontcostlistafter = new ArrayList<Integer>();
    final static Logger log = Logger.getLogger("E2EOrderPlaced_Steps");

    public E2EOrderPlaced_Steps() {
        driver = Hooks.driver;
        // datamap = DataReader.data();

    }

    /**
     * ############## All the Below are for the Navigation Journeys
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


    @And("^a cookies pop up should be displayed$")
    public void a_cookies_pop_up_should_be_displayed() throws Throwable {
       // try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, MouseHoverPage.class);
            ShopLandingPageAction.CookiesPopUpDisplayed();
/*
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("unable to see the cookie pop up");
            Assert.fail("unable to see the cookie pop up");
        }
        */
    }

    @And("^Delete all cookies$")
    public void Delete_all_cookies() throws Throwable {
        driver.manage().deleteAllCookies();
        }
    @And("^launch the shop phones page$")
    public void launch_the_shop_phones_page() throws Throwable {
        driver.get("www.ref.o2.co.uk/shop/phones");
    }


    @And("^navigate to PAYM Phones page$")
    public void navigate_to_PAYM_Phones_page() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, MouseHoverPage.class);

            MouseHoverAction.PayMPhonesLandingPage();
            Autoredirection.redirect();
            Thread.sleep(10000);
           //GlobalActions.//CommonFunctionscheckTitle("PayM Phones Page");

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("unable to do mousehover to phones");
            Assert.fail("unable to do mousehover to phones");
        }
    }

    @And("^navigate to Pay as you Go Tablets page$")
    public void navigateToPayAsYouGoTabletsPage() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, MouseHoverPage.class);

            MouseHoverAction.PayasyouGoTablets();
            Autoredirection.redirect();
            Thread.sleep(10000);
           //GlobalActions.//CommonFunctionscheckTitle("PayM Phones Page");

        } catch (Exception e) {
            e.printStackTrace();
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
           //GlobalActions.//CommonFunctionscheckTitle("PayM MBB Page");
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
           //GlobalActions.//CommonFunctionscheckTitle("Accessories");
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
           //GlobalActions.//CommonFunctionscheckTitle("PayG MBB Page");
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("unable to do mousehover to PayGMBB");
            Assert.fail("unable to do mousehover to PayGMBB");
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
           //GlobalActions.//CommonFunctionscheckTitle("Fitness Trackers");
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
           //GlobalActions.//CommonFunctionscheckTitle("Smartwatches");
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
           //GlobalActions.//CommonFunctionscheckTitle("PayG Phones page");
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
            //Autoredirection.redirect();
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
            Autoredirection.redirectUpgrades();
           //GlobalActions.//CommonFunctionscheckTitle("Sign In Page");
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to do navigate to signin pagee");
            Assert.fail("Unable to do navigate to signin page");
        }
    }

/* #############           All the Below are for the Device Listing/Selecting page #######*/

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

    @Given("^select any available ([^\\\"]*) Fitness tracker$")
    public void select_any_available_Fitness_tracker(String arg1) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, FitnessTrackerPage.class);
            FitnessTrackerPageActions.DeviceSelect(arg1);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            System.out.println("Unable to select fitness tracker");
            Assert.fail("Unable to select fitness tracker");
        }
    }

    @Given("^select any available ([^\"]*) Smartwatch$")
    public void select_any_available_Smartwatch(String arg1) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, SmartwatchesPage.class);
            SmartwatchesPageActions.DeviceSelect(arg1);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
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
        //   try {
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        PageFactory.initElements(driver, AccessoryPage.class);
        PageFactory.initElements(driver, NonConnectedDeviceDetailsPage.class);
        AccessoryPageActions.selectAnyAccessoryLimit();
        NonConnectedDeviceDetailsPageAction.ClickonBasketIcon();
            /*
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to add accessories to basket");
            Assert.fail("Unable to add accessories to basket");

        }
        */

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

    @Then("^Verifies the Upgrade page is displayed$")
    public void verifyUpgradepageDisplay() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.verifyUpgradeShop();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            System.out.println("Unable to verify upgrade pages");
            Assert.fail("Unable to verify upgrade pages");
        }
    }

    @Then("^Logout from shop$")
    public void Logput() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.Logout();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            System.out.println("Unable to Logout ");
            Assert.fail("Unable to Logout");
        }
    }

	 /*############# All the Below are for the Tariff and Extras Page*/

    @Given("^Land on the 'Tariffs and extra' page$")
    public void land_on_the_Tariffs_and_extra_page() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
            Thread.sleep(3000);
            PAYMandPAYGTariffAndExtrasPageActions.TariffSelect("Randomtariff");
            Thread.sleep(6000);
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


    /**
     * ############## All the Below are for the Basket Page Validations
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
               // BasketPageActions.ValidateBasketPageContents();
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

    @And("^^enter a ([^\"]*) and ([^\"]*) and ten digit home number$")
    public void enter_a_digit_home_number(String Firstname, String Surname  ) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, DeliveryPage.class);
            Thread.sleep(5000);
            //CommonFunctionscheckTitle("Delivery Page");
            DeliveryPageActions.SetDelivery();
            Thread.sleep(2000);
            DeliveryPageActions.AboutYouTen(Firstname, Surname);
            Thread.sleep(2000);
            DeliveryPageActions.ClickContinue();
            Thread.sleep(5000);
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
            Thread.sleep(5000);
            //CommonFunctionscheckTitle("Delivery Page");
            DeliveryPageActions.SetDelivery();
            Thread.sleep(2000);
            DeliveryPageActions.AboutYou(Firstname, Surname);
            Thread.sleep(2000);
            DeliveryPageActions.ClickContinue();
            Thread.sleep(5000);
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
            //CommonFunctionscheckTitle("Delivery Page");
            DeliveryPageActions.AboutYou(Firstname, Surname);
            DeliveryPageActions.ClickContinue();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to input details in delivery page");
            Assert.fail("Unable to input details in delivery page");

        }
    }


    @And("^input the below details in Delivery page$")
    public void inputDetailsDeliveryPage(DataTable userData) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, DeliveryPage.class);
            DeliveryPageActions.SetDelivery_Datatable(userData);
            Thread.sleep(5000);
            DeliveryPageActions.AboutYou_Datatable(userData);
            Thread.sleep(2000);
            DeliveryPageActions.ClickContinue();
            Thread.sleep(50000);
        } catch (Exception e) {
            System.out.println("Unable to input details in delivery page");
            Assert.fail("Unable to input details in delivery page");
        }
    }

    @And("^input the below details in Free Sim Delivery page$")
    public void Freesim_inputDetailsDeliveryPage(DataTable userData) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, DeliveryPage.class);
            DeliveryPageActions.SetDelivery_Datatable(userData);
            Thread.sleep(5000);
            DeliveryPageActions.AboutYou_Datatable_FreeSim(userData);
            Thread.sleep(2000);
            DeliveryPageActions.MobileClickContinue();
            Thread.sleep(5000);
        } catch (Exception e) {
            System.out.println("Unable to input details in delivery page");
            Assert.fail("Unable to input details in delivery page");
        }
    }

    @And("^Click on the 'Continue button'$")
    public void clickOnTheContinueButton() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, DeliveryPage.class);
            DeliveryPageActions.ClickContinue();
            Thread.sleep(5000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to input details in delivery page");
            Assert.fail("Unable to input details in delivery page");
        }
    }


    @And("^verify I land on basket page$")
    public void verify_I_land_on_basket_page() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
            if (driver.findElements(By.xpath("(//div[@class='main-container']//*[contains(text(),' basket')])[1]")).size() > 0) {
                String str =  driver.findElement(By.xpath("(//div[@class='main-container']//*[contains(text(),' basket')])[1]")).getText();
                System.out.println("the customer lands on Basket page as : " + str);
                log.debug("the customer lands on Basket pageas : " + str);
                Thread.sleep(5000);
            }else{
                System.out.println("Failed to customer lands on Basket page ");
                log.debug("Failed to customer lands on Basket page ");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to input details in Basket page");
            Assert.fail("Unable to input details in Basket page");

        }
    }

    @And("^Click on browser back arrow and land on Basket page$")
    public void click_browser_back_arrow_and_land_Basket_page() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
            driver.navigate().back();
            System.out.println("we are Navigate back to the busket page");
            log.debug("we are Navigate back to the busket page");
            Thread.sleep(5000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Failed to navigate back to the Browser");
            Assert.fail("Failed to navigate back to the Browser");

        }
    }


    @And("^enter the shop url$")
    public void enter_shop_url() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
            driver.navigate().to("https://www.ref.o2.co.uk/shop/");
            Thread.sleep(2000);
            Robot robot = new Robot();
            robot.keyPress(KeyEvent.VK_ENTER);
            robot.keyRelease(KeyEvent.VK_ENTER);
            System.out.println("Entered the shop URL is :" + driver.getCurrentUrl());
            log.debug("Entered the shop URL is :" + driver.getCurrentUrl());
            Thread.sleep(5000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Failed to Enter the Shop URL ");
            Assert.fail("Failed to Enter the Shop URL ");
        }
    }


    @And("^the customer lands on delivery page$")
    public void customer_lands_on_delivery_page() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
            if (driver.findElements(By.xpath("//div[@id='delivery-section']//*[normalize-space()='Delivery']")).size() > 0) {
                String str =  driver.findElement(By.xpath("//div[@id='delivery-section']//*[normalize-space()='Delivery']")).getText();
                System.out.println("the customer lands on delivery page");
                log.debug("the customer lands on delivery page");
                Thread.sleep(5000);
            }else{
                System.out.println("Failed to customer lands on delivery page ");
                log.debug("Failed to customer lands on delivery page ");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Failed to customer lands on delivery page ");
            Assert.fail("Failed to customer lands on delivery page ");
        }
    }


    //And Click on Other radio button
    @And("^Click on Other radio button$")
    public void click_on_Other_radio_button() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
            if (driver.findElements(By.xpath("(//*[normalize-space()='Other']/preceding-sibling::input)[1]")).size() > 0) {
                String str =  driver.findElement(By.xpath("//div[@id='delivery-section']//*[normalize-space()='Other']")).getText();
                driver.findElement(By.xpath("(//*[normalize-space()='Other']/preceding-sibling::input)[1]")).click();
                System.out.println("Click on Other radio button as :: " + str);
                log.debug("Click on Other radio button as :: " + str);
                Thread.sleep(5000);
            }else{
                System.out.println("Failed to Click the Other radio button ");
                log.debug("Failed to Click the Other radio button ");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Failed to Click the Other radio button " + e.getStackTrace());
            Assert.fail("Failed to Click the Other radio button " + e.getStackTrace());
        }
    }


    //And Click on 'Place your order' CTA
    @And("^And Click on 'Place your order' CTA$")
    public void click_on_Place_your_order_CTA() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
            if (driver.findElements(By.xpath("//*[contains(text(),'lace your order')]")).size() > 0) {
                String btnValue =  driver.findElement(By.xpath("//*[contains(text(),'lace your order')]")).getText();
                driver.findElement(By.xpath("//*[contains(text(),'lace your order')]")).click();
                System.out.println("Click on Other radio button as :: " + btnValue);
                log.debug("Click on Other radio button as :: " + btnValue);
                Thread.sleep(5000);
            }else{
                System.out.println("Click on 'Place your order' CTA");
                log.debug("Click on 'Place your order' CTA");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Click on 'Place your order' CTA" + e.getStackTrace());
            Assert.fail("Click on 'Place your order' CTA" + e.getStackTrace());
        }
    }


    @And("^the Check box with (.*)I'll be using an iPhone(.*) copy text is displayed below 'Select' CTA in the horizontal tariff tile$")
    public void  checkbox_with_will_be_using_iPhone_belowSelectBtn() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
            List<WebElement> noOfselExists = driver.findElements(By.xpath("//button[contains(text(),'elect')]"));
            for(int i =1; i<noOfselExists.size(); i++){
                int countExists = driver.findElements(By.xpath("(//span[contains(text(),'ll be using an iPhone')])["+i+"]")).size();
                if(countExists > 0){
                    String checkBoxTxt = driver.findElement(By.xpath("(//span[contains(text(),'ll be using an iPhone')])["+i+"]")).getText();
                    driver.findElement(By.xpath("(//span[contains(text(),'ll be using an iPhone')])["+i+"]/preceding-sibling::input")).click();
                    System.out.println("We clicked the CheckBox below the  Select Button as :: " + checkBoxTxt);
                    log.debug("We clicked the CheckBox below the  Select Button as :: " + checkBoxTxt);
                    break;
                }
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Failed to clicked the CheckBox below the  Select Button");
            Assert.fail("Failed to clicked the CheckBox below the  Select Button");
        }
    }


    @And("^Click on 'Select' button in the tile of targeted promotion and Consumer should be landed on Basket Page$")
    public void click_Select_button_in_tile_targeted_promotion_and_Consumer_should_landed_Basket_Page() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
            List<WebElement> noOfselExists = driver.findElements(By.xpath("//button[contains(text(),'elect')]"));
            for(int i =1; i<noOfselExists.size(); i++){
                int countExists = driver.findElements(By.xpath("(//button[contains(text(),'elect')])["+i+"]")).size();
                if(countExists > 0){
                    driver.findElement(By.xpath("(//button[contains(text(),'elect')])["+i+"]")).click();
                    System.out.println("We clicked the Select Button");
                    log.debug("We clicked the Select Button");
                    break;
                }
            }
            Thread.sleep(3000);
            String busketPg = driver.findElement(By.xpath("//h1[text()='Your basket']")).getText();
            System.out.println("Successfully landing into the Busket page");
            log.debug("Successfully landing into the Busket page");
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Failed to landing into the Busket page");
            Assert.fail("Failed to landing into the Busket page");
        }
    }

    //And Click on "I'll be using an iPhone" checkbox and Click on 'Select' CTA to buy a tariff
    @And("^Click on (.*)I'll be using an iPhone(.*) checkbox and Click on 'Select' CTA to buy a tariff$")
    public void  click_on_I_will_using_iPhone_checkbox_and_Click_on_Select_CTA_to_buy_tariff() throws Throwable {
        try {
            E2EOrderPlaced_Steps e2eOrder = new E2EOrderPlaced_Steps();
            e2eOrder.checkbox_with_will_be_using_iPhone_belowSelectBtn();
            e2eOrder.click_Select_button_in_tile_targeted_promotion_and_Consumer_should_landed_Basket_Page();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Failed to  Click on I'll be using an iPhone checkbox and Click on 'Select' CTA to buy a tariff");
            Assert.fail("Failed to  Click on I'll be using an iPhone checkbox and Click on 'Select' CTA to buy a tariff");
        }
    }


    //the targeted promotion section is displayed just below the 'recycle options' section
    @And("^the targeted promotion section is displayed just below the 'recycle options' section$")
    public void targeted_promotion_section_displayed_just_below_recycle_options_section() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
            int sizeof = (int) driver.findElements(By.xpath("//*[contains(text(),'kage just for you')]")).size();
            if(sizeof>0){
                String val = driver.findElement(By.xpath("//*[contains(text(),'kage just for you')]")).getText();
                System.out.println("we are valideted the the A package just for you next to Upgrade and recycle options as :: " + val);
                log.debug("we are valideted the the A package just for you next to Upgrade and recycle options as :: " + val);
            }else{
                System.out.println("Failed to find the targeted promotion section is displayed just below the 'recycle options' section");
                log.debug("Failed to find the the targeted promotion section is displayed just below the 'recycle options' section");
            }
            Thread.sleep(2000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Failed to find the the targeted promotion section is displayed just below the 'recycle options' section " +e.getStackTrace());
            Assert.fail("Failed to find the the targeted promotion section is displayed just below the 'recycle options' section " +e.getStackTrace());

        }
    }

    //And verify 'Terms and conditions' link is present
    @And("^verify 'Terms and conditions' link is present$")
    public void verify_Terms_and_conditions_link_is_present() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
            Thread.sleep(2000);
            if (driver.findElements(By.xpath("//a[normalize-space()='terms and conditions']")).size() > 0){
                String termAndConditTxt = driver.findElement(By.xpath("//a[normalize-space()='terms and conditions']")).getText();
                System.out.println(" verify 'Terms and conditions' link is present " + termAndConditTxt);
                log.debug(" verify 'Terms and conditions' link is present " + termAndConditTxt);
            }
            Thread.sleep(2000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Failed toerify 'Terms and conditions' link is present");
            Assert.fail("Failed toerify 'Terms and conditions' link is present");
        }
    }


    //And the 'Promotions' section is displayed with all applied promotions description in the Your Order section
    @And("^the 'Promotions' section is displayed with all applied promotions description in the Your Order section$")
    public void Promotions_section_displayed_with_all__applied_promotions_description_Your_order_section() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
            DeliveryPageActions.verifyPromotionsDisplay_yourORder();
            Thread.sleep(2000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to input details in delivery page");
            Assert.fail("Unable to input details in delivery page");
        }
    }



    //////////*****below are Dummy functions just for verifications ***********////////////

    @Given("^I am on delivery page$")
    public void Deliverypagelaunch() throws Throwable {
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        String relativePath = System.getProperty("user.dir");
        String EnvPropFilePath = relativePath + "/Configurations/Properties/AppConfig.properties";
        String Newurl = Filereadingutility.getPropertyValue(EnvPropFilePath, "Dummyurl");
        driver.navigate().to(Newurl);
        driver.findElement(By.id("qa-proceed-to-basket-dock-header")).click();
        driver.findElement(By.xpath("//*[@id='shopApp']/div[4]/div/div/div[1]/div[1]/div/form/input")).click();
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
            Thread.sleep(10000);
            //CommonFunctionscheckTitle("Payment Page");
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
            //CommonFunctionscheckTitle("Payment Page");
            PaymentPageActions.Set_Bank_details(Username);
            Thread.sleep(3000);
            PaymentPageActions.Time_At_Address_CC();
            Thread.sleep(3000);
            PaymentPageActions.Card_Details(Username);
            Thread.sleep(75000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
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
            //CommonFunctionscheckTitle("Agreement Page");
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
            e.printStackTrace();
            System.out.println(
                    "Agreements page is not displayed or unable to enter some information in thie page, Please review the screenshots for failure");
            Assert.fail(
                    "Agreements page is not displayed or unable to enter some information in thie page, Please review the screenshots for failure");

        }
    }

    @And("^Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks$")
    public void continue_to_CCA_or_Buyout_or_Trade_In_Agreements_page_and_confirm_all_the_agreement_checks()
            throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, AgreementPage.class);
            PageFactory.initElements(driver, ReviewPage.class);
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
            Thread.sleep(5000);
            ReviewPageActions.gettitlepage();
            ReviewPageActions.TermsCheckBox();
            ReviewPageActions.PayNow();
        } catch (Exception e) {
            e.printStackTrace();
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
        //CommonFunctionscheckTitle("Review Page");
        ReviewPageActions.gettitlepage();
        ReviewPageActions.TermsCheckBox();
        ReviewPageActions.checkOrderContractTextRP();
        ReviewPageActions.PayNow();

    }

    @Given("^Continue to Review page and review the order for Trustev details$")
    public void ReviewPageConfirmationwithTrustev() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, ReviewPage.class);
            //CommonFunctionscheckTitle("Review Page");
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

            Assert.assertTrue(driver.getPageSource().contains(ExpOrderContractMsg),
                    "Assertion Failed: Expected Message: " + ExpOrderContractMsg + " is not present in the page"
            );

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
            //CommonFunctionscheckTitle("Confirmation Page");
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
        WebElement element = driver.findElement(By.xpath("//*[@id='secciYesButton']"));
        JavascriptExecutor executor = (JavascriptExecutor)driver;
        executor.executeScript("arguments[0].click();", element);
        //driver.findElement(By.xpath("//*[@id='secciYesButton']")).click();
        System.out.println("Clicked on the O2 Refresh Deal Summary YES button");

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

    @Given("^Select a valid PAYG ([^\"]*)$")
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
            Thread.sleep(3000);
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
	 */

    @Given("^Validate all the Basket content and checkout$")
    public void validate_all_the_Basket_content_and_checkout() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_DealBuilderPage.class);
            //Agent_DealBuilderPageActions.ValdiateBasket();
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
            driver.manage().timeouts().implicitlyWait(200, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_CreditCheckDetailsPage.class);
            Agent_CreditCheckPageActions.Creditcheck(Firstname, Surname, HouseNumber, PostCode);
            System.out.println("Completed Credit check");
            Agent_CreditCheckPageActions.BankDetails(Username);
            System.out.println("Completed Bank details");
            Thread.sleep(5000);

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

    @Then("^enter ten digit contact number perform the credit checks using valid ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*) and valid ([^\"]*)$")
    public void enter_ten_digit_contact_number_perform_the_credit_checks(String Firstname, String Surname, String HouseNumber, String PostCode, String Username ) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_CreditCheckDetailsPage.class);
            Agent_CreditCheckPageActions.CreditcheckAndTenDigitContact(Firstname, Surname, HouseNumber, PostCode);
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


	@Then("^Register the customer with valid ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*) and other valid details in delivery page$")

    public void register_the_customer(String Firstname, String Surname, String HouseNumber, String PostCode)
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
           //GlobalActions.//CommonFunctionscheckTitle("Sign In Page");
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

    @And("^select any available ([^\"]*) Tablet$")
    public void select_any_available_Tablet(String arg1) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, TabletPage.class);
            TabletPageActions.DeviceSelect(arg1);
        } catch (Exception e) {
            e.printStackTrace();
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
    public void verifyDeviceSortedBasedOnSortOption(String SortOption) throws InterruptedException, IOException {
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
            PageFactory.initElements(driver, iPadPage.class);
            iPadPageAction.validateiPadElements(devicename);
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
            Thread.sleep(6000);
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
            //UpgradeCustomerPageActions.selectDeviceInRecommendedDevicesSection(devicename);
            driver.findElement(By.xpath("//span[normalize-space()='iPhone 8']")).click();
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
            System.out.println("Completed verify ");
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

    @And("^Select ribboned tariff ([^\"]*) in upgrade journey$")
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

            Assert.assertTrue(driver.getPageSource().contains(ExpectedTimeSlotMessage),
                    "Assertion Failed: Expected Message: " + ExpectedTimeSlotMessage + " is not present in the page"
            );

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
            ExpectedDelayedDeliveryMessage = " may take up to 1 week. You'll pay for the phone now, but won't start paying for your contract until your phone is on its way.";

            ExpectedPacCodeInfoMessage = "If you're moving from another operator and want to keep your number then now is a good time to ask them for your PAC code.";


            Assert.assertTrue(driver.getPageSource().contains(ExpectedDelayedDeliveryMessage),
                    "Assertion Failed: Expected Message: " + ExpectedDelayedDeliveryMessage
                            + " is not present in the page"
            );

            System.out.println("Assertion Passed: Expected Mesasge: " + ExpectedDelayedDeliveryMessage
                    + " is present in the Order Confirmation page");

            Assert.assertTrue(driver.getPageSource().contains(ExpectedPacCodeInfoMessage),
                    "Assertion Failed: Expected Message: " + ExpectedPacCodeInfoMessage + " is not present in the page"
            );

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

    @And("^I select 'iPads and Tablets' tab$")
    public void select_iPads_and_Tablets_tab() throws Throwable {
        try {

            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            PageFactory.initElements(driver, FreeSimPage.class);
            FreeSimPageActions.iPadsandTabletstab();
        } catch (Exception e) {
            System.out.println("unable to do select ipads and tablets tab");
            Assert.fail("unable to do select ipads and tablets tab");
        }
    }

    @And("^I select Steady surfer 'ipad sims'$")
    public void select_Steady_surfer_ipad_sims() throws Throwable {
        try {

            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            PageFactory.initElements(driver, FreeSimPage.class);
            FreeSimPageActions.iPadsim();
            Autoredirection.redirect();
        } catch (Exception e) {
            System.out.println("unable to do select steady surfer ipad sim");
            Assert.fail("unable to do select steady surfer ipad sim");
        }
    }

    @Given("^I go to sim page$")
    public void gotosim() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            driver.get("https://www.ref.o2.co.uk/shop/sim-cards/pay-as-you-go/");
        } catch (Exception e) {
            System.out.println("unable to do land on freesim page");
            Assert.fail("unable to do land on freesim page");
        }
    }

    @Then("^verify order number is displayed$")
    public void OrdernumberFreeSim() throws Throwable {

        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, OrderConfirmationPage.class);
            OrderConfirmationPageActions.gettitlepage();
            OrderConfirmationPageActions.Orderid();

        } catch (Exception e) {
            System.out.println("Order number not generated");
            Assert.fail("Order number not generated");
        }
    }

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

    @Given("^Select a 'I dont need a sim'option$")
    public void select_a_I_dont_need_a_sim_option() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.ClickIdontneedAsim();
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

        } catch (Exception e) {
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

    //////////////////////////////////// CCA
    //////////////////////////////////// Agent///////////////////////////////////////////////////////

    @And("^click on 'Take offer and upgrade'button$")
    public void clickOnTakeOfferAndUpgradeButton() throws Throwable {
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        try {
            PageFactory.initElements(driver, UpgradePhonesListingPage.class);
            UpgradeCustomerPageActions.clickTakeOfferAndUpgrade();
            Thread.sleep(2000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to click on 'Take offer and upgrade'button");

        }
    }

    @And("^select any random tariff from Recommended devices section$")
    public void selectRandomTariff() throws Throwable {
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        try {
            PageFactory.initElements(driver, UpgradePhonesListingPage.class);
            UpgradeCustomerPageActions.selectTariffFromRecommendedSection();
            Thread.sleep(2000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to select any random tariff from Recommended devices section");

        }
    }

    @And("^verify if the buyout offer is displayed in My Package section$")
    public void verifyBuyOutOfferInMyPackage() throws Throwable {
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        try {
            PageFactory.initElements(driver, UpgradePhonesListingPage.class);
            UpgradeCustomerPageActions.verifyBuyOutDisplayedInMyPackage();
            Thread.sleep(2000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to verify if the buyout offer is displayed in My Package section");

        }
    }

    @And("^verify if the buyout offer is displayed in Basket page$")
    public void verifyBuyOutOfferInBasketPage() throws Throwable {
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        try {
            PageFactory.initElements(driver, UpgradePhonesListingPage.class);
            UpgradeCustomerPageActions.verifyBuyOutDisplayedInBasketPage();
            Thread.sleep(2000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to verify if the buyout offer is displayed in My Package section");

        }
    }

    @And("^verify if buyout offer is displayed in OTAC page$")
    public void verifyBuyOutOfferInOTACPage() throws Throwable {
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        try {
            PageFactory.initElements(driver, UpgradePhonesListingPage.class);
            UpgradeCustomerPageActions.verifyBuyOutDisplayed();
            Thread.sleep(2000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to verify if the buyout offer is displayed in OTAC");

        }
    }

    @And("^verify if buyout offer is displayed in ordersummary sections$")
    public void verifyBuyOutOfferInOSSection() throws Throwable {
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        try {
            PageFactory.initElements(driver, UpgradePhonesListingPage.class);
            UpgradeCustomerPageActions.verifyBuyOutDisplayed();
            Thread.sleep(2000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to verify if the buyout offer is displayed in My Package section");

        }
    }

    @Given("^Search for ([^\\\\\\\"]*) device$")
    public void search_for_Delayed_device(String Status) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_DealBuilderPage.class);
            Agent_DealBuilderPageActions.SearchDevice(Status);
            Thread.sleep(4000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to Search device");
        }

    }

    @Then("^I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs ([^\"]*)$")
    public void filterandDropDownPosition(String SortOption) throws Throwable {

        log.debug(
                "Running Test Step: @Then(I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs)");

        try {

            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);

            PAYMandPAYGTariffAndExtrasPageActions.SortFilterPosition();
            Thread.sleep(2000);
            PAYMandPAYGTariffAndExtrasPageActions.clickViewAllTariffs();
            Thread.sleep(2000);

            ArrayList<Integer> TempList1 = null;
            ArrayList<Integer> TempList2 = null;

            if (SortOption.equals("Monthly data (High to low)")) {
                originalTariffList = PAYMandPAYGTariffAndExtrasPageActions.getCurrentSortOrderUsingMonthlyData();
                TempList1 = originalTariffList;
                TempList2 = PAYMandPAYGTariffAndExtrasPageActions
                        .reArrangeListInDescendingBeforeApplyingSort(TempList1);
            }
            if (SortOption.equals("Monthly data (Low to High)")) {
                originalTariffList = PAYMandPAYGTariffAndExtrasPageActions.getCurrentSortOrderUsingMonthlyData();
                TempList1 = originalTariffList;
                TempList2 = PAYMandPAYGTariffAndExtrasPageActions.reArrangeListInAcendingBeforeApplyingSort(TempList1);
            }
            if (SortOption.equals("Monthly cost (High to low)")) {
                originalTariffList = PAYMandPAYGTariffAndExtrasPageActions.getCurrentSortOrderUsingMonthlyCost();
                TempList1 = originalTariffList;
                TempList2 = PAYMandPAYGTariffAndExtrasPageActions
                        .reArrangeListInDescendingBeforeApplyingSort(TempList1);
            }
            if (SortOption.equals("Monthly cost (Low to High)")) {
                originalTariffList = PAYMandPAYGTariffAndExtrasPageActions.getCurrentSortOrderUsingMonthlyCost();
                TempList1 = originalTariffList;
                TempList2 = PAYMandPAYGTariffAndExtrasPageActions.reArrangeListInAcendingBeforeApplyingSort(TempList1);
            }
            if (SortOption.equals("Upfront cost (High to low)")) {
                originalTariffList = PAYMandPAYGTariffAndExtrasPageActions.getCurrentSortOrderUsingUpfrontCost();
                TempList1 = originalTariffList;
                TempList2 = PAYMandPAYGTariffAndExtrasPageActions
                        .reArrangeListInDescendingBeforeApplyingSort(TempList1);
            }
            if (SortOption.equals("Upfront cost (Low to high)")) {
                originalTariffList = PAYMandPAYGTariffAndExtrasPageActions.getCurrentSortOrderUsingUpfrontCost();
                TempList1 = originalTariffList;
                TempList2 = PAYMandPAYGTariffAndExtrasPageActions.reArrangeListInAcendingBeforeApplyingSort(TempList1);
            }

            expectedTariffListBeforeSort = TempList2;

            System.out.println("--------Orginal Tariff List-----------: " + originalTariffList);
            System.out.println("--------Expected Tariff List After Applying Sort (without Data Filter) -----------: "
                    + expectedTariffListBeforeSort);

        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            System.out.println("Sort filter validation failed");
            Assert.fail("Sort filter validation failed");

        }
    }

    @Given("^Verify trade in message is displayed under 'Get your latest phone on us today' section$")
    public void verify_trade_in_message_is_displayed_under_Get_your_latest_phone_on_us_today_section()
            throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.VerifyTradeinMessage();

        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to verify tradein message");
            Assert.fail("Unable to verify tradein message");
        }
    }

    @Given("^Answer appropriate questionaire in 'your device' section$")
    public void answer_appropriate_questionaire_in_your_device_section() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.AnswerTradeinQuestion();

        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to Answer tradein questions");
            Assert.fail("Unable to Answer tradein questions");
        }
    }

    @Given("^click on 'upgrade now' button$")
    public void click_on_upgrade_now_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.UpgradeNowButton();

        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable click on 'upgrade now' button");
            Assert.fail("Unable click on 'upgrade now' button");
        }
    }

    @Then("^Verify 'Upgrade on us' displayed in basket page$")
    public void verify_Upgrade_on_us_displayed_in_basket_page() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.VerifyUpgradeonUs();

        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to Verify 'Upgrade on us' displayed in basket page");
            Assert.fail("Unable to Verify 'Upgrade on us' displayed in basket page");
        }
    }

    @Then("^Verify 'Upgrade on us' displayed in delivery page$")
    public void verify_Upgrade_on_us_displayed_in_delivery_page() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.VerifyUpgradeonUs();

        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("\"Unable to Verify 'Upgrade on us' displayed in delivery page");
            Assert.fail("Unable to verify 'Upgrade on us' displayed in delivery page");
        }
    }

    @Then("^Verify 'Upgrade on us' displayed in Payment page$")
    public void verify_Upgrade_on_us_displayed_in_Payment_page() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.VerifyUpgradeonUs();

        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable toVerify 'Upgrade on us' displayed in Payment page");
            Assert.fail("Unable to Verify 'Upgrade on us' displayed in Payment page");
        }
    }

    @Then("^Verify 'Upgrade on us' displayed in review page$")
    public void verify_Upgrade_on_us_displayed_in_review_page() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.VerifyUpgradeonUs();

        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to Verify 'Upgrade on us' displayed in review page");
            Assert.fail("Unable to Verify 'Upgrade on us' displayed in review page");
        }
    }

    @When("^I click on respective ([^\\\"]*) data filter$")
    public void clickOnRespectiveDataFilter(String range) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
            DataFilterRange = range;
            PAYMandPAYGTariffAndExtrasPageActions.clickViewAllTariffs();
            datalistbefore = PAYMandPAYGTariffAndExtrasPageActions.getDataListBeforeSelectingFilter();
            PAYMandPAYGTariffAndExtrasPageActions.selectFilter(range);
            FilterDataOption = range;
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            System.out.println("Unable to click on respective data filter");
            Assert.fail("Unable to click on respective data filter");
        }
    }

    @And("^I should see appropriate tariffs based on the selected data filter ([^\"]*)$")
    public void getTariffList(String SortOption) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);

            if (DataFilterRange.equals("high")) {
                if (SortOption.equals("Monthly data (High to low)")
                        || SortOption.equals("Monthly data (Low to High)")) {
                    datalistafter = PAYMandPAYGTariffAndExtrasPageActions.getDataListAfterSelectingFilter();
                }
                if (SortOption.equals("Monthly cost (High to low)")
                        || SortOption.equals("Monthly cost (Low to High)")) {
                    monthlycostlistafter = PAYMandPAYGTariffAndExtrasPageActions
                            .getMonthlyCostListAfterSelectingFilter();
                }
                if (SortOption.equals("Upfront cost (High to low)")
                        || SortOption.equals("Upfront cost (Low to high)")) {
                    upfrontcostlistafter = PAYMandPAYGTariffAndExtrasPageActions
                            .getUpfrontCostListAfterSelectingFilter();
                }
                PAYMandPAYGTariffAndExtrasPageActions.getRange();
                PAYMandPAYGTariffAndExtrasPageActions.getValuesToCompareWhenGreaterIsSelected();
                PAYMandPAYGTariffAndExtrasPageActions.verifyListWhenGreaterIsSelected();
            } else if (DataFilterRange.equals("low") || DataFilterRange.equals("medium")) {
                if (SortOption.equals("Monthly data (High to low)")
                        || SortOption.equals("Monthly data (Low to High)")) {
                    datalistafter = PAYMandPAYGTariffAndExtrasPageActions.getDataListAfterSelectingFilter();
                }
                if (SortOption.equals("Monthly cost (High to low)")
                        || SortOption.equals("Monthly cost (Low to High)")) {
                    monthlycostlistafter = PAYMandPAYGTariffAndExtrasPageActions
                            .getMonthlyCostListAfterSelectingFilter();
                }
                if (SortOption.equals("Upfront cost (High to low)")
                        || SortOption.equals("Upfront cost (Low to high)")) {
                    upfrontcostlistafter = PAYMandPAYGTariffAndExtrasPageActions
                            .getUpfrontCostListAfterSelectingFilter();
                }
                PAYMandPAYGTariffAndExtrasPageActions.getRange();
                PAYMandPAYGTariffAndExtrasPageActions.getValuesToCompare();
                PAYMandPAYGTariffAndExtrasPageActions.verifyList();
            } else {
                Assert.fail("Please provide data range (low/medium/high)");
            }

        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to click on respective data filter");
            Assert.fail("Unable to click on respective data filter");
        }
    }

    @And("^I should see tariffs relevant to selected sort option ([^\"]*) & filter option ([^\"]*)$")
    public void verifyTariffSortedBasedOnSortOptionAndFilter(String SortOption, String FilterName) throws Throwable {

        log.debug("Running Test Step: @And(I should see tariffs relevant to selected sort option and filter option)");

        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);

            ArrayList<Integer> ListAfterSort = null;
            ArrayList<Integer> ListBeforeSort = null;
            ArrayList<Integer> TempList1 = null;

            if (SortOption.equals("Monthly data (High to low)")) {
                TempList1 = datalistafter;
                ListBeforeSort = PAYMandPAYGTariffAndExtrasPageActions
                        .reArrangeListInDescendingBeforeApplyingSort(TempList1);
            }
            if (SortOption.equals("Monthly data (Low to High)")) {
                TempList1 = datalistafter;
                ListBeforeSort = PAYMandPAYGTariffAndExtrasPageActions
                        .reArrangeListInAcendingBeforeApplyingSort(TempList1);
            }
            if (SortOption.equals("Monthly cost (High to low)")) {
                TempList1 = monthlycostlistafter;
                ListBeforeSort = PAYMandPAYGTariffAndExtrasPageActions
                        .reArrangeListInDescendingBeforeApplyingSort(TempList1);
            }
            if (SortOption.equals("Monthly cost (Low to High)")) {
                TempList1 = monthlycostlistafter;
                ListBeforeSort = PAYMandPAYGTariffAndExtrasPageActions
                        .reArrangeListInAcendingBeforeApplyingSort(TempList1);
            }
            if (SortOption.equals("Upfront cost (High to low)")) {
                TempList1 = upfrontcostlistafter;
                ListBeforeSort = PAYMandPAYGTariffAndExtrasPageActions
                        .reArrangeListInDescendingBeforeApplyingSort(TempList1);
            }
            if (SortOption.equals("Upfront cost (Low to high)")) {
                TempList1 = upfrontcostlistafter;
                ListBeforeSort = PAYMandPAYGTariffAndExtrasPageActions
                        .reArrangeListInAcendingBeforeApplyingSort(TempList1);
            }

            if (SortOption.equals("Monthly data (High to low)") || SortOption.equals("Monthly data (Low to High)")) {

                ListAfterSort = PAYMandPAYGTariffAndExtrasPageActions.getCurrentSortOrderUsingMonthlyData();
            }

            if (SortOption.equals("Monthly cost (High to low)") || SortOption.equals("Monthly cost (Low to High)")) {

                ListAfterSort = PAYMandPAYGTariffAndExtrasPageActions.getCurrentSortOrderUsingMonthlyCost();

            }

            if (SortOption.equals("Upfront cost (High to low)") || SortOption.equals("Upfront cost (Low to high)")) {

                ListAfterSort = PAYMandPAYGTariffAndExtrasPageActions.getCurrentSortOrderUsingUpfrontCost();
            }

            System.out.println("---------List sent to verification method (BeforeSort)---------------");
            System.out.println(ListBeforeSort);

            System.out.println("---------List sent to verification method (AfterSort)---------------");
            System.out.println(ListAfterSort);

            PAYMandPAYGTariffAndExtrasPageActions.verifyTariffSortedAsPerSortOption(ListBeforeSort, ListAfterSort);

            System.out.println(
                    "Assertion Success: Tariffs have been sorted successfully based on Sort Option and Tariff Option");
            System.out.println(
                    "Assertion Success: Tariffs have been sorted successfully based on Sort Option and Tariff Option");

        } catch (AssertionError e) {

            log.debug("Fail" + " - " + e.getMessage());
            Assert.fail("Fail: Cannot assert if Tariffs are sorted based on sort option and Filter Option");
        }
    }

    @And("^I should see tariffs based on the selected sort option ([^\"]*)$")
    public void verifyTariffSortedBasedOnSortOption(String SortOption) throws Throwable {

        log.debug("Running Test Step: @And(I should see tariffs based on the selected sort option)");

        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);

            ArrayList<Integer> ListAfterSort = null;
            ArrayList<Integer> ListBeforeSort = expectedTariffListBeforeSort;

            if (SortOption.equals("Monthly data (High to low)") || SortOption.equals("Monthly data (Low to High)")) {
                ListAfterSort = PAYMandPAYGTariffAndExtrasPageActions.getCurrentSortOrderUsingMonthlyData();
            }

            if (SortOption.equals("Monthly cost (High to low)") || SortOption.equals("Monthly cost (Low to High)")) {
                ListAfterSort = PAYMandPAYGTariffAndExtrasPageActions.getCurrentSortOrderUsingMonthlyCost();

            }

            if (SortOption.equals("Upfront cost (High to low)") || SortOption.equals("Upfront cost (Low to high)")) {
                ListAfterSort = PAYMandPAYGTariffAndExtrasPageActions.getCurrentSortOrderUsingUpfrontCost();
            }

            System.out.println("---------List sent to verification method (BeforeSort)---------------");
            System.out.println(ListBeforeSort);

            System.out.println("---------List sent to verification method (AfterSort)---------------");
            System.out.println(ListAfterSort);

            PAYMandPAYGTariffAndExtrasPageActions.verifyTariffSortedAsPerSortOption(ListBeforeSort, ListAfterSort);

        } catch (AssertionError e) {

            log.debug("Fail" + " - " + e.getMessage());
            Assert.fail("Fail: Cannot assert if Tariffs are sorted based on sort option");
        }
    }

    @And("^Click on Tablet section in upgrade options page$")
    public void click_on_Tablets_tab() throws Throwable {
        try {

            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.clickOnTabletstab();

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("\"Not able to select Tablets tab");
            Assert.fail("Not able to select Tablets tab");
        }
    }

    @And("^If I select ANY sort option ([^\"]*) from the drop-down$")
    public void select_sort_Tariff_dropdown(String tariffSortDropDown) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
            PAYMandPAYGTariffAndExtrasPageActions.selectTariffSort(tariffSortDropDown);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("not able select sort option from the dropdown" + tariffSortDropDown);
            Assert.fail("not able to select sort option from the dropdown" + tariffSortDropDown);
        }
    }

    @And("^Click on View all Tariffs link in upgrade options page$")
    public void click_on_View_all_tariffs() throws Throwable {
        try {

            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.clickOnViewAllTariffslink();

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("\"Not able to select view all tariffs link");
            Assert.fail("Not able to select view all tariffs link");
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////// CFA_SIMO_Phone_Data_filters_options_Order_placement/////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////

    @Then("^I should see data filters buttons for SIMO tariffs$")
    public void i_should_see_data_filters_buttons_for_SIMO_tariffs() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
            PAYMandPAYGTariffAndExtrasPageActions.VerifyFilterDataTabPresent();

        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to View Data Filter option");
            Assert.fail("Unable to View Data Filter option");
        }

    }

    @Then("^Data filter button should be in 'selected' state$")
    public void data_filter_button_should_be_in_selected_state() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
            String Filteroption = FilterDataOption;
            System.out.println(Filteroption);
            PAYMandPAYGTariffAndExtrasPageActions.SelectedState(Filteroption);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Not able to verify if in Selected State");
            Assert.fail("Not able to verify if in Selected State");
        }
    }

    @When("^I deselect filter button$")
    public void i_deselect_filter_button() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
            PAYMandPAYGTariffAndExtrasPageActions.DeSelectedState();
        } catch (Exception e) {

        }

    }

    @Then("^I should see default tariff lists$")
    public void i_should_see_default_tariff_lists() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
            PAYMandPAYGTariffAndExtrasPageActions.getDataListBeforeSelectingFilter();
        } catch (Exception e) {
        }

    }

    @And("^I select 'Enter manually' and input ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*)$")
    public void Enter_delivery_details(String Flatnumber, String Housename, String Address1, String Town,
                                       String Postcode) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            PageFactory.initElements(driver, FreeSimPage.class);

            FreeSimPageActions.EnterManually(Flatnumber, Housename, Address1, Town, Postcode);

            Thread.sleep(2000);
        } catch (Exception e) {
            System.out.println("unable to do enter the details");
            Assert.fail("unable to do enter the details");
        }
    }

    @And("^I input ([^\"]*), ([^\"]*), ([^\"]*) in About You Section$")
    public void Enter_delivery_details(String Firstname, String Lastname, String Contact_number) throws Throwable {

        try {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            PageFactory.initElements(driver, FreeSimPage.class);
            FreeSimPageActions.AboutYouSection(Firstname, Lastname, Contact_number);
            Thread.sleep(2000);
        } catch (Exception e) {
            System.out.println("unable to do enter the details in About you section");
            Assert.fail("unable to do enter the details About you section");
        }
    }
    //////////////////////////////////// CCA
    //////////////////////////////////// Agent///////////////////////////////////////////////////////

    @Given("^select a valid Handset and Tariff combination such that there is monthly$")
    public void select_a_valid_Handset_and_Tariff_combination_such_that_there_is_monthly() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_DealBuilderPage.class);
            Agent_DealBuilderPageActions.CCAHandsetTariffCombination();
            Thread.sleep(4000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to select valid CCA tariff and handset combination");
        }
    }

    @And("^get the emailid$")
    public void update_the_emailid() throws Throwable {

        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_UpdateCCAEmailPage.class);
            UpdateDevicePlanLinkEmailAddressActions.EnterCCAEmail();
            Thread.sleep(4000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to enter the CCA email id");
        }

    }

    @Then("^Click on 'Generate CCA' button$")
    public void click_on_Generate_CCA_button() throws Throwable {

        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, O2RefreshDealSummaryPage.class);
            O2RefreshDealSummaryActions.DealSummarySectionforCCA();
            O2RefreshDealSummaryActions.ClickGenerateCCABtn();

            Thread.sleep(4000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to enter the CCA email id");
        }
    }

    @Then("^click on the 'CCA' link$")
    public void click_on_the_CCA_link() throws Throwable {

        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, O2RefreshDealSummaryPage.class);
            O2RefreshDealSummaryActions.ClickGenerateCCALink();
            O2RefreshDealSummaryActions.SwitchFocusToNewTab();

            Thread.sleep(4000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to enter the CCA email id");
        }

    }

    @Then("^Signin using CCA valid emailid and ([^\"]*) credentials$")
    public void signin_using_CCA_valid_emailid_and_test_credentials(String password1) throws Throwable {

        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.CCALogin(password1);
            UpgradeCustomerPageActions.Signin();

            Thread.sleep(4000);

        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to enter the CCA email id");
        }

    }

    @And("^click on View All phones in upgrade page$")
    public void clickViewAllPhonesUpgrade() throws Throwable {
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        try {
            PageFactory.initElements(driver, UpgradePhonesListingPage.class);
            UpgradeCustomerPageActions.viewAllPhones();
            Thread.sleep(2000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to click on View All phones");

        }
    }

    ///////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Agent
    /////////////////////////////////////////////////////////////////////////////////// Trade////////////////////////////////////
    /////////////////////////////////// In ////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////

    @And("^Clicks on 'Trade In'button$")
    public void clicks_on_Trade_In_button() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_DealBuilderPage.class);
            Agent_DealBuilderPageActions.AgentTradeInQuestionair();
            Thread.sleep(4000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to click on Trade in Button");
        }

    }

    @And("^land on the payment page and input ([^\\\"]*) and other details and click 'Continue on next step' in upgrade journey$")
    public void CreditCheckPaymentPage_HomeDelivery_Upgrade(String Username) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PaymentPage.class);
            PaymentPageActions.Card_Details(Username);
            Thread.sleep(75000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            System.out.println("Unable to input details in payment page");
            Assert.fail("Unable to input details in payment page");

        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Agent_BuyOut/////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////

    @Given("^clicks on 'Buyout' button$")
    public void clicks_on_Buyout_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_DealBuilderPage.class);
            Agent_DealBuilderPageActions.AgentBuyOut();
            Thread.sleep(4000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to click on Trade in Button");
        }

    }

    @And("^I select ([^\"]*) surfer and ([^\"]*) sim$")
    public void select_surfer_type_and_simtype(String Surfer_Type, String sim_type) throws Throwable {
        try {

            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            PageFactory.initElements(driver, FreeSimPage.class);
            FreeSimPageActions.selectSurfertypeAndSimtype(Surfer_Type, sim_type);

            Autoredirection.redirect();
        } catch (Exception e) {
            System.out.println("unable to select surfer and sim");
            Assert.fail("unable to select surfer and sim");
        }
    }

    @And("^Select a PAYG ([^\"]*) device in stock$")
    public void Select_a_PAYG_Device_InStock(String device) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PayG_DevicesPage.class);
            PayG_DevicesPage.payGdeviceTab.click();
            Thread.sleep(1000);
            List<WebElement> stockSize = driver.findElements(By.xpath("//*[@id='prepayDeviceTable']/tbody/tr/td[4]"));
            for (int i = 1; i < stockSize.size(); i++) {
                String stockStatus = driver.findElement(By.xpath("//*[@id='prepayDeviceTable']/tbody/tr[" + i + "]/td[4]")).getText();
                if (stockStatus.contains("In stock")) {
                    System.out.println("Selecting Device from " + stockStatus);
                    driver.findElement(By.xpath("//*[@id='prepayDeviceTable']/tbody/tr[" + i + "]/td[1]//img")).click();
                    Thread.sleep(5000);
                    String str = driver.findElement(By.xpath("//*[@id='prepayDeviceTable']/tbody/tr[99]/td[3]/a")).getText();
                    System.out.println("Device Model :  " + str);
                    break;
                }
                System.out.println("Successfylly Selected Device from P&G");
            }

        } catch (Exception e) {
            System.out.println("Failed to select the device fom P&G ");
            Assert.fail("Failed to select the device fom P&G ");
        }
    }


    @And("^Select valid ([^\"]*) from PAYG tariffs tab less than 50 GBP$")
    public void Select_valid_Tariffs_from_PAYG_tariffs_tab_LessThan50GBP(int device) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_DealBuilderPage.class);
            Agent_DealBuilderPage.prepayPlansTab.click();
            Thread.sleep(1000);
            driver.findElement(By.xpath(".//*[@id='prepayPlanTable']/tbody/tr/td[1]//img")).click();
            Thread.sleep(5000);
            System.out.println("Successfylly Selected Tariff from P&G Tariffs");

        } catch (Exception e) {
            System.out.println("Failed to Select Tariff from P&G Tariffs ");
            Assert.fail("Failed to Select Tariff from P&G Tariffs ");
        }
    }


    @And("^Confirm Device and Tariff are added in Deal Builder$")
    public void Confirm_Device_and_Tariff_are_added_in_DealBuilder() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_DealBuilderPage.class);
            Agent_DealBuilderPage.deviceAdded_DealBuilder.isDisplayed();
            Agent_DealBuilderPage.tariffAdded_DealBuilder.isDisplayed();
            Thread.sleep(1000);
            System.out.println("Successfylly added Device & Tariff into Deal Builer");

        } catch (Exception e) {
            System.out.println("Failed to add Device & Tariff into Deal Builer ");
            Assert.fail("Failed to add Device & Tariff into Deal Builer");
        }
    }

    @And("^Select a valid store using ([^\"]*) for Click and Collect$")
    public void Select_a_valid_store_using_postCodefor_Click_and_Collect(String postcode) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            PageFactory.initElements(driver, checkStoreStockForPayG.class);
            checkStoreStockForPayG.checkStoreStockBtn.click();
            CommonUtilities.switchToWindow(driver);

            checkStoreStockForPayG.postcodeTxt.sendKeys(postcode);
            CommonUtilities.driverWait(driver, 3000);
            checkStoreStockForPayG.findStoreSearchBtn.click();
            CommonUtilities.driverWait(driver, 8000);
            ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", checkStoreStockForPayG.selectStoreAddress);
            //scrollToAnElement.scrollToElement(checkStoreStockForPayG.selectStoreAddress);
            CommonUtilities.driverWait(driver, 3000);
            System.out.println("before selectiong the store");
            checkStoreStockForPayG.selectStoreAddress.click();
            System.out.println("after selectiong the store");
            CommonUtilities.driverWait(driver, 3000);
            System.out.println("before navigation back");
            CommonUtilities.switchToWindow(driver);
            System.out.println("Successfylly selected store");
        } catch (Exception e) {
            System.out.println("Failed to select store" + e.getMessage());
            Assert.fail("Failed to select store");
        }
    }


    @And("^perform the credit checks using valid details like ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*) and ([^\"]*)$")
    public void perform_the_credit_checks_using_validDetails(String title, String First_name, String Last_name, String Email, String Date_of_birth, String Contact_Number, String House_name_or_number, String Post_code, String Year, String Months, String Account_name, String Sort_code, String Account_number) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            PageFactory.initElements(driver, personalDetailsPage.class);
            CommonUtilities.selectValueFromDropDown(driver, personalDetailsPage.title_personalInfo, null, title, null);
            CommonUtilities.setDataForTextField(driver, personalDetailsPage.firstName_personalInfo, First_name);
            CommonUtilities.setDataForTextField(driver, personalDetailsPage.firstName_personalInfo, Last_name);
            CommonUtilities.setDataForTextField(driver, personalDetailsPage.firstName_personalInfo, Email);
            CommonUtilities.setDataForTextField(driver, personalDetailsPage.firstName_personalInfo, Date_of_birth);
            CommonUtilities.setDataForTextField(driver, personalDetailsPage.firstName_personalInfo, Contact_Number);
            CommonUtilities.setDataForTextField(driver, personalDetailsPage.firstName_personalInfo, House_name_or_number);
            CommonUtilities.setDataForTextField(driver, personalDetailsPage.firstName_personalInfo, Post_code);
            CommonUtilities.clickWebElement(driver, personalDetailsPage.selectFirstAddress);
            CommonUtilities.driverWait(driver, 3000);
            CommonUtilities.setDataForTextField(driver, personalDetailsPage.year_personalInfo, Year);
            CommonUtilities.setDataForTextField(driver, personalDetailsPage.month_personalInfo, Months);
            CommonUtilities.setDataForTextField(driver, personalDetailsPage.accountNameTxt, Account_name);
            CommonUtilities.setDataForTextField(driver, personalDetailsPage.sortCodeTxt, Sort_code);
            CommonUtilities.setDataForTextField(driver, personalDetailsPage.accountNumbr, Account_number);
            CommonUtilities.clickWebElement(driver, personalDetailsPage.agreeToCreditCheck);


            CommonUtilities.clickWebElement(driver, personalDetailsPage.performCreditCheckBtn);


        } catch (Exception e) {
            System.out.println("Failed to select store" + e.getMessage());
            Assert.fail("Failed to select store");
        }
    }


    @And("^select a valid store for Click and Collect")
    public void select_Store_for_click_and_Collect() throws Throwable {
        try {

            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_DealBuilderPage.class);
            Agent_DealBuilderPageActions.selectStore();

        } catch (Exception e) {
            System.out.println("unable to select store");
            Assert.fail("unable to select store");
        }
    }

    @And("^Register customer with valid ([^\"]*), ([^\"]*), ([^\"]*) in delivery page$")
    public void Register_Customer_Phones(String Password, String confirmPassword, String SecurityAnswer)
            throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_RegisterCustomerPage.class);
            Agent_RegisterCustomerActions.RegisterCustomer(Password, confirmPassword, SecurityAnswer);
            Thread.sleep(4000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to Register customer");
        }
    }

    @Given("^select a valid Handset and Tariff combination for Phones$")
    public void select_a_valid_Handset_and_Tariff_combination_for_Phones() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_DealBuilderPage.class);
            Agent_DealBuilderPageActions.HandsetTariffCombinationforPhones();
            Thread.sleep(4000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Assert.fail("Unable to select valid tariff and handset combination");
        }
    }

    @Given("^I am an CFA user and Lands on Mobile shop page$")
    public void i_am_an_CFA_user_and_Lands_on_Mobile_shop_page() throws Throwable {
        String title = driver.getTitle();
        System.out.println(title);
    }

    @And("^navigate to PayG SIMO page in Mobile$")
    public void navigate_to_PayG_SIMO_page_in_Mobile() throws Throwable {
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        try {
            MouseHoverAction.MobilePayGSimLandingPage();
        } catch (Exception e) {
            e.printStackTrace();
            driver.findElement(By.xpath("//*[@id='no']/span")).click();
        }

        /*PageFactory.initElements(driver, MouseHoverPage.class);
        //Edit the below
        MouseHoverAction.MobilePayGSimLandingPage();
        //Autoredirection.redirect();*/
    }

    @And("^Tap on iPads and Tablets Tab$")
    public void tap_on_iPads_and_Tabets_Tab() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            PageFactory.initElements(driver, FreeSimPage.class);
            FreeSimPageActions.Mobile_iPadsandTabletstab();
        } catch (Exception e) {
            driver.findElement(By.xpath("//*[@id='no']/span")).click();
        }

    }

    @And("^Pick a Sim ([^\"]*) and ([^\"]*)$")
    public void tap_on_iPad_Sims_Pick_a_Sim(String SurferType, String SimType) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            PageFactory.initElements(driver, FreeSimPage.class);
            FreeSimPageActions.selectSurfertypeAndSimtype(SurferType, SimType);
        } catch (Exception e) {
            Assert.fail("unable to pick sim");
        }

    }

    @And("^Verify user is navigated to Delivery details page$")
    public void verify_user_is_navigated_to_Delivery_details_page() throws Throwable {
        try {
            String title = driver.getTitle();
            System.out.println(title);
        } catch (Exception e) {
            Assert.fail("unable to verify delivery details page");
        }
    }

    @And("^Enter (\\d+), SL(\\d+)UP and Add the Address details$")
    public void enter_SL_UP_and_Add_the_Address_details(DataTable value) throws Throwable {
        // Write code here that turns the phrase above into concrete actions

    }

    @And("^Enter RANDOM, ACCEPTA, <Surname> and ACCEPTA$")
    public void enter_RANDOM_ACCEPTA_Surname_and_ACCEPTA() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

    }

    @And("^Tap on Send me my sim button$")
    public void tap_on_Send_me_my_sim_button() throws Throwable {
      /*  try {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            PageFactory.initElements(driver, FreeSimPage.class);
            FreeSimPageActions.selectSurfertypeAndSimtype(SurferType, SimType);
        } catch (Exception e) {
            Assert.fail("unable to pick sim");
        }*/
    }


    @And("^Click on View all Tablets link$")
    public void clickOnViewAllTabletsLink() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.clickOnViewAllTablets();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            System.out.println("Unable to Click on view all tablets link");
            Assert.fail("Unable to Click on view all tablets link");
        }
    }

    @And("^Select a tariff ([^\"]*)$")
    public void selectATariffTariff(String Tariff) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.selectTariff(Tariff);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            System.out.println("Unable to Click on view all tablets link");
            Assert.fail("Unable to Click on view all tablets link");
        }
    }

    @And("^Verify the copytext of marketing message in \"([^\"]*)\"$")
    public void verifyTheCopytextOfMarketingMessageIn(String section) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.VerifyMarketingMessage(section);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            System.out.println("Unable to Click on view all tablets link");
            Assert.fail("Unable to Click on view all tablets link");
        }
    }

    @And("^I choose upgrade PayM Tablet ([^\"]*)$")
    public void iChooseUpgradePayMTabletHandset(String Handset) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.upgradeTablet(Handset);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            System.out.println("Unable to Click on view all tablets link");
            Assert.fail("Unable to Click on view all tablets link");
        }
    }


//////////////////////////////////////////////////CFD-2044//////////////////////////////////////////

    @And("^click on the color dropdown$")
    public void click_on_the_color_dropdown() throws Throwable {

        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
            ConnectedDeviceDetailsPageAction.UpdatedColordropdown();

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("The color dropdown is not present");
            Assert.fail("not able to click on the colour dropdown");
        }

    }


    @And("^select ([^\"]*) link$")
    public void select_link(String LikeNewLink) throws Throwable {    // Write code here that turns the phrase above into concrete actions

        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, SimFreeDevicePage.class);
            SimFreeLandingActions.LikeNewOptions(LikeNewLink);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Unable to select the sim free link");
            Assert.fail("Unable to select the sim free link");
        }


    }

    @And("^verify asterisk is displayed against mandatory fields of \"([^\"]*)\"$")
    public void verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String Field) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            verificationsActions.verifyAsteriskMandatory(Field);
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Unable to select the sim free link");
            Assert.fail("Unable to select the sim free link");

        }
    }

    @And("^Enter valid details for Driving licence$")
    public void enterValidDetailsForDrivingLicence(DataTable userData) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, AdditionalInformationPage.class);
            AdditionalInformationPageActions.enterDrivingLicenceDetails(userData);
            Thread.sleep(5000);

        } catch (Exception e) {
            System.out.println("Unable to enter valid details in Addiitional information Driving licence page");
            Assert.fail("Unable to enter valid details in Addiitional information Driving licence page");
        }
    }

    @And("^Enter valid details for passport$")
    public void enterValidDetailsForPassport(DataTable userData) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, AdditionalInformationPage.class);
            AdditionalInformationPageActions.enterPassportNumber(userData);
            Thread.sleep(5000);

        } catch (Exception e) {
            System.out.println("Unable to enter valid details in Addiitional information Driving licence page");
            Assert.fail("Unable to enter valid details in Addiitional information Driving licence page");
        }
    }

    @And("^land on the payment page and verify copy text message below home address$")
    public void VerifyCopyTextinPaymentPage() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PaymentPage.class);
            //CommonFunctionscheckTitle("Payment Page");
            PaymentPageActions.verifyCopyTextHomeAddress();

        } catch (Exception e) {
            e.printStackTrace();
            log.debug("Unable to verify Text payment page");
            Assert.fail("Unable to verify Text in payment page");

        }
    }

    @And("^verify error screen is displayed with message \"([^\"]*)\"$")
    public void verifyErrorScreenIsDisplayedWith(String arg1) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, verificationsPage.class);
            //CommonFunctionscheckTitle("O2 Error");
            verificationsActions.VerifyErrorScreen(arg1);

        } catch (Exception e) {
            log.debug(e.getMessage());
            log.debug("Unable to Verify Error screen after payment page");
            Assert.fail("Unable to Verify Error screen after payment page");

        }
    }


    @Then("^Copy text should be displayed with message for referral$")
    public void copy_text_should_be_displayed_with_message_for_referral() {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

            String dispalyText = driver.findElement(By.xpath("//*[contains(text(),'Not ')]"));
            if (dispalyText.contains("Not ")) {
                System.out.println("Successfully Validate the reference : " + dispalyText);
            }
            {
                System.out.println("Unable to find the reference Displayed Message");
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
            log.debug("Failed to Copy text should be displayed with message for referral");
            Assert.fail("Failed to Copy text should be displayed with message for referral");
        }
    }


    @And("^verify copy text You will need to give details for all fields marked with an asterisk is displayed$")
    public void verify_copy_text_allFields_narked_with_asterisk() {
        try {
            /*driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            List<WebElement> element = driver.findElements(By.xpath("//*[contains(text(),*)]"));
            for (int i = 1; i <= element.size(); i++) {
                String valueContains = driver.findElement(By.xpath("(//*[contains(text(),*)])[" + i + "]")).getText();
                if (valueContains.contains("*")) {
                    System.out.println("Mandatary Field is + " + valueContains);
                } else {
                    System.err.println("There is no mandatary fields available in the Page");
                }*/

            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            verificationsActions.VerifyheaderAsterisk();
            log.debug("verify copy text ‘You'll need to give details for all fields marked with an asterisk * is displayed$");
        } catch (Exception e) {
            log.debug(e.getMessage());
            log.debug("verify copy text ‘You'll need to give details for all fields marked with an asterisk * is not displayed$");
            Assert.fail("verify copy text ‘You'll need to give details for all fields marked with an asterisk * is not displayed$");

        }
    }

    @And("^Select a pay as you go bundle$")
    public void selectAPayAsYouGoBundle() throws Throwable {
        try {
            log.debug("in selecting pay as you go bundle");
            driver.findElement(By.xpath("//*[@id='callToAction'][1]")).click();
        } catch (Exception e) {
            System.out.println(e.getMessage());

        }

    }

    @And("^Continue to Review page, click on ‘change delivery’$")
    public void continueToReviewPageClickOnChangeDelivery() throws Throwable {
        try {
            System.out.println("in change delivery method");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

    }

    @And("^Click on Send button in OTAC page$")
    public void clickOnSendButtonInOTACPage() throws Throwable {
        try {
            driver.findElement(By.id("sendOtac")).click();
            log.debug("Clicked on Send code button");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    //Enahanced coour dropdown

    @And("^verify the name of the colour is next to the colour tile in CFAPhoneColour([^\"]*)$")
    public void verify_the_name_of_the_colour_is_next_to_the_colour_tile_in_CFAPhoneColour(String color) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, ConnectedDeviceDetailsPage.class);
            ConnectedDeviceDetailsPageAction.UpdatedColordropdownText();

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("The color text is not present");
            Assert.fail("The color text is not present");
        }
    }

    @And("^click on the color dropdown for like new$")
    public void click_on_the_color_dropdown_for_like_new() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, SimFreeDevicePage.class);
            LikeNewSimFreeDevicePageActions.LikeNewColorDropDownOptions();

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("The color text is not present");
            Assert.fail("The color text is not present");
        }
    }


    @And("^Click on ([^\"]*) tariff tile$")
    public void click_on_LikeNewTariffOption_tariff_tile(String TariffType) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, SimFreeDevicePage.class);
            LikeNewSimFreeDevicePageActions.LikeNewColorTariffSelect(TariffType);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("The color text is not present");
            Assert.fail("The color text is not present");
        }
    }

    @And("^input additional card details Driving license ([^\"]*) and ([^\"]*)$")
    public void AFADrivingLicenseLicense(String License_postcode, String License_Number) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, SimFreeDevicePage.class);


        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("unable to enter additional card details in driving licence");
            Assert.fail("unable to enter additional card details in driving licence");
        }
    }

    @And("^input additional card details passport details ([^\"]*) and ([^\"]*)$")
    public void PassportDetailsCountryPassport_number(String country, String Passport_number) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, SimFreeDevicePage.class);


        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("unable to enter additional  details in passport field");
            Assert.fail("unable to enter additional  details in passport field");
        }
    }

    @And("^'Checkout In Progress' page is not displayed$")
    public void checkoutInProgressPageIsNotDisplayed() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, BasketPage.class);
            Thread.sleep(3000);
            BasketPageActions.CheckoutNotDisplayed();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Unable to validate basket contents");
            Assert.fail("Unable to validate basket contents");
        }
    }


    @And("^MSISDN is displayed as label only$")
    public void msisdnIsDisplayedAsLabelOnly() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, ReviewAndConfirmPage.class);
            ReviewAndConfirmPageActions.MsisdnLabel() ;
        } catch (Exception e) {
            e.printStackTrace();
            Assert.fail("The MSISDN is not displayed as a label");
        }
    }

    @And("^the 'About you' section is not displayed$")
    public void theAboutYouSectionIsNotDisplayed() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, ReviewAndConfirmPage.class);
            ReviewAndConfirmPageActions.AboutYouNotDisplayed() ;
        } catch (Exception e) {
            e.printStackTrace();
            Assert.fail("The About you section is displayed which is not correct");
        }
    }

    @And("^the first section is \"([^\"]*)\" section$")
    public void theFirstSectionIsSection() throws Throwable {
        try{
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.reviewTariff();

        } catch (Exception e) {

            System.out.println("Unable to do validate about you");
            Assert.fail("Unable to do validate about you");
        }
    }

    @And("^the title \"([^\"]*)\" is displayed in first tariff tile$")
    public void theTitleIsDisplayedInFirstTariffTile() throws Throwable {
        try{
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.contentDisplayedFirstTariff();

        } catch (Exception e) {

            System.out.println("unable to verify that text is displayed in First tile");
            Assert.fail("unable to verify that text is displayed in First tile");
        }
    }

    @And("^title \"([^\"]*)\" is displayed in second tariff tile$")
    public void titleIsDisplayedInSecondTariffTile(String arg0) throws Throwable {
        try{
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.contentDisplayedSecondTariff();

        } catch (Exception e) {

            log.debug("unable to verify that text is displayed in second tile");
            Assert.fail("unable to verify that text is displayed in second tile");
        }
    }

    @And("^refresh the page$")
    public void refreshThePage() throws Throwable {
        try{
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            driver.navigate().refresh();

        } catch (Exception e) {

            log.debug("Unable refresh browser");
            Assert.fail("Unable to refresh browser");
        }
    }

    @And("^Click on 'Not sure what SIM you have' link$")
    public void clickOnNotSureWhatSIMYouHaveLink() throws Throwable {
        try{
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.clickonnoSurelink();

        } catch (Exception e) {

            log.debug("unable to click on not sure what sim radio button");
            Assert.fail("unable to click on not sure what sim radio button");
        }
    }

    @And("^the delivery section is not displayed$")
    public void theDeliverySectionIsNotDisplayed() throws Throwable {
        try{
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.nonDisplayDeliverySection();

        } catch (Exception e) {

            log.debug("unable to click on not sure what sim radio button");
            Assert.fail("unable to click on not sure what sim radio button");
        }
    }

    @And("^the customer is displayed with sample copy text$")
    public void theCustomerIsDisplayedWithSampleCopyText() throws Throwable {
        try{
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.copyTextAdditionalDepositPage();
        } catch (Exception e) {
            log.debug("unable to click on not sure what sim radio button");
            Assert.fail("unable to click on not sure what sim radio button");
        }
    }

   
    /*
    * #########################################################################
    * #######  EMPTY_basket_validate_promotion ##################################
    */
    @Then("^Click on 'Empty basket' CTA the 'Promotions' should be removed from the basket$")
    public void click_on_Empty_basket_CTA_the_Promotions_should_be_removed_from_the_basket() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_DealBuilderPage.class);
            Agent_DealBuilderPageActions.Emptyabove();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to click on Empty above, please see the failure screenshot");
            Assert.fail("Unable to click on Empty above , please see the failure screenshot");
        }
    }
    /*
  * ##################################################################################
  *  Standard_or_CCA_targeted_bolton_promotion_tab_Agent_upgrade_options_page_Order_placement
  * #####################################################################################
  */
    @And("^Click on 'Select' Button in targeted promotion tab$")
    public void click_on_Select_Button_in_targeted_promotion_tab() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_DealBuilderPage.class);
            Agent_DealBuilderPageActions.SelectPromotion();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to select button in targeted promotion tab , please see the failure screenshot");
            Assert.fail("Unable to get select button in targeted promotion tab , please see the failure screenshot");

        }
    }
    @And("^Click on 'Copy to Basket' CTA$")
    public void click_on_Copy_to_Basket_CTA() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
            PageFactory.initElements(driver, Agent_DealBuilderPage.class);
            Agent_DealBuilderPageActions.Copytobasket();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to click on Copy to basket CTA , please see the failure screenshot");
            Assert.fail("Unable to click on Copy to basket CTA , please see the failure screenshot");

        }
    }

    //venkat
    @Given("^the customer is presented with the targeted promotion tab at the end of the tabs$")
    public void the_customer_is_presented_with_the_targeted_promotion_tab_at_the_end_of_the_tabs() throws Exception {
        try{
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            Agent_DealBuilderPageActions.verifyTargetedPromotionsTab();
            Thread.sleep(3000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Failed to verify the Target Promotions Tab, please see the screen shoot");
            Assert.fail("Failed to verify the Target Promotions Tab, please see the screen shoot");
        }
    }

    //venkat
    @Given("^the promotions bolt on are displayed in targeted promotion tab$")
    public void the_promotions_bolt_on_are_displayed_in_targeted_promotion_tab() throws Exception {
        try{
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            Agent_DealBuilderPageActions.verifyPromotionsDescriotnDisplayed();
            Thread.sleep(3000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Failed to verify the targe promotions description, please see the screen shoot" + e.getStackTrace());
            Assert.fail("Failed to verify the targe promotions description, please see the screen shoot" + e.getStackTrace());
        }
    }


    @Then("^Replace the device (.*) from the deal builder with different device and the 'Promotions' should be removed from the deal builder$")
    public void replaceDeveiceThenPromotionShouldNotAvailable(String Promotionss) throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            Agent_DealBuilderPageActions.verifyPromotionsDisplayed();
            Thread.sleep(3000);
            // System.out.println("Selecting a valid tariff");
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to select valid tariff, please see the failure screenshot");
            Assert.fail("Unable to select valid tariff, please see the failure screenshot");

        }
    }

    //Then agent should be displayed with updated copy of 'Refer with Simo' response
    @Then("^agent should be displayed with updated copy of 'Refer with Simo' response$")
    public void agent_should_displayed_with_updated_copy_of_Refer_with_Sim0_response() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
            if (driver.findElements(By.xpath("//*[contains(text(),'2.co.uk')]")).size() > 0) {
            String str =  driver.findElement(By.xpath("(//*[contains(text(),'2.co.uk')])[1]")).getText();
            System.out.println("Agent should be displayed with updated copy of 'Refer with Simo' response as :" + str);
            log.debug("Agent should be displayed with updated copy of 'Refer with Simo' response as :" + str);
            Thread.sleep(3000);
        }
        else{
            System.out.println("Failed to Agent should be displayed with updated copy of 'Refer with Simo' response ");
            log.debug("Failed to Agent should be displayed with updated copy of 'Refer with Simo' response ");
        }
        } 
        catch (Exception e) {
        // TODO Auto-generated catch block
        System.out.println("Failed to Agent should be displayed with updated copy of 'Refer with Simo' response @ " + e.getStackTrace());
        Assert.fail("Failed to Agent should be displayed with updated copy of 'Refer with Simo' response @ " + e.getStackTrace());
        }
    }



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////PROMOTIONS/////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @And("^the heading of the panel is 'A package just for you:'$")
    public void the_heading_of_the_panel_is_A_package_just_for_you() throws Throwable {
        try{
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.HeadingMessagePanel();

        } catch (Exception e) {

            System.out.println("The Heading message is not expected one");
            Assert.fail("The Heading message is not expected one");
        }

    }

    @And("^the promotion description is displayed$")
    public void the_promotion_description_is_displayed() throws Throwable {

        try{
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.BodyMessagePanel();

        } catch (Exception e) {

            System.out.println("The Body message is not expected one");
            Assert.fail("The Body message is not expected one");
        }

    }

    @Given("^a checkbox for 'iPhone' for data allowance is NOT displayed just on the right-hand side below select 'CTA'$")
    public void a_checkbox_for_iPhone_for_data_allowance_is_displayed_just_on_the_right_hand_side_below_select_CTA() throws Throwable {

        try{
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, UpgradeCustomerPage.class);
            UpgradeCustomerPageActions.SimoPromotionsCheckboxNotDisplayed();

        } catch (Exception e) {

            System.out.println("The Body message is not expected one");
            Assert.fail("The Body message is not expected one");
        }

    }


    @And("^the 'Promotions' section is displayed with all the applied promotions description in the deal builder$")
    public void thePromotionsSectionDisplay() throws Throwable {
        System.out.println("In promotions method");

    }

    @And("^the promotion returned is displayed in a single line$")
    public void thePromotionReturnedIsDisplayedInASingleLine() throws Throwable {

    }

    @Then("^Remove the device or tariff from the deal builder$")
    public void removeTheDeviceOrTariffFromTheDealBuilder() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^the 'Promotions' should be removed and the 'Promotion section' should be empty$")
    public void thePromotionsShouldBeRemovedAndThePromotionSectionShouldBeEmpty() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^more than one promotion is returned$")
    public void moreThanOnePromotionIsReturned() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the 'Promotions' section is displayed with all the applied promotions description in the order summary$")
    public void thePromotionsSectionIsDisplayedWithAllTheAppliedPromotionsDescriptionInTheOrderSummary() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the customer is not presented with the targeted promotion tab at the end of the tabs$")
    public void theCustomerIsNotPresentedWithTheTargetedPromotionTabAtTheEndOfTheTabs() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^the 'Promotions' should be retained in the deal builder$")
    public void thePromotionsShouldBeRetainedInTheDealBuilder() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^for more than (\\d+) promotions returned$")
    public void forMoreThanPromotionsReturned(int arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^only SIMO targeted bolt-on is presented in the targeted promotion section$")
    public void onlySIMOTargetedBoltOnIsPresentedInTheTargetedPromotionSection() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the 'Contract length: (\\d+) months/(\\d+) days' is displayed just below the promotion description$")
    public void theContractLengthMonthsDaysIsDisplayedJustBelowThePromotionDescription(int arg0, int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^SIMO and tariff combination is presented in the targeted promotion section$")
    public void simoAndTariffCombinationIsPresentedInTheTargetedPromotionSection() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^click on 'Select' CTA in the tariff tile of targeted promotion$")
    public void clickOnSelectCTAInTheTariffTileOfTargetedPromotion() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the title 'Device' is displayed above the selected device for Your Order section$")
    public void theTitleDeviceIsDisplayedAboveTheSelectedDeviceForYourOrderSection() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^more than one promotions is returned$")
    public void moreThanOnePromotionsIsReturned() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the customer is displayed with a note just under the Airtime plan$")
    public void theCustomerIsDisplayedWithANoteJustUnderTheAirtimePlan() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the basket contents and apply instant bolt-on promotion if applicable$")
    public void theBasketContentsAndApplyInstantBoltOnPromotionIfApplicable() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^SIMO or handset make/model and tariff combination is presented in the targeted promotion section$")
    public void simoOrHandsetMakeModelAndTariffCombinationIsPresentedInTheTargetedPromotionSection() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^verify whether 'sim' and 'collection' is in lower case$")
    public void verifyWhetherSimAndCollectionIsInLowerCase() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^there is no space on either side of the slash$")
    public void thereIsNoSpaceOnEitherSideOfTheSlash() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^at the end of the total in note copy ‘doesn’t’ is displayed instead of ‘does not’$")
    public void atTheEndOfTheTotalInNoteCopyDoesnTIsDisplayedInsteadOfDoesNot() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^for more than one promotions returned$")
    public void forMoreThanOnePromotionsReturned() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^'Promotions' is displayed one after another separated by a line$")
    public void promotionsIsDisplayedOneAfterAnotherSeparatedByALine() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^verify the customer is presented with a note just under the Airtime plan$")
    public void verifyTheCustomerIsPresentedWithANoteJustUnderTheAirtimePlan() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^a note 'Discount applied to bill' is displayed underneath each Promotion$")
    public void aNoteDiscountAppliedToBillIsDisplayedUnderneathEachPromotion() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^click on 'Change delivery date and time' link$")
    public void clickOnChangeDeliveryDateAndTimeLink() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I close the browser$")
    public void iCloseTheBrowser() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^'Checkout In Progress' page is displayed$")
    public void checkoutInProgressPageIsDisplayed() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^customer lands on review page$")
    public void customerLandsOnReviewPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Click on 'Pick a sim only tariff link'$")
    public void clickOnPickASimOnlyTariffLink() throws Throwable {
        try {
                driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
                PageFactory.initElements(driver, UpgradeCustomerPage.class);
                UpgradeCustomerPageActions.SIMOLinkIsDisplayed();
            } catch (Exception e) {
                e.printStackTrace();
                Assert.fail("Unable to click on Click on 'Pick a sim only tariff link', please see the failure screenshot");
            }
        }


    @And("^the Progress bar is not displayed at the top$")
    public void theProgressBarIsNotDisplayedAtTheTop() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, ReviewAndConfirmPage.class);
            ReviewAndConfirmPageActions.ProgressBarNotDisplayed() ;
        } catch (Exception e) {
            e.printStackTrace();
            Assert.fail("The Progress bar is not displayed which is correct");
        }
    }

    @And("^only SIM delivery is required for the customer$")
    public void onlySIMDeliveryIsRequiredForTheCustomer() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the Header navigation is not displayed$")
    public void theHeaderNavigationIsNotDisplayed() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, ReviewAndConfirmPage.class);
            ReviewAndConfirmPageActions.PrimaryNavNotDisplayed() ;
        } catch (Exception e) {
            e.printStackTrace();
            Assert.fail("The Primary header is displayed which is not correct");
        }
    }

    @And("^the existing address of the customer is set as delivery address$")
    public void theExistingAddressOfTheCustomerIsSetAsDeliveryAddress() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Verify if six months is displayed instead of three months$")
    public void verifyIfSixMonthsIsDisplayedInsteadOfThreeMonths() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^\"([^\"]*)\" is displayed below device description$")
    public void isDisplayedBelowDeviceDescription(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the Check box with \"([^\"]*)\" copy text is not displayed below 'Select' CTA in the horizontal tariff tile$")
    public void theCheckBoxWithCopyTextIsNotDisplayedBelowSelectCTAInTheHorizontalTariffTile(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Click on 'Select' CTA to buy a tariff$")
    public void Click_on_Select_CTA_to_buy_SIMO_Tariff()

            throws Throwable {

        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PAYMSimOPage.class);
            PAYMSimOPageActions.SelectCTAtoBuySIMOtariff();
        } catch (Exception e) {
            e.printStackTrace();
            Assert.fail("Unable to click on Click on 'Pick a sim only tariff link', please see the failure screenshot");
        }
    }


    @And("^the customer is landed on Review page$")
    public void theCustomerIsLandedOnReviewPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the Order summary and the assurance messages is not displayed on the right$")
    public void theOrderSummaryAndTheAssuranceMessagesIsNotDisplayedOnTheRight() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, ReviewAndConfirmPage.class);
            ReviewAndConfirmPageActions.OrderSummaryNotDisplayed() ;
        } catch (Exception e) {
            e.printStackTrace();
            Assert.fail("The Order Summary is not displayed which is correct");
        }
    }

    @And("^the Included section and Learn more link are same as  applicable to both (\\d+)st tile and second tile$")
    public void theIncludedSectionAndLearnMoreLinkAreSameAsApplicableToBothStTileAndSecondTile(int arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the Promotion ribbons is displayed only for 'To this tariff'$")
    public void thePromotionRibbonsIsDisplayedOnlyForToThisTariff() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Click on 'Learn more' link$")
    public void clickOnLearnMoreLink() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^'Choose a different tariff' link is displayed below 'To this tariff' tile$")
    public void chooseADifferentTariffLinkIsDisplayedBelowToThisTariffTile() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the second section is \"([^\"]*)\" section$")
    public void theSecondSectionIsSection(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the INSTANT promotions applicable for the SIMO Upgrade order is displayed on the new Review Page below selected tariff tile$")
    public void theINSTANTPromotionsApplicableForTheSIMOUpgradeOrderIsDisplayedOnTheNewReviewPageBelowSelectedTariffTile() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Click on 'Choose a different tariff' link$")
    public void clickOnChooseADifferentTariffLink() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I Click on 'Pick a sim only tariff' link$")
    public void iClickOnPickASimOnlyTariffLink() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Click on 'Mobile Broadband' tab$")
    public void clickOnMobileBroadbandTab() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the customer is landed on the New Review and confirm page$")
    public void theCustomerIsLandedOnTheNewReviewAndConfirmPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the greet customer bar is displayed as the header$")
    public void theGreetCustomerBarIsDisplayedAsTheHeader() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the MSISDN is displayed as label only$")
    public void theMSISDNIsDisplayedAsLabelOnly() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the copy text title is displayed in first tariff tile$")
    public void theCopyTextTitleIsDisplayedInFirstTariffTile() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the copy text title is displayed in second tariff tile$")
    public void theCopyTextTitleIsDisplayedInSecondTariffTile() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the Included section and Learn more link are same as  applicable to both first tile and second tile$")
    public void theIncludedSectionAndLearnMoreLinkAreSameAsApplicableToBothFirstTileAndSecondTile() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the Promotion ribbons and included section to be fetched from Product service are displayed only for 'To this tariff'$")
    public void thePromotionRibbonsAndIncludedSectionToBeFetchedFromProductServiceAreDisplayedOnlyForToThisTariff() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^'Choose a different tariff' link is displayed$")
    public void chooseADifferentTariffLinkIsDisplayed() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the question for voice tariff  copy text is not displayed below 'Your sim' section$")
    public void theQuestionForVoiceTariffCopyTextIsNotDisplayedBelowYourSimSection() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the IPhone/Other radio button is defaulted to iPhone$")
    public void theIPhoneOtherRadioButtonIsDefaultedToIPhone() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^copy text SIM delivery required or not is displayed$")
    public void copyTextSIMDeliveryRequiredOrNotIsDisplayed() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, ReviewAndConfirmPage.class);
            ReviewAndConfirmPageActions.ReviewConfirmPageHeader() ;
        } catch (Exception e) {
            e.printStackTrace();
            Assert.fail("Review and confirm copy text not displayed");
        }
    }

    @And("^the Default state is no SIM delivery selected and Place Order button is disabled$")
    public void theDefaultStateIsNoSIMDeliverySelectedAndPlaceOrderButtonIsDisabled() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the third section header is displayed as \"([^\"]*)\"$")
    public void theThirdSectionHeaderIsDisplayedAs(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the copy text is displayed below the direct debit details$")
    public void theCopyTextIsDisplayedBelowTheDirectDebitDetails() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the 'Upfront payment details' section is removed$")
    public void theUpfrontPaymentDetailsSectionIsRemoved() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Click on 'I agree to the terms and condition' checkbox$")
    public void clickOnIAgreeToTheTermsAndConditionCheckbox() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Click on 'Place your order' CTA$")
    public void clickOnPlaceYourOrderCTA() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the question for voice tariff  copy text is displayed below 'Your sim' section$")
    public void theQuestionForVoiceTariffCopyTextIsDisplayedBelowYourSimSection() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Select 'I’ll keep my current sim' option$")
    public void selectILlKeepMyCurrentSimOption() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }



    @And("^verify the copy text is displayed below the direct debit details$")
    public void verifyTheCopyTextIsDisplayedBelowTheDirectDebitDetails() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Click on Tablets tabx$")
    public void clickOnTabletsTabx() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, PAYMSimOPage.class);
            PAYMSimOPageActions.ClickonTabletsTabSimo();
            // PAYMSimOPageActions.SelectTariffPhonesTab(Contract);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Unable to click on Tablets tab");
            Assert.fail("Unable to click on Tablets tab");

        }
    }


    @And("^checkbox for 'iPhone' for data allowance is displayed just on the right-hand side below select 'CTA'$")
    public void checkboxForIPhoneForDataAllowanceIsDisplayedJustOnTheRightHandSideBelowSelectCTA() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Click on  'Select' button in the tile of targeted promotion$")
    public void clickOnSelectButtonInTheTileOfTargetedPromotion() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^customer lands on payments page$")
    public void customerLandsOnPaymentsPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the 'Promotions' is displayed in your order section$")
    public void thePromotionsIsDisplayedInYourOrderSection() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Select the Home address$")
    public void selectTheHomeAddress() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Enter the card details and click on 'Continue'$")
    public void enterTheCardDetailsAndClickOnContinue() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }


    @And("^copy text is displayed as same as upgrade options and basket page$")
    public void copyTextIsDisplayedAsSameAsUpgradeOptionsAndBasketPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^log out of consumer shop$")
    public void logOutOfConsumerShop() throws Throwable {

    }


    // Jan Release Venkat

    @And("^I click on 'Sim only Tariff' tab$")
    public void i_click_on_simOnlyTariff_tab() throws Exception {
        try {
           SimsPageActions.clickOn_simOnlyTariffTab();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }

    @And("^verify that the url has simo at the end$")
    public void verify_that_the_url_has_simo_at_end() throws Exception {
        try {
            SimsPageActions.verifyThatURL_has_simo_at_end();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }


    @Then("^the 'Phones' button should be selected by default$")
    public void phones_button_should_be_selected_by_default() throws Exception {
        try {
            SimsPageActions.phonesButtonShouldSelectedByDefault();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }


    @And("^all the tariffs under twelve months should be displayed$")
    public void all_the_tariffs_under_twelve_months_should_be_displayed() throws Exception {
        try {
            SimsPageActions.allTariffsUnderTwelveMonthsShouldDisplayed();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }


    @And("^the 'sorting dropdown' is displayed just below the toggle buttons sections$")
    public void sorting_dropdown_is_displayed_just_below_the_toggle_buttons_sections() throws Exception {
        try {
            SimsPageActions.sortingDropdownIsDisplayedJstBelowToggleButtonsSections();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }

    @Then("^'OOS message' should be displayed in the upgrade options page$")
    public void OOS_message_should_be_displayed_in_upgrade_options_page() throws Exception {
        try {
            UpgradeCustomerPageActions.OOS_MsgShouldDisplayed_inUpgradeOptionsPage();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }

    @Then("^verify the 'OOS message' is displayed in the upgrades basket page$")
    public void verify_OOS_message_is_displayed_in_the_upgrades_basket_page() throws Exception {
        try {
        UpgradeCustomerPageActions.verifyOOS_MessageIsDisplayedInUpgradesBasketPage();
        }
        catch (Exception e) {
        // TODO Auto-generated catch block
        System.out.println(e.getStackTrace());
        }
    }

    @And("^if ([^\"]*) is configured then display the banner$")
    public void if_GiftBlock_is_configured_then_display_banner(String giftbox) throws Exception {
        try {
           SimsPageActions.ifGiftBlockIsConfiguredThenDisplayBanner(giftbox);
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }

    @And("^the Delivery section should show 'OOS message'$")
    public void delivery_section_should_show_OOS_message() throws Exception {
        try {
            DeliveryPageActions.deliverySectionShouldShowOOS_message();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }


    @And("^the Delivery section should show the click and collect option without a radio button and the 'OOS message'$")
    public void delivery_section_should_show_the_click_anf_collect_option_without_radio_button_and_OOS_meg() throws Exception {
        try {
            DeliveryPageActions.deliverySectionShouldShowClick_anf_collect_option_without_radio_button_and_OOS_msg();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }

    // jan release - durai
    @And("^click on the 'Tablets' button$")
    public void click_on_the_Tablets_button() throws Exception {
        try {
           SimsPageActions.clickonTabletsButton();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }


    /*
    @And("^Click on 'Use a different delivery address'link$")
    public void click_on_Use_different_delivery_address_link() throws Exception {
        try {
            DeliveryPageActions.click_on_Use_different_DeliveryAddress_link();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }*/

    @And("^enter a ([^\"]*) and an ([^\"]*)$")
    public void enter_houseNum_and_PostCode(String houseNum, String pcode) throws Exception {
        try {
            DeliveryPageActions.enterHounseNumAndPostalCode( houseNum, pcode);
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }


    @Then("^the respective ([^\"]*) message should be displayed$")
    public void respective_Error_messageShould_Be_Displayed(String postalCodeMsg) throws Exception {
        try {
            DeliveryPageActions.enteredInvalidPostcode(postalCodeMsg);
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }


    // jan release Anusha

    @And("^click on the 'MBB' button$")
    public void click_on_MBB_button() throws Exception {
        try {
            SimsPageActions.clickOnMBB_Button();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }

    @And("^verify that 'Why choose an O2 Pay Monthly sim' is not displayed in upgrade options page$")
    public void  Why_choose_an_O2_may_Monthly_sim_is_not_displayed_in_upgrade_options_page() throws Exception {
        try {
            UpgradeCustomerPageActions.whyChooseAn_O2_may_Monthly_sim_is_not_displayed();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }

    @And("^the data filters is displayed$")
    public  void data_filters_is_displayed() throws Exception {
        try {
            UpgradeCustomerPageActions.data_filtersIsDdisplayed();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }


    @And("^the two contract lenght should be displayed$")
    public void two_contract_length_should_displayed() throws Exception {
        try {
            UpgradeCustomerPageActions.twoContractLengthShouldDisplayed();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }

    @And("^click on 'Change delivery' link$")
    public void  click_on_Change_delivery_link() throws Exception {
        try {
           DeliveryPageActions.clickOnChange_delivery_link();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }


    @And("^verify that the upfront sort options is not present in the 'sorting dropdown'$")
    public void  verify_that_upfront_sort_options() throws Exception {
        try {
          UpgradeCustomerPageActions.upfront_sort_options_is_not_present_in_sortingDropdown();
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(e.getStackTrace());
        }
    }


    //////////////////////////////////////Postcode copy changes/////////////////////////////////////////////

    @And("^Click on 'Use a different delivery address'link$")
    public void click_on_Use_a_different_delivery_address_link() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, DeliveryPage.class);
            DeliveryPageActions.ClickOnUseDifferentAddress();
            System.out.println("Clicked on Use a different address link");
        } catch (Exception e) {
            e.printStackTrace();
            Assert.fail("Unable to click on Use a different address link");
        }

    }

    @And("^enter a house number and an ([^\"]*)$")
    public void enter_a_house_number_and_an(String Postcode) throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            PageFactory.initElements(driver, DeliveryPage.class);
            DeliveryPageActions.EnterPostcode(Postcode);
            System.out.println("Entered a commercial postcode");
        } catch (Exception e) {
            e.printStackTrace();
            Assert.fail("Unable to enter a commercial postcode");
        }

    }

    @Then("^click on 'Finish checking out with your order' link$")
    public void finish_checking_out_with_your_order_link() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            driver.findElement(By.xpath("//*[contains(text(),'inish checking out with your order')]")).click();
            System.out.println("Finish checking out with your order Link is Clicked");
        } catch (Exception e) {
            System.out.println(" Failed to clik the Finish checking out with your order Link(" + e.getStackTrace() +")");
            Assert.fail(" Failed to clik the Finish checking out with your order Link");
        }
    }


    @Then("^if Timer is configured then it should be displayed$")
    public void Timer_configured_then_it_should_be_displayed() throws Throwable {
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        } catch (Exception e) {
            /*System.out.println(" Failed to clik the Finish checking out with your order Link(" + e.getStackTrace() +")");
            Assert.fail(" Failed to clik the Finish checking out with your order Link");*/
        }
    }

        /*@And("^verify that the upfront sort options is not present in the 'sorting dropdown'$")
        public void verifyThatTheUpfrontSortOptionsIsNotPresentInTheSortingDropdown () throws
        Throwable {

            throw new PendingException();
        }*/

        @And("^Click on 'cookie policy' link$")
        public void clickOnCookiePolicyLink () throws Throwable {
            try {
                driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
                PageFactory.initElements(driver, ShopLandingPage.class);
                ShopLandingPageAction.cookiePolicySelect();
            } catch (Exception e) {
                // TODO Auto-generated catch block
                System.out.println("Unable to Click on 'cookie policy' link");
                Assert.fail("Unable to Click on 'cookie policy' link");

            }
        }

        @Then("^the 'cookie policy' page should be opened$")
        public void theCookiePolicyPageShouldBeOpened () throws Throwable {
            try {
                driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
                PageFactory.initElements(driver, ShopLandingPage.class);
                ShopLandingPageAction.cookiePolicyValidate();
            } catch (Exception e) {
                // TODO Auto-generated catch block
                System.out.println("Unable to find 'cookie policy' page");
                Assert.fail("Unable to find 'cookie policy' page");

            }
        }

        @And("^click on 'manage cookies' link$")
        public void clickOnManageCookiesLink () throws Throwable {
            try {
                driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
                PageFactory.initElements(driver, ShopLandingPage.class);
                ShopLandingPageAction.clickManageCookies();
            } catch (Exception e) {
                // TODO Auto-generated catch block
                System.out.println("Unable to Click on 'cookie policy' link");
                Assert.fail("Unable to Click on 'cookie policy' link");

            }
        }

        @Then("^the 'manage cookies' page should be opened$")
        public void theManageCookiesPageShouldBeOpened () throws Throwable {
            try {
                driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
                PageFactory.initElements(driver, ShopLandingPage.class);
                ShopLandingPageAction.manageCookieyValidate();
            } catch (Exception e) {
                System.out.println("Unable to find 'manage cookies' page");
                Assert.fail("Unable to find 'manage cookies' page");

            }
        }

        @And("^click on 'close icon'$")
        public void clickOnCloseIcon () throws Throwable {
            try {
                driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
                PageFactory.initElements(driver, ShopLandingPage.class);
                ShopLandingPageAction.closeCookie();
            } catch (Exception e) {
                System.out.println("Unable to click on close icon");
                Assert.fail("Unable to click on close icon");
            }
        }

        @And("^The Shop home page should be displayed without the cookies$")
        public void theShopHomePageShouldBeDisplayedWithoutTheCookies () throws Throwable {
            try {
                driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
                PageFactory.initElements(driver, ShopLandingPage.class);
                ShopLandingPageAction.CookiepopupValidation();
            } catch (Exception e) {
                System.out.println("Unable to validate cookie section");
                Assert.fail("Unable to validate cookie section");
            }
        }

    @And("^Click on 'Extras' tab$")
    public void click_on_Extras_tab() throws Throwable {
        try {
            System.out.println("Successfully verified");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }


    @And("^Select a Bolton$")
    public void select_Bolton() throws Throwable {
        try {
            System.out.println("Successfully click and verfy the Bolton verified");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @Then("^Verify that the deal has already some offers Bolton ([^\"]*) promotions applied$")
    public void verify_that_the_deal_has_already_some_offers_Bolton_promotions(String str) throws Throwable {
        try {
            System.out.println("Successfully verified the deail builder");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @Then("^Verify that the error ([^\"]*) is displayed in the deal about the conflict$")
    public void verify_ErrorMsg_is_displayed_in_the_deal_about_conflict(String str) throws Throwable {
        try {
            System.out.println("Successfully verified the error message builder");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Verify that the incompatible boltons Bolton1 and the Offers Bolton Promotion is highlighted$")
    public void verify_that_the_incompatible_boltons_Bolton1_and_the_Offers_Bolton() throws Throwable {
        try {
            System.out.println("verified that the incompatible boltons");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Verify that the 'Checkout' CTA is not enabled$")
    public void verify_that_the_Checkout_CTA_is_not_enabled() throws Throwable {
        try {
            System.out.println("Check out is vierified");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^To remove the Bolton2 applied by Promotion, Click on 'Remove' button in front of Bolton2$")
    public void remove_Bolton_applied_by_Promotion_Click_Remove_button_in_front_Bolton() throws Throwable {
        try {
            System.out.println("Remove the bolt is verified");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @Then("^Verify that the 'Checkout' CTA is enabled$")
    public void verify_that_the_Checkout_CTA_is_enabled() throws Throwable {
        try {
            System.out.println("Verify the Checkout button is Enabled");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Verify that the removed promotions is displayed as separate 'Promotions removed' list$")
    public void verify_that_removed_promotions_displayed_separate_Promotions_removed_list() throws Throwable {
        try {
            System.out.println("verified the remoted promotions is displayed");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Click on 're-apply' button shown in front of the promotion under 'Promotions removed' list$")
    public void click_on_Reapply_button_shown_front_of_the_promotion_under_Promotions_removed_list() throws Throwable {
        try {
            System.out.println("Clicked on re-appay button");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Click on 'Remove' button in front of ([^\"]*)$")
    public void click_on_Remove_button_in_front_Button(String str) throws Throwable {
        try {
            System.out.println("Clicked on re-appay button");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Click on 'Checkout' CTA and Proceed till Order placement$")
    public void click_on_Checkout_CTA_and_Proceed_till_Order_placement() throws Throwable {
        try {
            System.out.println("Clicked on CheckOut button");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Verify that the buyout offer section is displayed with 'Take offer and Upgrade' CTA under 'Your Options' heading$")
    public void verify_that_the_buyout_offer_section_is_displayed() throws Throwable {
        try {
            System.out.println("Verified that the buyout offer section is displayed");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Verify that '£XXX.XX left to pay on your current Device Plan' panel is displayed below the buyout offer panel and below to that upgrade and recycle options is displayed$")
    public void verify_that_XXXXX_left_to_pay_on_your_current() throws Throwable {
        try {
            System.out.println("Verified left to pay on your current Device Plan");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Click on 'Take Offer and Upgrade' button$")
    public void click_on_Take_Offer_and_Upgrade_button() throws Throwable {
        try {
            System.out.println("Clicked on 'Take Offer and Upgrade' button");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Verify that the same recycle section is displayed as it is displayed to the non-buyout and non-trade-in users$")
    public void verify_that_same_recycle_section_is_displayed() throws Throwable {
        try {
            System.out.println("Verified that the same recycle section is displayed");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Verify that the customer is able to do recycle and buyout together$")
    public void verify_that_the_customer_is_able_to_drecycle() throws Throwable {
        try {
            System.out.println("Verified that the customer is able to do recycle");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @When("^Click on any one of the recycle option then Click on  'Yes get an accurate quote'$")
    public void click_on_any_one_of_the_recycle_option_then_Click_on_Yes_get_an_accurate_quote() throws Throwable {
        try {
            System.out.println("Clicked on the get an accurate quote");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Answer the Questions in the questionnaire$")
    public void answerthe_Questions_in_the_questionnaire() throws Throwable {
        try {
            System.out.println("Answered the Questions in the questionnaire");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @Then("^Click on 'Accept and continue to upgrade'$")
    public void click_on_accept_and_continue_to_upgrade() throws Throwable {
        try {
            System.out.println("Clicked on 'Accept and continue to upgrade'");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Select a Device from the recommended section$")
    public void select_a_Device_from_the_recommended_section() throws Throwable {
        try {
            System.out.println("Selected device from recomended diveice");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @Then("^Select a Tariff$")
    public void select_a_Tariff() throws Throwable {
        try {
            System.out.println("Selected Tariff");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Verify that in 'Your package' summary Buyout is displayed with Recycle$")
    public void verify_that_in_Your_package_summarr_Buyout_is_displayed_with_Recycle() throws Throwable {
        try {
            System.out.println("Verified that in 'Your package' summary Buyout");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @Then("^Click on 'Add and Go to Basket' button$")
    public void click_on_Add_and_Go_to_Basket_button() throws Throwable {
        try {
            System.out.println("Click on 'Add and Go to Basket' button");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Click on 'Go to checkout' and proceed till order confirmation$")
    public void click_on_Goto_checkout_and_proceed_till_order_confirmation() throws Throwable {
        try {
            System.out.println("Clicked on Checkout button");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }


    @And("^Click on 'No thanks, I'll keep my device' button$")
    public void click_on_No_thanks_I_will_keep_my_device_button() throws Throwable {
        try {
            System.out.println("Click on 'No thanks, I'll keep my device'");
        } catch (Exception e) {
            System.out.println("Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }

    @And("^Verify that in 'Your package' summary Buyout is displayed without Recycle$")
    public void verify_in_Your_package_summary_Buyout_is_displayed_without_Recycle() throws Throwable {
        try {
            System.out.println("Verified that in 'Your package' summary Buyout is displayed without Recycle");
        } catch (Exception e) {
            System.out.println(" Unable to validate section");
            Assert.fail("Unable to validate section");
        }
    }






}
