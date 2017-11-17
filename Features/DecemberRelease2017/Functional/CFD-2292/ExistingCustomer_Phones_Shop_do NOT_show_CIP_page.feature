Feature: ExistingCustomer_Phones_Shop_do NOT_show_CIP_page
  This scenario ensures that when the Existing customer selects 'Phone' and proceed till 'Delivery page',then Checkout In Progress page should not be displayed when the customer clicks on Back arrow in Delivery page

  @Web
  Scenario Outline: ExistingCustomer Phones_ColourDropdownsWithColourNamesBesideTheColourSingleColour

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And the customer lands on delivery page
    And Click on browser back arrow and land on Basket page
    #Checkout In Progress page should not be displayed

  Examples:
    | username | password | handset |