// top버튼
$(window).scroll(function () {
    let topButton = $("#top_button");

    // 스크롤 값이 100px 이상일 때 버튼을 보이게
    if ($(this).scrollTop() > 1000) {
        topButton.show();  // fadeIn()을 사용하여 부드럽게 나타나게 할 수 있습니다.
    } else {
        topButton.hide(); // fadeOut()을 사용하여 부드럽게 사라지게 할 수 있습니다.
    }
});

$("#top_button").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});



// 햄버거버튼
$(document).ready(function() {
    // 햄버거 버튼 클릭 시 메뉴 열기
    $(".m_btn").click(function(){
        $("#m_menu").addClass("active");
    });

    // 닫기 버튼 클릭 시 메뉴 닫기
    $(".close_btn").click(function(){
        $("#m_menu").removeClass("active");
    });

    // 메뉴 항목 클릭 시 메뉴 닫기
    $(".m_gnb li a").click(function(){
        $("#m_menu").removeClass("active");
    });
});



//popup
$(document).ready(function () {
    $("#modal").hide(); // 처음에는 숨김

    $(".popup_open").click(function (e) {
        e.preventDefault();
        $("#modal").fadeIn(200);
        $("#popup input[type='checkbox']").prop("checked", false);
    });

    $(".popup_close").click(function () {
        $("#modal").fadeOut(200);
    });

    $("#popup").click(function (e) {
        e.stopPropagation(); // 팝업 내부 클릭 시 이벤트 전파 방지
    });
});



// 페이드 방향변경
$(document).ready(function () {
    function updateAOS() {
        let $element = $('.pro_aos');

        if ($(window).width() < 768) {
            $element.attr('data-aos', 'fade-down');
            $element.attr('data-aos-duration', '300');
        } else {
            $element.attr('data-aos', 'fade-right');
            $element.attr('data-aos-duration', '500');
        }

        AOS.refresh(); // 변경 사항 적용
    }

    // 페이지 로드 & 리사이즈 시 실행
    updateAOS();
    $(window).on('resize', updateAOS);
});



// search 내용 변경
function updatePlaceholder() {
    const input = document.getElementById("searchInput");
    if (window.innerWidth <= 700) {
      input.placeholder = "역 이름 입력";
    } else {
      input.placeholder = "가까운 동,역 이름을 입력하세요.";
    }
  }
  
  // 초기 실행
  updatePlaceholder();
  
  // 창 크기 변경 시 업데이트
  window.addEventListener("resize", updatePlaceholder);