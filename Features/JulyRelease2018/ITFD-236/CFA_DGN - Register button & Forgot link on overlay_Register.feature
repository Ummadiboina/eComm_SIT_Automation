Feature: CFA_DGN - Register button & Forgot link on overlay_Register

  This scenario validates that when a Acquisition customer click on the 'My O2' link and chooses to click 'Register' on the Overlay window, then the customer should be re-directed to "https://accounts.o2.co.uk/register"

  @Web

  Scenario Outline: CFA_DGN - Register button & Forgot link on overlay_Register
    Given I am an CFA user and Lands on shop page
    And click on 'My O2' link
    And validate 'My O2' page
    And click on 'Register' link
    Then validate URL after clicking on 'Register' link

    Examples:
      | username                     | password |
      | ins_feb3087@stf.ref.o2.co.uk | test123  |
