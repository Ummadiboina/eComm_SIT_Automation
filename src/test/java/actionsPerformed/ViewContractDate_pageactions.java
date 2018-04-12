package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.ViewContractDate;

import java.io.IOException;

import static helpers.Environment.driver;

public class ViewContractDate_pageactions {
    final static Logger log = Logger.getLogger("View contract date pageactions");
    static JavascriptExecutor js = (JavascriptExecutor) driver;

    public static void myacntlink() throws InterruptedException, IOException

    {
        PageFactory.initElements(driver, ViewContractDate.class);
        ViewContractDate.contactdatelnk.click();
        Thread.sleep(5000);
        Screenshots.captureScreenshot();
        log.debug("User can view his contract date");


    }
}
