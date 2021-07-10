function validIpAddresses(string) {
  const ipAddressFound = [];
  for (let i = 0; i < Math.min(string.length, 4); i++) {
    const currentIpAddressParts = ["", "", "", ""];
    currentIpAddressParts[0] = string.slice(0, i);
    if (!isValidPart(currentIpAddressParts[0])) continue;

    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      currentIpAddressParts[1] = string.slice(i, j);
      if (!isValidPart(currentIpAddressParts[1])) continue;

      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        currentIpAddressParts[2] = string.slice(j, k);
        currentIpAddressParts[3] = string.slice(k);

        if (
          isValidPart(currentIpAddressParts[2]) &&
          isValidPart(currentIpAddressParts[3])
        ) {
          ipAddressFound.push(currentIpAddressParts.join("."));
        }
      }
    }
  }
  return ipAddressFound;
}

function isValidPart(string) {
  const stringAsInt = parseInt(string);
  if (stringAsInt > 255) return false;
  return string.length === stringAsInt.toString().length;
}

console.log(validIpAddresses("3700100"));
console.log(validIpAddresses("1921680"));
