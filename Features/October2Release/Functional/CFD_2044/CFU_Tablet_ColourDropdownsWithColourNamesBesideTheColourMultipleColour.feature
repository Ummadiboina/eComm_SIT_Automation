Feature: CFU_Tablet_ColourDropdownsWithColourNamesBesideTheColourMultipleColour

  Scenario Outline: CFU_Tablet_ColourDropdownsWithColourNamesBesideTheColourMultipleColour Multiple Colours
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on Tablet section in upgrade options page
    And Click on View all Tablets link
    And select any available <Device> Tablet
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page by clicking on Add to Basket button

    Examples:
      | username               | password | tariff                 | UpgradeTabletColour | color  | UpgradeTariffTabletColour |Device             |
      | gb119519_979816@o2.com | test123  | 9.99upfront60.00amonth | Silver              | Silver | Silver                    |  GalaxyTabA       |
