package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.sikuli.script.Pattern;

public class UpgradeCustomerPage {
	 
	  
		@FindBy(how=How.ID,using="username")
		public static WebElement username;
		
		@FindBy(how=How.ID,using="password")
		public static WebElement password;
		
		@FindBy(how=How.ID,using="signInButton")
		public static WebElement signInButton;
		
		@FindBy(how=How.XPATH,using="//*[@id='cancel']")
		public static WebElement ContinueButton;
		
		@FindBy(how=How.CLASS_NAME,using="simo-link")
		public static WebElement SimOLink;
		
////////////////////////When customer not eligible/////////////////////////////////////
		
@FindBy(how=How.XPATH,using="//*[@id='upgrade-message']")
public static WebElement NotEligible_message;

@FindBy(how=How.XPATH,using="//*[@id='contentFull']/div[1]/div[3]/div/div/div[1]/a")
public static WebElement Promomodule_iPadsims;


@FindBy(how=How.XPATH,using="//*[@id='contentFull']/div[1]/div[3]/div/div/div[2]/a")
public static WebElement Promomodule_Tabletsims;
   
@FindBy(how=How.XPATH,using="//*[@id='contentFull']/div[1]/div[3]/div/div/div[3]/a")
public static WebElement Promomodule_Donglesims;
                                   
@FindBy(how=How.XPATH,using="//*[@id='o2RecycleModule']/p/form/button")
public static WebElement GoToMyO2_CTA;

@FindBy(how=How.XPATH,using="//*[@id='o2-page-wrapper']")
public static WebElement MyO2_Page;
		
}
