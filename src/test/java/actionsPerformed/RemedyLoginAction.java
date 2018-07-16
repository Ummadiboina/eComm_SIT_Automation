package actionsPerformed;

import GlobalActions.CommonActions;
import helpers.Environment;
import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;
import org.apache.log4j.Logger;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import pageobjects.RemedyLoginPage;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
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
    public static String SubTextOfSummary2;
    public static String todayDate = "";
    public static String user = "";
    public static String supportGroupNameFromExel;
    public static String workInfoCT1n2 = "Hello << + user +>>,\n" +
            "We supplied a quote for this request on <<" + todayDate + ">>.\n" +
            "We are awaiting a Purchase Order for this request. Please would you confirm whether you will be raising a Purchase Order to continue with this request?\n" +
            "\n" +
            "For information regarding raising Purchase Orders, please see this Intranet site:\n" +
            "http://intranet.uk.pri.o2.com/SupportandSystems/Buyingfortelefonica/BuyingProcess/Pages/Buying-better-together.aspx\n" +
            "\n" +
            "For help raising a PO or CPA, please contact ProcurementHelp@O2.com\n" +
            "\n" +
            "Once you have a Purchase Order number, please request a PDF from Procurement.APQueries@o2.com and then attach it to this request.\n" +
            "\n" +
            "Please note: Quotes are valid for 28 days, or the expiration date shown on the quote – whichever is sooner. If we do not receive a PO by the time the quote has expired, then a new request will be required for a new quote, and may require an update to the Purchase Order.\n" +
            "\n" +
            "Kind regards,\n" +
            "IT Procurement Team\n";


    public static String workInfoCT3 = "Hello <<" + user + ">>,\n" +
            "We supplied a quote for this request on <<" + todayDate + ">>.\n" +
            "We are awaiting a Purchase Order for this request. Please would you confirm whether you will be raising a Purchase Order to continue with this request?\n" +
            "\n" +
            "For information regarding raising Purchase Orders, please see this Intranet site:\n" +
            "http://intranet.uk.pri.o2.com/SupportandSystems/Buyingfortelefonica/BuyingProcess/Pages/Buying-better-together.aspx\n" +
            "\n" +
            "For help raising a PO or CPA, please contact ProcurementHelp@O2.com\n" +
            "\n" +
            "Once you have a Purchase Order number, please request a PDF from Procurement.APQueries@o2.com and then attach it to this request.\n" +
            "\n" +
            "Please note: Your quote expires within a week. If we do not receive a PO by the time the quote has expired, then a new request will be required for a new quote, and may require an update to the Purchase Order.\n" +
            "\n" +
            "Kind regards,\n" +
            "IT Procurement Team\n";

    public static String getWorkInfoCT_Cancel = "Hello <<" + user + ">>,\n" +
            "\n" +
            "We have not received a Purchase Order for this request, and the quote has now expired.\n" +
            "Therefore we are now cancelling this request.\n" +
            "\n" +
            "When you can confirmed funds are available from the budget holder please raise a new request, and we will provide a refreshed quote for you to raise a purchase order for the suitable amount.\n" +
            "\n" +
            "Kind regards,\n" +
            "IT Procurement Team\n";

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


    public static void chooseAppType() throws InterruptedException {

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
        Thread.sleep(3000);
        System.out.println("Support to group Name : " + supportGroupNameFromExel);

        List<WebElement> lstSize = driver.findElements(By.xpath("//th[normalize-space()='Submit Date']/../following-sibling::tr/td[4]//span"));
        //  boolean isGroupMatchVtRecord = false;
        for (int i = 1; i < lstSize.size(); i++) {
            String capturDatge = driver.findElement(By.xpath("(//*[@id='T301389923']//th[normalize-space()='Submit Date']/../following-sibling::tr[" + i + "]/td[4]//span)[1]")).getText();
            String nameOfSubmitter = driver.findElement(By.xpath("(//*[@id='T301389923']//th[normalize-space()='Submit Date']/../following-sibling::tr[" + i + "]/td[5]//span)[1]")).getText();
            StringTokenizer strT = new StringTokenizer(capturDatge, "/");
            int getDate = Integer.parseInt(strT.nextToken());
            int getMonth = Integer.parseInt(strT.nextToken());

            user = user + "" + nameOfSubmitter;
            driver.findElement(By.xpath("//img[@alt='Editor for Summary*']")).click();
            Thread.sleep(3000);
            text_SammaryField = driver.findElement(By.xpath("//div[@class='OverflowAuto']/textarea")).getText();
            Thread.sleep(3000);
            driver.findElement(By.xpath("//button[@class='Close  right']")).click();
            Thread.sleep(3000);

            subTextOfSummay = text_SammaryField.substring(0, 4);
            //SubTextOfSummary2 = text_SammaryField.substring(4,text_SammaryField.length());
            //text_SammaryField = SubTextOfSummary2;


            if (thisMonth >= getMonth) {
                if ((thisDate - getDate) >= 0) {
                    summaryUpdateWithCT(subTextOfSummay);
                }

            }
        }
    }


    public static void summaryUpdateWithCT(String subTextOfSummay) throws InterruptedException {

        Thread.sleep(3000);

        if (!subTextOfSummay.contains("CT")) {
            updatedSummaryText = "CT0 " + thisDate + "/" + thisMonth + " " + text_SammaryField;
            Thread.sleep(1000);
            CommonActions.scrollToElement(RemedyLoginPage.add_updateRequest);
            Thread.sleep(1000);
            RemedyLoginPage.noteTextArea.sendKeys(workInfoCT1n2);
            Thread.sleep(1000);
            CommonActions.clickWebElement(RemedyLoginPage.moreDetailsArrow);
            Thread.sleep(3000);
            CommonActions.clickWebElement(RemedyLoginPage.radioBtn_public);
            Thread.sleep(2000);
        } else if (subTextOfSummay.contains("CT0")) {
            updatedSummaryText = "CT1 " + thisDate + "/" + thisMonth + " " + text_SammaryField;

            RemedyLoginPage.noteTextArea.sendKeys(workInfoCT1n2);
            Thread.sleep(1000);
            CommonActions.clickWebElement(RemedyLoginPage.moreDetailsArrow);
            CommonActions.clickWebElement(RemedyLoginPage.radioBtn_public);
            Thread.sleep(2000);
        } else if (subTextOfSummay.contains("CT1")) {
            updatedSummaryText = "CT2 " + thisDate + "/" + thisMonth + " " + text_SammaryField;

            RemedyLoginPage.noteTextArea.sendKeys(workInfoCT1n2);
            Thread.sleep(1000);
            CommonActions.clickWebElement(RemedyLoginPage.moreDetailsArrow);
            CommonActions.clickWebElement(RemedyLoginPage.radioBtn_public);
            Thread.sleep(2000);
        } else if (subTextOfSummay.contains("CT2")) {
            updatedSummaryText = "CT3 " + thisDate + "/" + thisMonth + " " + text_SammaryField;

            RemedyLoginPage.noteTextArea.sendKeys(workInfoCT3);
            Thread.sleep(1000);
            CommonActions.clickWebElement(RemedyLoginPage.moreDetailsArrow);
            CommonActions.clickWebElement(RemedyLoginPage.radioBtn_public);
            Thread.sleep(2000);

        } else if (subTextOfSummay.contains("CT3")) {
            updatedSummaryText = text_SammaryField;

            RemedyLoginPage.noteTextArea.sendKeys(getWorkInfoCT_Cancel);
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
        Thread.sleep(3000);
        //logoutProfile();
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

    public static void logoutProfile() throws InterruptedException {
        Thread.sleep(2000);
        CommonActions.clickWebElement(RemedyLoginPage.logOut);
        Thread.sleep(2000);
        System.out.println("Successfully request has been updated");
    }

   // boolean isGroupMatchVtRecord = false;
   /* public static String readDataFromEXel() throws InterruptedException {
        for (int i = 1; i < 2; i++) {
            Workbook wb = null;
            try {
                wb = Workbook.getWorkbook(new FileInputStream("C:\\Users\\subbaiv1\\Desktop\\TestData_Latest.xls"));
            } catch (IOException e) {
                e.printStackTrace();
            } catch (BiffException e) {
                e.printStackTrace();
            }
            Sheet sh = wb.getSheet("Sheet1");
            int totalNoOfRows = sh.getRows();
            for (int row = 1; row < totalNoOfRows; row++) {
                supportGroupNameFromExel = (sh.getCell(1, row).getContents());
            }
        }*/
    }