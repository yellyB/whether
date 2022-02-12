export enum enResponse {
  POP = "POP", // 강수확률
  PTY = "PTY", // 강수형태
  PCP = "PCP", // 1시간 강수량
  REH = "REH", // 습도
  SNO = "SNO", // 1시간 신적설
  SKY = "SKY", // 하늘상태
  TMP = "TMP", // 1시간 기온
  TMN = "TMN", // 일 최저기온
  TMX = "TMX", // 일 최고기온
  UUU = "UUU", // 풍속(동서성분)
  VVV = "VVV", // 풍속(남북성분)
  WAV = "WAV", // 파고
  VEC = "VEC", // 풍향
  WSD = "WSD", // 풍속
}

export enum enSkyState {
  sun = "sun", // 해
  sunny = "sunny", // 맑음
  rain = "rain", // 우산
  rain1 = "rain1", // 우산(투명우산)
  rainny = "rainny", // 약한 비 + 구름
  rainny1 = "rainny1", // 거센 비 + 구름
  snow = "snow", // 눈
  snowy = "snowy", // 눈 + 구름
  cloud = "cloud", // 구름
  cloudy = "cloudy", // 구름x2
  wind = "wind", // 바람
  windy = "windy", // 바람 + 구름
  lightning = "lightning", // 번개 + 구름
  lightning1 = "lightning1", // 번개 + 구름 + 비
  moon = "moon", // 달
  moony = "moony", // 달 + 구름
}
