Feature: CFU Saved Basket Feature Validation

  #launch hooks and get browser
  @smokeTesthomedelivery
  Scenario: CFU Saved Basket Feature Validation
    Given I am an CFU user and Lands on upgrade home page
    And I upgrade to SIMO Tariff
    And I choose to save the basket
    And Mail should be recieved
    And the retrieved mail should match the contents of the Basket
    
    #Close the browser