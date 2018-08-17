package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class MyO2Page {

	@FindBy(how = How.XPATH, using = "(//a[contains(text(),'Sign in')])[1]")
	public static WebElement signIn;

	@FindBy(how = How.XPATH, using = "//div[@class='register']/a")
	public static WebElement register;

	@FindBy(how = How.XPATH, using = "//div[@class='login']/div[normalize-space()='My O2']")
	public static WebElement signInSectionHeader;

	@FindBy(how = How.XPATH, using = "//div[@class='username']/div[normalize-space()='Sign in to review your account']")
	public static WebElement signInSectionHintTxt;

	@FindBy(how = How.XPATH, using = "//input[@id='accountsusername']")
	public static WebElement signInUserName;

	@FindBy(how = How.XPATH, using = "//input[@id='accountspassword']")
	public static WebElement signInPassword;

	@FindBy(how = How.XPATH, using = "//input[@id='rememberMe']")
	public static WebElement rememberUserName;

	@FindBy(how = How.XPATH, using = "//button[normalize-space()='Sign in']")
	public static WebElement signInButton;

	@FindBy(how = How.XPATH, using = "//a[contains(text(),'Forgotten your username and password')]")
	public static WebElement forgotUserName;

	@FindBy(how = How.XPATH, using = "//*[contains(text(),'Sign out')]")
	public static WebElement SignoutLink;


}
