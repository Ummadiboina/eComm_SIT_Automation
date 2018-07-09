Feature: CFA_When_a_customer_clicks_on_Register_link_on_the_My_O2_overlay

  This scenario validates that when a CFA customer click on the 'My O2' link and chooses to click 'Register' on the Overlay window, then the customer should be re-directed to the shop's register page

  @Web

  Scenario Outline: CFA_When a customer clicks on Register link on the My O2 overlay
    Given I am an CFA user and Lands on shop page
    And click on 'My O2' link
    And validate 'My O2' page
    And click on 'Register' link
    Then validate URL after clicking on 'Register' link

    Examples:
      | username                     | password |
      | ins_feb3087@stf.ref.o2.co.uk | test123  |
