package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.updateusername;

import java.io.IOException;

import static helpers.Environment.driver;

public class updateusername_pageactions {
    final static Logger log = Logger.getLogger("Update user name pageactions");
    static JavascriptExecutor js = (JavascriptExecutor) driver;
    public static void username(String nwuser) throws InterruptedException, IOException

    {
        PageFactory.initElements(driver, updateusername.class);
        Thread.sleep(3000);
        updateusername.username1.clear();
        updateusername.username1.sendKeys(nwuser);
        Thread.sleep(3000);
        updateusername.reviewpage.click();
        Thread.sleep(5000);
        Screenshots.captureScreenshot();
        log.debug("User can update his user name");
    }
}
