package steps;

import actionsPerformed.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.TimeUnit;

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
    static int BuyOutValue = 0;
    public String reqno;
    public E2EOrderPlaced_Steps() {
        driver = Hooks.driver;
        // datamap = DataReader.data();

    }
    @Given("^that user is able to launch the O(\\d+)ID login page$")
    public void that_user_is_able_to_launch_the_O_ID_login_page(int a)

    {
        System.out.println("Browser lauched successfully");

    }

    @And("^user is able login into the O2ID successfully using ([^\"]*) and ([^\"]*)$")
    public void user_is_able_login_into_the_O_ID_successfully_using_and(String usrnme, String pwd)
            throws Throwable
    {
        PageFactory.initElements(driver, o2idloginpage_pageactions.class);
        o2idloginpage_pageactions.new_accnt(usrnme, pwd);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);


    }

    @Then("^user is able to navigate My Account successfully$")
    public void user_is_able_to_navigate_My_Account_successfully() throws Throwable

    {
        PageFactory.initElements(driver, viewandmanageacnt_pageactions.class);
        viewandmanageacnt_pageactions.myacntlink();

    }

    @Then("^user is able to click on View contact dates sucessfully$")
    public void user_is_able_to_click_on_View_contact_dates_sucessfully() throws Throwable

    {
        PageFactory.initElements(driver, ViewContractDate_pageactions.class);
        ViewContractDate_pageactions.myacntlink();
        Thread.sleep(10000);
        Thread.sleep(5000);
        //	driver.close();
    }

    @Then("^user is able to click on View Boltons and tariff link$")
    public void user_is_able_to_click_on_View_Boltons_and_tariff_link() throws Throwable

    {

        PageFactory.initElements(driver, viewTariffandBoltons_pageactions.class);
        viewTariffandBoltons_pageactions.updatenameandcost();

    }

    @Then("^user is able to view the tariff and boltons sucessfully$")
    public void user_is_able_to_view_the_tariff_and_boltons_sucessfully() throws Throwable

    {
        PageFactory.initElements(driver, SeeDetails_pageactions.class);
        SeeDetails_pageactions.new_accnt();
        Thread.sleep(10000);
        Thread.sleep(5000);
        //driver.close();
    }

    @Then("^user is able to click on View and Manage Service request sucessfully$")
    public void user_is_able_to_click_on_View_and_Manage_Service_request_sucessfully() throws Throwable

    {
        PageFactory.initElements(driver, ViewandManageservice_pageactions.class);
        ViewandManageservice_pageactions.myacntlink();
        Thread.sleep(10000);
        Thread.sleep(5000);
        //driver.close();
    }

    @Then("^user is able to click on Unlock device sucessfully$")
    public void user_is_able_to_click_on_Unlock_device_sucessfully() throws Throwable

    {
        PageFactory.initElements(driver, Unlockdevice_pageactions.class);
        Unlockdevice_pageactions.myacntlink();
        Thread.sleep(10000);
        Thread.sleep(5000);
        //driver.close();
    }

    @Then("^user is able to click on Update names and cost centre link$")
    public void user_is_able_to_click_on_Update_names_and_cost_centre_link() throws Throwable

    {
        PageFactory.initElements(driver, updatenameandcost_pageactions.class);
        updatenameandcost_pageactions.updatenameandcost();
    }

    @Then("^user update the username \"([^\"]*)\" of any of one of the subscriptions and naviagte to Request Review page$")
    public void user_update_the_username_of_any_of_one_of_the_subscriptions_and_naviagte_to_Request_Review_page(String newusr) throws Throwable
    {
        PageFactory.initElements(driver, updateusername_pageactions.class);
        updateusername_pageactions.username(newusr);

    }

    @Then("^user is able to submit the request successfully$")
    public void user_is_able_to_submit_the_request_successfully() throws Throwable

    {
        PageFactory.initElements(driver, reviewpage_pageactions.class);
        reviewpage_pageactions.reviewpage();

        Thread.sleep(10000);
        Thread.sleep(5000);
        //driver.close();
    }

    @Then("^user is able to click on Create new year link$")
    public void user_is_able_to_click_on_Create_new_year_link() throws Throwable

    {
        PageFactory.initElements(driver, Newuser_pageactions.class);
        Newuser_pageactions.myacntlink();

    }

    @Then("^user is able to create a valid user with \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
    public void user_is_able_to_create_a_valid_user_with(String frstname, String lastname, String email, String mble)
            throws Throwable

    {
        PageFactory.initElements(driver, Validuser_pageactions.class);
        Validuser_pageactions.myacntlink(frstname, lastname, email, mble);

        Thread.sleep(10000);
        Thread.sleep(5000);
        //driver.close();
    }

    @Then("^user is able to land in the existing user page$")
    public void user_is_able_to_land_in_the_existing_user_page() throws Throwable

    {
        PageFactory.initElements(driver, Existinguserlnk_pageactions.class);
        Existinguserlnk_pageactions.myacntlink();


    }

    @Then("^user is able to select any user and click on edit$")
    public void user_is_able_to_select_any_user_and_click_on_edit() throws Throwable

    {
        PageFactory.initElements(driver, SelectValiduser_pageactions.class);
        SelectValiduser_pageactions.myacntlink();


    }

    @Then("^user is able to successfully activate or deactivate any contact$")
    public void user_is_able_to_successfully_activate_or_deactivate_any_contact() throws Throwable

    {
        PageFactory.initElements(driver, ActivateorDeactivateusr_pageactions.class);
        ActivateorDeactivateusr_pageactions.myacntlink();
        Thread.sleep(10000);
        Thread.sleep(5000);
        //driver.close();
    }

    @And("^user gets the request number and launches salesforce$")
    public void user_gets_the_request_number_and_launches_salesforce() throws Throwable {
     PageFactory.initElements(driver,RequestSearch_pageactions.class);
     reqno= RequestSearch_pageactions.RequestSearch();
     System.out.println(reqno);
    }

    @Then("^user logins into salesforce using \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_logins_into_salesforce_using_and(String username, String password) throws Throwable {
        PageFactory.initElements(driver,salesforcelogin_pageactions.class);
        salesforcelogin_pageactions.login_credentials(username,password,reqno);
    }
}

