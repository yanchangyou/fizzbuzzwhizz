//
document.write('<div class="ds-thread"></div>');

var duoshuoQuery = {
	short_name : "yanchangyou",
	sso : {
		login : "http://duoshuo.com/login/",
		logout : "http://duoshuo.com/logout/"
	},
	formPosition : "top"
};
setTimeout(function() {
	var ds = document.createElement('script');
	ds.type = 'text/javascript';
	ds.async = true;
	ds.src = 'http://static.duoshuo.com/embed.js';
	ds.charset = 'UTF-8';
	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
}, 5000);