export type Item = {
  name: string;
  left: number;
  bottom: number;
  width: number;
  clipPath?: string;
  imageStyle?: React.CSSProperties;
  image: string;
  type?: string[];
};

export const rulerLabel = [
  "1e26 m",
  "1e25 m",
  "1e24 m",
  "1e23 m",
  "1e22 m",
  "1e21 m",
  "1e20 m",
  "1e19 m",
  "1e18 m",
  "1e17 m",
  "1e16 m",
  "1e15 m ",
  "100 G km",
  "10 G km",
  "1 G km (1e12 m)",
  "100 M km",
  "10 M km",
  "1 M km (1e9 m)",
  "100,000 km",
  "10,000 km",
  "1000 km (1e6 m)",
  "100 km",
  "10 km",
  "1 km",
  "100 m",
  "10 m",
  "1 m",
  "10 cm",
  "1 cm",
  "1 mm",
  "100 μm",
  "10 μm",
  "1 μm (1e-6 m)",
  "100 nm",
  "10 nm",
  "1 nm (1e-9 m)",
  "100 pm",
  "10 pm",
  "1 pm (1e-12 m)",
  "100 fm",
  "10 fm",
  "1 fm (1e-15 m)",
];

export const items: Item[][] = [
  [],
  [],
  [],
  [],
  // 1e24 km, Observable universe 8.8e23 km
  [{
    name: "Observable universe",
    left: 0,
    bottom: 0,
    width: 880,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Observable_Universe_with_Measurements_01.png/1280px-Observable_Universe_with_Measurements_01.png",
  }],
  // 1e23 km
  [],
  // 1e22 km
  [],
  // 1e21 km
  [],
  // 1e20 km
  [],
  // 1e19, Andromeda Galaxy is 2.0814e18 km
  [
    {
      name: "Andromeda Galaxy",
      left: -25,
      bottom: -19.83,
      width: 300,
      clipPath: "rect(5% 100% 90% 8%)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/M31-Andromede-16-09-2023-Hamois.jpg/1280px-M31-Andromede-16-09-2023-Hamois.jpg",
    },
    // {
    //   name: "Andromeda Galaxy",
    //   left: -75,
    //   bottom: -55.52,
    //   width: 300,
    //   clipPath: "rect(20% 85% 72% 25%)",
    //   image:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/M31-Andromede-16-09-2023-Hamois.jpg/1280px-M31-Andromede-16-09-2023-Hamois.jpg",
    // },
  ],
  // 1e18
  [],
  // 1e17
  [],
  // 1e16
  [],
  // 1e15
  [],
  // 1e14
  [],
  // 1e13 km
  [],
  // 1000 billion km
  [],
  // 100 billion km
  [],
  // 10 billion km
  [
    //   {
    //   name: "Sagittarius A*",
    //   left: 0,
    //   bottom: 0,
    //   width: 900,
    //   image:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/EHT_Saggitarius_A_black_hole.tif/lossy-page1-1280px-EHT_Saggitarius_A_black_hole.tif.jpg",
    // }
  ],
  // 1 billion km
  [],
  // 100 million km
  [{
    name: "Arcturus",
    left: -388,
    bottom: -44,
    width: 760,
    clipPath: "rect(2% 97% 89% 50%)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/Sun_to_Arcturus_comparison.jpg",
  }],
  // 10 million km
  [{
    name: "Sun",
    left: 10,
    bottom: 10,
    width: 175,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/The_Sun_in_white_light.jpg/1280px-The_Sun_in_white_light.jpg",
  }],
  // 1 million km
  [{
    name: "Jupiter",
    left: 20,
    bottom: 20,
    width: 177,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jupiter_OPAL_2024.png/1280px-Jupiter_OPAL_2024.png",
  }],
  // 100,000 km
  [{
    name: "Earth",
    left: 120,
    bottom: 120,
    width: 140,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1280px-The_Earth_seen_from_Apollo_17.jpg",
  }],
  // 10,000 km
  [{
    name: "Mars",
    left: 600,
    bottom: 600,
    width: 800,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1280px-OSIRIS_Mars_true_color.jpg",
  }, {
    name: "Moon",
    left: 300,
    bottom: 300,
    width: 450,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1280px-FullMoon2010.jpg",
  }, {
    name: "Ceres",
    left: 200,
    bottom: 200,
    width: 94,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29_%28cropped%29.jpg",
  }],
  // 1000 km
  [{
    name: "Great Britain",
    left: 400,
    bottom: 200,
    width: 900,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/MODIS_-_Great_Britain_-_2012-06-04_during_heat_wave_%28cropped%29.jpg/1024px-MODIS_-_Great_Britain_-_2012-06-04_during_heat_wave_%28cropped%29.jpg",
  }],
  // 100 km
  [
    //     {
    //     name: "Tahiti",
    //     left: 100,
    //     bottom: 0,
    //     width: 730,
    //     image:
    //       "https://upload.wikimedia.org/wikipedia/commons/7/76/Tahiti%2C_French_Polynesia_-_NASA_Earth_Observatory.jpg",
    //   }
    {
      name: "Gran Canaria",
      left: 500,
      bottom: 300,
      width: 480,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/55/Gran_Canaria_Sentinel-2.jpg",
    },
    {
      name: "Santorini",
      left: 100,
      bottom: 50,
      width: 192,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Santorini2022OSM.png/1280px-Santorini2022OSM.png",
    },
  ],
  // 10 km
  [{
    name: "Vatican City",
    left: 50,
    bottom: 0,
    width: 110,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Vatican_City_map_EN.svg/1280px-Vatican_City_map_EN.svg.png",
  }],
  // 1 km
  [{
    name: "Eiffel Tower",
    left: 200,
    bottom: 0,
    width: 235,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1024px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
  }],
  // 100 m
  [{
    name: "Blue Whale",
    left: 10,
    bottom: 50,
    width: 300,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Blue_whale_size.svg/960px-Blue_whale_size.svg.png?20130729060257",
  }, {
    name: "Tyrannosaurus rex",
    left: 130,
    bottom: 0,
    width: 130,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Tyrannosaurus-rex-Profile-steveoc86_%28coloured%29%28mirror%29.png",
  }],
  // 10 m
  [
    {
      name: "orca",
      left: 10,
      bottom: 250,
      width: 500,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8b/Heraldic_Orca.svg",
    },
    {
      name:
        "African bush elephant (Largest recorded male, next to an average male)",
      left: 420,
      // bottom: -97,
      bottom: -194,
      width: 1600,
      clipPath: "rect(13% 55% 71% 15%)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/African-Elephant-Scale-Chart-SVG-Steveoc86.svg/1280px-African-Elephant-Scale-Chart-SVG-Steveoc86.svg.png",
    },
    {
      name: "North African ostrich",
      left: 450,
      bottom: -5,
      width: 140,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/202108_Ostrich.svg/1280px-202108_Ostrich.svg.png",
    },
    {
      name: "Siberian tiger",
      left: 260,
      bottom: -16,
      width: 190,
      clipPath: "rect(10% 98% 88% 10%)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/1280px-P.t.altaica_Tomak_Male.jpg",
    },
    {
      name: "Snowy albatross",
      left: 120,
      bottom: 150,
      width: 180,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Diomedea_exulans_in_flight_-_SE_Tasmania.jpg/1280px-Diomedea_exulans_in_flight_-_SE_Tasmania.jpg",
    },
    {
      name: "Pterodactylus",
      left: 120,
      bottom: 100,
      width: 56,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pterodactylus_BMMS7_life.png",
    },
    {
      name: "human",
      left: 220,
      bottom: 0,
      width: 56,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/83/SVG_Human_Silhouette.svg",
    },
    {
      name: "Velociraptor (Mongoliensis)",
      left: 50,
      bottom: 0,
      width: 160,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ee/Fred_Wierum_Velociraptor.png",
    },
  ],
  // 1 m
  [{
    name: "cat",
    left: 110,
    bottom: 0,
    width: 400,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Cat_silhouette.svg",
  }, {
    name: "mouse",
    left: -3,
    bottom: -21,
    width: 150,
    clipPath: "rect(0 100% 73% 2%)",
    image:
      // "https://upload.wikimedia.org/wikipedia/commons/f/fe/201707_mouse_3D_black.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/%D0%9C%D1%8B%D1%88%D1%8C_2.jpg/1280px-%D0%9C%D1%8B%D1%88%D1%8C_2.jpg",
  }],
  // 10 cm
  [
    {
      name: "Ventricaria ventricosa (One of the largest unicellular organisms)",
      left: 0,
      bottom: 330,
      width: 500,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ventricaria_ventricosa.JPG/1280px-Ventricaria_ventricosa.JPG",
    },
    {
      name: "Etruscan shrew (the smallest mammal by mass)",
      left: 20,
      bottom: -164,
      width: 550,
      clipPath: "rect(0 60% 55% 15%)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/ff/Suncus_etruscus.jpg",
    },
    {
      name: "Fly",
      left: 0,
      bottom: 22,
      width: 100,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Common_house_fly%2C_Musca_domestica.jpg/1280px-Common_house_fly%2C_Musca_domestica.jpg",
    },
  ],
  // 1 cm
  [{
    name: "Fairyfly",
    // left: 195.5,
    left: 510,
    bottom: -90,
    width: 380,
    clipPath: "rect(0 100% 76% 0)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Mymarilla_wollastoni.jpg",
  }, {
    name: "Pharaoh ant",
    left: 300,
    bottom: 0,
    width: 210,
    imageStyle: {
      zIndex: 100,
    },
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/71/Monomorium_pharaonis_casent0173986_profile_1.jpg",
  }, {
    name: "Sugar crystals",
    left: -118,
    bottom: -293,
    width: 1100,
    clipPath: "rect(47% 38% 60% 23%)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Sugar_2xmacro.jpg",
  }, {
    name: "Thiomargarita magnifica. The largest bacteria, can reach 2 cm.",
    left: 0,
    bottom: 100,
    width: 155,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Morphology_and_ultrastructure_of_Ca._T._magnifica.jpg/1280px-Morphology_and_ultrastructure_of_Ca._T._magnifica.jpg",
    type: ["bacteria"],
  }],
  // 1 mm
  [
    {
      name: "Caenorhabditis elegans",
      left: 0,
      bottom: 440,
      width: 1200,
      image:
        // "https://upload.wikimedia.org/wikipedia/commons/4/46/Caenorhabditis_elegans_hermaphrodite_adult-en.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Adult_Caenorhabditis_elegans.jpg/1280px-Adult_Caenorhabditis_elegans.jpg",
    },
    {
      name: "Tardigrade",
      left: 850,
      bottom: 0,
      width: 500,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/20/SEM_image_of_Milnesium_tardigradum_in_active_state_-_journal.pone.0045682.g001-2_%28white_background%29.png",
    },
    {
      name: "C. elegans cell and nucleus sizes",
      left: 280,
      bottom: 0,
      width: 610,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/C_elegans_cell_and_nucleus_sizes.svg",
    },
    {
      name: "Human egg cell",
      left: 0,
      bottom: 220,
      width: 300,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d8/Ovum_Diagram.svg",
    },
    {
      name:
        "Neuron. The soma of a neuron can vary from 4 to 100 μm in diameter. Nucleus can range from 3 to 18 μm in diameter.",
      left: 0,
      bottom: 81,
      width: 190,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Complete_neuron_cell_diagram_en.svg",
    },
    {
      name:
        "Australian Merino wool fibre (top) compared to a human hair (bottom)",
      left: 90,
      bottom: -7,
      width: 110,
      imageStyle: {
        // transform: "rotate(90deg)",
        clipPath: "rect(0 100% 92% 0)",
      },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/CSIRO_ScienceImage_8115_Human_hair_and_Merino_wool_fibre.jpg/960px-CSIRO_ScienceImage_8115_Human_hair_and_Merino_wool_fibre.jpg",
    },
    {
      name: "Cross section of a human hair strand",
      left: 55,
      bottom: 0.1,
      width: 35,
      // clipPath: "rect(0 100% 99% 0)",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Gray945.png",
    },
  ],
  // 100 μm
  [
    {
      name: "Tetrabaena socialis. The smallest multicellular organism.",
      left: -40,
      bottom: 190,
      width: 450,
      clipPath: "rect(10% 93% 91% 10%)",
      image:
        "https://img.algaebase.org/images/518CF625031af3386EspF46FC2F5/5vPWxZdXA6Vs.jpg",
    },
    {
      name: "Prasinophyte algae. The smallest eukaryotic organism.",
      left: 0,
      bottom: 80,
      width: 78,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pyramimonas_sp_color.jpg",
    },
    {
      name:
        "Scanning electron micrograph of blood cells. From left to right: human red blood cell, thrombocyte (platelet), leukocyte.",
      left: 80,
      bottom: 0,
      width: 140,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Red_White_Blood_cells.jpg",
    },
    {
      name: "Sperm cell",
      left: 220,
      bottom: 0,
      width: 330,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/86/Sperm-egg.jpg",
    },
  ],
  // 10 μm
  [
    {
      name:
        "Chromosome. Contains one 2m long DNA molecule coiled up. Each cell has identical set of 46 chromosomes (except for the sperm cell, which only has 23).",
      left: 500,
      bottom: 0,
      width: 300,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/46/Chromosome_icon.svg",
    },
    {
      name: "Mitochondria",
      left: 0,
      bottom: 250,
      width: 500,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Animal_mitochondrion_diagram_en.svg",
    },
    {
      name:
        "Escherichia virus T4 infecting E. coli bacteria. Some of the attached phage have contracted tails indicating that they have injected their DNA into the host.",
      left: 100,
      bottom: 0,
      width: 150,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Escherichia_coli_with_phages.jpg/250px-Escherichia_coli_with_phages.jpg",
      type: ["virus", "bacteria"],
    },
    {
      name: "Pandoravirus salinus (one of the largest viruses)",
      left: 0,
      bottom: 128,
      width: 100,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Pandoravirus_salinus_298x300.png",
      type: ["virus"],
    },
    {
      name:
        "Prochlorococcus marinus (the smallest photosynthetic organism, produces much of the world's oxygen)",
      left: -104,
      bottom: -19,
      width: 260,
      clipPath: "rect(45% 70% 80% 40%)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Prochlorococcus_marinus.jpg/1280px-Prochlorococcus_marinus.jpg",
      type: ["bacteria"],
    },
  ],
  // 1 μm
  [
    {
      name: "Escherichia virus T4",
      left: 150,
      bottom: 0,
      width: 390,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Bacteriophage_T4_Structural_Model_at_Atomic_Resolution.tif/lossy-page1-1280px-Bacteriophage_T4_Structural_Model_at_Atomic_Resolution.tif.jpg",
      type: ["virus"],
    },
    {
      name: "Influenza virus",
      left: 200,
      bottom: -200,
      width: 900,
      clipPath: "rect(54% 75% 71% 50%)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/EM_of_influenza_virus.jpg",
      type: ["virus"],
    },
    {
      name: "Pelagibacter ubique (one of the smallest bacteria)",
      left: 30,
      bottom: -168.5,
      width: 300,
      clipPath: "rect(3% 60% 31% 32%)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Pelagibacter.jpg",
      type: ["bacteria"],
    },
    {
      name: "Mycoplasma genitalium (bacteria)",
      left: 0,
      bottom: 100,
      width: 300,
      clipPath: "rect(0 88% 100% 0)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/3D_Whole_Cell_%283D-WC%29_model_of_a_Mycoplasma_genitalium_cell.jpg/1280px-3D_Whole_Cell_%283D-WC%29_model_of_a_Mycoplasma_genitalium_cell.jpg",
      type: ["bacteria"],
    },
    {
      name: "SARS-CoV-2",
      left: 0,
      bottom: 0,
      width: 130,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Coronavirus._SARS-CoV-2.png/1280px-Coronavirus._SARS-CoV-2.png",
      type: ["virus"],
    },
  ],
  // 100 nm
  [],
  // 10 nm
  [{
    name: "DNA",
    left: 50,
    bottom: 0,
    width: 500,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/DNA_Structure%2BKey%2BLabelled.pn_NoBB.png/1280px-DNA_Structure%2BKey%2BLabelled.pn_NoBB.png",
  }, {
    name:
      "High-resolution STEM-HAADF micrograph of aluminium atoms viewed along the [001] zone axis",
    left: 0,
    bottom: 0,
    width: 200,
    clipPath: "rect(50% 40% 90% 0)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Aluminium_Atomic_lattice.png",
  }],
  // 1 nm
  [
    {
      name: "Selenocysteine (Proteinogenic amino acid)",
      left: 600,
      bottom: 0,
      width: 235,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/Selenocysteine-3D-vdW.png",
    },
    {
      name: "Uranium atom",
      left: 200,
      bottom: 0,
      width: 200,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/58/Atom_symbol.svg",
    },
    {
      name: "Hydrogen atom",
      left: 0,
      bottom: 0,
      width: 58,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/58/Atom_symbol.svg",
    },
  ],
  // 100 pm
  [],
  // 10 pm
  [],
  // 1 pm
  [],
  // 100 fm
  [],
  // 10 fm
  [{
    name: "Atomic nucleus",
    left: 300,
    bottom: 0,
    width: 300,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/Nucleus_drawing.svg",
  }, {
    name: "Proton",
    left: 10,
    bottom: 0,
    width: 84,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Quark_structure_proton.svg",
  }],
  // 1 fm
  [],
];
