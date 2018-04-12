package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.reviewpage1;

import java.io.IOException;

import static helpers.Environment.driver;

public class reviewpage_pageactions {

    final static Logger log = Logger.getLogger("Review page pageactions");
    static int UserSpecifiedAccessoryLimit = 0;
    static int count = 0;
    static int UserSpecifiedFitnessTrackerLimit = 0;
    static JavascriptExecutor js = (JavascriptExecutor) driver;
    static int totalcount = 0;
    public static void reviewpage() throws InterruptedException, IOException

    {
        PageFactory.initElements(driver, reviewpage1.class);
        reviewpage1.submitbtn.click();
        Thread.sleep(5000);
        Screenshots.captureScreenshot();
        log.debug("Reviewed the basket");

    }

}
