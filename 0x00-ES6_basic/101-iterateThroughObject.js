/* eslint-disable linebreak-style */

export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.toString().split(",").join(" | ");
}
