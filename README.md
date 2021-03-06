# vue-mdi
vue 기반의 mdi 구성

## 기본 컨셉 생각

1) 국제화
- 구글 지도와 같은 경우에는 Sidebar가 보통 왼쪽에 있지만 아랍어와 같이 오른쪽 기준의 언어에서는 Sidebar가 오른쪽으로 넘어간다
- 모든 지역화의 가능성을 열어두고 MDI를 설계
- 모든 메뉴, 타이틀 등은 외국어로 변경되면 길어질 있다
- 폰트 학습 필요

2) 성능
- 업무 시스템에서는 다양한 자원을 로딩하기 때문에 성능 최적화 작업이 필수적
- 초기 화면이 보이기까지의 로딩시간을 단축하기 위한 작업 필요
- 초기 화면 전 필요한 자원과 화면 후 필요한 작업을 구분

## Layout 요소
1) Header
- Logo, 편의 기능, 설정, 로그아웃 등 필요한 요소 고려
2) Sidebar
- 왼쪽/오른쪽 이동이 유연하게 설정가능하도록 변경
3) Content
- 내용부는 최대한 유연하게 작성
- vue-layout에서 고민
4) Footer
- Footer는 Option으로 고려
- 최대한 많은 공간을 확보해야하는 업무에서는 불필요할 수 있음


# vue-mdi

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
