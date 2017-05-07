package GlobalActions;

import org.openqa.selenium.By;

import org.openqa.selenium.WebElement;

import helpers.Environment;

import java.util.UUID;



public class RandomEmailAddressCreation extends Environment {



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

public static String RandomAgentEmail()
{
           // Find the link to email id field
       WebElement link1 = driver.findElement(By.id("regEmail"));
        
	// Click the link
        
       link1.click();
        
        
        // Generate a random email
        final String randomEmail = randomEmail();
        
        // Find the email form field
        WebElement email = driver.findElement(By.id("regEmail"));
        
        // Type the random email to the form
        email.sendKeys(randomEmail);
		return "SITTester-" + UUID.randomUUID().toString() + "@gmail.com";
        
        
     
   }

    private static String randomEmail() {
        return "SITTester-" + UUID.randomUUID().toString() + "@gmail.com";
    }
}