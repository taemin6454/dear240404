var cnt = 0;
var cntList = new Array();

var final_1 = [14, 16, 27];
var final_2 = [8, 9, 10];
var final_3 = [6, 11, 18];
var final_4 = [4, 5, 21];
var final_5 = [2, 17, 26];
var final_6 = [15, 20, 24];
var final_7 = [3, 7, 19];
var final_8 = [13, 22, 23];
var final_9 = [1, 12, 25];

$(document).ready(function () {
    //HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.
});

$(function () {
    var input = document.getElementById("vd_text");
	
	/*
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            $("#exampleModal").modal("show");
        }
    });
	*/
	
    $("#exampleModal").on("shown.bs.modal", function () {
        $("#vd_modal").removeClass("vd_box_show");
        var text = $("#vd_text").val();

        if (text == "") {
            $("#exampleModal").modal("hide");
            alert("먼저 파도에 적을 내용을 입력해주세요.");
        } else {
            $("#vd_text").val("");
            $("#vd_modal").addClass("vd_box_show");
            $("#pado_modal").text(text);
            $("#pado_modal").addClass("vd_box_back");

            var time = 1;
            var timer = setInterval(function () {
                time = time + 1;
                if (time == 5) {
                    //$("#pado_modal").text("");
                    $("#pado_modal").fadeOut(2000, "linear", function () {
                        $("#pado_modal").text("");
                        time = 1;
                        clearInterval(timer);
                        $("#exampleModal").modal("hide");
                        $("#pado_modal").show();
                    });
                }
            }, 1000);
        }
    });

    /*
      $('#vd_text').on("blur", function () {
          var time = 1;
          var timer = setInterval(function() {
              time = time + 1;
              if(time == 9) {
                  $("#vd_text").val("");
                  time = 1;
                  clearInterval(timer);
              }
          }, 1000);
          
      });
      */
});

function fnMovePage(id, nextID) {
    if (nextID == "final") {
        //console.log(cntList);
        if (cntList.length == 27) {
            var final_cnt_1 = 0;
            var final_cnt_2 = 0;
            var final_cnt_3 = 0;
            var final_cnt_4 = 0;
            var final_cnt_5 = 0;
            var final_cnt_6 = 0;
            var final_cnt_7 = 0;
            var final_cnt_8 = 0;
            var final_cnt_9 = 0;
            var sum_final_score = 0;
            cntList.map(function (element) {
                final_1.map(function (element1) {
                    if (
                        element.get("step_" + element1) != undefined && 
                        element.get("step_" + element1) != null
                    ) {
                        //console.log(element.get("step_" + element1));
                        final_cnt_1 += element.get("step_" + element1);
                    }
                });

                final_2.map(function (element2) {
                    if (
                        element.get("step_" + element2) != undefined &&
                        element.get("step_" + element2) != null
                    ) {
                        //console.log(element.get("step_" + element2));
                        final_cnt_2 += element.get("step_" + element2);
                    }
                });

                final_3.map(function (element3) {
                    if (
                        element.get("step_" + element3) != undefined &&
                        element.get("step_" + element3) != null
                    ) {
                        //console.log(element.get("step_" + element3));
                        final_cnt_3 += element.get("step_" + element3);
                    }
                });
                
                final_4.map(function (element3) {
                    if (
                        element.get("step_" + element3) != undefined &&
                        element.get("step_" + element3) != null
                    ) {
                        //console.log(element.get("step_" + element3));
                        final_cnt_4 += element.get("step_" + element3);
                    }
                });
                
                final_5.map(function (element3) {
                    if (
                        element.get("step_" + element3) != undefined &&
                        element.get("step_" + element3) != null
                    ) {
                        //console.log(element.get("step_" + element3));
                        final_cnt_5 += element.get("step_" + element3);
                    }
                });
                
                final_6.map(function (element3) {
                    if (
                        element.get("step_" + element3) != undefined &&
                        element.get("step_" + element3) != null
                    ) {
                        //console.log(element.get("step_" + element3));
                        final_cnt_6 += element.get("step_" + element3);
                    }
                });
                
                final_7.map(function (element3) {
                    if (
                        element.get("step_" + element3) != undefined &&
                        element.get("step_" + element3) != null
                    ) {
                        //console.log(element.get("step_" + element3));
                        final_cnt_7 += element.get("step_" + element3);
                    }
                });
                
                final_8.map(function (element3) {
                    if (
                        element.get("step_" + element3) != undefined &&
                        element.get("step_" + element3) != null
                    ) {
                        //console.log(element.get("step_" + element3));
                        final_cnt_8 += element.get("step_" + element3);
                    }
                });
                
                final_9.map(function (element3) {
                    if (
                        element.get("step_" + element3) != undefined &&
                        element.get("step_" + element3) != null
                    ) {
                        //console.log(element.get("step_" + element3));
                        final_cnt_9 += element.get("step_" + element3);
                    }
                });
            });
            var finalin = Math.max(final_cnt_1, final_cnt_2, final_cnt_3, final_cnt_4, final_cnt_5, final_cnt_6, final_cnt_7, final_cnt_8, final_cnt_9);
            //console.log(finalin);
            $(id).addClass("none");
			//$("#section_final").removeClass("none", "");
            
            if(final_cnt_1 == finalin) {
				$("#section_dtl").css({"background-image" : "url('./img/fianl_result1.png')"});
			} else if(final_cnt_2 == finalin) {
				$("#section_dtl").css({"background-image" : "url('./img/fianl_result2.png')"});
			} else if(final_cnt_3 == finalin) {
				$("#section_dtl").css({"background-image" : "url('./img/fianl_result3.png')"});
			} else if(final_cnt_4 == finalin) {
				$("#section_dtl").css({"background-image" : "url('./img/fianl_result4.png')"});
			} else if(final_cnt_5 == finalin) {
				$("#section_dtl").css({"background-image" : "url('./img/fianl_result5.png')"});
			} else if(final_cnt_6 == finalin) {
				$("#section_dtl").css({"background-image" : "url('./img/fianl_result6.png')"});
			} else if(final_cnt_7 == finalin) {
				$("#section_dtl").css({"background-image" : "url('./img/fianl_result7.png')"});
			} else if(final_cnt_8 == finalin) {
				$("#section_dtl").css({"background-image" : "url('./img/fianl_result8.png')"});
			} else if(final_cnt_9 == finalin) {
				$("#section_dtl").css({"background-image" : "url('./img/fianl_result9.png')"});
			}
			$("#section_final").show();
            fn_move_detail();
            
        } else {
            alert("모든 항목을 선택하신 이후에 진행하여주세요!!");
        }
    } else {
        $(id).addClass("none");
        $(nextID).removeClass("none", "");
    }
}

function fnMoveNextContent(id, clsNM, num) {
    var cntMap = new Map();
    var cntBool = false;
    $("#" + id + " li").removeClass("active", "");
    $("#" + id + " ." + clsNM).addClass("active");
    
    cntList.map(function (element) {
        if (element.get(id) != undefined && element.get(id) != null) {
            cntBool = true;
            element.delete(id);
            element.set(id, num);            
        }
        return cntBool;
    });
    if (!cntBool) {
        cntMap.set(id, num);
        cntList.push(cntMap);
    }
    
    if (cntList.length == 27) {
		 fnMovePage('#section_1', 'final');
	}
}
var myVar;
function fn_move_detail() {
	$("#load_msg").show();
	//$("#section_final").hide();
	
	myVar = setTimeout(showPage, 3000);
}


function showPage() {
	$("#load_msg").hide();
	$("#section_final").hide();
	$("#section_dtl").show();
}