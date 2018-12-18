package actionsPerformed;

import GlobalActions.Autoredirection;
import GlobalActions.CommonActions;
import helpers.Environment;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pageobjects.LikenewPage;

public class LikeNewPageActions extends Environment {

    public static void LIkenewphone() {
        // if(driver.findElements(By.xpath("//ul[@class='linksDesktop']//a[contains(text(),'Shop')]")).size()>1)


        // Point coordinates=MouseHoverPage.MoveMouseonShop1.getLocation();
        try {
               /* Point coordinates=MouseHoverPage.MoveMouseonShop1.getLocation();
                Robot robot=new Robot();
                robot.mouseMove(coordinates.getX()+100,coordinates.getY()+100);
                Actions action=new Actions(driver);
                action.moveToElement(driver.findElement(By.xpath("//ul[@class='linksDesktop']//a[contains(text(),'Shop')]"))).perform();

Actions action1=new Actions(driver);
action1.moveToElement(MouseHoverPage.MoveMouseonLikenew1).perform();

JavascriptExecutor executor=(JavascriptExecutor) driver;
executor.executeScript("arguments[0].click();",MouseHoverPage.MoveMouseonLikenew1);*/
Thread.sleep(5000);

            WebElement colour = driver.findElement(By.xpath("//div[@class='colour-wrapper qa-selectboxit-colour ng-isolate-scope']//select"));
            Thread.sleep(5000);
            CommonActions.scrollToElement(colour);
            Thread.sleep(5000);
            JavascriptExecutor js = (JavascriptExecutor) driver;
            js.executeScript("arguments[0].setAttribute('style', 'display:block;')", colour);
            new Select(colour).selectByVisibleText("Rose Gold");
            Thread.sleep(5000);
            CommonActions.clickWebElement(LikenewPage.SelectDeviceonlySimfree);
            Thread.sleep(20000);
            Autoredirection.redirect();
            CommonActions.clickWebElement(LikenewPage.AddtoBasketbutton);
            Thread.sleep(20000);
            CommonActions.clickWebElement(LikenewPage.Idontwantspendcapbutton);
            Thread.sleep(20000);
            CommonActions.clickWebElement(LikenewPage.AddAccessories);
            Thread.sleep(20000);
            CommonActions.clickWebElement(LikenewPage.Addtobasket);


//js.executeScript("arguments[0].setAttribute('style','display:block;')",colour);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}