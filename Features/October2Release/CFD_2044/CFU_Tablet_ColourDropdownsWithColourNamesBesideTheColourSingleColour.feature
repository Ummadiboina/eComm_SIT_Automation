Feature: CFU_Tablet_ColourDropdownsWithColourNamesBesideTheColourSingleColour

  Scenario Outline: CFU_Tablet_ColourDropdownsWithColourNamesBesideTheColourSingleColour
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And click on Tablets tab
    And I choose upgrade PayM Tablet <handset>
    And Navigate to device details page
    Then check if the selected device has only 1 variant for both colour and capacity
    And Select a tariff <tariff>
    And I Land on the basket page by clicking on Add to Basket button

    Examples: 
      | username               | password | handset  | tariff                 |
      | gb119519_979816@o2.com | test123  | GalaxyS8 | 9.99upfront60.00amonth |