import Vue from "vue"
import moment from "moment"

Vue.prototype.moment = moment

Vue.filter("formatDate", str => {
	if (str != null) {
		return moment(str).format('ll');
	}
	return "";
})

Vue.filter("calendarDate", str => {
	if (str != null) {
		return moment(str).format("YYYY-MM-DD hh:mm:ss");
	}
	return "";
})