package actionsPerformed;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import helpers.Environment;

public class TabletPageActions extends Environment {

	public static void validateElements(String Tabname) {
		System.out.println(" ");

		System.out.println("Tablet_Page_Validation");

		if (Tabname != null) {
			switch (Tabname.toLowerCase()) {
			case "filter":
				if (pageobjects.TabletPage.TabletFilterTab.isDisplayed()) {
					System.out.println("The Filter Tab is Present on the TabletPage and the Text is :"
							+ pageobjects.TabletPage.TabletFilterTab.getText());
				} else {
					System.out.println("The  Filter Tab is not Present on the TabletPage and the Text is :"
							+ pageobjects.TabletPage.TabletFilterTab.getText());
				}
				break;
			case "sort":
				if (pageobjects.TabletPage.TabletSortTab.isDisplayed()) {
					System.out.println("The  Sort Tab is Present on the TabletPage and the Text is :"
							+ pageobjects.TabletPage.TabletSortTab.getText());
				} else {
					System.out.println("The   Sort Tab is not Present on the TabletPage and the Text is :"
							+ pageobjects.TabletPage.TabletSortTab.getText());
				}
				break;

			}

		}

	}

	public static void ElementClickAction(String elementname) {
		// TODO Auto-generated method stub
		WebElement w1 = null;
		System.out.println(" ");

		System.out.println("Tablet_Page_Action");

		if (elementname != null) {
			switch (elementname.toLowerCase()) {
			case "filter":
				w1 = pageobjects.TabletPage.TabletFilterTab;
				break;
			case "sort":
				w1 = pageobjects.TabletPage.TabletSortTab;
				break;

			}

		}
	}

	public static void DeviceSelect(String elementName) throws InterruptedException {

		if (elementName.contains("Random Device")) {
			System.out.println("Random Tablet is selected");

			pageobjects.TabletPage.RandomTablet.click();
			Thread.sleep(7000);

			log.debug("Random Tablet is selected");
		}

		if (elementName.contains("AppleiPad97")) {

			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,900)", "");
			pageobjects.TabletPage.iPad97.click();
			Thread.sleep(10000);

			log.debug("iPad is selected");
			System.out.println("iPad is selected");
		}

		if (elementName.contains("SamsungGalaxy10")) {
			System.out.println("SamsungGalaxy10 is selected");

			pageobjects.TabletPage.SamsungGalaxy10.click();
			Thread.sleep(7000);

			log.debug("SamsungGalaxy10 is selected");
		}
		if (elementName.contains("Apple iPad 9.7")) {
			pageobjects.TabletPage.iPad97.click();
					Thread.sleep(10000);
					System.out.println("iPad is selected");
				}

		if (elementName.contains("Apple iPad Pro 10.5 inch")) {

					pageobjects.TabletPage.AppleiPadPro105inch.click();
					Thread.sleep(7000);
					System.out.println("Apple iPad Pro 10.5 inch is selected");
				}

	}

}
