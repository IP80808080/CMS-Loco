function _0x36da(_0x3e6bc1, _0x5dbdb6) {
  const _0x11921e = _0x4597();
  return (
    (_0x36da = function (_0x5f50d4, _0x2c2413) {
      _0x5f50d4 = _0x5f50d4 - (0x2 * 0xb43 + -0xd2d * 0x1 + 0x1a3 * -0x5);
      let _0x49ab66 = _0x11921e[_0x5f50d4];
      return _0x49ab66;
    }),
    _0x36da(_0x3e6bc1, _0x5dbdb6)
  );
}
const _0x35b580 = _0x36da;
(function (_0x4e4062, _0x296c01) {
  const _0xd6e6b2 = _0x36da,
    _0x419052 = _0x36da,
    _0x18f948 = _0x4e4062();
  while (!![]) {
    try {
      const _0x35e42a =
        parseInt(_0xd6e6b2(0x13e)) / (0x150b + -0xd47 + -0x7c3 * 0x1) +
        (parseInt(_0xd6e6b2(0x12e)) /
          (-0x332 * 0x2 + 0xd13 * -0x2 + -0x1 * -0x208c)) *
          (-parseInt(_0x419052(0x133)) / (0xcf1 * 0x2 + -0x2575 + 0xb96)) +
        -parseInt(_0xd6e6b2(0x13c)) / (-0x2441 + 0x198d + 0xab8) +
        -parseInt(_0xd6e6b2(0x140)) / (-0x2638 + -0x1d68 + -0x43a5 * -0x1) +
        -parseInt(_0xd6e6b2(0x139)) / (0xd5b + -0xcc8 + -0x8d) +
        -parseInt(_0x419052(0x141)) / (-0x15a2 + -0x1 * -0x863 + 0xd46 * 0x1) +
        parseInt(_0x419052(0x12f)) / (0x13 * -0x1be + 0x7ef + -0x1933 * -0x1);
      if (_0x35e42a === _0x296c01) break;
      else _0x18f948["push"](_0x18f948["shift"]());
    } catch (_0x3f2835) {
      _0x18f948["push"](_0x18f948["shift"]());
    }
  }
})(_0x4597, -0x8 * 0x134f6 + -0x4c946 + 0x13f2cd);
const userSchema = require(_0x35b580(0x136));
exports["deleteUser"] = async (_0x57c516, _0x5b9d2a) => {
  const _0x34ec36 = _0x35b580,
    _0x48cbbd = _0x35b580,
    _0x11dafa = {};
  (_0x11dafa[_0x34ec36(0x132)] = "User\x20not\x20found"),
    (_0x11dafa[_0x48cbbd(0x138)] = function (_0x49c984, _0x162356) {
      return _0x49c984 === _0x162356;
    }),
    (_0x11dafa[_0x48cbbd(0x13a)] = _0x34ec36(0x143)),
    (_0x11dafa[_0x34ec36(0x142)] = "Cannot\x20delete\x20an\x20admin\x20user"),
    (_0x11dafa[_0x48cbbd(0x12c)] = "Internal\x20server\x20error");
  const _0xa8e74f = _0x11dafa,
    { userId: _0x47728a } = _0x57c516[_0x48cbbd(0x137)];
  try {
    const _0xeb0207 = {};
    _0xeb0207[_0x34ec36(0x134)] = _0x47728a;
    const _0x3787b9 = await userSchema[_0x48cbbd(0x12d)](_0xeb0207);
    if (!_0x3787b9) {
      const _0x3f39f3 = {};
      return (
        (_0x3f39f3[_0x34ec36(0x12a)] = _0xa8e74f[_0x48cbbd(0x132)]),
        _0x5b9d2a[_0x34ec36(0x13f)](0xdaf * 0x1 + -0x16fd + 0xae2)[
          _0x34ec36(0x130)
        ](_0x3f39f3)
      );
    }
    if (
      _0xa8e74f[_0x48cbbd(0x138)](
        _0x3787b9[_0x48cbbd(0x13d)],
        _0xa8e74f[_0x48cbbd(0x13a)]
      )
    ) {
      const _0x17b2b7 = {};
      return (
        (_0x17b2b7[_0x34ec36(0x12a)] = _0xa8e74f[_0x34ec36(0x142)]),
        _0x5b9d2a[_0x48cbbd(0x13f)](0x15e8 + -0xb * 0x2dd + 0xb2a)[
          _0x48cbbd(0x130)
        ](_0x17b2b7)
      );
    }
    const _0x11e401 = {};
    _0x11e401[_0x34ec36(0x134)] = _0x47728a;
    const _0x354031 = await userSchema[_0x48cbbd(0x131)](_0x11e401);
    if (_0x354031) {
      const _0x35115d = {};
      (_0x35115d["message"] = _0x48cbbd(0x13b)),
        (_0x35115d[_0x48cbbd(0x144)] = _0x354031),
        _0x5b9d2a[_0x34ec36(0x13f)](0x15b9 + 0x1 * 0x815 + -0xa * 0x2e7)[
          _0x34ec36(0x130)
        ](_0x35115d);
    } else {
      const _0xa07460 = {};
      (_0xa07460["message"] = _0xa8e74f[_0x34ec36(0x132)]),
        _0x5b9d2a[_0x48cbbd(0x13f)](0x90e + 0x7 * 0x4a3 + -0x1 * 0x27ef)[
          "json"
        ](_0xa07460);
    }
  } catch (_0x2bee10) {
    console[_0x48cbbd(0x135)](_0x48cbbd(0x12b), _0x2bee10);
    const _0xb55f38 = {};
    (_0xb55f38[_0x34ec36(0x12a)] = _0xa8e74f[_0x34ec36(0x12c)]),
      _0x5b9d2a[_0x48cbbd(0x13f)](-0xd15 * 0x1 + -0x1 * -0x1253 + -0x34a)[
        "json"
      ](_0xb55f38);
  }
};
function _0x4597() {
  const _0x127125 = [
    "../model/userModel",
    "params",
    "EtVcj",
    "1171824VkVaow",
    "jllxO",
    "User\x20deleted\x20successfully",
    "2455288iBSnvR",
    "role",
    "308894hPJfPX",
    "status",
    "1300365PuzroI",
    "340662DSiQfx",
    "jNbox",
    "Admin",
    "user",
    "message",
    "Error\x20deleting\x20user:",
    "SKhIW",
    "findOne",
    "46CTKnrK",
    "15054472sVTfIa",
    "json",
    "findOneAndDelete",
    "zlsgM",
    "92859RLUXBu",
    "uid",
    "error",
  ];
  _0x4597 = function () {
    return _0x127125;
  };
  return _0x4597();
}
