package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class iPadPage {

    @FindBy(how = How.XPATH, using = "//div[@class='col-xs-6 col-sm-4 col-md-2 col-lg-2'][1]")
    public static WebElement RandomIpadDevice;

    @FindBy(how = How.XPATH, using = "//a[contains(@href,'https://www.o2.co.uk/shop/tablets/apple/ipad-pro-10.5-inch/')]")
    public static WebElement IPadPro10point5;

    @FindBy(how = How.XPATH, using = "//a[contains(@href,'https://www.o2.co.uk/shop/tablets/apple/ipad-pro-12.9-inch/')]")
    public static WebElement IPadPro12point9;

    @FindBy(how = How.XPATH, using = "//a[contains(@href,'https://www.o2.co.uk/shop/tablets/apple/ipad-pro-9.7-inch/')]")
    public static WebElement IPadPro9point7;

    @FindBy(how = How.XPATH, using = "//a[contains(@href,'https://www.o2.co.uk/shop/tablets/apple/ipad/#contractType=paymonthly')]")
    public static WebElement IPad9point7;


}
