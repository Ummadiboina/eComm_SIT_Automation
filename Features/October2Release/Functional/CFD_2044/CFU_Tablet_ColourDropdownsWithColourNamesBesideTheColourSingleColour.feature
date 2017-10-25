Feature: CFU_Tablet_ColourDropdownsWithColourNamesBesideTheColourSingleColour

  @Web
  Scenario Outline: CFU_Tablet_ColourDropdownsWithColourNamesBesideTheColourSingleColour
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on Tablet section in upgrade options page
    And I choose upgrade PayM Tablet <handset>
    And Navigate to device details page
    Then check if the selected device has only 1 variant for both colour and capacity
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page by clicking on Add to Basket button

    Examples:
      | username           | password  | handset | tariff                 |
      | bvt2.cfu@gmail.com | cfubvt123 | Random  | 9.99upfront60.00amonth |