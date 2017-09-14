package actionsPerformed;

import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;
import helpers.Environment;
import pageobjects.FreeSimPage;

public class FreeSimPageActions extends Environment {

	public List<HashMap<String, String>> datamap;
	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void iPadsandTabletstab() throws InterruptedException {
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,150)", "");

		System.out.println("Clicking on iPadsandTabletstab");
		Thread.sleep(3000);
		pageobjects.FreeSimPage.iPadsandTabletstab.click();
		log.debug("Clicking on iPadsandTablets tab");

	}

	public static void iPadsim() throws InterruptedException {
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,450)", "");

		System.out.println("Clicking on Steady surfer ipad sim");
		Thread.sleep(1000);
		jse.executeScript("arguments[0].click();", pageobjects.FreeSimPage.SteadyiPadsim);
		log.debug("Clicking on iPadsandTablets tab");

	}

	public static void EnterManually() throws InterruptedException {

		System.out.println("Clicking on Enter Manually link");
		pageobjects.FreeSimPage.EnterManually.click();
		Thread.sleep(3000);
		log.debug("Clicking on Enter Manually link");
		pageobjects.FreeSimPage.flat.sendKeys("26");
		System.out.println("Enter the flat no : 26");
		pageobjects.FreeSimPage.housename.sendKeys("100");
		System.out.println("Enter the housename : 100");
		pageobjects.FreeSimPage.address.sendKeys("slough");
		System.out.println("Enter the address 1 : slough");
		pageobjects.FreeSimPage.town.sendKeys("berks");
		System.out.println("Enter the town: berks");
		pageobjects.FreeSimPage.postcode.sendKeys("sl11er");
		System.out.println("Enter the postcode : s1ller");
		pageobjects.FreeSimPage.email.sendKeys("arasi@02.com");
		System.out.println("Enter the mail id");
		Select dropdown = new Select(pageobjects.FreeSimPage.title);
		dropdown.selectByIndex(2);
		System.out.println("select the title : Mrs");
		pageobjects.FreeSimPage.firstname.sendKeys("test");
		System.out.println("First name : test");
		pageobjects.FreeSimPage.secondname.sendKeys("accepta");
		System.out.println("First name : accepta");
		pageobjects.FreeSimPage.contact.sendKeys("07123456789");
		System.out.println("Mobile number : 07123456789");
		pageobjects.FreeSimPage.check.click();
		System.out.println("TC checkbox");
		pageobjects.FreeSimPage.order.click();
		System.out.println("place order button");
	}

}
