package actionsPerformed;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import helpers.Environment;
import helpers.Filereadingutility;
import helpers.setRuntimeProperty;

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
		 * System.out.println("Continue button is not there, it should be fine"
		 * );
		 * 
		 * }
		 */

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
		 * NotEligible_message.getText(), "You are not eligible to upgrade"); //
		 * bound to change System.out.println(
		 * "The error message is displayed as" +
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
		List<WebElement> DevicesName = pageobjects.UpgradeCustomerPage.DeviceNameRecommendedSection;
		WebElement SelectButton;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		String c = null;
		int k = 0;
		List<String> Devices = new ArrayList<String>();
		for (WebElement f : DevicesName) {
			Devices.add(f.getText());
		}
		log.debug("passing device" + devicename);

		for (int i = 0; i < DevicesName.size(); i++) {
			if (DevicesName.get(i).getText().equals(devicename)) {
				log.debug("Device name matches");
				k = i + 1;
				log.debug("k :" + k);
				c = "(//div[@id='qa-recommendedDevicesTile']/a//div/button)[" + k + "]";
				log.debug("xpath of button is" + c);
				SelectButton = driver.findElement(By.xpath(c));
				js.executeScript("arguments[0].click();", SelectButton);
			}
		}
		Thread.sleep(5000);
	}

	public static void selectTariffWithRibbonAndOverlay(String Tariff) {
		log.debug('\n' + "To select Tariff With Ribbon And Overlay");
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
			TextOfTariffTile = TextOfTariffTile.replace("�", "");
			TextOfTariffTile = TextOfTariffTile.replace("\n", "");
			TextOfTariffTile = TextOfTariffTile.replace(" ", "");

			if (TextOfTariffTile.contains(Tariff)) {
				position = i;
				log.debug("Provided tariff is present in the list of tariffs");
				SelectBtnXpath = "(//button[@id='callToAction'])[" + i + "]";
				log.debug("Going to select the given tariff :" + Tariff);
				driver.findElement(By.xpath(SelectBtnXpath)).click();
				flag = true;
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

			UpfrontPound = UpfrontPound.replace("�", "");
			MonthlyPound = MonthlyPound.replace("�", "");

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
									+ driver.findElement(By
											.xpath("//div[contains(@class, 'overlay-box primary-promo-overlay')]/div/h3"))
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
								+ driver.findElement(By
										.xpath("//div[contains(@class, 'overlay-box additional-promo-overlay')]/div/h3"))
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
}
