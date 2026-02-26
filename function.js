function processValue(value) {
    if (typeof value === 'undefined') { // Noncompliant
      return 'No value provided';
    }
    return value;
  }