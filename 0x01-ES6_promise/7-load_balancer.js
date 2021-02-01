/* eslint-disable linebreak-style */
export default function loadBalancer(chinaDownload, USDownload) {
  Promise.race([chinaDownload, USDownload]).then((value) => {
    console.log(value);
  });
}
