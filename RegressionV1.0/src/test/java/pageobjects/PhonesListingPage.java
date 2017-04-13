package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


@SuppressWarnings("unused")
public class PhonesListingPage {
	
	//Below Are list of all the phones in first page of the PayM phones landing page
	
	
	@FindBy(how=How.XPATH,using="//a[contains(@href, '/shop/phones/samsung/galaxy-s7/#contractType=paymonthly')]") 
	public static WebElement GalaxyS7;
	
	@FindBy(how=How.XPATH,using="//a[contains(@href, '/shop/phones/samsung/galaxy-s8/#contractType=paymonthly')]") 
	public static WebElement GalaxyS8;
	
	@FindBy(how=How.XPATH,using="//a[contains(@href, '/shop/phones/samsung/galaxy-s8-plus/#contractType=paymonthly')]") 
	public static WebElement GalaxyS8Plus;
	
	@FindBy(how=How.XPATH,using="//a[contains(@href, '/shop/phones/apple/iphone-7/#contractType=paymonthly')]") 
	public static WebElement Iphone7;
	
	@FindBy(how=How.XPATH,using="//a[contains(@href, '/shop/phones/apple/iphone-7-plus/#contractType=paymonthly')]") 
	public static WebElement Iphone7Plus;
	
	@FindBy(how=How.XPATH,using="//a[contains(@href, '/shop/phones/apple/iphone-se/#contractType=paymonthly')]") 
	public static WebElement IphoneSE;
	
	@FindBy(how=How.XPATH,using="//a[contains(@href, '/shop/phones/huawei/p10/#contractType=paymonthly')]") 
	public static WebElement HuaweiP10;
	
	@FindBy(how=How.XPATH,using="//a[contains(@href, '/shop/phones/samsung/galaxy-s7-edge/#contractType=paymonthly')]") 
	public static WebElement GalaxyS7Edge;
	
	@FindBy(how=How.XPATH,using="//a[contains(@href, '/shop/phones/oneplus/3t/#contractType=paymonthly')]") 
	public static WebElement Oneplus3T;
	
	
	
	//Below are for PAYG device
	
	@FindBy(how=How.XPATH,using="//*[@id='o2-page-wrapper']/div[2]/div[3]/div[1]/div[1]/div/div/div/div/a") 
	public static WebElement RandomDevice;
	
	@FindBy(how=How.XPATH,using="//a[contains(@href, '/shop/phones/moto/g5/#contractType=payasyougo')]") 
	public static WebElement MotoG5;
}
