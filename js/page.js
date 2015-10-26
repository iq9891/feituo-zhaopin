$(function() { 

	var $doc = $(document),
		fRan = Math.random,
		$aImg = $(".aImg"),
		$aCornerLT = $(".aCornerLT"),
		$aCornerRB = $(".aCornerRB"),
		$aCorner = $(".aCorner"),
		$sa1ListLi = $(".sa1ListLi"),
		$sa1ListLiTop = $(".sa1ListLiTop"),
		$sa1TitBox = $(".sa1TitBox"),
		$sa1titTop = $(".sa1titTop"),
		$sa1tit = $(".sa1tit"),
		sTranEnd = 'webkitTransitionEnd',
		sAnimEnd = "webkitAnimationEnd",
		bCanMove = true,
		iNow = 0,
		$scroll = $(".scroll"),
		$scrollArea = $(".scrollArea"),
		$saTitBotArea = $(".saTitBotArea"),
		$tk = $(".tk"),
		$close = $(".close"),
		iTop = $scrollArea.height(),
		iLen = $scrollArea.length,
		sEnd = sTranEnd,
		myScroll = null,
		od = 'ontouchstart' in window ? "tap":"click";

	in1Fn();

	$doc.swipeUp(function(e){
		if(iNow == iLen-1 || !bCanMove){return;}
		bCanMove = false;
		$scroll.css({ marginTop: -iTop * ++iNow +'px' });
		$doc.on(sTranEnd, upEndFn);
	}).swipeDown(function(e){
		if(iNow == 0 || !bCanMove){return;}
		bCanMove = false;
		$scroll.css({ marginTop: -iTop * --iNow +'px' });
		$doc.on(sTranEnd, downEndFn);
	});
	
	//运动之后
	function upEndFn(){
		bCanMove = true;
		switch(iNow){
			case 1:
				out1Fn();
				in2Fn();
				break; 
			case 7:
				outFn(iNow-1);
				inEndFn(iNow);
				break; 
			case 2:
				out2Fn();
			default:
				outFn(iNow-1);
				inFn(iNow);
		}
		if(iNow == iLen-1){
			hidePageFn();
		}else{
			showPageFn();
		}
		$doc.off(sTranEnd, upEndFn);
	}
	function downEndFn(){
		bCanMove = true;
		switch(iNow){
			case 0:
				out2Fn();
				in1Fn();
				break; 
			case 6:
				inFn(iNow);
				outEndFn(iNow+1);
				break; 
			case 1:
				in2Fn();
				outFn(iNow+1);
				break; 
			default:
				outFn(iNow+1);
				inFn(iNow);
		}
		if(iNow == iLen-1){
			hidePageFn();
		}else{
			showPageFn();
		}
		$doc.off(sTranEnd, downEndFn);
	}

	//进场7
	function inEndFn(iNow){
	
		var $sa4TitBox = $(".sa"+iNow+"TitBox"),
			$sa4titTop = $(".sa"+iNow+"titTop"),
			$saTit3 = $(".saTit"+(iNow-1)),
			$saTitBotInfoPreheat3 = $(".saTitBotInfoPreheat"+(iNow-1));
		//标题
		$sa4TitBox.addClass("titBoxAnim").on(sAnimEnd, titBoxAnimFn);

		function titBoxAnimFn(){
			$sa4TitBox.off(sAnimEnd, titBoxAnimFn);
			$sa4titTop.addClass("titOfficeTopAnim").on(sAnimEnd, sa4titTopAnimFn);
		}
		function sa4titTopAnimFn(){
			$sa4titTop.off(sAnimEnd, sa4titTopAnimFn);
			$saTit3.addClass("showBig").on(sAnimEnd, titAnimFn);
		};
		function titAnimFn(){
			$saTit3.off(sAnimEnd, titAnimFn);
			$saTitBotInfoPreheat3.addClass("saTitBotInfoPreheatAnim").on(sAnimEnd, inMainFn);
		}

		//主体动画
		function inMainFn(){
			var $sa6Info = $(".sa6Info"),
				$inToTopRan = $(".inToTopRan"),
				$sa6Yacht = $(".sa6Yacht"),
				$sa6SunBox = $(".sa6SunBox");
			$saTitBotInfoPreheat3.off(sAnimEnd, inMainFn);
			$(".sa6Earth").addClass("inToTopAnim").on(sAnimEnd, function(){
				$inToTopRan.addClass("inToTopAnim").eq(-1).on(sAnimEnd, inToTopEndFn);
					
				function inToTopEndFn(){
					$(this).off(sAnimEnd, inToTopEndFn);
					$sa6SunBox.addClass("showInAnim");
					$sa6Info.addClass("fadeInUpAnim").on(sAnimEnd, function(){
						$saTitBotInfoPreheat3.addClass("saTitBotInfoPreheatAnim2");
					});
				}

			});
		};
	};
	
	//出场7
	function outEndFn(iNow){
		
		var $sa4TitBox = $(".sa"+iNow+"TitBox"),
			$sa4titTop = $(".sa"+iNow+"titTop"),
			$saTit3 = $(".saTit"+(iNow-1)),
			$saTitBotInfoPreheat3 = $(".saTitBotInfoPreheat"+(iNow-1)),
			$inToTopRan = $(".inToTopRan"),
			$sa6Info = $(".sa6Info"),
			$sa6SunBox = $(".sa6SunBox");

		$sa4TitBox.removeClass("titBoxAnim");
		$sa4titTop.removeClass("titOfficeTopAnim");
		$saTit3.removeClass("showBig");
		$saTitBotInfoPreheat3.removeClass("saTitBotInfoPreheatAnim saTitBotInfoPreheatAnim2");
		$(".sa6Earth").removeClass("inToTopAnim");
		$inToTopRan.removeClass("inToTopAnim");
		$sa6SunBox.removeClass("showInAnim");
		$sa6Info.removeClass("fadeInUpAnim");
	};
	
	//进场6
	function inFn(iNow){
		var $sa4TitBox = $(".sa"+iNow+"TitBox"),
			$sa4titTop = $(".sa"+iNow+"titTop"),
			$saTit3 = $(".saTit"+(iNow-1)),
			$saTitBotInfoPreheat3 = $(".saTitBotInfoPreheat"+(iNow-1));

		//标题
		$sa4TitBox.addClass("titBoxAnim").on(sAnimEnd, titBoxAnimFn);

		function titBoxAnimFn(){
			$sa4TitBox.off(sAnimEnd, titBoxAnimFn);
			$sa4titTop.addClass("titOfficeTopAnim").on(sAnimEnd, sa4titTopAnimFn);
		}
		function sa4titTopAnimFn(){
			$sa4titTop.off(sAnimEnd, sa4titTopAnimFn);
			$saTit3.addClass("showBig").on(sAnimEnd, titAnimFn);
		};
		function titAnimFn(){
			$saTit3.off(sAnimEnd, titAnimFn);
			$saTitBotInfoPreheat3.addClass("saTitBotInfoPreheatAnim").on(sAnimEnd, in4MainFn);
		}

		//主体动画
		function in4MainFn(){
			$saTitBotInfoPreheat3.off(sAnimEnd, in4MainFn);
			$(".saEllipse"+(iNow-1)).addClass("showInAnim").on(sAnimEnd, function(){			
				$(".sa"+iNow+"Pattern").addClass("sa4PatternAnim").eq(-1).on(sAnimEnd, patternEndFn);
				function patternEndFn(){
					$(".sa"+iNow+"People").addClass("showInAnim").on(sAnimEnd, function(){
						$saTitBotInfoPreheat3.addClass("saTitBotInfoPreheatAnim2");
					});
				};
			});
		};
	};

	//出场6
	function outFn(iNow){
		var $sa4TitBox = $(".sa"+iNow+"TitBox"),
			$sa4titTop = $(".sa"+iNow+"titTop"),
			$saTit3 = $(".saTit"+(iNow-1)),
			$saTitBotInfoPreheat3 = $(".saTitBotInfoPreheat"+(iNow-1));
		//标题
		$sa4TitBox.removeClass("titBoxAnim");
		$sa4titTop.removeClass("titOfficeTopAnim");
		$saTit3.removeClass("showBig");
		$saTitBotInfoPreheat3.removeClass("saTitBotInfoPreheatAnim saTitBotInfoPreheatAnim2");
		$(".sa"+iNow+"People").removeClass("showInAnim");
		$(".saEllipse"+(iNow-1)).removeClass("showInAnim");
		$(".sa"+iNow+"Pattern").removeClass("sa4PatternAnim");
	};

	//进场2
	function in2Fn(){
		
		$sa1TitBox.addClass("titBoxAnim").on(sAnimEnd, titBoxAnimFn);

		function titBoxAnimFn(){
			$sa1TitBox.off(sAnimEnd, titBoxAnimFn);
			$sa1titTop.addClass("titTopAnim").on(sAnimEnd, titTopAnimFn);
		}
		function titTopAnimFn(){
			$sa1titTop.off(sAnimEnd, titTopAnimFn);
			$sa1tit.addClass("showBig").on(sAnimEnd, titAnimFn);
		};
		function titAnimFn(){
			$sa1tit.off(sAnimEnd, titAnimFn);
			$sa1ListLi.addClass("sa1ListLiAnim");
			$sa1ListLiTop.addClass("sa1ListLiTopAnim");
		}
	};
	//出场2
	function out2Fn(){
		$sa1TitBox.removeClass("titBoxAnim");
		$sa1titTop.removeClass("titTopAnim");
		$sa1tit.removeClass("showBig");
		$sa1ListLi.removeClass("sa1ListLiAnim");
		$sa1ListLiTop.removeClass("sa1ListLiTopAnim");
	};
	//进场1
	function in1Fn(){
		$aCornerLT.addClass("aCornerLTAnim");
		$aCornerRB.addClass("aCornerRBAnim").on(sAnimEnd, function(){
			$aImg.addClass("showBig");
		});
	};
	//出场1
	function out1Fn(){
		$aCornerLT.removeClass("aCornerLTAnim");
		$aCornerRB.removeClass("aCornerRBAnim")
		$aImg.removeClass("showBig");
	};
		
	//显示隐藏箭头
	function showPageFn(){
		$(".goTop").show();
	};
	function hidePageFn(){
		$(".goTop").hide();
	};

	//滚动
	function gundongFn(){
		myScroll = new IScroll('#tkCon', { scrollbars: 'custom',click:true});
	};
	
	gundongFn();
	showTkFn();
	//显示弹框
	function showTkFn(){
		var aInfo = [
				'<h2 class="w100 fs36 mid tkH2">岗位职责</h2><p class="fs28 tkInfo">负责部门相关HTML5项目与WEB/WAP项目功能开发，其他项目协助执行。</p><h2 class="w100 fs36 mid tkH2 tkH2Matop">任职要求</h2><p class="fs28 tkInfo">1、3~5年以上项目开发经验，熟悉B/S开发模式，具备独立开发能力；</p><p class="fs28 tkInfo">2、熟悉SQLServer开发，可设计SQL Server 和 Oracle 数据库系统的视图、存储过程；</p><p class="fs28 tkInfo">3、熟悉并精通C#，有Mvc项目开发经验，掌握Js、jqurey、div+css；</p><p class="fs28 tkInfo">4，有微信应用开发经验者优先。</p>',
			'<h2 class="w100 fs36 mid tkH2">岗位职责</h2><p class="fs28 tkInfo">1、根据产品需求完成产品前端展示效果和交互功能；</p><p class="fs28 tkInfo">2、在已有基础上设计重构方案，并进行重构工作。</p><h2 class="w100 fs36 mid tkH2 tkH2Matop">任职要求</h2><p class="fs28 tkInfo">1、精通HTML5/CSS3，3年以上前端开发经验；</p><p class="fs28 tkInfo">2、精通DIV+CSS和W3C标准，能熟练运用XHTML、CSS进行合理的网页制作，深刻理解各主流浏览器之间的兼容性（必须）；</p><p class="fs28 tkInfo">3.、熟悉Javascript/Json/XML/HTML5等前端技术，熟练使用JQuery框架；</p><p class="fs28 tkInfo">4、有移动Web开发经验者优先，有JS游戏开发经验者优先。</p>',

			'<h2 class="w100 fs36 mid tkH2">岗位职责</h2><p class="fs28 tkInfo">1、负责技术部门的团队力量建设与人才的培养；</p><p class="fs28 tkInfo">2、负责微信业务线、短彩平台业务管理与研发；</p><p class="fs28 tkInfo">3、负责HTML5/WEB/WAP/短彩互动业务线管理与研发；</p><p class="fs28 tkInfo">4、负责公司内部效率平台管理与研发；</p><p class="fs28 tkInfo">5、负责系统核心代码与功能的把关与评审；</p><p class="fs28 tkInfo">6、负责公司产品开发工作的计划、实施；</p><p class="fs28 tkInfo">7、负责指导、处理、协调和解决公司项目中出现的技术问题。</p><h2 class="w100 fs36 mid tkH2 tkH2Matop">任职要求</h2><p class="fs28 tkInfo">1、8年以上工作经验，其中5年以上开发工作经验，3年以上技术团队（十人以上）管理经验；</p><p class="fs28 tkInfo">2、具备web、wap和手机客户端无线应用产品的研究和开发经验；</p><p class="fs28 tkInfo">3、对无线互联网、互联网、有浓厚兴趣和深入了解；</p><p class="fs28 tkInfo">4、有前、后端\.net 开发工作经验；</p><p class="fs28 tkInfo">5、领导团队高效率完成研发任务。</p>',

			'<h2 class="w100 fs36 mid tkH2">岗位职责</h2><p class="fs28 tkInfo">1、开拓、维护行业客户并达成相应的业绩要求；</p><p class="fs28 tkInfo">2、能够带领团队制定操作性强的行销方案、客户提案并很好地完成销售任务；</p><p class="fs28 tkInfo">3、按时完成下达的销售任务指标，能够维护好长期客户；</p><p class="fs28 tkInfo">4、协调各部门资源，保证项目顺利上线和执行；</p><p class="fs28 tkInfo">5、及时完成合同签订及合同回款。</p><h2 class="w100 fs36 mid tkH2 tkH2Matop">任职要求</h2><p class="fs28 tkInfo">1、本科以上学历，市场营销、广告学等优先考虑；</p><p class="fs28 tkInfo">2、6年以上互联网广告从业经验，有成熟的客户资源；</p><p class="fs28 tkInfo">3、具有较强的项目分析，能够制定相应的营销策略、计划、任务；</p><p class="fs28 tkInfo">4、具有敏锐的市场判断能力、独立的谈判能力、管理团队能力以及对团队的操控能力。</p>',

			'<h2 class="w100 fs36 mid tkH2">岗位职责</h2><p class="fs28 tkInfo">1、负责效果广告用户行为分析，如用户画像建设、用户兴趣/意图挖掘、相似用户挖掘等；</p><p class="fs28 tkInfo">2、负责效果广告文本语义分析，如关键词抽取、文本分类、主题建模LDA等；</p><p class="fs28 tkInfo">3、负责广告受众定向（如行为定向、再营销等）策略研究；</p><p class="fs28 tkInfo">4、负责效果广告大规模用户数据挖掘开发与研究。</p><p class="fs28 tkInfo">5、本科及以上学历，自然语言处理、机器学习、数据挖掘或相关专业。</p><h2 class="w100 fs36 mid tkH2 tkH2Matop">任职要求</h2><p class="fs28 tkInfo">1、3年以上相关工作经验；</p><p class="fs28 tkInfo">2、基础扎实，编码过关，熟悉常用的算法和数据结构；</p><p class="fs28 tkInfo">3、熟悉Linux 操作系统开发环境，精通C++，熟悉Python、Java 更好；</p><p class="fs28 tkInfo">4、有推荐系统、广告系统相关从业经验者优先；</p><p class="fs28 tkInfo">5、具有海量数据处理和并行计算开发经验者优先。</p>',

			'<h2 class="w100 fs36 mid tkH2">关于飞拓无限</h2><p class="fs28 tkInfo">飞拓无限是无线营销的开创者和领航者，与所有手机用户零距离、全覆盖互动。</p><p class="fs28 tkInfo">作为无线行业的核心力量，飞拓在客户、媒体、服务、创新上的独特优势保证为客户提供最有价值的服务。针对不同的客户群体定制产品体系，已经为400多家品牌客户提供了专业无线整合营销方案。</p><p class="fs28 tkInfo">飞拓无限自成立至今荣获最佳ROI年度金奖，2013年度中国艾菲(EFFIE AWARDS)特殊贡献奖，荣登通信产业榜移动互联网企业十佳，《福布斯》2013移动互联网榜单，荣登营销类第一名等各类荣誉奖项。</p><p class="fs28 tkInfo">更多信息请登录公司官网<br /><a href="http://www.fractalist.com.cn/wx/index.html" class="c7f7e7e">www.fractalist.com.cn</a></p>'
		],
		$tkInfoArea = $(".tkInfoArea");
		$saTitBotArea.on(od, function(){
			$tkInfoArea.html("").append(aInfo[iNow-2]);
			myScroll.refresh();
			tkInFn();
		});
		$close.on(od, function(){
			tkOutFn();
			myScroll.scrollToElement($('#tkCon h2').eq(0).get(0), null, null, true)
		});
	};

	function tkInFn(){
		bCanMove = false;
		$tk.removeClass("tkOutAnim");
		$tk.addClass("tkInAnim");
	};
	function tkOutFn(){
		bCanMove = true;
		$tk.removeClass("tkInAnim");
		$tk.addClass("tkOutAnim");
	};

	$doc.get(0).addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
});