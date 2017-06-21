package actionsPerformed;


import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;

import helpers.Environment;



public class UpgradeCustomerPageActions extends Environment{
	  

	static Logger log = Logger.getLogger("devpinoyLogger");
	static JavascriptExecutor executor = (JavascriptExecutor) driver;	  		

		public static void Login(String username,String password) throws InterruptedException
		{
			pageobjects.UpgradeCustomerPage.username.sendKeys(username);
			pageobjects.UpgradeCustomerPage.password.sendKeys(password);
			Thread.sleep(5000);
			if(pageobjects.UpgradeCustomerPage.signInButton.isDisplayed())
			{
				pageobjects.UpgradeCustomerPage.signInButton.click();
				JavascriptExecutor jse = (JavascriptExecutor) driver;
				jse.executeScript("window.scrollBy(0,300)", "");
				pageobjects.UpgradeCustomerPage.Continue.click();
			}
			Thread.sleep(5000);
			
			
			
			
		}
		
		public static void PickSimOTariff() throws InterruptedException
		{
			if(pageobjects.UpgradeCustomerPage.SimOLink.isDisplayed())
			{
				pageobjects.UpgradeCustomerPage.SimOLink.click();
			}
			Thread.sleep(5000);

		}
		public static void upgradePAYMPhoneSelect(String elementName) throws Throwable {
			//Below is to view all phones in the same page
			if (pageobjects.PhonesListingPage.ViewAllPhones.isDisplayed()) {
				executor.executeScript("arguments[0].click();", pageobjects.PhonesListingPage.ViewAllPhones);
			}

			if (elementName.contains("GalaxyS7")) {
				pageobjects.UpgradePhonesListingPage.GalaxyS7.click();
				System.out.println("Selected GalaxyS7");
				log.debug("Selected GalaxyS7");
			}

			if (elementName.contains("GalaxyS8")) {
				pageobjects.UpgradePhonesListingPage.GalaxyS8.click();
				// Assert.assertEquals(elementName,"Galaxy S7 is not found");
				log.debug("Selected GalaxyS8");

			}

			if (elementName.contains("GalaxyS8Plus")) {
				pageobjects.UpgradePhonesListingPage.GalaxyS8Plus.click();
				// Assert.assertEquals(elementName,"Galaxy S7 is not found");
				log.debug("Selected GalaxyS8Plus");

			}

			if (elementName.contains("Iphone7")) {
				pageobjects.UpgradePhonesListingPage.Iphone7.click();
				// Assert.assertEquals(elementName,"Galaxy S7 is not found");
				log.debug("Selected Iphone7");

			}

			if (elementName.contains("Iphone7Plus")) {
				pageobjects.UpgradePhonesListingPage.Iphone7Plus.click();
				// Assert.assertEquals(elementName,"Galaxy S7 is not found");
				log.debug("Selected Iphone7Plus");

			}

			if (elementName.contains("IphoneSE")) {
				pageobjects.UpgradePhonesListingPage.IphoneSE.click();
				// Assert.assertEquals(elementName,"Galaxy S7 is not found");
				log.debug("Selected IphoneSE");

			}

			if (elementName.contains("HuaweiP10")) {
				pageobjects.UpgradePhonesListingPage.HuaweiP10.click();
				// Assert.assertEquals(elementName,"Galaxy S7 is not found");
				log.debug("Selected HuaweiP10");

			}

			if (elementName.contains("GalaxyS7Edge")) {
				pageobjects.UpgradePhonesListingPage.GalaxyS7Edge.click();
				// Assert.assertEquals(elementName,"Galaxy S7 is not found");
				log.debug("Selected GalaxyS7Edge");
			}

			if (elementName.contains("Oneplus3T")) {
				pageobjects.UpgradePhonesListingPage.Oneplus3T.click();
				// Assert.assertEquals(elementName,"Galaxy S7 is not found");
				log.debug("Selected Oneplus3T");

			}
			
			

		}
		
		public static void viewAllPhones() throws InterruptedException {
			Thread.sleep(3000);
			if (pageobjects.UpgradePhonesListingPage.ViewAllPhones.isDisplayed()) {
				executor.executeScript("arguments[0].click();", pageobjects.UpgradePhonesListingPage.ViewAllPhones);
			}
		}

////////////////////////////Customer not eligible for upgrade//////////////////////////
		
public static void UpgradeUpsellPromoModule_Validation() throws InterruptedException {
JavascriptExecutor jse = (JavascriptExecutor) driver;
jse.executeScript("window.scrollBy(0,150)", "");


if (pageobjects.UpgradeCustomerPage.Promomodule_iPadsims.isDisplayed()) {
System.out.println("The iPad sims promo module is displayed and the text is : "
+ pageobjects.UpgradeCustomerPage.Promomodule_iPadsims.getText());

} else

System.out.println("iPad Sims promo module is not displayed");

if (pageobjects.UpgradeCustomerPage.Promomodule_Tabletsims.isDisplayed()) {
System.out.println("The Tablet sims promo module is displayed and the text is : "
+ pageobjects.UpgradeCustomerPage.Promomodule_Tabletsims.getText());

} else

System.out.println("Tablet Sims promo module is not displayed");

if (pageobjects.UpgradeCustomerPage.Promomodule_Donglesims.isDisplayed()) {
System.out.println("The Dongle sims promo module is displayed and the text is : "
+ pageobjects.UpgradeCustomerPage.Promomodule_Donglesims.getText());

} else

System.out.println("Dongle Sims promo module is not displayed");

if (pageobjects.UpgradeCustomerPage.GoToMyO2_CTA.isDisplayed()) {
System.out.println("The Go To My O2 CTA is displayed and the text is : "
+ pageobjects.UpgradeCustomerPage.GoToMyO2_CTA.getText());

} else

System.out.println("Go To My O2 CTA is not displayed");

System.out.println(pageobjects.UpgradeCustomerPage.NotEligible_message.getText());

/*	Assert.assertEquals(pageobjects.UpgradeCustomerPage.NotEligible_message.getText(),
"You are not eligible to upgrade"); // bound to change
System.out.println(
"The error message is displayed as" + pageobjects.UpgradeCustomerPage.NotEligible_message.getText());  
*/
}

public static void UpgradeUpsellPromoModule_MyO2Action() throws InterruptedException {

if (pageobjects.UpgradeCustomerPage.GoToMyO2_CTA.isDisplayed()) {
System.out.println("The Go To My O2 CTA is displayed and the text is : "
+ pageobjects.UpgradeCustomerPage.GoToMyO2_CTA.getText());
pageobjects.UpgradeCustomerPage.GoToMyO2_CTA.click();

if (pageobjects.UpgradeCustomerPage.MyO2_Page.isDisplayed()) {

System.out.println("My O2 Page is displayed");
}

else
System.out.println("My O2 page is not displayed");
}

}

public static void UpgradeUpsellPromoModule_iPadAction() throws InterruptedException {

JavascriptExecutor jse = (JavascriptExecutor) driver;
jse.executeScript("window.scrollBy(0,300)", "");


if (pageobjects.UpgradeCustomerPage.Promomodule_iPadsims.isDisplayed()) {
System.out.println("The  is displayed and the text is : "
+ pageobjects.UpgradeCustomerPage.Promomodule_iPadsims.getText());
pageobjects.UpgradeCustomerPage.Promomodule_iPadsims.click();

}

else

System.out.println("The iPad sims promo module is not displayed");

}

public static void UpgradeUpsellPromoModule_TabletAction() throws InterruptedException {

JavascriptExecutor jse = (JavascriptExecutor) driver;
jse.executeScript("window.scrollBy(0,300)", "");


if (pageobjects.UpgradeCustomerPage.Promomodule_Tabletsims.isDisplayed()) {
System.out.println("The  is displayed and the text is : "
+ pageobjects.UpgradeCustomerPage.Promomodule_Tabletsims.getText());
pageobjects.UpgradeCustomerPage.Promomodule_Tabletsims.click();

}

else

System.out.println("The Tablets sims promo module is not displayed");

}

public static void UpgradeUpsellPromoModule_DongleAction() throws InterruptedException {

JavascriptExecutor jse = (JavascriptExecutor) driver;
jse.executeScript("window.scrollBy(0,300)", "");


if (pageobjects.UpgradeCustomerPage.Promomodule_Donglesims.isDisplayed()) {
System.out.println("The  is displayed and the text is : "
+ pageobjects.UpgradeCustomerPage.Promomodule_Donglesims.getText());
pageobjects.UpgradeCustomerPage.Promomodule_Donglesims.click();

}

else

System.out.println("The Dongle sims promo module is not displayed");

}


		
				
		
		
}
