const filters = {
  formatPrice(value) {
    if (typeof value !== "number") {
      return value;
    }
    var formatter = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    });
    return formatter.format(value);
  },
};

export default filters;
