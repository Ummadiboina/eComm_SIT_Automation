package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.SeeDetails;

import java.io.IOException;

import static helpers.Environment.driver;

public class SeeDetails_pageactions {
    final static Logger log = Logger.getLogger("See details pageactions");
    static JavascriptExecutor js = (JavascriptExecutor) driver;
    public static void new_accnt() throws InterruptedException, IOException

    {
        PageFactory.initElements(driver, SeeDetails.class);
        SeeDetails.seedetails_link.click();
        Thread.sleep(2000);
        Screenshots.captureScreenshot();
        log.debug("User can see the details successfully");
    }
}
