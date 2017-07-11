package pageobjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

@SuppressWarnings("unused")
public class BaseCommsPage {



	@FindAll({
		@FindBy(how = How.XPATH, using = ("//div[@class='basket-list']//li[@data-qa-class='basket-item']/section/h3/span"))
		})
		public static List<WebElement> DevicesList;

	@FindBy(how = How.XPATH, using = ("//*[@id='qa-data']/a[@id='data_qa_Huawei_1']/form/button[1]"))
	public static WebElement RandomDevice;


}
