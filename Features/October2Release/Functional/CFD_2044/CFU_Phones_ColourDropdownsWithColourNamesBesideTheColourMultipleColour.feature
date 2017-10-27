Feature: CFU_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour

  @Web
  Scenario Outline: CFU_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour Multiple Colours
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade phone
    And Select a <handset> device from Recommended devices section
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Select a tariff <tariff> with ribbons in upgrade journey
    And I Land on the basket page by clicking on Add to Basket button

    Examples:
      | username               | password | handset  | tariff                 | color  |
      | gb119519_979816@o2.com | test123  | Apple8   | 9.99upfront60.00amonth |Black   |