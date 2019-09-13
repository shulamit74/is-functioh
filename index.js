
const request = require("request");
const md5 = require('js-md5');

function main(params) {
  let options = { url: params.endpoint.val, json: true}
  return new Promise(function (resolve, reject) {
    request(options, function (err, resp) {
      if (err) {
        return reject({err: err});
      }
      let arr = resp.body.emails;
      let email = params.email;
      let answer = null;
      if (arr.indexOf(email) > -1){
        answer = md5(email)
      }
      return resolve({hash: answer});
    });
  });
}
global.main = main;
