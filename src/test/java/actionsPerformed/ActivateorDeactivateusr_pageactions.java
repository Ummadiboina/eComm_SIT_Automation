package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.ActivateorDeactivateusr;

import java.io.IOException;

import static helpers.Environment.driver;

public class ActivateorDeactivateusr_pageactions {
    final static Logger log = Logger.getLogger("Activate or deactivate pageactions");
    static JavascriptExecutor js = (JavascriptExecutor) driver;

    public static void myacntlink() throws InterruptedException, IOException

    {

        PageFactory.initElements(driver, ActivateorDeactivateusr.class);
        ActivateorDeactivateusr.actDeactbtn.click();
        driver.switchTo().alert().accept();
        Screenshots.captureScreenshot();
        ActivateorDeactivateusr.submtbtn.click();
        log.debug("User is activated or deactivated");
    }
}
