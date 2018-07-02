package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class MyO2Page {

	@FindBy(how = How.XPATH, using = "//*[contains(text(),'Sign in')]")
	public static WebElement signIn;

	@FindBy(how = How.XPATH, using = "//*[contains(text(),'register')]")
	public static WebElement register;

	@FindBy(how = How.XPATH, using = "//h2[contains(text(),'My O2')]")
	public static WebElement signInSectionHeader;

	@FindBy(how = How.XPATH, using = "//*[contains(text(),'Sign in to check your account')]")
	public static WebElement signInSectionHintTxt;

	@FindBy(how = How.XPATH, using = "//input[@id='userName']")
	public static WebElement signInUserName;

	@FindBy(how = How.XPATH, using = "//input[@id='password']")
	public static WebElement signInPassword;

	@FindBy(how = How.XPATH, using = "//input[@id='rememberCheck']")
	public static WebElement rememberUserName;

	@FindBy(how = How.XPATH, using = "//button[@id='Signin']")
	public static WebElement signInButton;

	@FindBy(how = How.XPATH, using = "//*[contains(text(),'Forgotton your username and password?')]")
	public static WebElement forgotUserName;

	@FindBy(how = How.XPATH, using = "//*[contains(text(),'Sign out')]")
	public static WebElement SignoutLink;


}
