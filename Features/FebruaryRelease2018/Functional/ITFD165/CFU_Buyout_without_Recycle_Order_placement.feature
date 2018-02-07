Feature: CFU_Buyout_without_Recycle_Order_placement
  This scenario ensures that when  a customer in an upgrade journey has opted for Buyout ,then the Buyout is displayed without Recycle in  'Your package' summary and Order should be placed successfully
  @Web
  Scenario Outline: CFU_Buyout_without_Recycle_Order_placement
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Verify that the buyout offer section is displayed with 'Take offer and Upgrade' CTA under 'Your Options' heading
    And Verify that '£XXX.XX left to pay on your current Device Plan' panel is displayed below the buyout offer panel and below to that upgrade and recycle options is displayed
    And Click on 'Take Offer and Upgrade' button
    And Verify that the same recycle section is displayed as it is displayed to the non-buyout and non-trade-in users
    When Click on 'No thanks, I'll keep my device' button
    And Select a Device from the recommended section
    And Select a Tariff
    Then Verify that in 'Your package' summary Buyout is displayed without Recycle
    And Click on 'Add and Go to Basket' button
    Then Click on 'Go to checkout' and proceed till order confirmation

    Examples:
      |username      |password|  |
      | hgyu@poiu.com| test123|  |