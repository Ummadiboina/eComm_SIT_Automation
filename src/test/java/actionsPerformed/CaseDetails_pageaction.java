package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import pageobjects.CaseDetails;

import java.io.IOException;

import static helpers.Environment.driver;

public class CaseDetails_pageaction {

    final static Logger log = Logger.getLogger("Case Details Pageactions");
    static JavascriptExecutor js = (JavascriptExecutor) driver;

    public static void CaseDetails() throws InterruptedException, IOException {
        PageFactory.initElements(driver, CaseDetails.class);
        Thread.sleep(1000);
        CaseDetails.closebtn.click();
        Thread.sleep(3000);
         Select drp1=new Select(CaseDetails.statusselect);
        drp1.selectByVisibleText("Closed");
        CaseDetails.savebtn.click();
        Thread.sleep(5000);
        Screenshots.captureScreenshot();
        log.debug("Case is closed");

    }
}
