(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "选择日期...",
		        "buttonLabel": "点击或按Enter键或空格键打开日历",
		        "prevButtonLabel": "进入前一个月",
		        "nextButtonLabel": "转到下一个月",
		        "closeButtonTitle": "关闭",
		        "closeButtonLabel": "关闭日历",
		        "prevMonthButtonLabel": "进入上一年度",
		        "prevYearButtonLabel": "转到过去二十年",
		        "nextMonthButtonLabel": "转到下一年",
		        "nextYearButtonLabel": "进入未来二十年",
		        "changeMonthButtonLabel": "点击或按Enter键或空格键来更改月份",
		        "changeYearButtonLabel": "点击或按Enter键或空格键变化的一年",
		        "changeRangeButtonLabel": "点击或按Enter键或空格键进入未来二十年",
		        "calendarHelp": "- 向上和向下箭头 - 分​​别去了每周的同一天，在一个或下一个星期。如果该月的末尾为止，持续到下一个或前一个月为适当。\r\n - 左箭头，右箭头 - 前进一天到下一个，也是在连续。视觉上的重点是从日常移动和行包的天格排。\r\n - 控制+向上翻页 - 移动到同一日期前一年。\r\n - 控制+ Page Down键 - 移动到同一日期在明年。\r\n - 主页 - 移动到当前月的第一天。\r\n - 完 - 移动到当前月的最后一天。\r\n - 向上翻页 - 移动到同一日期前一个月。\r\n -  Page Down键 - 移动到同一日期在下个月。\r\n - 输入或协商 - 关闭日历和选定的日期显示在相关联的文本框。\r\n - 逍遥游 - 关闭没有任何操作的日历。"
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "一月",
		        "二月",
		        "三月",
		        "四月",
		        "五月",
		        "六月",
		        "七月",
		        "八月",
		        "九月",
		        "十月",
		        "十一月",
		        "十二月"
		    ],
		    "month_names_abbreviated": [
		        "1月",
		        "2月",
		        "3月",
		        "4月",
		        "5月",
		        "6月",
		        "7月",
		        "8月",
		        "9月",
		        "10月",
		        "11月",
		        "12月"
		    ],
		    "month_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4",
		        "5",
		        "6",
		        "7",
		        "8",
		        "9",
		        "10",
		        "11",
		        "12"
		    ],
		    "day_names": [
		        "星期日",
		        "星期一",
		        "星期二",
		        "星期三",
		        "星期四",
		        "星期五",
		        "星期六"
		    ],
		    "day_names_abbreviated": [
		        "周日",
		        "周一",
		        "周二",
		        "周三",
		        "周四",
		        "周五",
		        "周六"
		    ],
		    "day_names_short": [
		        "周日",
		        "周一",
		        "周二",
		        "周三",
		        "周四",
		        "周五",
		        "周六"
		    ],
		    "day_names_narrow": [
		        "日",
		        "一",
		        "二",
		        "三",
		        "四",
		        "五",
		        "六"
		    ],
		    "day_periods": {
		        "afternoon": "下午",
		        "am": "上午",
		        "earlyMorning": "清晨",
		        "midDay": "中午",
		        "morning": "上午",
		        "night": "晚上",
		        "noon": "中午",
		        "pm": "下午",
		        "weeHours": "凌晨"
		    },
		    "day_periods_abbreviated": {
		        "afternoon": "下午",
		        "am": "上午",
		        "earlyMorning": "清晨",
		        "midDay": "中午",
		        "morning": "上午",
		        "night": "晚上",
		        "noon": "中午",
		        "pm": "下午",
		        "weeHours": "凌晨"
		    },
		    "day_periods_narrow": {
		        "afternoon": "下午",
		        "am": "上午",
		        "earlyMorning": "清晨",
		        "midDay": "中午",
		        "morning": "上午",
		        "night": "晚上",
		        "noon": "中午",
		        "pm": "下午",
		        "weeHours": "凌晨"
		    },
		    "quarter_names": [
		        "第一季度",
		        "第二季度",
		        "第三季度",
		        "第四季度"
		    ],
		    "quarter_names_abbreviated": [
		        "1季度",
		        "2季度",
		        "3季度",
		        "4季度"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "公元前",
		        "公元"
		    ],
		    "era_names_abbreviated": [
		        "公元前",
		        "公元"
		    ],
		    "era_names_narrow": [
		        "公元前",
		        "公元"
		    ],
		    "full_format": "y年M月d日EEEE",
		    "long_format": "y年M月d日",
		    "medium_format": "y年M月d日",
		    "short_format": "d/M/yy",
		    "firstday_of_week": 0
		};
	}
})();