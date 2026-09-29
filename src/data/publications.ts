import { existsSync } from 'node:fs';
import type { Localized } from './i18n';
import type { SurfaceKind } from './surfaces';
export type PublicationCategory = 'peer-reviewed' | 'thesis' | 'misc' | 'preprint';
export type LinkKind = 'doi' | 'arxivDoi' | 'arxiv' | 'journal' | 'pdf' | 'repository' | 'publication' | 'event';
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number | null;
  status?: 'to-appear';
  bibliography?: string;
  pages?: string;
  type?: string;
  category: PublicationCategory;
  image: SurfaceKind;
  imageSrc?: string;
  links: { kind: LinkKind; href: string }[];
  technicalSummary?: { text: Localized; source: string };
  relatedSurfaces?: { title: string; href: string }[];
  additionalImages?: { src: string; alt: Localized }[];
}

// Metadata follows the supplied records; a null year must not be inferred from arXiv.
const records: Publication[] = [
  {
    id: 'discrete-cmc-isotropic',
    title: 'Weierstrass representations of discrete constant mean curvature surfaces in isotropic space',
    authors: ['Joseph Cho', 'Masaya Hara'], venue: 'Annales Polonici Mathematici',
    year: 2026, status: 'to-appear', category: 'peer-reviewed', image: 'wave',
    links: [
      { kind: 'arxiv', href: 'https://arxiv.org/abs/2502.15291' },
      { kind: 'arxivDoi', href: 'https://doi.org/10.48550/arXiv.2502.15291' },
    ],
    technicalSummary: {
      text: {
        en: 'Develops discrete Weierstrass representations in isotropic 3-space for the constant-mean-curvature setting, with explicitly parametrized examples.',
        ja: '等方3次元空間の離散的な定平均曲率曲面に対するWeierstrass表現と、明示的にパラメータ表示された例を扱います。',
      }, source: 'https://arxiv.org/abs/2502.15291',
    },
  },
  {
    id: 'lorentz-darboux',
    title: 'Darboux transformations of spacelike curves in the Lorentz-Minkowski plane',
    authors: ['Masaya Hara'],
    venue: 'Differential Geometry and Integrable Systems, Advanced Studies in Pure Mathematics, Mathematical Society of Japan, proceedings of the 13th MSJ-SI, 2022/2023, OCAMI',
    year: 2026, status: 'to-appear', category: 'peer-reviewed', image: 'ribbon',
    links: [
      { kind: 'arxiv', href: 'https://arxiv.org/abs/2312.03363' },
      { kind: 'arxivDoi', href: 'https://doi.org/10.48550/arXiv.2312.03363' },
    ],
    technicalSummary: {
      text: {
        en: 'Uses Penrose compactification to study singularities and blowup in Lorentz–Darboux transforms of spacelike plane curves, with remarks on curves of changing causal type.',
        ja: 'Penrose図による共形コンパクト化を用い、空間的平面曲線のLorentz–Darboux変換における特異点と発散を調べます。因果的型が変化する曲線についても考察しています。',
      }, source: 'https://arxiv.org/abs/2312.03363',
    },
  },
  {
    id: 'decomposition-invariants',
    title: 'Geometric properties invariant under the decomposition of zero mean curvature surfaces',
    authors: ['Shintaro Akamine', 'Joseph Cho', 'Masaya Hara', 'Yuta Ogata'],
    venue: 'manuscripta mathematica', bibliography: '176 (2025), no. 5, 73',
    year: 2025, category: 'peer-reviewed', image: 'saddle',
    links: [
      { kind: 'doi', href: 'https://doi.org/10.1007/s00229-025-01672-5' },
      { kind: 'journal', href: 'https://link.springer.com/article/10.1007/s00229-025-01672-5' },
    ],
    technicalSummary: {
      text: {
        en: 'Studies uniqueness of zero-mean-curvature decompositions via Weierstrass data, and preservation of planar curvature lines, isometric deformations, and affine minimality.',
        ja: 'Weierstrass表現による平均曲率零曲面の分解の一意性と、平面的な曲率線、等長変形、アフィン極小性の保存を扱います。',
      }, source: 'https://link.springer.com/article/10.1007/s00229-025-01672-5',
    },
  },
  {
    id: 'planar-curvature-lines',
    title: 'Zero mean curvature surfaces in isotropic space with planar curvature lines',
    authors: ['Joseph Cho', 'Masaya Hara'], venue: 'Portugaliae Mathematica', bibliography: '83 (2026), no. 1/2, 113–144',
    year: 2026, category: 'peer-reviewed', image: 'wave',
    links: [
      { kind: 'doi', href: 'https://doi.org/10.4171/PM/2146' },
      { kind: 'journal', href: 'https://ems.press/journals/pm/articles/14298988' },
      { kind: 'arxiv', href: 'https://arxiv.org/abs/2410.18728' },
    ],
    technicalSummary: {
      text: {
        en: 'Classifies isotropic zero-mean-curvature surfaces with planar curvature lines into a one-parameter family and examines their connection with affine-minimal Thomsen-type surfaces.',
        ja: '平面的な曲率線を持つ等方空間の平均曲率零曲面を1パラメータ族として分類し、アフィン極小なThomsen型曲面との関係を調べます。',
      }, source: 'https://arxiv.org/abs/2410.18728',
    },
  },
  {
    id: 'lie-minimal', title: 'Lie minimal Weingarten surfaces',
    imageSrc: '/images/publications/lie-minimal-weingarten-surfaces.png',
    authors: ['Joseph Cho', 'Masaya Hara', 'Denis Polly', 'Tomohiro Tada'],
    venue: 'Hiroshima Mathematical Journal', bibliography: '55 (2025), no. 2, 151–165',
    year: 2025, category: 'peer-reviewed', image: 'ribbon',
    links: [
      { kind: 'doi', href: 'https://doi.org/10.32917/h2023019' },
      { kind: 'arxiv', href: 'https://arxiv.org/abs/2310.15695' },
    ],
    technicalSummary: {
      text: {
        en: 'Uses the Euler–Lagrange equations for Lie minimality to establish rotationality of Lie-minimal CMC surfaces in Riemannian space forms, with extensions to specified Weingarten classes in flat space.',
        ja: 'Lie極小性のEuler–Lagrange方程式を用い、Riemann空間形のLie極小な定平均曲率曲面の回転対称性を示します。平坦な空間では、特定のWeingarten曲面のクラスへ拡張しています。',
      }, source: 'https://arxiv.org/abs/2310.15695',
    },
  },
  {
    id: 'phd-thesis', title: 'Constant mean curvature surfaces in simply isotropic 3-space',
    authors: ['Masaya Hara'], venue: 'Kobe University', type: 'PhD Thesis',
    year: 2026, category: 'thesis', image: 'saddle',
    links: [
      { kind: 'repository', href: 'https://da.lib.kobe-u.ac.jp/da/kernel/0100504708/?lang=1' },
      ...(existsSync('public/papers/hara-phd-thesis-2026.pdf') ? [{ kind: 'pdf' as const, href: '/papers/hara-phd-thesis-2026.pdf' }] : []),
    ],
  },
  {
    id: 'rims-2321', title: 'Zero mean curvature surfaces with planar curvature lines in isotropic 3-space',
    authors: ['Masaya Hara'], venue: 'RIMS Kôkyûroku 2321',
    year: 2025, category: 'misc', image: 'wave',
    links: [
      { kind: 'publication', href: 'https://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/2321.html' },
      { kind: 'pdf', href: 'https://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/pdf/2321-01.pdf' },
      { kind: 'doi', href: 'https://doi.org/10.17983/302371' },
    ],
  },
  {
    id: 'maximal-darboux', title: 'Maximal Darboux transformations',
    authors: ['Masaya Hara'], venue: '第8回 数理新人セミナー報告集',
    year: 2025, category: 'misc', image: 'ribbon',
    links: [
      { kind: 'pdf', href: 'https://drive.google.com/file/d/1Cy52sX_-KNt6uS4zrD6TgEBw04wq7J2r/view' },
      { kind: 'event', href: 'https://sites.google.com/view/math-graduate/MATHSCI-FRESHMAN-SEMINAR/2025/' },
    ],
  },
];
// Sort known years descending; preserve source order within each year; undated records follow.
export const publications = records.toSorted((a, b) => (b.year ?? -1) - (a.year ?? -1));
