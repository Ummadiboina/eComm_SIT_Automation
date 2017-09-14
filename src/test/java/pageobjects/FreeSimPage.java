package pageobjects;

import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class FreeSimPage {

	// ipadsandtablets

	@FindBy(how = How.XPATH, using = "//a[@href='#tablets']")
	public static WebElement iPadsandTabletstab;

	// ipadsim

	@FindBy(how = How.XPATH, using = "(//a[@title='iPad sims'])[1]")
	public static WebElement SteadyiPadsim;

	// EnterManually

	@FindBy(how = How.XPATH, using = "//a[contains(., 'Enter Manually')]")
	public static WebElement EnterManually;

	// flat

	@FindBy(how = How.ID, using = "address-flat")
	public static WebElement flat;

	// House name

	@FindBy(how = How.ID, using = "address-housename")
	public static WebElement housename;

	// Address

	@FindBy(how = How.ID, using = "address-line1")
	public static WebElement address;

	// town

	@FindBy(how = How.ID, using = "address-town")
	public static WebElement town;

	// postcode

	@FindBy(how = How.ID, using = "address-postcode")
	public static WebElement postcode;

	// email

	@FindBy(how = How.ID, using = "email")
	public static WebElement email;

	// title

	@FindBy(how = How.ID, using = "title")
	public static WebElement title;

	// firstname

	@FindBy(how = How.ID, using = "first-name")
	public static WebElement firstname;

	// secondname

	@FindBy(how = How.ID, using = "last-name")
	public static WebElement secondname;

	// contact

	@FindBy(how = How.ID, using = "contact-number")
	public static WebElement contact;

	// checkbox

	@FindBy(how = How.ID, using = "checkbox-terms-agreement-required")
	public static WebElement check;

	// orderbutton

	@FindBy(how = How.ID, using = "btn-continue")
	public static WebElement order;

}