Feature: CFU_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour

  Scenario Outline: CFU_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour Multiple Colours
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade phone
    And Select a <handset> device from Recommended devices section
    And click on the color dropdown
    And verify the name of the color is next to the color tile in <UpgradePhoneColour>
    And Select a tariff <tariff> with ribbons in upgrade journey
    And select <color> color of the connected device
    #And Select a tariff <tariff>
    And click on the color dropdown
    And verify the name of the color is next to the color tile in <UpgradeTariffColour>
    And select <color> color of the connected device
    And I Land on the basket page by clicking on Add to Basket button

    Examples:
      | username               | password | handset  | tariff                 | UpgradePhoneColour | UpgradeTariffColour |
      | gb119519_979816@o2.com | test123  | GalaxyS8 | 9.99upfront60.00amonth |Black               |Black                |