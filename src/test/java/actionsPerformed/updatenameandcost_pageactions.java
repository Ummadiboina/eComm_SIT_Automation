package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.updatenameandcost;

import java.io.IOException;

import static helpers.Environment.driver;

public class updatenameandcost_pageactions {
        final static Logger log = Logger.getLogger("Update name and cost pageactions");
        static JavascriptExecutor js = (JavascriptExecutor) driver;

    public static void updatenameandcost() throws InterruptedException, IOException

    {
        PageFactory.initElements(driver, updatenameandcost.class);//check this
        updatenameandcost.updatenameandcost_lnk.click();
        Thread.sleep(10000);
        Screenshots.captureScreenshot();
        log.debug("User can update his name and cost center");
    }
}
