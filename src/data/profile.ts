import type { Localized } from './i18n';

export const profile = {
  name: { en: 'Masaya Hara', ja: '原 誠弥' },
  romanName: 'Masaya Hara',
  position: { en: 'Assistant Professor', ja: '助教' },
  institution: { en: 'National Institute of Technology, Anan College', ja: '阿南工業高等専門学校' },
  department: { en: 'Department of Creative Technology Engineering, General Education', ja: '創造技術工学科 一般教養' },
  introduction: {
    en: 'I am a mathematician working in differential geometry, studying the geometry of curves and surfaces. My main tool is transformation theory, and I am also interested in its connections with integrable systems and discrete differential geometry.',
    ja: '微分幾何学を専門とし、曲線や曲面の幾何学について研究しています。\n主な道具は変換理論で、そこから得られる可積分構造や離散微分幾何学にも関心を持っています。',
  },
  email: { local: 'hara', domain: 'anan-nct.ac.jp' },
  address: { en: '265 Aoki Minobayashi, Anan\nTokushima 774-0017, Japan', ja: '〒774-0017\n徳島県阿南市見能林町青木265' },
  links: [
    { label: 'ORCID', icon: 'orcid', href: 'https://orcid.org/0009-0008-0614-0334' },
    { label: 'researchmap', icon: 'researchmap', href: 'https://researchmap.jp/MasayaHara' },
    { label: 'J-GLOBAL', icon: 'jglobal', href: 'https://jglobal.jst.go.jp/en/detail?JGLOBAL_ID=202501015812502352' },
  ] as { label: string; icon: string; href: string | null }[],
};

export const researchAreas: { title: Localized; description: Localized }[] = [
  {
    "title": {
      "en": "Differential Geometry",
      "ja": "微分幾何学"
    },
    "description": {
      "en": "Differential geometry is the study of geometric objects using differential calculus. I often study curves and surfaces through Weierstrass-type representation formulas and Lie sphere geometry. In particular, I am interested in comparing and unifying surface theories in different ambient geometries.",
      "ja": "微分を用いて図形を研究する幾何学の分野です。私は、Weierstrass型表現公式やLie球面幾何学、DPW法を用いて、曲線や2次元曲面を考察することが多いです。特に、異なる空間における曲面の比較や統一化について研究しています。"
    }
  },
  {
    "title": {
      "en": "Transformation Theory",
      "ja": "変換理論"
    },
    "description": {
      "en": "Transformation theory studies geometric operations that produce new curves or surfaces from given ones. I am particularly interested in Darboux transformations, which relate geometric objects through spheres. Weierstrass-type representation formulas can also be interpreted geometrically in terms of Christoffel transformations.",
      "ja": "曲線や曲面に幾何的な操作を施し、別の曲線や曲面を生成する理論です。特に、球を媒介とするDarboux変換を研究しています。また、Weierstrass型表現公式をChristoffel変換として幾何的に解釈することもできます。"
    }
  },
  {
    "title": {
      "en": "Integrable Systems",
      "ja": "可積分系"
    },
    "description": {
      "en": "For certain classes of surfaces, their geometric properties are closely related to integrable differential equations. Surfaces carrying such structures are often referred to as integrable surfaces. I am particularly interested in the integrable structures of isothermic surfaces and Weingarten surfaces.",
      "ja": "ある種の曲面では、その幾何学的性質が可積分な微分方程式と密接に結び付いています。このような構造をもつ曲面を可積分曲面と呼びます。特に私は、双等温曲面やWeingarten曲面に現れる可積分構造について研究しています。"
    }
  },
  {
    "title": {
      "en": "Discrete Differential Geometry",
      "ja": "離散微分幾何学"
    },
    "description": {
      "en": "I study discrete surfaces built from planar quadrilaterals. In particular, I consider natural discretizations arising from the integrable structures and transformation theory of surfaces. I am interested both in their differences from smooth surfaces and in new perspectives on smooth surface theory suggested by discrete geometry.",
      "ja": "平面的な四角形を組み合わせてできる離散曲面について研究しています。曲面の可積分構造や変換理論から導かれる自然な離散化を扱います。滑らかな場合との違いや、離散構造から見えてくる滑らかな曲面論の新たな視点にも関心があります。"
    }
  }
];

export const employment = {
  current: { start: '2025-09', end: null },
  teaching: { start: '2021-04', end: '2025-03', role: { en: 'Part-time Teacher', ja: '非常勤講師' }, institution: { en: 'Kobe University Secondary School', ja: '神戸大学附属中等教育学校' } },
};
export const funding = {
  agency: { en: 'JSPS KAKENHI', ja: 'JSPS科研費' },
  scheme: { en: 'Grant-in-Aid for Research Activity Start-up', ja: '研究活動スタート支援' },
  title: { en: 'Preservation of Darboux Transformations under the Decomposition of Zero Mean Curvature Surfaces', ja: '平均曲率零曲面の分解定理におけるDarboux変換の保存構造の解明' },
  firstFiscalYear: 2026, lastFiscalYear: 2027, number: '26K24506',
  url: { en: 'https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-26K24506/', ja: 'https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-26K24506/' },
};
export function dateRange(start: string, end: string | null, language: 'en' | 'ja') {
  const format = (date: string) => language === 'en' ? date : `${date.slice(0, 4)}年${Number(date.slice(5))}月`;
  return `${format(start)} – ${end ? format(end) : language === 'en' ? 'present' : '現在'}`;
}
