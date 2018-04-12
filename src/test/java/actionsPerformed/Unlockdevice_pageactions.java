package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.Unlockdevice;

import java.io.IOException;

import static helpers.Environment.driver;

public class Unlockdevice_pageactions {

    final static Logger log = Logger.getLogger("Unlock device pageactions");
    static JavascriptExecutor js = (JavascriptExecutor) driver;

    public static void myacntlink() throws InterruptedException, IOException

    {
        PageFactory.initElements(driver, Unlockdevice.class);

        Unlockdevice.unlocklnk.click();
        Thread.sleep(2000);
        Screenshots.captureScreenshot();
        log.debug("User can unlock device successfully");

    }
    }
