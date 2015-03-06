## CodeSnippet
코드 스니펫<br>
CodeSnippet이란, <br>
타입체크나 배열처리와 같이 **자주 사용되는 코드 조각**을 모아둔 것으로,<br>
아래와 같은 종류의 CodeSnippet이 존재하며 지속적으로 지속적으로 업데이트하고 있습니다.<br>
FE개발팀에서 배포하는 모든 컴포넌트 및 Application은 **가독성과 중복코드 방지**를 위해 CodeSnippet을 사용하며,<br>
기본적인 네임스페이스는 **ne.util**을 사용합니다.<br>
(네임스페이스는 서비스의 성격에 따라 재정의하여 사용할 수 있습니다.)<br>

## Feature
* inheritance.js
  * 간단한 상속 모듈 (Nicholas C. Zakas, YUI Library)
  * 부모 생성자를 명시적으로 호출
  * 자식 프로토타입 메서드를 구현하기 전에 상속받아야 함
* browser.js
  * 브라우저 종류, 버전을 검출하는 모듈
* customEvent.js
 * 커스텀이벤트 기능을 추가/제거 및 발생시킬수 있게 하는 커스텀이벤트
 * 믹스인 방법과 내부객체로 저장하여 사용
* type.js
 * 변수의 타입 체크 모듈
* object.js
 * 객체를 다루는 모듈
* func.js
 * 함수 처리 모듈
* collection.js
 * 콜렉션을 처리할 수 있는 유틸성 함수들의 모음
* enum.js
 * 중복되지 않는 임의의 값을 갖는 상수목록을 다루는 모듈
 * IE8이하를 제외한 모던브라우저에서는 한번 결정된 값은 추후 변경 불가
* string.js
 * decodeHTMLEntity, encodeHTMLEntity 등의 문자열을 다루는 모듈
* window.js
 * 윈도우 팝업등의 window객체와 관련된 모듈들을 제공
 * IE11에서 POST를 사용해 팝업에 값을 전달시 postDataBridgeUrl 설정 필요
 * 다른 도메인을 팝업으로 띄울 경우 보안 문제로 팝업 컨트롤 불가
* defineClass.js
 * 클래스 정의 및 상속 모듈
* hashMap.js
 * 해시맵 모듈

## CodeSnippet 사용법
* 전체 CodeSnippet 모듈이 빌드된 파일 사용하기
 * [[master branch]](https://github.nhnent.com/FE/Share-CodeSnippet)에서 code-snippet.js 또는 code-snippet.min.js을 다운로드 받아 사용
 * 혼란을 줄이기위해 파일명(code-snippet.js 또는 code-snippet.min.js)은 그대로 사용하기를 권장
* 필요한 부분만 복사하여 사용하기
 * 각 모듈에 명시된 **의존성을 확인**하여 필요한 모듈을 함께 복사해서 사용
 * 가급적이면 유지보수 등의 관리를 위하여 빌드된 버전 사용을 권장
* 자세한 사용법은 별도의 문서로 3월중 배포 예정

## Documentation
* **API** - https://github.nhnent.com/pages/fe/share-code-snippet/
* **Tutorial** - [준비중]입니다.
* **CI** - http://fe.nhnent.com:8080/jenkins/job/share-code-snippet/

## Download/Install
* Bower: `bower install "git+http://3c672057a1ac16c4e6f1baaba73e24d5270ef453:x-oauth-basic@github.nhnent.com/fe/share-code-snippet.git#1.0.0"`
* Download: https://github.nhnent.com/fe/share-code-snippet


## History
| Version | Description | Date | Developer |
| ---- | ---- | ---- | ---- |
| 1.0.0 | jquery dependency 제거 | 2015.03 | FE개발팀 |
| 0.1.0 | 최초개발 | 2014.09 | FE개발팀 |
