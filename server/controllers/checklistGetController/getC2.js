const _0x39f51b = _0x5502;
(function (_0x5dfd6b, _0x143046) {
  const _0x53ec54 = _0x5502,
    _0x43948b = _0x5502,
    _0x31e8e8 = _0x5dfd6b();
  while (!![]) {
    try {
      const _0x5dc384 =
        parseInt(_0x53ec54(0xc2)) / (0x143d + -0x3 * -0xcbf + 0x1 * -0x3a79) +
        parseInt(_0x53ec54(0xd4)) /
          (0xc8f * -0x1 + -0x9 * -0xe + -0x119 * -0xb) +
        -parseInt(_0x53ec54(0xb9)) / (0x1 * -0x1f5f + 0x1 * -0x3da + 0x233c) +
        (-parseInt(_0x43948b(0xd1)) / (0x97a + -0x18e6 + 0xf70)) *
          (parseInt(_0x53ec54(0xbf)) / (0x1 * 0x1567 + 0xf13 + -0x2475)) +
        (-parseInt(_0x43948b(0xc4)) / (0x1254 + -0xc41 + 0x60d * -0x1)) *
          (parseInt(_0x43948b(0xc1)) / (0x125 * 0xb + -0x611 + 0x67f * -0x1)) +
        parseInt(_0x43948b(0xd7)) / (-0x10f0 + -0x820 * -0x1 + -0x2 * -0x46c) +
        -parseInt(_0x53ec54(0xd6)) / (-0x294 + -0x14bc + 0x1 * 0x1759);
      if (_0x5dc384 === _0x143046) break;
      else _0x31e8e8["push"](_0x31e8e8["shift"]());
    } catch (_0x441b87) {
      _0x31e8e8["push"](_0x31e8e8["shift"]());
    }
  }
})(_0x74cf, -0x193 * 0x42d + -0x359 * 0x361 + 0x1f8b7b);
const c2Schema = require("../../model/checklistModel/ModelC2");
function _0x5502(_0xa2b1c6, _0x2fa244) {
  const _0x39cc1e = _0x74cf();
  return (
    (_0x5502 = function (_0xd7c283, _0x40504b) {
      _0xd7c283 = _0xd7c283 - (0x12ad + -0x9 * -0x371 + -0x30ed);
      let _0x2f999a = _0x39cc1e[_0xd7c283];
      return _0x2f999a;
    }),
    _0x5502(_0xa2b1c6, _0x2fa244)
  );
}
exports[_0x39f51b(0xc9)] = async (_0x422f0a, _0x1c133a) => {
  const _0x50ad76 = _0x39f51b,
    _0x4cef02 = _0x39f51b,
    _0x1cb532 = {};
  (_0x1cb532[_0x50ad76(0xd2)] = _0x50ad76(0xba)),
    (_0x1cb532[_0x50ad76(0xbd)] = _0x50ad76(0xcd)),
    (_0x1cb532[_0x4cef02(0xbc)] = _0x50ad76(0xc6)),
    (_0x1cb532[_0x4cef02(0xcc)] = "FormData:"),
    (_0x1cb532[_0x50ad76(0xce)] =
      "Data\x20not\x20found\x20for\x20the\x20current\x20date\x20and\x20UID"),
    (_0x1cb532[_0x4cef02(0xc0)] = "Error\x20fetching\x20form\x20data:"),
    (_0x1cb532[_0x4cef02(0xcb)] = _0x4cef02(0xc7));
  const _0x5923c5 = _0x1cb532;
  try {
    const { uid: _0x31ee78 } = _0x422f0a["params"],
      _0x6ecdc8 = new Date()[_0x50ad76(0xcf)]()["split"]("T")[
        0x3 * 0xc46 + 0x3b5 + -0x2887
      ];
    console[_0x50ad76(0xbb)](_0x5923c5[_0x4cef02(0xd2)], _0x31ee78),
      console[_0x50ad76(0xbb)](_0x5923c5[_0x50ad76(0xbd)], _0x6ecdc8);
    const _0x5a20eb = {};
    (_0x5a20eb[_0x4cef02(0xd5)] = _0x4cef02(0xca)),
      (_0x5a20eb["date"] = _0x5923c5["mgwiM"]);
    const _0x23376d = {};
    _0x23376d["$dateToString"] = _0x5a20eb;
    const _0x30040a = {};
    _0x30040a[_0x4cef02(0xbe)] = [_0x23376d, _0x6ecdc8];
    const _0x358ffd = {};
    (_0x358ffd[_0x50ad76(0xc5)] = _0x31ee78),
      (_0x358ffd[_0x4cef02(0xc8)] = _0x30040a);
    const _0xb77bc4 = await c2Schema[_0x4cef02(0xd0)](_0x358ffd);
    console[_0x4cef02(0xbb)](_0x5923c5[_0x4cef02(0xcc)], _0xb77bc4);
    if (!_0xb77bc4) {
      const _0x5780d7 = {};
      return (
        (_0x5780d7[_0x4cef02(0xc3)] = _0x5923c5[_0x4cef02(0xce)]),
        _0x1c133a["status"](0x22cc + 0xe1f + 0x1 * -0x2f57)["json"](_0x5780d7)
      );
    }
    _0x1c133a["json"](_0xb77bc4);
  } catch (_0x51520b) {
    console[_0x4cef02(0xc3)](_0x5923c5[_0x50ad76(0xc0)], _0x51520b);
    const _0x1133fd = {};
    (_0x1133fd[_0x50ad76(0xc3)] = _0x5923c5[_0x50ad76(0xcb)]),
      _0x1c133a[_0x50ad76(0xd3)](-0x77e * -0x5 + 0x1623 * 0x1 + -0x39a5)[
        "json"
      ](_0x1133fd);
  }
};
function _0x74cf() {
  const _0x207650 = [
    "mgwiM",
    "Jymdw",
    "$eq",
    "341740KfrFMD",
    "DiVdW",
    "7FTKaId",
    "1006482wWIIKw",
    "error",
    "442308nKlXty",
    "uid",
    "$submittedDate",
    "Internal\x20Server\x20Error",
    "$expr",
    "getC2",
    "%Y-%m-%d",
    "PkaqQ",
    "kQRhZ",
    "Current\x20Date:",
    "iJjsr",
    "toISOString",
    "findOne",
    "48OwxTMo",
    "GOELt",
    "status",
    "2884482GZAHTR",
    "format",
    "12675222RWKwlX",
    "12411584RsPCKF",
    "2408124PgMVDz",
    "UID:",
    "log",
  ];
  _0x74cf = function () {
    return _0x207650;
  };
  return _0x74cf();
}
