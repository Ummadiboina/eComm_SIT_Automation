package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.viewandmanageacnt;

import java.io.IOException;

import static helpers.Environment.driver;

public class viewandmanageacnt_pageactions {

    final static Logger log = Logger.getLogger("View and manage account pageactions");
    static JavascriptExecutor js = (JavascriptExecutor) driver;
    public static void myacntlink() throws InterruptedException, IOException

    {
        PageFactory.initElements(driver, viewandmanageacnt.class);
        viewandmanageacnt.Myaccntlnk.click();
        Thread.sleep(10000);
        viewandmanageacnt.sugstlnk.click();
        Thread.sleep(5000);
        Screenshots.captureScreenshot();
        log.debug("User can view and manage his accounts");
    }

}
