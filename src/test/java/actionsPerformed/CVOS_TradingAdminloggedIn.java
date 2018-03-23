package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import helpers.Environment;

public class CVOS_TradingAdminloggedIn extends Environment {

	final static Logger log = Logger.getLogger("CVOS_TradingAdminloggedIn");

	public static void CVOSTradingVal() throws InterruptedException, IOException {
		if (pageobjects.CVOS_PageObjects.stockpotTab.isDisplayed()) {
			log.debug("The Stockpot tab is displayed : " + pageobjects.CVOS_PageObjects.stockpotTab.getText());
			log.debug("The Stockpot tab is displayed : " + pageobjects.CVOS_PageObjects.stockpotTab.getText());
		} else
			log.debug("The Stockpot tab is not displayed");
		log.debug("The Stockpot tab is not displayed");

		if (pageobjects.CVOS_PageObjects.registrationTab.isDisplayed()) {
			log.debug(
					"The Registration tab is displayed : " + pageobjects.CVOS_PageObjects.registrationTab.getText());
			log.debug("The Registration tab is displayed : " + pageobjects.CVOS_PageObjects.registrationTab.getText());
		} else
			log.debug("The Registration tab is not displayed");
		log.debug("The Registration tab is not displayed");

		if (pageobjects.CVOS_PageObjects.stockMerchandiseTab.isDisplayed()) {
			log.debug("The stockMerchandiseTab is displayed : "
					+ pageobjects.CVOS_PageObjects.stockMerchandiseTab.getText());
			log.debug("The stockMerchandiseTab is displayed : "
					+ pageobjects.CVOS_PageObjects.stockMerchandiseTab.getText());
		} else
			log.debug("The stockMerchandiseTab is not displayed");
		log.debug("The stockMerchandiseTab is not displayed");
		Screenshots.captureScreenshot();
	}

	public static void CVOSTradingStockpot() throws InterruptedException, IOException {

		pageobjects.CVOS_PageObjects.stockpotTab.click();
		log.debug("The Stockpot tab is clicked");
		Screenshots.captureScreenshot();

	}

}
