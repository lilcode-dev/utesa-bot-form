const puppeteer = require("puppeteer");

(async () => {
  for (let i = 0; i < 10; i++) {
    const browser = await puppeteer.launch({
      headless: false,
      devtools: false,
      args:[
        '--start-maximized' // you can also use '--start-fullscreen'
     ]
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768});
    await page.goto("https://forms.gle/dPUmn3WgJovyZAGr9", {
      waitUntil: "load",
    });
    await page.waitForTimeout(1000);

    // select sex

    const sex = () => new Promise((resolve) =>
      resolve(Math.floor(Math.random() * (21 - 1)) + 1)
    );
    const selectSex = async (n) => {
      await page.waitForSelector(
        `#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(1) > div > div > div.freebirdFormviewerComponentsQuestionRadioRoot > div:nth-child(2) > div > span > div > div:nth-child(${n}) > label > div > div.docssharedWizToggleLabeledContent > div > span`
      );
      await page.click(
        `#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(1) > div > div > div.freebirdFormviewerComponentsQuestionRadioRoot > div:nth-child(2) > div > span > div > div:nth-child(${n}) > label > div > div.docssharedWizToggleLabeledContent > div > span`
      );
    }
    await sex().then(async (sex) => {
      // console.log(sex);
      (sex <= 10) ? selectSex(1) : selectSex(2);        
    })

    // 

    //select age
    
    const age = () =>
      new Promise((resolve) => {
        resolve(Math.floor(Math.random() * (32 - 16)) + 16);
      });
    // await page.waitForTimeout(1000);
    const selectAge = async (n) => {
      await page.waitForSelector(
        `#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(2) > div > div > div.freebirdFormviewerComponentsQuestionRadioRoot > div:nth-child(2) > div > span > div > div:nth-child(${n}) > label > div > div.docssharedWizToggleLabeledContent > div > span`
      );
      await page.click(
        `#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(2) > div > div > div.freebirdFormviewerComponentsQuestionRadioRoot > div:nth-child(2) > div > span > div > div:nth-child(${n}) > label > div > div.docssharedWizToggleLabeledContent > div > span`
      );
    };
    await age().then(async (age) => {
      // console.log(age);
      age <= 17 ? selectAge(1) : age <= 20 ? selectAge(2) : age <= 23 ? selectAge(3) : age <= 27 ? selectAge(4) : age <= 31 ? selectAge(5) : false;
    });

    // 
    await page.click('#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(3) > div > div > div.freebirdFormviewerComponentsQuestionRadioRoot > div:nth-child(2) > div > span > div > div:nth-child(1) > label > div > div.docssharedWizToggleLabeledContent > div > span')
    await page.click('#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(4) > div > div > div.freebirdFormviewerComponentsQuestionRadioRoot > div:nth-child(2) > div > span > div > div:nth-child(1) > label > div > div.docssharedWizToggleLabeledContent > div > span')
    await page.click('#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(5) > div > div > div.freebirdFormviewerComponentsQuestionRadioRoot > div:nth-child(2) > div > span > div > div:nth-child(1) > label > div > div.docssharedWizToggleLabeledContent > div > span')
    await page.click('#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(6) > div > div > div.freebirdFormviewerComponentsQuestionRadioRoot > div:nth-child(2) > div > span > div > div:nth-child(1) > label > div > div.docssharedWizToggleLabeledContent > div > span')
    await page.click('#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(7) > div > div > div.freebirdFormviewerComponentsQuestionRadioRoot > div:nth-child(2) > div > span > div > div:nth-child(2) > label > div > div.docssharedWizToggleLabeledContent > div > span')
    await page.click('#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(8) > div > div > div.freebirdFormviewerComponentsQuestionRadioRoot > div:nth-child(2) > div > span > div > div:nth-child(1) > label > div > div.docssharedWizToggleLabeledContent > div > span')
    await page.waitForTimeout(1200);
    await page.click('#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewNavigationNavControls > div > div > div > span > span')
    await page.waitForTimeout(1200);
    await browser.close();
  }
})();

