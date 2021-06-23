## 실행 방법

- 사용 패키지
    - node 14.17.0
    - vue 2.6.11
    - vuex 3.6.2
    - vue-cli 4
    - sass-loader 10
    - vue, vuex, vue-cli, node-sass, gh-pages
- npm install 후 npm run serve 시 local 서버 실행
- 해당 url에서 확인 가능

[메모장](https://function-dh.github.io/inflearnVue/)

## 구현 내용

- 기존 인프런 Vue 중급 강좌에서 진행한 todoList를 바탕으로 추가적인 작업을 진행하여 반영 하였습니다 🙂
- 강의 내용에 없던 scss 추가하여 세팅 진행, assets/scss 기본 세팅

    ```jsx
    assets
    	ㄴ scss
    		ㄴ abstracts
    			ㄴ grid   // 미디어쿼리 등 프로젝트 grid 설정
    			ㄴ mixins   // mixins 설정
    			ㄴ variables    // 변수 설정 (색상, 경로 등)
    		ㄴ base
    			ㄴ fonts   // fonts 관련 경로 지정
    			ㄴ reset   // normalize css적용
    			ㄴ typography   // 페이지 font style 지정
    		ㄴ layout    // 프로젝트 전체 layout 관련 스타일
    	ㄴ common   // 통합 scss
    ```

- class 네이밍, 스타일, 마크업 등 전체적으로 수정
- vuex의 경우 폴더 안에 있는 모듈 전부를 불러와 사용할 수 있도록 설정
- 중복 내용 등록 시 alert 메세지 노출 기능 추가
- modal 컴포넌트를 공통으로 빼서 vuex/modal에서 상태 관리
- gh-pages 관련 추가 webpack 세팅

    ```jsx
    module.exports = {
    	publicPath: '/inflearnVue',  // base url 설정
    	outputDir: 'docs',
    }
    ```

### 초기 세팅

1. vue-cli 사용하여 vue 환경 세팅
    - scss (reset, font, mixin, layout) 관련 전역 초기 세팅
    ⇒ vue.config.js 파일에서 전역으로 사용할 scss 세팅 (변수, mixins 컬러값 등)

        ```jsx
        css : {
        		loaderOptions : {
        			sass : {
                additionalData: `
                  @import "@/assets/scss/abstracts/abstracts.scss";
                `
        			}
        		}
        	}
        ```

2. vuex, scss 속성 등 기본 세팅에서 선택하지 않고 개별적으로 추가 진행
3. meta tag 및 og 태그 추가 진행

### App.vue

1. router 기능이 필요 없어 해당 컴포넌트를 컨테이너 컴포넌트로 사용
2. 전역으로 사용할 scss 선언

### TodoInput.vue

1. input의 재사용성을 고려하여 InputText 공통 컴포넌트 구현
2. 내용 입력 시 vuex를 통하여 메모 등록 기능 구현
3. 중복 내용 등록, 빈 내용 등록에 따라 알림 modal창 추가

### TodoList.vue

1. localStorage에 저장된 목록을 가져와 vuex todo/state에 데이터를 등록
2. 메모 완료 체크, 메모 삭제 mutaintions 추가

### TodoClear.vue

- 메모 전체 삭제 기능 추가 (localStorage, state 둘 다 삭제)

### Modal.vue

- slot 기능과 modal 사용 조건 등 vuex module를 활용하여 재사용성 확장