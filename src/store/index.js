import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    criptos:[
      {
        name: "Axie Infinity ($AXS)",
        category: "NFTs-games-Metaverse",
        purpose: "Axie Infinity is a Pokémon-inspired digital pet universe built on the Ethereum blockchain where anyone can earn token rewards through skilled gameplay and contributions to the ecosystem.",
        image: require(`../assets/axielogo1.png`),
        link: "https://axieinfinity.com/#",
        cur: "AXS|USD 106,7",
      },
      {
        name: "The Sandbox ($SAND)",
        category: "NFTs-games-Metaverse",
        purpose: "The Sandbox is a virtual world built on the Ethereum blockchain, where players can build, own, and monetize their gaming experiences.",
        image: require(`../assets/sandlogo.png`),
        link: "https://www.sandbox.game/en/",
      },
      {
        name: "Enjin Coin ($ENJ)",
        category: "NFTs-games-Metaverse",
        purpose: "Enjin Coin (ENJ) is an Ethereum-based cryptocurrency that is used to directly back the value of next-generation blockchain assets. It aims to become 'the gold standard for digital assets'.",
        image: require(`../assets/enjinlogo.png`),
        link: "https://enjinx.io/",
      },
      {
        name: "Bluzelle ($BLZ)",
        category: "Data",
        purpose: "Bluzelle aims to build a decentralized, scalable database service that provides data storage service for decentralized applications.",
        image: require(`../assets/blzlogo.png`),
        link: "https://bluzelle.com/",
      },
      {
        name: "Cosmos ($ATOM)",
        category: "Data",
        purpose: "Cosmos is a network connecting many independent distributed ledgers (e.g., Ethereum, Bitcoin) to achieve interoperability across blockchains. Its goal is to 'create an Internet of Blockchains', i.e., 'a network of blockchains where each participant is able to communicate with each other in a decentralized way'.",
        image: require(`../assets/cosmoslogo.jpg`),
        link: "https://blog.cosmos.network/",
      },
      {
        name: "Arweave ($AR)",
        category: "Data",
        purpose: "Arweave is a storage network built on a decentralized network structure called “blockweave technology”. Arweave is not strictly a blockchain, but a graph structure that links each block to two prior blocks. ",
        image: require(`../assets/arlogo.png`),
        link: "https://www.arweave.org/",
      },
      {
        name: "Ethereum ($ETH)",
        category: "Smart",
        purpose: "Ethereum is a decentralized network (often referred to as “the world computer”), created by Vitalik Buterin in 2013. Its network consists of an open-source, globally decentralized computing infrastructure, which executes programs called smart contracts. This network is fueled by a cryptocurrency named ether (ETH).",
        image: require(`../assets/ethicon.png`),
        link: "https://ethereum.org/en/",
      },
      {
        name: "Fantom ($FTM)",
        category: "Smart",
        purpose: "Fantom is building a programmable platform on a directed acyclic-graph based distributed ledger.",
        image: require(`../assets/ftmlogo2.png`),
        link: "https://fantom.foundation/",
      },
      {
        name: "Solana ($SOL)",
        category: "Smart",
        purpose: "Solana is a high-speed single-layer blockchain, currently supporting peak capacity of 65k transactions per second and 400ms block times using a network timestamp system called Proof-of-History ('PoH').",
        image: require(`../assets/sollogo2.jpg`),
        link: "https://solana.com/",
      },
      {
        name: "SUSHI ($SUSHI)",
        category: "Finance",
        purpose: "SushiSwap is a Decentralized Finance (DeFi) liquidity provision platform that aims to be an evolution of Uniswap.",
        image: require(`../assets/sushilogo.png`),
        link: "https://sushiswap.org/",
      },
      {
        name: "Curve ($CRV)",
        category: "Finance",
        purpose: "Curve is an exchange liquidity pool on Ethereum that is designed for efficient stablecoin trading.",
        image: require(`../assets/crvlogo.png`),
        link: "https://www.curve.fi/",
      },
      {
        name: "Dolar ($USD)",
        category: "",
        purpose: "Valor:" ,
        image: "",
        link: "",
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
