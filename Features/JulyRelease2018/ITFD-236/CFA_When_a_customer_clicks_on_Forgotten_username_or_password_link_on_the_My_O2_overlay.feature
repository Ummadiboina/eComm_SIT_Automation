Feature: CFA_When_a_customer_clicks_on_Forgotten_username_or_password_link_on_the_My_O2_overlay

  This scenario validates that when a CFA customer click on the 'My O2' link and chooses to click "Forgotten username or password" on the Overlay window, then the customer should be re-directed to shop's Get Help sign in page - https://accounts.o2.co.uk/resetpassword/selectusername


  @Web

  Scenario Outline: CFA_When_a_customer_clicks_on_Forgotten_username_or_password_link_on_the_My_O2_overlay
    Given I am an CFA user and Lands on shop page
    And click on 'My O2' link
    And validate 'My O2' page
    And click on 'Forgotten username or password' link
    Then validate URL after clicking on 'Forgotten username or password' link

    Examples:
      | username                     | password |
      | ins_feb3087@stf.ref.o2.co.uk | test123  |
