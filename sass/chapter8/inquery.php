<?php include "header.php"; ?>

<div class="container-fluid inq1 grayback2">
    <div class="container">
      <h1>추천 요청하기 </h1>
      <h4>언제든지 편리한 방법으로 문의하세요. 에듀티켓이 꼭 맞는 체험학습들을 추천해드립니다.</h4>
    </div>
  </div>
  <div class="container-fluid inq2">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="row">
            <div class="col-xs-4 col-sm-2">
              <h2>전화문의 </h2>
            </div>
            <div class="col-xs-8 col-sm-10">
              <h2><a href="tel:1800-6403">1800-6403</a></h2>
            </div>
          </div>
          <h4>운영시간 : 월~금, 오전 9시 ~ 오후 6시</h4>
          <h4>에듀티켓의 전문 상담원이 친절히 상담해 드립니다.</h4>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid inq3">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2>온라인 문의</h2>
          <h4>고객상담센터 운영시간이 아닐 경우, 온라인으로 문의를 남겨주세요.</h4>
          <form id="requestForm" action="" method="post" class="hidden-xs">
            <table class="table innertable">               
              <tr>
                <td>단체명<span>*</span></td>
                <td class="form-inline"> 
                      <input class=" required form-control" id="institution" name="institution" placeholder="단체명을 입력해주세요.  ex) 서울과학고 3학년, 효문중학교 2학년 1반 등" type="text" value="">
                </td>
              </tr>              
              <tr>
                <td>체험 일정<span>*</span></td>
                <td class="form-inline">
                      <input class=" required form-control" id="schedule" name="schedule" placeholder="희망하는 일자/시간대를 알려주세요.  ex) 6월 12일 오전, 9월 둘째 혹은 넷째주 목요일 등 " type="text" value="">
                </td>
              </tr>              
              <tr>
                <td>희망 지역<span>*</span></td>
                <td class="form-inline">
                      <input class=" required form-control" id="location" name="location" placeholder="체험을 희망하는 지역을 적어주세요.  ex) 대학로, 서울 강북, 인천 등" type="text" value="">
                </td>
              </tr>              
              <tr>
                <td>인원<span>*</span></td>
                <td class="form-inline">
                      <input class=" required form-control" id="headcount" name="headcount" placeholder="체험 인원을 입력해주세요.  ex) 교사 5명, 학생 150명" type="text" value="">
                </td>
              </tr>              
              <tr>
                <td>예산<span>*</span></td>
                <td class="form-inline">
                      <input class=" required form-control" id="budget" name="budget" placeholder="1인당 혹은 총 예산을 적어주세요.  ex) 1인당 만원 이하, 총 예산 50만원 등" type="text" value="">
                </td>
              </tr>              
              <tr>
                <td>관심 체험학습</td>
                <td class="form-inline">
                      <input class=" form-control" id="content" name="content" placeholder="희망하는 체험학습을 적어주세요. ex) 시험 끝나고 볼만한 재미있는 연극" type="text" value="">
                </td>
              </tr>         
              <tr>
                <td>담당자 이름<span>*</span></td>
                <td class="form-inline">
                      <input class=" required form-control" id="name" name="name" placeholder="이름을 입력해주세요." type="text" value="">
                </td>
              </tr>                
              <tr>
                <td>휴대폰 번호<span>*</span></td>
                <td class="form-inline">
                      <input class=" required form-control" id="phone" name="phone" placeholder="010-1234-5678" type="text" value="">
                </td>
              </tr>                
              <tr>
                <td>이메일<span>*</span></td>
                <td class="form-inline">
                      <input class=" required form-control" id="email" name="email" placeholder="연락받을 이메일을 입력해주세요." type="text" value="">
                </td>
              </tr>       
              <tr>
                <td>기타 요청사항</td>
                <td class="form-inline">
                      <textarea class=" form-control" id="note" name="note" placeholder="추가로 요청하실 사항이나, 기타 문의사항을 자유롭게 적어주세요." rows="8"></textarea>
                </td>
              </tr>
            </table>
         <button type="button" id="submitButton" class="btn btn-lg btn-danger btn-dtop">추천 요청하기</button>
     </form>
     <form action="" class="visible-xs visible-sm  mobileonly">
            <div class="form-group">
              <label for="">단체명 <span>*</span></label>
              <input type="text" class="form-control" id="" placeholder='단체명을 입력해주세요.  ex) 서울과학고 3학년, 효문중학교 2학년 1반 등'>
            </div>
            <div class="form-group">
              <label for="">체험 일정 <span>*</span></label>
              <input type="text" class="form-control" id=""
                     placeholder="희망하는 일자/시간대를 알려주세요.  ex) 6월 12일 오전, 9월 둘째 혹은 넷째주 목요일 등">
            </div>
            <div class="form-group">
              <label for="">희망 지역 <span>*</span> </label>
              <input type="text" class="form-control" id="" placeholder="체험을 희망하는 지역을 적어주세요.  ex) 대학로, 서울 강북, 인천 등">
            </div>
            <div class="form-group">
              <label for="">인원 <span>*</span></label>
              <input type="text" class="form-control" id="" placeholder="체험 인원을 입력해주세요.  ex) 교사 5명, 학생 150명">
            </div>
            <div class="form-group">
              <label for="">예산 <span>*</span></label>
              <input type="text" class="form-control" id=""
                     placeholder="1인당 혹은 총 예산을 적어주세요.  ex) 1인당 만원 이하, 총 예산 50만원 등">
            </div>
            <div class="form-group">
              <label for="">관심 체험학습</label>
              <input type="text" class="form-control" id="" placeholder="희망하는 체험학습을 적어주세요. ex) 시험 끝나고 볼만한 재미있는 연극">
            </div>
            <div class="form-group">
              <label for="">담당자 이름 <span>*</span></label>
              <input type="text" class="form-control" id="" placeholder="희망하는 체험학습을 적어주세요. ex) 시험 끝나고 볼만한 재미있는 연극">
            </div>
            <div class="form-group">
              <label for="">휴대폰 번호 <span>*</span> </label>
              <input type="text" class="form-control" id="" placeholder="희망하는 체험학습을 적어주세요. ex) 시험 끝나고 볼만한 재미있는 연극">
            </div>
            <div class="form-group">
              <label for="">이메일 <span>*</span></label>
              <input type="text" class="form-control" id="" placeholder="희망하는 체험학습을 적어주세요. ex) 시험 끝나고 볼만한 재미있는 연극">
            </div>
            <div class="form-group">
              <label for="">기타요청사항</label>
              <textarea class="form-control" rows="5"></textarea>
            </div>
            <button type="button" id="submitButton" class="btn btn-danger btn-mobile">추천 요청하기</button>
          </form>
        </div>
      </div>
    </div>
  </div>


  <?php include "footer.php"; ?>