import type { Localized } from './i18n';

export const profile = {
  name: { en: 'Masaya Hara', ja: '原 誠弥' },
  romanName: 'Masaya Hara',
  position: { en: 'Assistant Professor', ja: '助教' },
  institution: { en: 'National Institute of Technology, Anan College', ja: '阿南工業高等専門学校' },
  department: { en: 'Department of Creative Technology Engineering, General Education', ja: '創造技術工学科 一般教養' },
  introduction: {
    en: 'I am a mathematician working in differential geometry, with particular interests in integrable systems, transformation theory, and discrete differential geometry. My research focuses mainly on the geometry of surfaces and their transformations.',
    ja: '微分幾何学を専門とし、可積分系、変換理論、離散微分幾何学に関心を持っています。特に、曲面の幾何学とその変換を中心に研究しています。',
  },
  email: 'hara@anan-nct.ac.jp',
  address: { en: '265 Aoki, Minobayashi,\nAnan, Tokushima 774-0017,\nJapan', ja: '〒774-0017\n徳島県阿南市見能林町青木265' },
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
      "en": "I study the differential geometry of curves and surfaces, with particular emphasis on zero and constant mean curvature surfaces in Euclidean, Lorentz–Minkowski, and isotropic geometries. I am interested in representation formulas and in geometric properties that persist across different ambient geometries.",
      "ja": "曲線・曲面の微分幾何学を研究しており、とくにユークリッド空間、Lorentz–Minkowski空間、isotropic geometry における平均曲率零曲面・定平均曲率曲面を扱っています。表現公式や、異なる周囲空間の間で保存される幾何学的性質に関心があります。"
    }
  },
  {
    "title": {
      "en": "Integrable Systems",
      "ja": "可積分系"
    },
    "description": {
      "en": "I study integrable structures arising in surface geometry, including the relationships among Weierstrass-type representations, transformation theory, and integrable differential equations. A particular interest is how these structures govern deformations and finite type phenomena of surfaces.",
      "ja": "曲面幾何に現れる可積分構造を研究しており、Weierstrass型表現公式、変換理論、可積分微分方程式の関係に関心があります。とくに、これらの構造が曲面の変形や finite type 性にどのように現れるかを調べています。"
    }
  },
  {
    "title": {
      "en": "Transformation Theory",
      "ja": "変換理論"
    },
    "description": {
      "en": "My work focuses on geometric transformations of curves and surfaces, especially Darboux transformations. A central theme is to understand which transformation-theoretic structures are preserved under correspondences or decompositions between zero mean curvature surfaces in different geometries.",
      "ja": "曲線・曲面に対する幾何学的変換、とくにDarboux変換を研究しています。異なる幾何に属する平均曲率零曲面の対応や分解において、変換理論的な構造がどのように保存されるかを明らかにすることを主要なテーマの一つとしています。"
    }
  },
  {
    "title": {
      "en": "Discrete Differential Geometry",
      "ja": "離散微分幾何学"
    },
    "description": {
      "en": "I study discrete analogues of smooth surface theory, with emphasis on discrete Weierstrass representations and integrable discretizations. In particular, I am interested in discrete zero and constant mean curvature surfaces in isotropic geometry and the transformation-theoretic structures underlying their construction.",
      "ja": "滑らかな曲面論の離散版を研究しており、とくに離散Weierstrass型表現公式や可積分な離散化を扱っています。isotropic geometry における離散的な平均曲率零曲面・定平均曲率曲面と、その構成の背後にある変換理論的構造に関心があります。"
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
