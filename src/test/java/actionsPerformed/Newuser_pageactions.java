package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.Newuser;

import java.io.IOException;

import static helpers.Environment.driver;

public class Newuser_pageactions {

    final static Logger log = Logger.getLogger("New user pageactions");
    static JavascriptExecutor js = (JavascriptExecutor) driver;
    public static void myacntlink() throws InterruptedException, IOException

    {
        PageFactory.initElements(driver, Newuser.class);
        driver.get("https://csupreprod-businessshop.cs88.force.com/MyO2Business/MyO2BusinessManageUserPage?pageName=Create");
        Thread.sleep(2000);
        Screenshots.captureScreenshot();
        log.debug("Navigated to Create new user");

    }
}
