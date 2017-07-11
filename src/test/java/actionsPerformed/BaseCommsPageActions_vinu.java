package actionsPerformed;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

import GlobalActions.RandomEmailAddressCreation;
import helpers.Environment;
import helpers.Filereadingutility;
import junit.framework.Assert;
import pageobjects.DeliveryPage;
import pageobjects.BasketPage.*;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.fail;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import org.apache.log4j.Logger;

@SuppressWarnings("unused")
public class BaseCommsPageActions_vinu extends Environment

{

	
	public static void SelectBaseCommTariff(String elementName) {

		if (elementName.contains("Random")) {
			System.out.println("Selected Random Tariff");

			pageobjects.BaseCommsPage.RandomDevice.click();
			log.debug("Selected Random Device");

		}

		
	}



}
