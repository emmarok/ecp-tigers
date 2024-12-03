Feature: Home ADHD Page functionality
  @test
  Scenario: Verify ADHD page functionality
  Given I am on the ADHD home page    
  Then the page title should contain "Reboot Hackathon"

  Scenario: Validate the budget spend for each category
  Given I am on the ADHD home page
  Then validate the budget wheel
  Then validate the expenses for each category for the current quarter
  And I validate the remaining this month value

  Scenario: Validate the move monthly budget functioanlity
  Given I am on the ADHD home page
  Then I click on Open Drawer buton
  And I see move monthly budget popup
  And I can set the budget for selected category



