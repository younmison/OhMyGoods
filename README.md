# OH-MY-Goods(개인 프로젝트)

- 관리자 기능을 가진 애니메이션 굿즈 쇼핑몰
- 유저는 굿즈를 판매 등록하고 구매할 수 있다

## 📌개발기간

2022.10.03 - 2023.10.10

## 📌주요 기능

|   페이지   |    기능     |             상세 기능             |
| :--------: | :---------: | :-------------------------------: |
|   로그인   | 로그인 검사 |   이메일, 아이디에 정규식 검사    |
|   관리자   |  유저 관리  |             유저 삭제             |
|            | 게시판 관리 |       게시글 등록/수정/삭제       |
|    상점    |  상품 등록  | 상품 이름/가격/설명/이미지 업로드 |
|            |  상품 조회  |          상품 상세페이지          |
|            |  상품 후기  | 별점 등록 및 평균 별점, 후기 등록 |
|            |  장바구니   |    장바구니 상품 등록 및 삭제     |
|            |    구매     |  포인트로 상품 구매, 포인트 차감  |
| 마이페이지 |  정보 조회  |        닉네임, 포인트 내역        |

## 📌구현한 기능

1. React와 Redux를 이용해 게시판 CRUD 기능 구현
2. React Router로 관리자 페이지 접근 권한 부여
3. 관리자 페이지에서 게시글 및 유저 관리 기능 구현
4. mySql에 사용자, 게시판, 장바구니 DB를 만들어 데이터 저장
5. redux Ducks 패턴에 맞추어 개발
6. Tailwind.css 사용

## 📌개발환경

|                                                                                                                                                          client                                                                                                                                                           |                                                                                                                                                                                                             server                                                                                                                                                                                                              |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/> | <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/> <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat-square&logo=Sequelize&logoColor=white"/> <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/> |

## 📌구현한 페이지
1. 메인페이지 : swiper를 이용해 메인페이지 슬라이드 구현, 굿즈샵 이동 버튼
<img width="1280" alt="image" src="https://user-images.githubusercontent.com/107897885/222339566-7060bd71-ac31-4cfa-b899-06f440565f42.png">
</br>
2. 로그인/회원가입 : 정규식 검사 
<img width="1280" alt="image" src="https://user-images.githubusercontent.com/107897885/222339118-7e1947b2-6fb6-4b3b-b49e-5bdf9bf51f71.png">
</br>
3. 상점 : 상품 등록, 장바구니, 상세보기 기능
<img width="1280" alt="image" src="https://user-images.githubusercontent.com/107897885/222339855-c33073eb-96e3-48d5-a875-e35a8b6dc901.png">
<img width="1280" alt="image" src="https://user-images.githubusercontent.com/107897885/222340278-934b70d6-5c63-4c16-9710-81dd9d075847.png">
</br>
4. 장바구니 : 수량 변경, 삭제, 구매 기능
<img width="1280" alt="image" src="https://user-images.githubusercontent.com/107897885/222340668-cfea62d1-6a63-49a9-a0cf-07f4246fe30b.png"></br>
5. 마이페이지 : 유저정보, 보유 포인트
<img width="1280" alt="image" src="https://user-images.githubusercontent.com/107897885/222340871-7ae9ff11-86d9-4da3-a8a0-10568515873e.png"></br>

## 📌Error Log

1. onBlur 오류

```
Warning : You provided a `value` prop to a form field without an `onChange` handler.
```

onChange 이벤트 핸들러 없이 form 내부에서 'value' prop을 사용했기 때문에 <br />
value를 사용한 Element가 읽기 전용으로 렌더링되어 input 창에 입력이 되지 않았다. <br />
따라서 값을 수정하기 위해서는 defaultValue를 사용해야 한다(혹은 onChange 또는 readOnly로 설정해야 한다)

```
// 수정된 코드
<input
  type="mail"
  name="email"
  defaultValue={email}
  placeholder="이메일을 입력해주세요"
  className="border-black border-[1px]"
  onBlur={onEmailHandler}
/>
```
