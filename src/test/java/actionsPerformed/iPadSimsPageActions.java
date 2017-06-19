package actionsPerformed;

import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;

import GlobalActions.Autoredirection;
import helpers.Environment;

public class iPadSimsPageActions extends Environment {

	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void UpgradeUpsell_iPadSimsLandingVal() throws InterruptedException {

		Autoredirection.redirect();
		if (pageobjects.iPadSimPage.iPadSims_Page.isDisplayed()) {
			System.out.println("The iPad Page is displayed and is displayed and the banner text is : "
					+ pageobjects.iPadSimPage.iPadSims_Page.getText());

			boolean isCorrect = pageobjects.iPadSimPage.iPadSims_Page.getText()
					.contains("iPad sims Get online wherever you are");
			if (isCorrect == true)
				System.out.println("The iPad banner text is correctly displayed");
			else
				System.out.println("The iPad banner text is not correct");

			if (pageobjects.iPadSimPage.iPadSims_PageDescription.isDisplayed())
				System.out.println("The iPad Page Description is displayed and is displayed and the banner text is : "
						+ pageobjects.iPadSimPage.iPadSims_PageDescription.getText());

			boolean isDescription = pageobjects.iPadSimPage.iPadSims_PageDescription.getText()
					.contains("Get a sim for your iPad");
			if (isDescription == true)
				System.out.println("The iPad page description is displayed");
			else
				System.out.println("The iPad page secription is not displayed");

			JavascriptExecutor jsx = (JavascriptExecutor) driver;
			jsx.executeScript("window.scrollBy(0,450)", "");

			if (pageobjects.iPadSimPage.iPadSims_TariffTile_1.isDisplayed())
				System.out.println("The iPad Tariff tile 1 is displayed and is displayed and the banner text is : "
						+ pageobjects.iPadSimPage.iPadSims_TariffTile_1.getText());
			else
				System.out.println("iPad Tariff tile 1 is not displayed");

			if (pageobjects.iPadSimPage.iPadSims_TariffTile_2.isDisplayed())
				System.out.println("The iPad Tariff tile 2 is displayed and is displayed and the banner text is : "
						+ pageobjects.iPadSimPage.iPadSims_TariffTile_2.getText());
			else
				System.out.println("iPad Tariff tile 2 is not displayed");

			if (pageobjects.iPadSimPage.iPadSims_TariffTile_3.isDisplayed())
				System.out.println("The iPad Tariff tile 3 is displayed and is displayed and the banner text is : "
						+ pageobjects.iPadSimPage.iPadSims_TariffTile_3.getText());
			else
				System.out.println("iPad Tariff tile 3 is not displayed");

			if (pageobjects.iPadSimPage.iPadSims_TariffTile_4.isDisplayed())
				System.out.println("The iPad Tariff tile 4 is displayed and is displayed and the banner text is : "
						+ pageobjects.iPadSimPage.iPadSims_TariffTile_4.getText());
			else
				System.out.println("iPad Tariff tile 4 is not displayed");

			if (pageobjects.iPadSimPage.iPadSims_RecycleTile.isDisplayed())
				System.out.println("The O2 Recycle tile is displayed and is displayed and the banner text is : "
						+ pageobjects.iPadSimPage.iPadSims_RecycleTile.getText());
			else
				System.out.println("The O2 Recycle tile is not displayed");

			if (pageobjects.iPadSimPage.iPadSims_O2GuruTile.isDisplayed())
				System.out.println("The O2 Guru tile is displayed and is displayed and the banner text is : "
						+ pageobjects.iPadSimPage.iPadSims_O2GuruTile.getText());
			else
				System.out.println("The O2 Guru tile is not displayed");

			if (pageobjects.iPadSimPage.iPadSims_O2WifiTile.isDisplayed())
				System.out.println("The O2 Wifi tile is displayed and is displayed and the banner text is : "
						+ pageobjects.iPadSimPage.iPadSims_O2WifiTile.getText());
			else
				System.out.println("The O2 Wifi tile is not displayed");

			if (pageobjects.iPadSimPage.iPadSims_Tarifftable.isDisplayed())
				System.out.println(
						"The Topping up your data and tariff plan is displayed and is displayed and the banner text is : "
								+ pageobjects.iPadSimPage.iPadSims_Tarifftable.getText());
			else
				System.out.println("The Topping up your data and tariff plan is not displayed");

			pageobjects.iPadSimPage.iPadSims_TariffTile_1.click();

		}

		else

			System.out.println("The iPad sims page is not displayed");

	}

	public static void UpgradeUpsell_iPadSimsLandingAction() throws InterruptedException {

		if (pageobjects.iPadSimPage.iPadSims_TariffTile_1.isDisplayed()) {
			System.out.println("The Tariff tiles is displayed and the text is : "
					+ pageobjects.iPadSimPage.iPadSims_TariffTile_1.getText());
			pageobjects.iPadSimPage.iPadSims_TariffTile_1.click();

		}

		else

			System.out.println("The tariff tile is not displayed");

	}

}
