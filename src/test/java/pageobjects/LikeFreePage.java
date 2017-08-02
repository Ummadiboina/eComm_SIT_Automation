package pageobjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import helpers.Environment;



public class LikeFreePage extends Environment{
	
	
	@FindBy(how=How.XPATH,using="(//a[contains(@href, 'https://www.o2.co.uk/shop/like-new/sim-free-phones')])[1]") 
	public static WebElement simfree1;
	
	//@FindBy(how=How.XPATH,using=("(//a[contains(text(),'Pay Monthly')])[6]"))
	@FindBy(how=How.XPATH,using="(//div[@class='text-container col-xs-12 col-sm-6 col-md-6 col-lg-6']/div/p/a[contains(@href, 'https://www.o2.co.uk/shop/phones/#condition=likenew&sort=content.sorting.featured')])[1]") 
	public static WebElement Paym;
	
	
	@FindBy(how=How.XPATH,using=("(//a[contains(text(),'Pay As You Go')])[10]"))
	public static WebElement PayG;
	

	}
	
	
	

