# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
<div align="center">
<h1>Psyduck</h1>

<img src="https://raw.githubusercontent.com/hollow-leaf/psyduck/3784f3adc93620e32ab2c2a275b1bc2cfac30834/apps/extension_app/img/psyduck_logo.svg" width="50%" height="50%"></img>

[![Frontend deploy](https://github.com/hollow-leaf/psyduck/actions/workflows/ghpage.yml/badge.svg?branch=main)](https://github.com/hollow-leaf/psyduck/actions/workflows/ghpage.yml)

</div>

### Demo Page

- WebPage: []()
- Video: []()
- Psyduck Contract(Testnet): []()

### Abstract

This project presents a Chrome extension enabling viewers to donate ERC-1155 tokens, a form of non-fungible tokens (NFTs), to live streamers. Designed to integrate seamlessly with streaming platforms, the extension offers a simple, secure interface for transactions. By incorporating opBNB and Avalanche blockchain technology, it ensures decentralized and transparent donations. This innovation not only provides an alternative revenue stream for content creators but also enhances audience engagement. The development, user interface design, and implications for the streaming industry are discussed briefly, highlighting the potential of blockchain in digital content creation and viewer interaction.

### Introduction

This project envisions revolutionizing viewer-streamer interactions in live streaming platforms through a Chrome extension that enables donations using ERC-1155 tokens. By leveraging blockchain technology, it aims to enhance viewer engagement and provide content creators with a novel and transparent revenue stream.Blockchain technology provide:

- Increase Transparency: Blockchain's transparency allows audiences to clearly see how their donations, purchases, or participation are processed and utilized, enhancing trust and willingness to engage.

- Create New Interactive Methods: Utilizing blockchain, unique digital assets (e.g., NFTs) can be created, serving as rewards for audience participation. These assets may include digital art, limited-edition content, or exclusive access to specific events.

- Provide Unique Rewards and Incentives: Blockchain enables the design of unique reward mechanisms for audience participation, such as cryptocurrency rewards, ranking systems, or NFTs proving their engagement.

- Ensure Transaction Security and Decentralization: Blockchain's security and decentralization ensure the safety of user data and transactions, increasing audience desire to use blockchain-based platforms.

- Use of Smart Contracts: Smart contracts automate many interaction processes, such as donation execution, voting, or other forms of audience participation. This automation not only improves efficiency but also enhances the attractiveness of participation.

- Enhance Community and Belonging: By creating a shared, decentralized community experience, blockchain helps audiences feel integral to the community, boosting their engagement and loyalty.


Our solution has the following features and advantages:

- Facilitates meaningful viewer-streamer connections via ERC-1155 token donations
- Offers creators new monetization methods
- Ensures transparency and security with blockchain technology
- Easy integration with a simple interface for users

### Method

- Use [opBNB](https://opbnb.bnbchain.org/en) and [Avalanche](https://www.avax.network/) to store token donation metadata
- Use [Chrome Extension](https://developer.chrome.com/docs/extensions) to build web connect plugin that interacts with opBNB blockchain
- Use [Solidity](https://soliditylang.org/) to create smart contract
- Use [React.js](https://react.dev/) to build chrome extension frontend

### Technical Architecture
Psyduck Architecture
![Psyduck Architecture](https://github.com/hollow-leaf/psyduck/blob/feat/readme/apps/extension_app/img/Architecture.jpg?raw=true)

Psyduck workflow
```mermaid
	sequenceDiagram
    actor Streamer
		actor User
		participant Chrome Extension
		participant Smart Contract
		
		Streamer ->> Chrome Extension: Register the streamer address
		User ->> Chrome Extension: Register the user address
		Chrome Extension ->> Smart Contract: Write the streamer or user address
		Smart Contract ->> Smart Contract: Binding the address
		Chrome Extension -->> Streamer: response binding successfully
		Chrome Extension -->> User: response binding successfully
		User ->> Chrome Extension: Purchase our platform coins
		Chrome Extension ->> Smart Contract: request number of platform coin
		Smart Contract -->> Chrome Extension: response platform coin
		User ->> Chrome Extension: Purchase the NFTs of donation
		Chrome Extension ->> Smart Contract: request number of the NFTs
		Smart Contract -->> Chrome Extension: response the NFTs
		User ->> Streamer: Donate the NFTs
		Streamer -->> User: Thank you so much!
```

### Building & Installation

> Psyduck is a monorepo managed using turbo. You can find the source code for each package in the apps/web3 and apps/extension-app directory.

- apps/extension-app is the chrome extension for Psyduck.It is built using [Chrome Extension](https://developer.chrome.com/docs/extensions).
- app/nft is the smart contract for Psyduck.It is built using [Solidity](https://soliditylang.org/).

## Setting project
```
git clone https://github.com/hollow-leaf/psyduck/tree/main
```
```
cd apps/extension-app
```
```
nvm use 21
```
```
npm install && npm run build
```
![](https://github.com/hollow-leaf/psyduck/blob/feat/readme/apps/extension_app/img/import_screenshot.png?raw=true)

### Contributors

- Extension Frontend + Backend: [SoloLin](https://github.com/LinXJ1204)
- CI/CD + Documentation: [JakeKuo](https://github.com/crypto0627)
- Smart Contract: [AlbertCheng](https://github.com/cheng-chun-yuan)
- README.MD + PowerPoint: [Sophia](https://github.com/Showyuan)
- Leader: [JohnnyLai](https://github.com/johnny30678)