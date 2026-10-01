/**
 * Central Portfolio Data for Mariia Troian (@rebel_in_cork)
 * 
 * Edit this file to update photos, measurements, contacts, or bio.
 * All UI components automatically sync with this data source.
 */

export const portfolioData = {
  personal: {
    name: "MARIIA TROIAN",
    brand: "Rebel in Cork",
    handle: "@rebel_in_cork",
    instagramUrl: "https://instagram.com/rebel_in_cork",
    title: "High-Fashion & Editorial Model",
    location: "Cork, Ireland · Available Worldwide",
    travelBases: ["Cork", "Dublin", "London", "Paris", "Milan"],
    shortBio: "Editorial and high-fashion model characterized by sharp architectural lines, poised elegance, and raw cinematic intensity.",
    bio: "Mariia Troian (Rebel in Cork) is an international fashion and editorial model based in Cork, Ireland. Combining striking features with deep versatility, Mariia moves effortlessly between avant-garde runway silhouettes, moody high-fashion lookbooks, and clean commercial campaigns. Open for international bookings, editorial commissions, and brand collaborations worldwide.",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
    accentQuote: "Elegance with a defiant edge."
  },

  measurements: {
    heightCm: 178,
    heightIn: "5'10\"",
    bustCm: 84,
    bustIn: "33\"",
    waistCm: 60,
    waistIn: "23.5\"",
    hipsCm: 89,
    hipsIn: "35\"",
    dressEu: "34 - 36",
    dressUs: "2 - 4",
    dressUk: "6 - 8",
    shoeEu: "39",
    shoeUs: "8.5",
    shoeUk: "6",
    eyes: "Green",
    hair: "Chestnut Brown",
    skinTone: "Light / Neutral"
  },

  categories: [
    { id: "all", label: "All Works" },
    { id: "editorial", label: "Editorial" },
    { id: "fashion", label: "High Fashion" },
    { id: "beauty", label: "Beauty & Portraits" },
    { id: "commercial", label: "Commercial" },
    { id: "runway", label: "Runway" }
  ],

  shoots: [
    {
      id: "sh-01",
      title: "Silent Noir Architecture",
      category: "fashion",
      categoryLabel: "High Fashion",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
      photographer: "Elena Vance",
      year: "2026",
      publication: "Vogue Scandinavia",
      aspect: "tall"
    },
    {
      id: "sh-02",
      title: "Emerald Mist & Cashmere",
      category: "editorial",
      categoryLabel: "Editorial",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
      photographer: "Marcus Sterling",
      year: "2026",
      publication: "Harper's Bazaar UK",
      aspect: "wide"
    },
    {
      id: "sh-03",
      title: "Chiaroscuro Contours",
      category: "beauty",
      categoryLabel: "Beauty & Portrait",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85",
      photographer: "Camille Laurent",
      year: "2025",
      publication: "L'Officiel Paris",
      aspect: "tall"
    },
    {
      id: "sh-04",
      title: "Monochrome Tailoring",
      category: "fashion",
      categoryLabel: "High Fashion",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
      photographer: "Liam O'Connor",
      year: "2025",
      publication: "Celine Campaign Moodboard",
      aspect: "tall"
    },
    {
      id: "sh-05",
      title: "Autumnal Drape & Linen",
      category: "commercial",
      categoryLabel: "Commercial Lookbook",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85",
      photographer: "Sophie Meyer",
      year: "2026",
      publication: "Dublin Atelier Studio",
      aspect: "wide"
    },
    {
      id: "sh-06",
      title: "Avant-Garde Kinetic Form",
      category: "runway",
      categoryLabel: "Runway",
      image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=85",
      photographer: "David Chen",
      year: "2025",
      publication: "Fashion Week Showcase",
      aspect: "tall"
    },
    {
      id: "sh-07",
      title: "Raw Sunlit Serenity",
      category: "beauty",
      categoryLabel: "Beauty & Portrait",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=85",
      photographer: "Amara Dubois",
      year: "2026",
      publication: "Elle International",
      aspect: "tall"
    },
    {
      id: "sh-08",
      title: "Urban Nocturne Leather",
      category: "fashion",
      categoryLabel: "High Fashion",
      image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85",
      photographer: "Viktor Holm",
      year: "2025",
      publication: "Dazed Magazine Feature",
      aspect: "wide"
    },
    {
      id: "sh-09",
      title: "Velvet Minimalism",
      category: "editorial",
      categoryLabel: "Editorial",
      image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=1200&q=85",
      photographer: "Julian Bell",
      year: "2026",
      publication: "British Vogue Look",
      aspect: "tall"
    },
    {
      id: "sh-10",
      title: "Sculpted Atelier Silk",
      category: "commercial",
      categoryLabel: "Commercial Lookbook",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=85",
      photographer: "Clara Rossi",
      year: "2026",
      publication: "Milan Capsule Collection",
      aspect: "wide"
    },
    {
      id: "sh-11",
      title: "Catwalk Strides & Shadows",
      category: "runway",
      categoryLabel: "Runway",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=85",
      photographer: "Sean MacCarthy",
      year: "2025",
      publication: "London Fashion Collective",
      aspect: "tall"
    },
    {
      id: "sh-12",
      title: "Golden Hour Ethereal",
      category: "editorial",
      categoryLabel: "Editorial",
      image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?auto=format&fit=crop&w=1200&q=85",
      photographer: "Hannah Lindqvist",
      year: "2025",
      publication: "Numéro Tokyo",
      aspect: "tall"
    }
  ],

  compCardImages: [
    {
      role: "Hero Headshot",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
      caption: "Natural Lighting / Clean Beauty"
    },
    {
      role: "Full Length Editorial",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
      caption: "High Fashion Silhouette"
    },
    {
      role: "Profile Angle",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
      caption: "Strong Jawline & Expression"
    },
    {
      role: "Commercial Look",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=85",
      caption: "Contemporary Minimalist"
    }
  ],

  digitals: [
    {
      id: "dig-1",
      title: "Front View",
      subtitle: "Neutral Expression / Natural Light",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: "dig-2",
      title: "Profile Left",
      subtitle: "Hair Tied Back / Bone Structure",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: "dig-3",
      title: "Profile Right",
      subtitle: "Natural Posture / Unretouched",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: "dig-4",
      title: "Full Length",
      subtitle: "Basic Black / Proportions & Posture",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85"
    }
  ],

  press: [
    { name: "VOGUE", label: "VOGUE SCANDINAVIA", quote: "A commanding presence that balances timeless poise with modern rebellion." },
    { name: "HARPER'S BAZAAR", label: "HARPER'S BAZAAR UK", quote: "Striking sculptural lines and unmistakable camera magnetism." },
    { name: "ELLE", label: "ELLE MAGAZINE", quote: "One of the most exciting emerging faces redefining independent editorial style." },
    { name: "L'OFFICIEL", label: "L'OFFICIEL PARIS", quote: "Effortlessly versatile across runway drama and stripped-back commercial beauty." },
    { name: "DUBLIN FASHION WEEK", label: "DFW RUNWAY", quote: "Highlight of the Autumn/Winter ready-to-wear presentations." }
  ],

  contact: {
    email: "booking@rebelincork.com",
    whatsapp: "+353890000000",
    whatsappDisplay: "+353 89 000 0000",
    instagram: "@rebel_in_cork",
    instagramUrl: "https://instagram.com/rebel_in_cork",
    directBookingNote: "Direct inquiries welcomed for select editorial and commercial projects.",
    motherAgency: {
      name: "Direct / Freelance Representation",
      city: "Cork & Dublin",
      inquiries: "direct@rebelincork.com"
    }
  }
};
