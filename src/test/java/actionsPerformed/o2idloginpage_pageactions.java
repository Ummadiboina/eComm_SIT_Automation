package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.o2idloginpage;

import java.io.IOException;

import static helpers.Environment.driver;

public class o2idloginpage_pageactions {
    final static Logger log = Logger.getLogger("o2id login pageactions");
    static JavascriptExecutor js = (JavascriptExecutor) driver;
    public static void new_accnt(String name,String pwd ) throws InterruptedException, IOException

    {
        PageFactory.initElements(driver, o2idloginpage.class);
        Thread.sleep(1000);
        o2idloginpage.alertclose.click();
        o2idloginpage.username.sendKeys(name);
        o2idloginpage.password.sendKeys(pwd);
        Screenshots.captureScreenshot();
        o2idloginpage.Loginbtn.click();
        log.debug("User logged in o2 id successfully");

    }
}
