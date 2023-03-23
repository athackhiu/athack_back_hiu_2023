var express = require("express");
var router = express.Router();
const auth = require("../authentification/auth");
const { NlpManager } = require("../node-nlp/src");
const BOT_NAME = "Lily";

router.get("/", auth, function (req, res, next) {
  res.send("CHATBOT");
});

router.post("/chat", async (req, res) => {
  body = req.body;
  let {question, language } = body
  const manager = new NlpManager({ languages: ["en", "fr"] });
  let regex_lang_fr = /.*fr.*/
  language = regex_lang_fr.test(language) ? "fr" : "en"
  manager.load();
  const response = await manager.process(language, question);
  const no_response = language === "fr" ? "Je suis désolé mais je ne comprend pas ce que vous voulez dire" : "Sorry but I don't understand what you are trying to say."
  let response_formatted = {
    text: response.answer ? response.answer.replaceAll("[bot_name]", BOT_NAME) : no_response
  }
  try{
    response_formatted = {
      json: JSON.parse(response_formatted.text),
      text: language === "fr" ? `Redirection vers ${JSON.parse(response_formatted.text).redirect}` : `Redirecting to ${JSON.parse(response_formatted.text).redirect}`
    }
  }catch(err){
    console.log(response_formatted.text)
    console.log(err)
  }
  res.json({
    response: response_formatted,
    language: language
  });
});

module.exports = router;
