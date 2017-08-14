package GlobalActions;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;

import org.openqa.selenium.WebElement;

import helpers.Environment;

import java.util.UUID;



public class RandomEmailAddressCreation extends Environment {

	static Logger log = Logger.getLogger("devpinoyLogger");

/*
public static String RandomEmail()
{
           // Find the link to email id field
       WebElement link1 = driver.findElement(By.id("email"));
        
	// Click the link
        
       link1.click();
        
        
        // Generate a random email
        final String randomEmail = randomEmail();
        
        // Find the email form field
        WebElement email = driver.findElement(By.id("email"));
        
        // Type the random email to the form
        email.sendKeys(randomEmail);
		return "SITTester-" + UUID.randomUUID().toString() + "@gmail.com";
             
   }



*/




    public static String RandomEmail() {
    	
    	String RandomEmail = "STester11" + UUID.randomUUID().toString() + "@gmail.com";
    			System.out.println("Random Email Address is "+RandomEmail);
				log.debug("Random Email Address is "+RandomEmail);

          return RandomEmail;
    }
    
    


}