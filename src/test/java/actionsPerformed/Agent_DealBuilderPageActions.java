package actionsPerformed;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import GlobalActions.Screenshots;
import helpers.Environment;
import junit.framework.Assert;
import pageobjects.Agent_DealBuilderPage;

public class Agent_DealBuilderPageActions extends Environment {

	static Logger log = Logger.getLogger("devpinoyLogger");

	// this method used to perform click action on the Agent Home Page

	public static void ValidateAgentHomepage() throws IOException, InterruptedException {

		System.out.println("Agent Home page Validation" + driver.getTitle());
		log.debug("Agent Home Page validation" + driver.getTitle());
		Screenshots.captureScreenshot();

		// Assert.assertEquals("Agent Home Page",
		// pageobjects.Agent_HomePage.sectionHeading.getText());

		// Assert.assertEquals("Your basket",
		// pageobjects.BasketPage.BasketHeaderXXL.getText());
	}

	public static void SelectPAYMDevice(String Device) throws InterruptedException, IOException {

		// Reporter.log("Selected the dropdown Mrs");

		Agent_DealBuilderPage.DevicesTab.click();
		System.out.println("Clicked on Devices tab");
		log.debug("Clicked on Devices tab");
		Thread.sleep(3000);

		if (Device.contains("Random")) {
			Thread.sleep(3000);
			Agent_DealBuilderPage.firstAvailableDevice.click();
			Thread.sleep(3000);
			System.out.println("Selected device ");
			log.debug("Selected device ");

		}

		else {

			Agent_DealBuilderPage.SearchTextBox_PayMDevice.sendKeys(Device);
			System.out.println("Clicked on SearchTextBox to enter" + Device);
			log.debug("Clicked on SearchTextBox to enter" + Device);
			Agent_DealBuilderPage.SelectInStockPAYMDevice.click();
			Thread.sleep(3000);
		}
		Screenshots.captureScreenshot();
	}

	public static void SelectTariff(String Tariff) throws InterruptedException, IOException {

		Agent_DealBuilderPage.TariffsTab.click();
		Thread.sleep(5000);
		if (Tariff.contains("Random")) {
			// Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Standard");
			Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
			Thread.sleep(3000);
			System.out.println("Selected Random Tariff ");
			log.debug("Selected Random Tariff ");

		}
		if (Tariff.contains("Standard")) {
			Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Standard");
			Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
			Thread.sleep(3000);
			System.out.println("Selected Random Tariff ");
			log.debug("Selected Random Tariff ");

		}
		if (Tariff.contains("SimO")) {
			Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("- / Simo");
			Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
			Thread.sleep(3000);
			System.out.println("Selected Random SimO Tariff ");
			log.debug("Selected Random SimO Tariff ");
		}

		if (Tariff.contains("Refresh")) {
			Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Refresh");
			Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
			Thread.sleep(3000);
			System.out.println("Selected Refresh Tariff ");
			log.debug("Selected Refresh Tariff ");
		}
		////////////////////////////// Basecomms
		////////////////////////////// Tariff//////////////////////////////////////

		if (Tariff.contains("Base")) {
			Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Base");
			Thread.sleep(2000);
			Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
			Thread.sleep(3000);
			System.out.println("Selected Random Basecomms Tariff ");
			log.debug("Selected Random Basecomms Tariff ");
		}
		Screenshots.captureScreenshot();

	}
	/////////////////////////////////// Basecomms Agent Offers column
	/////////////////////////////////// validation//////////////////////////////////

	public static void BasecommsAgentOffersColumnValidation() throws InterruptedException, IOException {

		List<WebElement> menuOuter = driver.findElements(By.xpath("//*[@id='planTable']/tbody/tr"));
		System.out.println(menuOuter.size());
		int j = 1;
		for (int i = 0; i < menuOuter.size(); i++) {
			j = i + 1;
			if (menuOuter.get(i).getText().trim().contains("Base Comms")) {
				if (driver.findElement(By.xpath("//*[@id='planTable']/tbody/tr[" + j + "]/td[11]")).getText()
						.equals("Base Comms")) {
					System.out.println("Offers contains Base comms");

				} else {

					System.out.println("Offers does not contain Basecomms");
					log.debug("Offers does not contain Basecomms");
				}
			}
		}
		Screenshots.captureScreenshot();
	}

	public static void HandsetTariffCombination() throws InterruptedException, IOException {
		try {
			Select dropdown = new Select(pageobjects.Agent_DealBuilderPage.HandsetTariffCombination);
			dropdown.selectByIndex(2);
			System.out.println("Selecting combination of handset and talkplan");
			System.out.println(
					"Selected combination is" + pageobjects.Agent_DealBuilderPage.HandsetTariffCombination.getText());
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("handset and tariff dropdown is not displayed, should be fine");
			Screenshots.captureScreenshot();
		}
	}

	public static void SelectExtras(String Extras) throws InterruptedException, IOException {

		// Selecting an Extra
		Agent_DealBuilderPage.ExtrasTab.click();
		System.out.println("Clicked on Extras Tab");
		log.debug("Clicked on Extras Tab");
		Thread.sleep(3000);

		if (Extras.contains("Random")) {

			// pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
			Agent_DealBuilderPage.SelectingAvailableDataAllowance.click();
			Thread.sleep(3000);
			System.out.println("Selected Random extra ");
			log.debug("Selected Random extra ");

		}

		if (Extras.contains("Base")) {

			System.out.println("No extras for Basecomms devices");
			log.debug("No extras for Basecomms devices");

		}
		Screenshots.captureScreenshot();

	}

	public static void SelectPayGDevice(String Device) throws InterruptedException, IOException {

		Agent_DealBuilderPage.prepayDevicesTab.click();

		if (Device.contains("iPhone 7 Plus 128GB Jet Black")) {
			System.out.println("searched iPhone 7 Plus 128GB Jet Black");

			// pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
			Agent_DealBuilderPage.SearchTextBox_PrepayDevice.sendKeys(Device);

			log.debug("searched iPhone 7 Plus 128GB Jet Black");

			Thread.sleep(6000);
			Agent_DealBuilderPage.SelectInStockPAYGDevice.click();
			System.out.println("Clicked on SearchTextBox to enter" + Device);
			log.debug("Clicked on SearchTextBox to enter" + Device);
			Thread.sleep(3000);
		}
		Screenshots.captureScreenshot();
	}

	public static void SelectAccessoryDevice(String Device) throws InterruptedException, IOException {

		Agent_DealBuilderPage.AccessoriesTab.click();

		if (Device.contains("iPhone 7 Evo Elite Brushed Black")) {
			System.out.println("searched iPhone 7 Evo Elite Brushed Black");

			// pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
			Agent_DealBuilderPage.SearchTextBox_Accessories.sendKeys(Device);

			log.debug("searched iPhone 7 Evo Elite Brushed Black");

			Thread.sleep(6000);
			Agent_DealBuilderPage.SelectSeachedaccessory.click();
			System.out.println("Clicked on + symbol next to " + Device);
			log.debug("Clicked on + symbol next to " + Device);
			Thread.sleep(3000);
		}
		Screenshots.captureScreenshot();
	}

	public static void SelectPayGTariff(String Tariff) throws InterruptedException, IOException {

		Thread.sleep(3000);
		Agent_DealBuilderPage.prepayPlansTab.click();
		System.out.println("Clicked on prepayPlansTab ");
		log.debug("Clicked on prepayPlansTab ");

		if (Tariff.contains("Random")) {

			// pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
			Agent_DealBuilderPage.SelectingFirstAvailablePrePayTariff.click();
			Thread.sleep(5000);
			System.out.println("Selected Random Tariff ");
			log.debug("Selected Random Tariff ");

		}
		Screenshots.captureScreenshot();
	}

	public static void eMailBasket() throws InterruptedException, IOException {

		// Selecting an eMail Link
		Agent_DealBuilderPage.eMailBasket.click();
		System.out.println("Clicked on eMail Basket");
		log.debug("Clicked on eMail Basket");
		Thread.sleep(3000);
		Screenshots.captureScreenshot();

	}

	public static void ValdiateBasket() throws InterruptedException, IOException {
		Thread.sleep(3000);
		String str1 = Agent_DealBuilderPage.dealBuilderContent.getText();
		System.out.println(str1);
		log.debug(str1);
		Screenshots.captureScreenshot();
	}

	public static void checkout() throws InterruptedException, IOException {
		Thread.sleep(3000);
		Agent_DealBuilderPage.Checkout.click();
		System.out.println("Clicked on Checkout ");
		log.debug("Clicked on Checkout ");
		Screenshots.captureScreenshot();
	}

	public static void eMailConfirmation() throws InterruptedException, IOException {
		// TODO Auto-generated method stub

		String Mainwindow = driver.getWindowHandle();
		// getting all the popup windows , hence using getwindowhandles instead
		// of getwindowhandle
		Set<String> s1 = driver.getWindowHandles();
		Iterator<String> i1 = s1.iterator();
		while (i1.hasNext()) {
			String ChildWindow = i1.next();
			if (!Mainwindow.equalsIgnoreCase(ChildWindow)) {
				// Switching to Child window
				driver.switchTo().window(ChildWindow);
				Thread.sleep(3000);
				Agent_DealBuilderPage.ChooseBasketToSend.click();
				Thread.sleep(2000);
				Agent_DealBuilderPage.sendBasketEmailAddress.sendKeys("vinudeep.malalur@o2.com");
				Thread.sleep(3000);
				Agent_DealBuilderPage.sendBasketPopupSubmit.click();
				Thread.sleep(3000);
				// eMailConfirmation();
				// Closing the Child Window.
				String text = Agent_DealBuilderPage.emailConfirmation.getText();
				Assert.assertEquals(text, "Email sent successfully");
				Screenshots.captureScreenshot();

				driver.close();
			}
		}

		// Switching to Parent window i.e Main Window.
		driver.switchTo().window(Mainwindow);
		Screenshots.captureScreenshot();

		/*
		 * String text = Agent_DealBuilderPage.emailConfirmation.getText();
		 * Assert.assertEquals(text, "Email sent successfully");
		 */
		// driver.close();

	}

	public static void SearchDevice(String Status) throws InterruptedException, IOException {

		// Reporter.log("Selected the dropdown Mrs");
		System.out.println("Entering Search device method");
		System.out.println("The device search criteria is " + Status);

		Thread.sleep(8000);
		Agent_DealBuilderPage.DevicesTab.click();
		System.out.println("Clicked on Devices tab");
		log.debug("Clicked on Devices tab");
		Thread.sleep(3000);

		Agent_DealBuilderPage.DeviceSearchFilter.click();
		System.out.println("Clicked on Device Search field");
		log.debug("Clicked on Device Search field");
		Thread.sleep(3000);

		if (Status.contains("Delayed")) {
			Thread.sleep(3000);
			Agent_DealBuilderPage.SearchDevice.sendKeys(Status);
			;
			Thread.sleep(3000);
			System.out.println("Sent search as - " + Status);
			log.debug("Sent search as - " + Status);

		}

		if (Status.contains("Preorder")) {
			Thread.sleep(3000);
			Agent_DealBuilderPage.SearchDevice.sendKeys(Status);
			;
			Thread.sleep(3000);
			System.out.println("Sent search as - " + Status);
			log.debug("Sent search as - " + Status);

		}
		Screenshots.captureScreenshot();
	}

	public static void CCAHandsetTariffCombination() throws InterruptedException, IOException {
		try {
			Select dropdown = new Select(pageobjects.Agent_DealBuilderPage.HandsetTariffCombination);
			dropdown.selectByIndex(1);
			System.out.println("Selecting combination of handset and talkplan for CCA");
			System.out.println(
					"Selected combination is" + pageobjects.Agent_DealBuilderPage.HandsetTariffCombination.getText());
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("handset and CCA tariff dropdown is not displayed");
			Screenshots.captureScreenshot();
		}
	}

	public static void AgentTradeInQuestionair() throws InterruptedException, IOException {
		if (Agent_DealBuilderPage.AgentTradeInBtn.isDisplayed()) {
			System.out.println("The trade in button is displayed");
			Agent_DealBuilderPage.AgentTradeInBtn.click();
			log.debug("The Trade In button is clicked");

			String Mainwindow1 = driver.getWindowHandle();
			// getting all the popup windows , hence using getwindowhandles
			// instead of
			// getwindowhandle
			Set<String> s1 = driver.getWindowHandles();
			Iterator<String> i1 = s1.iterator();
			while (i1.hasNext()) {
				String ChildWindow1 = i1.next();
				if (!Mainwindow1.equalsIgnoreCase(ChildWindow1)) {
					// Switching to Child window
					driver.switchTo().window(ChildWindow1);
					Thread.sleep(3000);
					// Agent_DealBuilderPage.AgentTradeAns1.click();

					Select Question1 = new Select(pageobjects.Agent_DealBuilderPage.AgentTradeAns1);
					Question1.selectByIndex(1);

					Select Question2 = new Select(pageobjects.Agent_DealBuilderPage.AgentTradeAns2);
					Question2.selectByIndex(1);

					Select Question3 = new Select(pageobjects.Agent_DealBuilderPage.AgentTradeAns3);
					Question3.selectByIndex(1);

					Select Question4 = new Select(pageobjects.Agent_DealBuilderPage.AgentTradeAns4);
					Question4.selectByIndex(1);

					Thread.sleep(2000);

					pageobjects.Agent_DealBuilderPage.AgentTradeAccept.click();
					Screenshots.captureScreenshot();

				}
			}
			// Switching to Parent window i.e Main Window.
			driver.switchTo().window(Mainwindow1);
			Thread.sleep(5000);

			JavascriptExecutor executor = (JavascriptExecutor) driver;
			executor.executeScript("arguments[0].click();", Agent_DealBuilderPage.TradeInCheckBox);
			Screenshots.captureScreenshot();

			// Agent_DealBuilderPage.TradeInCheckboxText.click();

			// Agent_DealBuilderPage.TradeInCheckBox.click();

		} else
			System.out.println("The Trade in Button is not displayed");
		Screenshots.captureScreenshot();

	}

	public static void AgentTradeInQuestionairAns() throws InterruptedException, IOException {

		if (Agent_DealBuilderPage.TradeInQuestions.isDisplayed()) {
			System.out.println("The trade in Qustionair is displayed");
			Agent_DealBuilderPage.AgentTradeAns1.click();
			Agent_DealBuilderPage.AgentTradeAnsSelect1.click();
		}
		Screenshots.captureScreenshot();

	}

	public static void AgentBuyOut() throws InterruptedException, IOException {

		Agent_DealBuilderPage.AgentBuyOut_Button.isDisplayed();
		System.out.println("The Buy Out Qustionair is displayed");
		Agent_DealBuilderPage.AgentBuyOut_Button.click();
		Screenshots.captureScreenshot();

	}

	public static void selectStore() throws InterruptedException {

		// Selecting an Extra
		Agent_DealBuilderPage.CheckStore.click();
		System.out.println("Clicked on Check store stock Tab");
		log.debug("Clicked on Check store stock Tab");
		Thread.sleep(3000);

		String Mainwindow = driver.getWindowHandle();
		// getting all the popup windows , hence using getwindowhandles instead of
		// getwindowhandle
		Set<String> s1 = driver.getWindowHandles();
		Iterator<String> i1 = s1.iterator();
		while (i1.hasNext()) {
			String ChildWindow = i1.next();
			if (!Mainwindow.equalsIgnoreCase(ChildWindow)) {
				// Switching to Child window
				driver.switchTo().window(ChildWindow);
				Thread.sleep(3000);
				Agent_DealBuilderPage.Postcode.sendKeys("G2");

				Agent_DealBuilderPage.searchStore.click();

				JavascriptExecutor jse = (JavascriptExecutor) driver;
				jse.executeScript("window.scrollBy(0,200)", "");
				JavascriptExecutor executor = (JavascriptExecutor) driver;
				executor.executeScript("arguments[0].click();", Agent_DealBuilderPage.selectStore);

			}
		}
		// Switching to Parent window i.e Main Window.
		driver.switchTo().window(Mainwindow);
		System.out.println("Selected store is" + pageobjects.Agent_DealBuilderPage.Storedetails.getText());

	}

	public static void HandsetTariffCombinationforPhones() throws InterruptedException {
		try {
			Select dropdown = new Select(pageobjects.Agent_DealBuilderPage.HandsetTariffCombination);
			dropdown.selectByIndex(3);
			System.out.println("Selecting combination of handset and talkplan");
			System.out.println(
					"Selected combination is" + pageobjects.Agent_DealBuilderPage.HandsetTariffCombination.getText());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("handset and tariff dropdown is not displayed, should be fine");
		}
	}

}
