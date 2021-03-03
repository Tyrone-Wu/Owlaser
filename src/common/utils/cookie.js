class COOKIE {
	setCookie = (cname, cvalue, exdays) => {
		let d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		let expires = 'expires=' + d.toGMTString();
		document.cookie = cname + '=' + cvalue + '; ' + expires;
	};

	getCookie = (cname) => {
		let name = cname + '=';
		let ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i].trim();
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	};
	delCookie = (name) => {
		let exp = new Date();
		exp.setTime(exp.getTime() - 1);
		let cval = this.getCookie(name);
		if (cval != null)
			document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
	};
}

export default new COOKIE();
