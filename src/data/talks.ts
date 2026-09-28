export interface Talk {
  id: string;
  date: string;
  title: string;
  authors?: string[];
  event: string;
  location: string;
  scope: 'international' | 'domestic';
  invited: boolean;
  url?: string;
}

const records: Talk[] = [
  {
    id: 'talk-20',
    date: '2026-03-23',
    title: '平均曲率零曲面の分解で不変な幾何学性質について',
    authors: ['Shintaro Akamine', 'Joseph Cho', 'Masaya Hara', 'Yuta Ogata'],
    event: '日本数学会2026年度年会',
    location: '東京理科大学神楽坂キャンパス, Tokyo, Japan',
    scope: 'domestic',
    invited: false,
    url: 'https://www.mathsoc.jp/activity/meeting/tus26mar/',
  },
  {
    "id": "talk-01",
    "date": "2026-09",
    "title": "Decompositions of zero mean curvature surfaces",
    "event": "Japan-Austria Workshop on Discrete and Global Surface Theory",
    "location": "RIMS, Kyoto, Japan",
    "scope": "international",
    "invited": true,
    "url": "https://geometry.ynu.ac.jp/JA-workshop/"
  },
  {
    "id": "talk-02",
    "date": "2025-11",
    "title": "Darboux transformations between zero mean curvature surfaces",
    "event": "JA, surfaces and beyond",
    "location": "Online seminar",
    "scope": "international",
    "invited": true,
    "url": "https://sites.google.com/view/jasurfacesandbeyond/home"
  },
  {
    "id": "talk-03",
    "date": "2025-11",
    "title": "Transformations between zero mean curvature surfaces",
    "event": "The 5th Japan-Taiwan Joint Conference on Differential Geometry",
    "location": "IKODE Kawaramachi Art Station, Takamatsu, Japan",
    "scope": "international",
    "invited": true,
    "url": "https://www-math.st.tokushima-u.ac.jp/~yasumoto/5thJapanTaiwan20251102/"
  },
  {
    "id": "talk-04",
    "date": "2025-07",
    "title": "Overview of Discrete DPW Method",
    "event": "Integrable Geometry: Smooth and Discrete",
    "location": "MATRIX, Australia",
    "scope": "international",
    "invited": true,
    "url": "https://www.matrix-inst.org.au/events/integrable-geometry-smooth-and-discrete/"
  },
  {
    "id": "talk-05",
    "date": "2025-06",
    "title": "Simple ends of zero mean curvature surfaces",
    "event": "Mini Workshop on Differential Geometry",
    "location": "Korea University, Seoul, South Korea",
    "scope": "international",
    "invited": true,
    "url": "https://mathematicians.korea.ac.kr/sdyang/mini-workshop-on-differential-geometry/"
  },
  {
    "id": "talk-06",
    "date": "2025-01",
    "title": "Maximal Darboux transformations",
    "event": "The 5th Conference on Surfaces, Analysis, and Numerics",
    "location": "Osaka Metropolitan University, Japan",
    "scope": "international",
    "invited": true,
    "url": "https://jcho.info/cosan2025/index.html"
  },
  {
    "id": "talk-07",
    "date": "2024-09",
    "title": "Simple ends of zero mean curvature surfaces in isotropic 3-space via Weierstrass-type representation",
    "event": "Mini-Workshop in Kamigamo",
    "location": "Kyoto Sangyo University, Japan",
    "scope": "international",
    "invited": true,
    "url": "https://sites.google.com/view/mini-workshop-kamigamo3"
  },
  {
    "id": "talk-08",
    "date": "2024-03",
    "title": "Lorentz-Darboux transformations of plane curves and Penrose diagram",
    "event": "Geometry seminar",
    "location": "Technische Universität Wien, Vienna, Austria",
    "scope": "international",
    "invited": true
  },
  {
    "id": "talk-09",
    "date": "2024-01",
    "title": "Darboux transformations of spacelike curves in the Lorentz-Minkowski plane",
    "event": "Discussion Meeting on Smooth and Discrete Differential Geometry",
    "location": "Kyushu University, Japan",
    "scope": "international",
    "invited": true,
    "url": "https://www-math.ias.tokushima-u.ac.jp/~yasumoto/discdg202401/"
  },
  {
    "id": "talk-10",
    "date": "2023-09",
    "title": "Darboux transformations of spacelike curves in \\(\\mathbb{R}^{1,1}\\)",
    "event": "Mini-School on Differential Geometry and Integrable Systems",
    "location": "Tokushima University, Japan",
    "scope": "international",
    "invited": true,
    "url": "https://www-math.ias.tokushima-u.ac.jp/~yasumoto/dgischool202309/"
  },
  {
    "id": "talk-11",
    "date": "2023-06",
    "title": "Darboux transformations of general curves in \\(\\mathbb{R}^{1,1}\\)",
    "event": "Mini-Workshop in Kamigamo",
    "location": "Kyoto Sangyo University, Japan",
    "scope": "international",
    "invited": true,
    "url": "https://sites.google.com/view/yogata-miniworkshop-kamigamo2/home"
  },
  {
    "id": "talk-12",
    "date": "2023-03",
    "title": "Darboux transformations in the Lorentz-Minkowski plane",
    "event": "The 3rd Shot of The 13th MSJ-SI \"Differential Geometry and Integrable Systems\"",
    "location": "Osaka Metropolitan University, Japan",
    "scope": "international",
    "invited": true,
    "url": "https://www-math.ias.tokushima-u.ac.jp/~yasumoto/msjsi13th3rd20230303/"
  },
  {
    "id": "talk-13",
    "date": "2023-02",
    "title": "Darboux transformations of curves in \\(\\mathbb{R}^{1,1}\\)",
    "event": "Mini-Workshop in Kamigamo",
    "location": "Kyoto Sangyo University, Japan",
    "scope": "international",
    "invited": true,
    "url": "https://sites.google.com/view/yogata-miniworkshop-kamigamo1/home"
  },
  {
    "id": "talk-14",
    "date": "2026-08",
    "title": "Integrable structures of minimal surfaces and their geometric interpretation",
    "event": "Mini-Workshop in Kamigamo",
    "location": "京都産業大学",
    "scope": "domestic",
    "invited": true,
    "url": "https://sites.google.com/view/mini-workshopkamigamo4/home"
  },
  {
    "id": "talk-15",
    "date": "2024-11",
    "title": "Weierstrass型表現公式とDarboux変換について",
    "event": "擬リーマン幾何とその周辺",
    "location": "横浜国立大学",
    "scope": "domestic",
    "invited": true,
    "url": "https://hp.brs.nihon-u.ac.jp/~akamine/index_j_Yokohama.html"
  },
  {
    "id": "talk-16",
    "date": "2024-10",
    "title": "平均曲率零曲面のDarboux変換",
    "event": "広島幾何学研究集会 2024",
    "location": "広島大学",
    "scope": "domestic",
    "invited": true,
    "url": "https://www.math.sci.hiroshima-u.ac.jp/geo/workshop/24hiroshima.html"
  },
  {
    "id": "talk-17",
    "date": "2024-09",
    "title": "Zero mean curvature surfaces with planar curvature lines in Isotropic 3-space",
    "event": "第71回 幾何学シンポジウム",
    "location": "関西大学",
    "scope": "domestic",
    "invited": true,
    "url": "https://www.mathsoc.jp/section/geometry/symp_schedule/geometry_symposium_2024.html"
  },
  {
    "id": "talk-18",
    "date": "2024-06",
    "title": "Minimal surfaces with planar curvature lines in Isotropic 3-space",
    "event": "部分多様体と離散化の幾何学",
    "location": "京都大学数理解析研究所 (RIMS)",
    "scope": "domestic",
    "invited": true,
    "url": "https://k-naokawa.cc.it-hiroshima.ac.jp/rims2024_submanifold/temp20240510_dfd62652fgnjdi9/"
  },
  {
    "id": "talk-19",
    "date": "2025-02",
    "title": "Maximal Darboux transformations",
    "event": "第8回 数理新人セミナー",
    "location": "名古屋大学",
    "scope": "domestic",
    "invited": false,
    "url": "https://sites.google.com/view/math-graduate/MATHSCI-FRESHMAN-SEMINAR/2025?authuser=0"
  }
];
// Supplied date precision is retained; equal dates retain source order.
export const talks = records.toSorted((a, b) => b.date.localeCompare(a.date));
