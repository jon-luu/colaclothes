// Repeated content for the other pages (steps, brands, values, tips, cart items...)

export const homeSteps = [
    { id: 1, number: "01", icon: "images/icons/icon-list.png", title: "List Your Gear", desc: "Snap photos, write a quick description, and set your asking price in minutes" },
    { id: 2, number: "02", icon: "images/icons/icon-pin.png", title: "Meet on the Trail", desc: "Choose a local handoff spot or ship nationwide - whatever works for your adventure schedule" },
    { id: 3, number: "03", icon: "images/icons/icon-money.png", title: "Fund the Next Trip", desc: "Get paid fast and put that money straight toward your next big adventure" },
    { id: 4, number: "04", icon: "images/icons/icon-leaf.png", title: "Keep it Green", desc: "Extend the life of quality gear and reduce waste - the outdoors will thank you" },
];

export const brands = ["ARC'TERYX", "OSPREY", "SALOMON", "PATAGONIA", "CARHARTT", "THE NORTH FACE"];

// icon is the name of an svg drawn in the SellStep component
export const sellSteps = [
    { id: 1, number: "01", icon: "camera", title: "Take Photos", desc: "Snap clear, natural-light shots from the front, back, and detail tags so buyers know exactly what they're getting." },
    { id: 2, number: "02", icon: "tag", title: "Set Your Price", desc: "Pick a fair price based on condition, demand, and original retail value. We'll suggest a competitive range to help it sell fast." },
    { id: 3, number: "03", icon: "truck", title: "Ship or Meet", desc: "Download a prepaid shipping label for nationwide buyers, or arrange a safe local meetup at a trailhead, brewery, or outdoor hub." },
    { id: 4, number: "04", icon: "cash", title: "Get Paid", desc: "Enjoy secure payouts immediately after buyer verification, so you can put the cash toward a new tent, crampons, or next season's shell." },
];

export const sellTips = [
    { id: 1, number: "01", text: "Clean, dry gear photographed outdoors attracts higher bids." },
    { id: 2, number: "02", text: "Local meetups are best arranged at public hub spots near Main St." },
    { id: 3, number: "03", text: "We inspect everything, so keep original stuff sacks and tags if you have them." },
];

// icon is the name of an svg drawn in the ValueCard component
export const values = [
    { id: 1, icon: "cycle", title: "Circular Gear", desc: "We believe the best gear should be used until it is truly worn out, not just replaced. By keeping high-quality equipment in circulation, we reduce waste, lower the cost of entry for new adventurers, and preserve the stories that make every piece special." },
    { id: 2, icon: "pin", title: "Local Community", desc: "We are built for the Columbia outdoor scene. Our store connects buyers and sellers who know the same trails, the same weather, and the same gear needs. That makes every transaction feel more personal, more trustworthy, and more rooted in the community." },
    { id: 3, icon: "shield", title: "Trail-Tested Quality", desc: "We look for gear that has been cared for, cleaned, and used responsibly. Every listing is reviewed for condition, authenticity, and the kind of detail that matters when you are planning a long hike, a cold camp, or a rainy summit push." },
    { id: 4, icon: "compass", title: "Accessible Adventure", desc: "Secondhand gear makes the outdoors more approachable. We help new adventurers build a reliable kit without the full-retail price, and we help experienced explorers upgrade, downsize, or refresh their setup without breaking the bank." },
];

export const cartItems = [
    { id: 1, name: "Black Diamond Forged Denim Jacket", brand: "Black Diamond", size: "SIZE M", qty: 1, price: "$95.00", img: "images/checkout/puffer-jacket.jpg" },
    { id: 2, name: "Salomon Quest 4D 3 GTX Boots", brand: "Salomon", size: "SIZE 9", qty: 1, price: "$78.00", img: "images/checkout/trail-shoes.jpg" },
];

export const shopFilters = [
    {
        id: 1,
        title: "Categories",
        type: "links",
        options: ["All Items", "Jackets & Layers", "Base Layers & Shirts", "Pants & Shorts", "Tents & Shelters", "Footwear", "Accessories"],
    },
    {
        id: 2,
        title: "Condition",
        type: "checkbox",
        options: ["Like New", "Excellent", "Very Good", "Good", "Worn In"],
    },
    {
        id: 3,
        title: "Price Range",
        type: "checkbox",
        options: ["Under $25", "$25 - $50", "$50 - $100", "Over $100"],
    },
];

export const apparelCategories = ["All Apparel", "Jackets & Outerwear", "Base Layers & Knits", "Pants & Shorts", "Footwear", "Accessories"];

export const gearCategories = ["All Gear", "Tents & Shelters", "Sleeping Bags & Pads", "Cookware & Camp Kitchen", "Backpacks & Bags", "Climbing & Water Gear"];

export const footerColumns = [
    {
        id: 1,
        title: "Shop",
        links: [
            { label: "All Gear", to: "/shop" },
            { label: "Apparel", to: "/apparel" },
            { label: "Gear & Equipment", to: "/gear" },
            { label: "Accessories", to: "/shop" },
        ],
    },
    {
        id: 2,
        title: "Sell",
        links: [
            { label: "Start Selling", to: "/sell" },
            { label: "Seller Guidelines", to: "/sell" },
            { label: "Payout Methods", to: "/sell" },
            { label: "Shipping Labels", to: "/sell" },
        ],
    },
    {
        id: 3,
        title: "Support",
        links: [
            { label: "Help Center", to: "/contact" },
            { label: "Safe Buying", to: "/about" },
            { label: "Contact Us", to: "/contact" },
            { label: "Refund Policy", to: "/contact" },
        ],
    },
];
