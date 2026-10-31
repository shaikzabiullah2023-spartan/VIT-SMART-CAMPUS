// VERDANT Green Journal - Editorial Articles Catalog

export const JOURNAL_CATEGORIES = [
  "All",
  "Sustainable Fashion",
  "Zero-Waste Living",
  "Eco-Friendly Tech",
  "Conscious Consumerism",
  "Climate Action"
];

export const ARTICLES = [
  {
    id: "journal-art-1",
    slug: "anatomy-of-a-low-waste-wardrobe",
    title: "The Anatomy of a Low-Waste Wardrobe: Moving Beyond Fast Fashion",
    subtitle: "Why the most sustainable garment is already hanging in your closet, and how mindful curation changes everything.",
    category: "Sustainable Fashion",
    author: {
      name: "Dr. Ananya Roy",
      role: "Textile Ecologist & Fashion Circularity Fellow",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    date: "2026-03-24",
    readTime: "7 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Over 100 billion garments are produced annually, with 85% destined for landfill within twelve months. We dissect the true lifecycle of synthetic fibers versus natural bast fibers.",
    tags: ["Circular Fashion", "Ethical Textiles", "Slow Living"],
    content: [
      {
        type: "paragraph",
        text: "Every second, the equivalent of one garbage truck of textiles is burned or buried in a landfill. The modern fashion paradigm—built upon rapid hyper-consumption and polyester synthetics derived from petroleum—has created an environmental debt that planet earth can no longer absorb silently."
      },
      {
        type: "heading",
        text: "The Polyester Illusion"
      },
      {
        type: "paragraph",
        text: "Over 60% of clothing worldwide is manufactured from synthetic polymers: polyester, nylon, and acrylic. When washed, each synthetic garment sheds up to 700,000 microscopic plastic fibers directly into domestic wastewater systems, bypassing municipal filtration to enter marine food webs."
      },
      {
        type: "quote",
        text: "A low-waste wardrobe is not about throwing away everything you own to buy beige organic linen. It is about slowing down desire, falling back in love with mending, and choosing heirloom fibers when replacements are truly necessary."
      },
      {
        type: "heading",
        text: "The Power of Bast Fibers: Linen, Hemp & Nettle"
      },
      {
        type: "paragraph",
        text: "Unlike cotton, which requires intensive irrigation and heavy pesticide spraying, bast fibers derived from the inner phloem of flax, hemp, and nettle stalks grow naturally with rainfed moisture. They enrich topsoil rather than depleting it, and at the end of their lifecycle, an unblended linen shirt returns harmlessly to the earth as rich organic matter."
      },
      {
        type: "takeaways",
        title: "Three Actionable Wardrobe Swaps Today",
        items: [
          "Practice the 30-Wears Rule: Before buying any garment, ask yourself honestly if you will wear it at least 30 times.",
          "Switch to cold washing and spot cleaning: 75% of a garment's carbon footprint happens during laundering, not manufacturing.",
          "Embrace visible mending: Japanese Sashiko techniques turn tears into beautiful historical embroidery."
        ]
      },
      {
        type: "paragraph",
        text: "By treating our garments as lifelong companions rather than disposable weekly commodities, we reclaim sovereignty over our aesthetics while protecting our shared global biosphere."
      }
    ]
  },
  {
    id: "journal-art-2",
    slug: "soil-first-revolution-regenerative-agriculture",
    title: "The Soil-First Revolution: Why Regenerative Agriculture Is Our Greatest Climate Hope",
    subtitle: "How microbial diversity, cover crops, and rotational grazing can draw gigatons of atmospheric carbon back underground.",
    category: "Climate Action",
    author: {
      name: "Vikramaditya Sen",
      role: "Agronomist & Agroforestry Consultant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    date: "2026-03-18",
    readTime: "8 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Industrial monocropping has stripped a third of the planet's arable topsoil. Regenerative farming proves that healing the earth's microbial skin also stabilizes our atmosphere.",
    tags: ["Regenerative Soil", "Carbon Sequestration", "Food Systems"],
    content: [
      {
        type: "paragraph",
        text: "Underneath our feet lies a living, breathing universe. In a single teaspoon of healthy, undisturbed soil, there are more microscopic organisms than there are human beings alive on earth today. Yet over seven decades of chemical-heavy industrial tilling have treated topsoil as a dead medium."
      },
      {
        type: "heading",
        text: "Photosynthesis: Earth's Original Carbon Capture Technology"
      },
      {
        type: "paragraph",
        text: "While billion-dollar mechanical carbon capture machines struggle with energy balance, green plants perform the miracle daily for free. Through photosynthesis, plants absorb ambient CO₂ and pump liquid carbon sugars into the fungal mycorrhizal network, locking it deep into the subsoil."
      },
      {
        type: "quote",
        text: "We do not have a carbon crisis; we have a broken carbon cycle. When soil is bare and scorched, carbon escapes into the air. When soil is covered and alive, it becomes the world's most welcoming carbon sink."
      },
      {
        type: "takeaways",
        title: "How Conscious Consumers Can Support Soil Health",
        items: [
          "Vote with your plate by buying from local agro-ecological and permaculture farms.",
          "Compost your organic kitchen scraps: keeping peelings out of landfills halts methane generation and feeds soil microbes.",
          "Plant diverse pollinator flora in balconies and terrace gardens instead of manicured sterile grass."
        ]
      }
    ]
  },
  {
    id: "journal-art-3",
    slug: "hidden-carbon-cost-of-digital-lives",
    title: "The Invisible Cloud: Unmasking the Carbon Cost of Our Digital Lives",
    subtitle: "From cloud storage server farms to 4K streaming, how to practice digital minimalism without giving up connection.",
    category: "Eco-Friendly Tech",
    author: {
      name: "Elena Chen",
      role: "Digital Sustainability Architect",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    },
    date: "2026-03-12",
    readTime: "5 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    excerpt: "The global IT infrastructure now consumes more electricity than the aviation industry. Learn how thoughtful device stewardship and intentional data habits reduce electronic waste.",
    tags: ["Digital Minimalism", "Green Computing", "Clean Tech"],
    content: [
      {
        type: "paragraph",
        text: "The internet is often conceptualized as ethereal—a weightless 'cloud' hovering peacefully above our physical world. But the reality is far more grounded: millions of humming server banks housed in concrete hyper-scale facilities, cooled by tens of millions of liters of treated groundwater, and powered around the clock."
      },
      {
        type: "heading",
        text: "The Real Cost of Planned Obsolescence"
      },
      {
        type: "paragraph",
        text: "The single largest carbon footprint of any personal digital device occurs before you ever unbox it. Over 80% of a smartphone's lifetime emissions come from raw mineral extraction, gold refining, and precision chip fabrication in cleanrooms."
      },
      {
        type: "quote",
        text: "Keeping your current laptop or smartphone running for just two extra years reduces its annual environmental footprint by over 40%."
      },
      {
        type: "takeaways",
        title: "Immediate Digital Hygiene Practices",
        items: [
          "Prune cloud storage: Delete duplicate photos and decade-old emails that idle continuously on active servers.",
          "Use Wi-Fi instead of cellular data: Cellular 5G data transmission consumes up to 4x more electricity than fixed fiber optic Wi-Fi.",
          "Advocate for Right to Repair: Choose modular electronics with replaceable batteries and standardized screws."
        ]
      }
    ]
  },
  {
    id: "journal-art-4",
    slug: "circular-living-in-megacities-urban-guide",
    title: "Circular Living in Megacities: A Practical Guide for Modern Urban Dwellers",
    subtitle: "Navigating high-density apartments, busy work schedules, and localized zero-waste ecosystems without burnout.",
    category: "Zero-Waste Living",
    author: {
      name: "Tanya Sen & Aarav Mehta",
      role: "Urban Ecology Advocates & Co-Founders of ZeroWaste Bombay",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    date: "2026-03-05",
    readTime: "6 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Zero-waste living in a metropolis can feel intimidating. Here is an honest, guilt-free roadmap for setting up realistic refilling and composting systems in high-rise apartments.",
    tags: ["Urban Living", "Zero Waste", "Refill Culture"],
    content: [
      {
        type: "paragraph",
        text: "If you scroll through social media, zero-waste living looks like an aesthetic row of matching glass mason jars sitting inside an impeccably lit country kitchen. But for urbanites living in 600-square-foot apartments in Mumbai, Delhi, or Bangalore, that fantasy quickly collides with reality."
      },
      {
        type: "heading",
        text: "Audit Before You Buy"
      },
      {
        type: "paragraph",
        text: "The biggest beginner mistake is rushing to buy eco-gadgets. Sustainable living is not a shopping list; it is an elimination of friction. Start with a 7-day trash audit to see what fills your bin: is it takeout packaging? Vegetable peels? Plastic shampoo bottles?"
      },
      {
        type: "quote",
        text: "We do not need a handful of people doing zero-waste perfectly. We need millions of people doing it imperfectly, consistently, and joyfully."
      },
      {
        type: "takeaways",
        title: "Three High-Impact Urban Changes",
        items: [
          "Bokashi Composting: An anaerobic fermentation method that fits under any kitchen sink with zero fruit flies or bad smells.",
          "Keep an 'Emergency Kit' in your daily commuter bag: A reusable cloth tote, stainless steel tumbler, and compact spoon.",
          "Find your local neighbourhood dry-waste sorting depot (Kabaadiwala) and sort cardboard and metals cleanly."
        ]
      }
    ]
  },
  {
    id: "journal-art-5",
    slug: "the-plastic-paradox-why-refilling-beats-recycling",
    title: "The Plastic Paradox: Why Recycling Won't Save Us, But Refilling Might",
    subtitle: "Examining the flawed economics of mechanical plastic recycling and the emergent rise of closed-loop refill stations.",
    category: "Conscious Consumerism",
    author: {
      name: "Dr. Ananya Roy",
      role: "Textile Ecologist & Fashion Circularity Fellow",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    date: "2026-02-26",
    readTime: "6 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Less than 9% of all plastic ever manufactured has been recycled. The only genuine path forward is eliminating single-use packaging at the source through standard refill containers.",
    tags: ["Plastic Free", "Circular Economy", "Consumer Ethics"],
    content: [
      {
        type: "paragraph",
        text: "For thirty years, consumer goods conglomerates pushed a comforting narrative: as long as a plastic bottle bears the tiny chasing-arrows triangle on its base, consumer guilt can be absolved. The reality is far grimmer: most plastics are 'downcycled' once into carpets or park benches, and then landfilled forever."
      },
      {
        type: "heading",
        text: "The Refill Revolution"
      },
      {
        type: "paragraph",
        text: "Closed-loop circular packaging—where sturdy aluminum or glass vessels are used hundreds of times and refilled at community bulk stations—slashes carbon emissions by over 82% compared to single-use alternatives."
      },
      {
        type: "takeaways",
        title: "How to Transition to Refill Habits",
        items: [
          "Opt for solid bars for dishwashing, body wash, and hair care.",
          "Buy pantry staples in bulk using cloth produce bags.",
          "Support brands offering take-back deposit return schemes."
        ]
      }
    ]
  },
  {
    id: "journal-art-6",
    slug: "indigenous-wisdom-modern-ecology",
    title: "Indigenous Wisdom & Modern Ecology: What Ancient Farming Can Teach Us",
    subtitle: "Rediscovering millets, rainwater harvesting stepwells, and natural agroforestry in a warming climate.",
    category: "Climate Action",
    author: {
      name: "Vikramaditya Sen",
      role: "Agronomist & Agroforestry Consultant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    date: "2026-02-15",
    readTime: "7 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Before the fossil-fuel era, communities built sustainable food and water systems that weathered centuries of drought. Modern ecological design is finally listening.",
    tags: ["Indigenous Wisdom", "Millets", "Water Conservation"],
    content: [
      {
        type: "paragraph",
        text: "In the arid desert belts of western India, ancient communities constructed 'Baolis'—architectural marvels of stepwells that caught every drop of seasonal monsoon rain and maintained cool, drinkable groundwater tables through the hottest summer months."
      },
      {
        type: "heading",
        text: "The Miraculous Return of Ancient Millets"
      },
      {
        type: "paragraph",
        text: "While flood-irrigated white rice and wheat strip groundwater tables, indigenous millets—such as Ragi, Jowar, and Bajra—thrive in poor soil with just a fraction of the rainfall, while packing quadruple the dietary fiber and micronutrients."
      },
      {
        type: "takeaways",
        title: "Ancient Wisdom for Contemporary Living",
        items: [
          "Reintroduce climate-resilient grains into your weekly meal rotation.",
          "Observe seasonal biorhythms: eat produce aligned with local harvest cycles.",
          "Value long-term stewardship over rapid short-term extraction."
        ]
      }
    ]
  }
];

