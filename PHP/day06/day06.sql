use frontend;

create table tb_board(
	boardidx bigint auto_increment primary key,
    boardtitle varchar(1000) not null,
    boardcontent text,
    userid varchar(300) not null,
    boardhit int default 0,
    boardregidate datetime default now(),
    boardlike int default 0,
    constraint board_user_fk foreign key(userid) references tb_user(userid)
);
select * from tb_board;

select count(boardidx) total from tb_board;

# 1페이지의 게시글 몰록
select boardidx, boardtitle, userid, boardhit, boardlike, boardregidate
from tb_board order by boardidx desc limit 0, 10;
# 2페이지의 게시글 몰록
select boardidx, boardtitle, userid, boardhit, boardlike, boardregidate
from tb_board order by boardidx desc limit 10, 10;