# Start

## 1. SW 문제 해결

- **프로그래밍 하기 위한 제약 조건과 요구 사항**

> - 프로그래밍 언어의 특성
> - 프로그램이 동작할 HW와 OS에 관한 지식
> - 라이브러리들의 유의 사항들
> - 프로그램이 사용할 수 있는 최대 메모리
> - 사용자 대응 시간 제한
> - 재사용성이 높은 간결한 코드
> - ....



- **문제 해결 과정**

> 1. 문제를 읽고 이해한다.
> 2. 문제를 익숙한 용어로 재정의 한다.
> 3. 어떻게 해결할지 계획을 세운다.
> 4. 계획을 검증한다.
> 5. 프로그램으로 구현한다.
> 6. 어떻게 풀었는지 돌아보고, 개선할 방법이 있는지 찾아본다.



- **직관과 체계적인 접근**

> - 비슷한 문제를 풀어본 적이 있던가
> - 단순한 방법에서 시작할 수 있을까
> - 문제를 단순화 할 수 있을까
> - 그림으로 그려 볼 수 있을까
> - 수식으로 표현 할 수 있을까
> - 문제를 분해 할 수 있을까
> - 뒤에서 부터 생각해서 문제를 풀 수 있을까
> - 특정 형태의 답만 고려할 수 있을까

---

## 2. 복잡도 분석

- **알고리즘의 효율**

> - **공간적 효율성과 시간적 효율성**
>   - 공간적 효율성은 연산량 대비 얼마나 적은 메모리 공간을 요하는 가를 말한다.
>   - 시간적 효율성은 연산량 대비 얼마나 적은 시간을 요하는 가를 말한다.
>   - 효율성을 뒤집어 표현하면 복잡도가 된다. 복잡도가 높을수록 효율성은 저하된다.
> - **시간적 복잡도 분석**
>   - 하드웨어 환경에 따라 처리 시간이 달라진다.
>     - 부동 소수 처리 프로세서 존재 유무, 나눗셈 가속 기능 유무
>     - 입출력 장비의 성능, 공유 여부
>   - 소프트웨어 환경에 따라 처리 시간이 달라진다.
>     - 프로그램 언어의 종류
>     - 운영체제, 컴파일러의 종류
>   - 환경적 차이로 인해 분석이 어렵다.



- **복잡도의 점근적 표기**

> - 시간 (또는 공간) 복잡도는 입력 크기에 대한 함수로 표기하는데, 이 함수는 주로 여러 개의 항을 가지는 다항식이다.
> - 이를 단순한 함수로 표현하기 위해 점근적 표기를 사용
> - 입력 크기  n이 무한대로 커질 때의 복잡도를 간단히 표현하기 위해 사용하는 표기법



- **O(Big-Oh) - 표기**

> - O-표기는 복잡도의 **점근적 상한**을 나타낸다.
>   - ex) f(n) = 2n^2 - 7n + 4, f(n)의  O표기는 O(n^2)이다.
> - 단순히  **"실행 시간이 n^2에 비례"**하는 알고리즘이라고 말한다.
> - n이 증가함에 따라 O(g(n))이 점근적 상한이라는 것 (즉, g(n)이 n0보다 큰 모든 n에 대해서 항상 f(n)보다 크다는 것)을 보여준다.



- **Ω(Big-Omega)-표기**

> - 복잡도의 **점근적 하한**을 의미
> - f(n) = 2n^2 - 7n + 4의  Ω-표기는 Ω(n^2)
> - n이 증가함에 따라 n^2보다 작을 수 없다는 의미
> - n이 증가함에 따라 Ω(g(n))이 점근적 하한이라는 것 (즉, g(n)이 n0보다 큰 모든 n에 대해서 항상 f(n)보다 작다는 것)을 보여준다.



- **Θ(Theta)-표기**

> - O-표기와 Ω-표기가 같은 경우에 사용
> - f(n)은 n이 증가함에 따라 **n^2과 동일한 증가율**을 가진다는 의미



- **자주 사용하는 O-표기**

> - O(1)	       상수 시간
> - O(logn)    로그(대수) 시간
> - O(n)          선형 시간
> - O(nlogn) 로그 선형 시간
> - O(n^2)     제곱 시간
> - O(n^3)     세제곱 시간
> - O(2^n)     지수 시간

---

## 3. 표준 입출력 방법

- **python3 표준입출력**

> - **입력**
>   - -Raw 값의 입력 : input()
>     - 받은 입력 값을 문자열로 취급
>   - Evaluated된 값 입력 : eval(input())
>     - 받은 입력 값을 평가된 데이터 형으로 취급
> - **출력**
>   - print()
>     - 표준 출력 함수, 출력 값의 마지막에 개행 문자 포함
>   - print('text', end='')
>     - 출력 시 마지막에  개행 문자 제외할 시
>   - print('%d' % number)
>     - Formatting 된 출력
> - **파일의  내용을 표준 입력으로 읽어오는 방법**
>   - import sys
>   - sys.stdin = open('a.txt','r')

---

## 4. 비트 연산

- **비트 연산자**

>- & : 비트 단위로 AND 연산을 한다.
>  - 특정 bit를 0으로 만들 때 사용 (비트 검사)
>- | : 비트 단위로 OR 연산을 한다.
>  - 특정 bit를 1로 만들 때 사용
>- ^ : 비트 단위로 XOR 연산을 한다. (같으면 0 다르면 1)
>  - 특정 bit를 반전 시킬 때 사용
>- ~ : 단항 연산자로서 피연산자의 모든 비트를 반전 시킨다.
>  - not하고 invert는 다르다.
>- << : 피연산자의 비트 열을 왼쪽으로 이동시킨다.
>- '>>' : 피연산자의 비트 열을 오른쪽으로 이동시킨다.



- **비트 연산**

> - 1<<n
>   - 2^n의 값을 갖는다.
>   - 원소가 n개일 경우의 모든 부분 집합의 수를 의미
>   - Power set(모든 부분 집합)
>     - 공집합과 자기 자신을 포함한 모든 부분 집합
>     - 각 원소가 포함되거나 포함되지 않는 2 가지 경우의 수를 계산하면 모든 부분 집합의 수가 된다.
> - i & (1<<j)
>   - 계산 결과는 i의 j번째 비트가 1인지 아닌지 의미한다.
>   - i의 j번 비트를 검사한다는 의미
> - ex)
>   - ![화면 캡처 2022-09-19 140400](C:.\화면 캡처 2022-09-19 140400.png)
>   - ![화면 캡처 2022-09-19 141544](C:.\화면 캡처 2022-09-19 141544.png)



- **엔디안(Endianness)**

> - 컴퓨터의 메모리와 같은 1 차원의 공간에 여러 개의 연속된 대상을 배열하는 방법을 의미
>
> - HW 아키텍처마다 다르다.
>
> - 주의 : 속도 향상을 위해 바이트 단위와 워드 단위를 변환하여 연산 할 때 올바로 이해하지 않으면 오류를 발생 시킬 수 있다.
>
> - **빅 엔디안 (Big-endian)**
>
>   - 보통 큰 단위가 앞에 나온다. 네트워크
>
> - **리틀 엔디안 (Little-endian)**
>
>   - 작은 단위가 앞에 나온다. 대다수 데스크톱 컴퓨터
>
> - ![화면 캡처 2022-09-19 143330](C:.\화면 캡처 2022-09-19 143330.png)
>
> - **엔디안 확인 코드**
>
>   - ```python
>     import sys
>     print(sys.byteorder)
>     ```



---

## 5. 진수

- **진수**

> - **10 진수 -> 타 진수로 변환**
>   - 원하는 타진법의 수로 나눈 뒤 나머지를 거꾸로 읽는다.
> - **타 진수 -> 10 진수로 변환**
>   - ![화면 캡처 2022-09-19 145843](C:.\화면 캡처 2022-09-19 145843.png)
> - ![화면 캡처 2022-09-19 145929](C:.\화면 캡처 2022-09-19 145929.png)



- **보수**

> - **1의 보수**
>   - 부호와 절댓값으로 표현된 값을 부호 비트를 제외한 나머지 비트들을 0은 1로, 1은 0로 변환
>   - ![화면 캡처 2022-09-19 150144](C:.\화면 캡처 2022-09-19 150144.png)
> - **2의 보수**
>   - 1의 보수 방법으로 표현된 값의 최하위 비트에 1을 더한다.
>   -  ![화면 캡처 2022-09-19 150235](C:.\화면 캡처 2022-09-19 150235.png)

---

## 6. 실수

- **실수의 표현**

> - ![화면 캡처 2022-09-19 151607](C:.\화면 캡처 2022-09-19 151607.png)
> - **실수의 표현**
>   - 컴퓨터는 실수를 표현하기 위해 부동 소수점 표기법을 사용한다.
>   - 부동 소수점 표기 방법은 소수점의 위치를 고정 시켜 표현하는 방식이다.
>     - 소수점의 위치를 왼쪽의 가장 유효한 숫자 다음으로 고정 시키고 밑 수의 지수 승으로 표현
>     - ex) 1001.0011 -> 1.0010011 * 2^3



- **실수를 저장하기 위한 형식**

> - **단정도 실수 (32비트)**
>
>   - ![화면 캡처 2022-09-19 152106](C:.\화면 캡처 2022-09-19 152106.png)
>
> - **배정도 실수 (64비트)**
>
>   - ![화면 캡처 2022-09-19 152125](C:.\화면 캡처 2022-09-19 152125.png)
>
> - **가수부(mantissa)**
>
>   - 실수의 유효 자릿수들을 부호화된 고정 소수점으로 표현한 것
>
> - **지수부(exponent)**
>
>   - 실제 소수점의 위치를 지수 승으로 표현한 것
>
> - ex)
>
>   - ![화면 캡처 2022-09-19 153339](C:.\화면 캡처 2022-09-19 153339.png)
>
>   
>
>   - ![화면 캡처 2022-09-19 153412](C:.\화면 캡처 2022-09-19 153412.png)
>
>     
>
>   - ![화면 캡처 2022-09-19 153536](C:.\화면 캡처 2022-09-19 153536.png)



- **컴퓨터는 실수를 근사적으로 표현한다.**
  - 이진법으로 표현 할 수 없는 형태의 실수는 정확한 값이 아니라 근사 값으로 저장되는데 이때 생기는 작은 오차가 계산 과정에서 다른 결과를 가져온다.
  
- **실수 자료형의 유효 자릿수**
  - 32 비트 실수형  유효 자릿수 -> 6
  - 64 비트 실수형 유효 자릿수 -> 15
  
- ```python
  # python에서 float형태 읽기
  import struct
  a = 9.187500
  bits, = struct.unpack('I',struct.pack('f',a))
  print(f'{bits:032b}')
  ```

---



