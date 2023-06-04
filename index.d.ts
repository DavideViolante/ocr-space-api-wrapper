type OcrSpaceLanguages = 'ara' | 'bul' | 'chs' | 'cht' | 'hrv' | 'cze' | 'dan' | 'dut' |
  'eng' | 'fin' | 'fre' | 'ger' | 'gre' | 'hun' | 'kor' | 'ita' | 'jpn' | 'pol' |
  'por' | 'rus' | 'slv' | 'spa' | 'swe' | 'tur' |
  // The following are only supported by OCREngine = '3'
  'hin' | 'kan' | 'per' | 'tel' | 'tam' | 'tai' | 'vie';

type OcrSpaceFileTypes = string | 'PDF' | 'GIF' | 'PNG' | 'JPG' | 'TIF' | 'BMP';

type ParsedResult = {
  ErrorMessage: string;
  ErrorDetails: string;
  FileParseExitCode: 0 | 1 | -10 | -20 | -30 | -99;
  HasOverlay: boolean,
  Message: string;
  ParsedText: string;
  TextOverlay: any;
}

type OcrSpaceResponse = {
  ErrorMessage: string;
  ErrorDetails: string;
  IsErroredOnProcessing: boolean;
  OCRExitCode: number;
  ParsedResults: ParsedResult[];
  ProcessingTimeInMilliseconds: number
  SearchablePDFURL: string;
}

type OcrSpaceOptions = {
  apiKey?: string;
  ocrUrl?: string;
  language?: OcrSpaceLanguages;
  isOverlayRequired?: boolean;
  filetype?: OcrSpaceFileTypes;
  detectOrientation?: boolean;
  isCreateSearchablePdf?: boolean;
  isSearchablePdfHideTextLayer?: boolean;
  scale?: boolean;
  isTable?: boolean;
  OCREngine?: '1' | '2' | '3';
}

declare module "ocr-space-api-wrapper" {
  export type OcrSpaceLanguages = OcrSpaceLanguages;
  export type OcrSpaceFileTypes = OcrSpaceFileTypes;
  export function ocrSpace(input: string, options?: OcrSpaceOptions): OcrSpaceResponse;
}
