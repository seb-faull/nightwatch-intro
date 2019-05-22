module.exports = {
  "src_folders" : ["tests"],

  "webdriver" : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  "test_settings" : {
    "default" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
    /*,Add more  browsers for testing if you like
    "firefox" : {
      "desiredCapabilities": {
        "browserName": "firefox"
      }
    },
    "safari" : {
      "desiredCapabilities": {
        "browserName": "safari"
      }
    }
    */
  }
};
