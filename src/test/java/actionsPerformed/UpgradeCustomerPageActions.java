package actionsPerformed;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import com.google.common.base.Function;

import helpers.Environment;
import helpers.Filereadingutility;
import helpers.setRuntimeProperty;
import pageobjects.UpgradeCustomerPage;

public class UpgradeCustomerPageActions extends Environment {

	static String RunTimeFilePath = System.getProperty("user.dir") + "\\Configurations\\Properties\\Run.properties";
	static Logger log = Logger.getLogger("devpinoyLogger");
	static JavascriptExecutor executor = (JavascriptExecutor) driver;
	static int position = 0;
	static int PositionUpgrade = 0;

	public static void Login(String username, String password) throws InterruptedException {
		pageobjects.UpgradeCustomerPage.username.sendKeys(username);
		pageobjects.UpgradeCustomerPage.password.sendKeys(password);
		Thread.sleep(5000);
		if (pageobjects.UpgradeCustomerPage.signInButton.isDisplayed()) {
			pageobjects.UpgradeCustomerPage.signInButton.click();
			System.out.println("Clicked on Signin button");
		}
		Thread.sleep(10000);

		System.out.println("Title of the page is " + driver.getTitle());
		/*
		 * if ((!driver.getTitle().
		 * contains("O2 | Accounts | Please verify your email address") ||
		 * !driver.getTitle().contains("O2 | Accounts | Update username"))) {
		 * 
		 * Assert.fail("Login failed");
		 * 
		 * } else {
		 * 
		 * System.out.println("Logged in successfully"); }
		 */
		/*
		 * try { System.out.println("Going to click on Continue link");
		 * pageobjects.UpgradeCustomerPage.Continue.click();
		 * 
		 * } catch (Exception e) { // TODO Auto-generated catch block
		 * System.out.println("Continue button is not there, it should be fine" );
		 * 
		 * }
		 */

	}

	public static void Signin() throws InterruptedException {
		System.out.println("in signin function");

		pageobjects.UpgradeCustomerPage.Signinlink.click();
		System.out.println("Sign in button clicked");

	}

	public static void PickSimOTariff() throws InterruptedException {
		if (pageobjects.UpgradeCustomerPage.SimOLink.isDisplayed()) {
			pageobjects.UpgradeCustomerPage.SimOLink.click();
		}
		Thread.sleep(5000);

	}

	public static void upgradePAYMPhoneSelect(String elementName) throws Throwable {
		// Below is to view all phones in the same page
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
		if (elementName.contains("Iphone6")) {
			pageobjects.UpgradePhonesListingPage.Iphone6.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Selected Iphone6");

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

		if (elementName.contains("Samsung Galaxy J3 2016 Like New")) {
			pageobjects.UpgradePhonesListingPage.SamsungGalaxyJ32016LikeNew.click();
			log.debug("Selected Samsung Galaxy J3 2016 Like New");

		}

	}

	public static void viewAllPhones() throws InterruptedException {
		Thread.sleep(3000);
		if (pageobjects.UpgradePhonesListingPage.ViewAllPhones.isDisplayed()) {
			executor.executeScript("arguments[0].click();", pageobjects.UpgradePhonesListingPage.ViewAllPhones);
		}
	}

	//////////////////////////// Customer not eligible for
	//////////////////////////// upgrade//////////////////////////

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

		/*
		 * Assert.assertEquals(pageobjects.UpgradeCustomerPage.
		 * NotEligible_message.getText(), "You are not eligible to upgrade"); // bound
		 * to change System.out.println( "The error message is displayed as" +
		 * pageobjects.UpgradeCustomerPage.NotEligible_message.getText());
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

	public static void upgradePAYMTabletSelect(String elementName) throws Throwable {
		// Below is to view all phones in the same page

		pageobjects.UpgradeTabletListingPage.TabletTab.click();

		if (pageobjects.UpgradeTabletListingPage.ViewAllTablets.isDisplayed()) {
			executor.executeScript("arguments[0].click();", pageobjects.UpgradeTabletListingPage.ViewAllTablets);
		}
		if (elementName.contains("Apple iPad 9.7")) {
			pageobjects.UpgradeTabletListingPage.iPad97.click();

			log.debug("Selected Apple iPad 9.7");
		}
		if (elementName.contains("Apple iPad Pro 10.5 inch")) {
			pageobjects.UpgradeTabletListingPage.AppleiPadPro105inch.click();

			log.debug("Selected Apple iPad Pro 10.5 inch");
		}
	}

	public static void clickOnContinueButton() {

		pageobjects.UpgradeCustomerPage.Continue.click();
		System.out.println("Clicked on Continue button in Upgrade page");
	}

	public static void selectDeviceInRecommendedDevicesSection(String devicename) throws Exception {
		log.debug("Select a device in recommended devices section");
		System.out.println("Select a device in recommended devices section");
		List<WebElement> DevicesName = pageobjects.UpgradeCustomerPage.DeviceNameRecommendedSection;
		WebElement SelectButton;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		String c = null;
		int k = 0;
		List<String> Devices = new ArrayList<String>();
		for (WebElement f : DevicesName) {
			Devices.add(f.getText());
			//System.out.println(Devices.add(f.getText()));
		}
		log.debug("passing device" + devicename);
		System.out.println("passing device " + devicename);
		for (int i = 0; i < DevicesName.size(); i++) {
			if (DevicesName.get(i).getText().equals(devicename)) {
				log.debug("Device name matches");
				System.out.println("Device name matches");
				k = i + 1;
				log.debug("k :" + k);
				//System.out.println("k :" + k);
				c = "(//div[@id='qa-recommendedDevicesTile']/a//div/button)[" + k + "]";
				log.debug("xpath of button is" + c);
				//System.out.println("xpath of button is" + c);
				SelectButton = driver.findElement(By.xpath(c));
				js.executeScript("arguments[0].click();", SelectButton);
			}
		}
		Thread.sleep(5000);
	}

	public static void selectTariff(String Tariff) {
		System.out.println("selectTariff");
		// executor.executeScript("arguments[0].click();",
		// pageobjects.PAYMandPAYGTariffAndExtrasPage.ViewAllTariffs);
		List<WebElement> TariffList = driver.findElements(By.xpath("//div[@id='tariff-tile']/div[@id]"));
		boolean flag = false;
		String TariffXpath = null;
		String TextOfTariffTile = null;
		String SelectBtnXpath = null;
		int i = 0;
		for (int j = 0; j < TariffList.size(); j++) {
			i = j + 1;
			TariffXpath = "(//div[@id='tariff-tile']/div[@id]/div/div[@class='price-block'])[" + i + "]";
			TextOfTariffTile = driver.findElement(By.xpath(TariffXpath)).getText();
			TextOfTariffTile = TextOfTariffTile.replace("Â£", "");
			TextOfTariffTile = TextOfTariffTile.replace("\n", "");
			TextOfTariffTile = TextOfTariffTile.replace(" ", "");
			System.out.println("TextOfTariffTile  " + TextOfTariffTile);
			System.out.println("Tariff  " + Tariff);
			if (TextOfTariffTile.contains(Tariff)) {
				System.out.println("Given tariff is present in the list of tariffs");
				position = i;
				SelectBtnXpath = "(//button[@id='callToAction'])[" + i + "]";
				driver.findElement(By.xpath(SelectBtnXpath)).click();
				flag = true;
				break;
			}

		}
		if (flag == false) {
			Assert.fail("Provided tariff is not present in the list of tariffs");
		}
	}

	public static void selectTariffWithRibbonAndOverlayUpgradeJourney(String Tariff) {
		log.debug('\n' + "To select Tariff With Ribbon And Overlay in upgrade journey");
		List<WebElement> TariffList = driver
				.findElements(By.xpath("//div[contains(@class, 'grid-tile')]/div/button[@id='callToAction']"));
		String UpfrontPoundXPath = null, UpfrontPenceXPath = null, MonthlyPoundXPath = null, MonthlyPenceXPath = null;
		String UpfrontPound = null, UpfrontPence = null, MonthlyPound = null, MonthlyPence = null;
		String UpfrontCost = null, MonthlyCost = null;
		String TextOfTariffTile = null, SelectBtnXpath = null;
		boolean flag = false;
		int j = 0;

		log.debug("Tariff List size is " + TariffList.size());

		for (int i = 0; i < TariffList.size(); i++) {
			log.debug("inside for loop");
			System.out.println("inside for loop");
			j = i + 1;
			UpfrontPoundXPath = "(//*[@id='qa-upfront-pound'])[" + j + "]";
			UpfrontPenceXPath = "(//*[@id='qa-upfront-pence'])[" + j + "]";
			MonthlyPoundXPath = "(//*[@id='qa-month-pound'])[" + j + "]";
			MonthlyPenceXPath = "(//*[@id='qa-month-pence'])[" + j + "]";

			UpfrontPound = driver.findElement(By.xpath(UpfrontPoundXPath)).getText();
			UpfrontPence = driver.findElement(By.xpath(UpfrontPenceXPath)).getText();
			MonthlyPound = driver.findElement(By.xpath(MonthlyPoundXPath)).getText();
			MonthlyPence = driver.findElement(By.xpath(MonthlyPenceXPath)).getText();

			log.debug("UpfrontPound " + UpfrontPound);
			log.debug("UpfrontPence " + UpfrontPence);
			log.debug("MonthlyPound " + MonthlyPound);
			log.debug("MonthlyPence " + MonthlyPence);

			UpfrontPound = UpfrontPound.replace("Â£", "");
			MonthlyPound = MonthlyPound.replace("Â£", "");

			log.debug("UpfrontPound " + UpfrontPound);
			log.debug("UpfrontPence " + UpfrontPence);
			log.debug("MonthlyPound " + MonthlyPound);
			log.debug("MonthlyPence " + MonthlyPence);

			UpfrontCost = UpfrontPound + UpfrontPence + "upfront";
			MonthlyCost = MonthlyPound + MonthlyPence + "amonth";

			TextOfTariffTile = UpfrontCost + MonthlyCost;
			log.debug("UpfrontCost is " + UpfrontCost);
			log.debug("MonthlyCost is " + MonthlyCost);
			log.debug("TextOfTariffTile is " + TextOfTariffTile);

			if (TextOfTariffTile.contains(Tariff)) {
				PositionUpgrade = j;
				log.debug("Provided tariff is present in the list of tariffs");
				SelectBtnXpath = "(//button[@id='callToAction'])[" + j + "]";
				log.debug("Going to select the given tariff :" + Tariff);
				driver.findElement(By.xpath(SelectBtnXpath)).click();
				flag = true;
			}
		}
		if (flag == false) {
			Assert.fail("Provided tariff is not present in the list of tariffs");
		}
	}

	public static void verifyPromotionalRibbonDisplayedTEpage(String Tariff) {
		log.debug('\n' + "Verify Promotional Ribbon is displayed in TE page");
		String BluePromotionXpath = null;
		String GreenPromotionXpath = null;
		WebElement GreenPromotion = null;
		WebElement BluePromotion = null;
		List<WebElement> TariffList = driver.findElements(By.xpath("//div[@id='tariff-tile']/div[@id]"));
		log.debug("TariffList size is " + TariffList.size());

		String PrimaryPromotionRibbon = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"PrimaryPromotionRibbon");
		String SecondaryPromotionRibbon = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"SecondaryPromotionRibbon");

		BluePromotionXpath = "(//div[@id='tariff-tile']/div[@id]//div[@class='blue-promotion'])[" + position + "]";

		if (PrimaryPromotionRibbon.equals("Y")) {
			BluePromotion = driver.findElement(By.xpath(BluePromotionXpath));
			if (BluePromotion.getText().isEmpty()) {
				Assert.fail("Promotion text not present for the selected tariff");
			} else {
				setRuntimeProperty.setProperty("PrimaryPromotionText", BluePromotion.getText());
				log.debug("Promotion text is " + BluePromotion.getText());
			}
		} else if (PrimaryPromotionRibbon.equals("N")) {
			log.debug("No Primary ribbon is configured");
		}

		if (SecondaryPromotionRibbon.equals("Y")) {
			GreenPromotionXpath = "(//div[@id='tariff-tile']/div[@id]//div[@class='green-promotion'])[" + position
					+ "]";
			GreenPromotion = driver.findElement(By.xpath(GreenPromotionXpath));
			if (GreenPromotion.isDisplayed()) {
				setRuntimeProperty.setProperty("SecondaryPromotionText", GreenPromotion.getText());
				log.debug("Secondary Promotion text is " + GreenPromotion.getText());
			} else {
				Assert.fail("Secondary ribbon not present");
			}
		} else if (SecondaryPromotionRibbon.equals("N")) {
			log.debug("No Secondary ribbon is configured");
		}
	}

	public static void verifyPromotionalRibbonDisplayedUpgradePage(String Tariff) {
		log.debug("To verify Promotional Ribbon Displayed in Upgrade Page");

		String PrimaryPromotionXpath = null, SecondaryPromotionXpath = null;
		String PrimaryPromotionText = null, SecondaryPromotionText = null;
		int i = 0;

		String PrimaryPromotionRibbonRecommendedSection = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"PrimaryPromotionRibbonRecommendedSection");
		String SecondaryPromotionRibbonRecommendedSection = (String) Filereadingutility
				.getPropertyValue(RunTimeFilePath, "SecondaryPromotionRibbonRecommendedSection");

		i = PositionUpgrade;

		PrimaryPromotionXpath = "(//div[@class='offer-wrapper'])[" + i + "]";
		SecondaryPromotionXpath = "(//div[@id='qa-promotion']/div[2])[" + i + "]";

		List<WebElement> PrimaryPromotionList = driver.findElements(By.xpath(PrimaryPromotionXpath));
		List<WebElement> SecondaryPromotionList = driver.findElements(By.xpath(SecondaryPromotionXpath));

		if (PrimaryPromotionRibbonRecommendedSection.equals("Y")) {
			if (PrimaryPromotionList.size() > 0) {
				if (driver.findElement(By.xpath(PrimaryPromotionXpath)).isDisplayed()) {
					PrimaryPromotionText = driver.findElement(By.xpath(PrimaryPromotionXpath)).getText();
					setRuntimeProperty.setProperty("PrimaryPromotionTextRecommendedSection", PrimaryPromotionText);
					log.debug("PrimaryPromotionText is " + PrimaryPromotionText);
				}
			} else {
				Assert.fail("Primary Promotion Ribbon is not present");
			}
		} else if (PrimaryPromotionRibbonRecommendedSection.equals("N")) {
			if (PrimaryPromotionList.size() == 0) {
				log.debug("Primary promotion ribbon in recommended section is not configured");
			} else {
				Assert.fail("Primary promotion ribbon is present though it is not configured");
			}
		}

		if (SecondaryPromotionRibbonRecommendedSection.equals("Y")) {
			if (SecondaryPromotionList.size() > 0) {
				if (driver.findElement(By.xpath(SecondaryPromotionXpath)).isDisplayed()) {
					SecondaryPromotionText = driver.findElement(By.xpath(SecondaryPromotionXpath)).getText();
					setRuntimeProperty.setProperty("SecondaryPromotionTextRecommendedSection", SecondaryPromotionText);
					log.debug("SecondaryPromotionText is " + SecondaryPromotionText);
				}
			} else {
				Assert.fail("Secondary Promotion Ribbon is not present");
			}
		} else if (SecondaryPromotionRibbonRecommendedSection.equals("N")) {
			if (SecondaryPromotionList.size() == 0) {
				log.debug("Secondary promotion ribbon in recommended section is not configured");
			} else {
				Assert.fail("Secondary promotion ribbon is present though it is not configured");
			}
		}
	}

	public static void checkIfPromotionalRibbonTextsNotSame() {
		String PrimaryPromotionTextRecommendedSection = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"PrimaryPromotionTextRecommendedSection");
		String SecondaryPromotionTextRecommendedSection = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"SecondaryPromotionTextRecommendedSection");
		String PrimaryPromotionText = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"PrimaryPromotionText");
		String SecondaryPromotionText = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"SecondaryPromotionText");
		if (PrimaryPromotionTextRecommendedSection.equals(PrimaryPromotionText)) {
			log.debug("Primary promotion text matches");
		} else {
			log.debug("Primary promotion text does not match");
		}
		if (SecondaryPromotionTextRecommendedSection.equals(SecondaryPromotionText)) {
			log.debug("Secondary promotion text matches");
		} else {
			log.debug("Secondary promotion text does not match");
		}
	}

	public static void verifyOverlayIconIsDisplayedTEpage(String Tariff) {
		log.debug('\n' + "Verify Overlay Icon Is Displayed in TE page");
		log.debug("Tariff for verifying overlay icon is " + Tariff);
		String TariffTile = null;
		TariffTile = "(//div[@id='tariff-tile']/div[@id])[" + position + "]";
		List<WebElement> TariffTileOverlay = driver.findElement(By.xpath(TariffTile))
				.findElements(By.xpath("//div/div/a[@class='tariff-information-overlay-icon ng-scope']"));
		if (TariffTileOverlay.size() < 0) {
			Assert.fail("No overlay is present for the selected tariff in the tariff tile");
		} else {
			log.debug("Overlay is present for the selected tariff in the tariff tile as expected");
		}
	}

	public static void verifyOverlayIconIsDisplayedUpgradePage(String Tariff) {
		log.debug('\n' + "Verify Overlay Icon Is Displayed in upgrade page");
		log.debug("Tariff for verifying overlay icon is " + Tariff);
		String TariffTile = null;
		TariffTile = "(//div[contains(@class, 'grid-tile')])[" + PositionUpgrade + "]";
		List<WebElement> TariffTileOverlay = driver.findElement(By.xpath(TariffTile))
				.findElements(By.xpath("//*[@id='qa-promotion']"));
		if (TariffTileOverlay.size() < 0) {
			Assert.fail("No overlay is present for the selected tariff in the tariff tile");
		} else {
			log.debug("Overlay is present for the selected tariff in the tariff tile as expected");
		}
	}

	public static void clickOnOverlayIconTEpage(String Tariff) throws Exception {
		log.debug('\n' + "To Click On Overlay Icon TE page");
		log.debug("Tariff for verifying overlay icon is " + Tariff);

		String TariffTile = null;
		TariffTile = "(//div[@id='tariff-tile']/div[@id])[" + position + "]";
		List<WebElement> PrimaryOverlayIcon = driver.findElement(By.xpath(TariffTile))
				.findElements(By.xpath("//div[@class='blue-promotion']/div/a[1]"));
		List<WebElement> SecondaryOverlayIcon = driver.findElement(By.xpath(TariffTile))
				.findElements(By.xpath("//div[@class='blue-promotion']/div/a[2]"));

		String PrimaryOverlay = (String) Filereadingutility.getPropertyValue(RunTimeFilePath, "PrimaryOverlay");
		String SecondaryOverlay = (String) Filereadingutility.getPropertyValue(RunTimeFilePath, "SecondaryOverlay");

		if (PrimaryOverlay.equals("Y")) {
			if (PrimaryOverlayIcon.size() > 0) {
				executor.executeScript("arguments[0].click();", PrimaryOverlayIcon.get(0));
				log.debug("Clicked on primary OverlayIcon");

				Thread.sleep(5000);

				for (String winHandle : driver.getWindowHandles()) {
					driver.switchTo().window(winHandle);
					log.debug("Inside the overlay for the selected tariff");
				}
				Thread.sleep(5000);
				log.debug("Text inside the primary overlay is :" + '\n'
						+ driver.findElement(By
								.xpath("//div[contains(@class, 'overlay-box tariff-tile-info-promo-overlay')]/div/h3"))
								.getText());
				closeOverlayIconTEpage();
			} else {
				Assert.fail("Primary Overlay Icon not present");
			}
		} else if (PrimaryOverlay.equals("N")) {
			if (PrimaryOverlayIcon.size() == 0) {
				log.debug("No Primary overlay is configured");
			} else {
				Assert.fail("Primary overlay is present though it is not configured");
			}
		}

		if (SecondaryOverlay.equals("Y")) {
			if (SecondaryOverlayIcon.size() > 0) {
				executor.executeScript("arguments[0].click();", SecondaryOverlayIcon.get(0));
				log.debug("Clicked on Secondary OverlayIcon");

				Thread.sleep(5000);

				for (String winHandle : driver.getWindowHandles()) {
					driver.switchTo().window(winHandle);
					log.debug("Inside the overlay for the selected tariff");
				}
				log.debug("Text inside the secondary overlay is :" + '\n'
						+ driver.findElement(By
								.xpath("//div[contains(@class, 'overlay-box tariff-tile-info-promo-overlay')]/div/h3"))
								.getText());
				closeOverlayIconTEpage();
			} else {
				Assert.fail("Secondary Overlay Icon not present");
			}
		} else if (SecondaryOverlay.equals("N")) {
			if (SecondaryOverlayIcon.size() == 0) {
				log.debug("No Secondary overlay is configured");
			} else {
				Assert.fail("Secondary overlay is present though it is not configured");
			}
		}
	}

	public static void clickOnOverlayIconUpgradePage(String Tariff) throws Exception {
		log.debug('\n' + "To Click On Overlay Icon in Upgrade page");
		log.debug("Tariff for verifying overlay icon is " + Tariff);

		String TariffTile = null;
		TariffTile = "(//div[contains(@class, 'grid-tile')])[" + PositionUpgrade + "]";
		List<WebElement> PrimaryOverlayIcon = driver.findElement(By.xpath(TariffTile))
				.findElements(By.xpath("//div[@id='qa-promotion']/div[1]/a"));
		List<WebElement> SecondaryOverlayIcon = driver.findElement(By.xpath(TariffTile))
				.findElements(By.xpath("//div[@id='qa-promotion']/div[2]/a"));

		String PrimaryOverlayRecommendedSection = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"PrimaryOverlayRecommendedSection");
		String SecondaryOverlayRecommendedSection = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"SecondaryOverlayRecommendedSection");

		if (PrimaryOverlayRecommendedSection.equals("Y")) {
			if (PrimaryOverlayIcon.size() > 0) {
				executor.executeScript("arguments[0].click();", PrimaryOverlayIcon.get(0));
				log.debug("Clicked on primary OverlayIcon");
				Thread.sleep(5000);
				for (String winHandle : driver.getWindowHandles()) {
					driver.switchTo().window(winHandle);
					log.debug("Inside the overlay for the selected tariff");
				}
				Thread.sleep(5000);
				log.debug("Text inside the primary overlay is :" + '\n'
						+ driver.findElement(By
								.xpath("//div[contains(@class, 'overlay-box tariff-tile-info-promo-overlay')]/div/h3"))
								.getText());
				closeOverlayIconTEpage();
			} else {
				Assert.fail("Primary Overlay Icon not present");
			}
		} else if (PrimaryOverlayRecommendedSection.equals("N")) {
			if (PrimaryOverlayIcon.size() == 0) {
				log.debug("No Primary overlay is configured");
			} else {
				Assert.fail("Primary overlay is present though it is not configured");
			}
		}

		if (SecondaryOverlayRecommendedSection.equals("Y")) {
			if (SecondaryOverlayIcon.size() > 0) {
				executor.executeScript("arguments[0].click();", SecondaryOverlayIcon.get(0));
				log.debug("Clicked on Secondary OverlayIcon");
				Thread.sleep(5000);
				for (String winHandle : driver.getWindowHandles()) {
					driver.switchTo().window(winHandle);
					log.debug("Inside the overlay for the selected tariff");

				}
				log.debug("Text inside the secondary overlay is :" + '\n'
						+ driver.findElement(By
								.xpath("//div[contains(@class, 'overlay-box tariff-tile-info-promo-overlay')]/div/h3"))
								.getText());
				closeOverlayIconTEpage();
			} else {
				Assert.fail("Secondary Overlay Icon not present");
			}
		} else if (SecondaryOverlayRecommendedSection.equals("N")) {
			if (SecondaryOverlayIcon.size() == 0) {
				log.debug("No Secondary overlay is configured");
			} else {
				Assert.fail("Secondary overlay is present though it is not configured");
			}
		}
	}

	public static void closeOverlayIconTEpage() {
		log.debug('\n' + "To close Overlay Icon TE page");
		List<WebElement> close = driver.findElements(By.xpath(
				"//div[contains(@class, 'overlay-box tariff-tile-info-promo-overlay')]/div/a[@class='boxclose']"));
		if (close.size() > 0) {
			executor.executeScript("arguments[0].click();", close.get(0));
			log.debug("Clicked on close button in the overlay");
		} else {
			Assert.fail("No close button present");
		}
	}

	public static void closeOverlayIconBasketpage() {
		log.debug('\n' + "To close Overlay Icon Basket page ");
		List<WebElement> closeP = driver.findElements(
				By.xpath("//div[contains(@class, 'overlay-box primary-promo-overlay')]/div/a[@class='boxclose']"));

		List<WebElement> closeS = driver.findElements(
				By.xpath("//div[contains(@class, 'overlay-box additional-promo-overlay')]/div/a[@class='boxclose']"));

		if (closeP.size() > 0) {
			executor.executeScript("arguments[0].click();", closeP.get(0));
			log.debug("Clicked on close button in the overlay");
		} else if (closeS.size() > 0) {
			executor.executeScript("arguments[0].click();", closeS.get(0));
			log.debug("Clicked on close button in the overlay");
		} else {
			Assert.fail("No close button present");
		}
	}

	public static void verifyPromotionalRibbonDisplayedBasketpage() {
		log.debug('\n' + "Verify Promotional Ribbon is Displayed in Basket page");

		String PrimaryPromotionRibbon = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"PrimaryPromotionRibbon");
		String SecondaryPromotionRibbon = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"SecondaryPromotionRibbon");

		if (PrimaryPromotionRibbon.equals("Y")) {
			if (pageobjects.BasketPage.PrimaryPromotion.isDisplayed()) {
				log.debug("Primary Promotion ribbon is present");
				log.debug("Text in Primary promotion ribbon is " + pageobjects.BasketPage.PrimaryPromotion.getText());
			} else {
				Assert.fail("Primary Promotion ribbon is not present");
			}
		} else if (PrimaryPromotionRibbon.equals("N")) {
			log.debug("No Primary ribbon is configured");
		}

		if (SecondaryPromotionRibbon.equals("Y")) {
			if (pageobjects.BasketPage.SecondaryPromotion.isDisplayed()) {
				log.debug("Secondary Promotion ribbon is present");
				log.debug(
						"Text in secondary promotion ribbon is " + pageobjects.BasketPage.SecondaryPromotion.getText());
			} else {
				Assert.fail("Secondary Promotion ribbon is not present");
			}
		} else if (SecondaryPromotionRibbon.equals("N")) {
			log.debug("No Secondary ribbon is configured");
		}
	}

	public static void verifyOverlayIconIsDisplayedBasketpage() {
		log.debug('\n' + "Verify Overlay Icon Is Displayed in Basket page");
		if (pageobjects.BasketPage.PrimaryPromotionOverlay.isDisplayed()) {
			log.debug("Overlay icon is present in primary promotion");
		} else {
			Assert.fail("Overlay icon is not present in primary promotion");
		}
	}

	public static void clickOnOverlayIconBasketpage() throws Exception {
		log.debug('\n' + "To click On Overlay Icon in Basket page");

		List<WebElement> PrimaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]"));
		List<WebElement> SecondaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]"));
		List<WebElement> PrimaryPromotionOverlayList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]/a"));
		List<WebElement> SecondaryPromotionOverlayList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]/a"));

		String PrimaryOverlay = (String) Filereadingutility.getPropertyValue(RunTimeFilePath, "PrimaryOverlay");
		String SecondaryOverlay = (String) Filereadingutility.getPropertyValue(RunTimeFilePath, "SecondaryOverlay");

		if (PrimaryOverlay.equals("Y")) {
			if (PrimaryPromotionalWrapperList.size() > 0) {
				if (PrimaryPromotionalWrapperList.get(0).getAttribute("class").contains("primary promotion")) {
					if (PrimaryPromotionOverlayList.size() > 0) {
						executor.executeScript("arguments[0].click();", PrimaryPromotionOverlayList.get(0));
						log.debug("Clicked on overlay icon present in primary promotion in basket page");
						Thread.sleep(5000);
						for (String winHandle : driver.getWindowHandles()) {
							driver.switchTo().window(winHandle);
							log.debug("Inside the overlay for the selected tariff");
							log.debug("Text inside overlay is :" + '\n'
									+ driver.findElement(By.xpath(
											"//div[contains(@class, 'overlay-box primary-promo-overlay')]/div/h3"))
											.getText());
						}
						Thread.sleep(5000);
						closeOverlayIconBasketpage();
					}
				}
			} else {
				Assert.fail("Primary Promotion ribbon is not present in basket page");
			}
		} else if (PrimaryOverlay.equals("N")) {
			if (PrimaryPromotionOverlayList.size() == 0) {
				log.debug("No Primary overlay is configured");
			} else {
				Assert.fail("Primary overlay is present though it is not configured");
			}
		}

		if (SecondaryOverlay.equals("Y")) {
			if (SecondaryPromotionalWrapperList.size() > 0 && SecondaryPromotionOverlayList.size() > 0) {
				if (SecondaryPromotionalWrapperList.get(0).getAttribute("class").contains("promotion secondary")) {
					executor.executeScript("arguments[0].click();", SecondaryPromotionOverlayList.get(0));
					log.debug("Clicked on overlay icon present in secondary promotion in Basket page");
					for (String winHandle : driver.getWindowHandles()) {
						driver.switchTo().window(winHandle);
						log.debug("Inside the overlay for the selected tariff");
						log.debug("Text inside overlay is :" + '\n'
								+ driver.findElement(By.xpath("//div[@class='box-header']/h3")).getText());
					}
					closeOverlayIconBasketpage();
				}
			} else {
				Assert.fail("Secondary Promotion ribbon is not present in basket page");
			}
		} else if (SecondaryOverlay.equals("N")) {
			if (SecondaryPromotionOverlayList.size() == 0) {
				log.debug("No Secondary overlay is configured");
			} else {
				Assert.fail("Secondary overlay is present though it is not configured");
			}
		}
	}

	public static void verifyPromotionalRibbonDisplayedMyPackageSection() {
		log.debug('\n' + "Verify Promotional Ribbon Displayed in MyPackage Section");
		List<WebElement> PrimaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]"));
		List<WebElement> SecondaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]"));

		String PrimaryPromotionRibbon = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"PrimaryPromotionRibbon");
		String SecondaryPromotionRibbon = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"SecondaryPromotionRibbon");

		if (PrimaryPromotionRibbon.equals("Y")) {
			if (PrimaryPromotionalWrapperList.size() > 0) {
				if (PrimaryPromotionalWrapperList.get(0).getAttribute("class").contains("primary promotion")) {
					log.debug("Primary Promotion ribbon is present in My package section");
					log.debug("Text in Primary promotion ribbon is " + PrimaryPromotionalWrapperList.get(0).getText());
				}
			} else {
				Assert.fail("Primary Promotion ribbon is not present");
			}
		} else if (PrimaryPromotionRibbon.equals("N")) {
			if (PrimaryPromotionalWrapperList.size() == 0) {
				log.debug("No primary ribbon is configured");
			} else {
				Assert.fail("Primary ribbon is present though it is not configured");
			}
		}

		if (SecondaryPromotionRibbon.equals("Y")) {
			if (SecondaryPromotionalWrapperList.size() > 0) {
				if (SecondaryPromotionalWrapperList.get(0).getAttribute("class").contains("promotion secondary")) {
					log.debug("Secondary Promotion ribbon is present in My package section");
					log.debug("Text in Secondary promotion ribbon is "
							+ SecondaryPromotionalWrapperList.get(0).getText());
				}
			} else {
				Assert.fail("Secondary Promotion ribbon is not present");
			}
		} else if (SecondaryPromotionRibbon.equals("N")) {
			if (SecondaryPromotionalWrapperList.size() == 0) {
				log.debug("No Secondary ribbon is configured");
			} else {
				Assert.fail("Secondary ribbon is present though it is not configured");
			}
		}
	}

	public static void verifyPromotionalRibbonDisplayedMyPackageSectionInUpgrade() {
		log.debug('\n' + "Verify Promotional Ribbon Displayed in MyPackage Section in upgrade");
		List<WebElement> PrimaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]"));
		List<WebElement> SecondaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]"));

		String PrimaryPromotionRibbonRecommendedSection = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"PrimaryPromotionRibbonRecommendedSection");
		String SecondaryPromotionRibbonRecommendedSection = (String) Filereadingutility
				.getPropertyValue(RunTimeFilePath, "SecondaryPromotionRibbonRecommendedSection");

		if (PrimaryPromotionRibbonRecommendedSection.equals("Y")) {
			if (PrimaryPromotionalWrapperList.size() > 0) {
				if (PrimaryPromotionalWrapperList.get(0).getAttribute("class").contains("primary promotion")) {
					log.debug("Primary Promotion ribbon is present in My package section");
					log.debug("Text in Primary promotion ribbon is " + PrimaryPromotionalWrapperList.get(0).getText());
				}
			} else {
				Assert.fail("Primary Promotion ribbon is not present");
			}
		} else if (PrimaryPromotionRibbonRecommendedSection.equals("N")) {
			if (PrimaryPromotionalWrapperList.size() == 0) {
				log.debug("No primary ribbon is configured");
			} else {
				Assert.fail("Primary ribbon is present though it is not configured");
			}
		}

		if (SecondaryPromotionRibbonRecommendedSection.equals("Y")) {
			if (SecondaryPromotionalWrapperList.size() > 0) {
				if (SecondaryPromotionalWrapperList.get(0).getAttribute("class").contains("promotion secondary")) {
					log.debug("Secondary Promotion ribbon is present in My package section");
					log.debug("Text in Secondary promotion ribbon is "
							+ SecondaryPromotionalWrapperList.get(0).getText());
				}
			} else {
				Assert.fail("Secondary Promotion ribbon is not present");
			}
		} else if (SecondaryPromotionRibbonRecommendedSection.equals("N")) {
			if (SecondaryPromotionalWrapperList.size() == 0) {
				log.debug("No Secondary ribbon is configured");
			} else {
				Assert.fail("Secondary ribbon is present though it is not configured");
			}
		}
	}

	public static void clickOnOverlayIconMyPackageSection() throws Exception {
		log.debug('\n' + "To click On Overlay Icon in MyPackage Section");

		List<WebElement> PrimaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]"));
		List<WebElement> SecondaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]"));
		List<WebElement> PrimaryPromotionOverlayList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]/a"));
		List<WebElement> SecondaryPromotionOverlayList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]/a"));

		String PrimaryOverlay = (String) Filereadingutility.getPropertyValue(RunTimeFilePath, "PrimaryOverlay");
		String SecondaryOverlay = (String) Filereadingutility.getPropertyValue(RunTimeFilePath, "SecondaryOverlay");

		if (PrimaryOverlay.equals("Y")) {
			if (PrimaryPromotionalWrapperList.size() > 0) {
				if (PrimaryPromotionOverlayList.size() > 0) {
					executor.executeScript("arguments[0].click();", PrimaryPromotionOverlayList.get(0));
					log.debug("Clicked on overlay icon present in primary promotion in My package section");
					Thread.sleep(5000);
					for (String winHandle : driver.getWindowHandles()) {
						driver.switchTo().window(winHandle);
						log.debug("Inside the overlay for the selected tariff");
						log.debug("Text inside overlay is :" + '\n'
								+ driver.findElement(
										By.xpath("//div[contains(@class, 'overlay-box primary-promo-overlay')]/div/h3"))
										.getText());
					}
					Thread.sleep(5000);
					closeOverlayIconBasketpage();
				}
			} else {
				Assert.fail("Primary Promotion ribbon is not present");
			}
		} else if (PrimaryOverlay.equals("N")) {
			if (PrimaryPromotionOverlayList.size() == 0) {
				log.debug("No Primary overlay is configured");
				log.debug("No Primary overlay is configured");
			} else {
				Assert.fail("Primary overlay is present though it is not configured");
			}
		}

		if (SecondaryOverlay.equals("Y")) {
			if (SecondaryPromotionalWrapperList.size() > 0 && SecondaryPromotionOverlayList.size() > 0) {
				if (SecondaryPromotionalWrapperList.get(0).getAttribute("class").contains("promotion secondary")) {
					executor.executeScript("arguments[0].click();", SecondaryPromotionOverlayList.get(0));
					log.debug("Clicked on overlay icon present in secondary promotion in My package section");
					Thread.sleep(5000);
					for (String winHandle : driver.getWindowHandles()) {
						driver.switchTo().window(winHandle);
						log.debug("Inside the overlay for the selected tariff");
						log.debug("Text inside overlay is :" + '\n'
								+ driver.findElement(By.xpath("//div[@class='box-header']/h3")).getText());
					}
					Thread.sleep(5000);
					closeOverlayIconBasketpage();
				}
			} else {
				Assert.fail("Secondary Promotion ribbon is not present");
			}
		} else if (SecondaryOverlay.equals("N")) {
			if (SecondaryPromotionOverlayList.size() == 0) {
				log.debug("No Secondary overlay is configured");
			} else {
				Assert.fail("Secondary overlay is present though it is not configured");
			}

		}
	}

	public static void clickOnOverlayIconMyPackageSectionUpgrade() throws Exception {
		log.debug('\n' + "To click On Overlay Icon in MyPackage Section");

		List<WebElement> PrimaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]"));
		List<WebElement> SecondaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]"));
		List<WebElement> PrimaryPromotionOverlayList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]/a"));
		List<WebElement> SecondaryPromotionOverlayList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]/a"));

		String PrimaryOverlayRecommendedSection = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"PrimaryOverlayRecommendedSection");
		String SecondaryOverlayRecommendedSection = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
				"SecondaryOverlayRecommendedSection");

		if (PrimaryOverlayRecommendedSection.equals("Y")) {
			if (PrimaryPromotionalWrapperList.size() > 0) {
				if (PrimaryPromotionOverlayList.size() > 0) {
					executor.executeScript("arguments[0].click();", PrimaryPromotionOverlayList.get(0));
					log.debug("Clicked on overlay icon present in primary promotion in My package section");
					Thread.sleep(5000);
					for (String winHandle : driver.getWindowHandles()) {
						driver.switchTo().window(winHandle);
						log.debug("Inside the overlay for the selected tariff");
						log.debug("Text inside overlay is :" + '\n'
								+ driver.findElement(
										By.xpath("//div[contains(@class, 'overlay-box primary-promo-overlay')]/div/h3"))
										.getText());
					}
					Thread.sleep(5000);
					closeOverlayIconBasketpage();
				}
			} else {
				Assert.fail("Primary Promotion ribbon is not present");
			}
		} else if (PrimaryOverlayRecommendedSection.equals("N")) {
			if (PrimaryPromotionOverlayList.size() == 0) {
				log.debug("No Primary overlay is configured");
			} else {
				Assert.fail("Primary overlay is present though it is not configured");
			}
		}

		if (SecondaryOverlayRecommendedSection.equals("Y")) {
			if (SecondaryPromotionalWrapperList.size() > 0 && SecondaryPromotionOverlayList.size() > 0) {
				if (SecondaryPromotionalWrapperList.get(0).getAttribute("class").contains("promotion secondary")) {
					executor.executeScript("arguments[0].click();", SecondaryPromotionOverlayList.get(0));
					log.debug("Clicked on overlay icon present in secondary promotion in My package section");
					Thread.sleep(10000);
					for (String winHandle : driver.getWindowHandles()) {
						driver.switchTo().window(winHandle);
						log.debug("Inside the overlay for the selected tariff");
						Thread.sleep(3000);
						log.debug("Text inside overlay is :" + '\n'
								+ driver.findElement(By.xpath(
										"//div[contains(@class, 'overlay-box additional-promo-overlay')]/div/h3"))
										.getText());
					}
					Thread.sleep(5000);
					closeOverlayIconBasketpage();
				}
			} else {
				Assert.fail("Secondary Promotion ribbon is not present");
			}
		} else if (SecondaryOverlayRecommendedSection.equals("N")) {
			if (SecondaryPromotionOverlayList.size() == 0) {
				log.debug("No Secondary overlay is configured");
			} else {
				Assert.fail("Secondary overlay is present though it is not configured");
			}

		}

	}

	public static void RecyclesectionDisplayed() throws InterruptedException {
		// pageobjects.UpgradeCustomerPage.RecycleWidget.click();
		if (driver.findElement(By.id("newRecycleOptionsTile")).isDisplayed()) {
			System.out.println("Upgrade and Recycle options is displayed");
			driver.findElement(By.xpath("//a[@ng-click='selectRecycleDevice();']")).click();
			System.out.println("Clicked on the choose your device link");
		} else {
			Assert.fail("Unable to verify recycle options");
		}
	}

	public static void SelectRecycleContinueToUpgrade() {
		// Clicking on Recycle and get up to £54.00 credit
		System.out.println("in Select recycle an continue to upgrade function");
		driver.findElement(By.id("recycleCredit")).click();
		System.out.println("Clicked on Radio button next to Recycle and get up to XXXX credit");
		driver.findElement(By.xpath("//button[contains(text(),'upgrade now')]")).click();
		System.out.println("Clicked on upgrade now button");
	}

	public static void selectTariff() {
		System.out.println("In Select Tariff function");
		driver.findElement(By.xpath("//div[contains(@class, 'grid-tile')]/div/button[@id='callToAction'][1]")).click();
		System.out.println("Completed Select Tariff function");
	}

	public static void yourSim() {
		try {
			System.out.println("In your Sim Section");
			System.out.println("Choosing need new sim");
			WebElement needNewSimRadio = driver.findElement(By.xpath("//input[@id='needNewSim']"));
			((JavascriptExecutor) driver).executeScript("arguments[0].click();", needNewSimRadio);

			// driver.findElement(By.xpath("//input[@id='needNewSim']")).click();
			System.out.println("Selected need new sim radio button");
			driver.findElement(By.xpath("//*[@id='confirmSim']")).click();
			System.out.println("Completed your sim  function");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to click on element " + e.getStackTrace());
		}
	}

	public static void addAndGoToBasket() {
		System.out.println("In addAndGoToBasket Section");
		// driver.findElement(By.xpath("//*[@id='qa-proceed-to-basket']")).click();
		WebElement BasketButton = driver.findElement(By.xpath("//*[@id='qa-proceed-to-basket']"));
		((JavascriptExecutor) driver).executeScript("arguments[0].click();", BasketButton);
		System.out.println("Compelted AddandGotoBasket Section");

	}

	public static void Otac(String arg) {
		System.out.println("In Otac Section page");
		if (arg.contains("skip")) {
			driver.findElement(By.xpath("//a[@id='skip-this-step']")).click();
			System.out.println("Clicked on skip this step");
			System.out.println("Selected a Random Tariff");
		}
	}

	public static void NotYourDevice() throws InterruptedException {
		// pageobjects.UpgradeCustomerPage.RecycleWidget.click();
		Thread.sleep(8000);
		System.out.println("in not your device function");
		FluentWait<WebDriver> wait = new FluentWait<WebDriver>(driver);
		wait.pollingEvery(250, TimeUnit.MILLISECONDS);
		wait.withTimeout(2, TimeUnit.SECONDS);
		Function<WebDriver, Boolean> function = new Function<WebDriver, Boolean>() {
			public Boolean apply(WebDriver arg0) {

				JavascriptExecutor js = (JavascriptExecutor) driver;
				WebElement notMyDevice = arg0
						.findElement(By.xpath("//div[@class='recycle-device not-your-device-box']/a"));
				js.executeScript("arguments[0].click();", notMyDevice);

				if (notMyDevice.isEnabled()) {
					return true;
				}
				return false;
			}
		};
		wait.until(function);
		Thread.sleep(5000);
		System.out.println("Clicked on the Not your device link");

	}

	public static void SelectMakeModelandNetwork(String Make, String Model, String Network)
			throws InterruptedException {
		JavascriptExecutor js = (JavascriptExecutor) driver;

		if (Make.contains("Apple")) {
			WebElement Make1 = pageobjects.UpgradeCustomerPage.Make;
			js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Make1);
			new Select(Make1).selectByVisibleText("Apple");
			Thread.sleep(3000);
			System.out.println("Selected Apple as Make");
			log.debug("Selected Apple as Make");

			// Validating for models
			if (Model.contains("Iphone7")) {
				System.out.println("in selecting model");
				WebElement Model1 = pageobjects.UpgradeCustomerPage.Model;
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Model1);
				new Select(Model1).selectByVisibleText("iPhone 7 32GB");
				Thread.sleep(3000);
				System.out.println("Selected model completed");
				// Validating for Network
				if (Network.contains("Orange")) {
					System.out.println("in selecting Network");
					WebElement Network1 = pageobjects.UpgradeCustomerPage.Network;
					js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Network1);
					new Select(Network1).selectByVisibleText("Orange");
					System.out.println("Selected Orange completed");
				} else if (Network.contains("EE")) {
					WebElement Network1 = pageobjects.UpgradeCustomerPage.Network;
					js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Network1);
					new Select(Network1).selectByVisibleText("EE");
				}

			}
			if (Model.contains("Iphone6S")) {
				WebElement Model1 = pageobjects.UpgradeCustomerPage.Model;
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Model1);
				new Select(Model1).selectByVisibleText("iPhone 6S 32GB");
				Thread.sleep(3000);

				// Validating for Network
				if (Network.contains("Orange")) {
					WebElement Network1 = pageobjects.UpgradeCustomerPage.Network;
					js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Network1);
					new Select(Network1).selectByVisibleText("Orange");
				} else if (Network.contains("EE")) {
					WebElement Network1 = pageobjects.UpgradeCustomerPage.Network;
					js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Network1);
					new Select(Network1).selectByVisibleText("EE");
				}

			}
		}

	}

	public static void updateDeviceButton() throws InterruptedException {
		System.out.println("Going to click updateDeviceButton button");
		pageobjects.UpgradeCustomerPage.UpdateDevice.click();
		Thread.sleep(4000);
		System.out.println("Completed updateDeviceButton function");
	}

	public static void refundableOptionSelect() throws InterruptedException {
		System.out.println("Going to click refundableOptionSelect button");
		pageobjects.UpgradeCustomerPage.RefundableOptionbyCredit.click();
		Thread.sleep(4000);
		System.out.println("Selected refundable by credit option");
		/*
		 * pageobjects.UpgradeCustomerPage.ContinuetoUpgrade.click();
		 * System.out.println("Selected continue to upgrade button");
		 */
		System.out.println("Completed refundableOptionSelect function");

	}

	public static boolean VerifyAccurateQuotedisplay() throws InterruptedException {
		System.out.println("Going to verify VerifyAccurateQuotedisplay function");
		pageobjects.UpgradeCustomerPage.GetAccurateQuoteSectionDisplay.getText();
		System.out.println("Completed verify VerifyAccurateQuotedisplay function");
		Thread.sleep(4000);
		return true;

	}

	public static void getAccurateQuote() throws InterruptedException {
		System.out.println("Going to enter getAccurateQuote function");
		Thread.sleep(4000);
		pageobjects.UpgradeCustomerPage.GetAccurateQuote.click();
		System.out.println("Clicked on 'yes, get accurate quote' under 'is your damaged section?' ");
		Thread.sleep(4000);
	}

	public static void questionnaire() throws InterruptedException {
		JavascriptExecutor js = (JavascriptExecutor) driver;

		// Set<String> handle= driver.getWindowHandles();//Return a set of
		// window handle.swi
		for (String handle : driver.getWindowHandles()) {

			driver.switchTo().window(handle);
		}
		Thread.sleep(4000);
		System.out.println(driver.findElement(By.xpath("//*[@id='redeem-questionnaire']/p[@class='info']")).getText());

		// Select first questionnaire - Is your phone fully functional
		WebElement Question0 = driver
				.findElement(By.xpath("//select[@id='question0'][@class='select-questionnaire ng-pristine ng-valid']"));
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Question0);
		new Select(Question0).selectByValue("0");
		Thread.sleep(8000);

		// Select Second questionaire - Does your phone have any damage
		WebElement Question1 = driver
				.findElement(By.xpath("//select[@id='question1'][@class='select-questionnaire ng-pristine ng-valid']"));
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Question1);
		new Select(Question1).selectByValue("0");

		// Select Third questionaire - Could your phone be water damaged
		WebElement Question2 = driver
				.findElement(By.xpath("//select[@id='question2'][@class='select-questionnaire ng-pristine ng-valid']"));
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Question2);
		new Select(Question2).selectByValue("0");

		// Select Second questionaire - Remove icloud from device
		WebElement Question3 = driver
				.findElement(By.xpath("//select[@id='question3'][@class='select-questionnaire ng-pristine ng-valid']"));
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Question3);
		new Select(Question3).selectByValue("0");

		driver.findElement(By.id("continue-with-accurate-quote")).click();
		System.out.println("Completed questionaire");

		Thread.sleep(8000);
	}

	//////////////////////////////////// September
	//////////////////////////////////// Release///////////////////////////////////////////////

	public static void DisplayYourSimCardSection() throws Exception {

		log.debug('\n' + "Validate Your Sim section is displayed");

		if (pageobjects.UpgradeCustomerPage.YourSimHeading.isDisplayed()) {
			System.out.println(
					"The Your sim section is displayed" + pageobjects.UpgradeCustomerPage.YourSimHeading.getText());
			log.debug("The Your sim section is displayed");
		}

		else
			System.out.println("The Your sim section us not diplayed");
		log.debug("The Your sim section is not displayed");

	}

	public static void RadioButtonNotSelectedByDefault() throws Exception {

		log.debug('\n' + "Validate Your No option is selected by default");

		boolean actualValue = UpgradeCustomerPage.NeedNewSimRadioButton.isSelected();
		boolean actualValue1 = UpgradeCustomerPage.DontNeedNewSimRadioButton.isSelected();
		if ((actualValue && actualValue1) != true) {
			System.out.println("Radio button is not selected");
			log.debug("Radio button is not selected by default");
		} else {
			System.out.println("Radio button is selected by default");
		}

	}

	public static void ConfirmButtonNotDisplayed() throws Exception {

		log.debug('\n' + "Validate Confirm button not displayed");

		String YourSimSectionContainer = UpgradeCustomerPage.YourSimSection.getText();
		System.out.println(YourSimSectionContainer);
		boolean ConfimNotDisplayed = YourSimSectionContainer.contains("Confirm");
		if (ConfimNotDisplayed == false) {
			System.out.println("Confirm button is not displayed");
			log.debug("Confirm button is not displayed");
		} else {
			System.out.println("Confirm button is displayed");
			log.debug("Confirm button is displayed");
		}

	}

	public static void YourSimSectionCopyText() throws Exception {

		String YouSimCopyText = UpgradeCustomerPage.YourSimSectionCopyText.getText();
		System.out.println(YouSimCopyText);
		String ActualCopy = ("You’ll need a nano sim to use your new device." + System.lineSeparator()
				+ "Your current sim might already be a nano sim. If it is, you can just pop it straight into your new device. It’s the quickest and easiest way to get set up."
				+ System.lineSeparator()
				+ "If your current sim isn’t a nano sim, you’ll need a new one. Tick ‘I need a new sim’ and we’ll send you one with your device. Then just fill out the sim swap form when it arrives.");
		System.out.println(ActualCopy);
		if (YouSimCopyText.equals(ActualCopy))

		{
			System.out.println("The valid copytext is displayed" + YouSimCopyText);
			log.debug("The valid copytext is displayed");
		} else
			System.out.println("The valid copytext is not displayed");

	}

	public static void TwoOptionsDisplayed() throws Exception {

		String OptOne = UpgradeCustomerPage.YourSimOptionsOne.getText();
		String OptTwo = UpgradeCustomerPage.YourSimOptionsTwo.getText();
		if (UpgradeCustomerPage.YourSimOptionsOne.isDisplayed()
				&& UpgradeCustomerPage.YourSimOptionsTwo.isDisplayed()) {
			System.out.printf("The Two Options are displayed" + '\n', OptOne);
			System.out.println(OptTwo);
		}

		else
			System.out.println("The two options are not displayed");

	}

	public static void SimSwapLinkDisplayed() throws Exception {

		if (UpgradeCustomerPage.SimSwaplink.isDisplayed()) {
			System.out.println("The Sim Swap link is displayed");
			log.debug("The Sim Swap link is displayed");
		} else {
			System.out.println("The Sim Swap form link is displayed");
			log.debug("The Sim Swap form link is displayed");
		}

	}

	public static void ClickOnSimSwapLink() throws Exception {

		UpgradeCustomerPage.SimSwaplink.click();
		Thread.sleep(2000);

		// driver.close();
		for (String winHandle : driver.getWindowHandles()) {
			driver.switchTo().window(winHandle);
		}

		String simswapurl = driver.getCurrentUrl();
		System.out.println(simswapurl);
		if (simswapurl.contains("swapmysim")) {
			System.out.println("The Swap you sim page is displayed");

		} else {

			System.out.println("The Swap my sim page is not displayed");
		}
		driver.close();
		Thread.sleep(2000);
		for (String winHandle : driver.getWindowHandles()) {
			driver.switchTo().window(winHandle);
		}
		System.out.println(driver.getCurrentUrl());

	}

	public static void ClickIneedAsim() throws Exception {

		if (UpgradeCustomerPage.IneedAsimRadio.isDisplayed()) {
			UpgradeCustomerPage.IneedAsimRadio.click();
			log.debug("The I need a sim radio button is clicked");
		}

	}

	public static void ConfirmCTADisplayed() throws Exception {

		if (UpgradeCustomerPage.ConfirmCTA.isDisplayed()) {
			System.out.println("The Confirm CTA is displayed");
		} else
			System.out.println("The Confirm CTA is not displayed");
	}

	public static void ClickConfirmCTADisplayed() throws Exception {

		if (UpgradeCustomerPage.ConfirmCTA.isDisplayed()) {
			UpgradeCustomerPage.ConfirmCTA.click();
			log.debug("The Confirm CTA is clicked");
		}
		Thread.sleep(3000);
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,150)", "");
	}

	public static void ClickIdontneedAsim() throws Exception {

		if (UpgradeCustomerPage.IdontNeedSimRadio.isDisplayed()) {
			UpgradeCustomerPage.IdontNeedSimRadio.click();
			log.debug("The I need a sim radio button is clicked");
		}

	}

	public static void clickTakeOfferAndUpgrade() {
		System.out.println("Going to click on Take Offer and Upgrade");
		if (UpgradeCustomerPage.TakeOfferAndUpgrade.size() > 0) {
			UpgradeCustomerPage.TakeOfferAndUpgrade.get(0).click();
		} else {
			System.out.println("Take offer and upgrade button is not present or enabled");
		}
	}

	public static void selectTariffFromRecommendedSection() {
		System.out.println("Going to select tariff from recommended section");
		executor.executeScript("arguments[0].click();", UpgradeCustomerPage.RandomTariffUpgrade);
	}

	public static void verifyBuyOutDisplayedInMyPackage() {
		System.out.println("verifyBuyOutDisplayedInMyPackage");
		String AcText1 = null, AcText2 = null, AcText3 = null, AcText4 = null, cost1 = null, cost2 = null;
		String ExText1 = null, ExText2 = null, ExText3 = null, ExText4 = null;
		AcText1 = UpgradeCustomerPage.BuyoutText1MyPkg.getText();
		AcText2 = UpgradeCustomerPage.BuyoutText2MyPkg.getText();
		AcText3 = UpgradeCustomerPage.BuyoutText3MyPkg.getText();
		AcText4 = UpgradeCustomerPage.BuyoutText4MyPkg.getText();
		cost1 = UpgradeCustomerPage.BuyoutCost1MyPkg.getText();
		cost2 = UpgradeCustomerPage.BuyoutCost2MyPkg.getText();

		ExText1 = "Left to pay on your existing device";
		ExText2 = "The balance still to pay on your current";
		ExText3 = "Upgrade on us";
		ExText4 = "We’ll pay off the rest of your Device Plan, and you can keep your current device. If your next airtime bill has already been scheduled, it may still be taken.";

		if (AcText1.equals(ExText1) && (AcText2.equals(ExText2) && (AcText3.equals(ExText3))
				&& (AcText4.equals(ExText4) && !cost1.isEmpty() && !cost2.isEmpty()))) {
			System.out.println("Buy out offer text is displayed as expected");
			System.out.println(AcText1 + "  " + cost1);
			System.out.println(AcText2);
			System.out.println(AcText3 + "  " + cost2);
			System.out.println(AcText4);

		} else {
			Assert.fail("Buy out text is not as expected");
		}

	}

	public static void verifyBuyOutDisplayedInBasketPage() {
		System.out.println("verifyBuyOutDisplayedInBasketPage");
		String AcText1 = null, AcText2 = null, AcText3 = null, AcText4 = null, cost1 = null, cost2 = null;
		String ExText1 = null, ExText2 = null, ExText3 = null, ExText4 = null;

		AcText1 = UpgradeCustomerPage.BuyOutText1BasketPage.getText();
		AcText2 = UpgradeCustomerPage.BuyOutText2BasketPage.getText();
		AcText3 = UpgradeCustomerPage.BuyOutText3BasketPage.getText();
		AcText4 = UpgradeCustomerPage.BuyOutText4BasketPage.getText();
		cost1 = UpgradeCustomerPage.BuyOutCost1BasketPage.getText();
		cost2 = UpgradeCustomerPage.BuyOutCost2BasketPage.getText();

		ExText1 = "Your Phone Plan balance";
		ExText2 = "This is the payment amount required for your current CCA account to be settled";
		ExText3 = "Upgrade on us";
		ExText4 = "We’ll pay off the rest of your Device Plan, and you can keep your current device. If your next airtime bill has already been scheduled, it may still be taken.";

		System.out.println(AcText1 + "   " + cost1);
		System.out.println(AcText2);
		System.out.println(AcText3 + "   " + cost2);
		System.out.println(AcText4);

		if (AcText1.equals(ExText1)
				&& (AcText2.equals(ExText2) && (AcText3.equals(ExText3)) && (AcText4.equals(ExText4)))) {
			System.out.println("Buy out offer text is displayed as expected");
			System.out.println("Your Phone Plan balance is " + cost1);
			System.out.println("Upgrade on us for " + cost2);
		} else {
			Assert.fail("Buy out text is not as expected");
		}
	}

	public static void verifyBuyOutDisplayed() {
		System.out.println("verify Buy Out is displayed");
		String BuyoutText = null, BuyoutCost = null, Title = null;
		BuyoutText = UpgradeCustomerPage.BuyOutTextOTACPage.getText();
		BuyoutCost = UpgradeCustomerPage.BuyOutCostOTACPage.getText();
		Title = driver.getTitle();

		if (!BuyoutText.isEmpty()) {
			System.out.println("Buy out Text displayed in \'" + Title + "\'page is " + BuyoutText);

		}

	}
}
