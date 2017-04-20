package steps;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import helpers.*;

public class Hooks extends Environment{
	
	static	Logger log = Logger.getLogger("devpinoyLogger");

   // protected static WebDriver driver;

	    @Before
    /**
     * Delete all cookies at the start of each scenario to avoid
     * shared state between tests
     */
      public WebDriver openBrowser() throws MalformedURLException 
	    {
    	System.out.println("Called openBrowser");
		log.debug("Called openBrowser");

    	String relativePath = System.getProperty("user.dir");
    	log.debug("The Relative path of the user.dir"+relativePath);
    	
    	String EnvPropFilePath = relativePath + "\\src\\test\\java\\Properties\\AppConfig.properties";
    	log.debug("The Env prop path is "+EnvPropFilePath);
    	
    	String BrowserType = Filereadingutility.getPropertyValue(EnvPropFilePath, "Browser_Type");
    	log.debug("The Browser type read from EnvProp file is "+BrowserType);
    	
    	String Currenturl = Filereadingutility.getPropertyValue(EnvPropFilePath, "Agenturl");
    	log.debug("The current url is "+Currenturl);

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

     
    @After
    /**
     * Embed a screenshot in test report if test is marked as failed
     */
    public void embedScreenshot(Scenario scenario) throws InterruptedException, IOException {
       
        if(scenario.isFailed()) {
        try {
        
        /*	 scenario.write("Current Page URL is " +driver.getCurrentUrl());
        	 log.debug("The url where it has failed is "+driver.getCurrentUrl());
//            byte[] screenshot = getScreenshotAs(OutputType.BYTES);
            byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png"); */
        	
        	File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);

    		File scr=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
    	    File dest= new File("ScreenshotsForFailures\\ScreenshotsForFailures_"+timestamp()+".jpeg");
    	    FileUtils.copyFile(scr, dest);
    	    //C:\Automation\Git Repositories New\RegressionV1.0\ScreenshotsForSteps
    	

        } catch (WebDriverException somePlatformsDontSupportScreenshots) {
            System.err.println(somePlatformsDontSupportScreenshots.getMessage());
        }
        
      
        }
        Thread.sleep(2000);
//driver.close();
        
    }


	private String timestamp() {
	    return new SimpleDateFormat("yyyy-MM-dd HH-mm-ss").format(new Date());
	}
    
}