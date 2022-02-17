use frontend;
create table tb_board(
	boardidx bigint auto_increment primary key,
    boardtitle varchar(1000) not null,
    boardcontent text,
    userid varchar(300) not null,
    boardhit int default 0,
    boardregdate datetime default now(),
    boardlike int default 0,
    constraint board_user_fk foreign key(userid)
    references tb_user(userid)
);
select * from tb_board;