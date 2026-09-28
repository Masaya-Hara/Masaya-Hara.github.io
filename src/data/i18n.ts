export type Language = 'en' | 'ja';
export type Localized = Record<Language, string>;
export const sectionIds = ['introduction', 'research', 'publications', 'talks', 'cv', 'contact', 'surfaces'] as const;
export const ui = {
  en: {
    nav: ['Home', 'Research Interest', 'Publications', 'Talks', 'CV', 'Contact', 'Surfaces'],
    language: 'Language selection', navigation: 'Homepage sections', skip: 'Skip to content',
    publicationFilters: { all: 'All', 'peer-reviewed': 'Peer-reviewed', thesis: 'Thesis', misc: 'Proceedings & MISC', preprint: 'Preprints' },
    talkFilters: { all: 'All', international: 'International', domestic: 'Domestic', invited: 'Invited' },
    showAll: 'Show all', collapse: 'Show less', empty: 'No matching records.', results: 'Showing {shown} of {total}',
    filterPublications: 'Filter publications', filterTalks: 'Filter talks', invited: 'Invited', coauthored: 'Coauthored presentation',
    details: 'Publication details', close: 'Close', technicalSummary: 'Technical summary', summaryPending: 'A source-verified technical summary has not yet been added.',
    relatedSurfaces: 'Related surfaces', noSurfaces: 'No surface links have yet been assigned.', additionalImages: 'Additional images', source: 'Summary source',
    imagePlaceholder: 'Illustrative placeholder; not a figure from the paper.', yearUnknown: 'Year not supplied', toAppear: 'to appear',
    profilePending: 'Profile links pending.', position: 'Position', funding: 'Grants',
    email: 'Email', affiliation: 'Affiliation', address: 'Postal address', principalInvestigator: 'Principal Investigator', grantNumber: 'Grant number',
    surfaceNote: 'Illustrative previews; the surface gallery is not yet available.',
    links: { doi: 'DOI', arxivDoi: 'arXiv DOI', arxiv: 'arXiv', journal: 'Journal', pdf: 'PDF', repository: 'Repository', publication: 'Publication page', event: 'Event / report' },
  },
  ja: {
    nav: ['ホーム', '研究対象', '論文', '講演', '経歴', '連絡先', '曲面ギャラリー'],
    language: '言語の切り替え', navigation: 'ページ内ナビゲーション', skip: '本文へ移動',
    publicationFilters: { all: 'すべて', 'peer-reviewed': '査読論文', thesis: '学位論文', misc: '報告集・MISC', preprint: 'プレプリント' },
    talkFilters: { all: 'すべて', international: '国際', domestic: '国内', invited: '招待' },
    showAll: 'すべて表示', collapse: '表示を折りたたむ', empty: '該当する記録はありません。', results: '全{total}件中{shown}件を表示',
    filterPublications: '論文の絞り込み', filterTalks: '講演の絞り込み', invited: '招待', coauthored: '共同発表',
    details: '論文の詳細', close: '閉じる', technicalSummary: '専門的な概要', summaryPending: '出典に基づく専門的な概要は、まだ追加していません。',
    relatedSurfaces: '関連する曲面', noSurfaces: '関連する曲面へのリンクは、まだ設定していません。', additionalImages: '追加画像', source: '概要の出典',
    imagePlaceholder: '仮の図です。論文中の図ではありません。', yearUnknown: '年の情報は未提供です', toAppear: '掲載予定',
    profilePending: 'プロフィールへのリンクは準備中です。', position: '職歴', funding: '研究費',
    email: 'メール', affiliation: '所属', address: '所在地', principalInvestigator: '研究代表者', grantNumber: '課題番号',
    surfaceNote: '仮の図を掲載しています。曲面ギャラリーは準備中です。',
    links: { doi: 'DOI', arxivDoi: 'arXiv DOI', arxiv: 'arXiv', journal: 'Journal', pdf: 'PDF', repository: '機関リポジトリ', publication: '刊行物ページ', event: '研究集会・報告集' },
  },
};
