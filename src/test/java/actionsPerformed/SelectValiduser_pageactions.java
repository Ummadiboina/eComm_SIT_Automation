package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.Selecvaliduser;

import java.io.IOException;

import static helpers.Environment.driver;

public class SelectValiduser_pageactions {

    final static Logger log = Logger.getLogger("Select valid user pageactions");
    static JavascriptExecutor js = (JavascriptExecutor) driver;
    public static void myacntlink() throws InterruptedException, IOException

    {
        PageFactory.initElements(driver, Selecvaliduser.class);
        Selecvaliduser.searchbtn.click();
        Thread.sleep(5000);
        Selecvaliduser.userlnk.click();
        Thread.sleep(2000);
        Screenshots.captureScreenshot();
        log.debug("User can select a valid user");

    }
}
