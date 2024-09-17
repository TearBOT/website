import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "ミンスー", // Min-Soo in Katakana
  initials: "MSK",
  url: "https://www.msk-pro.com/jp",
  location: "東京都 江戸川区", // Tokyo, Edogawa City in Japanese
  description1:
    "ソフトウェア & バックエンドエンジニア", // Software & Backend Engineer in Japanese
  summary1: "私はスキルのあるバックエンドエンジニアです。私の豊富な経験はフランスと韓国、日本での高度なプロジェクトに及びます。", // Summary in Japanese
  summary2: "Python、Golang、C#などのさまざまなプログラミング言語における技術的専門知識は、複雑な問題をエlegantな解決策に変える力を与えてくれます。", // Summary in Japanese
  summary3: "私はバックエンド開発に情熱を持っており、新しい解決策を見つけたり、システムの信頼性を向上させたり、革新を推進したりします。多言語に堪能で常に自分の視野を広げる意欲があり、前向きなチームや変革的なプロジェクトに貢献することに専念しています。", // Summary in Japanese
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFWRxjIuPk3yQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699471383178?e=1732147200&v=beta&t=pusrToLYr0otIfN4B_pzuqVS_PCs7_LiCex2n6vCrao",
  spokenLanguages: [
    "フランス語 - ネイティブ", // French - Native in Japanese
    "英語 - 流暢", // English - Fluent in Japanese
    "日本語 - ビジネス", // Japanese - Business in Japanese
    "韓国語 - ビジネス", // Korean - Business in Japanese
    "スペイン語 - 日常", // Spanish - Daily in Japanese
  ],
  hobbies: [
    "サイクリング", // Cycling in Japanese
    "ボルダリング", // Bouldering in Japanese
    "ゴルフ", // Golf in Japanese
    "水泳", // Swimming in Japanese
    "アート", // Art in Japanese
    "アニメ & マンガ", // Anime & Manga in Japanese
    "料理", // Cooking in Japanese
    "DIY", // DIY in Japanese
    "ピアノ", // Piano in Japanese
  ],
  skillsLanguages: [
    "Python",
    "Golang",
    "C#",
    "Bash",
  ],
  skillsArchitecture: [
    "AWS",
    "GCP",
    "REST API",
    "バッチ処理", // Batch Processing in Japanese
    "バックエンド & クラウド", // Backend & Cloud in Japanese
    "デザインパターン", // Design Patterns in Japanese
    "マイクロサービス", // Micro Services in Japanese
  ],
  skillsDevops: [
    "Terraform",
    "Docker",
    "CI/CD",
    "Makefile",
    "Git",
  ],
  skillsSoft: [
    "プロアクティブ", // Pro-Active in Japanese
    "適応性", // Adaptibility in Japanese
    "機能的視点", // Functional view in Japanese
    "自律", // Autonomous in Japanese
    "リーダーシップ", // Leadership in Japanese
    "SCRUMアジャイル", // SCRUM Agile in Japanese
    "KANBAN",
    "XP",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "ホーム" }, // Home in Japanese
  ],
  contact: {
    social: {
      Japanese: {
        name: "Japanese",
        url: "/jp",
        icon: Icons.globe,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/min-soo-ko/",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "ADインタラクティブ", // AD Interactive in Japanese
      badges: ["Python", "OpenAI", "M365 Copilot"],
      location: "札幌, 日本, 東京から勤務", // Sapporo, JAPAN, Working from Tokyo in Japanese
      title: "エンジニア", // Engineer in Japanese
      logoUrl: "https://image.en-gage.net/image/logo/018001/logo_0000018333.jpg?width=300",
      start: "2024年4月", // April 2024 in Japanese
      end: "現在", // Present in Japanese
      description:
        "OCR、音声認識、音声からテキストへの変換、チャットボットの作成、自動データ収集、データベース管理を含むAIプロジェクトの開発、保守、管理。", // Description in Japanese
    },
    {
      company: "OpenSense",
      badges: ["Python", "Golang", "AWS", "GCP"],
      location: "パリ, フランス", // Paris, FRANCE in Japanese
      title: "シニアエンジニア", // Senior Engineer in Japanese
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQI8aDiaCmZYmRUOX7hZoUHxhIXdOik6Jbw&s",
      start: "2021年3月", // March 2021 in Japanese
      end: "2022年3月", // March 2022 in Japanese
      description:
        "複数のプロバイダーを含む最先端の旅行パッケージソリューションの開発と保守、パフォーマンス最適化、信頼性向上、コスト削減を実現しながら、会社内の品質基準を継続的に引き上げるための最新アーキテクチャ原則の実装。", // Description in Japanese
    },
    {
      company: "イノヴァティックテクノロジーズ", // Innovatic Technologies in Japanese
      badges: ["Python", "C#", "Azure", "OCR"],
      location: "ヴェルサイユ, フランス", // Versailles, FRANCE in Japanese
      title: "ミッドレベルエンジニア", // Mid-level Engineer in Japanese
      logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQG1wPZyIG8bBg/company-logo_200_200/company-logo_200_200/0/1630566001714/inovatic_logo?e=2147483647&v=beta&t=jqKc710XacOGN6E1DdUo0zGKmTwSOBqBAJfE1JGBFyE",
      start: "2023年1月", // January 2023 in Japanese
      end: "2023年6月", // June 2023 in Japanese
      description:
        "PDFファイルを読み取り、内容をエクセルファイルに分類するOCRを使用したデスクトップアプリケーション。", // Description in Japanese
    },
    {
      company: "Drive Innov",
      badges: ["C#", "Unity", "Python"],
      location: "リヨン, フランス, パリから勤務", // Lyon, FRANCE, Worked from Paris in Japanese
      title: "エンジニア", // Engineer in Japanese
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpK3uzTmDLMHmTc4cvnAJDTh0JUAFfX7KtiA&s",
      start: "2017年1月", // January 2017 in Japanese
      end: "2019年3月", // March 2019 in Japanese
      description:
        "すべての固定電話から迷惑電話をブロックするためにSCRUM手法を利用した革新的なソリューションの開発。", // Description in Japanese
    },
    {
      company: "Future Systems kr.",
      badges: ["Python", "C", "Bash"],
      location: "ソウル, 韓国", // Seoul, South Korea in Japanese
      title: "インターン", // Intern in Japanese
      logoUrl: "https://future.systems/wp-content/themes/futuresystems_2022/inc/img/sticker/Sticker_07.png",
      start: "2016年7月", // July 2016 in Japanese
      end: "2016年12月", // December 2016 in Japanese
      description:
        "Python & Bashでのテスト自動化、C & Bashでのワークフロー自動化、SNMP2cからSNMP3への移行。", // Description in Japanese
    }
  ],
  education: [
    {
      school: "EPITECHパリの修士号", // MASTER DEGREE at EPITECH Paris in Japanese
      href: "https://www.epitech.eu/programme-grande-ecole-informatique/",
      degree: "PGEプログラム - ソフトウェア工学", // PGE Program - In Software Engineering in Japanese
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJpKFsqsGunlF3KsE9BwOIaaAz_VeztqEwvAJ9I_BVnAIfZyQj_iSYFngU2sjI6u8UQg&usqp=CAU"
    },
    {
      school: "ブロックポートの学士号", // BACHELOR College at Brockport in Japanese
      href: "https://www.brockport.edu/",
      degree: "N.Y.S. USA - コンピュータサイエンス", // N.Y.S. USA - Computer Science in Japanese
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6a2jzllKvx_OHAa8kxwI9_tYFsWL4W-yfA&s"
    },
    {
      school: "EPITECHパリの学士号", // BACHELOR DEGREE at EPITECH Paris in Japanese
      href: "https://www.epitech.eu/programme-grande-ecole-informatique/",
      degree: "PGEプログラム - ソフトウェア工学", // PGE Program - In Software Engineering in Japanese
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJpKFsqsGunlF3KsE9BwOIaaAz_VeztqEwvAJ9I_BVnAIfZyQj_iSYFngU2sjI6u8UQg&usqp=CAU"
    },
  ],
  educationManagement: [
    {
      school: "DiginamicでのITプロジェクトマネジメントの修士号", // MASTER DEGREE in IT Project Management at Diginamic in Japanese
      href: "https://www.diginamic.fr/",
      degree: "モンペリエ - マネジメント", // Montpellier - Management in Japanese
      logoUrl: "https://i0.wp.com/www.diginamic.fr/wp-content/uploads/job-manager-uploads/company_logo/2016/11/diginamic_logo_RS_3.png?fit=945%2C945&ssl=1"
    }
  ],
  sideProjects: [
    {
      school: "トレード", // Traid in Japanese
      href: "/",
      degree: "ファイナンスプロジェクト", // Finance Project in Japanese
      logoUrl: ""
    },
    {
      school: "アイテムリーダー", // ItemReader in Japanese
      href: "/",
      degree: "OCRアイテムリーダーからJsonへ", // OCR item reader to Json in Japanese
      logoUrl: ""
    },
    {
      school: "レリックトレーダー", // RelicTrader in Japanese
      href: "/",
      degree: "OCRアイテムをチェックして、最良のものを選択", // OCR items and check online to select the best one in Japanese
      logoUrl: ""
    },
    {
      school: "ハグルマ", // Haguruma in Japanese
      href: "/",
      degree: "OCRライブ翻訳", // OCR live translation in Japanese
      logoUrl: ""
    }
  ],
  certification: [],
  nextCertification: [
    {
      school: "JLPT N1",
      href: "https://www.jlpt.jp/e/",
      degree: "日本語能力試験 N1", // Proficiency in Japanese in Japanese
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5W2mUvrnwKyhFZcFVO0rtelLTfVXtO-g9bg&s"
    },
    {
      school: "AWS AIクラウド実践者", // AWS AI Cloud Practitioner in Japanese
      href: "https://aws.amazon.com/certification/certified-ai-practitioner/",
      degree: "AWS AIサービスの能力", // Proficiency in AWS AI services in Japanese
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR4sWGfuHCmHvYGFZVQvgRWI1CGQMSVVN2g&s"
    },
  ],
} as const;