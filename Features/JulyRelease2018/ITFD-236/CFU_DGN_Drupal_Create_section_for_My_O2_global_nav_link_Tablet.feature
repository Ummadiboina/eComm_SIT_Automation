Feature: CFU_DGN_Drupal_Create_section_for_My_O2_global_nav_link_Tablet

  This scenario ensures that when an Upgrade customer lands on Drupal Global nav enabled Page and clicks on the 'My O2' link, then the customer should be re-directed to
  'https://mymobile.ref.o2.co.uk/'

  @Web

  Scenario Outline: CFU_DGN_Drupal_Create_section_for_My_O2_global_nav_link_Tablet
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    #Then Click on browser back arrow and land on previous page
    And navigate to PAYM Phones page
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    #Then Click on browser back arrow and land on previous page
    And navigate to PAYM Tablets page
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    #Then Click on browser back arrow and land on previous page
    And Navigate to PayM MBB page
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    #Then Click on browser back arrow and land on previous page
    And navigate to PAYM SIMO page
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    #Then Click on browser back arrow and land on previous page
    And Navigate to Accessories
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    #Then Click on browser back arrow and land on previous page
    And Navigate to Fitness Trackers
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    #Then Click on browser back arrow and land on previous page
    And Navigate to SmartWatches
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    #Then Click on browser back arrow and land on previous page
    And Navigate to Ipad page
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    #Then Click on browser back arrow and land on previous page
    # PayG navigations starts
    And navigate to Pay as you Go Phones page
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    #Then Click on browser back arrow and land on previous page
    And navigate to Pay as you Go Tablets page
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    #Then Click on browser back arrow and land on previous page
    And navigate to PayG SIMO page
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    #Then Click on browser back arrow and land on previous page
    And Navigate to PayG MBB page
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    #Then Click on browser back arrow and land on previous page
    #//--------Validating at Device details,Tariff&Extras, Basket and order confirmation page-------------
    And Navigate to upgrade > upgrade now
    And Click on Tablet section in upgrade options page
    And Select a <Tablet> device from Recommended devices section
    And Click on View all Tariffs link in upgrade options page
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    Then Click on browser back arrow and land on previous page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page by clicking on Add to Basket button
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    Then Click on browser back arrow and land on previous page
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Enter details in Delivery page for Click and collect
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Enter cardDetails in payment page input <Username> and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And click on 'My O2' link
    Then validate url for existing customer when clicks on 'My O2' link
    Then Click on browser back arrow and land on previous page


    Examples:
      | username                     | password | Firstname | Surname | Tablet  | Username     | Action    | consumer | status  |
      | ins_feb3087@stf.ref.o2.co.uk | test123  | Test      | Accepta | Samsung | TEST ACCEPTA | enterCode | Me       | Enabled |
