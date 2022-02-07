import { enResponse } from "./enType";

//날씨 조회 - 요청 데이터
export interface IRequestParams {
  serviceKey: string; // 인증키
  numOfRows: number; // 페이지 번호
  pageNo: number; // 한 페이지 결과 수
  dataType: "XML" | "JSON"; // 요청 자료 형식
  base_date: string; // 날짜(YYYYMMDD)
  base_time: string; // 시간(HHmm)
  nx: number; // 예보지전의 X 좌표값
  ny: number; // 예보지전의 Y 좌표값
}

//날씨 조회 - 응답 결과
export interface IFcstResponse {
  baseDate: string; //발표일자
  baseTime: string; //	발표시각
  category: enResponse; //	자료구분코드
  fcstDate: string; //	날짜
  fcstTime: string; //시간
  fcstValue: string; //	실황 값
  nx: number; //	 X 좌표
  ny: number; //	 Y 좌표
}
export interface IFcstData {
  baseDate: string; //발표일자
  baseTime: string; //	발표시각
  category: enResponse; //	자료구분코드
  fcstDate: string; //	날짜
  fcstTime: string; //시간
  fcstValue: string; //	실황 값
  nx: number; //	 X 좌표
  ny: number; //	 Y 좌표
  state: string; // 날씨 상태 아이콘
}

export interface ICody {
  value: string;
  cloths: string;
}
