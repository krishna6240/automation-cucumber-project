package com.automation.cucumber.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SignINPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SignInSteps {
    @Given("^User is on homepage$")
    public void userIsOnHomepage() {
    }

    @When("^User click on sign-in link$")
    public void userClickOnSignInLink() {
        new HomePage().setClickOnSignInLink();
    }

    @Then("^User verify sign-in page text <\"([^\"]*)\">$")
    public void userVerifySignInPageText(String msg) {
        String actualMessage = new SignINPage().verifyAuthenticationText();
        Assert.assertEquals("you are not on login page", msg, actualMessage);
    }

    @And("^User sign in with invalid username and password \"([^\"]*)\" \"([^\"]*)\"$")
    public void userSignInWithInvalidUsernameAndPassword(String email, String pword) {
        new SignINPage().signInWithUserNameAndPassword(email, pword);
    }

    @And("^User click on sign-in button$")
    public void userClickOnSignInButton() {
        new SignINPage().setClickOnSignInButton();
    }

    @Then("^User should see error message \"([^\"]*)\"$")
    public void userShouldSeeErrorMessage(String error) {
        String actualMsg = new SignINPage().getVerifyAuthenticationFailedMessage();
        Assert.assertEquals(error, actualMsg);
    }

    @And("^User enter valid email and password <\"([^\"]*)\"> and <\"([^\"]*)\">$")
    public void userEnterValidEmailAndPasswordAnd(String email, String pw) {
        new SignINPage().signInWithUserNameAndPassword(email, pw);
    }

    @Then("^User should login successfully and see 'sign-out' button$")
    public void userShouldLoginSuccessfullyAndSeeSignOutButton() {
        String exp = "Sign out";
        String act = new SignINPage().verifyLogOutLink();
        Assert.assertEquals(exp, act);
    }

    @And("^User should click on sign-out button$")
    public void userShouldClickOnSignOutButton() {
        new SignINPage().clickOnSignOut();
    }

    @Then("^User should signout successfully and see 'sign-in' button$")
    public void userShouldSignoutSuccessfullyAndSeeSignInButton() {
        String exp = "Sign in";
        String act = new HomePage().signButtonVerify();
    }
}