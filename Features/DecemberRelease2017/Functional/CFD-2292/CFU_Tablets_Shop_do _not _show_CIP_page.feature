Feature:  CFU_Tablets_Shop_do _not _show_CIP_page
  This scenario ensures that when the customer in Upgrade journey selects 'Tablet' continues the journey and lands on 'Delivery Page', then Checkout In Progress page should not be displayed when the customer clicks on Back arrow in Delivery page

  @Web
  Scenario Outline: CFU_Tablets_Shop_do _not _show_CIP_page
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on Tablet section in upgrade options page
    And Select a <Tablet> device from Recommended devices section
    And Click on View all Tariffs link in upgrade options page
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    #And the customer lands on delivery page
    And Click on browser back arrow and land on Basket page
    #Checkout In Progress page should not be displayed

  Examples:
  | Tablet | username | password |