package helpers;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

public class Environment {

	public static WebDriver driver;
	public static Logger log;
	public static JavascriptExecutor js;
	public static Actions action;

	public Environment() {
		PropertyConfigurator.configure("src/Log4j.properties");

	}
}
