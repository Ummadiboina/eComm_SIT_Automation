Feature: LoginToRemedyTool

  @Web
  Scenario Outline: LoginToRemedyTool
    Given Login Remedy tool with the details userName <userName> and password <password>
    And Select a Application Type and serch the records with query
    #And Select a valid PAYG <Device>
    #And Select valid <Tariffs> from PAYG tariffs tab
    #And Validate all the Basket content and checkout
    #Then perform all the advisory checks
    #And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    #And Choose <DeliveryType> delivery address and delivery time
    #When Pay by card
    #Then Order confirmation message should be displayed

    Examples:
      | userName | password  |
      | nmydur1  | NR9L6SSVB |