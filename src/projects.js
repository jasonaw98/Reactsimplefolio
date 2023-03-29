const projects = [
  {
    title: "Multi-Sig Vault",
    description:
      "Users can create a safe vault where they can add multiple Owners and set a Threshold required to perform any transactions. Transaction will only be executed once total confirmations have reached.",
    liveLink: "",
    sourceLink: "https://github.com/jasonaw98/MultiSig-ContractFactory",
    imageSrc: "Multisig.07a5da7d.png",
  },
  {
    title: "Solana GIF Dapp",
    description:
      "A DAPP build on Solana Blockchain where users able to view and submit their favorite Electric Cars GIF or Images link. Build on Devnet and Sol Devnet is required.",
    liveLink: "https://solana-dapp-lake.vercel.app/",
    sourceLink: "https://github.com/jasonaw98/SolanaDapp",
    imageSrc: "SolDapp.2c07d1ef.png",
  },
  {
    title: "Solana NFT App with Metaplex",
    description:
      "Users can use this Web App to mint their Marvel Avenger Themed NFT! Some Devnet Sol is required to mint successfully.",
    liveLink: "https://solana-nft-two-theta.vercel.app/",
    sourceLink: "https://github.com/jasonaw98/Solana-NFT",
    imageSrc: "SolNFT.cf564b42.png",
  },
  {
    title: "DeFi Exchange",
    description:
      "A DeFi Exchange Dapp where users would able to add tokens into liquidity pools and get LP Tokens in return.",
    liveLink: "https://de-fi-exchange-app.vercel.app/",
    sourceLink: "https://github.com/jasonaw98/DeFi-ExchangeApp",
    imageSrc: "DeFi.a7a9cac6.png",
  },
  {
    title: "Native Coin Mint",
    description:
      "Users can come here to mint the native tokens to be able to contribute and participate in the DeFi app to add their tokens in to the liquidity pools and earn LP Tokens!",
    liveLink: "https://initial-coin-offer.vercel.app/",
    sourceLink: "https://github.com/jasonaw98/Initial-Coin-Offer",
    imageSrc: "ICO.a3c1a64c.png",
  },
  {
    title: "Polygon Name Service",
    description:
      "A web app that let users purchase their very own marvel domain name and it comes with an unique NFT. Feel free to mint one!",
    liveLink: "https://domain-starter-project.jasonaw98.repl.co/",
    sourceLink: "https://github.com/jasonaw98/Domain-name-service-Polygon",
    imageSrc: "MNS.d4ce70b6.png",
  },
  {
    title: "DAO",
    description:
      "This is a fully functional DAO with voting and treasury capabilities. Users can sign up and mint an NFT to become a member and receive Governence Token to vote. Click to check out!",
    liveLink: "https://buildspace-dao-starter-v2.jasonaw98.repl.co/",
    sourceLink: "https://github.com/jasonaw98/MyFirstDAO",
    imageSrc: "firstdao.a72a0b4f.png",
  },
  {
    title: "MemeCoin Crypto",
    description:
      "This is a real Memecoin deployed onto the Rinkeby Testnet where users are able to request and transfer Crypto. It also contains a burn function to control infaltion. Click to check out!",
    liveLink: "https://jasonaw98.github.io/memecoin.github.io/",
    sourceLink: "https://github.com/jasonaw98/memecoin.github.io/tree/main",
    imageSrc: "/memecoin.f78afd84.png",
  },
  {
    title: "Python Web Automation",
    description:
      "This project is build on Python and Selenium to automate filling out forms and surveys. Click to check out!",
    liveLink: "https://github.com/jasonaw98/WebAutomation",
    sourceLink: "https://github.com/jasonaw98/WebAutomation",
    imageSrc: "/project.f500882b.jpg",
  },
];

const projectList = document.getElementById("project-list");

// Loop through each project object
projects.forEach(function (project) {
  const projectHTML = `
<div class="col-lg-4 col-sm-12">
  <div class="project-wrapper__text load-hidden">
    <h3 class="project-wrapper__text-title">${project.title}</h3>
    <div>
      <p class="mb-4">${project.description}</p>
    </div>
    <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero" href="${project.liveLink}">
      See Live
    </a>
    <a rel="noreferrer" target="_blank" class="cta-btn text-color-main" href="${project.sourceLink}">
      Source Code
    </a>
  </div>
</div>
<div class="col-lg-8 col-sm-12">
  <div class="project-wrapper__image load-hidden">
    <a rel="noreferrer" href="${project.liveLink}" target="_blank">
      <div data-tilt data-tilt-max="4" data-tilt-glare="true" data-tilt-max-glare="0.5" class="thumbnail rounded js-tilt">
        <img alt="Project Image" class="img-fluid" src="${project.imageSrc}">
      </div>
    </a>
  </div>
</div>
`;
  var row = document.createElement("div");
  row.className = "row";
  row.innerHTML += projectHTML;
  projectList.appendChild(row);
});