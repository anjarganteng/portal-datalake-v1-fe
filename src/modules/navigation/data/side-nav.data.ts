import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export let sideNavSections: SideNavSection[] = [
    {
        text: 'Antasena Form',
        items: ['an']
    },
    {
        text: 'Lps Form',
        items: ['lps']
    },
    {
        text: 'BOT Form',
        items: ['bot']
    },
    {
        text: 'Parameter Form',
        items: ['par']
    },
    {
        text: 'Log & Processing',
        items: ['log']
    },
    {
        text: 'User Management',
        items: ["user"]
    }
];

export let sideNavItems: SideNavItems = {
    an: {
        text: 'ANTASENA',
        submenu: [
            {
                text: 'Entry Form',
                submenu: [
                    {
                        text: 'Aset Antar Kantor',
                        link: '/anasetkantor',
                    },
                    {
                        text: 'Aset Lainnya',
                        link: '/anasetlainnya',
                    },
                    {
                        text: 'Liabilitas Antar Kantor',
                        link: '/anliabantarkantor',
                    },
                    {
                        text: 'Liabilitas Lainnya',
                        link: '/anliablainnya',
                    },
                    {
                        text: 'Penempatan Bank Indonesia',
                        link: '/anpbi',
                    },
                    {
                        text: 'Penempatan Bank Lain',
                        link: '/anpbl',
                    },
                    {
                        text: 'Setoran Jaminan',
                        link: '/ansetoranjaminan',
                    },
                    {
                        text: 'Penyisihan Penghapusan Aktiva',
                        link: '/an-ppa',
                    },
                    {
                        text: 'Pihak Lawan',
                        link: '/an-pihak-lawan',
                    },
                    {
                        text: 'Proyeksi Arus Kas Kbu',
                        link: '/an-aruskaskbu'
                    },
                    {
                        text: 'Proyeksi Arus Kas Rpp',
                        link: '/an-aruskas'
                    },
                ]
            },
            {
                text: 'Upload Antasena',
                link: '/anuploadfiles',
            }
        ],
    },

    lps: {
        text: 'LPS',
        submenu: [
            {
                text: 'Entry Form',
                submenu: [
                    {
                        text: 'Cashback',
                        link: '/an-cashback',
                    },
                    {
                        text: 'CIF JOIN',
                        link: '/an-cif-join',
                    },
                    {
                        text: 'Duplicated CIF',
                        link: '/an-duplicated-cif',
                    },
                    {
                        text: 'Fraud Nasabah',
                        link: '/an-fraudnasabah',
                    },
                    {
                        text: 'Master CIF',
                        link: '/an-master-cif',
                    },
                    {
                        text: 'Master QQ',
                        link: '/an-master-qq',
                    },
                    {
                        text: 'Pemegang Kuasa',
                        link: '/an-pemegangkuasa',
                    },
                ]
            },
            {
                text: 'Upload Lps',
                link: '/anuploadlps',
            },
	        {
             	text: 'Validation Master Cif',
                link: '/an-validation-log',
            }
        ]
    },

    bot: {
        text: 'BOT',
        submenu: [
            {
                text: 'Entry Form',
                submenu: [
                    {
                        text: 'Summary Adjustment',
                        link: '/an-summary-adjustment',
                    },
                    {
                        text: 'Adjustment THB',
                        link: '/an-adjustment-thb',
                    },
                    {
                        text: 'COA',
                        link: '/an-coa-bot',
                    },
                    {
                        text: 'Reverse Repo Support',
                        link: '/an-reverse-repo-support'
                    },
                    {
                        text: 'Wesel',
                        link: '/an-wesel'
                    },
                    {
                        text: 'Bilyet',
                        link: '/an-bilyet'
                    },
                    {
                        text: 'Loan',
                        link: '/an-loan'
                    },
                    {
                        text: 'Irrevocable Lc',
                        link: '/an-irrevocable-lc'
                    },
                    {
                        text: 'Bank Guarantee',
                        link: '/an-bank-guarantee'
                    },
                    {
                        text: 'KPMM',
                        link: '/an-kpmm'
                    },
                    {
                        text: 'Securities',
                        link: '/an-securities'
                    },
                    {
                        text: 'Intercompany Transaction Kbank',
                        link: '/an-intercompany-transaction-kbank'
                    },
                    {
                        text: 'Intercompany Transaction Group',
                        link: '/an-intercompany-transaction-group'
                    },
                    {
                        text: 'Map Loan Type',
                        link: '/an-map-loan-type'
                    },
                    {
                        text: 'Investment Net',
                        link: '/an-investment-net'
                    },
                    {
                        text: 'Key Management Personal',
                        submenu: [
                        {
                            text: 'Short Term Employee Benefits',
                            link: '/an-short-term-employee-benefits'
                        }, 
                        {
                            text: 'Post Employment Benefits Employee Id',
                            link: '/an-post-employment-benefits-employee-id'
                        }, 
                        {
                            text: 'Post Employment Benefits',
                            link: '/an-post-employment-benefits'
                        }, 
                        {
                            text: 'Other Benefits Paid',
                            link: '/an-other-benefits-paid'
                        }
                      ]
                    },
                    {
                        text: 'Funding Concentration Interbank',
                        link: '/an-funding-concentration-interbank'
                    },
                    {
                        text: 'CIF to FI',
                        link: '/an-cif-to-fi'
                    },
                    {
                        text: 'Deferred Tax',
                        link: '/an-deferred-tax'
                    }
                ]
            },
            {
                text: 'Upload BOT',
                link: '/anuploadbot',
            }
        ]
    },

    par: {
        text: 'PARAMETER',
        submenu: [
            {
                text: 'Entry Form',
                submenu: [
                    {
                        text: 'Bunga Lps',
                        link: '/anlps',
                    },
                    {
                        text: 'Cabang Pelapor',
                        link: '/ancabangpelapor',
                    },
                    {
                        text: 'Cif Dikecualikan',
                        link: '/ancifdikecualikan',
                    },
                    {
                        text: 'COA Parent',
                        link: '/an-coa'
                    },
                    {
                        text: 'Counter Rate Sbk',
                        link: '/anratesbk',
                    },
                    {
                        text: 'Counter Rate Sbs',
                        link: '/anratesbs',
                    },
                    {
                        text: 'Gol Pemilik Individu',
                        link: '/angolpemilik',
                    },
                    {
                        text: 'Gol Pihak Lawan',
                        link: '/an-gol-pihak-lawan'
                    },
                    {
                        text: 'Hapus Buku',
                        link: '/anhapusbuku',
                    },
                    {
                        text: 'Kode Transaksi Kas Valas',
                        link: '/ankasvalas',
                    },
                    {
                        text: 'Kode Transaksi Lainnya',
                        link: '/ankodetransaksi',
                    },
                    {
                        text: 'Kurs',
                        link: '/ankurs',
                    },
                    {
                        text: 'Limit Simpanan',
                        link: '/an-limit-simpanan',
                    },
                    {
                        text: 'Mapping Agunan Baru Lama',
                        link: '/an-no-agunan'
                    },
                    {
                        text: 'Mapping Fasilitas Agunan',
                        link: '/an-slik-agunan-lama'
                    },
                    {
                        text: 'Mapping Kode Agunan',
                        link: '/ankodeagunan',
                    },
                    {
                        text: 'Mapping NCD',
                        link: '/anmappingncd',
                    },
                    {
                        text: 'Mapping Rek Baru Lama',
                        link: '/anrekslik',
                    },
                    {
                        text: 'MDR',
                        link: '/anmdr',
                    },
                    {
                        text: 'Parameter Arus Kas',
                        link: '/an-param-aruskas'
                    },
                    {
                        text: 'Pengecualian Kode Agunan',
                        link: '/an-pengecualian-kode-agunan'
                    },
                    {
                        text: 'Pihak Terkait',
                        link: '/anpihakterkait',
                    },
                    {
                        text: 'User ID ATM',
                        link: '/anatm',
                    },   
                ]
            },
            {
                text: 'Upload Parameter',
                link: '/anuploadparameter',
            }
        ]
    },
        
    log: {
        text: 'LOG & PROCESSING',
        submenu: [
            {
                text: 'ANTASENA',
                submenu: [
                    {
                        text: 'Regenerate Log',
                        link: '/anregeneratelog', 
                    },
                    {
                        text: 'Process',
                        submenu: [
                            {
                                text: 'Ingest GL Manual',
                                link: '/an-proses-umum',
                            },
                            {
                                text: 'Ingest Suku Bunga Harian',
                                link: '/an-proses-dw-sukubunga',
                            },
                            {
                                text: 'Ingest Portal Datalake',
                                link: '/an-proses-portal-datalake',
                            },
                        ]
                    },
                ]
            },
            {
                text: 'BOT',
                submenu: [
                {
                    text: 'Process',
                    submenu: [
                    {
                        text: 'Generate GL BOT Manual',
                        link: '/an-generate-gl-bot'
                    }
                    ]
                }
                ]
            }    


        ]
    },

    user: {
        text: 'Settings',
        submenu: [
            {
                text: 'Users',
                link: '/an-application-users',
            },
            {
                text: 'Roles',
                link: '/an-application-roles',
            },
            {
                text: "Privileges",
                link: '/an-privileges'
            },
            {
                text: 'Branch',
                link: '/an-application-branch',
            }
        ],
    },

};

