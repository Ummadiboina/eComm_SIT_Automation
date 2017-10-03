Feature: CFU_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour

  Scenario Outline: CFU_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour Multiple Colours
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade phone
    And I choose upgrade PayM handset <handset>
    And Navigate to device details page
    And click on the colour dropdown
    And verify the name of the colur is next to the colour tile in <UpgradePhoneColour>
    And select a colour
    And Select a tariff <tariff>
    And click on the colour dropdown
    And verify the name of the colur is next to the colour tile in <UpgradeTariffColour>
    And select a colour    
    And I Land on the basket page by clicking on Add to Basket button


    Examples: 
      | username               | password | handset  | tariff                 | UpgradePhoneColour |UpgradeTariffColour|
      | gb119519_979816@o2.com | test123  | GalaxyS8 | 9.99upfront60.00amonth |                    |
