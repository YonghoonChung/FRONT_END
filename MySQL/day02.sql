use frontend;
# DML (Data Manupulation Language) - 데이터 조작어
	# 데이터들을 추가, 수정 삭제, 조회하는 명령어emf
    # INSERT, UPDATE, DELETE, SELECT

# insert
# insert into 테이블명 {(컬럼1, 컬럼2,...)} values(값1,값2,...;
# 컬럼들을 써준 뒤에 올 값으로 그 컬럼들에 들어갈 값들ㅇ르 써준다.
# 컬럼의 갯수와 자료형에 알맞게 순서대로 써주어야 한ㄷ.
insert into car (brand,price) values ('Ferrari',65000);
# 컬럼을 생략한 경우에는 모든 컬럼에 값을 넣어주겠다는 뜻이다.
# 따라서 모든 컬럼에 들어갈 값들을 컴럼 순서대로 전부 작성해준다.
insert into car values('K7', 'White', 7000);
select * from car;
select * from tb_user;

insert into tb_user(userid, userpw, username, userphone, 
useremail, userhobby,zipcode, address1, address2, address3)
values('apple', '1111','김사과', '01012341234','apple@juice.com','코딩','10101','서울시 강남구 테헤란로', '11-1 101동 101호', '(역삼동)');

insert into tb_user(userid, userpw, username, userphone, 
useremail, userhobby,zipcode, address1, address2, address3)
values('banan', '2222','반하나', '01098769876','banana@juice.com','영화','10102','서울시 서초구 과천대로', '22-1 15-3번지', '(방배동)');

insert into tb_user(userid, userpw, username, userphone, 
useremail, userhobby,zipcode, address1, address2, address3)
values('cherry', '3333','이체리', '01011111111','cherry@juice.com','게임','15101','안양구 동안시 관평로 138번길 63', '707동 1303호', '(평촌동)');

# select로 간단하게 구조 확인하기
select * from tb_user;

#userpoint 컬럼 추가
alter table tb_user add (userpoint int default 0);

# update
# update 테이블명 set 컬럼명 = 새로운값 where 조건절;
update 	tb_user set	userphone = '01011111111' 
where 	userid = 'cherry';
update tb_user set userpoint = 1000 where 1=1; # safe 모드 때문에 안된다.
# safe 모드 해제 : edit - preferences - SQL Editor - 맨 아래의 Safe Updates 체크 해제- 재실행

update tb_user set userpoint = userpoint - 200 where useridx = 1;
update tb_user set userpoint = userpoint + 200 where useridx = 2;
update tb_user set userpoint = userpoint * 2 where useridx = 3;

select * from tb_user;

# 조회수등을 기능으로 사용할 수 있다.

# delete 
# delete from 테이블명 where 조건절;
delete from car where brand = 'Ferrari';
select * from car;

# SELECT 
# SELECT 컬럼1, 컬럼2, from 테이블명 where 조건절;
select userid, username, userpoint from tb_user;
select userid, username, userphone, address1 from tb_user;
select userid, username, userphone, address1 from tb_user where useridx = 2;
# 부등호, 등호 사용가능 (관계연산자)
select username from tb_user where userpoint > 1200;
#논리연산자(and, or, not)
select * from tb_user where userid = 'apple' and userpw = '1111';

#userpoint가 500보다 크러나 같고 1500보다 작거나 같은 회원의 아이디, 이름, 포인트 검색
select userid, username, userpoint from tb_user where userpoint >= 500 and userpoint<=1500;
# 컬럼 between A and B : 컬럼의 값이 A 이상 B 이하
select userid, username, userpoint from tb_user where userpoint between 500 and 1500;

insert into tb_user(userid, userpw, username, userphone, useremail, userhobby,zipcode, address2)
values('banan', '2222','반하나', '01098769876','banana@juice.com','영화','10102','서울시 서초구 과천대로', '22-1 15-3번지', '(방배동)');

insert into tb_user (userid, userpw, username, userphone, zipcode, address2)
values('durian','4444','차두리','01024242424', '10001', '한강뷰아파트 101동 1001호');
update tb_user set userpoint=1200 where userid = 'durian';
select * from tb_user;

# email이 NULL인 사람의 이름 검색
# null의 값비교는 is null, is not null
select username from tb_user where useremail is null;

# 회원의 아이디가 apple 또는 banana 또는 cherry인 사람들의 이름 검색
select username from tb_user where userid = 'apple' or userid = 'banana' or userid = 'cherry';
#컬럼 in (값1,값2,...) : 컬럼의 값이 값1, 값2, ... 에 있으면 참
select username from tb_user where userid in ('apple','banana','cherry');

# id에 'a'가 들어가는 모든 사람 검색
select userid, username from tb_user where userid like('%a%');
#'%a' : 맨 뒷글자가 a인 아무 문자열
#'_a' : 맨 뒤글자가 a인 두글자 문자열

# 정렬
# order by 컬럼명 {정렬기준} : 컬럼을 기준으로 정렬(정렬기준 생략시 오름차순) - 정렬기준에 DESC를 작성시 내림차순
select * from tb_user order by userid desc;
select userid, username, userpoint from tb_user order by userpoint desc, userid desc;

# 성별 컬럼 추가
alter table tb_user add (usergender enum('남자','여자'));
update tb_user set usergender = '남자' where useridx = 1 or useridx = 3;
update tb_user set usergender = '여자' where useridx = 2 or useridx = 4;
select * from tb_user;

# 그룹함수 (집계함수) - 여러 행의 데이터들을 종합적으로 확인 후 결과를 도출하는 함수 / SUM(), AVG, MAX, MIN, COUNT()
Select sum(userpoint) from tb_user where usergender = '남자';

# group by
# group by 컬럼, ... : 컬럼을 기준으로 그룹을 짖고 쿼리문 수행, 그룸함수가 적용할 파트를 나누는 문장
select usergender, sum(userpoint) from tb_user group by usergender;
# 포인트가 2000이하인 사람들만 모아서 usergender로 그룹을 나누고 그룹별 포인트 총 합을 구해라!
select usergender, sum(userpoint) from tb_user where userpoint <=2000 group by usergender;

# having 
# usergender로 그룹을 나누고 그룹별 포인트 총 합을 구한 후 포인트 총합이 2000보다 작거나 같은 그룹의 결과만 구해라.
select usergender, sum(userpoint) from tb_user group by usergender  having sum(userpoint) > 2500;

# 별칭
# 컬럼면 별칭, 컬럼명 AS 별칭/ from 테이블명 별칭
select userid 아이디, username 이름, zipcode 우편번호, address1 "도로명 주소", address2 "상세 주소" from tb_user;

# limit
select * from tb_user limit 2;
select * from tb_user limit 1,2;

create table tb_profile(
	useridx 	  int not null,
    userage 	  int,
    userbirthdate varchar(300),
    userblood 	  varchar(10),
    constraint profile_user_fk foreign key(useridx) references tb_user(useridx)
);

#외래키 제약조건 위배
insert into tb_profile values(10000,100,'1923-12-13','O형');

insert into tb_profile values(1,10,'2013-07-18','A형');
insert into tb_profile values(3,30,'1993-04-01','O형');
select * from tb_profile;

#Join
# 데이터베이스 내의 여러 테이블에서 가져온 레코드를 조합해서 하나의 테이블이나 결과 집합으로 표현
select 
	tb_user.username,
    tb_profile.userage,
    tb_profile.userbirthdate,
    tb_profile.userblood
from tb_profile
# where tb_user.idx = tb_profile.idx
join tb_user on tb_profile.useridx = tb_user.useridx
;

#별칭 사용
select 
	u.username,
    p.userage,
    p.userbirthdate,
    p.userblood
from tb_profile p
join tb_user u on p.useridx = u.useridx
;

# outer join : 조건이 일치하지 않더라도 한쪽 테이블의 데이터는 모두 결과로 생성
select
u.username,
p.userage,
p.userbirthdate,
p.userblood
from tb_profile p
	right outer join tb_user u on p.useridx = u.useridx
;
select
u.username,
p.userage,
p.userbirthdate,
p.userblood
from tb_profile p
	left outer join tb_user u on p.useridx = u.useridx
;
select
u.username,
p.userage,
p.userbirthdate,
p.userblood
from tb_profile p
	full outer join tb_user u on p.useridx = u.useridx
;

delete from tb_profile;
delete from tb_user;



