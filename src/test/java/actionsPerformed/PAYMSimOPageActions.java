package actionsPerformed;

import java.awt.AWTException;
import java.io.IOException;
import java.util.List;

import GlobalActions.scrollToAnElement;
import org.openqa.selenium.Keys;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import GlobalActions.Screenshots;
import helpers.Environment;

public class PAYMSimOPageActions extends Environment {
	final static Logger log = Logger.getLogger("PAYMSimOPageActions");

	// Below will Select the element under Phones Tab under 12 months and 30
	// days contract

	public static void ValidateContractLengths(String elementName)
			throws InterruptedException, IOException {
		// Assert.assertTrue(driver.getTitle().contains("30 Days");
		scrollToAnElement.scrollToElement(pageobjects.PAYMSimOPage.thirtydays);
		Screenshots.captureScreenshot();
		if (elementName.contains("30 Days")) {
			log.debug("The Contract length is " + pageobjects.PAYMSimOPage.thirtydays.getText());
			log.debug("The Contract length is " + pageobjects.PAYMSimOPage.thirtydays.getText());
			Screenshots.captureScreenshot();
			pageobjects.PAYMSimOPage.thirtydays.sendKeys(Keys.ENTER);
			Thread.sleep(10000);
			log.debug("Clicked on 30 Days contract tab");

		}
		if (elementName.contains("12 Months")) {

			log.debug("The Contract length is " + pageobjects.PAYMSimOPage.twelevemonths.getText());
			log.debug("The Contract length is " + pageobjects.PAYMSimOPage.twelevemonths.getText());
			Screenshots.captureScreenshot();
			pageobjects.PAYMSimOPage.twelevemonths.sendKeys(Keys.ENTER);
			Thread.sleep(10000);
			log.debug("Clicked on 12 Months contract tab");
		}

	}

	public static void SelectTariffPhonesTab(String elementName)
			throws InterruptedException, IOException {
		// Assert.assertTrue(driver.getTitle().contains("30 Days");

		if (elementName.contains("30 Days")) {
			log.debug("Selecting a Random Tariff under 30 days tab");
			log.debug("Selecting a Random Tariff under 30 days tab");
			pageobjects.PAYMSimOPage.thirtydays.sendKeys(Keys.ENTER);
			Thread.sleep(10000);
			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].click();",pageobjects.PAYMSimOPage.BuyNowRandomTariff30Months);
			Thread.sleep(5000);
			log.debug("Clicked on a Random Tariff");
		}
		if (elementName.contains("12 Months")) {
			log.debug("Selecting a Random Tariff under 12 Months tab");
			log.debug("Selecting a Random Tariff under 12 Months tab");
			pageobjects.PAYMSimOPage.twelevemonths.sendKeys(Keys.ENTER);
			Thread.sleep(10000);
			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].click();",pageobjects.PAYMSimOPage.BuyNowRandomTariff12Months);
			Thread.sleep(5000);
			log.debug("Clicked on a Random Tariff");
		}
		Screenshots.captureScreenshot();

	}

	public static void SelectRecommendedTariffPhonesTab(String elementName)
			throws InterruptedException, IOException {
		// Assert.assertTrue(driver.getTitle().contains("30 Days");

		if (elementName.contains("30 Days")) {
			log.debug("Selecting a Recommended Tariff under 30 days tab");
			log.debug("Selecting a Recommended Tariff under 30 days tab");
			pageobjects.PAYMSimOPage.thirtydays.sendKeys(Keys.ENTER);
			Thread.sleep(3000);
			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].click();",pageobjects.PAYMSimOPage.BuyNowPromotedTariff30Days);
			Thread.sleep(5000);
			log.debug("Selected a Recommended Tariff under 30 Days tab");
			log.debug("Clicked on a Recommended Tariff under 30 Days tab");
		}
		if (elementName.contains("12 Months")) {
			log.debug("Selecting a Recommended Tariff under 12 Months tab");
			log.debug("Selecting a Recommended Tariff under 12 Months tab");
			pageobjects.PAYMSimOPage.twelevemonths.sendKeys(Keys.ENTER);
			Thread.sleep(3000);
			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].click();",pageobjects.PAYMSimOPage.BuyNowPromotedTariff12Months);
			Thread.sleep(5000);
			log.debug("Selected a Recommended Tariff under 12 Months tab");
			log.debug("Clicked on a Recommended Tariff under 12 Months tab");
		}
		Screenshots.captureScreenshot();
	}

	public static void Elementverify(String elementName) throws InterruptedException, IOException {

		if (elementName.contains("12 Months")) {
			if (driver.findElements(By.xpath("//*[@id='id-12-months']/p/a")).size() != 0) {
				log.debug("12 month Contract length is Present");
			} else {
				log.debug("12 month Contract length is not available");
			}

		}

		if (elementName.contains("30 Days")) {
			if (driver.findElements(By.xpath("//*[@id='id-30-days']/p/a")).size() != 0) {
				log.debug("30 days Contract length is Present");
			} else {
				log.debug("30 days Contract length is not available");
			}
		}
		Screenshots.captureScreenshot();
	}

	public static void DisplayContent(String ElementName) throws IOException, InterruptedException {
		if (ElementName.equalsIgnoreCase("paymheader")) {
			log.debug("Pay monthly sims banner header - as per today is displayed :"
					+ pageobjects.SimFreeExtrasPage.Tariffvaladity.getText());

		} else {
			log.debug("The Tariff detail is  Absent and the Text is :"
					+ pageobjects.SimFreeExtrasPage.Tariffvaladity.getText());

		}
		Screenshots.captureScreenshot();
	}

	////////// ************Below were done for Jan
	////////// Release********************/////////////////

	public static void Sorting(String elementName) throws InterruptedException, IOException {
		List<WebElement> list = driver.findElements(By.xpath("//span[@class='pound'"));
		log.debug(list);

		// Modified on 10/03/2017- Nag

		if (elementName.contains("promotionprimary")) {
			if (driver.findElements(By.xpath("//*[@id='2906f2c0-ac58-4e64-b199-e8d0c21b36df']/div[4]")).size() != 0) {
				log.debug("Primary Promotion Element is present");
			} else {
				log.debug("Primary Promotion Element is NOT present");
			}

			if (elementName.contains("promotionsecondary")) {
				if (driver.findElements(By.xpath("//*[@id='2906f2c0-ac58-4e64-b199-e8d0c21b36df']/div[5]"))
						.size() != 0) {

					log.debug("Secondary Promotion Element is present");
				} else {
					log.debug("Secondary Promotion Element is NOT present");
				}

			}

		}
		Screenshots.captureScreenshot();
	}

	public static void elementSelected() throws IOException, InterruptedException {

		// Assert.assertEquals(true,
		// pageobjects.PAYMSimOPage.simphonetab.isSelected());
		// Assert.assertTrue("Assertion Failed: Sim Phone tab is not selected",
		// pageobjects.PAYMSimOPage.simphonetab.isSelected());
		if (pageobjects.PAYMSimOPage.simphonetab.isEnabled()) {
			log.debug("Phone tab is selected by default");
		} else {
			Assert.fail("Phone tab is not selected");
		}
		Screenshots.captureScreenshot();
	}

	public static void ElementColour(String elementName, String colouractual) throws InterruptedException, IOException {

		String blueexpected = "rgba(3, 43, 90, 1)";
		String greenexpected = "rgba(0, 204, 204, 1)";

		if (elementName.contains("promotionprimary")) {
			Actions action = new Actions(driver);
			String colora = driver.findElement(By.xpath("//*[@id='2906f2c0-ac58-4e64-b199-e8d0c21b36df']/div[4]"))
					.getCssValue("background-color");
			if (colora.equals(blueexpected)) {
				log.debug("Primary Promotion Element is in Blue colour as expected");
			} else {
				log.debug("Primary Promotion Element is NOT in Blue colour as expected");
			}
		}

		if (elementName.contains("promotionsecondary")) {
			Actions action = new Actions(driver);
			String colora = driver.findElement(By.xpath("//*[@id='2906f2c0-ac58-4e64-b199-e8d0c21b36df']/div[5]"))
					.getCssValue("background-color");
			if (colora.equals(greenexpected)) {
				log.debug("Secondary Promotion Element is in Green colour as expected");
			} else {
				log.debug("Secondary Promotion Element is NOT in Green colour as expected");
			}
		}
		Screenshots.captureScreenshot();
	}

	public static void charlengthcheck(String elementName, int elengthvalue) throws InterruptedException, IOException {

		if (elementName.contains("promotionprimary")) {
			Actions action = new Actions(driver);
			int alengthvalue = driver.findElement(By.xpath("//*[@id='2906f2c0-ac58-4e64-b199-e8d0c21b36df']/div[4]"))
					.getText().length();

			if (elengthvalue >= alengthvalue) {
				log.debug("Primary Promotion Element characters is within or equal to the expected length");
			} else {
				System.out
						.println("Primary Promotion Element characters is NOT within or equal to the expected length");
			}
		}

		if (elementName.contains("promotionsecondary")) {
			@SuppressWarnings("unused")
			Actions action = new Actions(driver);
			int alengthvalue = driver.findElement(By.xpath("//*[@id='2906f2c0-ac58-4e64-b199-e8d0c21b36df']/div[5]"))
					.getText().length();

			if (elengthvalue >= alengthvalue) {
				log.debug("Secondary Promotion Element characters is within or equal to the expected length");
			} else {
				log.debug(
						"Secondary Promotion Element characters is NOT within or equal to the expected length");
			}
		}
		Screenshots.captureScreenshot();
	}

	public static boolean ElementEnable() {
		if (pageobjects.PAYMSimOPage.PhoneTab.isEnabled()) {
			log.debug("The <<--Phone Tab-->> is enabled by default");
			return true;
		} else {
			log.debug("The <<--Phone Tab-->> is enabled by default");
			return false;
		}

	}

	public static void ElementClick(String elementName) throws InterruptedException, IOException {
		if (elementName.equalsIgnoreCase("PhoneTab"))
			pageobjects.PAYMSimOPage.PhoneTab.sendKeys(Keys.ENTER);

		if (elementName.equalsIgnoreCase("MBB")) {
			pageobjects.PAYMSimOPage.simmbbtab.sendKeys(Keys.ENTER);
		}
		Screenshots.captureScreenshot();
	}

	public static void ElementClick2(String elementName) throws InterruptedException, IOException {

		if (pageobjects.PAYMSimOPage.months12tab.getText().equalsIgnoreCase("12 months")) {
			log.debug(
					"The 12 months_Tab is Present and the Text is :" + pageobjects.PAYMSimOPage.months12tab.getText());
		} else {
			log.debug(
					"The  12 months_Tab is Absent and the Text is :" + pageobjects.PAYMSimOPage.months12tab.getText());

		}

		if (pageobjects.PAYMSimOPage.days30tab.getText().equalsIgnoreCase("30 days")) {
			log.debug(
					"The 30 days_Tab is Present and the Text is :" + pageobjects.PAYMSimOPage.days30tab.getText());
		} else {
			log.debug(
					"The  30 days_Tab is Absent and the Text is :" + pageobjects.PAYMSimOPage.days30tab.getText());

		}
		if (pageobjects.PAYMSimOPage.paymheader.getText().equalsIgnoreCase("Pay Monthly sims"))
			log.debug("Pay monthly sims banner header - as per today is displayed");
		else

			log.debug("Pay monthly sims banner header not displayed");

		if (pageobjects.PAYMSimOPage.simphonetab.getText().equalsIgnoreCase("Phone"))
			log.debug("Phones tab is displayed");
		else
			log.debug("Phones tab is not displayed");

		if (pageobjects.PAYMSimOPage.simtablettab.getText().equalsIgnoreCase("Tablet"))
			log.debug("Tablet tab is displayed");
		else
			log.debug("Tablet tab is not displayed");

		if (pageobjects.PAYMSimOPage.simmbbtab.getText().equalsIgnoreCase("Mobile broadband"))
			log.debug("Mobile broadband tab is displayed");
		else
			log.debug("Mobile broadband is not displayed");

		if (pageobjects.PAYMSimOPage.whychoosesimolink.getText()
				.equalsIgnoreCase("Why choose an O2 Pay Monthly sim?")) {
			log.debug("Why choose an O2 Pay Monthly sim? - link is displayed");
			// whychoosesimolink.click();

			boolean variable1 = pageobjects.PAYMSimOPage.whychoosesimowrap.isDisplayed();

			log.debug("The Why choose simo wrap is displayed");
			// log.debug(variable1);
			// Thread.sleep(1000);

			pageobjects.PAYMSimOPage.whychoosesimolink.click();
		}

		else
			log.debug("Why choose an O2 Pay Monthly sim?-link is not displayed");

		if (pageobjects.PAYMSimOPage.whychoosesimowrap.getText()
				.equalsIgnoreCase("Why choose an O2 Pay Monthly sim?")) {
			log.debug("Why choose an O2 Pay Monthly sim? - section is displayed");

			boolean wrap1 = pageobjects.PAYMSimOPage.wifi_img.isDisplayed();
			if (wrap1 = true) {
				log.debug("Wifi image is displayed");
			}

			boolean wrap1_txt = pageobjects.PAYMSimOPage.wifi_img_txt.isDisplayed();
			if (wrap1_txt = true) {
				System.out
						.println("Save your data when you're out and about. With free O2 Wifi.- copytext is displayed");
			}

			boolean wrap2 = pageobjects.PAYMSimOPage.keepyournumb_img.isDisplayed();
			if (wrap2 = true) {
				log.debug("Keep your number image is displayed");
			}

			boolean wrap2_txt = pageobjects.PAYMSimOPage.keepyournumb_img_txt.isDisplayed();
			if (wrap2_txt = true) {
				System.out
						.println("Save your data when you're out and about. With free O2 Wifi.- copytext is displayed");
			}

			boolean wrap3 = pageobjects.PAYMSimOPage.rank_img.isDisplayed();
			if (wrap3 = true) {
				log.debug("Rank image is displayed");
			}

			boolean wrap3_txt = pageobjects.PAYMSimOPage.rank_img_txt.isDisplayed();
			if (wrap3_txt = true) {
				log.debug(
						"We've been ranked No.1 for customer service by Ofcom, 7th time in a row.- copytext is displayed");
			}

			boolean wrap4 = pageobjects.PAYMSimOPage.tugo_img.isDisplayed();
			if (wrap4 = true) {
				log.debug("Rank image is displayed");
			}

			boolean wrap4_txt = pageobjects.PAYMSimOPage.tugo_img_txt.isDisplayed();
			if (wrap4_txt = true) {
				log.debug(
						"We've been ranked No.1 for customer service by Ofcom, 7th time in a row.- copytext is displayed");
			}

		} else
			log.debug("Why choose an O2 Pay Monthly sim? - section is not displayed ");

		/*
		 * boolean tile = pageobjects.PAYMSimOPage.PromotionTariff.isDisplayed();
		 *
		 * if (tile = true) { System.out.
		 * println("Most popular/Recommended tariff tile is displayed"); }
		 */
		boolean tile1 = pageobjects.PAYMSimOPage.tariff1tile.isDisplayed();

		if (tile1 = true) {
			log.debug("First tariff tile is displayed");
		} else
			log.debug("First tariff tile not displayed");

		boolean tile2 = pageobjects.PAYMSimOPage.tariff2tile.isDisplayed();

		if (tile2 = true) {
			log.debug("Second tariff tile is displayed");
		} else
			log.debug("Second tariff tile not displayed");

		boolean tile3 = pageobjects.PAYMSimOPage.tariff3tile.isDisplayed();

		if (tile3 = true) {
			log.debug("Third tariff tile is displayed");
		} else
			log.debug("Third tariff tile not displayed");

		boolean tile4 = pageobjects.PAYMSimOPage.tariff4tile.isDisplayed();

		if (tile4 = true) {
			log.debug("Fourth tariff tile is displayed");
		} else
			log.debug("Fourth tariff tile not displayed");

		boolean tile5 = pageobjects.PAYMSimOPage.tariff5tile.isDisplayed();

		if (tile5 = true) {
			log.debug("Fifth tariff tile is displayed");
		} else
			log.debug("Fifth tariff tile not displayed");

		boolean tile6 = pageobjects.PAYMSimOPage.tariff6tile.isDisplayed();

		if (tile6 = true) {
			log.debug("Sixth tariff tile is displayed");
		} else
			log.debug("Sixth tariff tile not displayed");

		boolean tile7 = pageobjects.PAYMSimOPage.tariff7tile.isDisplayed();

		if (tile7 = true) {
			log.debug("Seven tariff tile is displayed");
		} else
			log.debug("Seven tariff tile not displayed");

		boolean tile8 = pageobjects.PAYMSimOPage.tariff8tile.isDisplayed();

		if (tile8 = true) {
			log.debug("Eight tariff tile is displayed");
		} else
			log.debug("Eight tariff tile not displayed");

		if (pageobjects.PAYMSimOPage.whyo2.getText().contains("Why O2?")) {
			log.debug("Why O2 section is displayed");

			boolean whyo2_1 = pageobjects.PAYMSimOPage.whyo2priority.isDisplayed();

			if (whyo2_1 = true) {
				log.debug("Priority image is displayed");
			} else
				log.debug("Priority image is not displayed");

			boolean whyo2_2 = pageobjects.PAYMSimOPage.whyo2priority_txt.isDisplayed();

			if (whyo2_2 = true) {
				log.debug("Priority copytext is displayed");
			} else
				log.debug("Priority copytext is not displayed");

			/*
			 * boolean whyo2_3 =pageobjects.PAYMSimOPage.whyo2guru.isDisplayed();
			 *
			 * if (whyo2_3 = true) { log.debug("Guru image is displayed"); } else
			 * log.debug("Guru image is not displayed");
			 */

			boolean whyo2_4 = pageobjects.PAYMSimOPage.whyo2guru_txt.isDisplayed();

			if (whyo2_4 = true) {
				log.debug("Guru copytext is displayed");
			} else
				log.debug("Guru copytext is not displayed");

			boolean whyo2_5 = pageobjects.PAYMSimOPage.whyo2myo2.isDisplayed();

			if (whyo2_5 = true) {
				log.debug("My O2 image is displayed");
			} else
				log.debug("My O2 image is not displayed");

			boolean whyo2_6 = pageobjects.PAYMSimOPage.whyo2myo2_txt.isDisplayed();

			if (whyo2_6 = true) {
				log.debug("My O2 copytext is displayed");
				return;
			} else
				log.debug("My O2 copytext is not displayed");

		}
		Screenshots.captureScreenshot();

	}

	// Below is for displaying which mins text and data are present

	public static void VerifyMinsDataDisplayed() throws IOException, InterruptedException {
		try {
			List<WebElement> outercontainer = driver
					.findElements(By.xpath("//*[@class='tariffs-container voice-tariffs']"));

			List<WebElement> DataContainer = outercontainer.get(0)
					.findElements(By.xpath("//*[@class='col-xs-6 col-sm-3 dmt-container info-container']"));

			for (int i = 0; i <= DataContainer.size(); i++) {

				log.debug("The Mins text and data are as shown below...");
				log.debug(DataContainer.get(i).getText());
			}
		} catch (IndexOutOfBoundsException e) {

		}
		Screenshots.captureScreenshot();
	}

	public static void VerifyCostDisplayed() throws IOException, InterruptedException, IndexOutOfBoundsException {
		try {
			List<WebElement> outercontainer = driver
					.findElements(By.xpath("//*[@class='tariffs-container voice-tariffs']"));

			List<WebElement> DataContainer = outercontainer.get(0)
					.findElements(By.xpath("//*[@class='col-xs-6 col-sm-3 info-container price-block-container']"));

			for (int i = 0; i <= DataContainer.size(); i++) {

				log.debug("The Price per month are as shown below...");
				log.debug(DataContainer.get(i).getText());
			}
		} catch (IndexOutOfBoundsException e) {

		}
		Screenshots.captureScreenshot();
	}
	/*
	 * ======================================================== Added for Validating
	 * the Buynow CTA - 13/03/2017
	 * ========================================================
	 */

	public static void BuyNowButtonDisplay() throws IOException, InterruptedException {
		/*
		 * String Actualtext =
		 * driver.findElement(By.linkText("http://localhost:8080/imdb/homepage")
		 * ).getText(); Assert.assertEquals(Actualtext,
		 * "http://localhost:8080/imdb/homepage" );
		 * log.debug("URL matching --> Part executed");
		 */

		// Here we are just validating the number of links with "Buy Now"
		// available and if they are displayed or not

		List<WebElement> all_links_webpage = driver.findElements(By.xpath("//*[@id='callToAction']"));
		log.debug("Total no of links Available: " + all_links_webpage.size());
		int k = all_links_webpage.size();
		log.debug("List of links Available: ");
		for (int i = 0; i < k; i++) {
			if (all_links_webpage.get(i).getAttribute("button").contains("Buy now")) {
				String link = all_links_webpage.get(i).getAttribute("button");
				log.debug(link);
			}
		}
		Screenshots.captureScreenshot();
	}

	public static void BuyNowButtonValidation() throws IOException, InterruptedException {
		/*
		 * String Actualtext =
		 * driver.findElement(By.linkText("http://localhost:8080/imdb/homepage")
		 * ).getText(); Assert.assertEquals(Actualtext,
		 * "http://localhost:8080/imdb/homepage" );
		 * log.debug("URL matching --> Part executed");
		 */

		// Here we are just validating the number of links with "Buy Now"
		// available and if they are displayed or not

		// List<WebElement> links =
		// driver.findElements(By.xpath("//button[contains(text(),'Buy
		// now')]"));

		List<WebElement> links = driver.findElements(By.cssSelector("input[onclick*='simo.buyNowSubmitHandler']"));
		log.debug("no of links:" + links.size());

		for (int i = 0; i < links.size(); i++) {
			if (!(links.get(i).getText().isEmpty())) {

				links.get(i).click();
				driver.navigate().back();
				links = driver.findElements(By.cssSelector("input[onclick*='simo.buyNowSubmitHandler']"));
			}
		}
		Screenshots.captureScreenshot();
	}

	public static void CheckboxValidation() throws IOException, InterruptedException {
		log.debug("Clicking on one of the checkbox");
		pageobjects.PAYMSimOPage.CheckboxPresence.click();
		log.debug("Clicking on one of the checkbox");
		pageobjects.PAYMSimOPage.CheckboxPresence.click();
		Screenshots.captureScreenshot();
	}

	//// added 14/03/2017 - for cfd1222 - ecomm10206/206/202/203
	public static void VerifyPreferredTariffDisplay(String elementName1) throws InterruptedException, IOException {

		if (pageobjects.PAYMSimOPage.simmbbtab.getText().contains("Mobile broadband"))
			log.debug("Mobile broadband tab is displayed");

		else {
			log.debug("Mobile broadband is not displayed");
		}

		if (pageobjects.PAYMSimOPage.whychoosesimolink.getText().contains("Why choose an O2 Pay Monthly sim?")) {
			log.debug("Why choose an O2 Pay Monthly sim? - link is displayed");

			boolean variable1 = pageobjects.PAYMSimOPage.whychoosesimowrap.isDisplayed();

			log.debug("The Why choose simo wrap is displayed");

			pageobjects.PAYMSimOPage.whychoosesimolink.click();
		}

		else {
			log.debug("Why choose an O2 Pay Monthly sim?-link is not displayed");
		}
		Screenshots.captureScreenshot();
	}

	public static void LengthPromotionTariff(String arg1) throws InterruptedException, IOException {

		WebDriverWait wait = new WebDriverWait(driver, 40);
		wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".col-xs-12.promotion-ribbon")));// instead
		// of
		// id
		// u
		// can
		// use
		// cssSelector
		// or
		// xpath
		// of
		// ur
		// element.

		log.debug("Trying to find the Lenght the Promotion tarriff as per page");

		String PromotionDisplayed = driver.findElement(By.cssSelector(".col-xs-12.promotion-ribbon")).getText();
		int LengthofPromotion = PromotionDisplayed.length();
		System.out
				.println("The current length of the displayed Recommended/Mostpopular section is " + LengthofPromotion);
		// Below is for the Display of recommended or not

		// Below is to determine the number of characters in the section
		Dimension PromotionDisplayed2 = driver.findElement(By.cssSelector(".col-xs-12.promotion-ribbon")).getSize();
		log.debug("The size is " + PromotionDisplayed2);
		Screenshots.captureScreenshot();

	}

	/*
	 * public static void TabSelect(String arg1) throws InterruptedException,
	 * IOException {
	 *
	 * log.debug("Differnt Tabs present in page"); //String
	 * TabName=driver.findElement(By.cssSelector(".col-xs-12.promotion-ribbon"))
	 * .getText();
	 *
	 * try{ List<WebElement> outercontainer =
	 * driver.findElements(By.xpath("//*[@class='tab-container']"));
	 *
	 * @SuppressWarnings("unchecked") List<WebElement> DataContainer =
	 * (List<WebElment>)
	 * outercontainer.get(0).findElement(By.cssSelector(".active"));
	 *
	 *
	 * for (int i=0; i<=DataContainer.size();i++) {
	 *
	 * log.debug("The Details are as below...");
	 * log.debug(DataContainer.get(i).getText()); } } catch
	 * (IndexOutOfBoundsException e) {
	 *
	 * }
	 *
	 *
	 *
	 * }
	 *
	 */
	public static void TariffTilePosition() throws InterruptedException, IOException {
		WebDriverWait wait = new WebDriverWait(driver, 40);
		wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".col-xs-12.promotion-ribbon")));// instead
		// of
		// id
		// u
		// can
		// use
		// cssSelector
		// or
		// xpath
		// of
		// ur
		// element.

		log.debug("Trying to find the if the promotion tile is displayed at top");
		String elementName = driver.findElement(By.xpath("//*[@id='contentWrapper']/div[3]/div/div[6]/div[7]"))
				.getText();

		if (elementName.contains("Recommended")) {
			if (driver.findElements(By.xpath("//*[@id='contentWrapper']/div[3]/div/div[6]/div[7]")).size() != 0) {
				log.debug("The first tile is displayed as recommended");
			} else {
				log.debug("The first tile is not displayed as recommended");
			}

		}
		Screenshots.captureScreenshot();
	}

	public static void DisplayPromotionTariff(String elementName) throws InterruptedException, IOException {

		WebDriverWait wait = new WebDriverWait(driver, 40);
		wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".col-xs-12.promotion-ribbon")));// instead
		// of
		// id
		// u
		// can
		// use
		// cssSelector
		// or
		// xpath
		// of
		// ur
		// element.

		log.debug("Displaying the Promotion tarriff as per page");

		String var1 = "Recommended";
		String var2 = "Most-Popular";
		String PromotionDisplayed = driver.findElement(By.cssSelector(".col-xs-12.promotion-ribbon")).getText();
		((JavascriptExecutor) driver).executeScript("scroll(0,500)");

		// Below is for the Display of recommended or not
		if (PromotionDisplayed.equals(var1)) {
			log.debug("The Promotion of the tariff displayed is Recommended");
			log.debug("The Promotion of the tariff displayed is Recommended");

		} else if (PromotionDisplayed.equals(var2)) {
			log.debug("The Promotion of the tariff displayed is Most-Popular");
			log.debug("The Promotion of the tariff displayed is Most-Popular");

		} else {
			log.debug("The Promotion of the tariff displayed is unknown");
		}
		Screenshots.captureScreenshot();

	}

	public static void SelectTariffMBBTab(String elementName) throws InterruptedException, IOException {
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		if (elementName.contains("30 Days")) {
			log.debug("Selecting a Random Tariff under 30 days tab");
			log.debug("Selecting a Random Tariff under 30 days tab");
			pageobjects.PAYMSimOPage.days30tab.click();
			Thread.sleep(3000);
			executor.executeScript("arguments[0].click();", pageobjects.PAYMSimOPage.BuyNowRandomTariffMBB30Days);

		}
		if (elementName.contains("12 Months")) {
			log.debug("Selecting a Random Tariff under 12 Months tab");
			log.debug("Selecting a Random Tariff under 12 Months tab");
			pageobjects.PAYMSimOPage.months12tab.click();
			Thread.sleep(3000);
			executor.executeScript("arguments[0].click();", pageobjects.PAYMSimOPage.BuyNowRandomTariffMBB12Months);
		}
		Screenshots.captureScreenshot();
	}

	public static void SelectCTAtoBuySIMOtariff() throws IOException, InterruptedException {
		log.debug("clicking on Select to buy SIMO tariff");
		WebElement element = pageobjects.PAYMSimOPage.SelectSIMOTariff;
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);
		Thread.sleep(10000);
		//pageobjects.PAYMSimOPage.SelectSIMOTariff.click();
		Screenshots.captureScreenshot();
	}

	public static void SelectValidCTASIMOtariff(String tariffAmt, String dataValue) throws IOException, InterruptedException {

				List<WebElement> plnList = driver.findElements(By.xpath("//*[@name='P12M']"));
					for (WebElement elm : plnList) {

						if(driver.findElements(By.xpath("//*[@name='P12M']/div[@class='col-xs-6 col-sm-3 info-container price-block-container']/div/h2[contains(normalize-space(),'" + tariffAmt + "')]")).size()>0){
							if(driver.findElements(By.xpath("//*[@name='P12M']/div[@class='col-xs-6 col-sm-3 dmt-container info-container']/ul/li/h2[contains(normalize-space(),'"+dataValue+"')]")).size()>0) {
								driver.findElement(By.xpath("(//*[@name='P12M']/div[@class='col-xs-12 col-sm-5 info-container buy-now']/div/form/button)[1]")).click();
								break;
							}
						}
					}
		log.debug("Selected the valid Tariff");
		Thread.sleep(5000);
		Screenshots.captureScreenshot();
	}

	///////////////////////////Upgrade Simo Page/////////////////////////////////////////////

	public static void ClickonTabletsTabSimo() {

		WebElement element = pageobjects.PAYMSimOPage.TabletsTabSimo;
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);

	}

	public static void selectIWillKeepMyCurrentSIM() throws IOException, InterruptedException {

		WebElement element = pageobjects.PAYMSimOPage.IWillKeepMyCurrentSIM;
		scrollToAnElement.scrollToElement(pageobjects.PAYMSimOPage.IWillKeepMyCurrentSIM);
		Screenshots.captureScreenshot();
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);

	}

	public static void selectINeedNewSIM() throws IOException, InterruptedException {

		log.debug("Review Page validation :: " + driver.getTitle());
		WebElement element = pageobjects.PAYMSimOPage.INeedNewSIM;
		scrollToAnElement.scrollToElement(pageobjects.PAYMSimOPage.INeedNewSIM);
		Screenshots.captureScreenshot();
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);
		log.debug("Clicked on I need a new sim option");

	}

	public static void clickOnTermsAndConditionsCheckboxInReviewPage() throws InterruptedException {

		WebElement element = pageobjects.PAYMSimOPage.TermsAndConditionsCheckbox_ReviewPage;
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);
		Thread.sleep(2000);
	}

	public static void clickOnPlaceYourOrderButton() throws InterruptedException {
		Thread.sleep(6000);
		WebElement element = pageobjects.PAYMSimOPage.PlaceYourOrder;
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);
		Thread.sleep(2000);
	}


}