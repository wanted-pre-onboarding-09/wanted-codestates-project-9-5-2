# wanted-codestates-project-9-7-2
Github 관계망 탐색기

## 프로젝트 소개

- 깃허브 사용자가 스타를 누른 레포지토리를 통한 타 유저와의 관계를 보여주는 관계형 그래프 서비스
- 기간: 22.03.10~22.03.11

## 배포링크

[🚀 배포 링크](https://github-social-graph.netlify.app/)

## 실행 방법

```
① 해당 레포지토리를 클론한다.
② 프로젝트의 패키지를 설치한다. (npm install)
③ scripts 명령어로 프로젝트를 실행한다. (npm start)
```

## 팀원 소개

| 이름   | 직책 | 역할                 |
| ----- | -- | -------------------- |
| [손영산](https://github.com/zeromountain) | 팀원||
| [이지수](https://github.com/mynameisjisoo) | 팀원 ||


## 기술 스택

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

<br/>

## 요구사항

> ### 검색 기능
> - 사용자 아이디를 검색하면 사용자의 정보와, 좋아요한 패키지들의 정보를 가져옵니다. 다음 두 API를 활용합니다.
>   - https://api.github.com/users/${username}
>   - https://api.github.com/users/${username}/starred?per_page=100
> - 검색한 사용자의 정보를 간단히 보여줍니다.
> - 검색한 사용자가 좋아하는 패키지들의 연결관계를 보여줍니다.
>   - D3 force 라이브러리를 활용합니다.
> ### 사용자 추가 검색
> - 다른 사용자를 검색하면 같은 공간위에 노드와 엣지를 추가합니다.
> - 서로 다른 사용자가 동시에 좋아하는 패키지가 있는 경우 해당 노드를 공유합니다.
> - 스크롤을 통해 전체 그래프를 줌인 줌아웃 할 수 있습니다.
>   - 줌아웃해서 보는 경우, 세세한 패키지 정보나 텍스트는 생략합니다.
> - 드래그를 통해서 그래프를 탐색할 수 있습니다.
> - (선택사항) D3의 svg를 이용해서 그래프를 그리게 되면 노드가 많아졌을 때 프레임저하가 발생할 수 있습니다. canvas를 통해 개선해봅시다.

## 구현 사항

- [x] 검색기능
- [ ] 그래프 
- [ ] 사용자 추가 검색

해당 과제는 캔버스의 역량이 중요했던 과제였습니다.

과제를 진행한 팀원 모두 캔버스에 대한 역량이 부족했고 깃허브 API를 통해서 데이터를 가지고 오는데에는 무리가 없었지만 이후 데이터를 그래프로 그리는 과정에서 오랜 시간 진전이 없었습니다.

오랜 고심 끝에, 저희는 데이터블 기업의 레포지토리를 확인했고 해당 코드가 뷰와 타입스크립트로 작성되었다는 점에서 리액트와 바닐라 자바스크립트로 변경하는 것으로 만족하기로 했습니다.

하지만, 타입스크립트 코드에 대한 이해 없이 자바스크립트 코드로 바꾸다 보니 그래프를 그리는 과정에서 d3라이브러리의 links 함수에서 오류가 발생하는 것을 알 수 있었습니다.

기존, enum과 interface로 작성되었던 switch 조건문을 아래와 같은 자바스크립트 코드로 바꾸다 보니 발생한 문제라고 생각되었으나 역량이 부족해 문제를 해결하지 못했습니다.

```ts
switch (edge.direction) {
    case EdgeDirection.NONE: {
      // ...
    }
    case EdgeDirection.DUPLEX: {
      // ...
    }
    case EdgeDirection.TARGET: {
     // ...
    }
    case EdgeDirection.SOURCE: {
     // ...
    }
  }
```

```js
case 'none': {
      // ... 
    }
    case 'duplex': {
      // ...
    }
    case 'target': {
      // ...
    }
    case 'source': {
      // ...
    }
  }
```

이번 과제를 통해서 캔버스를 더 이상 미뤄둘 수 없다고 생각하게 되었고 캔버스에 대한 역량을 키운 후에 해당 과제를 개인적으로 진행해보려고 합니다.



## 커밋 컨벤션

|          | 사용 예시        |
| -------- | ---------------- |
| Feat     | 새로운 기능 추가 |
| Design   | CSS 스타일링     |
| Fix      | 버그 수정        |
| Refactor | 리팩토링         |
| Deploy   | 배포             |
| Remove   | 파일 삭제        |
