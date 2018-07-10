package actionsPerformed;

import GlobalActions.CommonActions;
import helpers.Environment;
import org.apache.log4j.Logger;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import pageobjects.RemedyLoginPage;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

public class RemedyLoginAction extends Environment {

    public List<HashMap<String, String>> datamap;
    final static Logger log = Logger.getLogger("DeliveryPageActions");
    static JavascriptExecutor js = (JavascriptExecutor) driver;
    public static String query1 = "( '1000003229' = \"WP Procurement\" OR '1000003229' = \"My IT Procurement\" ) AND ( 'Status*' = \"Pending\" AND 'Status Reason' = \"Purchase Order Approval\")";


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
            //WebElement notesElement = driver.findElement(By.xpath("//*[@id=\"arid_WIN_3_1000000151\"]"));
            actions.moveToElement(RemedyLoginPage.querySerchBarTextField);

            actions.click();
            Thread.sleep(1000l);
            actions.sendKeys(query1);
            Thread.sleep(5000);
            actions.build().perform();

            CommonActions.clickWebElement(RemedyLoginPage.serchBtnAtBottom);

           /* Workbook wb=Workbook.(new FileInputStream("D:\\SreeRam\\Automation\\Telefonica Team1.xls"));
            Sheet sh=wb.getSheet(0);
            int totalNoOfRows = sh.getRows();
            ArrayList al= new ArrayList();

            for (int row = 2; row < totalNoOfRows; row++) {
                al.add((sh.getCell(6, row).getContents()));
            }
*/

            Thread.sleep(8000);
            List<WebElement> lstSize = driver.findElements(By.xpath("//th[normalize-space()='Submit Date']/../following-sibling::tr/td[4]//span"));

            for (int i = 1; i < lstSize.size(); i++) {

                driver.findElement(By.xpath("(//*[@id='T301389923']//th[normalize-space()='Submit Date']/../following-sibling::tr[" + i + "]/td[4]//span)[1]")).getText();
                driver.findElement(By.xpath("(//*[@id='T301389923']//th[normalize-space()='Submit Date']/../following-sibling::tr[" + i + "]/td[5]//span)[1]")).getText();

                System.out.println("Sumit Date is:  " + driver.findElement(By.xpath("(//th[normalize-space()='Submit Date']/../following-sibling::tr[" + i + "]/td[4]//span)[1]")).getText());
                System.out.println("Submitter is " + driver.findElement(By.xpath("(//th[normalize-space()='Submit Date']/../following-sibling::tr[" + i + "]/td[5]//span)[1]")).getText());
                //System.out.print("Submitter is "+ driver.findElement(By.xpath((//th[normalize-space()='Submit Date']/../following-sibling::tr[" + i + "]/td[5]//span)[1]")).getText());
                System.out.println(" ");
            }
            System.out.println(dateDispaly());
            //readExcel("Sheet1");


        }catch (Exception e){
            System.out.println("Failed to login to the Remedy Portal, please look the error message for reference " + e.getMessage());
        }
    }

    public static String  dateDispaly() throws InterruptedException{

        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy" , Locale.UK);
        Date date = new Date();
        System.out.println(dateFormat.format(date));
        String todayDate = dateFormat.format(date);
        System.out.println("Today date is :  "+ todayDate);
        StringTokenizer st = new StringTokenizer(todayDate,"/");
        String thisDate = st.nextToken();
        String thisMoth =st.nextToken();
        Thread.sleep(230);
        System.out.println("thisDate ----- >>  "   +thisDate);
        System.out.println("thisMoth ----- >>  "   +thisMoth);
        return thisDate+","+thisMoth;
    }


    /*public static  void readExcel(String sheetName) throws IOException {

        String fileName="Copy of Telefonica Team";

        //Create an object of File class to open xlsx file

        File file =    new File("C:\\Users\\subbaiv1\\Desktop\\REMEDY");

        //Create an object of FileInputStream class to read excel file

        FileInputStream inputStream = new FileInputStream(file);

        Workbook guru99Workbook = null;

        //Find the file extension by splitting file name in substring  and getting only extension name

        String fileExtensionName = fileName.substring(fileName.indexOf("."));

        //Check condition if the file is xlsx file

        if(fileExtensionName.equals(".xlsx")){

            //If it is xlsx file then create object of XSSFWorkbook class

            guru99Workbook = new XSSFWorkbook(inputStream);

        }

        //Check condition if the file is xls file

        else if(fileExtensionName.equals(".xls")){

            //If it is xls file then create object of XSSFWorkbook class

            guru99Workbook = new HSSFWorkbook(inputStream);

        }

        //Read sheet inside the workbook by its name

        Sheet guru99Sheet = guru99Workbook.getSheet(sheetName);

        //Find number of rows in excel file

        int rowCount = guru99Sheet.getLastRowNum()-guru99Sheet.getFirstRowNum();

        //Create a loop over all the rows of excel file to read it

        for (int i = 0; i < rowCount+1; i++) {

            Row row = guru99Sheet.getRow(i);

            //Create a loop to print cell values in a row

            for (int j = 0; j < row.getLastCellNum(); j++) {

                //Print Excel data in console

                System.out.print(row.getCell(j).getStringCellValue()+"|| ");

            }

            System.out.println();

        }



    }

*/

}
