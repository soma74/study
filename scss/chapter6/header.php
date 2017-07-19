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
<body>
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