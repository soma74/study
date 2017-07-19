<?php include "header.php"; ?>
  <div class="container-fluid detail-header">
    <article class="container">
      <div class="row">
        <section class="col-xs-12 col-sm-4  poster-img" style="background:url(./imgs/poster2.jpg) no-repeat center; background-size: cover;"> 
        </section>     
        <section class="col-xs-12 col-sm-8">
          <div class="dpart1">
            <h2>삼봉이발소</h2>
            <h4><label>개인가 :</label> <s> 30,000원</s></h4>
            <h4><label>단체가 : </label> <strong>에듀티켓 회원 전용가</strong> 
            <i class="fa fa-question-circle" aria-hidden="true"></i></h4>
          </div>
          <div class="dpart2">
            <h4>체험학습 요약 </h4>
            <p> &#39;외모지상주의&#39;라는 소재를 유쾌하게 풀어낸, 탄탄한 스토리의 하일권 작가 원작의 연극입니다. 원작은 국어교과서에 실렸을 정도로 재미와 교육성을 모두 갖추어 학생들과 선생님의 만족도가 매우 높습니다.</p>
          </div>
          <div class="dpart3">
            <div class="row">
              <div class="col-xs-12 col-sm-5">
                <ul class="list-unstyled">
                  <li><i class="fa fa-map-marker" aria-hidden="true"></i> 서울/대학로</li>
                  <li><i class="fa fa-th-large" aria-hidden="true"></i> 공연/연극</li>
                  <li><i class="fa fa-clock-o" aria-hidden="true"></i> 80분</li>
                  <li><i class="fa fa-users" aria-hidden="true"></i> 최대 115명</li>
                </ul>
              </div>
              <div class="col-xs-12  col-sm-7">
                <ul class="list-unstyled tag-border">
                  <li><i class="fa fa-star" aria-hidden="true"></i>교훈, 중/고등학교, 선생님대만족, 진로체험, 교훈  </li>
                  <li><i class="fa fa-tag" aria-hidden="true"></i>교훈, 국어교과서수록, 하일권원작, 외모지상주의   </li>
                </ul>
                <button  class="btn btn-danger">체험학습 추천받기   </button>
                <button  class="btn btn-success">일정확인 & 견적받기 </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  </div>

  
  <article class="container-fluid grayback3 carousel-fluid hidden-xs">
    <div class="container custom-carousel">
      <div id="carousel-generic" class="carousel slide ">
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <a href="./imgs/s1.jpg" data-lightbox="playpic"
               style="background:url(./imgs/s1.jpg) no-repeat center; background-size: cover;">
              <img src="./imgs/s1.jpg">
            </a> 
            <a href="./imgs/s2.jpg" data-lightbox="playpic"
               style="background:url(./imgs/s2.jpg) no-repeat center; background-size: cover;">
              <img src="./imgs/s2.jpg">
            </a>
            <a href="./imgs/s3.jpg" data-lightbox="playpic"
               style="background:url(./imgs/s3.jpg) no-repeat center; background-size: cover;">
              <img src="./imgs/s3.jpg">
            </a> 
            <a href="./imgs/s4.jpg" data-lightbox="playpic"
               style="background:url(./imgs/s4.jpg) no-repeat center; background-size: cover;">
              <img src="./imgs/s4.jpg">
            </a>
          </div>   
          <div class="item">
            <a href="./imgs/s1.jpg" data-lightbox="playpic"
               style="background:url(./imgs/s1.jpg) no-repeat center; background-size: cover;">
              <img src="./imgs/s1.jpg">
            </a> 
            <a href="./imgs/s2.jpg" data-lightbox="playpic"
               style="background:url(./imgs/s2.jpg) no-repeat center; background-size: cover;">
              <img src="./imgs/s2.jpg">
            </a>
            <a href="./imgs/s3.jpg" data-lightbox="playpic"
               style="background:url(./imgs/s3.jpg) no-repeat center; background-size: cover;">
              <img src="./imgs/s3.jpg">
            </a> 
            <a href="./imgs/s4.jpg" data-lightbox="playpic"
               style="background:url(./imgs/s4.jpg) no-repeat center; background-size: cover;">
              <img src="./imgs/s4.jpg">
            </a>
          </div>                 
        </div>
          <!-- Controls -->
          <a class="left carousel-control" href="#carousel-generic" role="button" data-slide="prev">
            <i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#carousel-generic" role="button" data-slide="next">
            <i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>
            <span class="sr-only">Next</span>
          </a>
        </div>

      </div>
    </article>   

    <article class="container-fluid">
      <div class="container hidden-xs">
              <!--
          * Daum 지도 - 약도서비스
          * 한 페이지 내에 약도를 2개 이상 넣을 경우에는
          * 약도의 수 만큼 소스를 새로 생성, 삽입해야 합니다.
        -->
        <!-- 1. 약도 노드 -->
        <div id="daumRoughmapContainer1465450823591" class="root_daum_roughmap root_daum_roughmap_landing"></div>

        <!-- 2. 설치 스크립트 -->
        <script charset="UTF-8" class="daum_roughmap_loader_script" src="http://dmaps.daum.net/map_js_init/roughmapLoader.js"></script>

        <!-- 3. 실행 스크립트 -->
        <script charset="UTF-8">
          new daum.roughmap.Lander({
            "timestamp" : "1465450823591",
            "key" : "b9z3",
            "mapWidth" : "960",
            "mapHeight" : "500"
          }).render();
        </script>
      </div>
    </article>  
<?php include "footer.php"; ?>