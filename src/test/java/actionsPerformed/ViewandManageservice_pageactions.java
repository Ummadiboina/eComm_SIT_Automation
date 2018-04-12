package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.ViewandManageservice;

import java.io.IOException;

import static helpers.Environment.driver;

public class ViewandManageservice_pageactions {

    final static Logger log = Logger.getLogger("View and manage service pageactions");
    static JavascriptExecutor js = (JavascriptExecutor) driver;
    public static void myacntlink() throws InterruptedException, IOException

    {
        PageFactory.initElements(driver, ViewandManageservice.class);
        ViewandManageservice.viewandmanagelink.click();
        Thread.sleep(5000);
        Screenshots.captureScreenshot();
        log.debug("User can view and manage his service");


    }
}
