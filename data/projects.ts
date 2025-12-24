export interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
}

export const projects: Project[] = [
    {
        title: "APTOS ROOM-Decentralized bounty platform",
        description: "APTOS ROOM is more than just a platform—it's a thriving ecosystem where Web3 builders, developers, designers, and creators converge to contribute their talents to meaningful projects while earning rewards in a trustless environment.",
        tech: ["Aptos Move", "TypeScript", "Wallet Adapter"],
        image: "/assets/aptos-room.png",
        link: "https://aptosroom.app"
    },
    {
        title: "DAG-DEV-Developers framework for blockdag",
        description: "A powerful development tool for BlockDAG/blockchain developers. Run local nodes, compile and deploy smart contracts, and streamline DApp development.",
        tech: ["typescript", "Solidity", "Next.js"],
        image: "/assets/dagdev.png",
        link: "https://github.com/bugyman66"
    },
    {
        title: "gaXport-on/off Ramping Protocol",
        description: "gaXport is a decentralized on/off ramping protocol and The easiest way to buy blockchain gas fees. Instantly top up your wallet for any supported network, with transparent pricing and fast delivery.",
        tech: ["vue.js", "javascript", "node.js"],
        image: "/assets/gaxport.png",
        link: "https://gaxport.virtualconnekt.com.ng/"
    },
    {
        title: "Merkpoll- Decentralized Voting Protocol ",
        description: "MerkPoll leverages Merkle Trees and blockchain technology to ensure your vote remains private while maintaining complete transparency and verifiability.",
        tech: ["aptos-move", "typescript", "vue.js", "wallet-adapter"],
        image: "/assets/merkpoll.png",
        link: "https://merk-poll.vercel.app/"
    },
    {
        title: "Sui-flow Payment Gateway on Web3 ",
        description: "Accept cryptocurrency payments instantly with SuiFlow. Lightning-fast transactions, developer-friendly APIs, and seamless integration for the next generation of commerce.",
        tech: ["Sui-move", "typescript", "react", "sui-wallet-adapter"],
        image: "/assets/suiflow.png",
        link: "https://suiflow.virtualconnekt.com.ng/"
    },
    {
        title: " Virtualconnekt- VTU platform ",
        description: "VIRTUAL CONNEKT helps you make payments for services you enjoy right from the comfort of your home or office. The experience of total convenience, fast service delivery and easy payment is just at your fingertips.",
        tech: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
        image: "/assets/vtu.png",
        link: "https://vtu.virtualconnekt.com.ng/"
    },
    {
        title: " Aptick- Fair Billing on Chain",
        description: "Aptick revolutionizes digital service billing by leveraging the power of the Aptos blockchain.",
        tech: ["Aptos move", "typescript", "react.js", "javascript", "node.js", "npm-package", "wallet-adapter"],
        image: "/assets/aptick.png",
        link: "https://aptick.virtualconnekt.com.ng/"
    },
    {
        title: " Willguard- Decentralized Digital Will Registry",
        description: "A blockchain-based digital will management system that ensures your legacy is secured and automatically transferred to beneficiaries through smart contracts.",
        tech: ["Aptos move", "typescript", "react.js", "javascript", "node.js", "npm-package", "wallet-adapter"],
        image: "/assets/willguard.png",
        link: "https://will-guard.vercel.app"
    }
];
