package actionsPerformed;

import java.io.IOException;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.openqa.selenium.WebElement;
import pageobjects.SimFreeDevicePage;

//import Environment.Environment;

public class LikeNewSimFreeDevicePageActions extends Environment {
	final static Logger log = Logger.getLogger("LikeNewSimFreeDevicePageActions");

	public static void validatetile() throws IOException, InterruptedException {
		log.debug(" ");
		log.debug("SIM_FREE_PHONE_PAGE_VALIDATION");
		log.debug("Performing Sim Free Phones page validation");

		if (pageobjects.SimFreeDevicePage.Device_only_sim_free_Tile.getText().contains("Device only - sim free")) {
			log.debug("The Element Tile is Present and the Text is :"
					+ pageobjects.SimFreeDevicePage.Device_only_sim_free_Tile.getText());
			log.debug("The Element Tile is Present and the Text is :"
					+ pageobjects.SimFreeDevicePage.Device_only_sim_free_Tile.getText());

		} else {
			log.debug("The  Element Tile is Absent and the Text is :"
					+ pageobjects.SimFreeDevicePage.Device_only_sim_free_Tile.getText());
			log.debug("The  Element Tile is Absent and the Text is :"
					+ pageobjects.SimFreeDevicePage.Device_only_sim_free_Tile.getText());

		}

		if (pageobjects.SimFreeDevicePage.PayM_sim_free_Tile.getText().contains("Add a Pay Monthly sim")) {
			log.debug("The Element Tile is Present and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayM_sim_free_Tile.getText());
			log.debug("The Element Tile is Present and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayM_sim_free_Tile.getText());

		} else {
			log.debug("The  Element Tile is Absent and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayM_sim_free_Tile.getText());
			log.debug("The  Element Tile is Absent and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayM_sim_free_Tile.getText());

		}

		if (pageobjects.SimFreeDevicePage.PayG_sim_free_Tile.getText().contains("Add a Pay As You Go Sim")) {
			log.debug("The Element Tile is Present and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayG_sim_free_Tile.getText());
			log.debug("The Element Tile is Present and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayG_sim_free_Tile.getText());
		} else {
			log.debug("The  Element Tile is Absent and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayG_sim_free_Tile.getText());
			log.debug("The  Element Tile is Absent and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayG_sim_free_Tile.getText());
		}
		Screenshots.captureScreenshot();

	}

	public static void ElementClick(String elementName) throws IOException, InterruptedException {

		if (elementName.contains("Device_only_sim_free_Select")) {
			pageobjects.SimFreeDevicePage.Device_only_sim_free_Select.sendKeys(Keys.ENTER);
            log.debug("Selecting a Sim Free Device");
		}
		if (elementName.contains("PayM_sim_free_Select")) {
			pageobjects.SimFreeDevicePage.PayM_sim_free_Select.sendKeys(Keys.ENTER);
            log.debug("Selecting a Pay Monthly Sim Free Device");
		}
		if (elementName.contains("PayM_sim_free_Select")) {
			pageobjects.SimFreeDevicePage.PayM_sim_free_Select.sendKeys(Keys.ENTER);
            log.debug("Selecting a Pay as you Go sim with Sim Free Device");
		}
		Screenshots.captureScreenshot();
	}

	public static void LikeNewColorDropDownOptions() throws IOException, InterruptedException {

		if (SimFreeDevicePage.LikeNewColourDropdown.isDisplayed()) {

			WebElement colourDropdown = driver.findElement(By.xpath("//*[@id='colourSelectBoxItOptions']"));
			List<WebElement> elementColor = colourDropdown.findElements(By.xpath("//*[@class='selectboxit-option-label']"));
			for (int i = 0; i < elementColor.size(); i++) {
				log.debug(elementColor.get(i).getText());
			}
			log.debug("The colours labels are displayed");
			log.debug("The colours labels are displayed");
		} else
			log.debug("The colour labels are not displayed");

	}

	public static void LikeNewColorTariffSelect(String TariffType) throws IOException, InterruptedException {

		if(TariffType.contains("DeviceOnly")) {
			SimFreeDevicePage.Device_only_sim_free_Select.click();
			log.debug("Device only is clicked");

		}
		else
			log.debug("The Device only button not displayed");


	}

}


