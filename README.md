# Karrier_Front

<p align="center"><img src = "https://github.com/Karrier-Team/Karrier-Front/blob/main/src/images/LogoName.png" width="50%" height="50%"></p>

## 소개
#### 사회문제적으로 진로에 고민이 있는 고등학생들을 대상으로, 대학생들이 멘토가 되어 
#### 청소년들에게 학업 및 진로에 관한 다양한 정보들을 멘토링 프로그램을 통해 제공해주는 웹 서비스입니다.
#### 또한, 멘토링 프로그램 이후에도 멘토는 질의응답, 수강후기와 같은 기능을 통해 멘티(고등학생)들을 지속적으로 관리해줍니다. 
#### 즉, KARRIER 웹 서비스는 현재 고등학생이 겪는 진학 고민, 학업 및 진로에 대한 스트레스를 멘토링 프로그램을 통해 해결해주는 서비스입니다.


## 시스템구성도
![image](https://github.com/Karrier-Team/Karrier-Front/blob/main/src/images/SystemArchitecture.png)


## 설치 및 실행

### 설치
```
git clone https://github.com/Karrier-Team/Karrier-Front.git
```


### 실행
```python
1. ide를 통해 해당 repository open
2. yarn #install required packages
3. yarn start #run prod mode
```


## 시연영상
[![Video Label](https://github.com/Karrier-Team/Karrier-Front/blob/main/src/images/MainHome.png)](https://www.youtube.com/watch?v=wH-yKksu-MY)  
**(클릭하면 유튜브 링크로 이동합니다)**


## 시연 시스템 사양
#### 1. 모델명
MacBook Pro
#### 2. 칩
Apple M1
#### 3. 총 코어 개수
8(4 성능 및 4 효율)
#### 4. 메모리
16GB
#### 5. 시스템 버전
macOS 12.3.1


## 개발 환경
### Spec
- Java 11
- Spring Boot (v2.7.1)
- Spring Data JPA
- IntelliJ IDEA CE
- MariaDB (v3.0.6)


### Spring Initializr - Selected Dependencies

#### Developer Tools
- Spring Boot DevTools
- Lombok

#### Web
- Spring Web

#### Security
- Spring Security

#### SQL
- Spring Data JPA


## 주요 기능
### 1. 멘토링 프로그램 - 단과대학, 학과별, 프로그램 소개, 수강신청, 신청완료
<div style="float:left;margin:0 10px 10px 0" markdown="1">
<img src = "https://github.com/Karrier-Team/Karrier-Front/blob/main/src/images/MentoringDepartment.png" width="40%" height="40%">
<img src = "https://github.com/Karrier-Team/Karrier-Front/blob/main/src/images/MentoringProgram.png" width="35%" height="35%">
</div>


### 2. 멘토 - 멘토모집, 프로그램 만들기
<div style="float:left;margin:0 10px 10px 0" markdown="1">
<img src = "https://github.com/Karrier-Team/Karrier-Front/blob/main/src/images/MentorRecruit.png" width="40%" height="40%">
<img src = "https://github.com/Karrier-Team/Karrier-Front/blob/main/src/images/Mentor_ProgramMaking_Info.png" width="46%" height="46%">
</div>


### 3. 커뮤니티 - 질의응답, 수강후기
<div style="float:left;margin:0 10px 10px 0" markdown="1">
<img src = "https://github.com/Karrier-Team/Karrier-Front/blob/main/src/images/CommunityQuestion1.png" width="40%" height="40%">
<img src = "https://github.com/Karrier-Team/Karrier-Front/blob/main/src/images/CommunityReview1-1.png" width="33%" height="33%">
</div>

<div style="float:left;margin:0 10px 10px 0" markdown="1">
<img src = "https://github.com/Karrier-Team/Karrier-Front/blob/main/src/images/CommunityReview1.png" width="40%" height="40%">
<img src = "https://github.com/Karrier-Team/Karrier-Front/blob/main/src/images/CommunityReview1-1.png" width="33%" height="33%">
</div>

### 4. 마이페이지 - 찜, 팔로우
<div style="float:left;margin:0 10px 10px 0" markdown="1">
<img src = "https://github.com/Karrier-Team/Karrier-Front/blob/main/src/images/MypageLike.png" width="40%" height="40%">
<img src = "https://github.com/Karrier-Team/Karrier-Front/blob/main/src/images/MypageFollowing.png" width="30%" height="30%">
</div>



## 기여
기여를 하기위해선 [기여 가이드라인](https://github.com/Karrier-Team/Karrier_Main/blob/main/CONTRIBUTING.md)을 참조해주세요!

## 메인 기여자
#### **문준용**([fancy](https://github.com/fancy-log)) : PO(프로젝트 기획, 운영 및 관리, UX/UI 설계)
#### **맹정현**([Hyun](https://github.com/Mjunghyun)) : PM(프로젝트 기획, UX/UI 설계)
#### **이기혁**([leekihyeok](https://github.com/leekihyeok)) : UX/UI Designer(UX/UI 디자인)
#### **홍희림**([heerim](https://github.com/Henry-Hong)) : Front-end(멘토링, 커뮤니티, 마이페이지 구현)
#### **이승열**([LEESEUNGYEOL](https://github.com/tigermint)) : Front-end(멘토링, 멘토 구현)
#### **박지민**([Park Jimin](https://github.com/wlals761)) : Back-end(멘토, 커뮤니티 구현)
#### **최준**([readyChoi](https://github.com/readyChoi)) : Back-end(멘토링, 마이페이지 구현)
#### **이승민**([LSM](https://github.com/LDEV4966)) : Back-end(소셜로그인, 이메일 인증 구현)



## 라이센스
apache license 2.0

Copyright 2022 Karrier-Team

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
