
var random = {
  seed: null,
  setSeed: function (s) {
    this.seed = (s ^ BigInt(0x5DEECE66D)) & ((BigInt(1) << BigInt(48)) - BigInt(1));
  },
  next: function(bits) {
    this.seed = ((this.seed * BigInt(0x5DEECE66D)) + BigInt(0xB)) & ((BigInt(1) << BigInt(48)) - BigInt(1))
    return this.seed >> (BigInt(48) - BigInt(bits))
  },
  nextInt: function () {
    return BigInt.asIntN(32, this.next(32));
  },
  nextDouble: function () {
    var a = (this.next(26) << BigInt(27)) + this.next(BigInt(27));
    var b = BigInt(1) << BigInt(53);
    var e = BigInt(10 ** 19);
    var c = (a * e) / (b);
    return (Number(c)) / 10 ** 19;
  }
}