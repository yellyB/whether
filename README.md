# :sunny: 날씨의 참견 :womans_clothes:
공공데이터 활용 - 날씨 정보를 통해 코디 추천 서비스

# NOTE
- 차트 직접 구현
- 외부 API를 사용(서버를 내가 제어할 수 없는 상황)
- 미디어 쿼리를 사용하여 반응형 개발

# LINK
https://yellyb.github.io/whether

# 결과
![whether](https://user-images.githubusercontent.com/50893303/165080025-4cacab32-cbdb-4587-96ca-ef88e6e1f372.png)

# 과거의 코드 셀프 코드리뷰
1. 첫 화면 로딩 시 css제대로 안먹히는 문제
2. chart - useRef로 접근해서 요소 제어
3.       - 온도에 따라 차트 시작 y좌표를 일정하게 계산
4. clock - 함수 리액트 방식으로 변경
5.       - useEffect의 retune문에 타이머 함수 해제
6. 추천 아이템 목록 누를 때 컴포넌트 최적화
