package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import helpers.Environment;

public class CVOS_SupplyChainloggedIn extends Environment {

	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void CVOSSupplyChainVal() throws InterruptedException, IOException {
		if (pageobjects.CVOS_PageObjects.stockpotTab.isDisplayed()) {
			System.out.println("The Stockpot tab is displayed : " + pageobjects.CVOS_PageObjects.stockpotTab.getText());
			log.debug("The Stockpot tab is displayed : " + pageobjects.CVOS_PageObjects.stockpotTab.getText());
		} else
			System.out.println("The Stockpot tab is not displayed");
		log.debug("The Stockpot tab is not displayed");

		if (pageobjects.CVOS_PageObjects.templateTab.isDisplayed()) {
			System.out.println("The template tab is displayed : " + pageobjects.CVOS_PageObjects.templateTab.getText());
			log.debug("The template tab is displayed : " + pageobjects.CVOS_PageObjects.templateTab.getText());
		} else
			System.out.println("The template tab is not displayed");
		log.debug("The template tab is not displayed");

		if (pageobjects.CVOS_PageObjects.registrationTab.isDisplayed()) {
			System.out.println(
					"The Registration tab is displayed : " + pageobjects.CVOS_PageObjects.registrationTab.getText());
			log.debug("The Registration tab is displayed : " + pageobjects.CVOS_PageObjects.registrationTab.getText());
		} else
			System.out.println("The Registration tab is not displayed");
		log.debug("The Registration tab is not displayed");

		if (pageobjects.CVOS_PageObjects.stockUploadTab.isDisplayed()) {
			System.out.println(
					"The Stock Upload tab is displayed : " + pageobjects.CVOS_PageObjects.stockUploadTab.getText());
			log.debug("The Stock Upload tab is displayed : " + pageobjects.CVOS_PageObjects.stockUploadTab.getText());
		} else
			System.out.println("The Stock Upload tab is not displayed");
		log.debug("The Stock Upload tab is not displayed");

		if (pageobjects.CVOS_PageObjects.stockMerchandiseTab.isDisplayed()) {
			System.out.println("The stockMerchandiseTab is displayed : "
					+ pageobjects.CVOS_PageObjects.stockMerchandiseTab.getText());
			log.debug("The stockMerchandiseTab is displayed : "
					+ pageobjects.CVOS_PageObjects.stockMerchandiseTab.getText());
		} else
			System.out.println("The stockMerchandiseTab is not displayed");
		log.debug("The stockMerchandiseTab is not displayed");

		if (pageobjects.CVOS_PageObjects.skuMasterTab.isDisplayed()) {
			System.out
					.println("The skuMasterTab is displayed : " + pageobjects.CVOS_PageObjects.skuMasterTab.getText());
			log.debug("The skuMasterTab is displayed : " + pageobjects.CVOS_PageObjects.skuMasterTab.getText());
		} else
			System.out.println("The skuMasterTab is not displayed");
		log.debug("The skuMasterTab is not displayed");

		pageobjects.CVOS_PageObjects.stockpotTab.click();
		log.debug("The Stockpot tab is clicked");

		Screenshots.captureScreenshot();
	}

}
