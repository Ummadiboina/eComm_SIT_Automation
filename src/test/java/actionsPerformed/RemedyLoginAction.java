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
import java.util.Map;

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
    public static StringBuilder currentDate;
    public static StringBuilder submitterName;
    public static LinkedHashMap<String,String> lstOfsupportGrpMember = new LinkedHashMap<>();


    public static void LoginIntoRemedyApp(String userName, String password) {
        try {
            CommonActions.setDataForTextField(RemedyLoginPage.userName_field, userName);
            CommonActions.setDataForTextField(RemedyLoginPage.password_field, password);
            CommonActions.clickWebElement(RemedyLoginPage.loginCta);
            CommonActions.driverWait(6000);
        } catch (Exception e) {
            System.out.println("Failed to login to the Remedy Portal, please look the error message for reference " + e.getMessage());
        }
    }

    public static void chooseAppType() throws InterruptedException {

        CommonActions.clickWebElement(RemedyLoginPage.applicationsTab);
        CommonActions.mouseHousrOnElement(RemedyLoginPage.servReqMangmtTab);
        CommonActions.clickWebElement(RemedyLoginPage.searchWorkOrder);
        CommonActions.driverWait(8000);
        CommonActions.clickWebElement(RemedyLoginPage.newSearch);
        CommonActions.driverWait(3000);
        CommonActions.clickWebElement(RemedyLoginPage.advancedSearch);
        CommonActions.driverWait(3000);
        CommonActions.scrollToElement(RemedyLoginPage.serchBtnAtBottom);
        CommonActions.driverWait(3000);

        Actions actions = new Actions(driver);
        actions.moveToElement(RemedyLoginPage.querySerchBarTextField);
        actions.click();
        CommonActions.driverWait(6000);
        actions.sendKeys(query1);
        CommonActions.driverWait(3000);
        actions.build().perform();
        CommonActions.driverWait(7000);
        CommonActions.clickWebElement(RemedyLoginPage.serchBtnAtBottom);
        CommonActions.driverWait(2000);

        //Get Today date
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy", Locale.UK);
        Date date = new Date();
        System.out.println("The date format is :: " + dateFormat.format(date));
        String todayDate = dateFormat.format(date);
        StringTokenizer st = new StringTokenizer(todayDate, "/");
        thisDate = Integer.parseInt(st.nextToken());
        thisMonth = Integer.parseInt(st.nextToken());
        CommonActions.driverWait(500);
        System.out.println("Support to group Name : " + supportGroupNameFromExel);

        List<WebElement> lstSize = driver.findElements(By.xpath("//th[normalize-space()='Submit Date']/../following-sibling::tr/td[4]//span"));
        //  boolean isGroupMatchVtRecord = false;
        for (int i = 1; i < lstSize.size(); i++) {
            String capturDatge = driver.findElement(By.xpath("(//*[@id='T301389923']//th[normalize-space()='Submit Date']/../following-sibling::tr[" + i + "]/td[4]//span)[1]")).getText();
            currentDate = new StringBuilder(capturDatge);
            String nameOfSubmitter = driver.findElement(By.xpath("(//*[@id='T301389923']//th[normalize-space()='Submit Date']/../following-sibling::tr[" + i + "]/td[5]//span)[1]")).getText();
            submitterName = new StringBuilder(nameOfSubmitter);
            StringTokenizer strT = new StringTokenizer(capturDatge, "/");
            int getDate = Integer.parseInt(strT.nextToken());
            int getMonth = Integer.parseInt(strT.nextToken());

            //user = user + "" + nameOfSubmitter;
            driver.findElement(By.xpath("//img[@alt='Editor for Summary*']")).click();
            CommonActions.driverWait(1000);
            text_SammaryField = driver.findElement(By.xpath("//div[@class='OverflowAuto']/textarea")).getText();
            CommonActions.driverWait(1000);
            driver.findElement(By.xpath("//button[@class='Close  right']")).click();
            CommonActions.driverWait(1000);

            subTextOfSummay = text_SammaryField.substring(0, 4);
            String subText3 = text_SammaryField.substring(4, 8);

            if (subTextOfSummay.contains("CT") && subText3.contains("/")) {
                text_SammaryField = text_SammaryField.substring(9, text_SammaryField.length());
            }
            if (subTextOfSummay.contains("CT") && !subText3.contains("/")) {
                text_SammaryField = text_SammaryField.substring(4, text_SammaryField.length());
            }
            if (!subTextOfSummay.contains("CT") && !subText3.contains("/")) {
                text_SammaryField = text_SammaryField;
            }


            if (thisMonth >= getMonth) {
                if ((thisDate - getDate) >= 0) {
                    //if WO is updated by SG
                    summaryUpdateWithCT(subTextOfSummay);
                } else if ((thisDate - getDate) < 7) {
                    //WO is updated on or before 7 days
                    statusUpdate("In Progress");

                }


            }
        }
    }


    public static void summaryUpdateWithCT(String subTextOfSummay) throws InterruptedException {

          String workInfoCT1n2 = "Hello <<" + submitterName + ">>,\n" +
                "We supplied a quote for this request on <<" + currentDate + ">>.\n" +
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

        String workInfoCT3 = "Hello <<" + submitterName + ">>,\n" +
                "We supplied a quote for this request on <<" + currentDate + ">>.\n" +
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

            String getWorkInfoCT_Cancel = "Hello <<" + submitterName + ">>,\n" +
                "\n" +
                "We have not received a Purchase Order for this request, and the quote has now expired.\n" +
                "Therefore we are now cancelling this request.\n" +
                "\n" +
                "When you can confirmed funds are available from the budget holder please raise a new request, and we will provide a refreshed quote for you to raise a purchase order for the suitable amount.\n" +
                "\n" +
                "Kind regards,\n" +
                "IT Procurement Team\n";

        CommonActions.driverWait(2000);

        if (!subTextOfSummay.contains("CT")) {
            updatedSummaryText = "CT0 " + thisDate + "/" + thisMonth + " " + text_SammaryField;
            CommonActions.driverWait(500);
            CommonActions.scrollToElement(RemedyLoginPage.add_updateRequest);
            CommonActions.driverWait(500);
            RemedyLoginPage.noteTextArea.sendKeys(workInfoCT1n2);
            CommonActions.driverWait(500);
            CommonActions.clickWebElement(RemedyLoginPage.moreDetailsArrow);
            CommonActions.driverWait(500);
            CommonActions.clickWebElement(RemedyLoginPage.radioBtn_public);
            CommonActions.driverWait(2000);
        } else if (subTextOfSummay.contains("CT0")) {
            updatedSummaryText = "CT1 " + thisDate + "/" + thisMonth + " " + text_SammaryField;

            RemedyLoginPage.noteTextArea.sendKeys(workInfoCT1n2);
            CommonActions.driverWait(500);
            CommonActions.clickWebElement(RemedyLoginPage.moreDetailsArrow);
            CommonActions.driverWait(2000);
            CommonActions.clickWebElement(RemedyLoginPage.radioBtn_public);
            CommonActions.driverWait(500);
        } else if (subTextOfSummay.contains("CT1")) {
            updatedSummaryText = "CT2 " + thisDate + "/" + thisMonth + " " + text_SammaryField;

            RemedyLoginPage.noteTextArea.sendKeys(workInfoCT1n2);
            CommonActions.driverWait(500);
            CommonActions.clickWebElement(RemedyLoginPage.moreDetailsArrow);
            CommonActions.driverWait(2000);
            CommonActions.clickWebElement(RemedyLoginPage.radioBtn_public);
            CommonActions.driverWait(500);
        } else if (subTextOfSummay.contains("CT2")) {
            updatedSummaryText = "CT3 " + thisDate + "/" + thisMonth + " " + text_SammaryField;

            RemedyLoginPage.noteTextArea.sendKeys(workInfoCT3);
            CommonActions.driverWait(500);
            CommonActions.clickWebElement(RemedyLoginPage.moreDetailsArrow);
            CommonActions.driverWait(2000);
            CommonActions.clickWebElement(RemedyLoginPage.radioBtn_public);
            CommonActions.driverWait(1000);

        } else if (subTextOfSummay.contains("CT3")) {
            updatedSummaryText = text_SammaryField;

            RemedyLoginPage.noteTextArea.sendKeys(getWorkInfoCT_Cancel);
            CommonActions.driverWait(500);
            CommonActions.clickWebElement(RemedyLoginPage.moreDetailsArrow);
            CommonActions.driverWait(2000);
            CommonActions.clickWebElement(RemedyLoginPage.radioBtn_public);
            CommonActions.driverWait(500);
            CommonActions.clickWebElement(RemedyLoginPage.workInfotyepArow);
            CommonActions.driverWait(500);
            CommonActions.clickWebElement(RemedyLoginPage.cancelInfo);
            CommonActions.driverWait(500);
            statusUpdate("Rejected");
            Thread.sleep(2000);
        }
        CommonActions.driverWait(500);
        RemedyLoginPage.summaryField.clear();
        CommonActions.driverWait(1000);
        RemedyLoginPage.summaryField.sendKeys(updatedSummaryText);

        //add_RequestUpdate();
        CommonActions.driverWait(1000);
        //logoutProfile();
    }


    public static void statusUpdate(String type) {
        CommonActions.driverWait(500);
        RemedyLoginPage.statusTypeSelArrow.click();
        CommonActions.driverWait(500);
        driver.findElement(By.xpath("(//tr[@class='MenuTableRow']/td[normalize-space()='" + type + "'][1])[1]")).click();
        CommonActions.driverWait(1000);
    }


    public static void add_RequestUpdate() {
        CommonActions.driverWait(2000);
        CommonActions.clickWebElement(RemedyLoginPage.add_updateRequest);
        CommonActions.driverWait(2000);
        System.out.println("Successfully request has been updated");
    }

    public static void logoutProfile() {
        CommonActions.driverWait(2000);
        CommonActions.clickWebElement(RemedyLoginPage.logOut);
        CommonActions.driverWait(2000);
        System.out.println("Successfully request has been updated");
    }

    // boolean isGroupMatchVtRecord = false;
    public static void readDataFromEXel() {
        for (int i = 1; i < 2; i++) {
            Workbook wb = null;
            try {
                wb = Workbook.getWorkbook(new FileInputStream("C:\\Users\\subbaiv1\\Desktop\\TestData_Latest.xls"));
            } catch (IOException e) {
                e.printStackTrace();
            } catch (BiffException e) {
                e.printStackTrace();
            }
            Sheet sh = wb.getSheet("Sheet3");
            int totalNoOfRows = sh.getRows();
            for (int row = 2; row < totalNoOfRows; row++) {
             String  supportGroupID = (sh.getCell(6, row).getContents());
             String supportGroupName = (sh.getCell( 0,row).getContents());
             lstOfsupportGrpMember.put(supportGroupID,supportGroupName);

            }
        }
    }

    public static void dataprint() {
        readDataFromEXel();
        System.out.println("test the data inside map" + lstOfsupportGrpMember);
        for (Map.Entry<String, String> entry : lstOfsupportGrpMember.entrySet()) {
            String key = entry.getKey();
            if(key.equals(submitterName)) {
                System.out.println("Submitter name...." +submitterName);
                String value = entry.getValue();
                System.out.println("Value...." +value);
            }

        }

    }

}