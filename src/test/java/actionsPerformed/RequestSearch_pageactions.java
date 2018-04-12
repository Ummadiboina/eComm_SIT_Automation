package actionsPerformed;

import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.RequestSearch;

import java.io.IOException;

import static helpers.Environment.driver;

public class RequestSearch_pageactions {


        final static Logger log = Logger.getLogger("Request Number");
        static JavascriptExecutor js = (JavascriptExecutor) driver;

        public static String RequestSearch() throws InterruptedException

        {
            PageFactory.initElements(driver, RequestSearch.class);
            String reqno = RequestSearch.RequestNo.getText();
            driver.get("https://test.salesforce.com/");
            Thread.sleep(5000);
            log.debug(reqno);
            return reqno;


        }
    }


