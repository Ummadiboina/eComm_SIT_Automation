package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.Existinguserlnk;

import java.io.IOException;

import static helpers.Environment.driver;

public class Existinguserlnk_pageactions {
    final static Logger log = Logger.getLogger("Existing user link");
    static JavascriptExecutor js = (JavascriptExecutor) driver;

    public static void myacntlink() throws InterruptedException, IOException

    {
        PageFactory.initElements(driver, Existinguserlnk.class);
        driver.get("https://csupreprod-businessshop.cs88.force.com/MyO2Business/MyO2BusinessManageUserPage?pageName=Edit");
        // Existinguserlnk.searchlnk.click();
        Thread.sleep(2000);
        Screenshots.captureScreenshot();
        log.debug("Navigated to Existing User");


    }
}
