import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/auth/login",
  },
  {
    path: "an-deferred-tax",
    loadChildren: () =>
      import("modules/an-deferred-tax/an-deferred-tax-routing.module").then(
        (m) => m.AnDeferredTaxRoutingModule
      ),
  },
  {
    path: "an-cif-to-fi",
    loadChildren: () =>
      import("modules/an-cif-to-fi/an-cif-to-fi-routing.module").then(
        (m) => m.AnCifToFiRoutingModule
      ),
  },
  {
    path: "an-funding-concentration-interbank",
    loadChildren: () =>
      import("modules/an-funding-concentration-interbank/an-funding-concentration-interbank-routing.module").then(
        (m) => m.AnFundingConcentrationInterbankRoutingModule
      ),
  },
  {
    path: "an-other-benefits-paid",
    loadChildren: () =>
      import("modules/an-other-benefits-paid/an-other-benefits-paid-routing.module").then(
        (m) => m.AnOtherBenefitsPaidRoutingModule
      ),
  },
  {
    path: "an-post-employment-benefits",
    loadChildren: () =>
      import("modules/an-post-employment-benefits/an-post-employment-benefits-routing.module").then(
        (m) => m.AnPostEmploymentBenefitsRoutingModule
      ),
  },
  {
    path: "an-post-employment-benefits-employee-id",
    loadChildren: () =>
      import("modules/an-post-employment-benefits-employee-id/an-post-employment-benefits-employee-id-routing.module").then(
        (m) => m.AnPostEmploymentBenefitsEmployeeIdRoutingModule
      ),
  },
  {
    path: "an-short-term-employee-benefits",
    loadChildren: () =>
      import("modules/an-short-term-employee-benefits/an-short-term-employee-benefits-routing.module").then(
        (m) => m.AnShortTermEmployeeBenefitsRoutingModule
      ),
  },
  {
    path: "an-investment-net",
    loadChildren: () =>
      import("modules/an-investment-net/an-investment-net-routing.module").then(
        (m) => m.AnInvestmentNetRoutingModule
      ),
  },
  {
    path: "an-map-loan-type",
    loadChildren: () =>
      import("modules/an-map-loan-type/an-map-loan-type-routing.module").then(
        (m) => m.AnMapLoanTypeRoutingModule
      ),
  },
  {
    path: "an-intercompany-transaction-group",
    loadChildren: () =>
      import("modules/an-intercompany-transaction-group/an-intercompany-transaction-group-routing.module").then(
        (m) => m.AnIntercompanyTransactionGroupRoutingModule
      ),
  },
  {
    path: "an-intercompany-transaction-kbank",
    loadChildren: () =>
      import("modules/an-intercompany-transaction-kbank/an-intercompany-transaction-kbank-routing.module").then(
        (m) => m.AnIntercompanyTransactionKbankRoutingModule
      ),
  },
  {
    path: "an-securities",
    loadChildren: () =>
      import("modules/an-securities/an-securities-routing.module").then(
        (m) => m.AnSecuritiesRoutingModule
      ),
  },
  {
    path: "an-bank-guarantee",
    loadChildren: () =>
      import("modules/an-bank-guarantee/an-bank-guarantee-routing.module").then(
        (m) => m.AnBankGuaranteeRoutingModule
      ),
  },
  {
    path: "an-irrevocable-lc",
    loadChildren: () =>
      import("modules/an-irrevocable-lc/an-irrevocable-lc-routing.module").then(
        (m) => m.AnIrrevocableLcRoutingModule
      ),
  },
  {
    path: "an-loan",
    loadChildren: () =>
      import("modules/an-loan/an-loan-routing.module").then(
        (m) => m.AnLoanRoutingModule
      ),
  },
  {
    path: "an-bilyet",
    loadChildren: () =>
      import("modules/an-bilyet/an-bilyet-routing.module").then(
        (m) => m.AnBilyetRoutingModule
      ),
  },
  {
    path: "an-generate-gl-bot",
    loadChildren: () =>
      import("modules/an-generate-gl-bot/an-generate-gl-bot-routing.module").then(
        (m) => m.AnGenerateGlBotRoutingModule
      ),
  },
  {
    path: "an-kpmm",
    loadChildren: () =>
      import("modules/an-kpmm/an-kpmm-routing.module").then(
        (m) => m.AnKpmmRoutingModule
      ),
  },
  {
    path: "an-wesel",
    loadChildren: () =>
      import("modules/an-wesel/an-wesel-routing.module").then(
        (m) => m.AnWeselRoutingModule
      ),
  },
  {
    path: "an-reverse-repo-support",
    loadChildren: () =>
      import("modules/an-reverse-repo-support/an-reverse-repo-support-routing.module").then(
        (m) => m.AnReverseRepoSupportRoutingModule
      ),
  },
  {
    path: "an-coa-bot",
    loadChildren: () =>
      import("modules/an-coa-bot/an-coa-bot-routing.module").then(
        (m) => m.AnCoaBotRoutingModule
      ),
  },
  {
    path: "an-adjustment-thb",
    loadChildren: () =>
      import("modules/an-adjustment-thb/an-adjustment-thb-routing.module").then(
        (m) => m.AnAdjustmentThbRoutingModule
      ),
  },
  {
    path: "an-summary-adjustment",
    loadChildren: () =>
      import("modules/an-summary-adjustment/an-summary-adjustment-routing.module").then(
        (m) => m.AnSummaryAdjustmentRoutingModule
      ),
  },
  {
    path: "anuploadbot",
    loadChildren: () =>
      import("modules/an-uploadbot/an-uploadbot-routing.module").then(
        (m) => m.AnUploadbotRoutingModule
      ),
  },
  {
    path: "an-aruskaskbu",
    loadChildren: () =>
      import("modules/an-aruskaskbu/an-aruskaskbu-routing.module").then(
        (m) => m.AnAruskaskbuRoutingModule
      ),
  },
  {
    path: "an-aruskas",
    loadChildren: () =>
      import("modules/an-aruskas/an-aruskas-routing.module").then(
        (m) => m.AnAruskasRoutingModule
      ),
  },
  {
    path: "an-param-aruskas",
    loadChildren: () =>
      import("modules/an-param-aruskas/an-param-aruskas-routing.module").then(
        (m) => m.AnParamAruskasRoutingModule
      ),
  },
  {
    path: "an-limit-simpanan",
    loadChildren: () =>
      import("modules/an-limit-simpanan/an-limit-simpanan-routing.module").then(
        (m) => m.AnLimitSimpananRoutingModule
      ),
  },
  {
    path: "an-cashback",
    loadChildren: () =>
      import("modules/an-cashback/an-cashback-routing.module").then(
        (m) => m.AnCashbackRoutingModule
      ),
  },
  {
    path: "an-cif-join",
    loadChildren: () =>
      import("modules/an-cif-join/an-cif-join-routing.module").then(
        (m) => m.AnCifJoinRoutingModule
      ),
  },
  {
    path: "an-master-cif",
    loadChildren: () =>
      import("modules/an-master-cif/an-master-cif-routing.module").then(
        (m) => m.AnMasterCifRoutingModule
      ),
  },
  {
    path: "an-master-qq",
    loadChildren: () =>
      import("modules/an-master-qq/an-master-qq-routing.module").then(
        (m) => m.AnMasterQqRoutingModule
      ),
  },
  {
    path: "an-duplicated-cif",
    loadChildren: () =>
      import("modules/an-duplicated-cif/an-duplicated-cif-routing.module").then(
        (m) => m.AnDuplicatedCifRoutingModule
      ),
  },
  {
    path: "an-validation-log",
    loadChildren: () =>
      import("modules/an-validation-log/an-validation-log-routing.module").then(
        (m) => m.AnValidationLogRoutingModule
      ),
  },
  {
    path: "an-nasabahjoin",
    loadChildren: () =>
      import("modules/an-nasabahjoin/an-nasabahjoin-routing.module").then(
        (m) => m.AnNasabahjoinRoutingModule
      ),
  },
  {
    path: "an-fraudnasabah",
    loadChildren: () =>
      import("modules/an-fraudnasabah/an-fraudnasabah-routing.module").then(
        (m) => m.AnFraudnasabahRoutingModule
      ),
  },
  {
    path: "anuploadlps",
    loadChildren: () =>
      import("modules/an-uploadlps/an-uploadlps-routing.module").then(
        (m) => m.AnUploadlpsRoutingModule
      ),
  },
  {
    path: "anuploadparameter",
    loadChildren: () =>
      import("modules/an-uploadparameter/an-uploadparameter-routing.module").then(
        (m) => m.AnUploadparameterRoutingModule
      ),
  },
  {
    path: "an-pemegangkuasa",
    loadChildren: () =>
      import("modules/an-pemegangkuasa/an-pemegangkuasa-routing.module").then(
        (m) => m.AnPemegangkuasaRoutingModule
      ),
  },
  {
    path: "aninfraapmk",
    loadChildren: () =>
      import("modules/an-infra-apmk/an-infra-apmk-routing.module").then(
        (m) => m.AnInfraApmkRoutingModule
      ),
  },
  {
    path: "an-ppa",
    loadChildren: () =>
      import("modules/an-ppa/an-ppa-routing.module").then(
        (m) => m.AnPpaRoutingModule
      ),
  },
  {
    path: "an-pts",
    loadChildren: () =>
      import("modules/an-pts/an-pts-routing.module").then(
        (m) => m.AnPtsRoutingModule
      ),
  },
  {
    path: "an-pengecualian-kode-agunan",
    loadChildren: () =>
      import("modules/an-pengecualian-kode-agunan/an-pengecualian-kode-agunan-routing.module").then(
        (m) => m.AnPengecualianKodeAgunanRoutingModule
      ),
  },
  {
    path: "an-gol-pihak-lawan",
    loadChildren: () =>
      import("modules/an-gol-pihak-lawan/an-gol-pihak-lawan-routing.module").then(
        (m) => m.AnGolPihakLawanRoutingModule
      ),
  },
  {
    path: "an-coa",
    loadChildren: () =>
      import("modules/an-coa/an-coa-routing.module").then(
        (m) => m.AnCoaRoutingModule
      ),
  },
  {
    path: "an-pihak-lawan",
    loadChildren: () =>
      import("modules/an-pihak-lawan/an-pihak-lawan-routing.module").then(
        (m) => m.AnPihakLawanRoutingModule
      ),
  },
  {
    path: "an-proses-dw-sukubunga",
    loadChildren: () =>
      import("modules/an-proses-dw-sukubunga/an-proses-dw-sukubunga-routing.module").then(
        (m) => m.AnProsesDwSukubungaRoutingModule
      ),
  },
  {
    path: "an-proses-portal-datalake",
    loadChildren: () =>
      import("modules/an-proses-portal-datalake/an-proses-portal-datalake-routing.module").then(
        (m) => m.AnProsesPortalDatalakeRoutingModule
      ),
  },
  {
    path: "welcome-page",
    loadChildren: () =>
      import("modules/welcome-page/welcome-page-routing.module").then(
        (m) => m.WelcomePageRoutingModule
      ),
  },
  {
    path: "anmdr",
    loadChildren: () =>
      import("modules/an-mdr/an-mdr-routing.module").then(
        (m) => m.AnMdrRoutingModule
      ),
  },
  {
    path: "ankodetransaksi",
    loadChildren: () =>
      import("modules/an-kodetransaksi/an-kodetransaksi-routing.module").then(
        (m) => m.AnKodetransaksiRoutingModule
      ),
  },
  {
    path: "anrekdikecualikan",
    loadChildren: () =>
      import(
        "modules/an-rekdikecualikan/an-rekdikecualikan-routing.module"
      ).then((m) => m.AnRekdikecualikanRoutingModule),
  },
  {
    path: "anrefantasena",
    loadChildren: () =>
      import("modules/an-refantasena/an-refantasena-routing.module").then(
        (m) => m.AnRefantasenaRoutingModule
      ),
  },
  {
    path: "anatm",
    loadChildren: () =>
      import("modules/an-atm/an-atm-routing.module").then(
        (m) => m.AnAtmRoutingModule
      ),
  },
  {
    path: "anrekslik",
    loadChildren: () =>
      import("modules/an-rekslik/an-rekslik-routing.module").then(
        (m) => m.AnRekslikRoutingModule
      ),
  },
  {
    path: "anasetkantor",
    loadChildren: () =>
      import(
        "modules/an-asetantarkantor/an-asetantarkantor-routing.module"
      ).then((m) => m.AnAsetantarkantorRoutingModule),
  },
  {
    path: "anasetlainnya",
    loadChildren: () =>
      import("modules/an-asetlainnya/an-asetlainnya-routing.module").then(
        (m) => m.AnAsetlainnyaRoutingModule
      ),
  },
  {
    path: "ansetoranjaminan",
    loadChildren: () =>
      import("modules/an-setoranjaminan/an-setoranjaminan-routing.module").then(
        (m) => m.AnSetoranjaminanRoutingModule
      ),
  },
  {
    path: "anliabantarkantor",
    loadChildren: () =>
      import(
        "modules/an-liabantarkantor/an-liabantarkantor-routing.module"
      ).then((m) => m.AnLiabantarkantorRoutingModule),
  },
  {
    path: "anliablainnya",
    loadChildren: () =>
      import("modules/an-liablainnya/an-liablainnya-routing.module").then(
        (m) => m.AnLiablainnyaRoutingModule
      ),
  },
  {
    path: "anmappingncd",
    loadChildren: () =>
      import("modules/an-mapping-ncd/an-mapping-ncd-routing.module").then(
        (m) => m.AnMappingNcdRoutingModule
      ),
  },
  {
    path: "ancifdikecualikan",
    loadChildren: () =>
      import("modules/an-cifdikecualikan/an-cifdikecualikan-routing.module").then(
        (m) => m.AnCifdikecualikanRoutingModule
      ),
  },
  {
    path: "angolpemilik",
    loadChildren: () =>
      import("modules/an-golpemilik/an-golpemilik-routing.module").then(
        (m) => m.AnGolpemilikRoutingModule
      ),
  },
  {
    path: "an-slik-agunan-lama",
    loadChildren: () =>
      import("modules/an-slik-agunan-lama/an-slik-agunan-lama-routing.module").then(
        (m) => m.AnSlikAgunanLamaRoutingModule
      ),
  },
  {
    path: "an-slik-agunan-baru",
    loadChildren: () =>
      import("modules/an-slik-agunan-baru/an-slik-agunan-baru-routing.module").then(
        (m) => m.AnSlikAgunanBaruRoutingModule
      ),
  },
  {
    path: "an-no-agunan",
    loadChildren: () =>
      import("modules/an-no-agunan/an-no-agunan-routing.module").then(
        (m) => m.AnNoAgunanRoutingModule
      ),
  },
  {
    path: "anpihakterkait",
    loadChildren: () =>
      import("modules/an-pihakterkait/an-pihakterkait-routing.module").then(
        (m) => m.AnPihakterkaitRoutingModule
      ),
  },
  {
    path: "anhapusbuku",
    loadChildren: () =>
      import("modules/an-hapusbuku/an-hapusbuku-routing.module").then(
        (m) => m.AnHapusbukuRoutingModule
      ),
  },
  {
    path: "ankasvalas",
    loadChildren: () =>
      import("modules/an-kasvalas/an-kasvalas-routing.module").then(
        (m) => m.AnKasvalasRoutingModule
      ),
  },
  {
    path: "ankurs",
    loadChildren: () =>
      import("modules/an-kurs/an-kurs-routing.module").then(
        (m) => m.AnKursRoutingModule
      ),
  },
  {
    path: "ankodeagunan",
    loadChildren: () =>
      import("modules/an-kodeagunan/an-kodeagunan-routing.module").then(
        (m) => m.AnKodeagunanRoutingModule
      ),
  },
  {
    path: "anratesbk",
    loadChildren: () =>
      import("modules/an-ratesbk/an-ratesbk-routing.module").then(
        (m) => m.AnRatesbkRoutingModule
      ),
  },
  {
    path: "anratesbs",
    loadChildren: () =>
      import("modules/an-ratesbs/an-ratesbs-routing.module").then(
        (m) => m.AnRatesbsRoutingModule
      ),
  },
  {
    path: "anati",
    loadChildren: () =>
      import("modules/an-ati/an-ati-routing.module").then(
        (m) => m.AnAtiRoutingModule
      ),
  },
  {
    path: "anatb",
    loadChildren: () =>
      import("modules/an-atb/an-atb-routing.module").then(
        (m) => m.AnAtbRoutingModule
      ),
  },
  {
    path: "anuploadfiles",
    loadChildren: () =>
      import("modules/an-uploadfile/an-uploadfile-routing.module").then(
        (m) => m.AnUploadfileRoutingModule
      ),
  },
  {
    path: "ancabangpelapor",
    loadChildren: () =>
      import("modules/an-cabangpelapor/an-cabangpelapor-routing.module").then(
        (m) => m.AnCabangpelaporRoutingModule
      ),
  },
  {
      path: 'anpbi',
      loadChildren: () =>
          import('modules/an-pbi/an-pbi-routing.module').then(
              (m) => m.AnPbiRoutingModule
          ),
  },
  {
    path: 'anpbl',
    loadChildren: () =>
        import('modules/an-pbl/an-pbl-routing.module').then(
            (m) => m.AnPblRoutingModule
        ),
  },
  {
    path: 'anlps',
    loadChildren: () =>
        import('modules/an-lps/an-lps-routing.module').then(
            (m) => m.AnLpsRoutingModule
        ),
  },
  {
    path: "anregeneratelog",
    loadChildren: () =>
      import("modules/an-regeneratelog/an-regeneratelog-routing.module").then(
        (m) => m.AnRegeneratelogRoutingModule
      ),
  },
  {
    path: "an-application-users",
    loadChildren: () =>
      import(
        "modules/an-application-users/an-application-users-routing.module"
      ).then((m) => m.AnApplicationUsersRoutingModule),
  },
  {
    path: "an-application-branch",
    loadChildren: () =>
      import(
        "modules/an-application-branch/an-application-branch-routing.module"
      ).then((m) => m.AnApplicationBranchRoutingModule),
  },
  {
    path: "an-application-roles",
    loadChildren: () =>
      import(
        "modules/an-application-roles/an-application-roles-routing.module"
      ).then((m) => m.AnApplicationRolesRoutingModule),
  },
  {
    path: "an-menu",
    loadChildren: () =>
      import("modules/an-menu/an-menu-routing.module").then(
        (m) => m.AnMenuRoutingModule
      ),
  },
  {
    path: "an-proses-umum",
    loadChildren: () =>
      import("modules/an-proses-umum/an-proses-umum-routing.module").then(
        (m) => m.AnProsesUmumRoutingModule
      ),
  },
  {
    path: "an-proses-manual",
    loadChildren: () =>
      import("modules/an-proses-manual/an-proses-manual-routing.module").then(
        (m) => m.AnProsesManualRoutingModule
      ),
  },
  {
    path: "an-privileges",
    loadChildren: () =>
      import("modules/an-privileges/an-privileges-routing.module").then(
        (m) => m.AnPrivilegesRoutingModule
      ),
  },
  {
    path: "charts",
    loadChildren: () =>
      import("modules/charts/charts-routing.module").then(
        (m) => m.ChartsRoutingModule
      ),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("modules/dashboard/dashboard-routing.module").then(
        (m) => m.DashboardRoutingModule
      ),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("modules/auth/auth-routing.module").then(
        (m) => m.AuthRoutingModule
      ),
  },
  {
    path: "error",
    loadChildren: () =>
      import("modules/error/error-routing.module").then(
        (m) => m.ErrorRoutingModule
      ),
  },
  {
    path: "tables",
    loadChildren: () =>
      import("modules/tables/tables-routing.module").then(
        (m) => m.TablesRoutingModule
      ),
  },
  {
    path: "version",
    loadChildren: () =>
      import("modules/utility/utility-routing.module").then(
        (m) => m.UtilityRoutingModule
      ),
  },
  {
    path: "**",
    pathMatch: "full",
    loadChildren: () =>
      import("modules/error/error-routing.module").then(
        (m) => m.ErrorRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
