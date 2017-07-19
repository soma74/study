<!DOCTYPE html>
<html lang="ko-kr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>에듀티켓</title>
    <link href="./css/bootstrap.min.css" rel="stylesheet">
    <link href="./css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="frontback1">
<div class="container-fluid">
<nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- 이 부분이 사이트의 로고와 모바일 사이트의 경우 토글 메뉴로 네비게이션 부분을 처리해 주는 곳입니다. -->
        <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand text-hide" href="#">에듀티켓 </a> <!--에듀티켓 로고가 들어가는 부분을 텍스트로 처리하고 . text-hide 속성을 이용하여 실제 텍스트는 감춘 후 배경이미지를 이용하여 처리하였습니다. -->
        </div>
<!--실제 네비게이션 링크들이 걸리는 곳입니다. -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="#">추천요청하기</a></li>
            <li><a href="#">체험학습 찾기</a></li>
            <li><a href="#">서비스소개</a></li>
            <li><a href="#">이용안내</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="/select_user_type">회원가입</a></li>
            <a href="/login" class="btn btn-white">로그인</a>        
         </ul>
        </div><!-- /.navbar-collapse -->
      </div>
     </div><!-- /.container-fluid -->
    </nav>
</div>
<article class="centerbox text-center">
    <div class="container  text-center">
     <div class="txtpart">
      <h2> 대학로 연극, 세종문화회관 뮤지컬, 박물관 관람 등</h2>
      <h1><strong>체험학습 추천 서비스</strong></h1>      
        <a href="/list" type="button" class="btn btn-lg btn-danger">1초 만에 시작하기</a>
     </div>
       <div class="text-hide"><a href='http://www.freepik.com/free-photo/smiling-students-with-backpacks_858421.htm'>Designed by Freepik</a></div>
    </div>
</article>
<div class="container-fluid footpart">
   <footer class="container">
    <div class="row">
      <div class="col-xs-3 col-xs-offset-1">
        <h2><i class="fa fa-phone"></i> 1800-6403</h2>
        <h5>8:00 AM ~ 6:00 PM (토,일 공휴일 휴무)</h5>
        <h5>이메일 help@ticketplace.net </h5>        
      </div>
      <div class="col-xs-8 rightside">
          <ul class="list-inline footlink">
            <li><a href="#">에듀티켓 소개 </a></li>
            <li><a href="#">이용안내</a></li>
            <li><a href="#">고객센터 </a></li>    
            <li>제휴문의:1899-1534 </li>           
          </ul>
          <ul class="list-unstyled copy-txt">
            <li>대표이사 : 한세진, 한준희 | 사업자 등록번호 : 145-87-00100  개인정보 관리 책임자 : 한세진 help@ticketplace.net</li>
            <li>  서울시 종로구 창경궁로 271-1 동양서림 401호 (주)티켓플레이스   Copyright 2015 @Ticketplace Inc.</li>
          </ul>  
      </div>
    </div>    
   </footer>
 </div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>  
<script src="js/sticky-header.js"></script> 
<script type="text/javascript">
      $(document).ready(function(){
         $('.navbar-default').stickMe(); 
      })
 </script>

</body>
</html>

