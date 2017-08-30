package actionsPerformed;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import helpers.Environment;

public class UpgradeCustomerPageActions extends Environment {
	String RunTimeFilePath = System.getProperty("user.dir") + "\\Configurations\\Properties\\Run.properties";
	static Logger log = Logger.getLogger("devpinoyLogger");
	static JavascriptExecutor executor = (JavascriptExecutor) driver;
	static int position = 0;
	static boolean greenpromotion = false;

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

	public static void selectDeviceInRecommendedDevicesSection(String devicename) {
		System.out.println("Select a device in recommended devices section");
		List<WebElement> DevicesName = pageobjects.UpgradeCustomerPage.DeviceNameRecommendedSection;
		WebElement SelectButton;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		String c = null;
		int k = 0;
		List<String> Devices = new ArrayList<String>();
		for (WebElement f : DevicesName) {
			Devices.add(f.getText());
		}
		System.out.println("passing device" + devicename);

		for (int i = 0; i < DevicesName.size(); i++) {
			if (DevicesName.get(i).getText().equals(devicename)) {
				System.out.println("Device name matches");
				k = i + 1;
				System.out.println("k :" + k);
				c = "(//div[@id='qa-recommendedDevicesTile']/a//div/button)[" + k + "]";
				System.out.println("xpath of button is" + c);
				SelectButton = driver.findElement(By.xpath(c));
				js.executeScript("arguments[0].click();", SelectButton);
			}
		}

	}

	public static void selectTariffWithRibbonAndOverlay(String Tariff) {
		System.out.println('\n' + "Function - selectTariffWithRibbonAndOverlay");
		List<WebElement> TariffList = driver.findElements(By.xpath("//div[@id='tariff-tile']/div[@id]"));
		System.out.println("TariffList size is " + TariffList.size());
		boolean flag = false;
		String TariffXpath = null;
		String TextOfTariffTile = null;
		String SelectBtnXpath = null;
		int i = 0;
		for (int j = 0; j < TariffList.size(); j++) {
			i = j + 1;
			TariffXpath = "(//div[@id='tariff-tile']/div[@id]/div/div[@class='price-block'])[" + i + "]";
			TextOfTariffTile = driver.findElement(By.xpath(TariffXpath)).getText();
			TextOfTariffTile = TextOfTariffTile.replace("£", "");
			TextOfTariffTile = TextOfTariffTile.replace("\n", "");
			TextOfTariffTile = TextOfTariffTile.replace(" ", "");

			if (TextOfTariffTile.contains(Tariff)) {
				position = i;
				System.out.println("Provided tariff is present in the list of tariffs");
				SelectBtnXpath = "(//button[@id='callToAction'])[" + i + "]";
				System.out.println("Going to select the given tariff :" + Tariff);
				driver.findElement(By.xpath(SelectBtnXpath)).click();
				flag = true;
			}
		}
		if (flag == false) {
			Assert.fail("Provided tariff is not present in the list of tariffs");
		}
	}

	public static void verifyPromotionalRibbonDisplayedTEpage(String Tariff) {
		System.out.println('\n' + "Function - verifyPromotionalRibbonDisplayedTEpage");
		String BluePromotionXpath = null;
		String GreenPromotionXpath = null;
		WebElement GreenPromotion = null;
		WebElement BluePromotion = null;
		List<WebElement> TariffList = driver.findElements(By.xpath("//div[@id='tariff-tile']/div[@id]"));
		System.out.println("TariffList size is " + TariffList.size());

		BluePromotionXpath = "(//div[@id='tariff-tile']/div[@id]//div[@class='blue-promotion'])[" + position + "]";
		BluePromotion = driver.findElement(By.xpath(BluePromotionXpath));
		if (BluePromotion.getText().isEmpty()) {
			Assert.fail("Promotion text not present for the selected tariff");
		} else {
			System.out.println("Promotion text is " + BluePromotion.getText());
		}
		GreenPromotionXpath = "(//div[@id='tariff-tile']/div[@id]//div[@class='green-promotion'])[" + position + "]";
		GreenPromotion = driver.findElement(By.xpath(GreenPromotionXpath));
		if (GreenPromotion.isDisplayed()) {
			greenpromotion = true;
			System.out.println("Secondary Promotion text is " + GreenPromotion.getText());
		}
	}

	public static void verifyOverlayIconIsDisplayedTEpage(String Tariff) {
		System.out.println('\n' + "Function - verifyOverlayIconIsDisplayedTEpage");
		System.out.println("Tariff for verifying overlay icon is " + Tariff);
		String TariffTile = null;
		TariffTile = "(//div[@id='tariff-tile']/div[@id])[" + position + "]";
		List<WebElement> TariffTileOverlay = driver.findElement(By.xpath(TariffTile))
				.findElements(By.xpath("//div/div/a[@class='tariff-information-overlay-icon ng-scope']"));
		if (TariffTileOverlay.size() < 0) {
			Assert.fail("No overlay is present for the selected tariff in the tariff tile");
		} else {
			System.out.println("Overlay is present for the selected tariff in the tariff tile as expected");
		}
	}

	public static void clickOnOverlayIconTEpage(String Tariff) throws Exception {
		System.out.println('\n' + "Function - clickOnOverlayIconTEpage");
		System.out.println("Tariff for verifying overlay icon is " + Tariff);

		String TariffTile = null;
		TariffTile = "(//div[@id='tariff-tile']/div[@id])[" + position + "]";
		List<WebElement> PrimaryOverlayIcon = driver.findElement(By.xpath(TariffTile))
				.findElements(By.xpath("//div[@class='blue-promotion']/div/a[1]"));
		List<WebElement> SecondaryOverlayIcon = driver.findElement(By.xpath(TariffTile))
				.findElements(By.xpath("//div[@class='blue-promotion']/div/a[2]"));

		if (PrimaryOverlayIcon.size() > 0) {
			executor.executeScript("arguments[0].click();", PrimaryOverlayIcon.get(0));
			System.out.println("Clicked on primary OverlayIcon");
			log.debug("Clicked on primary OverlayIcon");

			Thread.sleep(5000);

			for (String winHandle : driver.getWindowHandles()) {
				driver.switchTo().window(winHandle);
				log.debug("Inside the overlay for the selected tariff");
				System.out.println("Inside the overlay for the selected tariff");
			}
			Thread.sleep(5000);
			System.out.println("Text inside the primary overlay is :" + '\n'
					+ driver.findElement(
							By.xpath("//div[contains(@class, 'overlay-box tariff-tile-info-promo-overlay')]/div/h3"))
							.getText());
			closeOverlayIconTEpage();
		} else {
			Assert.fail("Primary Overlay Icon not present");
		}
		if (SecondaryOverlayIcon.size() > 0) {
			executor.executeScript("arguments[0].click();", SecondaryOverlayIcon.get(0));
			System.out.println("Clicked on Secondary OverlayIcon");
			log.debug("Clicked on Secondary OverlayIcon");

			Thread.sleep(5000);

			for (String winHandle : driver.getWindowHandles()) {
				driver.switchTo().window(winHandle);
				log.debug("Inside the overlay for the selected tariff");
				System.out.println("Inside the overlay for the selected tariff");
			}
			System.out.println("Text inside the secondary overlay is :" + '\n'
					+ driver.findElement(
							By.xpath("//div[contains(@class, 'overlay-box tariff-tile-info-promo-overlay')]/div/h3"))
							.getText());
			closeOverlayIconTEpage();
		} else {
			System.out.println("Secondary Overlay Icon not present");
		}
	}

	public static void closeOverlayIconTEpage() {
		System.out.println('\n' + "Function - closeOverlayIconTEpage");
		List<WebElement> close = driver.findElements(By.xpath(
				"//div[contains(@class, 'overlay-box tariff-tile-info-promo-overlay')]/div/a[@class='boxclose']"));
		if (close.size() > 0) {
			executor.executeScript("arguments[0].click();", close.get(0));
			System.out.println("Clicked on close button in the overlay");
		} else {
			Assert.fail("No close button present");
		}
	}

	public static void closeOverlayIconBasketpage() {
		System.out.println('\n' + "Function - closeOverlayIconBasketpage");
		List<WebElement> close = driver.findElements(
				By.xpath("//div[contains(@class, 'overlay-box primary-promo-overlay')]/div/a[@class='boxclose']"));
		if (close.size() > 0) {
			executor.executeScript("arguments[0].click();", close.get(0));
			System.out.println("Clicked on close button in the overlay");
		} else {
			Assert.fail("No close button present");
		}
	}

	public static void verifyPromotionalRibbonDisplayedBasketpage() {
		System.out.println('\n' + "Function - verifyPromotionalRibbonDisplayedBasketpage");
		if (pageobjects.BasketPage.PrimaryPromotion.isDisplayed()) {
			System.out.println("Primary Promotion ribbon is present");
			System.out.println(
					"Text in Primary promotion ribbon is " + pageobjects.BasketPage.PrimaryPromotion.getText());
		} else {
			Assert.fail("Primary Promotion ribbon is not present");
		}
		if (greenpromotion == true) {
			if (pageobjects.BasketPage.SecondaryPromotion.isDisplayed()) {
				System.out.println("Secondary Promotion ribbon is present");
				System.out.println(
						"Text in secondary promotion ribbon is " + pageobjects.BasketPage.SecondaryPromotion.getText());
			} else {
				Assert.fail("Secondary Promotion ribbon is not present");
			}
		}
	}

	public static void verifyOverlayIconIsDisplayedBasketpage() {
		System.out.println('\n' + "Function - verifyOverlayIconIsDisplayedBasketpage");
		if (pageobjects.BasketPage.PrimaryPromotionOverlay.isDisplayed()) {
			System.out.println("Overlay icon is present in primary promotion");
		} else {
			Assert.fail("Overlay icon is not present in primary promotion");
		}
	}

	public static void clickOnOverlayIconBasketpage() throws Exception {
		System.out.println('\n' + "Function - clickOnOverlayIconBasketpage");

		List<WebElement> PrimaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]"));
		List<WebElement> SecondaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]"));
		List<WebElement> PrimaryPromotionOverlayList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]/a"));
		List<WebElement> SecondaryPromotionOverlayList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]/a"));

		if (PrimaryPromotionalWrapperList.size() > 0) {
			if (PrimaryPromotionalWrapperList.get(0).getAttribute("class").contains("primary promotion")) {
				if (PrimaryPromotionOverlayList.size() > 0) {
					executor.executeScript("arguments[0].click();", PrimaryPromotionOverlayList.get(0));
					System.out.println("Clicked on overlay icon present in primary promotion in basket page");
					Thread.sleep(5000);
					for (String winHandle : driver.getWindowHandles()) {
						driver.switchTo().window(winHandle);
						log.debug("Inside the overlay for the selected tariff");
						System.out.println("Inside the overlay for the selected tariff");
						System.out.println("Text inside overlay is :" + '\n'
								+ driver.findElement(By.xpath("//div[contains(@class, 'overlay-box primary-promo-overlay')]/div/h3")).getText());
					}
					Thread.sleep(5000);
					closeOverlayIconBasketpage();
				}
			}
		} else {
			Assert.fail("Primary Promotion ribbon is not present in basket page");
		}

		if (greenpromotion == true) {
			if (SecondaryPromotionalWrapperList.size() > 0) {
				if (SecondaryPromotionalWrapperList.get(0).getAttribute("class").contains("promotion secondary")) {
					if (SecondaryPromotionOverlayList.size() > 0) {
						executor.executeScript("arguments[0].click();", SecondaryPromotionOverlayList.get(0));
						System.out.println("Clicked on overlay icon present in secondary promotion in Basket page");
						for (String winHandle : driver.getWindowHandles()) {
							driver.switchTo().window(winHandle);
							log.debug("Inside the overlay for the selected tariff");
							System.out.println("Inside the overlay for the selected tariff");
							System.out.println("Text inside overlay is :" + '\n'
									+ driver.findElement(By.xpath("//div[@class='box-header']/h3")).getText());
						}
						closeOverlayIconBasketpage();
					}
				} else {
					Assert.fail("Secondary Promotion ribbon is not present in basket page");
				}
			}
		} else if (greenpromotion == false) {
			System.out.println("No secondary promotional ribbon is present");
		}

	}

	public static void verifyPromotionalRibbonDisplayedMyPackageSection() {
		System.out.println('\n' + "Function - verifyPromotionalRibbonDisplayedMyPackageSection");
		List<WebElement> PrimaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]"));
		List<WebElement> SecondaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]"));

		if (PrimaryPromotionalWrapperList.size() > 0) {
			if (PrimaryPromotionalWrapperList.get(0).getAttribute("class").contains("primary promotion")) {
				System.out.println("Primary Promotion ribbon is present in My package section");
				System.out.println(
						"Text in Primary promotion ribbon is " + PrimaryPromotionalWrapperList.get(0).getText());
			} else {
				Assert.fail("Primary Promotion ribbon is not present");
			}
		}
		if (greenpromotion == true) {
			if (SecondaryPromotionalWrapperList.size() > 0) {
				if (SecondaryPromotionalWrapperList.get(0).getAttribute("class").contains("promotion secondary")) {
					System.out.println("Secondary Promotion ribbon is present in My package section");
					System.out.println("Text in Secondary promotion ribbon is "
							+ SecondaryPromotionalWrapperList.get(0).getText());
				} else {
					Assert.fail("Secondary Promotion ribbon is not present");
				}
			}
		} else if (greenpromotion == false) {
			System.out.println("No secondary promotional ribbon is present");
		}
	}

	public static void clickOnOverlayIconMyPackageSection() throws Exception {
		System.out.println('\n' + "Function - clickOnOverlayIconMyPackageSection");

		List<WebElement> PrimaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]"));
		List<WebElement> SecondaryPromotionalWrapperList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]"));
		List<WebElement> PrimaryPromotionOverlayList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]/a"));
		List<WebElement> SecondaryPromotionOverlayList = driver
				.findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]/a"));

		System.out.println("PrimaryPromotionalWrapperList.size()" + PrimaryPromotionalWrapperList.size());
		System.out.println("PrimaryPromotionOverlayList.size()" + PrimaryPromotionOverlayList.size());

		if (PrimaryPromotionalWrapperList.size() > 0) {
			if (PrimaryPromotionOverlayList.size() > 0) {
				System.out.println("PrimaryPromotionOverlayList.get(0)" + PrimaryPromotionOverlayList.get(0));
				executor.executeScript("arguments[0].click();", PrimaryPromotionOverlayList.get(0));
				System.out.println("Clicked on overlay icon present in primary promotion in My package section");
				Thread.sleep(5000);
				for (String winHandle : driver.getWindowHandles()) {
					driver.switchTo().window(winHandle);
					log.debug("Inside the overlay for the selected tariff");
					System.out.println("Inside the overlay for the selected tariff");
					System.out.println("Text inside overlay is :" + '\n'
							+ driver.findElement(By.xpath("//div[contains(@class, 'overlay-box primary-promo-overlay')]/div/h3")).getText());
				}
				Thread.sleep(5000);
				closeOverlayIconBasketpage();
			} else {
				Assert.fail("Primary Promotion ribbon is not present");
			}
		}
		if (greenpromotion == true) {
			if (SecondaryPromotionalWrapperList.size() > 0) {
				if (SecondaryPromotionalWrapperList.get(0).getAttribute("class").contains("promotion secondary")) {
					if (SecondaryPromotionOverlayList.size() > 0) {
						executor.executeScript("arguments[0].click();", SecondaryPromotionOverlayList.get(0));
						System.out.println(
								"Clicked on overlay icon present in secondary promotion in My package section");
						Thread.sleep(5000);
						for (String winHandle : driver.getWindowHandles()) {
							driver.switchTo().window(winHandle);
							log.debug("Inside the overlay for the selected tariff");
							System.out.println("Inside the overlay for the selected tariff");
							System.out.println("Text inside overlay is :" + '\n'
									+ driver.findElement(By.xpath("//div[@class='box-header']/h3")).getText());
						}
						Thread.sleep(5000);
						closeOverlayIconBasketpage();
					}
				} else {
					Assert.fail("Secondary Promotion ribbon is not present");
				}
			}
		} else if (greenpromotion == false) {
			System.out.println("No secondary promotional ribbon is present");
		}

	}
}