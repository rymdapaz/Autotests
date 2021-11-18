const {Builder, By, Key} = require('selenium-webdriver');
const assert = require('assert');
//var should = require('chai').should();
//await browser.manage().window().maximize();



const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}


describe("'First name' field warning tesing", function() {
    it("'Required' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[1][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/input')).sendKeys(Key.ENTER);
        let warnText = await browser.findElement(By.xpath('//div[1][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/div')).getText().then(function(value) {
            return value;
        });
        await assert.strictEqual(warnText, 'Privaloma');
    
        await browser.quit();
    });
    it('"More than 2 digits" warning testing', async function() {

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[1][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/input')).sendKeys('1', Key.ENTER);
        let warnText1 = await browser.findElement(By.xpath('//div[1][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/div')).getText().then(function(value1) {
            return value1;
        });
        await assert.strictEqual(warnText1, 'Daugiau nei 2 simboliai');

        await browser.quit();

    });
    it('"Less than 30 digits" warning testing', async function() {

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[1][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/input')).sendKeys('11111111111111111111111111111111111', Key.ENTER);
        let warnText2 = await browser.findElement(By.xpath('//div[1][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/div')).getText().then(function(value2) {
            return value2;
        });
        await assert.strictEqual(warnText2, 'Mažiau nei 30 simbolių');

        await browser.quit();

    });
});

describe("'Last name' field warning tesing", function() {
    it("'Required' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        //await browser.manage().window().maximize();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/input')).sendKeys(Key.ENTER);
        let warnText4 = await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/div')).getText().then(function(value4) {
            return value4;
        });
        await assert.strictEqual(warnText4, 'Privaloma');
    
        await browser.quit();
    });
    it('"More than 2 digits" warning testing', async function() {

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/input')).sendKeys('1', Key.ENTER);
        let warnText5 = await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/div')).getText().then(function(value5) {
            return value5;
        });
        await assert.strictEqual(warnText5, 'Daugiau nei 2 simboliai');

        await browser.quit();

    });
    it('"Less than 30 digits" warning testing', async function() {

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/input')).sendKeys('11111111111111111111111111111111111', Key.ENTER);
        let warnText6 = await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/div')).getText().then(function(value6) {
            return value6;
        });
        await assert.strictEqual(warnText6, 'Mažiau nei 30 simbolių');

        await browser.quit();

    });
});

describe("'Email' field warning tesing", function() {
    it("'Required' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_email__2imD1"]/input')).sendKeys(Key.ENTER);
        let warnText7 = await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_email__2imD1"]/div')).getText().then(function(value7) {
            return value7;
        });
        await assert.strictEqual(warnText7, 'Privaloma');
    
        await browser.quit();
    });
    it('"Invalid email" warning testing', async function() {

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_email__2imD1"]/input')).sendKeys('testlogin', Key.ENTER);
        let warnText8 = await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_email__2imD1"]/div')).getText().then(function(value8) {
            return value8;
        });
        await assert.strictEqual(warnText8, 'Negaliojantis el.pašto adresas');

        await browser.quit();

    });
    it('"Email already in use" warning testing', async function() {

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[1][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/input')).sendKeys('test');
        await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/input')).sendKeys('test');
        await browser.findElement(By.xpath('//label[2][@class="Signup_signupPageSexLabel__27jJH"]')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[1]')).sendKeys('1998');
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[2]')).sendKeys('06');
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[3]')).sendKeys('12');
        await browser.findElement(By.xpath('//div[@class="CustomInput_wrapper__2psis CustomInput_mobileNumber__3vT1d"]/input')).sendKeys('test');
        await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[6]/input')).sendKeys('password');
        await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[7]/input')).sendKeys('password');
        await browser.findElement(By.xpath('//div[@class="Signup_signupPageCheckboxWrapper__3V7_V Signup_signupPageCheckboxWrapper__private__3DU_V"]/input')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_signupPageCheckboxWrapper__3V7_V Signup_signupPageCheckboxWrapper__data__3Sfqh"]/input')).click();
        await delay(3000);
        await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_email__2imD1"]/input')).sendKeys('derbyshiredelia@yahoo.com', Key.ENTER);
        await delay(4000);
    
        let warnText9 = await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_email__2imD1"]/div')).getText().then(function(value9) {
            return value9;
        });

        await assert.strictEqual(warnText9, 'Toks el.pastas jau naudojamas');

        await browser.quit();

    });
});

describe("'Sex' form testing", function() {
    it("'Required' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_email__2imD1"]/input')).sendKeys(Key.ENTER);
        let warnText10 = await browser.findElement(By.xpath('//div[@class="Signup_signupPageSexWrapper__5v7st"]/div[2]')).getText().then(function(value10) {
            return value10;
        });
        await assert.strictEqual(warnText10, 'Privaloma');
    
        await browser.quit();
    });

});

describe("'Date' form testing", function() {

    it("'Required' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[3]')).sendKeys(Key.ENTER);
        let warnText11 = await browser.findElement(By.xpath('//div[@class="Signup_signupPageInputWrapper__3w7Yx"]/div[2]')).getText().then(function(value11) {
            return value11;
        });
        await assert.strictEqual(warnText11, 'Privaloma');
    
        await browser.quit();
    });

    it('"Must be 18 years" warning', async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[1][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/input')).sendKeys('test');
        await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_name__35s9X"]/input')).sendKeys('test');
        await browser.findElement(By.xpath('//label[2][@class="Signup_signupPageSexLabel__27jJH"]')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[1]')).sendKeys('2012');
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[2]')).sendKeys('06');
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[3]')).sendKeys('12');
        await browser.findElement(By.xpath('//div[@class="CustomInput_wrapper__2psis CustomInput_mobileNumber__3vT1d"]/input')).sendKeys('test');
        await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[6]/input')).sendKeys('password');
        await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[7]/input')).sendKeys('password');
        await browser.findElement(By.xpath('//div[@class="Signup_signupPageCheckboxWrapper__3V7_V Signup_signupPageCheckboxWrapper__private__3DU_V"]/input')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_signupPageCheckboxWrapper__3V7_V Signup_signupPageCheckboxWrapper__data__3Sfqh"]/input')).click();
        await delay(2000);
        await browser.findElement(By.xpath('//div[2][@class="CustomInput_wrapper__2psis CustomInput_email__2imD1"]/input')).sendKeys('derbyshiredelia@yahoo.com', Key.ENTER);
        await delay(2000);
        

        let warnText12 = await browser.findElement(By.xpath('//div[@class="Signup_signupPageInputWrapper__3w7Yx"]/div[2]')).getText().then(function(value12) {
            return value12;
        });
        await assert.strictEqual(warnText12, 'Jūs turite būti vyresnis nei 18 metų');
    
        await browser.quit();
    });

    it("'Must be 4 digits' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[1]')).sendKeys('19', Key.ENTER);
        let warnText13 = await browser.findElement(By.xpath('//div[@class="Signup_signupPageInputWrapper__3w7Yx"]/div[2]')).getText().then(function(value13) {
            return value13;
        });
        await assert.strictEqual(warnText13, 'Turi būti tiksliai 4 simboliai');
    
        await browser.quit();
    });

    it("'Must be 2 digits' month warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[1]')).sendKeys('1998');
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[2]')).sendKeys('455');
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[3]')).sendKeys('12', Key.ENTER);
        let warnText14 = await browser.findElement(By.xpath('//div[@class="Signup_signupPageInputWrapper__3w7Yx"]/div[2]')).getText().then(function(value14) {
            return value14;
        });
        await assert.strictEqual(warnText14, 'Mažiau nei 2 simbolių');
    
        await browser.quit();
    });

    it("'Must be 2 digits' day warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[1]')).sendKeys('1998');
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[2]')).sendKeys('2');
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[3]')).sendKeys('123', Key.ENTER);
        let warnText17 = await browser.findElement(By.xpath('//div[@class="Signup_signupPageInputWrapper__3w7Yx"]/div[2]')).getText().then(function(value17) {
            return value17;
        });
        await assert.strictEqual(warnText17, 'Mažiau nei 2 simbolių');
    
        await browser.quit();
    });

    it("'Incorrect monthn value' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[1]')).sendKeys('1998');
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[2]')).sendKeys('45');
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[3]')).sendKeys('12', Key.ENTER);
        let warnText15 = await browser.findElement(By.xpath('//div[@class="Signup_signupPageInputWrapper__3w7Yx"]/div[2]')).getText().then(function(value15) {
            return value15;
        });
        await assert.strictEqual(warnText15, 'Netinkama mėnesio vertė');
    
        await browser.quit();
    });

    it("'Incorrect day value' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[1]')).sendKeys('1998');
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[2]')).sendKeys('3');
        await browser.findElement(By.xpath('//div[@class="Signup_birthDate__21qom"]/input[3]')).sendKeys('45', Key.ENTER);
        let warnText16 = await browser.findElement(By.xpath('//div[@class="Signup_signupPageInputWrapper__3w7Yx"]/div[2]')).getText().then(function(value16) {
            return value16;
        });
        await assert.strictEqual(warnText16, 'Neteisinga dienos vertė');
    
        await browser.quit();
    });
});

describe("'Mobile' field warning testing", function() {
    it("'Require' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[@class="CustomInput_wrapper__2psis CustomInput_mobileNumber__3vT1d"]/input')).sendKeys(Key.ENTER);
        let warnText18 = await browser.findElement(By.xpath('//div[@class="CustomInput_wrapper__2psis CustomInput_mobileNumber__3vT1d"]/div')).getText().then(function(value18) {
            return value18;
        });
        await assert.strictEqual(warnText18, 'Privaloma');
    
        await browser.quit();
    });

});

describe("'Password' field warning testing", function() {
    
    it("'Require' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[6]/input')).sendKeys(Key.ENTER);
        let warnText19 = await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[6]/div')).getText().then(function(value19) {
            return value19;
        });
        await assert.strictEqual(warnText19, 'Privaloma');
    
        await browser.quit();
    });

    it("'More than 6' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[6]/input')).sendKeys('1', Key.ENTER);
        let warnText20 = await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[6]/div')).getText().then(function(value20) {
            return value20;
        });
        await assert.strictEqual(warnText20, 'Daugiau nei 6 simboliai');
    
        await browser.quit();
    });

    it("'Less than 30' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[6]/input')).sendKeys('11111111111111111111111111111111111', Key.ENTER);
        let warnText21 = await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[6]/div')).getText().then(function(value21) {
            return value21;
        });
        await assert.strictEqual(warnText21, 'Mažiau nei 30 simbolių');
    
        await browser.quit();
    });
});

describe("'Reset Password' field warning testing", function() {
    
    it("'Require' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[7]/input')).sendKeys(Key.ENTER);
        let warnText22 = await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[7]/div')).getText().then(function(value22) {
            return value22;
        });
        await assert.strictEqual(warnText22, 'Privaloma');
    
        await browser.quit();
    });

    it("'More than 6' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[7]/input')).sendKeys('1', Key.ENTER);
        let warnText23 = await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[7]/div')).getText().then(function(value23) {
            return value23;
        });
        await assert.strictEqual(warnText23, 'Daugiau nei 6 simboliai');
    
        await browser.quit();
    });

    it("'Less than 30' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[7]/input')).sendKeys('11111111111111111111111111111111111', Key.ENTER);
        let warnText24 = await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[7]/div')).getText().then(function(value24) {
            return value24;
        });
        await assert.strictEqual(warnText24, 'Mažiau nei 30 simbolių');
    
        await browser.quit();
    });

    it("'Must Match' warning", async function(){

        let chrome = require('selenium-webdriver/chrome');
        let browser = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        await browser.get('https://dev.revolab.lt/signup');
        await delay(3000);
        await browser.findElement(By.xpath('//button[@class="App_cookieConsentButton__2FHWO"]')).click();
        await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[6]/input')).sendKeys('password');
        await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[7]/input')).sendKeys('password1', Key.ENTER);
        let warnText25 = await browser.findElement(By.xpath('//div[@class="Signup_formWrapper__2t4KU"]/div[7]/div')).getText().then(function(value25) {
            return value25;
        });
        await assert.strictEqual(warnText25, 'Slaptažodis turi sutapti');
    
        await browser.quit();
    });
});