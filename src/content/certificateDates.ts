import type { CertificateFile } from "./certificateFiles.generated";

// Issue dates read from the certificates themselves, kept apart from the
// auto-generated manifest so re-running the import scripts can't wipe them.
// `label` is what's shown ("Mon YYYY", or just "YYYY" when the month is unknown);
// `iso` drives the newest-first sort as YYYY-MM, with YYYY-00 for year-only so
// those follow the month-dated ones from the same year. Certificates missing
// here sort to the end of their folder.
interface CertificateDate {
  label: string;
  iso: string;
}

const d = (label: string, iso: string): CertificateDate => ({ label, iso });

const DATES: Record<string, CertificateDate> = {
  // ADGM Academy
  "Critical Thinking & Problem Solving.pdf": d("Jun 2026", "2026-06"),
  // ADNOC
  "ADGM Data Protection.pdf": d("Jan 2026", "2026-01"),
  "Anti-Bribery Training.pdf": d("Jan 2026", "2026-01"),
  "Anti-Money Laundering and Counter-Terrorist Financing.pdf": d("Jan 2026", "2026-01"),
  "Gifts & Entertainment.pdf": d("Jan 2026", "2026-01"),
  // Coursera
  "Advance Google Data Analytics.pdf": d("Feb 2024", "2024-02"),
  "BigQuery for Data Analysts.pdf": d("Aug 2024", "2024-08"),
  "Databases and SQL for Data Science with Python.pdf": d("Apr 2023", "2023-04"),
  "Getting Started with Power BI Desktop.pdf": d("Feb 2023", "2023-02"),
  "Google Data Analytics.pdf": d("Jul 2023", "2023-07"),
  "IBM Data Science.pdf": d("Jul 2023", "2023-07"),
  "Microsoft Power BI Data Analyst.pdf": d("Aug 2024", "2024-08"),
  "Salesforce Sales Development Representative.pdf": d("Sep 2024", "2024-09"),
  // McKinsey
  "McKinsey_Forward_Program_Badge20240815-8-8bdjc8.pdf": d("Jul 2024", "2024-07"),
  // Oracle
  "oracle_data_visulasation_challenge.pdf": d("Apr 2025", "2025-04"),
  // Tricentis
  "Tricentis qTest Fundamentals − qTest Project creation & qTest Explorer.pdf": d("Dec 2025", "2025-12"),
  // Udemy
  "Paginated Report - Power Bi Report Builder.pdf": d("Dec 2025", "2025-12"),
  "SQL - MySQL for Data Analytics and Business Intelligence.pdf": d("Jun 2025", "2025-06"),
  // University
  "Certificate of Appreciation.pdf": d("Mar 2024", "2024-03"),
  "Graduation Certificate.pdf": d("Feb 2025", "2025-02"),
  // Volunteering
  "1st place in the essay competition “MY HOME “ARTEK””.pdf": d("Aug 2018", "2018-08"),
  "2023 Russian House, Damascus Active Participation Certificate.pdf": d("Dec 2023", "2023-12"),
  "2nd place in the International essay competition “MY BEST DAY IN ARTEK”.pdf": d("Sep 2019", "2019-09"),
  "Accelerator of Social Projects.pdf": d("Jul 2022", "2022-07"),
  "Active participation in events and volunteer movement in the Russian House in Syria..pdf": d("Jun 2022", "2022-06"),
  "Active participation in the public life of the Russian House.pdf": d("Jan 2023", "2023-01"),
  "Artek 1st place in the sports and entertainment game _Fun Sportland_.pdf": d("2016–2017", "2017-00"),
  "Artek(1).pdf": d("2016–2017", "2017-00"),
  "Artek(2).pdf": d("Jan 2017", "2017-01"),
  "Artek.pdf": d("2016–2017", "2017-00"),
  "Cyber Security Incident Management.pdf": d("Jul 2022", "2022-07"),
  "Day of National Unity(1).pdf": d("Nov 2023", "2023-11"),
  "Day of National Unity.pdf": d("Nov 2022", "2022-11"),
  "Graphic Design lecturer.pdf": d("Nov 2021", "2021-11"),
  "History.pdf": d("Jan 2019", "2019-01"),
  "International Youth Forum  The Future of the Russian World.pdf": d("Dec 2024", "2024-12"),
  "Media Expo Syria.pdf": d("Oct 2021", "2021-10"),
  "New Year flashmob, photo contest..pdf": d("Apr 2019", "2019-04"),
  "Pink Caravan Donation Certificate.pdf": d("Oct 2026", "2026-10"),
  "RUS Dance.pdf": d("May 2022", "2022-05"),
  "Rasul Gamzatov.pdf": d("Oct 2023", "2023-10"),
  "Russian Geographical Society.pdf": d("Nov 2021", "2021-11"),
  "Russian House in Syria.pdf": d("Apr 2021", "2021-04"),
  "Russian Post winner.pdf": d("Sep 2017", "2017-09"),
  "Russian world without borders.pdf": d("Sep 2018", "2018-09"),
  "The World Forum for Public Joy online.pdf": d("Dec 2025", "2025-12"),
  "Thematic competitions.pdf": d("Nov 2021", "2021-11"),
  "Trajectory of Discoveries 2026.pdf": d("Oct 2026", "2026-10"),
  "Zabava(1).pdf": d("Jun 2021", "2021-06"),
  "Zabava.pdf": d("Jun 2022", "2022-06"),
  "Mother Language Day.pdf": d("Mar 2023", "2023-03"),
  "Russia. Historical Heritage.pdf": d("Sep 2021", "2021-09"),
  "Russian Compatriots Living Abroad.pdf": d("Aug 2021", "2021-08"),
  "School of Young Leaders.pdf": d("Aug 2023", "2023-08"),
  "Youth Rally of Russian Compatriots.pdf": d("Dec 2023", "2023-12"),
  "TED.pdf": d("Jan 2017", "2017-01"),
};

export function certificateDate(cert: CertificateFile): CertificateDate | undefined {
  return DATES[cert.fileName];
}

/** Newest first; undated certificates go last, alphabetically. */
export function sortNewestFirst(certs: CertificateFile[]): CertificateFile[] {
  return [...certs].sort((a, b) => {
    const da = certificateDate(a)?.iso;
    const db = certificateDate(b)?.iso;
    if (da && db) return db.localeCompare(da) || a.title.localeCompare(b.title);
    if (da) return -1;
    if (db) return 1;
    return a.title.localeCompare(b.title);
  });
}
