Feature: CFA_SIMO_order_iPhone_user
  This scenario ensures that the customer in upgrade journey lands on upgrade option page, then the customer should be presented with targeted promotion section and the changes should be reflected in the following pages,

  @Web
  Scenario Outline: CFA_SIMO_order_iPhone_user
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And the 'Phone' tab is opened by default
    And the Check box with "I'll be using an iPhone" copy text is displayed below 'Select' CTA in the horizontal tariff tile
    And Click on "I'll be using an iPhone" checkbox and Click on 'Select' CTA to buy a tariff
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed

 Examples:
 | Firstname | Surname | Username     |
 | TEST      | ACCEPTA | TEST ACCEPTA |
