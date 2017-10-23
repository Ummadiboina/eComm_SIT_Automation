package steps;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.remote.MobileCapabilityType;
import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import helpers.BrowserHelper;
import helpers.Environment;
import helpers.Filereadingutility;
import org.openqa.selenium.remote.DesiredCapabilities;

public class Hooks extends Environment {

	final static Logger log = Logger.getLogger("Hooks");
	//private static WebDriver driver;
	// protected static WebDriver driver;

	@Before("@Web")

	public WebDriver openBrowser() throws MalformedURLException, InterruptedException {
		System.out.println("Called openBrowser");
		log.debug("Called openBrowser");

		String relativePath = System.getProperty("user.dir");
		log.debug("The Relative path of the user.dir" + relativePath);

		String EnvPropFilePath = relativePath + "/Configurations/Properties/AppConfig.properties";
		log.debug("The Env prop path is " + EnvPropFilePath);

		String BrowserType = Filereadingutility.getPropertyValue(EnvPropFilePath, "Browser_Type");
		log.debug("The Browser type read from EnvProp file is " + BrowserType);

		String Currenturl = Filereadingutility.getPropertyValue(EnvPropFilePath, "url");
		log.debug("The current url is " + Currenturl);

		BrowserHelper.Invoke_browser(BrowserType);
		log.debug("Invoked browser");

		driver.get(Currenturl);
		log.debug("Invoked URL");

		driver.manage().deleteAllCookies();
		log.debug("Deleted all Cookies");

		driver.manage().window().maximize();
		log.debug("Maxismised window");
		return null;
	}

	@Before("@Appium")
	public void setupAppium() throws MalformedURLException, InterruptedException {
		System.out.println("Opening Mobile browser");
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "Android Device");
		capabilities.setCapability(MobileCapabilityType.BROWSER_NAME,"Chrome");
		driver = new AndroidDriver<MobileElement>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
		driver.get("https://www.o2.co.uk/shop");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@After
	/**
	 * Embed a screenshot in test report if test is marked as failed
	 */
	public void embedScreenshot(Scenario scenario) throws InterruptedException, IOException {

		if (scenario.isFailed()) {
			try {

				/*
                 * scenario.write("Current Page URL is " +driver.getCurrentUrl());
				 * log.debug("The url where it has failed is "+driver. getCurrentUrl()); //
				 * byte[] screenshot = getScreenshotAs(OutputType.BYTES); byte[] screenshot =
				 * ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
				 * scenario.embed(screenshot, "image/png");
				 */

			//	File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);

				File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
				File dest = new File("ScreenshotsForFailures\\ScreenshotsForFailures_" + timestamp() + ".jpeg");
				FileUtils.copyFile(scr, dest);

			} catch (WebDriverException somePlatformsDontSupportScreenshots) {
				System.err.println(somePlatformsDontSupportScreenshots.getMessage());
			}

		}
		Thread.sleep(2000);
		//driver.close();
		//driver.quit();

	}

	private String timestamp() {
		return new SimpleDateFormat("yyyy-MM-dd HH-mm-ss").format(new Date());
	}

}