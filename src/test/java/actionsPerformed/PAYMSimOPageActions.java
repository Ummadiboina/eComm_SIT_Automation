package actionsPerformed;

import java.awt.AWTException;
import java.io.IOException;
import java.util.List;

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
			throws InterruptedException, AWTException, IOException {
		// Assert.assertTrue(driver.getTitle().contains("30 Days");

		if (elementName.contains("30 Days")) {
			System.out.println("The Contract length is " + pageobjects.PAYMSimOPage.thirtydays.getText());
			log.debug("The Contract length is " + pageobjects.PAYMSimOPage.thirtydays.getText());

		}
		if (elementName.contains("12 Months")) {

			System.out.println("The Contract length is " + pageobjects.PAYMSimOPage.twelevemonths.getText());
			log.debug("The Contract length is " + pageobjects.PAYMSimOPage.twelevemonths.getText());
		}
		Screenshots.captureScreenshot();
	}

	public static void SelectTariffPhonesTab(String elementName)
			throws InterruptedException, AWTException, IOException {
		// Assert.assertTrue(driver.getTitle().contains("30 Days");

		if (elementName.contains("30 Days")) {
			System.out.println("Selecting a Random Tariff under 30 days tab");
			log.debug("Selecting a Random Tariff under 30 days tab");
			pageobjects.PAYMSimOPage.thirtydays.click();
			Thread.sleep(3000);
			pageobjects.PAYMSimOPage.BuyNowRandomTariff30Months.click();

		}
		if (elementName.contains("12 Months")) {
			System.out.println("Selecting a Random Tariff under 12 Months tab");
			log.debug("Selecting a Random Tariff under 12 Months tab");
			pageobjects.PAYMSimOPage.twelevemonths.click();
			Thread.sleep(3000);
			pageobjects.PAYMSimOPage.BuyNowRandomTariff12Months.click();
			System.out.println("Clicked on a Random Tariff");
		}
		Screenshots.captureScreenshot();

	}

	public static void SelectRecommendedTariffPhonesTab(String elementName)
			throws InterruptedException, AWTException, IOException {
		// Assert.assertTrue(driver.getTitle().contains("30 Days");

		if (elementName.contains("30 Days")) {
			System.out.println("Selecting a Recommended Tariff under 30 days tab");
			log.debug("Selecting a Recommended Tariff under 30 days tab");
			pageobjects.PAYMSimOPage.thirtydays.click();
			Thread.sleep(3000);
			pageobjects.PAYMSimOPage.BuyNowPromotedTariff.click();

		}
		if (elementName.contains("12 Months")) {
			System.out.println("Selecting a Recommended Tariff under 12 Months tab");
			log.debug("Selecting a Recommended Tariff under 12 Months tab");
			pageobjects.PAYMSimOPage.twelevemonths.click();
			Thread.sleep(3000);
			pageobjects.PAYMSimOPage.BuyNowPromotedTariff.click();
			log.debug("Selected a Recommended Tariff under 12 Months tab");
		}
		Screenshots.captureScreenshot();
	}

	public static void Elementverify(String elementName) throws InterruptedException, IOException {

		if (elementName.contains("12 Months")) {
			if (driver.findElements(By.xpath("//*[@id='id-12-months']/p/a")).size() != 0) {
				System.out.println("12 month Contract length is Present");
			} else {
				System.out.println("12 month Contract length is not available");
			}

		}

		if (elementName.contains("30 Days")) {
			if (driver.findElements(By.xpath("//*[@id='id-30-days']/p/a")).size() != 0) {
				System.out.println("30 days Contract length is Present");
			} else {
				System.out.println("30 days Contract length is not available");
			}
		}
		Screenshots.captureScreenshot();
	}

	public static void DisplayContent(String ElementName) throws IOException, InterruptedException {
		if (ElementName.equalsIgnoreCase("paymheader")) {
			System.out.println("Pay monthly sims banner header - as per today is displayed :"
					+ pageobjects.SimFreeExtrasPage.Tariffvaladity.getText());

		} else {
			System.out.println("The Tariff detail is  Absent and the Text is :"
					+ pageobjects.SimFreeExtrasPage.Tariffvaladity.getText());

		}
		Screenshots.captureScreenshot();
	}

	////////// ************Below were done for Jan
	////////// Release********************/////////////////

	public static void Sorting(String elementName) throws InterruptedException, IOException {
		List<WebElement> list = driver.findElements(By.xpath("//span[@class='pound'"));
		System.out.println(list);

		// Modified on 10/03/2017- Nag

		if (elementName.contains("promotionprimary")) {
			if (driver.findElements(By.xpath("//*[@id='2906f2c0-ac58-4e64-b199-e8d0c21b36df']/div[4]")).size() != 0) {
				System.out.println("Primary Promotion Element is present");
			} else {
				System.out.println("Primary Promotion Element is NOT present");
			}

			if (elementName.contains("promotionsecondary")) {
				if (driver.findElements(By.xpath("//*[@id='2906f2c0-ac58-4e64-b199-e8d0c21b36df']/div[5]"))
						.size() != 0) {

					System.out.println("Secondary Promotion Element is present");
				} else {
					System.out.println("Secondary Promotion Element is NOT present");
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
				System.out.println("Primary Promotion Element is in Blue colour as expected");
			} else {
				System.out.println("Primary Promotion Element is NOT in Blue colour as expected");
			}
		}

		if (elementName.contains("promotionsecondary")) {
			Actions action = new Actions(driver);
			String colora = driver.findElement(By.xpath("//*[@id='2906f2c0-ac58-4e64-b199-e8d0c21b36df']/div[5]"))
					.getCssValue("background-color");
			if (colora.equals(greenexpected)) {
				System.out.println("Secondary Promotion Element is in Green colour as expected");
			} else {
				System.out.println("Secondary Promotion Element is NOT in Green colour as expected");
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
				System.out.println("Primary Promotion Element characters is within or equal to the expected length");
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
				System.out.println("Secondary Promotion Element characters is within or equal to the expected length");
			} else {
				System.out.println(
						"Secondary Promotion Element characters is NOT within or equal to the expected length");
			}
		}
		Screenshots.captureScreenshot();
	}

	public static boolean ElementEnable() {
		if (pageobjects.PAYMSimOPage.PhoneTab.isEnabled()) {
			System.out.println("The <<--Phone Tab-->> is enabled by default");
			return true;
		} else {
			System.out.println("The <<--Phone Tab-->> is enabled by default");
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
			System.out.println(
					"The 12 months_Tab is Present and the Text is :" + pageobjects.PAYMSimOPage.months12tab.getText());
		} else {
			System.out.println(
					"The  12 months_Tab is Absent and the Text is :" + pageobjects.PAYMSimOPage.months12tab.getText());

		}

		if (pageobjects.PAYMSimOPage.days30tab.getText().equalsIgnoreCase("30 days")) {
			System.out.println(
					"The 30 days_Tab is Present and the Text is :" + pageobjects.PAYMSimOPage.days30tab.getText());
		} else {
			System.out.println(
					"The  30 days_Tab is Absent and the Text is :" + pageobjects.PAYMSimOPage.days30tab.getText());

		}
		if (pageobjects.PAYMSimOPage.paymheader.getText().equalsIgnoreCase("Pay Monthly sims"))
			System.out.println("Pay monthly sims banner header - as per today is displayed");
		else

			System.out.println("Pay monthly sims banner header not displayed");

		if (pageobjects.PAYMSimOPage.simphonetab.getText().equalsIgnoreCase("Phone"))
			System.out.println("Phones tab is displayed");
		else
			System.out.println("Phones tab is not displayed");

		if (pageobjects.PAYMSimOPage.simtablettab.getText().equalsIgnoreCase("Tablet"))
			System.out.println("Tablet tab is displayed");
		else
			System.out.println("Tablet tab is not displayed");

		if (pageobjects.PAYMSimOPage.simmbbtab.getText().equalsIgnoreCase("Mobile broadband"))
			System.out.println("Mobile broadband tab is displayed");
		else
			System.out.println("Mobile broadband is not displayed");

		if (pageobjects.PAYMSimOPage.whychoosesimolink.getText()
				.equalsIgnoreCase("Why choose an O2 Pay Monthly sim?")) {
			System.out.println("Why choose an O2 Pay Monthly sim? - link is displayed");
			// whychoosesimolink.click();

			boolean variable1 = pageobjects.PAYMSimOPage.whychoosesimowrap.isDisplayed();

			System.out.println("The Why choose simo wrap is displayed");
			// System.out.println(variable1);
			// Thread.sleep(1000);

			pageobjects.PAYMSimOPage.whychoosesimolink.click();
		}

		else
			System.out.println("Why choose an O2 Pay Monthly sim?-link is not displayed");

		if (pageobjects.PAYMSimOPage.whychoosesimowrap.getText()
				.equalsIgnoreCase("Why choose an O2 Pay Monthly sim?")) {
			System.out.println("Why choose an O2 Pay Monthly sim? - section is displayed");

			boolean wrap1 = pageobjects.PAYMSimOPage.wifi_img.isDisplayed();
			if (wrap1 = true) {
				System.out.println("Wifi image is displayed");
			}

			boolean wrap1_txt = pageobjects.PAYMSimOPage.wifi_img_txt.isDisplayed();
			if (wrap1_txt = true) {
				System.out
						.println("Save your data when you're out and about. With free O2 Wifi.- copytext is displayed");
			}

			boolean wrap2 = pageobjects.PAYMSimOPage.keepyournumb_img.isDisplayed();
			if (wrap2 = true) {
				System.out.println("Keep your number image is displayed");
			}

			boolean wrap2_txt = pageobjects.PAYMSimOPage.keepyournumb_img_txt.isDisplayed();
			if (wrap2_txt = true) {
				System.out
						.println("Save your data when you're out and about. With free O2 Wifi.- copytext is displayed");
			}

			boolean wrap3 = pageobjects.PAYMSimOPage.rank_img.isDisplayed();
			if (wrap3 = true) {
				System.out.println("Rank image is displayed");
			}

			boolean wrap3_txt = pageobjects.PAYMSimOPage.rank_img_txt.isDisplayed();
			if (wrap3_txt = true) {
				System.out.println(
						"We've been ranked No.1 for customer service by Ofcom, 7th time in a row.- copytext is displayed");
			}

			boolean wrap4 = pageobjects.PAYMSimOPage.tugo_img.isDisplayed();
			if (wrap4 = true) {
				System.out.println("Rank image is displayed");
			}

			boolean wrap4_txt = pageobjects.PAYMSimOPage.tugo_img_txt.isDisplayed();
			if (wrap4_txt = true) {
				System.out.println(
						"We've been ranked No.1 for customer service by Ofcom, 7th time in a row.- copytext is displayed");
			}

		} else
			System.out.println("Why choose an O2 Pay Monthly sim? - section is not displayed ");

		/*
		 * boolean tile = pageobjects.PAYMSimOPage.PromotionTariff.isDisplayed();
		 * 
		 * if (tile = true) { System.out.
		 * println("Most popular/Recommended tariff tile is displayed"); }
		 */
		boolean tile1 = pageobjects.PAYMSimOPage.tariff1tile.isDisplayed();

		if (tile1 = true) {
			System.out.println("First tariff tile is displayed");
		} else
			System.out.println("First tariff tile not displayed");

		boolean tile2 = pageobjects.PAYMSimOPage.tariff2tile.isDisplayed();

		if (tile2 = true) {
			System.out.println("Second tariff tile is displayed");
		} else
			System.out.println("Second tariff tile not displayed");

		boolean tile3 = pageobjects.PAYMSimOPage.tariff3tile.isDisplayed();

		if (tile3 = true) {
			System.out.println("Third tariff tile is displayed");
		} else
			System.out.println("Third tariff tile not displayed");

		boolean tile4 = pageobjects.PAYMSimOPage.tariff4tile.isDisplayed();

		if (tile4 = true) {
			System.out.println("Fourth tariff tile is displayed");
		} else
			System.out.println("Fourth tariff tile not displayed");

		boolean tile5 = pageobjects.PAYMSimOPage.tariff5tile.isDisplayed();

		if (tile5 = true) {
			System.out.println("Fifth tariff tile is displayed");
		} else
			System.out.println("Fifth tariff tile not displayed");

		boolean tile6 = pageobjects.PAYMSimOPage.tariff6tile.isDisplayed();

		if (tile6 = true) {
			System.out.println("Sixth tariff tile is displayed");
		} else
			System.out.println("Sixth tariff tile not displayed");

		boolean tile7 = pageobjects.PAYMSimOPage.tariff7tile.isDisplayed();

		if (tile7 = true) {
			System.out.println("Seven tariff tile is displayed");
		} else
			System.out.println("Seven tariff tile not displayed");

		boolean tile8 = pageobjects.PAYMSimOPage.tariff8tile.isDisplayed();

		if (tile8 = true) {
			System.out.println("Eight tariff tile is displayed");
		} else
			System.out.println("Eight tariff tile not displayed");

		if (pageobjects.PAYMSimOPage.whyo2.getText().contains("Why O2?")) {
			System.out.println("Why O2 section is displayed");

			boolean whyo2_1 = pageobjects.PAYMSimOPage.whyo2priority.isDisplayed();

			if (whyo2_1 = true) {
				System.out.println("Priority image is displayed");
			} else
				System.out.println("Priority image is not displayed");

			boolean whyo2_2 = pageobjects.PAYMSimOPage.whyo2priority_txt.isDisplayed();

			if (whyo2_2 = true) {
				System.out.println("Priority copytext is displayed");
			} else
				System.out.println("Priority copytext is not displayed");

			/*
			 * boolean whyo2_3 =pageobjects.PAYMSimOPage.whyo2guru.isDisplayed();
			 * 
			 * if (whyo2_3 = true) { System.out.println("Guru image is displayed"); } else
			 * System.out.println("Guru image is not displayed");
			 */

			boolean whyo2_4 = pageobjects.PAYMSimOPage.whyo2guru_txt.isDisplayed();

			if (whyo2_4 = true) {
				System.out.println("Guru copytext is displayed");
			} else
				System.out.println("Guru copytext is not displayed");

			boolean whyo2_5 = pageobjects.PAYMSimOPage.whyo2myo2.isDisplayed();

			if (whyo2_5 = true) {
				System.out.println("My O2 image is displayed");
			} else
				System.out.println("My O2 image is not displayed");

			boolean whyo2_6 = pageobjects.PAYMSimOPage.whyo2myo2_txt.isDisplayed();

			if (whyo2_6 = true) {
				System.out.println("My O2 copytext is displayed");
				return;
			} else
				System.out.println("My O2 copytext is not displayed");

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

				System.out.println("The Mins text and data are as shown below...");
				System.out.println(DataContainer.get(i).getText());
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

				System.out.println("The Price per month are as shown below...");
				System.out.println(DataContainer.get(i).getText());
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
		 * System.out.println("URL matching --> Part executed");
		 */

		// Here we are just validating the number of links with "Buy Now"
		// available and if they are displayed or not

		List<WebElement> all_links_webpage = driver.findElements(By.xpath("//*[@id='callToAction']"));
		System.out.println("Total no of links Available: " + all_links_webpage.size());
		int k = all_links_webpage.size();
		System.out.println("List of links Available: ");
		for (int i = 0; i < k; i++) {
			if (all_links_webpage.get(i).getAttribute("button").contains("Buy now")) {
				String link = all_links_webpage.get(i).getAttribute("button");
				System.out.println(link);
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
		 * System.out.println("URL matching --> Part executed");
		 */

		// Here we are just validating the number of links with "Buy Now"
		// available and if they are displayed or not

		// List<WebElement> links =
		// driver.findElements(By.xpath("//button[contains(text(),'Buy
		// now')]"));

		List<WebElement> links = driver.findElements(By.cssSelector("input[onclick*='simo.buyNowSubmitHandler']"));
		System.out.println("no of links:" + links.size());

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
		System.out.println("Clicking on one of the checkbox");
		pageobjects.PAYMSimOPage.CheckboxPresence.click();
		System.out.println("Clicking on one of the checkbox");
		pageobjects.PAYMSimOPage.CheckboxPresence.click();
		Screenshots.captureScreenshot();
	}

	//// added 14/03/2017 - for cfd1222 - ecomm10206/206/202/203
	public static void VerifyPreferredTariffDisplay(String elementName1) throws InterruptedException, IOException {

		if (pageobjects.PAYMSimOPage.simmbbtab.getText().contains("Mobile broadband"))
			System.out.println("Mobile broadband tab is displayed");

		else {
			System.out.println("Mobile broadband is not displayed");
		}

		if (pageobjects.PAYMSimOPage.whychoosesimolink.getText().contains("Why choose an O2 Pay Monthly sim?")) {
			System.out.println("Why choose an O2 Pay Monthly sim? - link is displayed");

			boolean variable1 = pageobjects.PAYMSimOPage.whychoosesimowrap.isDisplayed();

			System.out.println("The Why choose simo wrap is displayed");

			pageobjects.PAYMSimOPage.whychoosesimolink.click();
		}

		else {
			System.out.println("Why choose an O2 Pay Monthly sim?-link is not displayed");
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

		System.out.println("Trying to find the Lenght the Promotion tarriff as per page");

		String PromotionDisplayed = driver.findElement(By.cssSelector(".col-xs-12.promotion-ribbon")).getText();
		int LengthofPromotion = PromotionDisplayed.length();
		System.out
				.println("The current length of the displayed Recommended/Mostpopular section is " + LengthofPromotion);
		// Below is for the Display of recommended or not

		// Below is to determine the number of characters in the section
		Dimension PromotionDisplayed2 = driver.findElement(By.cssSelector(".col-xs-12.promotion-ribbon")).getSize();
		System.out.println("The size is " + PromotionDisplayed2);
		Screenshots.captureScreenshot();

	}

	/*
	 * public static void TabSelect(String arg1) throws InterruptedException,
	 * IOException {
	 * 
	 * System.out.println("Differnt Tabs present in page"); //String
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
	 * System.out.println("The Details are as below...");
	 * System.out.println(DataContainer.get(i).getText()); } } catch
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

		System.out.println("Trying to find the if the promotion tile is displayed at top");
		String elementName = driver.findElement(By.xpath("//*[@id='contentWrapper']/div[3]/div/div[6]/div[7]"))
				.getText();

		if (elementName.contains("Recommended")) {
			if (driver.findElements(By.xpath("//*[@id='contentWrapper']/div[3]/div/div[6]/div[7]")).size() != 0) {
				System.out.println("The first tile is displayed as recommended");
			} else {
				System.out.println("The first tile is not displayed as recommended");
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

		System.out.println("Displaying the Promotion tarriff as per page");

		String var1 = "Recommended";
		String var2 = "Most-Popular";
		String PromotionDisplayed = driver.findElement(By.cssSelector(".col-xs-12.promotion-ribbon")).getText();
		((JavascriptExecutor) driver).executeScript("scroll(0,500)");

		// Below is for the Display of recommended or not
		if (PromotionDisplayed.equals(var1)) {
			System.out.println("The Promotion of the tariff displayed is Recommended");
			log.debug("The Promotion of the tariff displayed is Recommended");

		} else if (PromotionDisplayed.equals(var2)) {
			System.out.println("The Promotion of the tariff displayed is Most-Popular");
			log.debug("The Promotion of the tariff displayed is Most-Popular");

		} else {
			System.out.println("The Promotion of the tariff displayed is unknown");
		}
		Screenshots.captureScreenshot();

	}

	public static void SelectTariffMBBTab(String elementName) throws InterruptedException, AWTException, IOException {
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		if (elementName.contains("30 Days")) {
			System.out.println("Selecting a Random Tariff under 30 days tab");
			log.debug("Selecting a Random Tariff under 30 days tab");
			pageobjects.PAYMSimOPage.days30tab.click();
			Thread.sleep(3000);
			executor.executeScript("arguments[0].click();", pageobjects.PAYMSimOPage.BuyNowRandomTariffMBB30Days);

		}
		if (elementName.contains("12 Months")) {
			System.out.println("Selecting a Random Tariff under 12 Months tab");
			log.debug("Selecting a Random Tariff under 12 Months tab");
			pageobjects.PAYMSimOPage.months12tab.click();
			Thread.sleep(3000);
			executor.executeScript("arguments[0].click();", pageobjects.PAYMSimOPage.BuyNowRandomTariffMBB12Months);
		}
		Screenshots.captureScreenshot();
	}
	public static void SelectCTAtoBuySIMOtariff() throws IOException, InterruptedException {
		log.debug("clicking on Select to buy SIMO tariff");
		pageobjects.PAYMSimOPage.SelectSIMOTariff.click();
		Screenshots.captureScreenshot();
	}


	///////////////////////////Upgrade Simo Page/////////////////////////////////////////////

	public static void ClickonTabletsTabSimo() throws IOException, InterruptedException {

		WebElement element = pageobjects.PAYMSimOPage.TabletsTabSimo;
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);

	}

}