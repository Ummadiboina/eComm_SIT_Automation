package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SortingAndFilter {

	@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/div)[1]")
	public static WebElement MonthlyHighToLow;

	@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/div)[2]")
	public static WebElement MonthlyLowToHigh;

	@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/div)[3]")
	public static WebElement UpfrontHighToLow;

	@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/div)[3]")
	public static WebElement UpfrontLowToHigh;

	@FindBy(how = How.XPATH, using = "((//div[@ng-show='showSortByFeatures']/ul/li/label/div)[1]")
	public static WebElement ScreenSize;

	@FindBy(how = How.XPATH, using = "(//div[@ng-show='showSortByFeatures']/ul/li/label/div)[2]")
	public static WebElement Weight;

	@FindBy(how = How.XPATH, using = "(//div[@ng-show='showSortByFeatures']/ul/li/label/div)[3]")
	public static WebElement BatteryLife;

	@FindBy(how = How.XPATH, using = "(//div[@ng-show='showSortByFeatures']/ul/li/label/div)[4]")
	public static WebElement CameraResolution;

	@FindBy(how = How.XPATH, using = "(//ul[@ng-show='showSortByUserRating']/li/label/div)[1]")
	public static WebElement UserRatingHighToLow;

	@FindBy(how = How.XPATH, using = "(//ul[@ng-show='showSortByUserRating']/li/label/div)[2]")
	public static WebElement UserRatingLowToHigh;

	@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/div)[11]")
	public static WebElement BrandAToZ;
	
	@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/div)[12]")
	public static WebElement BrandZToA;
	
	@FindBy(how = How.XPATH, using = "//a[@class='reset-link']")
	public static WebElement ResetSort;

	@FindBy(how = How.XPATH, using = "//button[@value='Done']")
	public static WebElement Done;	
}
