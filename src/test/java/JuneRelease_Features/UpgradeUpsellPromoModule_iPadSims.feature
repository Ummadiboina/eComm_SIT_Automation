Feature: Upgrade _not eligible customers selects and iPad sim

  @Upgrade_Upsell_Promo_Module
  Scenario Outline: Not eligible for upgrade customer selects iPad sims 
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And choose to upgrade any Phone in My upgrade page
    Then I should be displayed the promo modules 
    When I Click on Pick a sim on the iPad promo module
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Send me my sim'
    Then order confirmation is displayed
    
   

    Examples: 
      | username    | password | Firstname | Surname |
      | ing_jul987  | test123  | TEST      | ACCEPTA |
      
