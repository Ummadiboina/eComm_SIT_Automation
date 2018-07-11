package actionsPerformed;

import GlobalActions.CommonActions;
import helpers.Environment;
import org.apache.log4j.Logger;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import pageobjects.RemedyLoginPage;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

public class RemedyLoginAction extends Environment {

    public List<HashMap<String, String>> datamap;
    final static Logger log = Logger.getLogger("DeliveryPageActions");
    static JavascriptExecutor js = (JavascriptExecutor) driver;
    public static String query1 = "( '1000003229' = \"WP Procurement\" OR '1000003229' = \"My IT Procurement\" ) AND ( 'Status*' = \"Pending\" AND 'Status Reason' = \"Purchase Order Approval\")";
    public static int thisDate;
    public static int thisMonth;
    public static String text_SammaryField;
    public static String subTextOfSummay;
    public static String updatedSummaryText;

    public static void LoginIntoRemedyApp(String userName, String password) {
        try {
            CommonActions.setDataForTextField(RemedyLoginPage.userName_field, userName);
            CommonActions.setDataForTextField(RemedyLoginPage.password_field, password);
            CommonActions.clickWebElement(RemedyLoginPage.loginCta);
            Thread.sleep(6000);

        /*Thread.sleep(4000);
        RemedyLoginPage.userName_field.sendKeys(userName);
        RemedyLoginPage.password_field.sendKeys(password);
        Thread.sleep(3000);
        RemedyLoginPage.loginCta.click();
        Thread.sleep(2000);
        JavascriptExecutor executor = (JavascriptExecutor)driver;
        executor.executeScript("arguments[0].click();", RemedyLoginPage.loginCta);*/

        } catch (Exception e) {
            System.out.println("Failed to login to the Remedy Portal, please look the error message for reference " + e.getMessage());
        }
    }


    public static void chooseAppType() {
        try {
            CommonActions.clickWebElement(RemedyLoginPage.applicationsTab);
            CommonActions.mouseHousrOnElement(RemedyLoginPage.servReqMangmtTab);
            CommonActions.clickWebElement(RemedyLoginPage.searchWorkOrder);
            Thread.sleep(10000);
            CommonActions.clickWebElement(RemedyLoginPage.newSearch);
            Thread.sleep(3000);
            CommonActions.clickWebElement(RemedyLoginPage.advancedSearch);
            Thread.sleep(3000);
            CommonActions.scrollToElement(RemedyLoginPage.serchBtnAtBottom);
            Thread.sleep(3000);

            Actions actions = new Actions(driver);
            actions.moveToElement(RemedyLoginPage.querySerchBarTextField);
            actions.click();
            Thread.sleep(1000l);
            actions.sendKeys(query1);
            Thread.sleep(3000);
            actions.build().perform();
            Thread.sleep(10000);
            CommonActions.clickWebElement(RemedyLoginPage.serchBtnAtBottom);
            Thread.sleep(3000);

            // get ToDay date
            DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy", Locale.UK);
            Date date = new Date();
            System.out.println("The date format is :: " + dateFormat.format(date));
            String todayDate = dateFormat.format(date);
            StringTokenizer st = new StringTokenizer(todayDate, "/");
            thisDate = Integer.parseInt(st.nextToken());
            thisMonth = Integer.parseInt(st.nextToken());

            Thread.sleep(5000);
            List<WebElement> lstSize = driver.findElements(By.xpath("//th[normalize-space()='Submit Date']/../following-sibling::tr/td[4]//span"));

            for (int i = 1; i < lstSize.size(); i++) {

                String capturDatge = driver.findElement(By.xpath("(//*[@id='T301389923']//th[normalize-space()='Submit Date']/../following-sibling::tr[" + i + "]/td[4]//span)[1]")).getText();
                String nameOfSubmitter = driver.findElement(By.xpath("(//*[@id='T301389923']//th[normalize-space()='Submit Date']/../following-sibling::tr[" + i + "]/td[5]//span)[1]")).getText();
                StringTokenizer strT = new StringTokenizer(capturDatge, "/");
                int getDate = Integer.parseInt(strT.nextToken());
                int getMonth = Integer.parseInt(strT.nextToken());

                driver.findElement(By.xpath("//img[@alt='Editor for Summary*']")).click();
                Thread.sleep(3000);
                text_SammaryField = driver.findElement(By.xpath("//div[@class='OverflowAuto']/textarea")).getText();
                Thread.sleep(3000);
                driver.findElement(By.xpath("//button[@class='Close  right']")).click();
                Thread.sleep(3000);

                subTextOfSummay = text_SammaryField.substring(0, 5);

                if (thisMonth >= getMonth) {
                    if ((thisDate - getDate) >= 0) {
                        summaryUpdateWithCT(subTextOfSummay);
                    }

                } else {
                    System.out.println("Not able to validate the date");
                    break;
                }
            }

        } catch (Exception e) {
            System.out.println("Failed to login to the Remedy Portal, please look the error message for reference " + e.getMessage());
        }
    }

    public static void summaryUpdateWithCT(String subTextOfSummay) throws InterruptedException {

        Thread.sleep(3000);

        if (!subTextOfSummay.contains("CT")) {
            updatedSummaryText = "CT0 " + thisDate + "/" + thisMonth + " " + text_SammaryField;

            Thread.sleep(1000);
            CommonActions.scrollToElement(RemedyLoginPage.add_updateRequest);
            Thread.sleep(1000);
            RemedyLoginPage.noteTextArea.sendKeys("Sample Text yet to get");
            Thread.sleep(1000);
            CommonActions.clickWebElement(RemedyLoginPage.moreDetailsArrow);
            CommonActions.clickWebElement(RemedyLoginPage.radioBtn_public);
            Thread.sleep(2000);
        } else if (subTextOfSummay.contains("CT0")) {
            updatedSummaryText = "CT1 " + thisDate + "/" + thisMonth + " " + text_SammaryField;

            RemedyLoginPage.noteTextArea.sendKeys("Sample Text yet to get");
            Thread.sleep(1000);
            CommonActions.clickWebElement(RemedyLoginPage.moreDetailsArrow);
            CommonActions.clickWebElement(RemedyLoginPage.radioBtn_public);
            Thread.sleep(2000);
        } else if (subTextOfSummay.contains("CT1")) {
            updatedSummaryText = "CT2 " + thisDate + "/" + thisMonth + " " + text_SammaryField;

            RemedyLoginPage.noteTextArea.sendKeys("Sample Text yet to get");
            Thread.sleep(1000);
            CommonActions.clickWebElement(RemedyLoginPage.moreDetailsArrow);
            CommonActions.clickWebElement(RemedyLoginPage.radioBtn_public);
            Thread.sleep(2000);
        } else if (subTextOfSummay.contains("CT2")) {
            updatedSummaryText = "CT3 " + thisDate + "/" + thisMonth + " " + text_SammaryField;

            RemedyLoginPage.noteTextArea.sendKeys("Sample Text yet to get");
            Thread.sleep(1000);
            CommonActions.clickWebElement(RemedyLoginPage.moreDetailsArrow);
            CommonActions.clickWebElement(RemedyLoginPage.radioBtn_public);
            Thread.sleep(2000);

        } else if (subTextOfSummay.contains("CT3")) {
            updatedSummaryText = text_SammaryField;

            RemedyLoginPage.noteTextArea.sendKeys("Sample Text yet to get");
            Thread.sleep(1000);
            CommonActions.clickWebElement(RemedyLoginPage.moreDetailsArrow);
            CommonActions.clickWebElement(RemedyLoginPage.radioBtn_public);
            Thread.sleep(2000);
            CommonActions.clickWebElement(RemedyLoginPage.workInfotyepArow);
            CommonActions.clickWebElement(RemedyLoginPage.cancelInfo);
            Thread.sleep(2000);
            statusUpdate("Rejected");
            Thread.sleep(2000);
        }
        Thread.sleep(2000);
        RemedyLoginPage.summaryField.clear();
        Thread.sleep(2000);
        RemedyLoginPage.summaryField.sendKeys(updatedSummaryText);

        /*   final step to update the request
         * ***********************************************************************/
        //add_RequestUpdate();

    }

    public static void statusUpdate(String type) throws InterruptedException {

        Thread.sleep(2000);
        RemedyLoginPage.statusTypeSelArrow.click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("(//tr[@class='MenuTableRow']/td[normalize-space()='" + type + "'][1])[1]")).click();
        Thread.sleep(2000);
    }


    public static void add_RequestUpdate() throws InterruptedException {
        Thread.sleep(2000);
        CommonActions.clickWebElement(RemedyLoginPage.add_updateRequest);
        Thread.sleep(2000);
        System.out.println("Successfully request has been updated");
    }

 /*   public static String  getCurrentDate() throws InterruptedException{

        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy" , Locale.UK);
        Date date = new Date();
        System.out.println(dateFormat.format(date));
        String todayDate = dateFormat.format(date);
        System.out.println("Today date is :  "+ todayDate);
        StringTokenizer st = new StringTokenizer(todayDate,"/");
         thisDate = st.nextToken();
         thisMonth =st.nextToken();
        Thread.sleep(230);
        //System.out.println("thisDate ----- >>  "   +thisDate);
        //System.out.println("thisMoth ----- >>  "   +thisMoth);
        return thisDate+","+thisMonth;
    }*/


}


