Feature: CFU_Tablet_ColourDropdownsWithColourNamesBesideTheColourMultipleColour

  Scenario Outline: CFU_Tablet_ColourDropdownsWithColourNamesBesideTheColourMultipleColour Multiple Colours
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And click on Tablets tab
    And Click on View all Tablets link
    And select any available <Device> Tablet
    And select <color> color of the connected device
    And verify the name of the colur is next to the colour tile in <UpgradeTabletColour>
    And Navigate to device details page
    And Select a tariff <tariff>
    And I Land on the basket page by clicking on Add to Basket button

    Examples: 
      | username               | password | handset  | tariff                 | UpgradeTabletColour | color |UpgradeTariffTabletColour|
      | gb119519_979816@o2.com | test123  | GalaxyS8 | 9.99upfront60.00amonth | Silver              |Silver |Silver                   |
