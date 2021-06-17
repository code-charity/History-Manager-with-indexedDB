USELESS_PARAMS_REGEX = {
	'amazon': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(amazon)(\.[a-zA-Z]{2,})(.*\?.*)/,
		completeProvider: false,
		rules: [
			/pf_rd_[a-zA-Z]=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/qid=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/sr=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/srs=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/.*(adsensecustomsearchads\.com)\/.*/,
			/pd_rd_[a-zA-Z]*=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/__mk_[a-zA-Z]{1,3}_[a-zA-Z]{1,3}=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/spIA=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/ms3_c=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/[a-zA-Z%0-9]*ie=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/refRID=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/colid=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/coliid=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/[^a-zA-Z%0-9]adId=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/qualifier=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/_encoding=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/smid=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/field-lbr_brands_browse-bin=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [
			/.*(amazon\.).*(\/gp).*\/redirector.html\/.*/
		],
		redirections: []
	},
	'fls-na.amazon': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(fls-na\.amazon)(\.[a-zA-Z]{2,}).*/,
		completeProvider: true,
		rules: [],
		exceptions: [],
		redirections: []
	},
	'google': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(google)(\.[a-zA-Z]{2,})(.*\?.*)/,
		completeProvider: false,
		rules: [
			/ved=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/bi[a-zA-Z]*=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/gfe_[a-zA-Z]*=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/ei=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/source=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/gs_[a-zA-Z]*=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/site=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/&\.[^\/|\?|&]*(\/|&(amp;)?)?/,
			/oq=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/esrc=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/uact=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/cd=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/cad=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/gws_[a-zA-Z]*=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/atyp=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/vet=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/zx=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/_u=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/je=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/dcr=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/ie=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/sei=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/sa=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/dpr=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/hl=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/btn[a-zA-Z]*=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/sa=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/usg=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/cd=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/cad=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/uact=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [
			/.*(mail\.google\.).*(\/mail\/u\/0).*/,
			/.*(google\.).*(\/upload)?(\/drive)\/.*/,
			/.*(docs\.google\.).*\/.*/,
			/.*(accounts\.google\.).*/,
			/.*(google\.).*\/searchbyimage\?image_url=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/.*(hangouts\.google\.).*\/webchat.*zx=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/.*(client-channel\.google\.).*\/client-channel.*zx=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/.*(google\.).*\/complete\/search\?.*gs_[a-zA-Z]*=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/.*(google\.).*\/s\?tbm=map.*gs_[a-zA-Z]*=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/.*(news\.google\.).*\?hl=.*/,
			/.*(google\.).*\/setprefs\?.*hl=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/.*(google\.).*\/appsactivity\/.*/,
			/.*(google\.).*\/recaptcha\/.*/
		],
		redirections: [
			/.*google\..*\/.*url\?.*url=((https|http)[^&]*)/,
			/.*google\..*\/.*url\?.*q=((https|http)[^&]*)/
		]
	},
	'googlesyndication': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(googlesyndication)(\.[a-zA-Z]{2,}).*/,
		completeProvider: true,
		rules: [],
		exceptions: [],
		redirections: []
	},
	'doubleclick': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(doubleclick)(\.[a-zA-Z]{2,}).*/,
		completeProvider: true,
		rules: [],
		exceptions: [],
		redirections: [
			/.*doubleclick\..*\/.*tag_for_child_directed_treatment=;%3F(.*)/
		]
	},
	'globalRules': {
		urlPattern: /.*/,
		completeProvider: false,
		rules: [
			/utm_[a-zA-Z]*=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/ga_source=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/ga_medium=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/ga_term=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/ga_content=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/ga_campaign=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/ga_place=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/yclid=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/_openstat=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/fb_action_ids=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/fb_action_types=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/fb_source=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/fb_ref=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/fbclid=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/action_object_map=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/action_type_map=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/action_ref_map=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/gs_l=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/mkt_tok=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/hmb_campaign=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/hmb_medium=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/hmb_source=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/[\?|&]ref[\_]?=[^\/|\?|&]*/,
			/\?$/,
			/\&$/
		],
		exceptions: [
			/.*([\.]?matrix\.org)(\/_matrix)\/.*/,
			/.*([\.]?prismic\.io).*/,
			/.*([\.]?gitlab\.com).*/,
			/.*([\.]?gcsip\.com).*[\?|&]ref[\_]?=[^\/|\?|&]*.*/,
			/.*([\.]?cloudflare\.com).*/,
			/.*([\.]?tv2\.no)(\/api)\/.*/
		],
		redirections: []
	},
	'adtech': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(adtech)(\.[a-zA-Z]{2,}).*/,
		completeProvider: true,
		rules: [],
		exceptions: [],
		redirections: []
	},
	'contentpass.net': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(contentpass\.net).*/,
		completeProvider: true,
		rules: [],
		exceptions: [],
		redirections: []
	},
	'bf-ad': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(bf-ad)(\.[a-zA-Z]{2,}).*/,
		completeProvider: true,
		rules: [],
		exceptions: [],
		redirections: []
	},
	'amazon-adsystem': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(amazon-adsystem)(\.[a-zA-Z]{2,}).*/,
		completeProvider: true,
		rules: [],
		exceptions: [],
		redirections: []
	},
	'adsensecustomsearchads': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(adsensecustomsearchads)(\.[a-zA-Z]{2,}).*/,
		completeProvider: true,
		rules: [],
		exceptions: [],
		redirections: []
	},
	'youtube': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(youtube)(\.[a-zA-Z]{2,})(.*\?.*)/,
		completeProvider: false,
		rules: [
			/feature=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/gclid=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/kw=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'facebook': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(facebook)(\.[a-zA-Z]{2,})(.*\?.*)/,
		completeProvider: false,
		rules: [
			/hc_[a-zA-Z_\[\]0-9]*=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/[a-zA-Z]*ref[a-zA-Z]*=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/__tn__=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/eid=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/__xts__%5B[0-9]%5D=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [
			/.*(facebook\.)\w{2,}.*(\/plugins\/).*/
		],
		redirections: [
			/.*l\.facebook\..*\/.*l\.php\?.*u=((https%3A%2F%2F|http%3A%2F%2F)[^&]*)/
		]
	},
	'twitter': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(twitter)(\.[a-zA-Z]{2,})(.*\?.*)/,
		completeProvider: false,
		rules: [
			/(ref_)?src=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'reddit': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(reddit)(\.[a-zA-Z]{2,})(.*\?.*)/,
		completeProvider: false,
		rules: [],
		exceptions: [],
		redirections: [
			/out\.reddit\.\w{2,}\/.*url=([^&]*)/
		]
	},
	'netflix': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(netflix)(\.[a-zA-Z]{2,})(.*\?.*)/,
		completeProvider: false,
		rules: [
			/trackId=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/tctx=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/jb[a-zA-Z]*=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'techcrunch': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?([\.]?techcrunch\.com)(.*\?.*)/,
		completeProvider: false,
		rules: [
			/ncid=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/sr=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/sr_share=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/guccounter=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/guce_referrer_[a-z]+=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'bing': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(bing)(\.[a-zA-Z]{2,})(.*\?.*)/,
		completeProvider: false,
		rules: [
			/cvid=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/form=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/sk=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/sp=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/sc=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/qs=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/qp=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'tweakers': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(tweakers\.net)(.*\?.*)/,
		completeProvider: false,
		rules: [
			/nb=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/u=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'twitch': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(twitch)(\.[a-zA-Z]{2,})(.*\?.*)/,
		completeProvider: false,
		rules: [
			/tt_medium=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/tt_content=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'vivaldi': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(vivaldi\.com)(.*\?.*)/,
		completeProvider: false,
		rules: [
			/pk_campaign=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/pk_kwd=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'indeed': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(indeed\.com)(.*\?.*)/,
		completeProvider: false,
		rules: [
			/from=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/alid=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/[a-zA-Z]*tk=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'hhdotru': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(hh\.ru)(.*\?.*)/,
		completeProvider: false,
		rules: [
			/vss=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/t=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/swnt=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/grpos=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/ptl=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/stl=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/exp=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/plim=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'ebay': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(ebay)(\.[a-zA-Z]{2,})(.*\?.*)/,
		completeProvider: false,
		rules: [
			/_trkparms=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/_trksid=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/_from=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'cnet': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(cnet\.com)(.*\?.*)/,
		completeProvider: false,
		rules: [
			/ftag=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'imdb.com': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(imdb\.com)(.*\?.*)/,
		completeProvider: false,
		rules: [
			/ref_=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/pf_rd_[a-zA-Z]*=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'govdelivery.com': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(govdelivery\.com)(.*\?.*)/,
		completeProvider: false,
		rules: [],
		exceptions: [],
		redirections: [
			/.*links\.govdelivery\.com.*\/track\?.*(http:\/\/.*)/,
			/.*links\.govdelivery\.com.*\/track\?.*(https:\/\/.*)/
		]
	},
	'walmart.com': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(walmart\.com)(.*\?.*)/,
		completeProvider: false,
		rules: [
			/u1=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/ath[a-zA-Z]*=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'net-parade.it': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(net\-parade\.it)(.*\?.*)/,
		completeProvider: false,
		rules: [
			/pl=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'prvnizpravy.cz': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(prvnizpravy\.cz)(.*\?.*)/,
		completeProvider: false,
		rules: [
			/xid=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'youku.com': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(youku\.com)(.*\?.*)/,
		completeProvider: false,
		rules: [
			/spm=[^\/|\?|&]*(\/|&(amp;)?)?/,
			/tpa=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'nytimes.com': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(nytimes\.com)(.*\?.*)/,
		completeProvider: false,
		rules: [
			/smid=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'tchibo.de': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(tchibo\.de)(.*\?.*)/,
		completeProvider: false,
		rules: [
			/wbdcd=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'steam': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(steampowered\.com)(.*\?.*)/,
		completeProvider: false,
		rules: [
			/snr=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	},
	'disq.us': {
		urlPattern: /(https:\/\/|http:\/\/)([a-zA-Z0-9-]*\.)?(disq\.us)(.*\?.*)/,
		completeProvider: false,
		rules: [],
		exceptions: [],
		redirections: [
			/.*disq\.us.*\/.*url\?.*url=((https%3A%2F%2F|http%3A%2F%2F).*)%3A/
		]
	},
	'mozaws.net': {
		urlPattern: /https?:\/\/outgoing\.prod\.mozaws\.net\/.*/,
		completeProvider: false,
		rules: [],
		exceptions: [],
		redirections: [
			/https?:\/\/[^/]+\/v1\/[0-9a-f]{64}\/(.*)/
		]
	},
	'shutterstock.com': {
		urlPattern: /https?:\/\/([a-zA-Z0-9-]*\.)?(shutterstock\.com)(.*\?.*)/,
		completeProvider: false,
		rules: [
			/src=[^\/|\?|&]*(\/|&(amp;)?)?/
		],
		exceptions: [],
		redirections: []
	}
};