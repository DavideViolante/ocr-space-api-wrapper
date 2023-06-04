type Languages = 'ara' | 'bul' | 'chs' | 'cht' | 'hrv' | 'cze' | 'dan' | 'dut' |
  'eng' | 'fin' | 'fre' | 'ger' | 'gre' | 'hun' | 'kor' | 'ita' | 'jpn' | 'pol' |
  'por' | 'rus' | 'slv' | 'spa' | 'swe' | 'tur' | 'hin' | 'kan' | 'per' | 'tel' |
  'tam' | 'tai' | 'vie';

type FileTypes = 'PDF' | 'GIF' | 'PNG' | 'JPG' | 'TIF' | 'BMP';

type Options = {
  apiKey?: string; ocrUrl?: string; language?: Languages; isOverlayRequired?: boolean;
  filetype?: FileTypes; detectOrientation?: boolean; isCreateSearchablePdf?: boolean;
  isSearchablePdfHideTextLayer?: boolean; scale?: boolean; isTable?: boolean;
  OCREngine?: '1' | '2' | '3';
}

declare module "ocr-space-api-wrapper" {
  export function ocrSpace(input: string, options?: Options): any;
}
