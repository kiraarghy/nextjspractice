"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Alpha/dev/reactnextpractice/pages/index.js?entry";


var Index = function Index(props) {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Batman TV Shows"), _react2.default.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.shows.map(function (_ref) {
    var show = _ref.show;
    return _react2.default.createElement("li", { key: show.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }, _react2.default.createElement(_link2.default, { as: "/" + show.id, href: "/post?id=" + show.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, _react2.default.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, show.name)));
  })));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicUnfetch2.default)("https://api.tvmaze.com/search/shows?q=batman");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;

          console.log("Show data fetched. Count:${data.length}");

          return _context.abrupt("return", {
            shows: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJmZXRjaCIsIkluZGV4IiwicHJvcHMiLCJzaG93cyIsIm1hcCIsInNob3ciLCJpZCIsIm5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFFBQVEsU0FBUixBQUFRLGFBQUE7eUJBQ1osY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0Esb0NBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsV0FDRyxBQUFNLE1BQU4sQUFBWSxJQUFJLGdCQUFBO1FBQUEsQUFBRyxZQUFILEFBQUc7MkJBQ2xCLGNBQUEsUUFBSSxLQUFLLEtBQVQsQUFBYztrQkFBZDtvQkFBQSxBQUNFO0FBREY7S0FBQSxrQkFDRSxBQUFDLGdDQUFLLFVBQVEsS0FBZCxBQUFtQixJQUFNLG9CQUFrQixLQUEzQyxBQUFnRDtrQkFBaEQ7b0JBQUEsQUFDRTtBQURGO3VCQUNFLGNBQUE7O2tCQUFBO29CQUFBLEFBQUk7QUFBSjtBQUFBLFlBSFcsQUFDZixBQUNFLEFBQ0UsQUFBUztBQVBQLEFBQ1osQUFFRSxBQUNHO0FBSlA7O0FBZUEsTUFBQSxBQUFNLDJGQUFrQixtQkFBQTtXQUFBO2dFQUFBO2NBQUE7dUNBQUE7YUFBQTswQkFBQTtpQkFDSixpQ0FESSxBQUNKLEFBQU07O2FBQWxCO0FBRGdCLHlCQUFBOzBCQUFBO2lCQUVILElBRkcsQUFFSCxBQUFJOzthQUFqQjtBQUZnQiwwQkFJdEI7O2tCQUFBLEFBQVEsSUFKYyxBQUl0QixBQUFZOzs7bUJBSlUsQUFNZixBQUNFO0FBREYsQUFDTDs7YUFQb0I7YUFBQTswQkFBQTs7QUFBQTtjQUFBO0FBQXhCLEFBV0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL0FscGhhL2Rldi9yZWFjdG5leHRwcmFjdGljZSJ9