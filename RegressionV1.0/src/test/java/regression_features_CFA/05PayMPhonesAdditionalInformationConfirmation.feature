Feature: CFA PayM phones Additional information and Order confired

  @smokeTest
  Scenario: CFA PayM phones Additional information and Order confirmed
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM handset
    And Land on the 'Tariffs and extra' page
    And Choose some Accesssory
    And I Land on the basket page and choose home delivery option 
    And click on "go to checkout" button
    And input Firstname as "Test" and surname as "Accepta" in Delivery page
    And input all the fields on the Delivery page and Click on the 'Continue button'
    And I land on the payment page and input username as "Test Accepta" the details and click 'Continue on next step'
    Then Additional infomation page should be displayed
    And upon entering Valid details
    Then Order confirmation page should be displayed