package testing;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
//import org.junit.Test;
import java.net.URL;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;


import java.net.MalformedURLException;



public class test {
	protected static ThreadLocal<RemoteWebDriver> driver = new ThreadLocal<>();
	public static String url = "http://localhost:4444/wd/hub";
	public static void main(String[] args) throws InterruptedException  {
	
		
	
	System.setProperty("webdriver.gecko.driver","C:\\Abdelrazak\\geckodriver.exe");
   // WebDriver driver = new FirefoxDriver();

	
	FirefoxOptions options = new FirefoxOptions();
	try {
	driver.set(new RemoteWebDriver(new URL(url), options));}catch (MalformedURLException e) {
        e.printStackTrace();
    }
	
	
	WebDriver webdriver = driver.get();
   
	
	webdriver.navigate().to("https://www.google.com");
   //WebElement username = webdriver.findElement(By.name("google"));
    //System.out.println(username);
    	
    webdriver.manage().window().maximize();
   
    System.out.println(Test_ID);
	//driver.get("https://www.google.com/");
    //String status_du_test="0";
    //driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    Thread.sleep(1000);
    
   //quit();

	
    
 
   //driver.get("https:\\www.toptal.com");
   
   //By locator = By.id("Developper")
	//WebElement Username = driver.findElement(locator);
    
    
    
    
    
}
	
	
	
	
	
	
	
}










