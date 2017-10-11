package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;

import GlobalActions.Screenshots;
import helpers.Environment;

//import Environment.Environment;

public class LikeNewSimFreeDevicePageActions extends Environment {
	final static Logger log = Logger.getLogger("LikeNewSimFreeDevicePageActions");

	public static void validatetile() throws IOException, InterruptedException {
		System.out.println(" ");
		System.out.println("SIM_FREE_PHONE_PAGE_VALIDATION");
		log.debug("Performing Sim Free Phones page validation");

		if (pageobjects.SimFreeDevicePage.Device_only_sim_free_Tile.getText().contains("Device only - sim free")) {
			System.out.println("The Element Tile is Present and the Text is :"
					+ pageobjects.SimFreeDevicePage.Device_only_sim_free_Tile.getText());
			log.debug("The Element Tile is Present and the Text is :"
					+ pageobjects.SimFreeDevicePage.Device_only_sim_free_Tile.getText());

		} else {
			System.out.println("The  Element Tile is Absent and the Text is :"
					+ pageobjects.SimFreeDevicePage.Device_only_sim_free_Tile.getText());
			log.debug("The  Element Tile is Absent and the Text is :"
					+ pageobjects.SimFreeDevicePage.Device_only_sim_free_Tile.getText());

		}

		if (pageobjects.SimFreeDevicePage.PayM_sim_free_Tile.getText().contains("Add a Pay Monthly sim")) {
			System.out.println("The Element Tile is Present and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayM_sim_free_Tile.getText());
			log.debug("The Element Tile is Present and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayM_sim_free_Tile.getText());

		} else {
			System.out.println("The  Element Tile is Absent and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayM_sim_free_Tile.getText());
			log.debug("The  Element Tile is Absent and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayM_sim_free_Tile.getText());

		}

		if (pageobjects.SimFreeDevicePage.PayG_sim_free_Tile.getText().contains("Add a Pay As You Go Sim")) {
			System.out.println("The Element Tile is Present and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayG_sim_free_Tile.getText());
			log.debug("The Element Tile is Present and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayG_sim_free_Tile.getText());
		} else {
			System.out.println("The  Element Tile is Absent and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayG_sim_free_Tile.getText());
			log.debug("The  Element Tile is Absent and the Text is :"
					+ pageobjects.SimFreeDevicePage.PayG_sim_free_Tile.getText());
		}
		Screenshots.captureScreenshot();

	}

	public static void ElementClick(String elementName) throws IOException, InterruptedException {

		if (elementName.contains("Device_only_sim_free_Select")) {
			pageobjects.SimFreeDevicePage.Device_only_sim_free_Select.sendKeys(Keys.ENTER);
			;
			log.debug("Selecting a Sim Free Device");
		}
		if (elementName.contains("PayM_sim_free_Select")) {
			pageobjects.SimFreeDevicePage.PayM_sim_free_Select.sendKeys(Keys.ENTER);
			;
			log.debug("Selecting a Pay Monthly Sim Free Device");
		}
		if (elementName.contains("PayM_sim_free_Select")) {
			pageobjects.SimFreeDevicePage.PayM_sim_free_Select.sendKeys(Keys.ENTER);
			;
			log.debug("Selecting a Pay as you Go sim with Sim Free Device");
		}
		Screenshots.captureScreenshot();
	}

}
