use frontend;
insert into tb_board (boardtitle, userid, boardcontent)
values('apple이 쓴 게시글','apple','테스트 내용1 입니다.');
insert into tb_board (boardtitle, userid, boardcontent)
values('banana가 쓴 게시글','banana','테스트 내용2 입니다.');
insert into tb_board (boardtitle, userid, boardcontent)
values('cherry가 쓴 게시글','cherry','테스트 내용3 입니다.');
select * from tb_board order by boardidx desc;

insert into tb_board (boardtitle,boardcontent,userid)
(select boardtitle,boardcontent,userid from tb_board);

select * from tb_board where boardidx=162;

create table tb_reply(
	replyidx bigint primary key auto_increment,
	userid varchar(300) not null,
    replycontent varchar(2000) not null,
    replyregdate datetime default now(),
    boardidx bigint
);