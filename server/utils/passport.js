const _0x2be0a3 = _0xf2c0,
  _0x36abcc = _0xf2c0;
(function (_0xece08b, _0x15d6e1) {
  const _0x4818e1 = _0xf2c0,
    _0xd7d776 = _0xf2c0,
    _0x46091d = _0xece08b();
  while (!![]) {
    try {
      const _0x5ee332 =
        -parseInt(_0x4818e1(0x11a)) /
          (0x12 * -0x1a3 + -0x1283 + -0x45 * -0xb2) +
        parseInt(_0x4818e1(0x106)) /
          (-0xc49 * -0x3 + -0x1ec9 * -0x1 + -0x43a2) +
        parseInt(_0x4818e1(0x109)) / (0xc * 0x8 + 0x2132 + -0x218f) +
        (parseInt(_0x4818e1(0x10a)) / (0x3 * 0x9bf + -0x62f + 0x3d7 * -0x6)) *
          (-parseInt(_0x4818e1(0x105)) / (-0x89d + 0x1dfe + 0x155c * -0x1)) +
        -parseInt(_0x4818e1(0x115)) / (0x1d5a + -0x26aa + 0x2 * 0x4ab) +
        -parseInt(_0x4818e1(0x11c)) / (0x10b9 + 0x816 + -0x1 * 0x18c8) +
        (-parseInt(_0xd7d776(0x116)) / (-0x676 + -0xc61 + 0x12df)) *
          (-parseInt(_0x4818e1(0x10c)) /
            (-0x1 * -0x1d2b + 0x3 * -0xbf5 + -0x3 * -0x23f));
      if (_0x5ee332 === _0x15d6e1) break;
      else _0x46091d["push"](_0x46091d["shift"]());
    } catch (_0x2e14f9) {
      _0x46091d["push"](_0x46091d["shift"]());
    }
  }
})(_0x546b, 0x2 * -0x882dd + 0x234d * -0x1 + -0xc8ce * -0x22);
function _0x546b() {
  const _0x51c7ed = [
    "passport-local",
    "zuAlj",
    "33427OoQcrB",
    "serializeUser",
    "3279955ZBdbtd",
    "Incorrect\x20ID/password",
    "mUVTx",
    "zQUrx",
    "34915KKSDRG",
    "1652514lNWAJJ",
    "vtdQh",
    "sPCtn",
    "1892304HvfPcA",
    "448AOFveM",
    "passport",
    "9XzaVqi",
    "usernameField",
    "findById",
    "../model/userModel",
    "isValidPassword",
    "use",
    "deserializeUser",
    "uid",
    "findOne",
    "5129820yHEWMD",
    "10441776LFqQXz",
    "password",
  ];
  _0x546b = function () {
    return _0x51c7ed;
  };
  return _0x546b();
}
function _0xf2c0(_0x1bf799, _0x470522) {
  const _0x46f162 = _0x546b();
  return (
    (_0xf2c0 = function (_0xfecf6e, _0x594cf8) {
      _0xfecf6e = _0xfecf6e - (-0xff * -0x1e + 0x1a10 + 0x2b * -0x147);
      let _0x18a167 = _0x46f162[_0xfecf6e];
      return _0x18a167;
    }),
    _0xf2c0(_0x1bf799, _0x470522)
  );
}
const passport = require(_0x2be0a3(0x10b)),
  LocalStrategy = require(_0x2be0a3(0x118))["Strategy"],
  User = require(_0x2be0a3(0x10f)),
  _0x298686 = {};
(_0x298686[_0x36abcc(0x10d)] = _0x2be0a3(0x113)),
  (_0x298686["passwordField"] = _0x36abcc(0x117)),
  passport[_0x2be0a3(0x111)](
    new LocalStrategy(_0x298686, async (_0xa0a93f, _0x34277e, _0x272baf) => {
      const _0x1492f9 = _0x36abcc,
        _0x55cd9c = _0x2be0a3,
        _0x180fed = {
          sPCtn: function (_0x12cac3, _0x4f887d, _0x35b8c6, _0x54eaaa) {
            return _0x12cac3(_0x4f887d, _0x35b8c6, _0x54eaaa);
          },
          zuAlj: "UID\x20not\x20registered",
          mUVTx: function (_0x533875, _0x2d1b4f, _0x510796) {
            return _0x533875(_0x2d1b4f, _0x510796);
          },
          zQUrx: function (_0x11a60b, _0x2ef131) {
            return _0x11a60b(_0x2ef131);
          },
        };
      try {
        const _0x5f031c = {};
        _0x5f031c[_0x1492f9(0x113)] = _0xa0a93f;
        const _0x3bd839 = await User[_0x1492f9(0x114)](_0x5f031c);
        if (!_0x3bd839)
          return _0x180fed[_0x55cd9c(0x108)](_0x272baf, null, ![], {
            message: _0x180fed[_0x1492f9(0x119)],
          });
        const _0x52e0b4 = await _0x3bd839[_0x1492f9(0x110)](_0x34277e),
          _0x49ccb5 = {};
        return (
          (_0x49ccb5["message"] = _0x1492f9(0x11d)),
          _0x52e0b4
            ? _0x180fed[_0x1492f9(0x11e)](_0x272baf, null, _0x3bd839)
            : _0x272baf(null, ![], _0x49ccb5)
        );
      } catch (_0x36f427) {
        _0x180fed[_0x55cd9c(0x11f)](_0x272baf, _0x36f427);
      }
    })
  ),
  passport[_0x2be0a3(0x11b)](function (_0x2d1c85, _0xf80078) {
    const _0x129712 = _0x36abcc,
      _0x52e70b = {
        vtdQh: function (_0x1c3b13, _0x7dcc14, _0x5cc57b) {
          return _0x1c3b13(_0x7dcc14, _0x5cc57b);
        },
      };
    _0x52e70b[_0x129712(0x107)](_0xf80078, null, _0x2d1c85["id"]);
  }),
  passport[_0x2be0a3(0x112)](function (_0x20644a, _0x3203b1) {
    const _0x5f4532 = _0x2be0a3,
      _0x54df25 = {
        FeJiU: function (_0x5eb3b3, _0x2d701b, _0x5557b9) {
          return _0x5eb3b3(_0x2d701b, _0x5557b9);
        },
      };
    User[_0x5f4532(0x10e)](_0x20644a, function (_0x49d8e0, _0x6cd1ee) {
      _0x54df25["FeJiU"](_0x3203b1, _0x49d8e0, _0x6cd1ee);
    });
  });
