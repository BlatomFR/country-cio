/**
 * Country interface used to gather all the information about a country
 */
export interface Country {
  ENName: CountryName
  ISO2: ISO2Code
  ISO3166: ISO3166
  CIO: CIOCountryCode
  Code: number
}

/**
 * Returns useful infos about a country
 * Is extremely useful when navigating between codes and ISO norms
 * @param input The codes we have from a country
 * @param from The info type we have from a country
 */
export const getCountryInfos = (
  input: string | number,
  from: "ENName" | "ISO2" | "ISO3166" | "CIO" | "Code"
): Country => {
  let returnedCountry
  const defaultCountry = {
    ENName: "NaN",
    ISO2: "NaN",
    ISO3166: "NaN",
    CIO: "NaN",
    Code: -1,
  } as Country
  switch (from) {
    case "ENName":
      returnedCountry = CountryList.find((country) => country.ENName === input)
      if (returnedCountry) return returnedCountry
      else return defaultCountry
    case "ISO2":
      returnedCountry = CountryList.find((country) => country.ISO2 === input)
      if (returnedCountry) return returnedCountry
      else return defaultCountry
    case "ISO3166":
      returnedCountry = CountryList.find((country) => country.ISO3166 === input)
      if (returnedCountry) return returnedCountry
      else return defaultCountry
    case "CIO":
      returnedCountry = CountryList.find((country) => country.CIO === input)
      if (returnedCountry) return returnedCountry
      else return defaultCountry
    case "Code":
      returnedCountry = CountryList.find((country) => country.Code === input)
      if (returnedCountry) return returnedCountry
      else return defaultCountry
  }
}

export const CountryList = [
  { ENName: "Afghanistan", ISO2: "AF", ISO3166: "AFG", CIO: "AFG", Code: 4 },
  { ENName: "Albania", ISO2: "AL", ISO3166: "ALB", CIO: "ALB", Code: 8 },
  { ENName: "Algeria", ISO2: "DZ", ISO3166: "DZA", CIO: "ALG", Code: 12 },
  {
    ENName: "American Samoa",
    ISO2: "AS",
    ISO3166: "ASM",
    CIO: "ASA",
    Code: 16,
  },
  { ENName: "Andorra", ISO2: "AD", ISO3166: "AND", CIO: "AND", Code: 20 },
  { ENName: "Angola", ISO2: "AO", ISO3166: "AGO", CIO: "ANG", Code: 24 },
  { ENName: "Anguilla", ISO2: "AI", ISO3166: "AIA", CIO: "NaN", Code: 660 },
  { ENName: "Antarctica", ISO2: "AQ", ISO3166: "ATA", CIO: "NaN", Code: 10 },
  {
    ENName: "Antigua and Barbuda",
    ISO2: "AG",
    ISO3166: "ATG",
    CIO: "ANT",
    Code: 28,
  },
  { ENName: "Argentina", ISO2: "AR", ISO3166: "ARG", CIO: "ARG", Code: 32 },
  { ENName: "Armenia", ISO2: "AM", ISO3166: "ARM", CIO: "ARM", Code: 51 },
  { ENName: "Aruba", ISO2: "AW", ISO3166: "ABW", CIO: "ARU", Code: 533 },
  { ENName: "Australia", ISO2: "AU", ISO3166: "AUS", CIO: "AUS", Code: 36 },
  { ENName: "Austria", ISO2: "AT", ISO3166: "AUT", CIO: "AUT", Code: 40 },
  { ENName: "Azerbaijan", ISO2: "AZ", ISO3166: "AZE", CIO: "AZE", Code: 31 },
  {
    ENName: "Bahamas (the)",
    ISO2: "BS",
    ISO3166: "BHS",
    CIO: "BAH",
    Code: 44,
  },
  { ENName: "Bahrain", ISO2: "BH", ISO3166: "BHR", CIO: "BRN", Code: 48 },
  { ENName: "Bangladesh", ISO2: "BD", ISO3166: "BGD", CIO: "BAN", Code: 50 },
  { ENName: "Barbados", ISO2: "BB", ISO3166: "BRB", CIO: "BAR", Code: 52 },
  { ENName: "Belarus", ISO2: "BY", ISO3166: "BLR", CIO: "BLR", Code: 112 },
  { ENName: "Belgium", ISO2: "BE", ISO3166: "BEL", CIO: "BEL", Code: 56 },
  { ENName: "Belize", ISO2: "BZ", ISO3166: "BLZ", CIO: "BIZ", Code: 84 },
  { ENName: "Benin", ISO2: "BJ", ISO3166: "BEN", CIO: "BEN", Code: 204 },
  { ENName: "Bermuda", ISO2: "BM", ISO3166: "BMU", CIO: "BER", Code: 60 },
  { ENName: "Bhutan", ISO2: "BT", ISO3166: "BTN", CIO: "BHU", Code: 64 },
  {
    ENName: "Bolivia (Plurinational State of)",
    ISO2: "BO",
    ISO3166: "BOL",
    CIO: "BOL",
    Code: 68,
  },
  {
    ENName: "Bonaire, Sint Eustatius and Saba",
    ISO2: "BQ",
    ISO3166: "BES",
    CIO: "NaN",
    Code: 535,
  },
  {
    ENName: "Bosnia and Herzegovina",
    ISO2: "BA",
    ISO3166: "BIH",
    CIO: "BIH",
    Code: 70,
  },
  { ENName: "Botswana", ISO2: "BW", ISO3166: "BWA", CIO: "BOT", Code: 72 },
  {
    ENName: "Bouvet Island",
    ISO2: "BV",
    ISO3166: "BVT",
    CIO: "NaN",
    Code: 74,
  },
  { ENName: "Brazil", ISO2: "BR", ISO3166: "BRA", CIO: "BRA", Code: 76 },
  {
    ENName: "British Indian Ocean Territory (the)",
    ISO2: "IO",
    ISO3166: "IOT",
    CIO: "NaN",
    Code: 86,
  },
  {
    ENName: "Brunei Darussalam",
    ISO2: "BN",
    ISO3166: "BRN",
    CIO: "BRU",
    Code: 96,
  },
  { ENName: "Bulgaria", ISO2: "BG", ISO3166: "BGR", CIO: "BUL", Code: 100 },
  {
    ENName: "Burkina Faso",
    ISO2: "BF",
    ISO3166: "BFA",
    CIO: "BUR",
    Code: 854,
  },
  { ENName: "Burundi", ISO2: "BI", ISO3166: "BDI", CIO: "BDI", Code: 108 },
  { ENName: "Cabo Verde", ISO2: "CV", ISO3166: "CPV", CIO: "CPV", Code: 132 },
  { ENName: "Cambodia", ISO2: "KH", ISO3166: "KHM", CIO: "CAM", Code: 116 },
  { ENName: "Cameroon", ISO2: "CM", ISO3166: "CMR", CIO: "CMR", Code: 120 },
  { ENName: "Canada", ISO2: "CA", ISO3166: "CAN", CIO: "CAN", Code: 124 },
  {
    ENName: "Cayman Islands (the)",
    ISO2: "KY",
    ISO3166: "CYM",
    CIO: "CAY",
    Code: 136,
  },
  {
    ENName: "Central African Republic (the)",
    ISO2: "CF",
    ISO3166: "CAF",
    CIO: "CAF",
    Code: 140,
  },
  { ENName: "Chad", ISO2: "TD", ISO3166: "TCD", CIO: "CHA", Code: 148 },
  { ENName: "Chile", ISO2: "CL", ISO3166: "CHL", CIO: "CHI", Code: 152 },
  { ENName: "China", ISO2: "CN", ISO3166: "CHN", CIO: "CHN", Code: 156 },
  {
    ENName: "Christmas Island",
    ISO2: "CX",
    ISO3166: "CXR",
    CIO: "NaN",
    Code: 162,
  },
  {
    ENName: "Cocos (Keeling) Islands (the)",
    ISO2: "CC",
    ISO3166: "CCK",
    CIO: "NaN",
    Code: 166,
  },
  { ENName: "Colombia", ISO2: "CO", ISO3166: "COL", CIO: "COL", Code: 170 },
  {
    ENName: "Comoros (the)",
    ISO2: "KM",
    ISO3166: "COM",
    CIO: "COM",
    Code: 174,
  },
  {
    ENName: "Congo (the Democratic Republic of the)",
    ISO2: "CD",
    ISO3166: "COD",
    CIO: "COD",
    Code: 180,
  },
  {
    ENName: "Congo (the)",
    ISO2: "CG",
    ISO3166: "COG",
    CIO: "CGO",
    Code: 178,
  },
  {
    ENName: "Cook Islands (the)",
    ISO2: "CK",
    ISO3166: "COK",
    CIO: "COK",
    Code: 184,
  },
  { ENName: "Costa Rica", ISO2: "CR", ISO3166: "CRI", CIO: "CRC", Code: 188 },
  { ENName: "Croatia", ISO2: "HR", ISO3166: "HRV", CIO: "CRO", Code: 191 },
  { ENName: "Cuba", ISO2: "CU", ISO3166: "CUB", CIO: "CUB", Code: 192 },
  { ENName: "Curaçao", ISO2: "CW", ISO3166: "CUW", CIO: "NaN", Code: 531 },
  { ENName: "Cyprus", ISO2: "CY", ISO3166: "CYP", CIO: "CYP", Code: 196 },
  { ENName: "Czechia", ISO2: "CZ", ISO3166: "CZE", CIO: "CZE", Code: 203 },
  {
    ENName: "Côte d'Ivoire",
    ISO2: "CI",
    ISO3166: "CIV",
    CIO: "CIV",
    Code: 384,
  },
  { ENName: "Denmark", ISO2: "DK", ISO3166: "DNK", CIO: "DEN", Code: 208 },
  { ENName: "Djibouti", ISO2: "DJ", ISO3166: "DJI", CIO: "DJI", Code: 262 },
  { ENName: "Dominica", ISO2: "DM", ISO3166: "DMA", CIO: "DMA", Code: 212 },
  {
    ENName: "Dominican Republic (the)",
    ISO2: "DO",
    ISO3166: "DOM",
    CIO: "DOM",
    Code: 214,
  },
  { ENName: "Ecuador", ISO2: "EC", ISO3166: "ECU", CIO: "ECU", Code: 218 },
  { ENName: "Egypt", ISO2: "EG", ISO3166: "EGY", CIO: "EGY", Code: 818 },
  {
    ENName: "El Salvador",
    ISO2: "SV",
    ISO3166: "SLV",
    CIO: "ESA",
    Code: 222,
  },
  {
    ENName: "Equatorial Guinea",
    ISO2: "GQ",
    ISO3166: "GNQ",
    CIO: "GEQ",
    Code: 226,
  },
  { ENName: "Eritrea", ISO2: "ER", ISO3166: "ERI", CIO: "ERI", Code: 232 },
  { ENName: "Estonia", ISO2: "EE", ISO3166: "EST", CIO: "EST", Code: 233 },
  { ENName: "Eswatini", ISO2: "SZ", ISO3166: "SWZ", CIO: "SWZ", Code: 748 },
  { ENName: "Ethiopia", ISO2: "ET", ISO3166: "ETH", CIO: "ETH", Code: 231 },
  {
    ENName: "Falkland Islands (the) [Malvinas]",
    ISO2: "FK",
    ISO3166: "FLK",
    CIO: "NaN",
    Code: 238,
  },
  {
    ENName: "Faroe Islands (the)",
    ISO2: "FO",
    ISO3166: "FRO",
    CIO: "NaN",
    Code: 234,
  },
  { ENName: "Fiji", ISO2: "FJ", ISO3166: "FJI", CIO: "FIJ", Code: 242 },
  { ENName: "Finland", ISO2: "FI", ISO3166: "FIN", CIO: "FIN", Code: 246 },
  { ENName: "France", ISO2: "FR", ISO3166: "FRA", CIO: "FRA", Code: 250 },
  {
    ENName: "French Guiana",
    ISO2: "GF",
    ISO3166: "GUF",
    CIO: "NaN",
    Code: 254,
  },
  {
    ENName: "French Polynesia",
    ISO2: "PF",
    ISO3166: "PYF",
    CIO: "NaN",
    Code: 258,
  },
  {
    ENName: "French Southern Territories (the)",
    ISO2: "TF",
    ISO3166: "ATF",
    CIO: "NaN",
    Code: 260,
  },
  { ENName: "Gabon", ISO2: "GA", ISO3166: "GAB", CIO: "GAB", Code: 266 },
  {
    ENName: "Gambia (the)",
    ISO2: "GM",
    ISO3166: "GMB",
    CIO: "GAM",
    Code: 270,
  },
  { ENName: "Georgia", ISO2: "GE", ISO3166: "GEO", CIO: "GEO", Code: 268 },
  { ENName: "Germany", ISO2: "DE", ISO3166: "DEU", CIO: "GER", Code: 276 },
  { ENName: "Ghana", ISO2: "GH", ISO3166: "GHA", CIO: "GHA", Code: 288 },
  { ENName: "Gibraltar", ISO2: "GI", ISO3166: "GIB", CIO: "NaN", Code: 292 },
  { ENName: "Greece", ISO2: "GR", ISO3166: "GRC", CIO: "GRE", Code: 300 },
  { ENName: "Greenland", ISO2: "GL", ISO3166: "GRL", CIO: "NaN", Code: 304 },
  { ENName: "Grenada", ISO2: "GD", ISO3166: "GRD", CIO: "GRN", Code: 308 },
  { ENName: "Guadeloupe", ISO2: "GP", ISO3166: "GLP", CIO: "NaN", Code: 312 },
  { ENName: "Guam", ISO2: "GU", ISO3166: "GUM", CIO: "GUM", Code: 316 },
  { ENName: "Guatemala", ISO2: "GT", ISO3166: "GTM", CIO: "GUA", Code: 320 },
  { ENName: "Guernsey", ISO2: "GG", ISO3166: "GGY", CIO: "NaN", Code: 831 },
  { ENName: "Guinea", ISO2: "GN", ISO3166: "GIN", CIO: "GUI", Code: 324 },
  {
    ENName: "Guinea-Bissau",
    ISO2: "GW",
    ISO3166: "GNB",
    CIO: "GBS",
    Code: 624,
  },
  { ENName: "Guyana", ISO2: "GY", ISO3166: "GUY", CIO: "GUY", Code: 328 },
  { ENName: "Haiti", ISO2: "HT", ISO3166: "HTI", CIO: "HAI", Code: 332 },
  {
    ENName: "Heard Island and McDonald Islands",
    ISO2: "HM",
    ISO3166: "HMD",
    CIO: "NaN",
    Code: 334,
  },
  {
    ENName: "Holy See (the)",
    ISO2: "VA",
    ISO3166: "VAT",
    CIO: "NaN",
    Code: 336,
  },
  { ENName: "Honduras", ISO2: "HN", ISO3166: "HND", CIO: "HON", Code: 340 },
  { ENName: "Hong Kong", ISO2: "HK", ISO3166: "HKG", CIO: "HKG", Code: 344 },
  { ENName: "Hungary", ISO2: "HU", ISO3166: "HUN", CIO: "HUN", Code: 348 },
  { ENName: "Iceland", ISO2: "IS", ISO3166: "ISL", CIO: "ISL", Code: 352 },
  { ENName: "India", ISO2: "IN", ISO3166: "IND", CIO: "IND", Code: 356 },
  { ENName: "Indonesia", ISO2: "ID", ISO3166: "IDN", CIO: "INA", Code: 360 },
  {
    ENName: "Iran (Islamic Republic of)",
    ISO2: "IR",
    ISO3166: "IRN",
    CIO: "IRI",
    Code: 364,
  },
  { ENName: "Iraq", ISO2: "IQ", ISO3166: "IRQ", CIO: "IRQ", Code: 368 },
  { ENName: "Ireland", ISO2: "IE", ISO3166: "IRL", CIO: "IRL", Code: 372 },
  {
    ENName: "Isle of Man",
    ISO2: "IM",
    ISO3166: "IMN",
    CIO: "NaN",
    Code: 833,
  },
  { ENName: "Israel", ISO2: "IL", ISO3166: "ISR", CIO: "ISR", Code: 376 },
  { ENName: "Italy", ISO2: "IT", ISO3166: "ITA", CIO: "ITA", Code: 380 },
  { ENName: "Jamaica", ISO2: "JM", ISO3166: "JAM", CIO: "JAM", Code: 388 },
  { ENName: "Japan", ISO2: "JP", ISO3166: "JPN", CIO: "JPN", Code: 392 },
  { ENName: "Jersey", ISO2: "JE", ISO3166: "JEY", CIO: "NaN", Code: 832 },
  { ENName: "Jordan", ISO2: "JO", ISO3166: "JOR", CIO: "JOR", Code: 400 },
  { ENName: "Kazakhstan", ISO2: "KZ", ISO3166: "KAZ", CIO: "KAZ", Code: 398 },
  { ENName: "Kenya", ISO2: "KE", ISO3166: "KEN", CIO: "KEN", Code: 404 },
  { ENName: "Kiribati", ISO2: "KI", ISO3166: "KIR", CIO: "KIR", Code: 296 },
  {
    ENName: "Korea (the Democratic People's Republic of)",
    ISO2: "KP",
    ISO3166: "PRK",
    CIO: "PRK",
    Code: 408,
  },
  {
    ENName: "Korea (the Republic of)",
    ISO2: "KR",
    ISO3166: "KOR",
    CIO: "KOR",
    Code: 410,
  },
  { ENName: "Kuwait", ISO2: "KW", ISO3166: "KWT", CIO: "KUW", Code: 414 },
  { ENName: "Kyrgyzstan", ISO2: "KG", ISO3166: "KGZ", CIO: "KGZ", Code: 417 },
  {
    ENName: "Lao People's Democratic Republic (the)",
    ISO2: "LA",
    ISO3166: "LAO",
    CIO: "LAO",
    Code: 418,
  },
  { ENName: "Latvia", ISO2: "LV", ISO3166: "LVA", CIO: "LAT", Code: 428 },
  { ENName: "Lebanon", ISO2: "LB", ISO3166: "LBN", CIO: "LBN", Code: 422 },
  { ENName: "Lesotho", ISO2: "LS", ISO3166: "LSO", CIO: "LES", Code: 426 },
  { ENName: "Liberia", ISO2: "LR", ISO3166: "LBR", CIO: "LBR", Code: 430 },
  { ENName: "Libya", ISO2: "LY", ISO3166: "LBY", CIO: "LBA", Code: 434 },
  {
    ENName: "Liechtenstein",
    ISO2: "LI",
    ISO3166: "LIE",
    CIO: "LIE",
    Code: 438,
  },
  { ENName: "Lithuania", ISO2: "LT", ISO3166: "LTU", CIO: "LTU", Code: 440 },
  { ENName: "Luxembourg", ISO2: "LU", ISO3166: "LUX", CIO: "LUX", Code: 442 },
  { ENName: "Macao", ISO2: "MO", ISO3166: "MAC", CIO: "NaN", Code: 446 },
  { ENName: "Madagascar", ISO2: "MG", ISO3166: "MDG", CIO: "MAD", Code: 450 },
  { ENName: "Malawi", ISO2: "MW", ISO3166: "MWI", CIO: "MAW", Code: 454 },
  { ENName: "Malaysia", ISO2: "MY", ISO3166: "MYS", CIO: "MAS", Code: 458 },
  { ENName: "Maldives", ISO2: "MV", ISO3166: "MDV", CIO: "MDV", Code: 462 },
  { ENName: "Mali", ISO2: "ML", ISO3166: "MLI", CIO: "MLI", Code: 466 },
  { ENName: "Malta", ISO2: "MT", ISO3166: "MLT", CIO: "MLT", Code: 470 },
  {
    ENName: "Marshall Islands (the)",
    ISO2: "MH",
    ISO3166: "MHL",
    CIO: "MHL",
    Code: 584,
  },
  { ENName: "Martinique", ISO2: "MQ", ISO3166: "MTQ", CIO: "NaN", Code: 474 },
  { ENName: "Mauritania", ISO2: "MR", ISO3166: "MRT", CIO: "MTN", Code: 478 },
  { ENName: "Mauritius", ISO2: "MU", ISO3166: "MUS", CIO: "MRI", Code: 480 },
  { ENName: "Mayotte", ISO2: "YT", ISO3166: "MYT", CIO: "NaN", Code: 175 },
  { ENName: "Mexico", ISO2: "MX", ISO3166: "MEX", CIO: "MEX", Code: 484 },
  {
    ENName: "Micronesia (Federated States of)",
    ISO2: "FM",
    ISO3166: "FSM",
    CIO: "FSM",
    Code: 583,
  },
  {
    ENName: "Moldova (the Republic of)",
    ISO2: "MD",
    ISO3166: "MDA",
    CIO: "MDA",
    Code: 498,
  },
  { ENName: "Monaco", ISO2: "MC", ISO3166: "MCO", CIO: "MON", Code: 492 },
  { ENName: "Mongolia", ISO2: "MN", ISO3166: "MNG", CIO: "MGL", Code: 496 },
  { ENName: "Montenegro", ISO2: "ME", ISO3166: "MNE", CIO: "MNE", Code: 499 },
  { ENName: "Montserrat", ISO2: "MS", ISO3166: "MSR", CIO: "NaN", Code: 500 },
  { ENName: "Morocco", ISO2: "MA", ISO3166: "MAR", CIO: "MAR", Code: 504 },
  { ENName: "Mozambique", ISO2: "MZ", ISO3166: "MOZ", CIO: "MOZ", Code: 508 },
  { ENName: "Myanmar", ISO2: "MM", ISO3166: "MMR", CIO: "MYA", Code: 104 },
  { ENName: "Namibia", ISO2: "NA", ISO3166: "NAM", CIO: "NAM", Code: 516 },
  { ENName: "Nauru", ISO2: "NR", ISO3166: "NRU", CIO: "NRU", Code: 520 },
  { ENName: "Nepal", ISO2: "NP", ISO3166: "NPL", CIO: "NEP", Code: 524 },
  {
    ENName: "Netherlands (the)",
    ISO2: "NL",
    ISO3166: "NLD",
    CIO: "NED",
    Code: 528,
  },
  {
    ENName: "New Caledonia",
    ISO2: "NC",
    ISO3166: "NCL",
    CIO: "NaN",
    Code: 540,
  },
  {
    ENName: "New Zealand",
    ISO2: "NZ",
    ISO3166: "NZL",
    CIO: "NZL",
    Code: 554,
  },
  { ENName: "Nicaragua", ISO2: "NI", ISO3166: "NIC", CIO: "NCA", Code: 558 },
  {
    ENName: "Niger (the)",
    ISO2: "NE",
    ISO3166: "NER",
    CIO: "NIG",
    Code: 562,
  },
  { ENName: "Nigeria", ISO2: "NG", ISO3166: "NGA", CIO: "NGR", Code: 566 },
  { ENName: "Niue", ISO2: "NU", ISO3166: "NIU", CIO: "NaN", Code: 570 },
  {
    ENName: "Norfolk Island",
    ISO2: "NF",
    ISO3166: "NFK",
    CIO: "NaN",
    Code: 574,
  },
  {
    ENName: "Northern Mariana Islands (the)",
    ISO2: "MP",
    ISO3166: "MNP",
    CIO: "NaN",
    Code: 580,
  },
  { ENName: "Norway", ISO2: "NO", ISO3166: "NOR", CIO: "NOR", Code: 578 },
  { ENName: "Oman", ISO2: "OM", ISO3166: "OMN", CIO: "OMA", Code: 512 },
  { ENName: "Pakistan", ISO2: "PK", ISO3166: "PAK", CIO: "PAK", Code: 586 },
  { ENName: "Palau", ISO2: "PW", ISO3166: "PLW", CIO: "PLW", Code: 585 },
  {
    ENName: "Palestine, State of",
    ISO2: "PS",
    ISO3166: "PSE",
    CIO: "PLE",
    Code: 275,
  },
  { ENName: "Panama", ISO2: "PA", ISO3166: "PAN", CIO: "PAN", Code: 591 },
  {
    ENName: "Papua New Guinea",
    ISO2: "PG",
    ISO3166: "PNG",
    CIO: "PNG",
    Code: 598,
  },
  { ENName: "Paraguay", ISO2: "PY", ISO3166: "PRY", CIO: "PAR", Code: 600 },
  { ENName: "Peru", ISO2: "PE", ISO3166: "PER", CIO: "PER", Code: 604 },
  {
    ENName: "Philippines (the)",
    ISO2: "PH",
    ISO3166: "PHL",
    CIO: "PHI",
    Code: 608,
  },
  { ENName: "Pitcairn", ISO2: "PN", ISO3166: "PCN", CIO: "NaN", Code: 612 },
  { ENName: "Poland", ISO2: "PL", ISO3166: "POL", CIO: "POL", Code: 616 },
  { ENName: "Portugal", ISO2: "PT", ISO3166: "PRT", CIO: "POR", Code: 620 },
  {
    ENName: "Puerto Rico",
    ISO2: "PR",
    ISO3166: "PRI",
    CIO: "PUR",
    Code: 630,
  },
  { ENName: "Qatar", ISO2: "QA", ISO3166: "QAT", CIO: "QAT", Code: 634 },
  {
    ENName: "Republic of North Macedonia",
    ISO2: "MK",
    ISO3166: "MKD",
    CIO: "MKD",
    Code: 807,
  },
  { ENName: "Romania", ISO2: "RO", ISO3166: "ROU", CIO: "ROU", Code: 642 },
  {
    ENName: "Russian Federation (the)",
    ISO2: "RU",
    ISO3166: "RUS",
    CIO: "RUS",
    Code: 643,
  },
  { ENName: "Rwanda", ISO2: "RW", ISO3166: "RWA", CIO: "RWA", Code: 646 },
  { ENName: "Réunion", ISO2: "RE", ISO3166: "REU", CIO: "NaN", Code: 638 },
  {
    ENName: "Saint Barthélemy",
    ISO2: "BL",
    ISO3166: "BLM",
    CIO: "NaN",
    Code: 652,
  },
  {
    ENName: "Saint Helena, Ascension and Tristan da Cunha",
    ISO2: "SH",
    ISO3166: "SHN",
    CIO: "NaN",
    Code: 654,
  },
  {
    ENName: "Saint Kitts and Nevis",
    ISO2: "KN",
    ISO3166: "KNA",
    CIO: "SKN",
    Code: 659,
  },
  {
    ENName: "Saint Lucia",
    ISO2: "LC",
    ISO3166: "LCA",
    CIO: "LCA",
    Code: 662,
  },
  {
    ENName: "Saint Martin (French part)",
    ISO2: "MF",
    ISO3166: "MAF",
    CIO: "NaN",
    Code: 663,
  },
  {
    ENName: "Saint Pierre and Miquelon",
    ISO2: "PM",
    ISO3166: "SPM",
    CIO: "NaN",
    Code: 666,
  },
  {
    ENName: "Saint Vincent and the Grenadines",
    ISO2: "VC",
    ISO3166: "VCT",
    CIO: "VIN",
    Code: 670,
  },
  { ENName: "Samoa", ISO2: "WS", ISO3166: "WSM", CIO: "SAM", Code: 882 },
  { ENName: "San Marino", ISO2: "SM", ISO3166: "SMR", CIO: "SMR", Code: 674 },
  {
    ENName: "Sao Tome and Principe",
    ISO2: "ST",
    ISO3166: "STP",
    CIO: "STP",
    Code: 678,
  },
  {
    ENName: "Saudi Arabia",
    ISO2: "SA",
    ISO3166: "SAU",
    CIO: "KSA",
    Code: 682,
  },
  { ENName: "Senegal", ISO2: "SN", ISO3166: "SEN", CIO: "SEN", Code: 686 },
  { ENName: "Serbia", ISO2: "RS", ISO3166: "SRB", CIO: "SRB", Code: 688 },
  { ENName: "Seychelles", ISO2: "SC", ISO3166: "SYC", CIO: "SEY", Code: 690 },
  {
    ENName: "Sierra Leone",
    ISO2: "SL",
    ISO3166: "SLE",
    CIO: "SLE",
    Code: 694,
  },
  { ENName: "Singapore", ISO2: "SG", ISO3166: "SGP", CIO: "SGP", Code: 702 },
  {
    ENName: "Sint Maarten (Dutch part)",
    ISO2: "SX",
    ISO3166: "SXM",
    CIO: "NaN",
    Code: 534,
  },
  { ENName: "Slovakia", ISO2: "SK", ISO3166: "SVK", CIO: "SVK", Code: 703 },
  { ENName: "Slovenia", ISO2: "SI", ISO3166: "SVN", CIO: "SLO", Code: 705 },
  {
    ENName: "Solomon Islands",
    ISO2: "SB",
    ISO3166: "SLB",
    CIO: "SOL",
    Code: 90,
  },
  { ENName: "Somalia", ISO2: "SO", ISO3166: "SOM", CIO: "SOM", Code: 706 },
  {
    ENName: "South Africa",
    ISO2: "ZA",
    ISO3166: "ZAF",
    CIO: "RSA",
    Code: 710,
  },
  {
    ENName: "South Georgia and the South Sandwich Islands",
    ISO2: "GS",
    ISO3166: "SGS",
    CIO: "NaN",
    Code: 239,
  },
  {
    ENName: "South Sudan",
    ISO2: "SS",
    ISO3166: "SSD",
    CIO: "SSD",
    Code: 728,
  },
  { ENName: "Spain", ISO2: "ES", ISO3166: "ESP", CIO: "ESP", Code: 724 },
  { ENName: "Sri Lanka", ISO2: "LK", ISO3166: "LKA", CIO: "SRI", Code: 144 },
  {
    ENName: "Sudan (the)",
    ISO2: "SD",
    ISO3166: "SDN",
    CIO: "SUD",
    Code: 729,
  },
  { ENName: "Suriname", ISO2: "SR", ISO3166: "SUR", CIO: "SUR", Code: 740 },
  {
    ENName: "Svalbard and Jan Mayen",
    ISO2: "SJ",
    ISO3166: "SJM",
    CIO: "NaN",
    Code: 744,
  },
  { ENName: "Sweden", ISO2: "SE", ISO3166: "SWE", CIO: "SWE", Code: 752 },
  {
    ENName: "Switzerland",
    ISO2: "CH",
    ISO3166: "CHE",
    CIO: "SUI",
    Code: 756,
  },
  {
    ENName: "Syrian Arab Republic",
    ISO2: "SY",
    ISO3166: "SYR",
    CIO: "SYR",
    Code: 760,
  },
  {
    ENName: "Taiwan (Province of China)",
    ISO2: "TW",
    ISO3166: "TWN",
    CIO: "TPE",
    Code: 158,
  },
  { ENName: "Tajikistan", ISO2: "TJ", ISO3166: "TJK", CIO: "TJK", Code: 762 },
  {
    ENName: "Tanzania, United Republic of",
    ISO2: "TZ",
    ISO3166: "TZA",
    CIO: "TAN",
    Code: 834,
  },
  { ENName: "Thailand", ISO2: "TH", ISO3166: "THA", CIO: "THA", Code: 764 },
  {
    ENName: "Timor-Leste",
    ISO2: "TL",
    ISO3166: "TLS",
    CIO: "TLS",
    Code: 626,
  },
  { ENName: "Togo", ISO2: "TG", ISO3166: "TGO", CIO: "TOG", Code: 768 },
  { ENName: "Tokelau", ISO2: "TK", ISO3166: "TKL", CIO: "NaN", Code: 772 },
  { ENName: "Tonga", ISO2: "TO", ISO3166: "TON", CIO: "TGA", Code: 776 },
  {
    ENName: "Trinidad and Tobago",
    ISO2: "TT",
    ISO3166: "TTO",
    CIO: "TTO",
    Code: 780,
  },
  { ENName: "Tunisia", ISO2: "TN", ISO3166: "TUN", CIO: "TUN", Code: 788 },
  { ENName: "Turkey", ISO2: "TR", ISO3166: "TUR", CIO: "TUR", Code: 792 },
  {
    ENName: "Turkmenistan",
    ISO2: "TM",
    ISO3166: "TKM",
    CIO: "TKM",
    Code: 795,
  },
  {
    ENName: "Turks and Caicos Islands (the)",
    ISO2: "TC",
    ISO3166: "TCA",
    CIO: "NaN",
    Code: 796,
  },
  { ENName: "Tuvalu", ISO2: "TV", ISO3166: "TUV", CIO: "TUV", Code: 798 },
  { ENName: "Uganda", ISO2: "UG", ISO3166: "UGA", CIO: "UGA", Code: 800 },
  { ENName: "Ukraine", ISO2: "UA", ISO3166: "UKR", CIO: "UKR", Code: 804 },
  {
    ENName: "United Arab Emirates (the)",
    ISO2: "AE",
    ISO3166: "ARE",
    CIO: "UAE",
    Code: 784,
  },
  {
    ENName: "United Kingdom of Great Britain and Northern Ireland (the)",
    ISO2: "GB",
    ISO3166: "GBR",
    CIO: "GBR",
    Code: 826,
  },
  {
    ENName: "United States Minor Outlying Islands (the)",
    ISO2: "UM",
    ISO3166: "UMI",
    CIO: "NaN",
    Code: 581,
  },
  {
    ENName: "United States of America (the)",
    ISO2: "US",
    ISO3166: "USA",
    CIO: "USA",
    Code: 840,
  },
  { ENName: "Uruguay", ISO2: "UY", ISO3166: "URY", CIO: "URU", Code: 858 },
  { ENName: "Uzbekistan", ISO2: "UZ", ISO3166: "UZB", CIO: "UZB", Code: 860 },
  { ENName: "Vanuatu", ISO2: "VU", ISO3166: "VUT", CIO: "VAN", Code: 548 },
  {
    ENName: "Venezuela (Bolivarian Republic of)",
    ISO2: "VE",
    ISO3166: "VEN",
    CIO: "VEN",
    Code: 862,
  },
  { ENName: "Viet Nam", ISO2: "VN", ISO3166: "VNM", CIO: "VIE", Code: 704 },
  {
    ENName: "Virgin Islands (British)",
    ISO2: "VG",
    ISO3166: "VGB",
    CIO: "IVB",
    Code: 92,
  },
  {
    ENName: "Virgin Islands (U.S.)",
    ISO2: "VI",
    ISO3166: "VIR",
    CIO: "ISV",
    Code: 850,
  },
  {
    ENName: "Wallis and Futuna",
    ISO2: "WF",
    ISO3166: "WLF",
    CIO: "NaN",
    Code: 876,
  },
  {
    ENName: "Western Sahara",
    ISO2: "EH",
    ISO3166: "ESH",
    CIO: "NaN",
    Code: 732,
  },
  { ENName: "Yemen", ISO2: "YE", ISO3166: "YEM", CIO: "YEM", Code: 887 },
  { ENName: "Zambia", ISO2: "ZM", ISO3166: "ZMB", CIO: "ZAM", Code: 894 },
  { ENName: "Zimbabwe", ISO2: "ZW", ISO3166: "ZWE", CIO: "ZIM", Code: 716 },
  {
    ENName: "Åland Islands",
    ISO2: "AX",
    ISO3166: "ALA",
    CIO: "NaN",
    Code: 248,
  },
] as Array<Country>

export type CIOCountryCode =
  | "AFG"
  | "ALB"
  | "ALG"
  | "AND"
  | "ANG"
  | "ANT"
  | "ARG"
  | "ARM"
  | "ARU"
  | "ASA"
  | "AUS"
  | "AUT"
  | "AZE"
  | "BAH"
  | "BAN"
  | "BAR"
  | "BDI"
  | "BEL"
  | "BEN"
  | "BER"
  | "BHU"
  | "BIH"
  | "BIZ"
  | "BLR"
  | "BOL"
  | "BOT"
  | "BRA"
  | "BRN"
  | "BRU"
  | "BUL"
  | "BUR"
  | "CAF"
  | "CAM"
  | "CAN"
  | "CAY"
  | "CGO"
  | "CHA"
  | "CHI"
  | "CHN"
  | "CIV"
  | "CMR"
  | "COD"
  | "COK"
  | "COL"
  | "COM"
  | "COR"
  | "CPV"
  | "CRC"
  | "CRO"
  | "CUB"
  | "CYP"
  | "CZE"
  | "DEN"
  | "DJI"
  | "DMA"
  | "DOM"
  | "ECU"
  | "EGY"
  | "ERI"
  | "ESA"
  | "ESP"
  | "EST"
  | "ETH"
  | "FIJ"
  | "FIN"
  | "FRA"
  | "FSM"
  | "GAB"
  | "GAM"
  | "GBR"
  | "GBS"
  | "GEO"
  | "GEQ"
  | "GER"
  | "GHA"
  | "GRE"
  | "GRN"
  | "GUA"
  | "GUI"
  | "GUM"
  | "GUY"
  | "HAI"
  | "HKG"
  | "HON"
  | "HUN"
  | "INA"
  | "IND"
  | "IRI"
  | "IRL"
  | "IRQ"
  | "ISL"
  | "ISR"
  | "ISV"
  | "ITA"
  | "IVB"
  | "JAM"
  | "JOR"
  | "JPN"
  | "KAZ"
  | "KEN"
  | "KGZ"
  | "KIR"
  | "KOS"
  | "KOR"
  | "KSA"
  | "KUW"
  | "LAO"
  | "LAT"
  | "LBA"
  | "LBN"
  | "LBR"
  | "LCA"
  | "LES"
  | "LIE"
  | "LTU"
  | "LUX"
  | "MAD"
  | "MAR"
  | "MAS"
  | "MAW"
  | "MDA"
  | "MDV"
  | "MEX"
  | "MGL"
  | "MHL"
  | "MKD"
  | "MLI"
  | "MLT"
  | "MNE"
  | "MON"
  | "MOZ"
  | "MRI"
  | "MTN"
  | "MYA"
  | "NAM"
  | "NCA"
  | "NED"
  | "NEP"
  | "NGR"
  | "NIG"
  | "NOR"
  | "NRU"
  | "NZL"
  | "OAR"
  | "OMA"
  | "PAK"
  | "PAN"
  | "PAR"
  | "PER"
  | "PHI"
  | "PLE"
  | "PLW"
  | "PNG"
  | "POL"
  | "POR"
  | "PRK"
  | "PUR"
  | "QAT"
  | "ROC"
  | "ROT"
  | "ROU"
  | "RSA"
  | "RUS"
  | "RWA"
  | "SAM"
  | "SEN"
  | "SEY"
  | "SGP"
  | "SKN"
  | "SLE"
  | "SLO"
  | "SMR"
  | "SOL"
  | "SOM"
  | "SRB"
  | "SRI"
  | "SSD"
  | "STP"
  | "SUD"
  | "SUI"
  | "SUR"
  | "SVK"
  | "SWE"
  | "SWZ"
  | "SYR"
  | "TAN"
  | "TGA"
  | "THA"
  | "TJK"
  | "TKM"
  | "TLS"
  | "TOG"
  | "TPE"
  | "TTO"
  | "TUN"
  | "TUR"
  | "TUV"
  | "UAE"
  | "UGA"
  | "UKR"
  | "URU"
  | "USA"
  | "UZB"
  | "VAN"
  | "VEN"
  | "VIE"
  | "VIN"
  | "YEM"
  | "ZAM"
  | "ZIM"
  | "NaN"

export type ISO2Code =
  | "AF"
  | "AL"
  | "DZ"
  | "AS"
  | "AD"
  | "AO"
  | "AI"
  | "AQ"
  | "AG"
  | "AR"
  | "AM"
  | "AW"
  | "AU"
  | "AT"
  | "AZ"
  | "BS"
  | "BH"
  | "BD"
  | "BB"
  | "BY"
  | "BE"
  | "BZ"
  | "BJ"
  | "BM"
  | "BT"
  | "BO"
  | "BQ"
  | "BA"
  | "BW"
  | "BV"
  | "BR"
  | "IO"
  | "BN"
  | "BG"
  | "BF"
  | "BI"
  | "CV"
  | "KH"
  | "CM"
  | "CA"
  | "KY"
  | "CF"
  | "TD"
  | "CL"
  | "CN"
  | "CX"
  | "CC"
  | "CO"
  | "KM"
  | "CD"
  | "CG"
  | "CK"
  | "CR"
  | "HR"
  | "CU"
  | "CW"
  | "CY"
  | "CZ"
  | "CI"
  | "DK"
  | "DJ"
  | "DM"
  | "DO"
  | "EC"
  | "EG"
  | "SV"
  | "GQ"
  | "ER"
  | "EE"
  | "SZ"
  | "ET"
  | "FK"
  | "FO"
  | "FJ"
  | "FI"
  | "FR"
  | "GF"
  | "PF"
  | "TF"
  | "GA"
  | "GM"
  | "GE"
  | "DE"
  | "GH"
  | "GI"
  | "GR"
  | "GL"
  | "GD"
  | "GP"
  | "GU"
  | "GT"
  | "GG"
  | "GN"
  | "GW"
  | "GY"
  | "HT"
  | "HM"
  | "VA"
  | "HN"
  | "HK"
  | "HU"
  | "IS"
  | "IN"
  | "ID"
  | "IR"
  | "IQ"
  | "IE"
  | "IM"
  | "IL"
  | "IT"
  | "JM"
  | "JP"
  | "JE"
  | "JO"
  | "KZ"
  | "KE"
  | "KI"
  | "KP"
  | "KR"
  | "KW"
  | "KG"
  | "LA"
  | "LV"
  | "LB"
  | "LS"
  | "LR"
  | "LY"
  | "LI"
  | "LT"
  | "LU"
  | "MO"
  | "MG"
  | "MW"
  | "MY"
  | "MV"
  | "ML"
  | "MT"
  | "MH"
  | "MQ"
  | "MR"
  | "MU"
  | "YT"
  | "MX"
  | "FM"
  | "MD"
  | "MC"
  | "MN"
  | "ME"
  | "MS"
  | "MA"
  | "MZ"
  | "MM"
  | "NA"
  | "NR"
  | "NP"
  | "NL"
  | "NC"
  | "NZ"
  | "NI"
  | "NE"
  | "NG"
  | "NU"
  | "NF"
  | "MP"
  | "NO"
  | "OM"
  | "PK"
  | "PW"
  | "PS"
  | "PA"
  | "PG"
  | "PY"
  | "PE"
  | "PH"
  | "PN"
  | "PL"
  | "PT"
  | "PR"
  | "QA"
  | "MK"
  | "RO"
  | "RU"
  | "RW"
  | "RE"
  | "BL"
  | "SH"
  | "KN"
  | "LC"
  | "MF"
  | "PM"
  | "VC"
  | "WS"
  | "SM"
  | "ST"
  | "SA"
  | "SN"
  | "RS"
  | "SC"
  | "SL"
  | "SG"
  | "SX"
  | "SK"
  | "SI"
  | "SB"
  | "SO"
  | "ZA"
  | "GS"
  | "SS"
  | "ES"
  | "LK"
  | "SD"
  | "SR"
  | "SJ"
  | "SE"
  | "CH"
  | "SY"
  | "TW"
  | "TJ"
  | "TZ"
  | "TH"
  | "TL"
  | "TG"
  | "TK"
  | "TO"
  | "TT"
  | "TN"
  | "TR"
  | "TM"
  | "TC"
  | "TV"
  | "UG"
  | "UA"
  | "AE"
  | "GB"
  | "UM"
  | "US"
  | "UY"
  | "UZ"
  | "VU"
  | "VE"
  | "VN"
  | "VG"
  | "VI"
  | "WF"
  | "EH"
  | "YE"
  | "ZM"
  | "ZW"
  | "AX"
  | "NaN"

export type ISO3166 =
  | "AFG"
  | "ALB"
  | "DZA"
  | "ASM"
  | "AND"
  | "AGO"
  | "AIA"
  | "ATA"
  | "ATG"
  | "ARG"
  | "ARM"
  | "ABW"
  | "AUS"
  | "AUT"
  | "AZE"
  | "BHS"
  | "BHR"
  | "BGD"
  | "BRB"
  | "BLR"
  | "BEL"
  | "BLZ"
  | "BEN"
  | "BMU"
  | "BTN"
  | "BOL"
  | "BES"
  | "BIH"
  | "BWA"
  | "BVT"
  | "BRA"
  | "IOT"
  | "BRN"
  | "BGR"
  | "BFA"
  | "BDI"
  | "CPV"
  | "KHM"
  | "CMR"
  | "CAN"
  | "CYM"
  | "CAF"
  | "TCD"
  | "CHL"
  | "CHN"
  | "CXR"
  | "CCK"
  | "COL"
  | "COM"
  | "COD"
  | "COG"
  | "COK"
  | "CRI"
  | "HRV"
  | "CUB"
  | "CUW"
  | "CYP"
  | "CZE"
  | "CIV"
  | "DNK"
  | "DJI"
  | "DMA"
  | "DOM"
  | "ECU"
  | "EGY"
  | "SLV"
  | "GNQ"
  | "ERI"
  | "EST"
  | "SWZ"
  | "ETH"
  | "FLK"
  | "FRO"
  | "FJI"
  | "FIN"
  | "FRA"
  | "GUF"
  | "PYF"
  | "ATF"
  | "GAB"
  | "GMB"
  | "GEO"
  | "DEU"
  | "GHA"
  | "GIB"
  | "GRC"
  | "GRL"
  | "GRD"
  | "GLP"
  | "GUM"
  | "GTM"
  | "GGY"
  | "GIN"
  | "GNB"
  | "GUY"
  | "HTI"
  | "HMD"
  | "VAT"
  | "HND"
  | "HKG"
  | "HUN"
  | "ISL"
  | "IND"
  | "IDN"
  | "IRN"
  | "IRQ"
  | "IRL"
  | "IMN"
  | "ISR"
  | "ITA"
  | "JAM"
  | "JPN"
  | "JEY"
  | "JOR"
  | "KAZ"
  | "KEN"
  | "KIR"
  | "PRK"
  | "KOR"
  | "KWT"
  | "KGZ"
  | "LAO"
  | "LVA"
  | "LBN"
  | "LSO"
  | "LBR"
  | "LBY"
  | "LIE"
  | "LTU"
  | "LUX"
  | "MAC"
  | "MDG"
  | "MWI"
  | "MYS"
  | "MDV"
  | "MLI"
  | "MLT"
  | "MHL"
  | "MTQ"
  | "MRT"
  | "MUS"
  | "MYT"
  | "MEX"
  | "FSM"
  | "MDA"
  | "MCO"
  | "MNG"
  | "MNE"
  | "MSR"
  | "MAR"
  | "MOZ"
  | "MMR"
  | "NAM"
  | "NRU"
  | "NPL"
  | "NLD"
  | "NCL"
  | "NZL"
  | "NIC"
  | "NER"
  | "NGA"
  | "NIU"
  | "NFK"
  | "MNP"
  | "NOR"
  | "OMN"
  | "PAK"
  | "PLW"
  | "PSE"
  | "PAN"
  | "PNG"
  | "PRY"
  | "PER"
  | "PHL"
  | "PCN"
  | "POL"
  | "PRT"
  | "PRI"
  | "QAT"
  | "MKD"
  | "ROU"
  | "RUS"
  | "RWA"
  | "REU"
  | "BLM"
  | "SHN"
  | "KNA"
  | "LCA"
  | "MAF"
  | "SPM"
  | "VCT"
  | "WSM"
  | "SMR"
  | "STP"
  | "SAU"
  | "SEN"
  | "SRB"
  | "SYC"
  | "SLE"
  | "SGP"
  | "SXM"
  | "SVK"
  | "SVN"
  | "SLB"
  | "SOM"
  | "ZAF"
  | "SGS"
  | "SSD"
  | "ESP"
  | "LKA"
  | "SDN"
  | "SUR"
  | "SJM"
  | "SWE"
  | "CHE"
  | "SYR"
  | "TWN"
  | "TJK"
  | "TZA"
  | "THA"
  | "TLS"
  | "TGO"
  | "TKL"
  | "TON"
  | "TTO"
  | "TUN"
  | "TUR"
  | "TKM"
  | "TCA"
  | "TUV"
  | "UGA"
  | "UKR"
  | "ARE"
  | "GBR"
  | "UMI"
  | "USA"
  | "URY"
  | "UZB"
  | "VUT"
  | "VEN"
  | "VNM"
  | "VGB"
  | "VIR"
  | "WLF"
  | "ESH"
  | "YEM"
  | "ZMB"
  | "ZWE"
  | "ALA"
  | "NaN"

export type CountryName =
  | "Afghanistan"
  | "Albania"
  | "Algeria"
  | "American Samoa"
  | "Andorra"
  | "Angola"
  | "Anguilla"
  | "Antarctica"
  | "Antigua and Barbuda"
  | "Argentina"
  | "Armenia"
  | "Aruba"
  | "Australia"
  | "Austria"
  | "Azerbaijan"
  | "Bahamas (the)"
  | "Bahrain"
  | "Bangladesh"
  | "Barbados"
  | "Belarus"
  | "Belgium"
  | "Belize"
  | "Benin"
  | "Bermuda"
  | "Bhutan"
  | "Bolivia (Plurinational State of)"
  | "Bonaire, Sint Eustatius and Saba"
  | "Bosnia and Herzegovina"
  | "Botswana"
  | "Bouvet Island"
  | "Brazil"
  | "British Indian Ocean Territory (the)"
  | "Brunei Darussalam"
  | "Bulgaria"
  | "Burkina Faso"
  | "Burundi"
  | "Cabo Verde"
  | "Cambodia"
  | "Cameroon"
  | "Canada"
  | "Cayman Islands (the)"
  | "Central African Republic (the)"
  | "Chad"
  | "Chile"
  | "China"
  | "Christmas Island"
  | "Cocos (Keeling) Islands (the)"
  | "Colombia"
  | "Comoros (the)"
  | "Congo (the Democratic Republic of the)"
  | "Congo (the)"
  | "Cook Islands (the)"
  | "Costa Rica"
  | "Croatia"
  | "Cuba"
  | "Curaçao"
  | "Cyprus"
  | "Czechia"
  | "Côte d'Ivoire"
  | "Denmark"
  | "Djibouti"
  | "Dominica"
  | "Dominican Republic (the)"
  | "Ecuador"
  | "Egypt"
  | "El Salvador"
  | "Equatorial Guinea"
  | "Eritrea"
  | "Estonia"
  | "Eswatini"
  | "Ethiopia"
  | "Falkland Islands (the) [Malvinas]"
  | "Faroe Islands (the)"
  | "Fiji"
  | "Finland"
  | "France"
  | "French Guiana"
  | "French Polynesia"
  | "French Southern Territories (the)"
  | "Gabon"
  | "Gambia (the)"
  | "Georgia"
  | "Germany"
  | "Ghana"
  | "Gibraltar"
  | "Greece"
  | "Greenland"
  | "Grenada"
  | "Guadeloupe"
  | "Guam"
  | "Guatemala"
  | "Guernsey"
  | "Guinea"
  | "Guinea-Bissau"
  | "Guyana"
  | "Haiti"
  | "Heard Island and McDonald Islands"
  | "Holy See (the)"
  | "Honduras"
  | "Hong Kong"
  | "Hungary"
  | "Iceland"
  | "India"
  | "Indonesia"
  | "Iran (Islamic Republic of)"
  | "Iraq"
  | "Ireland"
  | "Isle of Man"
  | "Israel"
  | "Italy"
  | "Jamaica"
  | "Japan"
  | "Jersey"
  | "Jordan"
  | "Kazakhstan"
  | "Kenya"
  | "Kiribati"
  | "Korea (the Democratic People's Republic of)"
  | "Korea (the Republic of)"
  | "Kuwait"
  | "Kyrgyzstan"
  | "Lao People's Democratic Republic (the)"
  | "Latvia"
  | "Lebanon"
  | "Lesotho"
  | "Liberia"
  | "Libya"
  | "Liechtenstein"
  | "Lithuania"
  | "Luxembourg"
  | "Macao"
  | "Madagascar"
  | "Malawi"
  | "Malaysia"
  | "Maldives"
  | "Mali"
  | "Malta"
  | "Marshall Islands (the)"
  | "Martinique"
  | "Mauritania"
  | "Mauritius"
  | "Mayotte"
  | "Mexico"
  | "Micronesia (Federated States of)"
  | "Moldova (the Republic of)"
  | "Monaco"
  | "Mongolia"
  | "Montenegro"
  | "Montserrat"
  | "Morocco"
  | "Mozambique"
  | "Myanmar"
  | "Namibia"
  | "Nauru"
  | "Nepal"
  | "Netherlands (the)"
  | "New Caledonia"
  | "New Zealand"
  | "Nicaragua"
  | "Niger (the)"
  | "Nigeria"
  | "Niue"
  | "Norfolk Island"
  | "Northern Mariana Islands (the)"
  | "Norway"
  | "Oman"
  | "Pakistan"
  | "Palau"
  | "Palestine, State of"
  | "Panama"
  | "Papua New Guinea"
  | "Paraguay"
  | "Peru"
  | "Philippines (the)"
  | "Pitcairn"
  | "Poland"
  | "Portugal"
  | "Puerto Rico"
  | "Qatar"
  | "Republic of North Macedonia"
  | "Romania"
  | "Russian Federation (the)"
  | "Rwanda"
  | "Réunion"
  | "Saint Barthélemy"
  | "Saint Helena, Ascension and Tristan da Cunha"
  | "Saint Kitts and Nevis"
  | "Saint Lucia"
  | "Saint Martin (French part)"
  | "Saint Pierre and Miquelon"
  | "Saint Vincent and the Grenadines"
  | "Samoa"
  | "San Marino"
  | "Sao Tome and Principe"
  | "Saudi Arabia"
  | "Senegal"
  | "Serbia"
  | "Seychelles"
  | "Sierra Leone"
  | "Singapore"
  | "Sint Maarten (Dutch part)"
  | "Slovakia"
  | "Slovenia"
  | "Solomon Islands"
  | "Somalia"
  | "South Africa"
  | "South Georgia and the South Sandwich Islands"
  | "South Sudan"
  | "Spain"
  | "Sri Lanka"
  | "Sudan (the)"
  | "Suriname"
  | "Svalbard and Jan Mayen"
  | "Sweden"
  | "Switzerland"
  | "Syrian Arab Republic"
  | "Taiwan (Province of China)"
  | "Tajikistan"
  | "Tanzania, United Republic of"
  | "Thailand"
  | "Timor-Leste"
  | "Togo"
  | "Tokelau"
  | "Tonga"
  | "Trinidad and Tobago"
  | "Tunisia"
  | "Turkey"
  | "Turkmenistan"
  | "Turks and Caicos Islands (the)"
  | "Tuvalu"
  | "Uganda"
  | "Ukraine"
  | "United Arab Emirates (the)"
  | "United Kingdom of Great Britain and Northern Ireland (the)"
  | "United States Minor Outlying Islands (the)"
  | "United States of America (the)"
  | "Uruguay"
  | "Uzbekistan"
  | "Vanuatu"
  | "Venezuela (Bolivarian Republic of)"
  | "Viet Nam"
  | "Virgin Islands (British)"
  | "Virgin Islands (U.S.)"
  | "Wallis and Futuna"
  | "Western Sahara"
  | "Yemen"
  | "Zambia"
  | "Zimbabwe"
  | "Åland Islands"
  | "NaN"
