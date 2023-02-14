console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('js/app.js', 'utf8');

describe('', function () {
  it("Did you add a `submitButtonStyles` property on `computed` with a value of the provided function?", function () {
    let structure = function() {
      const app = new Vue({
        computed: {
          submitButtonStyles: function() {
            if (this.formIsValid) {
              return {
                'background-color': '#4c7ef3',
                cursor: 'pointer'
              }
            } else {
              return {
                'background-color': 'gray',
                cursor: 'default'
              }
            }
          }
        }
      });
    };

    let isMatch = Structured.match(code, structure);
    assert.isOk(isMatch);
  });
});