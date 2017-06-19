package actionsPerformed;

import org.openqa.selenium.JavascriptExecutor;
import org.sikuli.script.Screen;

import helpers.Environment;
import junit.framework.Assert;

public class UpgradeCustomerPageActions extends Environment {

	Screen screen = new Screen();

	public static void Login() throws InterruptedException {
		pageobjects.UpgradeCustomerPage.username.sendKeys("ing_jul987");
		pageobjects.UpgradeCustomerPage.password.sendKeys("test123");
		Thread.sleep(5000);
		if (pageobjects.UpgradeCustomerPage.signInButton.isDisplayed()) {
			pageobjects.UpgradeCustomerPage.signInButton.click();
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,250)", "");

			pageobjects.UpgradeCustomerPage.ContinueButton.click();
		}
		Thread.sleep(5000);
	}

	public static void PickSimOTariff() throws InterruptedException {
		if (pageobjects.UpgradeCustomerPage.SimOLink.isDisplayed()) {
			pageobjects.UpgradeCustomerPage.SimOLink.click();
		}
		Thread.sleep(5000);
	}

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
