const _0x47aaf1 = _0x3e83,
  _0x4a30b2 = _0x3e83;
(function (_0x12d623, _0x579c6f) {
  const _0x55033e = _0x3e83,
    _0x597e28 = _0x3e83,
    _0xf39792 = _0x12d623();
  while (!![]) {
    try {
      const _0x317384 =
        parseInt(_0x55033e(0x119)) / (0x234e + -0x1f55 + -0x3f8) +
        -parseInt(_0x55033e(0x115)) / (0x23c3 + 0x7ec + -0x3 * 0xe8f) +
        (-parseInt(_0x55033e(0x135)) / (-0x1556 + 0x14f2 + -0x1 * -0x67)) *
          (parseInt(_0x55033e(0x123)) / (-0x1bfc + -0x15a5 + -0x31a5 * -0x1)) +
        parseInt(_0x597e28(0x132)) / (0x1221 + 0x1ba0 + -0x2dbc) +
        (-parseInt(_0x597e28(0x12c)) / (-0x2149 + -0x168f + 0x37de)) *
          (-parseInt(_0x597e28(0x129)) / (-0xc09 + -0x1605 + 0x2215)) +
        parseInt(_0x55033e(0x131)) / (-0x4 * -0x4e1 + 0x1 * 0x1cc9 + -0x3045) +
        -parseInt(_0x597e28(0x134)) / (-0x1c27 * -0x1 + 0x17ec + -0x340a);
      if (_0x317384 === _0x579c6f) break;
      else _0xf39792["push"](_0xf39792["shift"]());
    } catch (_0x40c3ae) {
      _0xf39792["push"](_0xf39792["shift"]());
    }
  }
})(_0x3f65, 0x2532a + 0x1 * -0x99e5f + -0xc38f * -0x13);
function _0x3e83(_0x2e23ee, _0x555e9c) {
  const _0x1ea5cf = _0x3f65();
  return (
    (_0x3e83 = function (_0x578607, _0x8421ce) {
      _0x578607 = _0x578607 - (0x1 * -0x215b + 0x2582 + 0x313 * -0x1);
      let _0x1001ea = _0x1ea5cf[_0x578607];
      return _0x1001ea;
    }),
    _0x3e83(_0x2e23ee, _0x555e9c)
  );
}
function _0x3f65() {
  const _0x5469ed = [
    "error",
    "$submittedDate",
    "2909880yAEode",
    "808405hRbLFX",
    "cGUwm",
    "8047908LcbEri",
    "18vCPIxN",
    "FormData:",
    "json",
    "210064LGHBDt",
    "getVCBSBAREVA",
    "date",
    "status",
    "744820ERdKfq",
    "JmVSK",
    "format",
    "Error\x20fetching\x20form\x20data:",
    "GFDnp",
    "Internal\x20Server\x20Error",
    "LhhWI",
    "$eq",
    "UID:",
    "../../model/checklistModel/ModelVCBSBAREVA",
    "133788XDhwgF",
    "%Y-%m-%d",
    "Data\x20not\x20found\x20for\x20the\x20current\x20date\x20and\x20UID",
    "nbpKG",
    "ORKWd",
    "log",
    "1410087DncLRE",
    "$expr",
    "Current\x20Date:",
    "12XpoMYU",
    "khosY",
    "uid",
  ];
  _0x3f65 = function () {
    return _0x5469ed;
  };
  return _0x3f65();
}
const VCBSBAREVASchema = require(_0x47aaf1(0x122));
exports[_0x47aaf1(0x116)] = async (_0x28a719, _0xb615ad) => {
  const _0x381b54 = _0x4a30b2,
    _0x3c4c84 = _0x47aaf1,
    _0xdf22ee = {};
  (_0xdf22ee[_0x381b54(0x133)] = _0x381b54(0x12b)),
    (_0xdf22ee[_0x3c4c84(0x126)] = _0x3c4c84(0x124)),
    (_0xdf22ee[_0x381b54(0x12d)] = _0x3c4c84(0x130)),
    (_0xdf22ee[_0x3c4c84(0x11d)] = _0x381b54(0x136)),
    (_0xdf22ee[_0x3c4c84(0x11a)] = _0x381b54(0x125)),
    (_0xdf22ee[_0x381b54(0x127)] = _0x3c4c84(0x11c)),
    (_0xdf22ee["LhhWI"] = _0x381b54(0x11e));
  const _0x51b989 = _0xdf22ee;
  try {
    const { uid: _0x4abb9d } = _0x28a719["params"],
      _0x1f0f2a = new Date()["toISOString"]()["split"]("T")[
        0x5 * -0x5b + 0x8 * 0x3d0 + -0x1cb9
      ];
    console[_0x381b54(0x128)](_0x3c4c84(0x121), _0x4abb9d),
      console[_0x381b54(0x128)](_0x51b989[_0x381b54(0x133)], _0x1f0f2a);
    const _0x3208e1 = {};
    (_0x3208e1[_0x3c4c84(0x11b)] = _0x51b989[_0x3c4c84(0x126)]),
      (_0x3208e1[_0x381b54(0x117)] = _0x51b989[_0x381b54(0x12d)]);
    const _0x2bd203 = {};
    _0x2bd203["$dateToString"] = _0x3208e1;
    const _0x5b5afe = {};
    _0x5b5afe[_0x381b54(0x120)] = [_0x2bd203, _0x1f0f2a];
    const _0x16bad2 = {};
    (_0x16bad2[_0x3c4c84(0x12e)] = _0x4abb9d),
      (_0x16bad2[_0x3c4c84(0x12a)] = _0x5b5afe);
    const _0xa6655d = await VCBSBAREVASchema["findOne"](_0x16bad2);
    console[_0x381b54(0x128)](_0x51b989[_0x381b54(0x11d)], _0xa6655d);
    if (!_0xa6655d) {
      const _0x3bce2b = {};
      return (
        (_0x3bce2b[_0x3c4c84(0x12f)] = _0x51b989[_0x381b54(0x11a)]),
        _0xb615ad[_0x3c4c84(0x118)](0xca * -0x6 + -0xb * -0x342 + -0x1d86)[
          _0x381b54(0x114)
        ](_0x3bce2b)
      );
    }
    _0xb615ad[_0x3c4c84(0x114)](_0xa6655d);
  } catch (_0x5948d9) {
    console[_0x381b54(0x12f)](_0x51b989[_0x381b54(0x127)], _0x5948d9);
    const _0x21561e = {};
    (_0x21561e[_0x3c4c84(0x12f)] = _0x51b989[_0x3c4c84(0x11f)]),
      _0xb615ad["status"](-0x6 * 0x49d + 0x19b7 + 0x3eb)[_0x3c4c84(0x114)](
        _0x21561e
      );
  }
};
