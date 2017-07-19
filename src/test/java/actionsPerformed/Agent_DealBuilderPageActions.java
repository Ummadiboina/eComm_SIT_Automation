package actionsPerformed;

import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import helpers.Environment;
import pageobjects.Agent_DealBuilderPage;

public class Agent_DealBuilderPageActions extends Environment {

	static Logger log = Logger.getLogger("devpinoyLogger");

	// this method used to perform click action on the Agent Home Page

	public static void ValidateAgentHomepage() {

		System.out.println("Agent Home page Validation" + driver.getTitle());
		log.debug("Agent Home Page validation" + driver.getTitle());

		// Assert.assertEquals("Agent Home Page",
		// pageobjects.Agent_HomePage.sectionHeading.getText());

		// Assert.assertEquals("Your basket",
		// pageobjects.BasketPage.BasketHeaderXXL.getText());
	}

	public static void SelectPAYMDevice(String Device) throws InterruptedException {

		// Reporter.log("Selected the dropdown Mrs");

		Agent_DealBuilderPage.DevicesTab.click();
		System.out.println("Clicked on Devices tab");
		log.debug("Clicked on Devices tab");
		Thread.sleep(3000);

		if (Device.contains("Random")) {
			// Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Standard");
			Agent_DealBuilderPage.firstAvailableDevice.click();
			Thread.sleep(3000);
			System.out.println("Selected Basecomms device ");
			log.debug("Selected basecomms device ");

		}

		else {

			Agent_DealBuilderPage.SearchTextBox_PayMDevice.sendKeys(Device);
			System.out.println("Clicked on SearchTextBox to enter" + Device);
			log.debug("Clicked on SearchTextBox to enter" + Device);
			Agent_DealBuilderPage.SelectInStockPAYMDevice.click();
			Thread.sleep(3000);
		}
	}


	public static void SelectTariff(String Tariff) throws InterruptedException {

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
			System.out.println("Selected Random SimO Tariff ");
			log.debug("Selected Random SimO Tariff ");
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

	}
	/////////////////////////////////// Basecomms Agent Offers column
	/////////////////////////////////// validation//////////////////////////////////

	public static void BasecommsAgentOffersColumnValidation() throws InterruptedException {

		List<WebElement> menuOuter = driver.findElements(By.xpath("//*[@id='planTable']/tbody").tagName("td"));

		for (int i = 0; i < menuOuter.size(); i++) {
			if (menuOuter.get(i).getText().trim().contains("Base Comms")) {
				if (driver.findElement(By.xpath("//*[@id='planTable']/tbody/tr[" + i + "]/td[11]")).getText()
						.equals("Base Comms"))
					System.out.println("Offers contains Base comms");

			}

			else

				System.out.println("Offers does not contain Basecomms");
		}

	}

	public static void HandsetTariffCombination() throws InterruptedException {
		Select dropdown = new Select(pageobjects.Agent_DealBuilderPage.HandsetTariffCombination);
		dropdown.selectByIndex(2);
		System.out.println("Selecting combination of handset and talkplan");
		System.out.println(
				"Selected combination is" + pageobjects.Agent_DealBuilderPage.HandsetTariffCombination.getText());
	}

	public static void SelectExtras(String Extras) throws InterruptedException {

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

	}

	public static void SelectPayGDevice(String Device) throws InterruptedException {

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
	}

	public static void SelectAccessoryDevice(String Device) throws InterruptedException {

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
	}

	public static void SelectPayGTariff(String Tariff) throws InterruptedException {

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
	}

	public static void eMailBasket() throws InterruptedException {

		// Selecting an eMail Link
		Agent_DealBuilderPage.eMailBasket.click();
		System.out.println("Clicked on eMail Basket");
		log.debug("Clicked on eMail Basket");
		Thread.sleep(3000);
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
				Agent_DealBuilderPage.sendBasketEmailAddress.sendKeys("vinudeep.malalur@o2.com");
				Thread.sleep(3000);
				Agent_DealBuilderPage.sendBasketPopupSubmit.click();
				Thread.sleep(3000);
				// Closing the Child Window.
				driver.close();
			}
		}
		// Switching to Parent window i.e Main Window.
		driver.switchTo().window(Mainwindow);
	}

	public static void ValdiateBasket() throws InterruptedException {
		Thread.sleep(3000);
		String str1 = Agent_DealBuilderPage.dealBuilderContent.getText();
		System.out.println(str1);
		log.debug(str1);
	}

	public static void checkout() throws InterruptedException {
		Thread.sleep(3000);
		Agent_DealBuilderPage.Checkout.click();
		System.out.println("Clicked on Checkout ");
		log.debug("Clicked on Checkout ");
	}

}
